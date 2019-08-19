import React, { Component } from 'react';
import "../styles/styleku.css";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="grid-container4">
                    <div className="grid-item2">
                        <p style={{color: 'black'}}><b>SEKILAS AKUANTRI</b></p>
                        <p><span style={{color: '#4CAF50'}}>Akuantri</span> adalah Aplikasi Layaan Jasa Antri yang akan menghemat waktu Anda 
                            dalam hal mengantri. Kami mempunyai jenis Antrian yang beragam. 
                            dengan <span style={{color: '#4CAF50'}}>Akuantri</span> Anda bisa melakukan hal yang lebih penting, 
                            sementara antrian Anda akan tetap berajalan. </p>
                        <p style={{fontSize: '12px', marginTop: '100px'}}>© <span style={{color: '#4CAF50'}}>PT Aku Antri Indonesia.</span> All Rights Reserved. Jasa Layanan Antri Indonesia - Akuantri</p>
                    </div>

                    <div className="grid-item2">
                        <p style={{color: 'black'}}><b>LINKS</b></p>
                        <ul className="list" style={{color: '#4CAF50'}}>
                            <li>Tentang Kami</li>
                            <li>Promo</li>
                            <li>Karir</li>
                            <li>Hubungi Kami</li>
                            <li>Syarat &amp; Ketentuan</li>
                        </ul>
                    </div>
                    <div className="grid-item2">
                        <p style={{color: 'black'}}><b>DOWNLOAD APLIKASI</b></p>
                        <img src="assets/logo1.png" style={{height: '200px'}} alt="logo1" />
                    </div>  
                </div>
            </div>
        )
    }
}
