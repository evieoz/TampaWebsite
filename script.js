/* =========================================
   UNIVERSITY OF TAMPA WEBSITE
   SCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       HOME HERO VIDEO
    ====================================== */

    const heroVideo = document.getElementById("heroVideo");

    const videoControl =
        document.getElementById("videoControl");

    const videoIcon =
        document.getElementById("videoIcon");

    const videoControlText =
        document.getElementById("videoControlText");


    if (heroVideo && videoControl) {

        videoControl.addEventListener("click", function () {

            if (heroVideo.paused) {

                heroVideo.play();

                videoIcon.textContent = "❚❚";

                videoControlText.textContent =
                    "PAUSE VIDEO";

                videoControl.setAttribute(
                    "aria-label",
                    "Pause background video"
                );

            } else {

                heroVideo.pause();

                videoIcon.textContent = "▶";

                videoControlText.textContent =
                    "PLAY VIDEO";

                videoControl.setAttribute(
                    "aria-label",
                    "Play background video"
                );

            }

        });

    }



    /* =====================================
       MOBILE NAV
    ====================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar-collapse .nav-link"
        );

    const navbarCollapse =
        document.querySelector(".navbar-collapse");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const collapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarCollapse
                    );

                collapse.hide();

            }

        });

    });



    /* =====================================
       PROGRAM FILTER
    ====================================== */

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const programCards =
        document.querySelectorAll(".program-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });


            button.classList.add("active");


            const selectedFilter =
                button.dataset.filter;


            programCards.forEach(function (card) {

                const category =
                    card.dataset.category;


                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {

                    card.classList.remove(
                        "program-hidden"
                    );

                } else {

                    card.classList.add(
                        "program-hidden"
                    );

                }

            });

        });

    });



    /* =====================================
       SCROLL REVEAL
    ====================================== */

    const revealItems =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(

                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealItems.forEach(function (item) {
            revealObserver.observe(item);
        });


    } else {

        revealItems.forEach(function (item) {

            item.classList.add("revealed");

        });

    }


});