import React, { useState } from 'react';
import Tag from './Tag';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';

// const showFirstWords = (str, numberOfWords) => {
//   return str.split(' ').slice(0, numberOfWords).join(' ') + ' ...';
// };

function BlogCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        isOpen
          ? 'card m-3 blog-card blog-card-open border-0 shadow'
          : 'card m-3 blog-card blog-card-closed border-0 shadow'
      }>
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Posted on {moment(props.publishedAt).format('D MMM YYYY')}
        </h6>
        <p className="card-text">
          {props.categories.map((category) => (
            <Tag tagName={category} key={category} />
          ))}{' '}
        </p>
        <p className={isOpen ? 'card-text text-body-open' : 'card-text text-body-closed'}>
          {documentToReactComponents(props.content.json)}
        </p>
      </div>
      <div className="card-body">
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-dark rounded-pill mx-1">
          {isOpen ? 'Collapse ◀' : 'Expand ▶'}
        </button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  content: PropTypes.object,
  publishedAt: PropTypes.string
};

export default BlogCard;