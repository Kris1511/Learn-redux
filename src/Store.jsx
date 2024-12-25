import { createStore } from "redux";

// Initial state
const initialState = {
    user: {
        name: "John Doe",
        age: 25,
        balance: 25000
    }
};

// Action creator
export const updateWallet = (amount) => ({
    type:"UPDATE_WALLET",
    payload: amount
});


// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case "UPDATE_WALLET":
            return {
                // ...state,
                user: {
                    name: state.user.name,
                    age: state.user.age,
                    balance: state.user.balance - action.payload
                }
            };

            // don't make any mistake here in the default case*****
            default:

                return state;
    }
}

const store = createStore(reducer);

export default store;