let currentPage = 1;


/* OPEN CURTAIN */

function openCurtain() {

    const question = document.getElementById("questionScreen");

    question.classList.add("hidden");

    setTimeout(() => {

        const curtain = document.getElementById("curtain");

        curtain.classList.add("open");

    }, 500);
}


/* SIMU RUNS AWAY */

function runAway() {

    const button = document.getElementById("simuButton");

    if (button) {

        const maxX = window.innerWidth - button.offsetWidth - 30;
        const maxY = window.innerHeight - button.offsetHeight - 30;

        const x = Math.max(20, Math.random() * maxX);
        const y = Math.max(20, Math.random() * maxY);

        button.style.position = "fixed";
        button.style.left = x + "px";
        button.style.top = y + "px";
    }


    /* Also handles the NO NEXT button */

    const noButton = document.getElementById("noButton");

    if (noButton) {

        const maxX = window.innerWidth - noButton.offsetWidth - 30;
        const maxY = window.innerHeight - noButton.offsetHeight - 30;

        const x = Math.max(20, Math.random() * maxX);
        const y = Math.max(20, Math.random() * maxY);

        noButton.style.position = "fixed";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    }
}


/* NEXT PAGE */

function nextPage() {

    const current = document.getElementById("page" + currentPage);

    if (current) {
        current.classList.remove("active");
    }

    currentPage++;

    const next = document.getElementById("page" + currentPage);

    if (next) {

        setTimeout(() => {
            next.classList.add("active");
        }, 300);

    }
}
