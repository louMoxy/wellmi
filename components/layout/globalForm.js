export const headerForm = {
  label: "Header settings",
  fields: [
    {
      label: "Logo for light background",
      name: "header.logo.light",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Logo for dark background",
      name: "header.logo.dark",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Navigation",
      name: "header.navigation",
      component: "group-list",
      description: "Navigation List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
    {
      label: "Buttons Navigation",
      name: "header.buttons",
      component: "group-list",
      description: "Button List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
  ],
}

export const footerForm = {
  label: "Footer settings",
  fields: [
    {
      label: "Paragraph 1",
      name: "footer.footerNav.p1",
      component: "textarea",
    },
    {
      label: "Header 1",
      name: "footer.footerNav.header1",
      component: "text",
    },
    {
      label: "Header 2",
      name: "footer.footerNav.header2",
      component: "text",
    },
    {
      label: "Header 3",
      name: "footer.footerNav.header3",
      component: "text",
    },
    {
      label: "Header 4",
      name: "footer.footerNav.header4",
      component: "text",
    },
    {
      label: "Footer Logo",
      name: "footer.footerNav.logoImg",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Facebook link",
      name: "footer.footerNav.facebook",
      component: "text",
    },
    {
      label: "Instagram link",
      name: "footer.footerNav.instagram",
      component: "text",
    },
    {
      label: "Linkedin link",
      name: "footer.footerNav.linkedin",
      component: "text",
    },
    {
      label: "Twitter link",
      name: "footer.footerNav.twitter",
      component: "text",
    },
    {
      label: "Navigation section 1",
      name: "footer.footerNav.navigation1",
      component: "group-list",
      description: "Navigation List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
    {
      label: "Navigation section 2",
      name: "footer.footerNav.navigation2",
      component: "group-list",
      description: "Navigation List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
    {
      label: "Navigation section 3",
      name: "footer.footerNav.navigation3",
      component: "group-list",
      description: "Navigation List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
    {
      label: "Paragraph 2",
      name: "footer.footerNav.p2",
      component: "textarea",
    },
    {
      label: "Download images",
      name: "footer.footerNav.downloadImgs",
      component: "group-list",
      description: "Images List",
      itemProps: (item) => ({
        key: item.link,
        label: item.link,
      }),
      defaultItem: () => ({
        alt: "Image description",
        link: "/",
      }),
      fields: [
        {
          label: "Image description",
          name: "alt",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
        {
          label: "Image",
          name: "image",
          component: "image",
          parse: (media) => `/images/${media.filename}`,
          uploadDir: () => "public/images/",
          previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
        },
      ],
    },
    {
      label: "Small links",
      name: "footer.terms",
      component: "group-list",
      description: "Navigation List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
  ],
}
