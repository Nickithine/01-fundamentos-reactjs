import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

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
            author="Dominique Ithina" 
            content="A big text here to explain something about react" 
          />
        </main>
      </div>
    </>
  )
}