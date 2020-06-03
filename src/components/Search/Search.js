import React from 'react';
import { connect } from 'react-redux';

import { getSearchResults } from './action';
import '../../index.scss';

const Search = props => {
  return (
    <div className="search">
      <input
        onChange={event => onInputChange(event, props)}
        placeholder="search gifs..."
      />
    </div>
  );
};

async function onInputChange(event, props) {
  if (event.target.value.trim() !== '') {
    props.getSearchResults(event.target.value);
  }
}

const mapDispatchToProps = {
  getSearchResults,
};

export default connect(null, mapDispatchToProps)(Search);
