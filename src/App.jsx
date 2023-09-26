import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

export function App() {

  return (
    <>

      <Header />
      <Post 
        author="Dominique Ithina" 
        content="A big text here to explain something about react" 
      />
      <Post 
        author="Marcelo Junior" 
        content="A big text here to explain something about biology" 
      />
    </>
  )
}