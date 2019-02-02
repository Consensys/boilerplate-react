import { SET_JOKE } from "../../actions/jokes";

const initialState = {
    currentJoke: ""
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_JOKE:
            return {
                ...state,
                currentJoke: payload
            };
        default:
            return state;
    }
};
