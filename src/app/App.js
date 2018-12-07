import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { BrowserRouter, Route } from "react-router-dom"
import Acceso from './Acceso';
import Home from './Home';
import QRCode from 'qrcode.react';
import './App.css';
// https://github.com/SonarSystems/Bootstrap-4-Tutorial-Series

class App extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        console.log(ev)
    }

    render() {
        return (
            <div style={{color:"white", textAlign:"center"}}>
                HOLA
                <div className="checkout">
                    <p>Would you like to complete the purchase?</p>
                    <CardElement />
                    <button onClick={this.submit}>Send</button>
                </div>
            </div>
        );
    }
}

export default injectStripe(App);