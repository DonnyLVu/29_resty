import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css';

const Results = ({ results }) => {
  return (
    <div className={styles.Results}>
      {results}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.string.isRequired
};

export default Results;
