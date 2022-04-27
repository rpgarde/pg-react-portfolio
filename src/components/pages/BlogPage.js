import React, { useState, useEffect } from 'react';
import query from '../../data/getSingleBlog';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Tag from '../Tag';
import { Link } from 'react-router-dom';

export default function Blog() {
  const { blogSlug } = useParams();
  const [blog, setBlogs] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState({ isError: false, errorMessage: '' });

  useEffect(() => {
    const variables = { slug: blogSlug };
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/kbtjgpgyvgm2/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 6q7XglaVJ1ckKH4VI18Luk1dc0JeH8G3WgPTt_APuY8'
        },
        body: JSON.stringify({ query, variables })
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error('ERROR', errors);
          setError(errors);
        }

        setBlogs(data.blogCollection.items[0]);
        setIsLoading(false);
      });
  }, [blogSlug]);

  if (error.isError) return <h5>{error.errorMessage}</h5>;
  if (isloading) return <h5>Loading...</h5>;

  return (
    <div className="mb-3">
      <h1 className="fw-bold mb-3">{blog.title}</h1>
      <h6 className="mb-2 text-muted">Posted on {moment(blog.publishedAt).format('D MMM YYYY')}</h6>
      <p className="card-text">
        {blog.category.map((category) => (
          <Tag tagName={category} key={category} />
        ))}{' '}
      </p>
      <p className={'card-text'}>{documentToReactComponents(blog.content.json)}</p>
      <Link to={'/blog'}>
        <button className="btn btn-dark rounded-pill mx-1">Back to Blogs ◀</button>
      </Link>
    </div>
  );
}
