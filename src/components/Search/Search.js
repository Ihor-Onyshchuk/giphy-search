import React from 'react';
import { connect } from 'react-redux';

import { getSearchResults } from './action';

const Search = (props) => {
  return (
    <>
      <input onChange={(event) => onInputChange(event, props)} />
    </>
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
