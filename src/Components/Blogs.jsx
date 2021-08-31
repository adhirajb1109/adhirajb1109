import React from 'react'
import { useState } from 'react'
export default function Blogs() {
    async function gql(query, variables = {}) {
        const data = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        return data.json();
    }
    const articles = `
    query GetUserArticles($page: Int!) {
        user(username: "adhirajwrites") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;
    const [blogs, setBlogs] = useState([]);

    gql(articles, { page: 0 }).then((result) => {
        const articles = result.data.user.publication.posts
        setBlogs(articles);
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
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            <a
                                className="text-decoration-none text-dark"
                                href={`https://adhirajwrites.hashnode.dev/${blog.slug}`}
                                target="_blank"
                            >
                                {blog.title}
                            </a>
                        </h5>
                        <h6 className="card-text mb-2 text-muted">
                            {blog.brief.substring(0, 120) + " ..."}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
}
