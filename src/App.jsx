import './reset.css'
import './App.css'
import Nav from './components/Nav'
import Velkommen from './components/Velkommen'
import OmMig from './components/OmMig'
import { useEffect, useState } from "react";
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const staticPosts = [
    {
      id: 1,
      title: { rendered: "Om Mig" },
      content: { rendered: "<p>Hej, jeg hedder Emil og jeg er 25 år gammel...</p>" }
    }
  ];

  const [posts] = useState(staticPosts);

  return (
    <section>



      <Nav/>



      <article>
        <Velkommen/>
        <Projects id="project" />


      </article>
      <div id="about">
        {posts.map((post) => (
          <OmMig key={post.id} post={post} />
        ))}

      </div>
      <Contact />
    </section>
  )
}

export default App
