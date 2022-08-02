import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SETPRODUCT_LIST } from './constant'

function* getProducts() {
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    yield put({ type: SETPRODUCT_LIST, data })
}

function* productSearch(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.qurry}`);
     result = yield result.json();
    console.warn("Search action Called", data);
    yield put({ type: SETPRODUCT_LIST, data:result })
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, productSearch)
}

export default productSaga;