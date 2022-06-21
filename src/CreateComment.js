import axios from "axios"
import react, { useState } from "react"

export const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`https://posts.com/posts/${postId}/comments`, {
        content
      })
    } catch (e) {
      console.log(e)
    }
    setContent("")
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Post</button>
      </form>
    </div>
  )
}
