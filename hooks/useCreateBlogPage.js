import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"
import slugify from "slugify"
import { FORM_ERROR } from "final-form"
import { removeInvalidChars } from "../utils/removeInvalidChars"

const useCreateBlogPage = (allBlogs) => {
  const router = useRouter()
  const cms = useCMS()
  usePlugins([
    {
      __type: "content-creator",
      name: "Make a new blog post",
      fields: [
        {
          name: "title",
          label: "Title",
          component: "text",
          required: true,
          validate(value, allValues, meta, field) {
            if (!value) {
              return "A title is required"
            }
            if (allBlogs.some((post) => post.fileName === slugify(value, { lower: true }))) {
              return "Sorry the blog title must be unique"
            }
          },
        },
        {
          name: "date",
          label: "Date",
          component: "date",
          dateFormat: "DD MMMM, YYYY",
          timeFormat: false,
          required: true,
        },
        {
          name: "description",
          label: "Description",
          component: "textarea",
          required: true,
        },
        {
          label: "Feature Image",
          name: "featureImg",
          component: "image",
          parse: (media) => `/images/${media.filename}`,
          uploadDir: () => "public/images/",
          previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
          required: true,
        },
        {
          name: "publish",
          label: "Publish the blog to go live?",
          component: "toggle",
          default: false,
        },
      ],
      onSubmit: async (frontMatter) => {
        const github = cms.api.github
        const slug = removeInvalidChars(slugify(frontMatter.title, { lower: true }))
        const fileRelativePath = `content/blog/${slug}.json`
        frontMatter.date = frontMatter.date || new Date().toString()
        return await github
          .commit(
            fileRelativePath,
            null,
            JSON.stringify({
              ...frontMatter,
              bgColor: "#00E9A3",
              publish: false,
              blocks: [
                {
                  bannerText: "",
                  bannerText1: frontMatter.title,
                  bannerText2: "",
                  bannerImg: frontMatter.featureImg,
                  _template: "banner",
                },
              ],
            }),
            "Add new blog page"
          )
          .then((response) => {
            setTimeout(() => router.push(`/blog/${slug}`), 1500)
          })
          .catch((e) => {
            return { [FORM_ERROR]: e }
          })
      },
    },
  ])
}

export default useCreateBlogPage
