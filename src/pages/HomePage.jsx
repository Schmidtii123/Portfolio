import { useEffect, useState } from "react";
import Home from "../components/Home"

export default function HomePage() {

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
            <h1 className="velkommen">Velkommen, Jeg hedder Emil</h1>
            {posts.map(post =>(
                <Home key={post.id} post={post} />
            ))}
            
        </section>
    );
}