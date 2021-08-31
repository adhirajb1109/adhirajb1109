import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export const Home = () => {
  const style = {
    height: "300px",
    width: "300px",
    marginLeft: "150px",
    marginTop: "20px",
  };
  const style1 = {
    height: "50px",
  };
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=AdhirajBhatia"
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, [projects]);
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
                    posts(page:0) {
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
    <div className="mx-4 animate__animated animate__lightSpeedInLeft">
      <div className="pb-5 border-bottom border-primary border-2">
        <h2 className="my-5 text-dark d-inline-block kh">
          Hi ! I am Adhiraj Bhatia 👋
          <h2 className="my-3 lh-lg">
            I am a <em>Full Stack Developer</em> from India{" "}
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/275/flag-india_1f1ee-1f1f3.png"
              alt="Indian Flag"
              style={style1}
            ></img>
          </h2>
        </h2>

        <img
          src="https://i.ibb.co/MPB7kq5/download.png"
          alt="coding "
          style={style}
          className="svg"
        ></img>
        <br />
        <a href="https://github.com/AdhirajBhatia">
          <button className="btn btn-light btn-lg ">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-5 h-5 mr-2 align-text-top"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
            <span className="mx-2">GitHub</span>
          </button>
          <br />
          <br />
        </a>
        <a href="mailto:adhirajb1109@gmail.com">
          <button className="btn btn-primary btn-lg">
            <span>Get In Touch</span>
          </button>
        </a>
      </div>
      <div className="pb-4 border-bottom border-primary border-2">
        <h2 className="my-4">About :</h2>
        <h5 className="lh-lg">
          Hi ! I am Adhiraj Bhatia 👋 . I 'm a dedicated pre-teen full stack web
          developer from India . Since the day I started learning coding , I
          have learned a lot of new skills . The universe of my skills will be
          always expanding .
        </h5>
      </div>
      <div className="pb-5 border-bottom border-primary border-2">
        <h2 className="mt-4">Technologies :</h2>
        <Accordion />
      </div>
      <div className="pb-4 border-bottom border-primary border-2">
        <h2 className="mt-4">Projects :</h2>
        {projects.map((project) => (
          <div
            className="card mb-4 me-5 mt-3 d-inline-block"
            style={{ width: "21rem" }}
            key={project.repo}
          >
            <div className="card-body">
              <h5 className="card-title">
                <a
                  className="text-decoration-none text-dark"
                  href={project.link}
                >
                  {project.repo.replaceAll("-", " ")}
                </a>
              </h5>
              <h6 className="card-text mb-2 text-muted">
                {project.description}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-5">
        <h2 className="mt-4">Recent Blogs :</h2>
        {blogs.map((blog) => (
          <div
            className="card mb-4 me-5 mt-4 d-inline-block"
            style={{ width: "21rem" }}
            key={blog.title}
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
                {blog.brief.substring(0, 80) + " ..."}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
