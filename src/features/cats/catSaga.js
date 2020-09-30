import { call, put, takeLatest } from 'redux-saga/effects';
import { catActions } from './catSlice';

function* fetchAllCats() {
  try {
    const data = yield call(() => fetch('https://catfact.ninja/facts?limit=10').then((res) => res.json()));
    yield put(catActions.fetchAllSuccess(data));
  } catch (error) {
    const { message } = error;
    yield put(catActions.fetchAllFail({ message }));
  }
}

export default function* catSaga() {
  yield takeLatest(catActions.fetchAllRequest, fetchAllCats);
}
