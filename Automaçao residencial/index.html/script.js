function scrollParaBusca(){
document.getElementById("buscar").scrollIntoView({
behavior:"smooth"
});
}

function whatsapp(){
window.open("https://wa.me/5599999999999");
}

const automacoes = [
"Luzes inteligentes",
"Controle de portão",
"Câmeras de segurança",
"Fechadura digital",
"Automação por voz",
"Controle pelo celular"
];

document.getElementById("pesquisa").addEventListener("input", function(){

let valor = this.value.toLowerCase();
let resultado = document.getElementById("resultado");

resultado.innerHTML = "";

automacoes.forEach(item => {

if(item.toLowerCase().includes(valor)){
resultado.innerHTML += `<p>${item}</p>`;
}

});

});