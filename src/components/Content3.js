import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Content3 extends Component {
    render() {
        return (
            <div>
                <div className="header2">
                    <h1>Testimonial</h1>
                    <hr style={{width: '50px', marginLeft: '585px', marginTop: '-15px', border: '1px solid rgb(91, 204, 91)'}} />
                    <p>Mereka yang telah menghemat waktunya untuk mengantri.</p>
                </div>

                <div className="grid-container2">
                    <div className="grid-item">
                        <img src={require("./../assets/gambarOrang1.png")} alt="gambarOrang1" />
                    </div>
                    <div className="grid-item">
                        <img src={require("./../assets/gambarOrang2.png")} alt="gambarOrang2" />
                    </div>
                    <div className="grid-item">
                        <img src={require("./../assets/gambarOrang3.png")} alt="gambarOrang2" />
                    </div>  
                </div>
            </div>
        )
    }
}

