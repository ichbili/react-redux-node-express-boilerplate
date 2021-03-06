import { merge } from 'ramda';
import { FETCH_SERVER_SUCCESS, FETCH_SERVER_FAILURE } from '../actionTypes';
const initialState = {
    express: 'Before connecting to the server',
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_SERVER_SUCCESS:
            return merge(state, payload);
        case FETCH_SERVER_FAILURE:
        return merge(state, {express:'Something not workings'});
        default: return state;
    }
}