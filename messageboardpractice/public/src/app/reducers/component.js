/**
 * Created by shen on 2016/12/26.
 */
import * as types from '../constents/ActionTypes'

const initialState = {
    comment: []
}

export default function comment(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST:
            return Object.assign({}, state, {
                comment: action.list
            })
    }
}