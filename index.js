// Entrada nomeando 4 variaveis QuantidadeVitorias, QuantidadeDerrotas, Saldo Rankeadas (SaldoVitorias e Derrotas) e nivel

let QuantidadeVitorias = 30

let QuantidadeDerrotas = 5

let SaldoRankeadas = QuantidadeVitorias - QuantidadeDerrotas

let nivel = "Aurelino"

//Funcao com classificacoes
     
if (QuantidadeVitorias< 10) {nivel = "Ferro"}

else if (QuantidadeVitorias >= 11 && QuantidadeVitorias <= 20) {nivel = "Bronze"}

else if (QuantidadeVitorias >= 21 && QuantidadeVitorias <= 50) {nivel = "Prata"}

else if (QuantidadeVitorias >= 51 && QuantidadeVitorias <= 80) {nivel = "Ouro"}

else if (QuantidadeVitorias >= 81 && QuantidadeVitorias <= 90) {nivel = "Diamante"}

else if (QuantidadeVitorias >= 91 && QuantidadeVitorias <= 100) {nivel = "Lendario"}

else if (QuantidadeVitorias >= 101) {nivel = "Imortal"}

// Saida

console.log("O Herói de saldo " + SaldoRankeadas + " está no nivel de " + nivel)
