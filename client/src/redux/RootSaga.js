import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './Shop/Shop.sagas';
import { userSagas } from './User/User.sagas';
import { cartSagas } from './Cart/Cart.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas)
  ]);
};