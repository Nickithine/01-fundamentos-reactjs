import { Post } from "./Post"

export function App() {

  return (
    <>
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