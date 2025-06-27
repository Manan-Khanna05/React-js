const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCRIMENT") {
    newStore = { counter: store.counter + 1 };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subsriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subsriber);

store.dispatch({ type: "INCRIMENT" });
