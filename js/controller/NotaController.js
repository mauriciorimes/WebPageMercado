class NotaController {
    _listaProdutos = [];
    _selectProduto;
    _btnIncluirProd;
    _divItens;
    _nota;
    _lblTotal;
    _frmNota;

    get frmNota() {
        return this._frmNota;
    }

    set frmNota(value) {
        this._frmNota = value;
        this._frmNota.addEventListener("submit", this.enviaNota);
    }

    get lblTotal() {
        return this._lblTotal;
    }

    set lblTotal(value) {
        this._lblTotal = value;
    }

    get nota() {
        return this._nota;
    }

    set nota(value) {
        this._nota = value;
    }  

    get divItens() {
        return this._divItens;
    }

    set divItens(value) {
        this._divItens = value;
        this._divItens.innerHTML = "";
    }

    get btnIncluirProd() {
        return this._btnIncluirProd;
    }

    set btnIncluirProd(value) {
        this._btnIncluirProd = value;
        this._btnIncluirProd.onclick = this.btnIncluirProdClick.bind(this);        
    }

    get selectProduto() {
        return this._selectProduto;
    }

    set selectProduto(value) {
        this._selectProduto = value;
        this.selectProduto.innerHtml = "";
    }

    atualizaDom() {
        if (this._listaProdutos.length > 0) {
            if (this.selectProduto) {
                this._listaProdutos.forEach(prod => {
                    this.selectProduto.innerHTML += `<option value="${prod.id}"> ${prod.descricao} </option>`
                });
            }
        }
        this.lblTotal.innerHTML = Math.round(this.nota.total * 100) / 100;
    }

    preencherListaProduto() {
        for (let i = 1; i <= 10; i++) {
            let valor = Math.random() * (50 - 1) + 1;
            valor = Math.round(valor * 100) / 100;
            let prod = new Produto(i, "Produto" + i, valor);
            console.log(prod);
            this._listaProdutos.push(prod);            
        }
    }

    pequisarProd(id) {
        return this._listaProdutos.find(prod => prod.id == id);
    }

    incluirProdNota(prod) {
        this.divItens.innerHTML += `<div class="rounded p-1 mt-1 bg-secondary bg-light text-gray fs-4 d-flex justify-content-between">
        <label>${prod.descricao} - ${prod.valor}</label>
        <button class="btn btn-danger" id="btn${prod.id}" data-exc>Excluir</button>
        </div>`;

        this.clickExcluirItem();
        
        this.nota.adicionarProduto(prod);
        this.atualizaDom();
    }

    clickExcluirItem() {
        document.querySelectorAll("[data-exc]").forEach(element => {
            element.onclick = this.excluirItem.bind(this);
        });
    }

    excluirItem(event) {
        let elPainel = event.target.parentNode;

        if (elPainel) {
            let numberPattern = /\d+/g;
            let idProd = event.target.id;
            idProd = idProd.match(numberPattern)[0]; 
            let prod = this.pequisarProd(idProd);
            this.nota.removerProduto(prod); 
            this.atualizaDom();
            this.divItens.removeChild(elPainel);
            this.clickExcluirItem();
        }          
    }

    btnIncluirProdClick() {
        if (this._listaProdutos.length == 0) alert("Nenhum produto listado");
        else 
            if(this._selectProduto.value == "") alert("Selecione um produto"); 
            else {
                let id = parseInt(this._selectProduto.value);
                let prod = this.pequisarProd(id);
                
                if (prod) this.incluirProdNota(prod);                  
                else alert("Produto nao encontrado!");                     
            }         
    }

    enviaNota(e) {
        e.preventDefault();
        alert("Dados enviados com sucesso!");
        document.location.reload();
    }

    constructor() {
        this._nota = new Nota();
    }
}