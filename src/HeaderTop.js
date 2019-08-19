//panggil pake 'rcc'
import React, { Component } from 'react'

export default class HeaderTop extends Component {
    render() {
        return (
            <div>
                <h1 style={warna}>ini dari header top component</h1>
            </div>
        )
    }
}

const warna = {
    color: "red"
};
