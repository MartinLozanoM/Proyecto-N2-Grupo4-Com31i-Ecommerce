const imagenes = [
    "./assets/img/Slider1.png",
    "./assets/img/Slider2.png",
    "./assets/img/Slider3.png",
];

document.Imagen.src = imagenes[0];

const SliderIzquierdo = document.querySelector(".slider-izquierdo");
const SliderDerecho = document.querySelector(".slider-derecho");
let Contador = 0;

function MoverDerecha()
  {
     Contador++;
     if(Contador > imagenes.length - 1)
        {
           Contador = 0;
        }
     document.Imagen.src = imagenes[Contador];
  }
let Intervalo = setInterval(MoverDerecha, 2000);

SliderDerecho.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverDerecha();
     Intervalo = setInterval(MoverDerecha, 2000);
  });


function MoverIzquierda()
  {
     Contador--;
     if(Contador < 0)
       {
         Contador = imagenes.length - 1;
       }
     document.Imagen.src = imagenes[Contador];
  }
SliderIzquierdo.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverIzquierda();
     Intervalo = setInterval(MoverDerecha, 2000);
  });