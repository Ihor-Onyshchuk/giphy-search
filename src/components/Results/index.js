import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';

const Results = props => {
  if (props.searchResults) {
    return <>{renderSearchResults(props.searchResults)}</>;
  }
  return null;
};

const renderSearchResults = searchResults => {
  return searchResults.map((result, i) => (
    <Result i={i} key={result.toJS().id} result={result} />
  ));
};

const mapStateToProps = state => ({
  searchResults: state.search.get('searchResults'),
});

export default connect(mapStateToProps)(Results);
