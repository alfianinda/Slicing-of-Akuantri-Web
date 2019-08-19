import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="grid-container" id="page2">
                    <div className="left">
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;<u>Ber</u>bagai Jenis Antrian</h1>
                    <h3 style={{color: 'grey'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jangan habiskan waktu Anda untuk mengantri.</h3>
                    <ul style={{marginTop: '30px', listStyleType: 'none'}}>
                        <li>
                        <h3><span className="checkmark">✔</span>&nbsp;&nbsp;&nbsp;Layanan Kesehatan</h3>
                        <p className="paragraph">
                            Antri di Rumah Sakit, Klinik, dan Layanan kesehatan lain kini
                            bisa lebih menyenangkan.
                        </p>
                        </li>
                        <li>
                        <h3><span className="checkmark">✔</span>&nbsp;&nbsp;&nbsp;Berbagai Tiket Box</h3>
                        <p className="paragraph">
                            Tidak takut lagi kehabisan Tiket atau Diskon menarik dengan layanan Akuantri.
                        </p>
                        </li>
                        <li>
                        <h3><span className="checkmark">✔</span>&nbsp;&nbsp;&nbsp;Berbagai Restaurant</h3>
                        <p className="paragraph">
                            Jangan lewatkan Diskon atau Opening Restaurant kesukaan Anda, Kami yang akan Antri.
                        </p>
                        </li>
                        <li>
                        <h3><span className="checkmark">✔</span>&nbsp;&nbsp;&nbsp;Salon atau Barbershop</h3>
                        <p className="paragraph">
                            Kami yang akan menunggu giliran Anda di Salon atau Barbershop Kesayangan Anda.
                        </p>
                        </li>
                        <li>
                        <h3><span className="checkmark">✔</span>&nbsp;&nbsp;&nbsp;Layanan Pemerintahan atau Bank</h3>
                        <p className="paragraph">
                            Tidak bisa datang pagi untuk Antri? Kami yang akan menggantikan Antrian Anda.
                        </p>
                        </li>
                        <li>
                        <h3><span className="checkmark">✔</span>&nbsp;&nbsp;&nbsp;Jenis Antrian Lain</h3>
                        <p className="paragraph">
                            Antrian tidak masuk kaegori? Ceritakan tentang jenis Antrian Anda kepada kami.
                        </p>
                        </li>
                    </ul>
                    </div>
                    <div className="right"><img src="assets/gambarHP.png" alt="gambarHP" /></div>
                </div>
            </div>
        )
    }
}
