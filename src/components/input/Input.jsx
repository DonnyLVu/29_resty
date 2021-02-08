import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ url, selectedMethod, body, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text"
          name="url"
          placeholder="This is the URL"
          value={url}
          onChange={onChange} />

        <div>
          <label htmlFor="get">GET</label>
          <input type="radio"
            name="method"
            value="GET"
            checked={selectedMethod === 'GET'}
            onChange={onChange} />

          <label htmlFor="post">POST</label>
          <input type="radio"
            name="method"
            value="POST"
            checked={selectedMethod === 'POST'}
            onChange={onChange} />

          <label htmlFor="put">PUT</label>
          <input type="radio"
            name="method"
            value="PUT"
            checked={selectedMethod === 'PUT'}
            onChange={onChange} />

          <label htmlFor="delete">DELETE</label>
          <input type="radio"
            name="method"
            value="DELETE"
            checked={selectedMethod === 'DELETE'}
            onChange={onChange} />
        </div>

        <button>Hit it</button>

        <textarea
          placeholder="Raw JSON"
          name="body"
          value={body}
          onChange={onChange}></textarea>
      </form>
    </>
  );
};
Input.propTypes = {
  url: PropTypes.string.isRequired,
  selectedMethod: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Input;
