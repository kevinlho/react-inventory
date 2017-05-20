// import React from 'react';
// import {ProductDelete} from './ProductDelete';
//
// export class ProductAdd extends React.Component {
//     constructor(){
//         super();
//         this.state ={
//             name: "Kevin",
//             age: "22"
//         }
//     }
//
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <ProductDelete age={this.state.age} />
//             </div>
//         );
//     }
// }

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

const initialState = {
    myName: "Kevin",
    myAge: 10,
    lastValue: []
};

const addNumber = (varX)=>{
    return varX;
}

const ageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                myAge: state.myAge += action.payload,
                lastValue: [...state.lastValue, action.payload],
            };
            break;
        case "SUBTRACT":
            break;
    }
    return state;
};

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                myName: state.myName + action.payload,
            };
            break;
        case "SUBTRACT":
            break;
    }
    return state;
};


const store = createStore(combineReducers({ageReducer: ageReducer, nameReducer:nameReducer}));

store.subscribe(
    ()=>{console.log("xD:",store.getState())}
    )

store.dispatch({
    type: "ADD",
    payload: addNumber(100)
});

store.dispatch({
    type: "ADD",
    payload: 11
});

store.dispatch({
    type: "SET_NAME",
    payload: "Susanto"
})