class DateHelper {
    constructor() {
        throw new Error('Está classe não pode ser instanciada');
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    static textoParaData(texto) { // static sao metodos que nao precisa instanciar pra poder trabalhar com ele 

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Formato invalido. Formato correto aaaa-mm-dd');

        // let data = new Date(this._inputData.value.split('-'));        
        // let data = new Date(this._inputData.value.replace(/-/g, ','));
        return new Date (...texto.split('-').map((item, indice) => item - indice % 2));
        // o ... faz com que cada elemento do array seja passado como um paramentro 
        // exemplo function(elem1,elem2,elem3)
    }
    
}