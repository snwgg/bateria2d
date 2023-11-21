const listButtons = document.querySelectorAll(".tecla_som_pom");
const listAudios = document.querySelectorAll(".keye.wav");

for (let i = 0; i < listButtons.length; i++) {
    const button = listButtons[i];
    const audio = listAudios[i];
    
    button.addEventListener("click", () => {
        audio.play();
    });
}