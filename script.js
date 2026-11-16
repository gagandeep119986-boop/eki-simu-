
/* PROJECT 11 — FOR SIMU ❤️ */

let discoveredStars = new Set();

const starMessages = [
  {
    title: "The butterfly effect 🦋",
    month: "MONTH 1",
    message: "Ahh, we had that butterfly effect. We used to be like aww and ap and koi ni. I used to make you jealous, which was so childish of me. We used to crave even talking to each other on call. Mere bache, merii jaan, mere bache. ❤️"
  },
  {
    title: "Our first difficult phase",
    month: "MONTH 2",
    message: "Now this is where real tensions started to grow. We started having fights and we weren't able to communicate ache se. We had low phases during this time, but we held firmly onto each other, mere bache. ❤️"
  },
  {
    title: "Understanding each other",
    month: "MONTH 3",
    message: "This was the time we started understanding each other more and explaining things to each other ache se. We started calling on the phone mostly every day. We had our first kiss and our first cuddle in this month. ❤️"
  },
  {
    title: "The one-hour call",
    month: "MONTH 4",
    message: "Mere bache, merii jaan, merii laddo. We had our first direct one-hour call. We used to laugh itta ki pet dard hone lagta tha merii laddo ka and meraa. Those laughs are so precious to me. ❤️"
  },
  {
    title: "My hardworking girl",
    month: "MONTH 5",
    message: "This was the month my wife locked in for CUET. She started giving those 2–3 hour study sessions. She hated me because I was thodu saa harsh with her, but I was prouder of her than I could ever say. ❤️"
  },
  {
    title: "You gave it your all",
    month: "MONTH 6",
    message: "This was the month she gave her CUET papers. She did everything she could have done during those papers. And she will, and she has always, excelled in life. My daughter, my love of my life. ❤️"
  },
  {
    title: "Falling in love even more",
    month: "MONTH 7",
    message: "This was the month we had choti moti little fights, but we used to make up again. We started loving each other even more, and I fell in love with you more and more. ❤️"
  },
  {
    title: "My honey bee got her college",
    month: "MONTH 8",
    message: "This was the month where my honey bee, my hardworking wife, got her college. I was so happy for her. And not only that, her kiddish self was so happy. She hugged me, she hugged Simran, and she was so happy. ❤️"
  },
  {
    title: "The first time we got close",
    month: "MONTH 9 — 4 SEPTEMBER",
    message: "Let's gooo! This was the month we came soo closeeeee yyyyyyaaaaaayyyyy! You came for the first time close to me on 4 September. You were wearing skin-colour socks, blue lowers and your Wednesday shirt. And we touched for the first time at 22:36:35 because I helped you throw a paper in the dustbin. I'll remember that tiny moment forever. ❤️"
  },
  {
    title: "OUR FIRST DATE!",
    month: "MONTH 10 — 30 SEPTEMBER",
    message: "Our firsttttt dateeeee! Yyyyyyaaaaaayyyyy! I'm so happy. We kissed, we hugged, and I was a bit emotional when I left you. I was crying. That day will always have a special place in my heart. ❤️"
  },
  {
    title: "My brave, brave daughter",
    month: "MONTH 11",
    message: "MY BRAVE BRAVE DAUGHTER, JISKI JITNI TARIF KARUN UTTA KAM. She fought her way in her room with that psychopath. She fought the world. She survived. And when she was done, she shanti se played a smart move to her temporary home, because permanent is... ❤️\n\nMere bache, I am so proud of your courage. You have no idea how much."
  }
];


/* SCREEN NAVIGATION */

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active");

    const panel = nextScreen.querySelector(".panel");
    if (panel) panel.scrollTop = 0;
  }
}


/* INVITATION */

function openInvitation() {
  showScreen("welcome");
}


/* RELATIONSHIP COUNTER */

function updateCounter() {
  const startDate = new Date(2025, 11, 17, 0, 0, 0);
  const now = new Date();

  let difference = Math.max(0, now - startDate);
  const totalSeconds = Math.floor(difference / 1000);

  document.getElementById("days").textContent =
    Math.floor(totalSeconds / 86400);

  document.getElementById("hours").textContent =
    Math.floor((totalSeconds % 86400) / 3600);

  document.getElementById("minutes").textContent =
    Math.floor((totalSeconds % 3600) / 60);

  document.getElementById("seconds").textContent =
    totalSeconds % 60;
}

updateCounter();
setInterval(updateCounter, 1000);


/* STARS */

function openStar(index) {
  const stars = document.querySelectorAll(".star");
  const memory = starMessages[index];

  if (!memory) return;

  document.getElementById("starMonth").textContent = memory.month;
  document.getElementById("starTitle").textContent = memory.title;
  document.getElementById("starText").textContent = memory.message;
  document.getElementById("starMessage").classList.remove("hidden");

  stars[index].classList.add("unlocked");
  discoveredStars.add(index);

  updateStarProgress();
}

function closeStar() {
  document.getElementById("starMessage").classList.add("hidden");
}

function updateStarProgress() {
  const count = discoveredStars.size;

  document.getElementById("starProgress").textContent =
    count + " / 11 STARS DISCOVERED";

  if (count === 11) {
    document.getElementById("galleryButton").classList.remove("hidden");
    document.getElementById("starProgress").textContent =
      "11 / 11 STARS DISCOVERED — OUR UNIVERSE IS COMPLETE ✨";
  }
}


/* FUTURE BOX */

function openFuture() {
  document.getElementById("futureMessage").classList.remove("hidden");
  document.getElementById("endButton").classList.remove("hidden");
}


/* GALLERY PHOTO VIEWER */

function createPhotoViewer() {
  document.querySelectorAll(".photo-grid img").forEach(img => {
    img.addEventListener("click", function () {
      if (!this.complete || this.naturalWidth === 0) {
        alert("This photo hasn't loaded. Please check its filename in GitHub.");
        return;
      }

      const viewer = document.createElement("div");
      viewer.className = "photo-viewer";

      Object.assign(viewer.style, {
        position: "fixed",
        inset: "0",
        zIndex: "99999",
        background: "rgba(0,0,0,.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        cursor: "zoom-out"
      });

      const enlarged = document.createElement("img");
      enlarged.src = this.src;
      enlarged.alt = this.alt;

      Object.assign(enlarged.style, {
        maxWidth: "95%",
        maxHeight: "90vh",
        objectFit: "contain",
        borderRadius: "12px"
      });

      viewer.appendChild(enlarged);
      document.body.appendChild(viewer);

      viewer.addEventListener("click", () => viewer.remove());
    });
  });
}

createPhotoViewer();

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelector(".photo-viewer")?.remove();
  }
});
