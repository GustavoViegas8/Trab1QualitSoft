// Quantidade vendida pode ser de 1 ou mais unidades
import Product from "../src/model/product";
import sell from "../src/service/sellProduct";

test('Deve validar baixa de estoque da venda de uma unidade', () =>{
    let produto = new Product('Celular', 500.00, 900.00, 10);
    
    sell(produto, 2);
    expect(produto.stock).toBe(8);
})