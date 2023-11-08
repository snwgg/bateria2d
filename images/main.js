const listateclas=document.querySelector('.tecla')
function tocasom(idElemento){
    document.querySelector(idElemento).play()
}
for(let indice = 0; indice < listateclas.length; indice++){
    const class1 = listateclas[indice].classList[1]
    const idAudio = '#som_${class1}'
    listateclas[indice].onclick = function(){
        tocasom(idAudio)
    }
}
