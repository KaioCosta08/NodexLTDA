function modalIRuan() {
    const profissionalModalRuan = document.querySelector('[data-modal="ruanModal"]');
    const buttonAbrirModalRuan = document.querySelector('[data-modal="abrirRuan"]');
    const buttonFecharModalRuan = document.querySelector('[data-modal="fecharRuan"]');

    buttonAbrirModalRuan.addEventListener("click", function (event) {
        event.preventDefault();
        profissionalModalRuan.classList.add("ativado");
    });

    buttonFecharModalRuan.addEventListener("click", function (event) {
        event.preventDefault();
        profissionalModalRuan.classList.remove("ativado");
    });
}
modalIRuan();

function modalIKaio() {
    const profissionalModalKaio = document.querySelector('[data-modal="kaioModal"]');
    const buttonAbrirModalKaio = document.querySelector('[data-modal="abrirKaio"]');
    const buttonFecharModalKaio = document.querySelector('[data-modal="fecharKaio"]');

    buttonAbrirModalKaio.addEventListener('click', abrirModalKaio);
    function abrirModalKaio (event) {
        event.preventDefault();
        profissionalModalKaio.classList.add('ativo');
    }

    buttonFecharModalKaio.addEventListener('click', fecharModalKaio);
    function fecharModalKaio (event) {
        event.preventDefault();
        profissionalModalKaio.classList.remove('ativo');
    }
}
modalIKaio();

function modalISaulo() {
    const profissionalModalSaulo = document.querySelector('[data-modal="sauloModal"]');
    const buttonAbrirModalSaulo = document.querySelector('[data-modal="abrirSaulo"]');
    const buttonFecharModalSaulo = document.querySelector('[data-modal="fecharSaulo"]');

    buttonAbrirModalSaulo.addEventListener('click', abrirModalSaulo);
    function abrirModalSaulo (event) {
        event.preventDefault();
        profissionalModalSaulo.classList.add('ligado');
    }

    buttonFecharModalSaulo.addEventListener('click', fecharModalSaulo);
    function fecharModalSaulo (event) {
        event.preventDefault();
        profissionalModalSaulo.classList.remove('ligado');
    }
}
modalISaulo();


function modalIwillyam() {
    const profissionalModalwillyam = document.querySelector('[data-modal="willyamModal"]');
    const buttonAbrirModalwillyam = document.querySelector('[data-modal="abrirWillyam"]');
    const buttonFecharModalwillyam = document.querySelector('[data-modal="fecharWillyam"]');

    buttonAbrirModalwillyam.addEventListener('click', abrirModalwillyam);
    function abrirModalwillyam (event) {
        event.preventDefault();
        profissionalModalwillyam.classList.add('ligando');
    }

    buttonFecharModalwillyam.addEventListener('click', fecharModalwillyam);
    function fecharModalwillyam (event) {
        event.preventDefault();
        profissionalModalwillyam.classList.remove('ligando');
    }
}
modalIwillyam();