import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Acceso from './Acceso';
import Home from './Home';
import './App.css';

// https://github.com/SonarSystems/Bootstrap-4-Tutorial-Series

class App extends Component {

    buy(e){
        fetch(`/pay`, {
            method: 'POST',
            body: JSON.stringify({
                        // nombre: this.props.usuario.nombre,
                        // apellido: this.props.usuario.apellido,
                        // fecha: fecha,
                        // descripcion: this.state.descripcion,
                        // usuarioId: this.props.usuario._id
            }),
            headers: {
                // token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }

    render() {
        // let token = localStorage.getItem('token');
        return (
            <div style={{color:"white", textAlign:"center"}}>
                <button type="submit" 
                        onClick={this.buy.bind(this)}>Buy</button>
                {/* <BrowserRouter>
                    {
                        token ?
                            <div>
                                <Route exact path={'/'} component={Home} />
                            </div>
                            :
                            <div>
                                <Acceso/>
                            </div>
                    }
                </BrowserRouter> */}
            </div>
        );
    }
}

export default App;