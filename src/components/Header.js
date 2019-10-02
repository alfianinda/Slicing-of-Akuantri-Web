import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="flex-container sticky">
                    <div style={{flexGrow: 1}}>
                    <img src={require("./../assets/akuantri-logo.png")} alt="akuantri-logo" />
                    </div>
                    <div style={{flexGrow: 3}} /> 
                    <div style={{flexGrow: 8}} className="flex-container">
                    <ul>
                        <li><a href="#page1">Home</a></li>
                        <li><a href="#page2">Layanan</a></li> 
                        <li><a href="#page3">FAQ</a></li>
                        <li><a href="https://akuantri.com/blog/">Blog</a></li>
                        <li><a href="https://akuantri.com/about/">Tentang Kami</a></li>
                        <li><a href="https://liner.akuantri.com/daftar/"><button className="buttoncret">Daftar Liner</button></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
