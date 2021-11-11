class Nota {
    _total = 0;
    _produtos = [];
    
    get total() {
        return this._total;
    }

    set total(value) {
        if (value >= 0) this._total = value;
        else throw new Error("A nota deve ter valores maiores que 0");
    }

    adicionarProduto(produto) {
        this._produtos.push(produto);
        this.total = this.total + Math.round(produto.valor * 100) / 100;
    }

    removerProduto(produto) {
        this._produtos = this._produtos.filter(
            function(item) {
                return item.id != produto.id;
            }
        );
        this.total = this.total - Math.round(produto.valor * 100) / 100;
    }
}