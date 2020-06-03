import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';

const Results = props => {
  if (props.searchResults) {
    return (
      <div className='d-flex justify-content-center flex-wrap'>
        {renderSearchResults(props.searchResults)}
      </div>
    );
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
