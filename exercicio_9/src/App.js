import React, { Component } from "react";
import "./style.css";

// Importando a imagem do cronometro
import cronometro from "./assets/cronometro.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "INICIAR",
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.aumetaTimer = this.aumetaTimer.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  // Utilize o método setInterval para executar o cronômetro
  iniciar() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "INICIAR";
    } else {
      this.timer = setInterval(this.aumetaTimer, 1000);
      state.botao = "PAUSAR";
    }

    this.setState(state);
  }

  limpar() {
    let state = this.state;
    state.numero = 0;
    this.setState(state);
  }

  aumetaTimer() {
    let state = this.state;
    state.numero += 1;
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h1>Cronômetro</h1>
        <img src={cronometro} className="img" alt="Imagem Cronometro" />
        <p className="timer">{this.state.numero.toFixed(1)}</p>
        <div className="areaBtn">
          <button className="botao" onClick={this.iniciar}>
            {this.state.botao}
          </button>
          <button className="botao" onClick={this.limpar}>
            LIMPAR
          </button>
        </div>
      </div>
    );
  }
}

export default App;
