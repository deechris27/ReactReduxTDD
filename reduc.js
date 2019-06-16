import createStore from 'redux';

const reducer = (state, action) => {
    switch (action.type){
        case "ADD":
           state = state + action.payload;
           break;
        case "SUBTRACT":
           state = state - action.payload;
           break;
        default:
           return state;
    }
};

const store = createStore(reducer, 1);

store.subscribe(()=>{
    console.log("from the store", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});