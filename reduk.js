const createStore = (reducer) =>{
    let state;
    const listeners = [];

    const getState = () => state;

    // const dispatch = (action) =>{
    //    state = reducer(state, action);
    //    listeners.push()
    // }

    // const subscribe = (listener)=>{
    //     listeners.push(listener);
    // }

    return {getState, dispatch, subscribe};
}

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
   <div>
       <h1>{value}</h1>
       <button onClick={onIncrement}>+</button>
       <button onClick={onDecrement}>-</button>
   </div>
);

const reducer = (state=0, action) => {
   switch(action.type){
       case 'INCREMENT':
          return state + 1;
   }
}