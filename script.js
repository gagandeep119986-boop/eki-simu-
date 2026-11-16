
/* =================================
   PROJECT 11 — FOR SIMU ❤️
================================= */

let discoveredStars = new Set();

/* 11 STAR MESSAGES
   We can personalise these together later.
*/

const starMessages = [
  {
    title: "The beginning",
    month: "STAR 01 — DECEMBER",
    message: "Every beautiful journey has a beginning. And somehow, mine became more beautiful when you became part of it."
  },
  {
    title: "A little reminder",
    month: "STAR 02 — JANUARY",
    message: "No matter how ordinary a day feels, having you in my life gives it something special."
  },
  {
    title: "My favourite person",
    month: "STAR 03 — FEBRUARY",
    message: "Out of all the people in this world, you are still the person I want to tell everything to."
  },
  {
    title: "Through everything",
    month: "STAR 04 — MARCH",
    message: "We don't need every day to be perfect. I just want us to keep choosing each other through every kind of day."
  },
  {
    title: "My safe place",
    month: "STAR 05 — APRIL",
    message: "I hope you always remember that you have someone cheering for you, believing in you and standing beside you."
  },
  {
    title: "A thousand smiles",
    month: "STAR 06 — MAY",
    message: "If I could save little moments forever, I would save every moment that made you smile."
  },
  {
    title: "Still choosing you",
    month: "STAR 07 — JUNE",
    message: "Time can pass, days can change, but I want my choice to remain the same: you."
  },
  {
    title: "My favourite thought",
    month: "STAR 08 — JULY",
    message: "Somewhere in the middle of a busy day, I still find myself thinking about you."
  },
  {
    title: "Your biggest supporter",
    month: "STAR 09 — AUGUST",
    message: "I hope you achieve everything your heart dreams of. I will always be proud of you."
  },
  {
    title: "Our little universe",
    month: "STAR 10 — SEPTEMBER",
    message: "This little universe is special because it has you in it. I wouldn't trade that for anything."
  },
  {
    title: "Eleven months",
    month: "STAR 11 — NOVEMBER",
    message: "Eleven months down, my love. And if I could start this journey all over again, I would still choose you."
  }
];


/* CHANGE BETWEEN SCREENS */

function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active");

    const panel = nextScreen.querySelector(".panel");

    if (panel) {
      panel.scrollTop = 0;
    }
  }
}


/* OPEN THE INVITATION */

function openInvitation() {
  showScreen("welcome");
}


/* LIVE RELATIONSHIP COUNTER */

function updateCounter() {
  const startDate = new Date(2025, 11, 17, 0, 0, 0);
  const now = new Date();

  let difference = now - startDate;

  if (difference < 0) {
    difference = 0;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);


/* OPEN A STAR */

function openStar(index) {
  const star = document.querySelector(
    '.star[data-star="' + index + '"]'
  );

  const messageBox = document.getElementById("starMessage");
  const month = document.getElementById("starMonth");
  const title = document.getElementById("starTitle");
  const text = document.getElementById("starText");

  if (!star || !starMessages[index]) {
    return;
  }

  const memory = starMessages[index];

  month.textContent = memory.month;
  title.textContent = memory.title;
  text.textContent = memory.message;

  messageBox.classList.remove("hidden");

  discoveredStars.add(index);
  star.classList.add("unlocked");

  updateStarProgress();
}


/* UPDATE STAR PROGRESS */

function updateStarProgress() {
  const count = discoveredStars.size;

  document.getElementById("starProgress").textContent =
    count + " / 11 STARS DISCOVERED";

  if (count === 11) {
    document.getElementById("galleryButton")
      .classList.remove("hidden");

    document.getElementById("starProgress").textContent =
      "11 / 11 STARS DISCOVERED — OUR UNIVERSE IS COMPLETE ✨";
  }
}


/* CLOSE STAR MESSAGE */

function closeStar() {
  document.getElementById("starMessage")
    .classList.add("hidden");
}


/* OPEN THE FUTURE BOX */

function openFuture() {
  document.getElementById("futureMessage")
    .classList.remove("hidden");

  document.getElementById("finalButton")
    .classList.remove("hidden");
}


/* ENLARGE GALLERY PHOTOS WHEN TAPPED */

function createPhotoViewer() {
  const images = document.querySelectorAll(".photo-grid img");

  images.forEach(img => {
    img.addEventListener("click", function () {
      if (!this.complete || this.naturalWidth === 0) {
        alert("This photo hasn't loaded yet. Check its filename in GitHub.");
        return;
      }

      const viewer = document.createElement("div");

      viewer.style.position = "fixed";
      viewer.style.inset = "0";
      viewer.style.zIndex = "99999";
      viewer.style.background = "rgba(0,0,0,.94)";
      viewer.style.display = "flex";
      viewer.style.alignItems = "center";
      viewer.style.justifyContent = "center";
      viewer.style.padding = "20px";
      viewer.style.cursor = "zoom-out";

      const enlarged = document.createElement("img");

      enlarged.src = this.src;
      enlarged.alt = this.alt;
      enlarged.style.maxWidth = "95%";
      enlarged.style.maxHeight = "90vh";
      enlarged.style.objectFit = "contain";
      enlarged.style.borderRadius = "12px";
      enlarged.style.boxShadow = "0 0 40px rgba(255,100,150,.3)";

      viewer.appendChild(enlarged);
      document.body.appendChild(viewer);

      viewer.addEventListener("click", function () {
        viewer.remove();
      });
    });
  });
}

createPhotoViewer();


/* CLOSE PHOTO VIEWER WITH ESCAPE */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const viewer = document.querySelector(
      'body > div[style*="z-index: 99999"]'
    );

    if (viewer) {
      viewer.remove();
    }
  }
});
