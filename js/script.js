// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.querySelector(".chakra-button");
//     const path1 = document.querySelector(".path_1");
//     const path2 = document.querySelector(".path_2");
//     const path3 = document.querySelector(".path_3");

//     function animatePath(path, from, to, duration = 100) {
//         return new Promise((resolve) => {
//             let start = null;

//             function step(timestamp) {
//                 if (!start) start = timestamp;
//                 let progress = (timestamp - start) / duration;

//                 if (progress > 1) progress = 1;

//                 let value = from + (to - from) * progress;
//                 path.style.strokeDashoffset = `${value}px`;

//                 if (progress < 1) {
//                     requestAnimationFrame(step);
//                 } else {
//                     resolve();
//                 }
//             }

//             requestAnimationFrame(step);
//         });
//     }

//     function animateSequence(forward = true) {
//         if (forward) {
//             animatePath(path1, 0, -1)
//                 .then(() => animatePath(path1, 1, 0));
//                 // .then(() => animatePath(path1, 1, 0))
//                 .then(() => animatePath(path3, 0, -1))
//                 .then(() => animatePath(path3, 1, 0))
//                 // .then(() => animatePath(path3, 1, 0))
//                 // .then(() => animatePath(path2, -1, 1))
//                 .then(() => animatePath(path2, 0, -1))
//                 .then(() => animatePath(path2, 1, 0));
//         } else {
//             animatePath(path2, 0, 1)
//                 // .then(() => animatePath(path2, 1, -1))
                
//                 .then(() => animatePath(path1, 0, 1))
//                 .then(() => animatePath(path1, -1, 0))
//                 .then(() => animatePath(path3, 0, 1))
//                 .then(() => animatePath(path3, -1, 0))
//                 .then(() => animatePath(path2, -1, 0))
//                 // .then(() => animatePath(path3, -1, 0))
                
//                 // .then(() => animatePath(path1, -1, 0));
//         }
//     }

//     button.addEventListener("mouseenter", () => animateSequence(true));
//     button.addEventListener("mouseleave", () => animateSequence(false));
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



// Swiper
// Without change photos and texts when loading
// var swiper = new Swiper('.swiper', {
//     speed: 300,
//     // autoplay: {
//     //     delay: 3000,
//     // },
//     transitionTimingFunction: 'cubic-bezier(x1, y1, x2, y2)',
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     loop: true,
//     parallax: true,
//     simulateTouch: true,
//     grabCursor: true,
// });

// // Add custom click handler for the entire pagination container
// const paginationContainer = document.querySelector('.swiper-pagination');
// paginationContainer.addEventListener('click', (event) => {
//     const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
//     const rect = paginationContainer.getBoundingClientRect();
//     const offsetX = event.clientX - rect.left; // Mouse position relative to the container

//     // Calculate which bullet was clicked based on the mouse position
//     const bulletWidth = rect.width / bullets.length;
//     const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

//     // Change the slide to the corresponding bullet index
//     if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
//         // Use swiper.slideToLoop if loop is enabled, otherwise use swiper.slideTo
//         if (swiper.params.loop) {
//             swiper.slideToLoop(clickedBulletIndex);
//         } else {
//             swiper.slideTo(clickedBulletIndex);
//         }
//     }
// });

// // Update the pagination bullets to reflect the correct active slide
// swiper.on('slideChange', () => {
//     const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
//     const realIndex = swiper.realIndex; // Get the real index of the active slide

//     bullets.forEach((bullet, index) => {
//         if (index === realIndex) {
//             bullet.classList.add('swiper-pagination-bullet-active');
//             bullet.setAttribute('aria-current', 'true');
//         } else {
//             bullet.classList.remove('swiper-pagination-bullet-active');
//             bullet.removeAttribute('aria-current');
//         }
//     });
// });

// // Texts update
// const locations = [
//   { country: "Singapore", project: "North-South Corridor" },
//   { country: "United States", project: "Mission Rock Building G" },
//   { country: "Sweden", project: "World of Volvo" },
//   { country: "Faroe Islands", project: "Klaksvík City Center" }
// ];

// swiper.on('slideChange', function () {
//   const activeIndex = swiper.realIndex;
//   const activeLocation = locations[activeIndex];

//   const countryElement = document.querySelector('.css-lg9xot .chakra-text.css-ixwp1l');
//   const projectElement = document.querySelector('.css-lg9xot .chakra-heading.css-1ypxy8a');

//   if (activeLocation && countryElement && projectElement) {
//     // Add fade-out class
//     countryElement.classList.add('fade-out');
//     projectElement.classList.add('fade-out');

//     // Wait for the fade-out animation, then update text and fade back in
//     setTimeout(() => {
//       countryElement.textContent = activeLocation.country;
//       projectElement.textContent = activeLocation.project;

//       // Add fade-in class
//       countryElement.classList.remove('fade-out');
//       countryElement.classList.add('fade-in');

//       projectElement.classList.remove('fade-out');
//       projectElement.classList.add('fade-in');
//     }, 300); // Adjust delay to match CSS transition duration
//   }
// });
// End of Without change photos and texts when loading


