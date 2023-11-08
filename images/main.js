const listaTeclas = document.querySelectorAll ('.tecla')
function tocaSom(idElemento){
    document.querySelector(idElemento).play)
}

for(let indice = 0; indice < listaTeclas.length; indice++){
    const class1 = listaTeclas[indice].classlist[1]
    const idAudio = `#som_${class1}`
    
    listaTeclas[indice].onclick = function){
        tocaSom(idAudio)
    }
