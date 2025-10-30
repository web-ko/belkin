// document.querySelectorAll('.css-icznz7').forEach(button => {
//     button.addEventListener('click', () => {
//         history.back();
//     });
// });

// $('.sort-button-filter').click(function() {
//     $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest show-latest");
//     $(".button-a-z span, .button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");
// });

// disableScroll
function disableScroll() {
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("keydown", preventArrowKeys);
}

function enableScroll() {
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);
    document.removeEventListener("keydown", preventArrowKeys);
}

function preventScroll(e) {
    e.preventDefault();
}

function preventArrowKeys(e) {
    const keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
    if (keys.includes(e.keyCode)) {
        e.preventDefault();
    }
}

// Define media queries
const mediaQuery = window.matchMedia('(min-width: 744px)');
const mediaQuery1 = window.matchMedia('(max-width: 743px)');
const mediaQuery2 = window.matchMedia('(min-width: 744px) and (max-height: 510px)');
const mediaQuery3 = window.matchMedia('(max-width: 743px) and (max-height: 560px)');

// Function to handle media query changes
function handleMediaQueryChange() {
  if (mediaQuery.matches && !mediaQuery2.matches) {
    document.addEventListener("DOMContentLoaded", function () {
        const button = document.querySelector(".chakra-button");
        const path1 = document.querySelector(".path_1");
        const path2 = document.querySelector(".path_2");
        const path3 = document.querySelector(".path_3");

        function animatePath(path, from, to, duration = 150) {
            return new Promise((resolve) => {
                let start = null;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    let progress = (timestamp - start) / duration;

                    if (progress > 1) progress = 1;

                    let value = from + (to - from) * progress;
                    path.style.strokeDashoffset = `${value}px`;

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        resolve();
                    }
                }

                requestAnimationFrame(step);
            });
        }

        function animateSequence(forward = true) {
            if (forward) {
                // path1 and path2 animate together
                Promise.all([
                    animatePath(path1, 0, -1),
                    animatePath(path2, 0, -1)
                ]).then(() => Promise.all([
                    animatePath(path1, 1, 0),
                    animatePath(path2, 1, 0)
                ])).then(() => animatePath(path3, 0, -1))
                  .then(() => animatePath(path3, 1, 0));
            } else {
                // path2 and path3 animate together in reverse
                Promise.all([
                    animatePath(path3, 0, 1),
                    animatePath(path2, 0, 1)
                ]).then(() => Promise.all([
                    animatePath(path3, -1, 0),
                    animatePath(path2, -1, 0)
                ])).then(() => animatePath(path1, 0, 1))
                  .then(() => animatePath(path1, -1, 0));
            }
        }

        button.addEventListener("mouseenter", () => animateSequence(true));
        button.addEventListener("mouseleave", () => animateSequence(false));
    });



    document.querySelectorAll(".css-1xfrrfr_a, .swiper-button-prev, .swiper-button-next").forEach((button) => {
        const path = button.querySelector("path");

        button.addEventListener("mouseenter", () => {
            path.style.transition = "stroke-dashoffset 0.2s ease-out";
            path.style.strokeDashoffset = "0px";
        });

        button.addEventListener("mouseleave", () => {
            path.style.transition = "stroke-dashoffset 0.2s ease-in";
            path.style.strokeDashoffset = "-1px";

            // After the transition to -1px completes, reset to 1px
            setTimeout(() => {
                path.style.transition = "none"; // Remove transition to avoid animation jump
                path.style.strokeDashoffset = "1px";
            }, 600); // Matches the transition duration (0.6s)
        });
    });


    document.querySelectorAll(".css-1a7q1f, .css-9cortc").forEach((button) => {
        const path = button.querySelector("path");

        button.addEventListener("mouseenter", () => {
            path.style.transition = "stroke-dashoffset 0.2s ease-out";
            path.style.strokeDashoffset = "-1px";
        });

        button.addEventListener("mouseleave", () => {
            path.style.transition = "stroke-dashoffset 0s ease-in";
            path.style.strokeDashoffset = "1px";

            setTimeout(() => {
                path.style.transition = "stroke-dashoffset 0.2s ease-in-out";
                path.style.strokeDashoffset = "0px";
            }, 100); // Wait 100ms before returning to 0px
        });
    });


   document.querySelectorAll(".css-80p58o, .css-ealac2").forEach((button) => {
        const path = button.querySelector("path");

        button.addEventListener("mouseenter", () => {
            path.style.transition = "stroke-dashoffset 0.2s ease-out";
            path.style.strokeDashoffset = "0px";
        });

        button.addEventListener("mouseleave", () => {
            path.style.transition = "stroke-dashoffset 0.2s ease-in";
            path.style.strokeDashoffset = "-1px";

            // After the transition to -1px completes, reset to 1px
            setTimeout(() => {
                path.style.transition = "none"; // Remove transition to avoid animation jump
                path.style.strokeDashoffset = "1px";
            }, 600); // Matches the transition duration (0.6s)
        });
    });






    // Select the elements that trigger the hover effect
    const hoverTargets = document.querySelectorAll('.css-1n43rb5, .css-m5qmev, .css-9znc2p, .css-1noinxx');

    // Select the images that should be affected
    const images = document.querySelectorAll('.chakra-aspect-ratio.css-vo5v8d img, .chakra-aspect-ratio.css-197cu6f img, .chakra-aspect-ratio.css-6v3hm5 img, .css-1a0odta img');

    // Function to scale images
    function scaleImages(scale) {
        images.forEach(img => {
            img.style.transform = `scale(${scale})`;
            img.style.transition = 'transform 0.5s 0.1s ease-in-out'; // Smooth transition
        });
    }

    // Add event listeners to each hover target
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => scaleImages(1.05)); // Scale up
        target.addEventListener('mouseleave', () => scaleImages(1)); // Scale back
    });


    // ჰოვერის მეორე კოდი
    document.addEventListener("DOMContentLoaded", () => {
        // Select elements that trigger the hover effect
        const hoverTargets = document.querySelectorAll('.css-1n43rb4, .css-m6qmev');

        // Select the images that should be affected
        const images = document.querySelectorAll('.chakra-aspect-ratio.css-vo4v8d img, .chakra-aspect-ratio.css-6v3hm6 img');

        if (hoverTargets.length === 0 || images.length === 0) {
            console.warn("Hover targets or images not found. Check your selectors.");
            return;
        }

        function scaleImages(scale) {
            images.forEach(img => {
                img.style.transform = `scale(${scale})`;
                img.style.transition = 'transform 0.5s 0.1s ease-in-out'; // Smooth animation
            });
        }

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => scaleImages(1.05)); // Scale up
            target.addEventListener('mouseleave', () => scaleImages(1)); // Scale back
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Select elements that trigger the hover effect
        const hoverTargets = document.querySelectorAll('.css-1n43rb51, .css-m5qmev1');

        // Select the images that should be affected
        const images = document.querySelectorAll('.css-vo5v8d1 img, .css-6v3hm51 img');

        if (hoverTargets.length === 0 || images.length === 0) {
            console.warn("Hover targets or images not found. Check your selectors.");
            return;
        }

        function scaleImages(scale) {
            images.forEach(img => {
                img.style.transform = `scale(${scale})`;
                img.style.transition = 'transform 0.5s 0.1s ease-in-out'; // Smooth animation
            });
        }

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => scaleImages(1.05)); // Scale up
            target.addEventListener('mouseleave', () => scaleImages(1)); // Scale back
        });
    });


    document.addEventListener("DOMContentLoaded", () => {
        // Select elements that trigger the hover effect
        const hoverTargets = document.querySelectorAll('.css-5555, .css-56565, .css-bbbb');

        // Select the images that should be affected
        const images = document.querySelectorAll('.css-vovo img, .css-ninon img, .css-mimom img');

        if (hoverTargets.length === 0 || images.length === 0) {
            console.warn("Hover targets or images not found. Check your selectors.");
            return;
        }

        function scaleImages(scale) {
            images.forEach(img => {
                img.style.transform = `scale(${scale})`;
                img.style.transition = 'transform 0.5s 0.1s ease-in-out'; // Smooth animation
            });
        }

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => scaleImages(1.05)); // Scale up
            target.addEventListener('mouseleave', () => scaleImages(1)); // Scale back
        });
    });
    // End of Select the elements that trigger the hover effect




    // Menu
    // with disableScroll
    document.addEventListener("DOMContentLoaded", function () {
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let isScrollingDown = scrollTop > lastScrollTop;

            if (isScrollingDown) {
                // Scrolling Down
                document.querySelectorAll(".css-8rc4sr").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("css-8rc4sr", "css-odqpyi");
                    }
                });
                document.querySelectorAll(".css-ql26rf").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("css-ql26rf", "css-odqpyi");
                    }
                });

                document.querySelectorAll(".css-1rxxw9").forEach(el => {
                    el.classList.replace("css-1rxxw9", "css-3u4rzc");
                });

                if (scrollTop > 700) {
                    document.querySelectorAll(".css-3u4rzc").forEach(el => {
                        el.classList.replace("css-3u4rzc", "css-1rxxw9");
                    });
                }

            } else {
                // Scrolling Up
                if (scrollTop < 0) {
                    let isScrollingDown = false; // Added line
                    document.querySelectorAll(".css-odqpyi").forEach(el => {
                        if (!el.classList.contains("css-1r4uo8r")) {
                            el.classList.replace("css-odqpyi", "css-8rc4sr");
                        }
                    });
                    document.querySelectorAll(".css-ql26rf").forEach(el => {
                        if (!el.classList.contains("css-1r4uo8r")) {
                            el.classList.replace("css-ql26rf", "css-odqpyi");
                        }
                    });

                    document.querySelectorAll(".css-3u4rzc").forEach(el => {
                        el.classList.replace("css-3u4rzc", "css-1rxxw9");
                    });

                } else {
                    document.querySelectorAll(".css-odqpyi").forEach(el => {
                        if (!el.classList.contains("css-1r4uo8r")) {
                            el.classList.replace("css-odqpyi", "css-ql26rf");
                        }
                    });
                    document.querySelectorAll(".css-80o3fs").forEach(el => {
                        el.classList.replace("css-80o3fs", "css-1vo9grg");
                    });
                    document.querySelectorAll(".css-1b0rwyo").forEach(el => {
                        el.classList.replace("css-1b0rwyo", "css-17xzk5j");
                    });
                } 
            }

            lastScrollTop = scrollTop;
        });
    });

    // without disableScroll
    // document.addEventListener("DOMContentLoaded", function () {
    //   let lastScrollTop = 0;
    //   let scrollPaused = false; // Flag to pause/resume scroll actions

    //   window.addEventListener("scroll", function () {
    //       if (scrollPaused) return; // Skip scroll logic if paused

    //       let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //       let isScrollingDown = scrollTop > lastScrollTop;

    //       if (isScrollingDown) {
    //           document.querySelectorAll(".css-8rc4sr").forEach(el => {
    //               if (!el.classList.contains("css-1r4uo8r")) {
    //                   el.classList.replace("css-8rc4sr", "css-odqpyi");
    //               }
    //           });
    //           document.querySelectorAll(".css-ql26rf").forEach(el => {
    //               if (!el.classList.contains("css-1r4uo8r")) {
    //                   el.classList.replace("css-ql26rf", "css-odqpyi");
    //               }
    //           });

    //           document.querySelectorAll(".css-1rxxw9").forEach(el => {
    //               el.classList.replace("css-1rxxw9", "css-3u4rzc");
    //           });

    //           if (scrollTop > 400) {
    //               document.querySelectorAll(".css-3u4rzc").forEach(el => {
    //                   el.classList.replace("css-3u4rzc", "css-1rxxw9");
    //               });
    //           }

    //       } else {
    //           if (scrollTop < 400) {
    //               document.querySelectorAll(".css-odqpyi").forEach(el => {
    //                   if (!el.classList.contains("css-1r4uo8r")) {
    //                       el.classList.replace("css-odqpyi", "css-8rc4sr");
    //                   }
    //               });
    //               document.querySelectorAll(".css-ql26rf").forEach(el => {
    //                   if (!el.classList.contains("css-1r4uo8r")) {
    //                       el.classList.replace("css-ql26rf", "css-odqpyi");
    //                   }
    //               });

    //               document.querySelectorAll(".css-3u4rzc").forEach(el => {
    //                   el.classList.replace("css-3u4rzc", "css-1rxxw9");
    //               });

    //           } else {
    //               document.querySelectorAll(".css-odqpyi").forEach(el => {
    //                   if (!el.classList.contains("css-1r4uo8r")) {
    //                       el.classList.replace("css-odqpyi", "css-ql26rf");
    //                   }
    //               });
    //               document.querySelectorAll(".css-80o3fs").forEach(el => {
    //                   el.classList.replace("css-80o3fs", "css-1vo9grg");
    //               });
    //               document.querySelectorAll(".css-1b0rwyo").forEach(el => {
    //                   el.classList.replace("css-1b0rwyo", "css-17xzk5j");
    //               });
    //           }
    //       }

    //       lastScrollTop = scrollTop;
    //   });

    //   $(".css-80o3fs, .css-1vo9grg, .css-9rljy5").click(function () {
    //       scrollPaused = !scrollPaused; // Toggle scroll pause state

    //       $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
    //       $(".css-8rc4sr").toggleClass("css-odqpyi");
    //       $(".css-ql26rf").toggleClass("css-1r4uo8r");

    //       $("svg path:nth-child(1), svg path:nth-child(3)").each(function () {
    //           let current = $(this).attr("stroke-dasharray");
    //           $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
    //       });

    //       $("svg path:nth-child(2)").each(function () {
    //           let current = $(this).attr("stroke-dasharray");
    //           $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
    //       });

    //       $(".css-4s4697").slideToggle(300);
    //       $(".css-14nav46").toggleClass("active");
    //       $(".css-k008qs").toggleClass("hide");
    //       $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
    //       $(".css-1noinxx").toggleClass("show");
    //       $(".css-1qj3vgi").toggleClass("show");
    //       $(".css-rswfdo").toggleClass("show");
    //       $(".css-1b0rwyo_copy").toggleClass("z_index");

    //       $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
    //       $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");

    //       let button = $(this);
    //       let textNode = button.contents().filter(function () {
    //           return this.nodeType === 3; // Find the text node
    //       }).last();

    //       let newText = textNode.text().trim() === "Menu" ? "Close" : "Menu";
    //       textNode.replaceWith(" " + newText); // Preserve spacing
    //   });
    // });




    // // disableScroll
    // function disableScroll() {
    //     document.addEventListener("wheel", preventScroll, { passive: false });
    //     document.addEventListener("touchmove", preventScroll, { passive: false });
    //     document.addEventListener("keydown", preventArrowKeys);
    // }

    // function enableScroll() {
    //     document.removeEventListener("wheel", preventScroll);
    //     document.removeEventListener("touchmove", preventScroll);
    //     document.removeEventListener("keydown", preventArrowKeys);
    // }

    // function preventScroll(e) {
    //     e.preventDefault();
    // }

    // function preventArrowKeys(e) {
    //     const keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
    //     if (keys.includes(e.keyCode)) {
    //         e.preventDefault();
    //     }
    // }

    // with disableScroll
    $(".css-80o3fs, .css-1vo9grg, .css-9rljy5").click(function() {
        let isActive = $(this).hasClass("css-1vo9grg_copy");

        if (isActive) {
            enableScroll(); // Enable scrolling on second click
        } else {
            disableScroll(); // Disable scrolling on first click
        }

        $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
        $(".css-8rc4sr").toggleClass("css-odqpyi");
        $(".css-ql26rf").toggleClass("css-1r4uo8r");

        // Toggle stroke-dasharray values for path elements
        $("svg path:nth-child(1), svg path:nth-child(3)").each(function() {
            let current = $(this).attr("stroke-dasharray");
            $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        $("svg path:nth-child(2)").each(function() {
            let current = $(this).attr("stroke-dasharray");
            $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        // Toggle display for .css-4s4697
        $(".css-4s4697").slideToggle(300);
        $(".css-14nav46").toggleClass("active");
        $(".css-k008qs").toggleClass("hide");
        $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
        $(".css-1noinxx").toggleClass("show");
        $(".css-1qj3vgi").toggleClass("show");
        $(".css-rswfdo").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("z_index");

        $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");

        // Toggle button text without removing the SVG
        let button = $(this);
        let textNode = button.contents().filter(function() {
            return this.nodeType === 3; // Find the text node
        }).last(); // Ensure it's the correct text node

        let newText = textNode.text().trim() === "Menu" ? "Close" : "Menu";
        textNode.replaceWith(" " + newText); // Preserve spacing
    });

    // Search
    $(".css-1b0rwyo").click(function() {

      let isActive = $(this).hasClass("b0rwyo-disable");

      if (isActive) {
          enableScroll();
      } else {
          disableScroll();
      }

      // Toggle the class for the clicked element
      $(this).toggleClass("css-17xzk5j b0rwyo-disable");
      $(".css-qodd0n").toggleClass("css-1xopwtd");
      // $(".css-4s4697").slideUp("fast");
      $(".css-8rc4sr, .css-80o3fs, .css-1rxxw9").removeClass("css-odqpyi css-1vo9grg_copy css-1r4uo8r css-3u4rzc_copy");

      // Show/hide the .close elements
      if ($(".css-qodd0n").hasClass("css-1xopwtd")) {
          $(".css-1xopwtd .close").show();
          $(".css-qodd0n .open").hide();
      } else {
          $(".css-qodd0n .close").hide();
          $(".css-qodd0n .open").show();
      }
      $(".css-zqkl8g").slideToggle("fast");
      $(".css-1ic147l, .css-80o3fs, .css-k008qs, .css-1vo9grg, .css-1rxxw9").toggleClass("z_index");
    });




    // with overflow hidden
    // $(".css-80o3fs, .css-1vo9grg").click(function() {
    //   $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
    //   // $(".css-8rc4sr, .css-ql26rf").toggleClass("css-1r4uo8r css-odqpyi");
    //   $(".css-8rc4sr").toggleClass("css-odqpyi");
    //   $(".css-ql26rf").toggleClass("css-1r4uo8r");

      
      
    //   // Toggle stroke-dasharray values for path elements
    //   $("svg path:nth-child(1), svg path:nth-child(3)").each(function() {
    //     let current = $(this).attr("stroke-dasharray");
    //     $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
    //   });

    //   $("svg path:nth-child(2)").each(function() {
    //     let current = $(this).attr("stroke-dasharray");
    //     $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
    //   });

    //   // Toggle display for .css-4s4697
    //   $(".css-4s4697").slideToggle(300);
    //   $(".css-14nav46").toggleClass("active");
    //   $(".css-k008qs").toggleClass("hide");
    //   $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
    //   $(".css-1noinxx").toggleClass("show");
    //   $(".css-1qj3vgi").toggleClass("show");
    //   $(".css-rswfdo").toggleClass("show");
    //   // $(".chakra-ui-light").toggleClass("hidden");


    //   let isHidden = $(".chakra-ui-light").hasClass("hidden");

    //   if (!isHidden) {
    //     // Store the scroll position
    //     let scrollTop = $(window).scrollTop();
    //     // $("body").css("--scrollbar-width", window.innerWidth - document.documentElement.clientWidth + "px");

          
    //     // Add hidden class & fix position
    //     $(".chakra-ui-light").addClass("hidden").css({
    //       position: "fixed",
    //       top: `-${scrollTop}px`,
    //       // top: `-800px`,
    //       width: "100%"
    //     });
    //   } else {
    //     // Remove hidden class and restore position
    //     let scrollTop = Math.abs(parseInt($(".chakra-ui-light").css("top")));
    //     $(".chakra-ui-light").removeClass("hidden").css({ position: "", top: "", width: "" });
        
      
    //     // Restore scroll position
    //     $(window).scrollTop(scrollTop);
    //   }

    //   $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
    //   $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");

    //   // Toggle button text without removing the SVG
    //   let button = $(this);
    //   let textNode = button.contents().filter(function() {
    //     return this.nodeType === 3; // Find the text node
    //   }).last(); // Ensure it's the correct text node

    //   let newText = textNode.text().trim() === "Menu" ? "Close" : "Menu";
    //   textNode.replaceWith(" " + newText); // Preserve spacing
    // });
    // End of Menu





    // document.addEventListener("DOMContentLoaded", function () {
    //     const button = document.querySelector(".css-80o3fs");

    //     button.addEventListener("click", function () {
    //         if (button.innerText == "Menu") {
    //             button.innerText = "Close";
    //         } else {
    //             button.innerText = "Menu";
    //         }
    //     });
    // });

    // ერთი კლასის შეცვლა მეორეთი
    // $(".css-80o3fs").click(function() {
    //   if ($(this).hasClass("css-80o3fs")) {
    //     $(this).removeClass("css-80o3fs").addClass("css-1vo9grg");
    //     $(".css-8rc4sr").removeClass("css-8rc4sr").addClass("css-1r4uo8r");
    //   } else {
    //     $(this).removeClass("css-1vo9grg").addClass("css-80o3fs");
    //     $(".css-8rc4sr").removeClass("css-1r4uo8r").addClass("css-8rc4sr");
    //   }
    // });
  }


  if (mediaQuery1.matches && !mediaQuery3.matches) {

    // Menu
    // with disableScroll
    document.addEventListener("DOMContentLoaded", function () {
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let isScrollingDown = scrollTop > lastScrollTop;

            if (isScrollingDown) {
                // Scrolling Down
                document.querySelectorAll(".css-8rc4sr").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("css-8rc4sr", "css-odqpyi");
                    }
                });
                document.querySelectorAll(".css-ql26rf").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("css-ql26rf", "css-odqpyi");
                    }
                });

                document.querySelectorAll(".css-1rxxw9").forEach(el => {
                    el.classList.replace("css-1rxxw9", "css-3u4rzc");
                });

                if (scrollTop > 700) {
                    document.querySelectorAll(".css-3u4rzc").forEach(el => {
                        el.classList.replace("css-3u4rzc", "css-1rxxw9");
                    });
                }

            } else {
                // Scrolling Up
                if (scrollTop < 400) {
                    let isScrollingDown = false; // Added line
                    document.querySelectorAll(".css-odqpyi").forEach(el => {
                        if (!el.classList.contains("css-1r4uo8r")) {
                            el.classList.replace("css-odqpyi", "css-8rc4sr");
                        }
                    });
                    document.querySelectorAll(".css-ql26rf").forEach(el => {
                        if (!el.classList.contains("css-1r4uo8r")) {
                            el.classList.replace("css-ql26rf", "css-odqpyi");
                        }
                    });

                    document.querySelectorAll(".css-3u4rzc").forEach(el => {
                        el.classList.replace("css-3u4rzc", "css-1rxxw9");
                    });

                } else {
                    document.querySelectorAll(".css-odqpyi").forEach(el => {
                        if (!el.classList.contains("css-1r4uo8r")) {
                            el.classList.replace("css-odqpyi", "css-ql26rf");
                        }
                    });
                    document.querySelectorAll(".css-80o3fs").forEach(el => {
                        el.classList.replace("css-80o3fs", "css-1vo9grg");
                    });
                    document.querySelectorAll(".css-1b0rwyo").forEach(el => {
                        el.classList.replace("css-1b0rwyo", "css-17xzk5j");
                    });
                } 
            }

            lastScrollTop = scrollTop;
        });
    });


    // without disableScroll
    // document.addEventListener("DOMContentLoaded", function () {
    //   let lastScrollTop = 0;
    //   let scrollPaused = false; // Flag to pause/resume scroll actions

    //   window.addEventListener("scroll", function () {
    //       if (scrollPaused) return; // Skip scroll logic if paused

    //       let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //       let isScrollingDown = scrollTop > lastScrollTop;

    //       if (isScrollingDown) {
    //           document.querySelectorAll(".css-8rc4sr").forEach(el => {
    //               if (!el.classList.contains("css-1r4uo8r")) {
    //                   el.classList.replace("css-8rc4sr", "css-odqpyi");
    //               }
    //           });
    //           document.querySelectorAll(".css-ql26rf").forEach(el => {
    //               if (!el.classList.contains("css-1r4uo8r")) {
    //                   el.classList.replace("css-ql26rf", "css-odqpyi");
    //               }
    //           });

    //           document.querySelectorAll(".css-1rxxw9").forEach(el => {
    //               el.classList.replace("css-1rxxw9", "css-3u4rzc");
    //           });

    //           if (scrollTop > 400) {
    //               document.querySelectorAll(".css-3u4rzc").forEach(el => {
    //                   el.classList.replace("css-3u4rzc", "css-1rxxw9");
    //               });
    //           }

    //       } else {
    //           if (scrollTop < 400) {
    //               document.querySelectorAll(".css-odqpyi").forEach(el => {
    //                   if (!el.classList.contains("css-1r4uo8r")) {
    //                       el.classList.replace("css-odqpyi", "css-8rc4sr");
    //                   }
    //               });
    //               document.querySelectorAll(".css-ql26rf").forEach(el => {
    //                   if (!el.classList.contains("css-1r4uo8r")) {
    //                       el.classList.replace("css-ql26rf", "css-odqpyi");
    //                   }
    //               });

    //               document.querySelectorAll(".css-3u4rzc").forEach(el => {
    //                   el.classList.replace("css-3u4rzc", "css-1rxxw9");
    //               });

    //           } else {
    //               document.querySelectorAll(".css-odqpyi").forEach(el => {
    //                   if (!el.classList.contains("css-1r4uo8r")) {
    //                       el.classList.replace("css-odqpyi", "css-ql26rf");
    //                   }
    //               });
    //               document.querySelectorAll(".css-80o3fs").forEach(el => {
    //                   el.classList.replace("css-80o3fs", "css-1vo9grg");
    //               });
    //               document.querySelectorAll(".css-1b0rwyo").forEach(el => {
    //                   el.classList.replace("css-1b0rwyo", "css-17xzk5j");
    //               });
    //           }
    //       }

    //       lastScrollTop = scrollTop;
    //   });

    //   $(".css-80o3fs, .css-1vo9grg, .css-9rljy5").click(function () {
    //       scrollPaused = !scrollPaused; // Toggle scroll pause state

    //       $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
    //       $(".css-8rc4sr").toggleClass("css-odqpyi");
    //       $(".css-ql26rf").toggleClass("css-1r4uo8r");

    //       $("svg path:nth-child(1), svg path:nth-child(3)").each(function () {
    //           let current = $(this).attr("stroke-dasharray");
    //           $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
    //       });

    //       $("svg path:nth-child(2)").each(function () {
    //           let current = $(this).attr("stroke-dasharray");
    //           $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
    //       });

    //       $(".css-4s4697").slideToggle(300);
    //       $(".css-14nav46").toggleClass("active");
    //       $(".css-k008qs").toggleClass("hide");
    //       $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
    //       $(".css-1noinxx").toggleClass("show");
    //       $(".css-1qj3vgi").toggleClass("show");
    //       $(".css-rswfdo").toggleClass("show");
    //       $(".css-1b0rwyo_copy").toggleClass("z_index");

    //       $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
    //       $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");
    //   });
    // });


    // disableScroll
    // function disableScroll() {
    //     document.addEventListener("wheel", preventScroll, { passive: false });
    //     document.addEventListener("touchmove", preventScroll, { passive: false });
    //     document.addEventListener("keydown", preventArrowKeys);
    // }

    // function enableScroll() {
    //     document.removeEventListener("wheel", preventScroll);
    //     document.removeEventListener("touchmove", preventScroll);
    //     document.removeEventListener("keydown", preventArrowKeys);
    // }

    // function preventScroll(e) {
    //     e.preventDefault();
    // }

    // function preventArrowKeys(e) {
    //     const keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
    //     if (keys.includes(e.keyCode)) {
    //         e.preventDefault();
    //     }
    // }

    // with disableScroll
    $(".css-80o3fs, .css-1vo9grg, .css-9rljy5").click(function() {
        let isActive = $(this).hasClass("css-1vo9grg_copy");

        if (isActive) {
            enableScroll(); // Enable scrolling on second click
        } else {
            disableScroll(); // Disable scrolling on first click
        }

        $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
        $(".css-8rc4sr").toggleClass("css-odqpyi");
        $(".css-ql26rf").toggleClass("css-1r4uo8r");

        // Toggle stroke-dasharray values for path elements
        $("svg path:nth-child(1), svg path:nth-child(3)").each(function() {
            let current = $(this).attr("stroke-dasharray");
            $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        $("svg path:nth-child(2)").each(function() {
            let current = $(this).attr("stroke-dasharray");
            $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        // Toggle display for .css-4s4697
        $(".css-4s4697").slideToggle(300);
        $(".css-14nav46").toggleClass("active");
        $(".css-k008qs").toggleClass("hide");
        $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
        $(".css-1noinxx").toggleClass("show");
        $(".css-1qj3vgi").toggleClass("show");
        $(".css-rswfdo").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("z_index");

        $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");
    });

    // Search
    $(".css-1b0rwyo").click(function() {

      let isActive = $(this).hasClass("b0rwyo-disable");

      if (isActive) {
          enableScroll();
      } else {
          disableScroll();
      }

      // Toggle the class for the clicked element
      $(this).toggleClass("css-17xzk5j b0rwyo-disable");
      $(".css-qodd0n").toggleClass("css-1xopwtd");
      $(".css-9rljy5").toggleClass("css-9rljy5-disable");
      // $(".css-4s4697").slideUp("fast");
      $(".css-8rc4sr, .css-80o3fs, .css-1rxxw9").removeClass("css-odqpyi css-1vo9grg_copy css-1r4uo8r css-3u4rzc_copy");

      // Show/hide the .close elements
      if ($(".css-qodd0n").hasClass("css-1xopwtd")) {
          $(".css-1xopwtd .close").show();
          $(".css-qodd0n .open").hide();
      } else {
          $(".css-qodd0n .close").hide();
          $(".css-qodd0n .open").show();
      }
      $(".css-zqkl8g").slideToggle("fast");
      $(".css-1ic147l, .css-80o3fs, .css-k008qs, .css-1vo9grg, .css-1rxxw9").toggleClass("z_index");
    });
    // End of Menu
  }

  if (mediaQuery2.matches) {
    console.log('mediaQuery2 is active');
    // Logic for mediaQuery2
    document.addEventListener("DOMContentLoaded", function () {
      let lastScrollTop = 0;
      let scrollPaused = false;

      window.addEventListener("scroll", function () {
        if (scrollPaused) return;

        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let isScrollingDown = scrollTop > lastScrollTop;

        if (isScrollingDown) {
          document.querySelectorAll(".css-8rc4sr").forEach(el => {
            if (!el.classList.contains("css-1r4uo8r")) {
              el.classList.replace("css-8rc4sr", "css-odqpyi");
            }
          });
          document.querySelectorAll(".css-ql26rf").forEach(el => {
            if (!el.classList.contains("css-1r4uo8r")) {
              el.classList.replace("css-ql26rf", "css-odqpyi");
            }
          });

          document.querySelectorAll(".css-1rxxw9").forEach(el => {
            el.classList.replace("css-1rxxw9", "css-3u4rzc");
          });

          if (scrollTop > 700) {
            document.querySelectorAll(".css-3u4rzc").forEach(el => {
              el.classList.replace("css-3u4rzc", "css-1rxxw9");
            });
          }

        } else {
          if (scrollTop < 400) {
            document.querySelectorAll(".css-odqpyi").forEach(el => {
              if (!el.classList.contains("css-1r4uo8r")) {
                el.classList.replace("css-odqpyi", "css-8rc4sr");
              }
            });
            document.querySelectorAll(".css-ql26rf").forEach(el => {
              if (!el.classList.contains("css-1r4uo8r")) {
                el.classList.replace("css-ql26rf", "css-odqpyi");
              }
            });

            document.querySelectorAll(".css-3u4rzc").forEach(el => {
              el.classList.replace("css-3u4rzc", "css-1rxxw9");
            });

          } else {
            document.querySelectorAll(".css-odqpyi").forEach(el => {
              if (!el.classList.contains("css-1r4uo8r")) {
                el.classList.replace("css-odqpyi", "css-ql26rf");
              }
            });
            document.querySelectorAll(".css-80o3fs").forEach(el => {
              el.classList.replace("css-80o3fs", "css-1vo9grg");
            });
            document.querySelectorAll(".css-1b0rwyo").forEach(el => {
              el.classList.replace("css-1b0rwyo", "css-17xzk5j");
            });
          }
        }

        lastScrollTop = scrollTop;
      });

      $(".css-80o3fs, .css-1vo9grg, .css-9rljy5").click(function () {
        scrollPaused = !scrollPaused;

        $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
        $(".css-8rc4sr").toggleClass("css-odqpyi");
        $(".css-ql26rf").toggleClass("css-1r4uo8r");

        $("svg path:nth-child(1), svg path:nth-child(3)").each(function () {
          let current = $(this).attr("stroke-dasharray");
          $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        $("svg path:nth-child(2)").each(function () {
          let current = $(this).attr("stroke-dasharray");
          $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        $(".css-4s4697").slideToggle(300);
        $(".css-14nav46").toggleClass("active");
        $(".css-k008qs").toggleClass("hide");
        $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
        $(".css-1noinxx").toggleClass("show");
        $(".css-1qj3vgi").toggleClass("show");
        $(".css-rswfdo").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("z_index");

        $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");
      });
    });
    
    // disableScroll
    // function disableScroll() {
    //     document.addEventListener("wheel", preventScroll, { passive: false });
    //     document.addEventListener("touchmove", preventScroll, { passive: false });
    //     document.addEventListener("keydown", preventArrowKeys);
    // }

    // function enableScroll() {
    //     document.removeEventListener("wheel", preventScroll);
    //     document.removeEventListener("touchmove", preventScroll);
    //     document.removeEventListener("keydown", preventArrowKeys);
    // }

    // function preventScroll(e) {
    //     e.preventDefault();
    // }

    // function preventArrowKeys(e) {
    //     const keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
    //     if (keys.includes(e.keyCode)) {
    //         e.preventDefault();
    //     }
    // }

    $(".css-1b0rwyo").click(function() {

      let isActive = $(this).hasClass("b0rwyo-disable");

      if (isActive) {
          enableScroll();
      } else {
          disableScroll();
      }

      // Toggle the class for the clicked element
      $(this).toggleClass("css-17xzk5j b0rwyo-disable");
      $(".css-qodd0n").toggleClass("css-1xopwtd");
      // $(".css-4s4697").slideUp("fast");
      $(".css-8rc4sr, .css-80o3fs, .css-1rxxw9").removeClass("css-odqpyi css-1vo9grg_copy css-1r4uo8r css-3u4rzc_copy");

      // Show/hide the .close elements
      if ($(".css-qodd0n").hasClass("css-1xopwtd")) {
          $(".css-1xopwtd .close").show();
          $(".css-qodd0n .open").hide();
      } else {
          $(".css-qodd0n .close").hide();
          $(".css-qodd0n .open").show();
      }
      $(".css-zqkl8g").slideToggle("fast");
      $(".css-1ic147l, .css-80o3fs, .css-k008qs, .css-1vo9grg, .css-1rxxw9").toggleClass("z_index");
    });
  }

  if (mediaQuery3.matches) {
    console.log('mediaQuery3 is active');
    // Logic for mediaQuery3
    document.addEventListener("DOMContentLoaded", function () {
      let lastScrollTop = 0;
      let scrollPaused = false;

      window.addEventListener("scroll", function () {
        if (scrollPaused) return;

        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let isScrollingDown = scrollTop > lastScrollTop;

        if (isScrollingDown) {
          document.querySelectorAll(".css-8rc4sr").forEach(el => {
            if (!el.classList.contains("css-1r4uo8r")) {
              el.classList.replace("css-8rc4sr", "css-odqpyi");
            }
          });
          document.querySelectorAll(".css-ql26rf").forEach(el => {
            if (!el.classList.contains("css-1r4uo8r")) {
              el.classList.replace("css-ql26rf", "css-odqpyi");
            }
          });

          document.querySelectorAll(".css-1rxxw9").forEach(el => {
            el.classList.replace("css-1rxxw9", "css-3u4rzc");
          });

          if (scrollTop > 700) {
            document.querySelectorAll(".css-3u4rzc").forEach(el => {
              el.classList.replace("css-3u4rzc", "css-1rxxw9");
            });
          }

        } else {
          if (scrollTop < 400) {
            document.querySelectorAll(".css-odqpyi").forEach(el => {
              if (!el.classList.contains("css-1r4uo8r")) {
                el.classList.replace("css-odqpyi", "css-8rc4sr");
              }
            });
            document.querySelectorAll(".css-ql26rf").forEach(el => {
              if (!el.classList.contains("css-1r4uo8r")) {
                el.classList.replace("css-ql26rf", "css-odqpyi");
              }
            });

            document.querySelectorAll(".css-3u4rzc").forEach(el => {
              el.classList.replace("css-3u4rzc", "css-1rxxw9");
            });

          } else {
            document.querySelectorAll(".css-odqpyi").forEach(el => {
              if (!el.classList.contains("css-1r4uo8r")) {
                el.classList.replace("css-odqpyi", "css-ql26rf");
              }
            });
            document.querySelectorAll(".css-80o3fs").forEach(el => {
              el.classList.replace("css-80o3fs", "css-1vo9grg");
            });
            document.querySelectorAll(".css-1b0rwyo").forEach(el => {
              el.classList.replace("css-1b0rwyo", "css-17xzk5j");
            });
          }
        }

        lastScrollTop = scrollTop;
      });

      $(".css-80o3fs, .css-1vo9grg, .css-9rljy5").click(function () {
        scrollPaused = !scrollPaused;

        $(this).toggleClass("css-1vo9grg_copy css-1r4uo8r");
        $(".css-8rc4sr").toggleClass("css-odqpyi");
        $(".css-ql26rf").toggleClass("css-1r4uo8r");

        $("svg path:nth-child(1), svg path:nth-child(3)").each(function () {
          let current = $(this).attr("stroke-dasharray");
          $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        $("svg path:nth-child(2)").each(function () {
          let current = $(this).attr("stroke-dasharray");
          $(this).attr("stroke-dasharray", current === "1px 1px" ? "0px 1px" : "1px 1px");
        });

        $(".css-4s4697").slideToggle(300);
        $(".css-14nav46").toggleClass("active");
        $(".css-k008qs").toggleClass("hide");
        $(".css-1rxxw9_copy").toggleClass("css-3u4rzc_copy");
        $(".css-1noinxx").toggleClass("show");
        $(".css-1qj3vgi").toggleClass("show");
        $(".css-rswfdo").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("z_index");

        $(".css-1mfo8lb, .css-8sh8uf").toggleClass("show");
        $(".css-1b0rwyo_copy").toggleClass("css-17xzk5j_copy");
      });
    });

    // disableScroll
    // function disableScroll() {
    //     document.addEventListener("wheel", preventScroll, { passive: false });
    //     document.addEventListener("touchmove", preventScroll, { passive: false });
    //     document.addEventListener("keydown", preventArrowKeys);
    // }

    // function enableScroll() {
    //     document.removeEventListener("wheel", preventScroll);
    //     document.removeEventListener("touchmove", preventScroll);
    //     document.removeEventListener("keydown", preventArrowKeys);
    // }

    // function preventScroll(e) {
    //     e.preventDefault();
    // }

    // function preventArrowKeys(e) {
    //     const keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
    //     if (keys.includes(e.keyCode)) {
    //         e.preventDefault();
    //     }
    // }

    $(".css-1b0rwyo").click(function() {

      let isActive = $(this).hasClass("b0rwyo-disable");

      if (isActive) {
          enableScroll();
      } else {
          disableScroll();
      }

      // Toggle the class for the clicked element
      $(this).toggleClass("css-17xzk5j b0rwyo-disable");
      $(".css-qodd0n").toggleClass("css-1xopwtd");
      $(".css-9rljy5").toggleClass("css-9rljy5-disable");
      // $(".css-4s4697").slideUp("fast");
      $(".css-8rc4sr, .css-80o3fs, .css-1rxxw9").removeClass("css-odqpyi css-1vo9grg_copy css-1r4uo8r css-3u4rzc_copy");

      // Show/hide the .close elements
      if ($(".css-qodd0n").hasClass("css-1xopwtd")) {
          $(".css-1xopwtd .close").show();
          $(".css-qodd0n .open").hide();
      } else {
          $(".css-qodd0n .close").hide();
          $(".css-qodd0n .open").show();
      }
      $(".css-zqkl8g").slideToggle("fast");
      $(".css-1ic147l, .css-80o3fs, .css-k008qs, .css-1vo9grg, .css-1rxxw9").toggleClass("z_index");
    });
  }
}

// Initial check
handleMediaQueryChange();

// Add event listeners for changes
mediaQuery.addEventListener('change', handleMediaQueryChange);
mediaQuery1.addEventListener('change', handleMediaQueryChange);
mediaQuery2.addEventListener('change', handleMediaQueryChange);
mediaQuery3.addEventListener('change', handleMediaQueryChange);

// End of Define media queries



// document.addEventListener('DOMContentLoaded', function() {
//     // 3. Initialize Swiper
//     var swiper = new Swiper('.swiper', {
//         speed: 300,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         loop: true,
//         slidesPerView: 1,
//         spaceBetween: 20,
//         // centeredSlides: true,
//     });



//     // Add custom click handler for the entire pagination container
//     const paginationContainer = document.querySelector('.swiper-pagination');
//     paginationContainer.addEventListener('click', (event) => {
//         const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
//         const rect = paginationContainer.getBoundingClientRect();
//         const offsetX = event.clientX - rect.left; // Mouse position relative to the container

//         // Calculate which bullet was clicked based on the mouse position
//         const bulletWidth = rect.width / bullets.length;
//         const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

//         // Change the slide to the corresponding bullet index
//         if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
//             // Use swiper.slideToLoop if loop is enabled, otherwise use swiper.slideTo
//             if (swiper.params.loop) {
//                 swiper.slideToLoop(clickedBulletIndex);
//             } else {
//                 swiper.slideTo(clickedBulletIndex);
//             }
//         }
//     });

//     // Update the pagination bullets to reflect the correct active slide
//     swiper.on('slideChange', () => {
//         const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
//         const realIndex = swiper.realIndex; // Get the real index of the active slide

//         bullets.forEach((bullet, index) => {
//             if (index === realIndex) {
//                 bullet.classList.add('swiper-pagination-bullet-active');
//                 bullet.setAttribute('aria-current', 'true');
//             } else {
//                 bullet.classList.remove('swiper-pagination-bullet-active');
//                 bullet.removeAttribute('aria-current');
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    // Define text data for each slide
    const slideTexts = [
        { heading: "Amaravati Masterplan", year: "1984", location: "India" },
        { heading: "Changfeng Mixed Use Development", year: "1991", location: "China" },
        { heading: "Ferring Pharmaceuticals A/S", year: "2004", location: "Denmark" },
        { heading: "West Kowloon Cultural District", year: "2012", location: "China" },
        { heading: "Sanlin Riverside development", year: "1996", location: "China" }
    ];

    // Initialize Swiper
    if (!window.Swiper) {
        console.error("Swiper library is not loaded. Please include Swiper JS.");
        return;
    }

    const swiper = new Swiper('.swiper', {
        speed: 300,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        // slidesPerView: 1,
        spaceBetween: 20,
    });

    // Select text and icon elements
    const headingElement = document.querySelector('.css-2rksz3 .chakra-heading');
    const yearElement = document.querySelector('.css-m6ftsm .chakra-text.css-ixwp1l');
    const locationElement = document.querySelector('.css-m6ftsm .chakra-text.css-1c6lpfk .chakra-text.css-ixwp1l');
    const iconElement = document.querySelector('.css-m6ftsm .chakra-text.css-1c6lpfk .chakra-icon.css-laz32f');

    // Check if elements exist
    if (!headingElement || !yearElement || !locationElement || !iconElement) {
        console.error("One or more elements not found. Please verify selectors:");
        console.log("Heading element:", headingElement);
        console.log("Year element:", yearElement);
        console.log("Location element:", locationElement);
        console.log("Icon element:", iconElement);
        return;
    }

    // Function to update text and animate elements
    function updateSlideText(index) {
        // Ensure index is within bounds
        const textData = slideTexts[index % slideTexts.length];

        // Add animation class to all elements
        headingElement.classList.add('text-animate');
        yearElement.classList.add('text-animate');
        locationElement.classList.add('text-animate');
        iconElement.classList.add('text-animate');

        // Update text after fade-out (half the animation duration)
        setTimeout(() => {
            headingElement.textContent = textData.heading;
            yearElement.textContent = textData.year;
            locationElement.textContent = textData.location;

            // Remove animation class after full animation duration
            setTimeout(() => {
                headingElement.classList.remove('text-animate');
                yearElement.classList.remove('text-animate');
                locationElement.classList.remove('text-animate');
                iconElement.classList.remove('text-animate');
            }, 600); // Match total animation duration
        }, 0); // Half of animation duration for fade-out
    }

    // Update text on initial load
    updateSlideText(swiper.realIndex);

    // Update text on slide change
    swiper.on('slideChange', () => {
        console.log("Slide changed to index:", swiper.realIndex);
        updateSlideText(swiper.realIndex);
    });

    // Add custom click handler for pagination
    const paginationContainer = document.querySelector('.swiper-pagination');
    if (paginationContainer) {
        paginationContainer.addEventListener('click', (event) => {
            const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
            const rect = paginationContainer.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const bulletWidth = rect.width / bullets.length;
            const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

            if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
                console.log("Clicked bullet index:", clickedBulletIndex);
                if (swiper.params.loop) {
                    swiper.slideToLoop(clickedBulletIndex);
                } else {
                    swiper.slideTo(clickedBulletIndex);
                }
            }
        });
    } else {
        console.error("Pagination container not found.");
    }

    // Update pagination bullets
    swiper.on('slideChange', () => {
        const bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'));
        const realIndex = swiper.realIndex;

        bullets.forEach((bullet, index) => {
            if (index === realIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
                bullet.setAttribute('aria-current', 'true');
            } else {
                bullet.classList.remove('swiper-pagination-bullet-active');
                bullet.removeAttribute('aria-current');
            }
        });
    });
});


$(".years-css .css-hageq2").click(function (e) {
    e.stopPropagation();
    $(".years-css .css-x5dysd").toggleClass("css-gb9m9p");
    $(".years-css .css-hageq2").toggleClass("css-none");
});
$("body.years-css").click(function () {
    $(".years-css .css-x5dysd").removeClass("css-gb9m9p");
    $(".years-css .css-hageq2").removeClass("css-none");
});
$('.years-css .css-x5dysd').click(function (e) {
    e.stopPropagation();
});




// Specify the link to copy
// function copyLink() {
//     // Specify the link to copy
//     const link = "file:///D:/HTML%205/My%20Projects/Arqiteqtura1/years.html#";
    
//     // Copy the link to the clipboard
//     navigator.clipboard.writeText(link).then(() => {
//         // Get the button text element
//         const buttonText = document.getElementById("copyButtonText");
        
//         // Change button text to "Link copied"
//         buttonText.textContent = "Link copied";
        
//         // Revert back to "Copy link" after 1.25 seconds (1250ms)
//         setTimeout(() => {
//             buttonText.textContent = "Copy link";
//         }, 1000);
//     }).catch(err => {
//         console.error("Failed to copy link: ", err);
//         // Optionally, handle the error (e.g., show an alert)
//         alert("Failed to copy the link. Please try again.");
//     });
// }

function copyLink() {
    // Specify the link to copy
    const link = "file:///D:/HTML%205/My%20Projects/Arqiteqtura1/years.html#";
    
    // Copy the link to the clipboard
    navigator.clipboard.writeText(link).then(() => {
        // Get the button text element
        const buttonText = document.getElementById("copyButtonText");
        
        // Change button text to "Link copied" and add pale class
        buttonText.textContent = "Link copied";
        buttonText.classList.add("pale");
        
        // Revert back to "Copy link" and remove pale class after 1.25 seconds
        setTimeout(() => {
            buttonText.textContent = "Copy link";
            buttonText.classList.remove("pale");
        }, 1000);
    }).catch(err => {
        console.error("Failed to copy link: ", err);
        alert("Failed to copy the link. Please try again.");
    });
}




// smooth scroll
$('a[href*="#scroll-up"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});



window.onload = function() {
    window.scrollTo(0, 0);
};



// underline with border-image
// const element = document.querySelector('.chakra-text.css-1b0ybnk.read-more-about');

// element.addEventListener('mouseenter', () => {
//   clearInterval(element._interval);
//   let step = 1;

//   element._interval = setInterval(() => {
//     if (step > 5) {
//       clearInterval(element._interval);
//       return;
//     }
//     element.className = 'read-more-about step-' + step;
//     step++;
//   }, 100);
// });

// element.addEventListener('mouseleave', () => {
//   clearInterval(element._interval);
//   let step = 1;

//   element._interval = setInterval(() => {
//     if (step > 5) {
//       clearInterval(element._interval);
//       element.className = 'read-more-about';
//       return;
//     }
//     element.className = 'read-more-about step-reverse-' + step;
//     step++;
//   }, 100);
// });


const element = document.querySelector('.read-more-about');

// შენარჩუნებული კლასები, რომლების არ უნდა წაიშალოს:
const preservedClasses = ['chakra-text', 'css-1b0ybnk'];

function buildClassName(stepClass = '') {
  // აქ ვაგროვებთ ყველა შენარჩუნებულ კლასს, რომლებიც უკვე აქვს ელემენტს
  const currentClasses = Array.from(element.classList);
  // ფილტრაციის შემდეგ მხოლოდ ისინი მიგვყავს, რომლებიც preservedClasses-ში არიან
  const keptClasses = currentClasses.filter(cls => preservedClasses.includes(cls));

  // საბოლოო კლასების სტრინგი
  return [...keptClasses, 'read-more-about', stepClass].filter(Boolean).join(' ');
}

element.addEventListener('mouseenter', () => {
  clearInterval(element._interval);
  let step = 1;

  element._interval = setInterval(() => {
    if (step > 20) {
      clearInterval(element._interval);
      return;
    }
    element.className = buildClassName('step-' + step);
    step++;
  }, 15);
});

element.addEventListener('mouseleave', () => {
  clearInterval(element._interval);
  let step = 1;

  element._interval = setInterval(() => {
    if (step > 20) {
      clearInterval(element._interval);
      element.className = buildClassName('');
      return;
    }
    element.className = buildClassName('step-reverse-' + step);
    step++;
  }, 15);
});
// end of underline with border-image




