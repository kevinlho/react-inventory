import React from 'react';

export class ProductDelete extends React.Component{
    constructor(props){
        super();
        this.state = {
            myName: props.age
        }
    }
    render(){
        return(
            <div>
                <h1>Product Delete {this.state.myName}</h1>

            </div>
        );
    }
}