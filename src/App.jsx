import './reset.css'
import './App.css'
import Nav from './components/Nav'
import Velkommen from './components/Velkommen'
import OmMig from './components/OmMig'
import { useEffect, useState } from "react";
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  const [posts, setposts] = useState([]);
  useEffect(() => { 
    async function getData(){
      const response = await fetch("https://wp.brozat.dk/wp-json/wp/v2/posts?_embed&categories=5");
    const data = await response.json();
    setposts(data);
    }
    getData();
  },[]);

  return (

<section>



    <Nav/> 
    <article>
      <Velkommen/>
      <Projects id="project"/>


      </article>
      <div id="about"> 
        {posts.map((post) => (
          
          <OmMig key={post.id} post={post} />
          ))}
          
      </div>
      <Contact/>
     

      </section>
  )
}

export default App
