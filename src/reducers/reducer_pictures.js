import{ FETCH_PICTURES } from '../actions/index'

export default function (state=null, action) {
    console.log(action);
    switch (action.type){
    case FETCH_PICTURES:
    //state.concat([action.payload.data])
        return [action.payload.data, ...state];
    }
    return state;
}

