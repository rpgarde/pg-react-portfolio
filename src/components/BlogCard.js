import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';

function BlogCard(props) {
  return (
    <div className={'card m-3 blog-card blog-card-closed border-0 shadow'}>
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
        <p className={'card-text text-body-closed'}>
          {documentToReactComponents(props.content.json)}
        </p>
      </div>
      <div className="card-body">
        <Link to={props.slug}>
          <button className="btn btn-dark rounded-pill mx-1">View Blog ▶</button>
        </Link>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  content: PropTypes.object,
  publishedAt: PropTypes.string,
  slug: PropTypes.string
};

export default BlogCard;
