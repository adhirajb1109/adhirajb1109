import React from 'react'
import { useState, useEffect } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export default function Blogs() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://api.hashnode.com/'
    });
    const [blogs, setBlogs] = useState([]);
    async function fetchPosts() {
        const { data } = await client.query({
            query: gql`
            query {
              user(username:"adhirajwrites") {
                publication {
                    posts {
                       title
                       brief
                       slug
                    }
                }
            }
        }`
        });
        setBlogs(data.user.publication.posts)
    }
    useEffect(() => {
        fetchPosts();
    })
    return (
        <div className="animate__animated animate__lightSpeedInLeft work">
            <h2 className="my-4 pb-4 mx-4 border-bottom border-primary border-2">
                Blogs
            </h2>
            {blogs.map((blog) => (
                <div
                    className="card my-4 mx-4 d-inline-block"
                    style={{ width: "21rem" }}
                    key={blog.title}
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            <a
                                className="text-decoration-none text-dark"
                                href={`https://adhirajwrites.hashnode.dev/${blog.slug}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {blog.title}
                            </a>
                        </h5>
                        <h6 className="card-text mb-2 text-muted">
                            {blog.brief.substring(0, 80) + " ..."}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
}
