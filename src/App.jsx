import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          <Post 
            author="Dominique Ithina" 
            content="A big text here to explain something about react" 
          />
          <Post 
            author="Marcelo Junior" 
            content="A big text here to explain something about biology" 
          />
        </main>
      </div>
    </>
  )
}