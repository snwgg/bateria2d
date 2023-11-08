const listButtons = document.querySelectorAll(".tecla");
const listAudios = document.querySelectorAll("audio");

for (let i = 0; i < listButtons.length; i++) {
    const button = listButtons[i];
    const audio = listAudios[i];

    button.addEventListener('click', () => {
        audio.play();
    });
}