///// MODO ESCURO
document.getElementById("btnTema")
.addEventListener("click", function(){
	document.body.classList.toggle("dark");
	if (document.body.classList.contains("dark")) {
		this.textContent = "☀️ Modo Claro";
	}else{
		this.textContent = "🌙 Modo Escuro";
	}
});

///// AVISO DO ADBLOCK (MEME)
function fecharAviso(){
	document.getElementById("aviso")
	.classList.add("escondido");
}
