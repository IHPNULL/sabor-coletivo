import { UserType } from "../types/User";
import { RecipeType } from "../types/recipeType";

export const user1:UserType = {
    name: "usuario1",
    userCode: "codigo1"
}


export const recipe1:RecipeType = {
    User: user1,
    title: "Pudding",
    ingredients:[
        "1 lata de leite condensado",
        "1 lata de leite (medida da lata de leite condensado)",
        "3 ovos inteiros",
        "1 xícara (chá) de açúcar",
        "1/2 xícara de água",
    ],
    steps: "Primeiro, bata bem os ovos no liquidificador.            Acrescente o leite condensado e o leite, e bata novamente.            Calda: Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar. Coloque em uma forma redonda e despeje a massa do pudim por cima.    Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.   Espete um garfo para ver se está bem assado.",
    calories: 240,
    portion: 50,
    protein: 3,
    carbs: 25,
    fat: 30,
}

export const recipe2:RecipeType = {
    User: user1,
    title: "Bolo de milho de lata no liquidificador",

    ingredients:[
        "1 lata de milho (sem o líquido)",
        "1 lata de açúcar (medida da lata de milho)",
        "1/2 lata de óleo de soja",
        "1 colher (sopa) de fermento em pó",
        "farinha de trigo para juntar",
        "1 lata de leite (medida da lata de milho)",
        "1 lata de flocão de milho",
        "3 ovos inteiros",
        "margarina para juntar",
    ],
    steps: "Escorra o milho e use a própria lata para as medidas, Unte e enfarinhe uma forma de bolo com furo, Coloque no liquidificador o milho (já escorrido), o leite, açúcar, flocão de milho, óleo, ovos e bata bem até que o milho fique bem moído.
Se quiser, pode acrescentar duas colheres de sopa de coco ralado, Acrescente o fermento em pó e pulse o liquidificador 3 vezes,Despeje essa massa na forma e leve ao forno médio,
Deixe assar por, aproximadamente, 40 minutos, Faça o teste do palito e observe um tom dourado médio, para saber que o bolo está pronto, Espere esfriar totalmente para desenformar
"

,
    calories: 140,
    portion: 60,
    protein: 6,
    carbs: 35,
    fat: 35,
}


export const recipe3:RecipeType = {
    User: user1,
    title: "Omelete rápido",
    ingredients:[
        "2 ovos",
        "1 fatia de presunto",
        "tempero verde a gosto",
        "1 pitada de sal",
        "2 fatias de queijo",
        "caldo de galinha a gosto",
    ],
    steps: "Bata os 2 ovos, pode ser na batedeira ou não, Após ter batido bem,
 coloque-o na frigideira já untada com óleo, acrescente o sal, 
o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo), Coloque os temperos a gosto, espere ficar firme, 
e vire o omelete, Está pronto um omelete delicioso, bom apetite!",
    calories: 100,
    portion: 35,
    protein: 4,
    carbs: 55,
    fat: 10,
}
