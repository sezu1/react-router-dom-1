import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function PostsPage() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const response = await axios.get(url);
            setPosts(response.data);
        }
        getPosts()
    }, []);

    return (
        <div>
            <h2>Posts page</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}: {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

