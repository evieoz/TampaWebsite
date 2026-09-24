// ==========================================
// UNIVERSITY OF TAMPA WEBSITE
// ==========================================



// ==========================================
// HERO VIDEO PLAY / PAUSE
// ==========================================

const heroVideo = document.getElementById("heroVideo");

const videoControl = document.getElementById("videoControl");

const videoIcon = document.getElementById("videoIcon");

const videoControlText =
    document.getElementById("videoControlText");


if (heroVideo && videoControl) {

    videoControl.addEventListener("click", function () {


        // IF VIDEO IS CURRENTLY PAUSED

        if (heroVideo.paused) {

            heroVideo.play();

            videoIcon.textContent = "❚❚";

            videoControlText.textContent = "PAUSE VIDEO";

            videoControl.setAttribute(
                "aria-label",
                "Pause background video"
            );

        }


        // IF VIDEO IS CURRENTLY PLAYING

        else {

            heroVideo.pause();

            videoIcon.textContent = "▶";

            videoControlText.textContent = "PLAY VIDEO";

            videoControl.setAttribute(
                "aria-label",
                "Play background video"
            );

        }

    });

}



// ==========================================
// CLOSE MOBILE NAV AFTER CLICK
// ==========================================

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getOrCreateInstance(
                    navbarCollapse
                );

            bootstrapCollapse.hide();

        }

    });

});



// ==========================================
// SCROLL REVEAL
// ==========================================

const revealItems =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealItems.forEach(function (item) {

        observer.observe(item);

    });

}


// FALLBACK FOR OLDER BROWSERS

else {

    revealItems.forEach(function (item) {

        item.classList.add("revealed");

    });

}