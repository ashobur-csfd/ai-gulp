(function ($) {
    ("use strict");

    /**-----------------------------
     *  Mobile Menu
     * ---------------------------*/

    /* -----------------------------------------------------
    Header Search
    ----------------------------------------------------- */
    let header_search = document.querySelector(".search-form");
    let search_icon = document.querySelector(".search-icon");
    let search_close = document.querySelector(".search-close");
    if (header_search) {
        search_icon.addEventListener("click", function () {
            header_search.classList.add("open-search");
            search_icon.style.display = "none";
            search_close.style.display = "block";
        });
        search_close.addEventListener("click", function () {
            header_search.classList.remove("open-search");
            search_icon.style.display = "block";
            search_close.style.display = "none";
        });
    }

    /* -----------------------------------------------------
  Hero slider
  ----------------------------------------------------- */
    var heroSlider = new Swiper(".hero-slider", {
        direction: "vertical",
        slidesPerView: 2,
        loop: true,
        spaceBetween: 70,
        speed: 3000,
        autoplay: {
            delay: 2,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

    /* -----------------------------------------------------
  Blog slider
  ----------------------------------------------------- */
    var bloglSlider = new Swiper(".blog-slider", {
        slidesPerView: 3.2,
        loop: true,
        spaceBetween: 160,
        speed: 3000,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 160,
            },
        },
    });

    /* -----------------------------------------------------
  Blog slider two
  ----------------------------------------------------- */
    var bloglSliderTwo = new Swiper(".cdx-blog-slider-2", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 3000,
        navigation: {
            nextEl: ".cdx-blog-next",
            prevEl: ".cdx-blog-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

    /* -----------------------------------------------------
  Blog slider three
  ----------------------------------------------------- */
    var bloglSliderThree = new Swiper(".cdx-blog-slider-3", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 3000,
        pagination: {
            el: ".cdx-blog-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /* -----------------------------------------------------
    Testimonial slider
    ----------------------------------------------------- */
    var testimonialSlider = new Swiper(".testimonial-slider", {
        slidesPerView: 3.2,
        loop: true,
        spaceBetween: 160,
        speed: 3000,
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 80,
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 160,
            },
        },
    });

    /* -----------------------------------------------------
    Testimonial slider two
    ----------------------------------------------------- */
    var testimonialSlider = new Swiper(".cdx-testimonial-slider-2", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    /* -----------------------------------------------------
    Testimonial slider three
    ----------------------------------------------------- */
    var testimonialSlider = new Swiper(".cdx-testimonial-slider-3", {
        slidesPerView: 2.3,
        loop: true,
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: ".cdx-testimonial-next",
            prevEl: ".cdx-testimonial-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.4,
            },
        },
    });

    /* -----------------------------------------------------
    Testimonial slider four
    ----------------------------------------------------- */
    var testimonialSliderFour = new Swiper(".cdx-testimonial-slider-4", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: ".cdx-testimonial-next",
            prevEl: ".cdx-testimonial-prev",
        },
    });

    /* -----------------------------------------------------
    Testimonial slider four
    ----------------------------------------------------- */
    var testimonialSliderFour = new Swiper(".cdx-testimonial-slider-10", {
        slidesPerView: 3,
        clientSlider: true,
        loop: true,
        spaceBetween: 30,
        speed: 2000,
    });

    /* -----------------------------------------------------
    Testimonial slider six
    ----------------------------------------------------- */
    var testimonialSlider = new Swiper(".cdx-testimonial-slider-6", {
        slidesPerView: 4.8,
        loop: true,
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: ".cdx-testimonial-next",
            prevEl: ".cdx-testimonial-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4.8,
            },
        },
    });
    /* -----------------------------------------------------
    Team slider
    ----------------------------------------------------- */
    var teamSlider = new Swiper(".cdx-team-slider", {
        slidesPerView: 3.2,
        loop: true,
        spaceBetween: 90,
        speed: 3000,
        navigation: {
            nextEl: ".team-next",
            prevEl: ".team-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 160,
            },
        },
    });

    /* -----------------------------------------------------
    Team slider two
    ----------------------------------------------------- */
    var teamSliderTwo = new Swiper(".cdx-team-slider-2", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    /* -----------------------------------------------------
    Client slider
    ----------------------------------------------------- */
    var clientSlider = new Swiper(".client-slider", {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 110,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 110,
            },
        },
    });

    /* -----------------------------------------------------
    Header Top slider
    ----------------------------------------------------- */
    var headerTopSlider = new Swiper(".cdx-navbar-top-7", {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 160,
        speed: 6000,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 110,
            },
        },
    });

    /* -----------------------------------------------------
    Client slider 7
    ----------------------------------------------------- */
    var clientSlider7 = new Swiper(".client-slider-7", {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 170,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 110,
            },
        },
    });

    /* -----------------------------------------------------
    country slider
    ----------------------------------------------------- */
    var countrySlider = new Swiper(".country-slider", {
        slidesPerView: 8,
        loop: true,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 8,
                spaceBetween: 20,
            },
        },
    });
    /* -----------------------------------------------------
    country slider reverse
    ----------------------------------------------------- */
    var countrySlider2 = new Swiper(".country-slider-reverse", {
        slidesPerView: 8,
        loop: true,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 8,
                spaceBetween: 20,
            },
        },
    });
    /* -----------------------------------------------------
    country slider 2
    ----------------------------------------------------- */
    var countrySlider2 = new Swiper(".country-slider-2", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
    /* -----------------------------------------------------
    country slider reverse 2
    ----------------------------------------------------- */
    var countrySliderReverse2 = new Swiper(".country-slider-reverse-2", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    /* -----------------------------------------------------
    payment slider Eight
    ----------------------------------------------------- */
    var cardslider = new Swiper(".cdx-card-slider-8", {
        slidesPerView: 1.7,
        loop: true,
        spaceBetween: 20,
        speed: 3000,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 0.5,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 1.3,
            },
            1200: {
                slidesPerView: 1.7,
                spaceBetween: 20,
            },
        },
    });
    /* -----------------------------------------------------
    tools slider
    ----------------------------------------------------- */
    var toolsSlider = new Swiper(".tools-slider", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 14,
        speed: 3000,
        centeredSlides: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
            },
            700: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    /* -----------------------------------------------------
    tools slider reverse
    ----------------------------------------------------- */
    var toolsSlider = new Swiper(".tools-slider-reverse", {
        slidesPerView: 3.2,
        loop: true,
        spaceBetween: 14,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
            },
            700: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.2,
            },
        },
    });

    /* -----------------------------------------------------
    Testimonia slider 11
    ----------------------------------------------------- */
    var clientSlider = new Swiper(".cdx-testimonia-slider-11", {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 110,
        speed: 3000,
        autoplay: {
            delay: 3,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 70,
            },
        },
    });

    /* -----------------------------------------------------
    Service slider
    ----------------------------------------------------- */
    var serviceSlider = new Swiper(".cdx-service-slider", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 3000,
        pagination: {
            el: ".cdx-service-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    /* -----------------------------------------------------
    Service slider two
    ----------------------------------------------------- */
    var serviceSlider = new Swiper(".cdx-service-slider-2", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 3000,
        pagination: {
            el: ".cdx-service-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /* -----------------------------------------------------
    Features slider
    ----------------------------------------------------- */
    var featuresContent = new Swiper(".cdx-features-content-slider", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        speed: 2000,
        freeMode: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            570: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    var featuresImg = new Swiper(".cdx-features-img-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: featuresContent,
        },
    });

    /* -----------------------------------------------------
    Features slider two
    ----------------------------------------------------- */
    var featuresTab = new Swiper(".cdx-features-slider-tab", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 3,
        speed: 2000,
        freeMode: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            570: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    var featuresContentBox = new Swiper(".cdx-features-slider-contentbox", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 2000,
        navigation: {
            nextEl: ".features-slider-next",
            prevEl: ".features-slider-prev",
        },
        thumbs: {
            swiper: featuresTab,
        },
    });

    /* -----------------------------------------------------
    Video popup
    ----------------------------------------------------- */
    if ($(".cdx-popup-video").length) {
        $(".cdx-popup-video").magnificPopup({
            type: "iframe",
            mainClass: "video-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
    }

    /* -----------------------------------------------------
    Team accordion
  ----------------------------------------------------- */

    document.addEventListener("DOMContentLoaded", function () {
        let teamContentItems = document.querySelectorAll(".cdx-team-btm");
        teamContentItems.forEach((item) => {
            item.addEventListener("click", function () {
                item.classList.toggle("show");
            });
        });
    });

    /* -----------------------------------------------------
    Content Accordion
    ----------------------------------------------------- */
    document.addEventListener("DOMContentLoaded", function () {
        const accordionContents = document.querySelectorAll(".cdx-content-accordion-item");
        accordionContents.forEach((item) => {
            item.addEventListener("mouseover", function () {
                item.classList.add("active");
            });
            item.addEventListener("mouseout", function () {
                item.classList.remove("active");
            });
        });
    });

    /* -----------------------------------------------------
    Custom Accordion
    ----------------------------------------------------- */
    document.addEventListener("DOMContentLoaded", function () {
        const accordionItems = document.querySelectorAll(".cdx-accordion");

        accordionItems.forEach((accordionItem) => {
            let accordionItems = accordionItem.querySelectorAll(".cdx-accordion-item");

            accordionItems.forEach((singleItem) => {
                let accordionBody = singleItem.querySelector(".cdx-accordion-body");

                // Set default item active
                if (singleItem.classList.contains("active")) {
                    accordionBody.style.height = accordionBody.scrollHeight + "px";
                } else {
                    accordionBody.style.height = "0";
                }

                // All Accordion items
                singleItem.addEventListener("click", function (event) {
                    let targetElement = event.target.closest(".cdx-accordion-item");
                    let getAccData = targetElement.getAttribute("data-tab");

                    let isActiveAccordion = targetElement.classList.contains("active");

                    if (!isActiveAccordion) {
                        targetElement.classList.add("active");
                        accordionBody.style.height = accordionBody.scrollHeight + "px";
                    } else {
                        targetElement.classList.remove("active");
                        accordionBody.style.height = 0;
                    }
                });
            });
        });
    });

    /* -----------------------------------------------------
    Custom Tabs
    ----------------------------------------------------- */
    document.addEventListener("DOMContentLoaded", function () {
        const tabsButton = document.querySelectorAll(".cdx-tabs-btn");
        tabsButton.forEach((tabItem) => {
            tabItem.addEventListener("click", function (event) {
                // Check if the clicked target is either the button or any child element inside it
                const clickedTab = event.target.closest(".cdx-tab-btn");

                if (clickedTab) {
                    let tabId = clickedTab.getAttribute("data-tab");
                    customTab(tabId);
                }
            });
        });

        // Tab functions
        function customTab(tabId) {
            let allTabBtns = document.querySelectorAll(".cdx-tab-btn");
            let allTabItems = document.querySelectorAll(".cdx-tab-item");

            // All buttons query
            allTabBtns.forEach((singlebtn) => {
                singlebtn.classList.remove("active");
            });

            // All contents query
            allTabItems.forEach((singleContent) => {
                singleContent.classList.remove("active");
            });

            // Add active class tab buttons and contents
            const activeBtn = document.querySelector(`.cdx-tab-btn[data-tab="${tabId}"]`);
            if (activeBtn) activeBtn.classList.add("active");
            const activeTab = document.getElementById(tabId);
            if (activeTab) activeTab.classList.add("active");
        }
    });
})(jQuery);
