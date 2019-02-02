import { START_FETCHING_JOKE, END_FETCHING_JOKE } from "../../actions/jokes";

const initialState = {
    isLoading: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case START_FETCHING_JOKE:
            return {
                ...state,
                isLoading: true
            };
        case END_FETCHING_JOKE:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
