import axios from "axios"
import react, { useEffect, useState } from "react"
import { CommentList } from "./CommentList"
import { CreateComment } from "./CreateComment"

export const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get("https://posts.com/posts")
    setPosts(res.data)
    console.log(res)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className="card">
        <div className="card-body">
          <h2>{post.title}</h2>
          <CommentList comments={post.comments} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    )
  })
  return (
    <div>
      <ul>{renderedPosts}</ul>
    </div>
  )
}
