import { useEffect, useState } from "react";
import Projects from "../components/Projects.jsx";

export default function ProjectPage() {

    const [posts, setposts] = useState([]);
    useEffect(() => {

        async function getPosts(){
            const url="https://wp.brozat.dk/wp-json/wp/v2/posts?embed&categories=4";
            const response = await fetch(url);
            const data = await response.json();
            setposts(data);
        }
        getPosts();
    }, []);
    
    
        return (
            <section className="page">
                <h1>Mine oplysninger</h1>
                {posts.map(post =>(
                    <Projects key={post.id} post={post} />
                ))}
            </section>
        );
}