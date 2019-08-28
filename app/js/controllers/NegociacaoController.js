class NegociacaoController {
    constructor() {
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        console.log(negociacao);
    }
}