// With change photos and texts when loading
document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".swiper-wrapper");
    const slides = Array.from(swiperContainer.children);

    // Locations data (linked to slides)
    const locations = [
        { country: "China", project: "Sanlin Riverside development" },
        { country: "China", project: "Xiamen Airlines HQ" },
        { country: "United States", project: "California High-Speed Rail" },
        { country: "Dubai", project: "Palm Flower" }
    ];

    // Pair slides with their location data
    let pairedData = slides.map((slide, index) => ({
        slide: slide.cloneNode(true), // Clone to avoid moving DOM nodes directly
        location: locations[index]
    }));

    // Shuffle function (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Shuffle pairedData array
    shuffleArray(pairedData);

    // Clear existing slides and re-insert shuffled ones
    swiperContainer.innerHTML = "";
    pairedData.forEach(pair => swiperContainer.appendChild(pair.slide));

    // Extract shuffled locations to update texts later
    const shuffledLocations = pairedData.map(pair => pair.location);

    // Initialize Swiper
    var swiper = new Swiper('.swiper', {
        speed: 300,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        parallax: true,
        simulateTouch: true,
        grabCursor: true,
    });

    // Add custom click handler for the entire pagination container
    const paginationContainer = document.querySelector('.swiper-pagination');
    paginationContainer.addEventListener('click', (event) => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const rect = paginationContainer.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // Mouse position relative to the container

        // Calculate which bullet was clicked based on the mouse position
        const bulletWidth = rect.width / bullets.length;
        const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

        // Change the slide to the corresponding bullet index
        if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
            // Use swiper.slideToLoop if loop is enabled, otherwise use swiper.slideTo
            if (swiper.params.loop) {
                swiper.slideToLoop(clickedBulletIndex);
            } else {
                swiper.slideTo(clickedBulletIndex);
            }
        }
    });

    // Update the pagination bullets to reflect the correct active slide
    swiper.on('slideChange', () => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const realIndex = swiper.realIndex; // Get the real index of the active slide

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

    // Function to update text based on active slide
    function updateTexts(index) {
        const activeLocation = shuffledLocations[index];

        const countryElement = document.querySelector('.css-lg9xot .chakra-text.css-ixwp1l');
        const projectElement = document.querySelector('.css-lg9xot .chakra-heading.css-1ypxy8a');

        if (activeLocation && countryElement && projectElement) {
            countryElement.classList.add('fade-out');
            projectElement.classList.add('fade-out');

            setTimeout(() => {
                countryElement.textContent = activeLocation.country;
                projectElement.textContent = activeLocation.project;

                countryElement.classList.remove('fade-out');
                countryElement.classList.add('fade-in');

                projectElement.classList.remove('fade-out');
                projectElement.classList.add('fade-in');
            }, 300); // Adjust timing for smooth transitions
        }
    }

    // Update text on slide change
    swiper.on('slideChange', function () {
        updateTexts(swiper.realIndex);
    });

    // Ensure the correct text is shown on first load
    updateTexts(swiper.realIndex);
});
// End of With change photos and texts when loading
// End of Swiper




// Run on first scroll only
let firstScroll = true;

window.addEventListener('scroll', function() {
    if (firstScroll) {
        reveal();
    }
});

function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal1, .reveal2, .reveal3, .reveal4, .reveal5, .reveal6, .reveal7, .reveal8, .reveal9, .reveal10, .reveal11, .reveal12, .reveal13, .reveal14, .reveal15, .reveal16, .reveal17, .reveal18, .reveal19, .reveal20, .reveal21, .reveal22, .reveal23, .reveal24, .reveal25, .reveal26, .reveal27');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 0;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');

            // Remove only the relevant class from the element
            element.classList.remove(
                'reveal', 'reveal1', 'reveal2', 'reveal3', 'reveal4', 
                'reveal5', 'reveal6', 'reveal7', 'reveal8', 'reveal9', 'reveal10', 'reveal11', 'reveal12', 'reveal13', 'reveal14', 'reveal15', 'reveal16', 'reveal17', 'reveal18', 'reveal19', 'reveal20', 'reveal21', 'reveal22', 'reveal23', 'reveal24', 'reveal25', 'reveal26', 'reveal27' 
            );
        }
    });

    // Disable further scroll checks once all elements are processed
    if (document.querySelectorAll('.reveal, .reveal1, .reveal2, .reveal3, .reveal4, .reveal5, .reveal6, .reveal7, .reveal8, .reveal9, .reveal10, .reveal11, .reveal12, .reveal13, .reveal14, .reveal15, .reveal16, .reveal17, .reveal18, .reveal19, .reveal20, .reveal21, .reveal22, .reveal23, .reveal24, .reveal25, .reveal26, .reveal27').length === 0) {
        firstScroll = false;
        window.removeEventListener('scroll', reveal);
    }
}
// End of Run on first scroll only


// var navigation = $(".scroll-up").height();
// $('a[href^="#scroll-up').on("click", function(){
//     var clickedElementAttrName = $(this).attr("href");
//     var seciton = $(clickedElementAttrName);
//     var scroToTop = seciton.offset().top - navigation;
//     console.log(scroToTop, navigation);
//     $("html,body").animate({
//         scrollTop:scroToTop
//     }, 500)
// });

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











