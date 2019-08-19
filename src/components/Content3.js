import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Content3 extends Component {
    render() {
        return (
            <div>
                <div className="header2">
                    <h1>Test<u>imo</u>nial</h1>
                    <p>Mereka yang telah menghemat waktunya untuk mengantri.</p>
                </div>

                <div className="grid-container2">
                    <div className="grid-item">
                        <img src="assets/gambarOrang1.png" alt="gambarOrang1" />
                    </div>
                    <div className="grid-item">
                        <img src="assets/gambarOrang2.png" alt="gambarOrang2" />
                    </div>
                    <div className="grid-item">
                        <img src="assets/gambarOrang3.png" alt="gambarOrang2" />
                    </div>  
                </div>
            </div>
        )
    }
}
