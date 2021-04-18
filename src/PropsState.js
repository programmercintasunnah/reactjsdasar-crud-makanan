import React, { Component } from "react";
import Operan from "./Operan";

export default class PropsState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: 'Baksokuh'
        }
    }
    gantiMakanan(namaMakanan) {
        this.setState({
            makanan: namaMakanan
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan("soto")}>Ganti makanan</button>
                <Operan makanan={this.state.makanan} />
            </div>
        )
    }
}