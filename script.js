let currentPage = 1;


/* =========================
   OPEN CURTAIN
========================= */

function openCurtain() {

    // Hide the question
    const question =
        document.getElementById("questionScreen");

    question.classList.add("hidden");


    // Wait a moment, then open curtain
    setTimeout(() => {

        const curtain =
            document.getElementById("curtain");

        curtain.classList.add("open");

    }, 500);

}


/* =========================
   SIMU BUTTON RUNS AWAY
========================= */

function runAway() {

    const button =
        document.getElementById("simuButton");

    if (!button) return;


    // Random position on screen
    const maxX =
        window.innerWidth - button.offsetWidth - 40;

    const maxY =
        window.innerHeight - button.offsetHeight - 40;

    const x =
        Math.max(20, Math.random() * maxX);

    const y =
        Math.max(20, Math.random() * maxY);


    button.style.position = "fixed";

    button.style.left = x + "px";

    button.style.top = y + "px";
}


/* =========================
   NEXT PAGE
========================= */

function nextPage() {

    const current =
        document.getElementById(`page${currentPage}`);

    if (!current) return;

    current.classList.remove("active");

    currentPage++;

    const next =
        document.getElementById(`page${currentPage}`);

    if (next) {

        setTimeout(() => {

            next.classList.add("active");

        }, 400);

    }

}
