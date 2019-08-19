import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Hero extends Component {
    render() {
        return (
            <div>
                <div class="header" id="page1">
                    <h1>Akuantri Indonesia</h1>
                    <p>
                        Kami sadar menunggu adalah hal yang membosankan, dan kami juga sadar akan ada banyak waktu terbuang
                        begitu saja karna harus menunggu. Untuk itu, Akuantri hadir untuk membuat waktu berharga Anda
                        tidak hilang begitu saja. Kami akan menggantikan antrian Anda, karna kami sadar bahwa
                        Waktu Anda sangat Berharga.
                    </p>
                    
                    <div class="flex-logo">
                        <div><img src="assets/logo1.png" alt="logo1" class="kotakHitam"/></div>
                        <button class="kotakPutih"><b>PELAJARI &#8594;</b></button>
                    </div>

                </div>
            </div>
        )
    }
}
