import React from "react"

export const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content
    if (comment.status === "pending") {
      content = "Comment is awaiting approval"
    }
    if (comment.status === "rejected") {
      content = "This comment is not appropriate"
    }
    if (comment.status === "approved") {
      content = comment.content
    }

    return <li key={comment.id}>{content}</li>
  })

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  )
}
