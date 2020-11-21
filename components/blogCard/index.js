import Link from "next/link"
import styled from "styled-components"
import theme from "../layout/theme"

import { StyledAnchor } from "../Anchor"

const BlogCardStyled = styled.div``

const BlogCard = ({ post }) => {
  const date = new Date(post.data.frontmatter.date)
  const dateOptions = { year: "numeric", month: "long", day: "numeric" }
  return (
    <Link href={`blog/${post.fileName}`}>
      <StyledAnchor>
        <BlogCardStyled>
          <h1>{post.data.frontmatter.title}</h1>
          <h2>{`${date.toLocaleDateString("en-US", dateOptions)} | ${
            post.data.frontmatter.author
          }`}</h2>
          <p>{post.data.frontmatter.description}</p>
        </BlogCardStyled>
      </StyledAnchor>
    </Link>
  )
}

export default BlogCard
