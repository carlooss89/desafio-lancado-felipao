//  1. Desafio Classificador de nível de Herói

function calcularNivel(xp) {
    let nivel = ""; 

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "Nível Desconhecido (XP Inválida)"; 
    }

    return nivel; 
}

const nomeDoHeroi = "Sete";
const xpDoHeroi = 1005;    // Você pode mudar esta XP para testar diferentes níveis

// 3. Calcule o nível usando a função
const nivelAtualDoHeroi = calcularNivel(xpDoHeroi);

// 4. Exiba a mensagem final usando um template literal
//    As crases (``) permitem interpolar variáveis usando ${}
console.log(`O Herói ${nomeDoHeroi}, está no nível de, ${nivelAtualDoHeroi}!`);