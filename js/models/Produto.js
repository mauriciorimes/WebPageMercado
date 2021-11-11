class Produto {
    _id;
    _descricao;
    _valor;

    get id() {
        return this._id;
    }

    set id(value) {
        if (value > 0) this._id = value;
        else throw new Error("Informe valores maiores que 0");        
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(value) {
        if (value.trim() != "") this._descricao = value; //trim() metodo que tira espaço da direita e esqueda
        else throw new Error("Informe a descrição");
    }

    get valor() {
        return this._valor;
    }

    set valor(value) {
        if (value >= 0) this._valor = value;
        else throw new Error("Informe valores acima ou iguais a 0")
    }

    constructor(id, descricao, valor) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
}