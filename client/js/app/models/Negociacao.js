class Negociacao { // classe modelo 
    // toda classe que tem construtor só pode ser chamada com new
    constructor( data, qtd, vlr){ // seta atributos da classe no construtor
        this._data = new Date(data.getTime()); // this varia a cada estancia 
        this._quantidade = qtd;
        this._valor = vlr;
        Object.freeze(this);

        // o underline é uma convenção  (aviso ao programador) que diz que os atributos/propriedades só podem ser alteradas pela propria classe
    }

    // funcao detro da classe é metodo
    get volume() {  
        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}