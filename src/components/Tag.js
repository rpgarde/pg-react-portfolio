import React from 'react';
import PropTypes from 'prop-types';

const style = {
  marginRight: '2px'
};

function Tag(props) {
  return (
    <div className="d-inline-block badge bg-dark rounded-pill" style={style}>
      {props.tagName}
    </div>
  );
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired
};
export default Tag;
