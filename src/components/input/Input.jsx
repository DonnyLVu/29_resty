import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ url, method, body, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text"
          name="url"
          placeholder="This is the URL"
          value={url}
          onChange={onChange} />

        <div>
          <label data-testid="get">GET</label>
          <input type="radio"
            name="method"
            value="GET"
            checked={method === 'GET'}
            onChange={onChange} />

          <label htmlFor="post">POST</label>
          <input type="radio"
            name="method"
            value="POST"
            checked={method === 'POST'}
            onChange={onChange} />

          <label htmlFor="put">PUT</label>
          <input type="radio"
            name="method"
            value="PUT"
            checked={method === 'PUT'}
            onChange={onChange} />

          <label htmlFor="delete">DELETE</label>
          <input type="radio"
            name="method"
            value="DELETE"
            checked={method === 'DELETE'}
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
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Input;
