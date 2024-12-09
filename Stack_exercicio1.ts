import readlinesync = require('readline-sync');
import { Stack } from './Stack';

const pilha = new Stack<string>();
let menu: string;

//Menu
console.log("\n1 - Adicionar Livro na pilha \n2 - Listar todos os Livros \n3 - Retirar Livro da pilha \n0 - Sair");

//Entrada de Dados
do{
    menu = readlinesync.question("\nEntre com a alternativa desejada: ");
    if(menu == "1"){
        pilha.push(readlinesync.question("\nDigite o nome do livro: "));
        pilha.printStack();
        console.log("\nLivro Adicionado!")
    }else if(menu == "2"){
        pilha.printStack();
            if(pilha.isEmpty()){
                console.log("\nA Pilha está vazia!")
            }
    }else if(menu == "3"){
            if(pilha.isEmpty()){
                console.log("\nA Pilha está vazia!")
            }else{
                pilha.pop();
                pilha.printStack();
                console.log("\nUm Livro foi retirado da pilha!")
            }
    }else if(menu == "0"){
        console.log("\nPrograma Finalizado!")
        process.exit(0);
    }
}while(menu == "1" || menu == "2" || menu == "3" || menu == "0");