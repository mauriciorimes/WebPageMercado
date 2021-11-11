/*let prod = new Produto(5, "Mouse", 23.87);
let prod2 = new Produto(6, "Teclado", 15.98);

console.log(prod);

let nota = new Nota();
nota.total = 0;

nota.adicionarProduto(prod);
nota.adicionarProduto(prod2);
console.log(nota);*/

let notaController = new NotaController();
notaController.selectProduto = document.querySelector("#selProd");
notaController.btnIncluirProd = document.querySelector("#btnIncluirProd");
notaController.divItens = document.querySelector("#divItens");
notaController.lblTotal = document.querySelector("#lblTotal");
notaController.frmNota = document.querySelector("#frmNota");
notaController.preencherListaProduto();
notaController.atualizaDom();
