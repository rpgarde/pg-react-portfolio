import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
import query from '../../data/query';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BlogCard from '../BlogCard';
// eslint-disable-next-line no-undef
// const axios = require('axios');

// https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState({ isError: false, errorMessage: '' });

  // const getBlogs = async () => {
  //   try {
  //     console.log('getting blog');
  //     const response = await axios.get('https://pg-portfolio-backend.herokuapp.com/api/blogs', {
  //       headers: {
  //         Authorization:
  //           'Bearer 861299f2fb1d060053c045cc9c41a0031c013ef9ac0e263c4cbdcc7ab656ccea8f035248efa49a2ba481d6aff6dc69a6f39ef6877e9b478ddf662ad3e438aa6cd00ff266c15b2a9a0b18efdaeaf0e0664cb2938dd376b362f9379402f1987b2391b075a7a40e271791c92e39a371aa3044906fab3b08347206e7ea6ceac7c105'
  //       }
  //     });
  //     setBlogs(response.data.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setError({ isError: true, errorMessage: err.toString() });
  //   }
  // };

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/kbtjgpgyvgm2/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authenticate the request
          Authorization: 'Bearer 6q7XglaVJ1ckKH4VI18Luk1dc0JeH8G3WgPTt_APuY8'
        },
        // send the GraphQL query
        body: JSON.stringify({ query })
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error('ERROR', errors);
          setError(errors);
        }

        // rerender the entire component with new data
        setBlogs(data.blogCollection.items);
        setIsLoading(false);
      });
  }, []);

  if (error.isError) return <h5>{error.errorMessage}</h5>;
  if (isloading) return <h5>Loading...</h5>;

  return (
    <>
      <h1 className="mb-3">Welcome to my blog</h1>
      {blogs.map((blog) => (
        <BlogCard
          title={blog.title}
          categories={blog.category}
          key={blog.title}
          content={blog.content}
        />
      ))}
    </>
  );
}
