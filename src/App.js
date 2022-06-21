import logo from "./logo.svg"
import "./App.css"
import { CreatePost } from "./CreatePost"
import { PostList } from "./PostList"

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      <h1>Post list</h1>
      <PostList />
    </div>
  )
}

export default App
