let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("div-lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg";
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuário
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  
  console.log(qtdImagem);

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class = "imagens" src ="https://i.pinimg.com/originals/d9/82/08/d9820863c7439b9d78bebb02350bdb38.jpg" alt="" />` ;
  }
};

const calcular=()=>{
  let valorPedido = document.getElementById("");
   
}
