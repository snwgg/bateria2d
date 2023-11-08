const listButtons = document.querySelectorAll(".tecla");
const listAudios = document.querySelectorAll("audio");
for (let i = 0; i < listButtons.length; i++) {
    const element = listButtons[i];
    const elementAudios = listAudios[i];
    element.addEventListener('click', () => {

   elementAudios.play(); 
});
}