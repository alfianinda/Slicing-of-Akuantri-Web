import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Content4 extends Component {
    render() {
        return (
            <div>
                <div className="grid-container3">
                    <div className="grid-item1">
                    <img src={require("./../assets/icon1.png")} alt="icon1" />
                    </div>
                    <div className="grid-item1">
                    <img src={require("./../assets/icon2.png")} alt="icon2" />
                    </div>
                    <div className="grid-item1">
                    <img src={require("./../assets/icon3.png")} alt="icon3" />
                    </div>  
                </div>
            </div>
        )
    }
}

