let currentPage = 1;

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("curtain").classList.add("open");
    }, 700);

});


function nextPage() {

    const current =
        document.getElementById(`page${currentPage}`);

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


/* NO NEXT BUTTON */

let escapeCount = 0;

function runAway() {

    const button =
        document.getElementById("noButton");

    escapeCount++;

    if (escapeCount === 1) {

        button.style.transform =
            "translate(100px, -50px)";

    }

    else if (escapeCount === 2) {

        button.style.transform =
            "translate(-130px, 80px)";

    }

    else if (escapeCount === 3) {

        button.style.transform =
            "translate(180px, 100px)";

    }

    else {

        button.style.opacity = "0";

        button.style.pointerEvents = "none";

    }

}
