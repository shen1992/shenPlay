/**
 * Created by shen on 2016/12/26.
 */
import * as types from '../constents/ActionTypes'

function receiveList(list) {
    return {
        type: types.FETCH_LIST,
        list
    }
}

export function fetchList() {
    return (dispatch, getState) => {

    }
}