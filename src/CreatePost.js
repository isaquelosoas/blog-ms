import axios from "axios"
import React, { useState } from "react"

export function CreatePost() {
  const [title, setTitle] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    await axios.post("https://posts.com/posts/create", {
      title
    })

    setTitle("")
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            on
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}
