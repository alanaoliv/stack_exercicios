import { Stack } from "./Stack";

const pilha = new Stack<string>();

//inserção de dados
pilha.push("prato azul");
pilha.push("prato verde");
pilha.push("prato vermelho");

//imprimir a pilha
pilha.printStack();

//conferir se tem na pilha
console.log(pilha.contains("prato branco"));

//remoção do ultimo
pilha.pop();

pilha.printStack();