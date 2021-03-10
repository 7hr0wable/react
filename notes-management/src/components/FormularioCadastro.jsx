import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Digite um título para sua anotação" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
