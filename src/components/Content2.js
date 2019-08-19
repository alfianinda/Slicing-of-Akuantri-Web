import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Content2 extends Component {
    render() {
        return (
            <div>
                <div className="header1" id="page3">
                <h1>Frequently <u>Ask</u> Questions</h1>
                <p>Pertanyaan yang Sering ditanyakan Tentang Akuantri.</p>
                </div>

                <div className="grid-container1">
                    <div className="grid-item">
                        Apa &amp; siapa itu Liner Akuantri<span style={{float: 'right'}}><b>+</b>
                        </span></div>
                    <div className="grid-item">
                        Bagaimana cara membayar layanan Akuantri?<span style={{float: 'right'}}><b>+</b></span>
                    </div>
                    <div className="grid-item">
                        Jasa apa saja yang diberikan Akuantri?<span style={{float: 'right'}}><b>+</b></span>
                    </div>  
                    <div className="grid-item">
                        Berapa tarif dasar layanan Akuantri?<span style={{float: 'right'}}><b>+</b></span>
                    </div>
                    <div className="grid-item">
                        Bagaimana cara pemesanan Liner Akuantri?<span style={{float: 'right'}}><b>+</b></span>
                    </div>
                    <div className="grid-item">
                        Berapa jumlah Liner yang dapat dipesan?<span style={{float: 'right'}}><b>+</b></span>
                    </div>
                </div>
            </div>
        )
    }
}
