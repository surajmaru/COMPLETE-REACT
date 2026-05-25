const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {

    if(action.type === "increment"){
        return {
            counter: state.counter + 1,
        }
    }
    if(action.type === "decrement"){
        return {
            counter: state.counter - 1,
        }
    }

    return state;

};

// redux store
const store = redux.createStore(counterReducer);

// subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

//  set the subscriber
store.subscribe(counterSubscriber);

store.dispatch( { type: "increment" } );
store.dispatch( { type: "decrement" } );
