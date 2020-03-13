import React from 'react';
import ReactDOM from 'react-dom';

class Saludo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hora: new Date().toLocaleTimeString()
        }
        this.actualizarHora = this.actualizarHora.bind(this);
    }

    actualizarHora(){
        this.setState({
            hora: new Date().toLocaleTimeString()
        });
    }

    render(){
        return (
            <div>
                <h1>Hola {this.props.nombre + ' ' + this.props.apellido}, soy un componente de clase.</h1>
                <h2>Son las {this.state.hora}</h2>
                <h2>Son las {this.state.hora}</h2>
                <button onClick={this.actualizarHora}>Actualizar hora</button>
            </div>
        );
    }
}

ReactDOM.render(<Saludo nombre="John" apellido="Wick"></Saludo>, document.getElementById('root'));