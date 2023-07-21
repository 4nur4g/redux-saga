import { call, put, takeEvery } from "redux-saga/effects";
import {getCatsFetch, getCatSuccess} from "./catSlice.js";

function* workGetCatsFetch() {
  console.log("HEreHere")
  const cats = yield call(() => fetch("http://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0);
  yield put(getCatSuccess(formattedCatsShortened))
}

function* catSaga() {

  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
