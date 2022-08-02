import React, { useState, useEffect } from 'react';
import query from '../../data/getAllBlogs';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState({ isError: false, errorMessage: '' });

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/kbtjgpgyvgm2/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 6q7XglaVJ1ckKH4VI18Luk1dc0JeH8G3WgPTt_APuY8'
        },
        body: JSON.stringify({ query })
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error('ERROR', errors);
          setError(errors);
        }

        setBlogs(data.blogCollection.items);
        setIsLoading(false);
      });
  }, []);

  if (error.isError) return <h5>{error.errorMessage}</h5>;
  if (isloading) return <h5>Loading...</h5>;

  return (
    <>
      <h1 className="text-center fw-bold mb-3">I try to write sometimes</h1>
      {blogs.map((blog) => (
        <BlogCard
          title={blog.title}
          categories={blog.category}
          key={blog.title}
          content={blog.content}
          publishedAt={blog.sys.firstPublishedAt}
          slug={blog.slug}
        />
      ))}
    </>
  );
}
