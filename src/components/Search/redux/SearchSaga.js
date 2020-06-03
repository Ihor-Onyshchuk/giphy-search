import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

import types from '../types';
import { setSearchResult } from '../action';

function* setSearch({ value }) {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aeJeMs1msX7iwlMLKUwZmje77f7iud1s&q=${value}&limit=20`;
    const data = yield axios.get(url);
    return yield put(setSearchResult(data.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* watchSearch() {
  yield takeLatest(types.watchGetSearchResults, setSearch);
}

export default watchSearch;
