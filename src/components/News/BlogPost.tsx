import React from 'react'
import { type BlogPost } from '../../utils/contentTypes'

interface BlogPostProps {
    post: BlogPost;
}

const BlogPost = ({post}: BlogPostProps) => {
  return (
    <li>BlogPost</li>
  )
}

export default BlogPost