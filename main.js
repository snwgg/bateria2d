document.addEventListener('DOMContentLoaded', function () {
    const teclas = document.querySelectorAll('.tecla');

    teclas.forEach(tecla => {
        tecla.addEventListener('click', function () {
            const somId = this.id.replace('tecla_', '');
            tocaSom(somId);
        });
    });

    function tocaSom(somId) {
        const audio = new Audio(`sounds/${somId}.wav`);
        audio.play();
    }
});