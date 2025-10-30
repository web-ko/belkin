$(document).on("click", ".label-architecture, .label-landscape, .label-urban-design, .label-interior, .label-graphic, .label-research, .label-bio, .label-civic, .label-climate, .label-culture, .label-education, .label-infra, .label-life, .label-mixed, .label-office, .label-parks, .label-residential, .label-urban-district, .label-urban-lands, .label-transformation, .label-completed, .label-under, .label-ongo, .label-americas, .label-asia, .label-australia, .label-europe, .label-middle, .label-nordics", function (e) {
    e.preventDefault(); // just for debugging
    $(this).find(".chakra-icon").toggleClass("chakra-icon-fill");
});


// .css('animation', 'fadeOut 0.5s 0.5s both').show().css('opacity', 1);
$('.label-architecture').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show');
    $(".additional-margin1").toggleClass("hide");
});
$('.label-landscape').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show1');
});
$('.label-urban-design').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show2');
    $(".additional-margin1").toggleClass("hide1");
});
$('.label-interior').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show3');
    $(".additional-margin1").toggleClass("hide2");
    $(".additional-margin2").toggleClass("hide");
});
$('.label-graphic').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show4');
    $(".additional-margin1").toggleClass("hide3");
    $(".additional-margin").toggleClass("hide1");
});
$('.label-research').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show5');
});
$('.label-bio').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show6');
     $(".additional-margin1").toggleClass("hide4");
     $(".additional-margin2").toggleClass("hide2");
});
$('.label-civic').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show7');
    $(".additional-margin1").toggleClass("hide5");
    $(".additional-margin2").toggleClass("hide3");
});
$('.label-climate').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show8');
    $(".additional-margin1").toggleClass("hide6");
    $(".additional-margin2").toggleClass("hide1");
    $(".additional-margin3").toggleClass("hide");
});
$('.label-culture').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show9');
    $(".additional-margin1").toggleClass("hide7");
});
$('.label-education').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show10');
    $(".additional-margin1").toggleClass("hide8");
    $(".additional-margin2").toggleClass("hide4");
    $(".additional-margin3").toggleClass("hide1");
    $(".additional-margin4").toggleClass("hide");
});
$('.label-infra').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show11');
    $(".additional-margin1").toggleClass("hide9");
    $(".additional-margin2").toggleClass("hide5");
    $(".additional-margin3").toggleClass("hide2");
    $(".additional-margin4").toggleClass("hide1");
});
$('.label-life').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show12');
    $(".additional-margin1").toggleClass("hide10");
});
$('.label-mixed').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show13');
    $(".additional-margin1").toggleClass("hide11");
});
$('.label-office').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show14');
    $(".additional-margin1").toggleClass("hide12");
});
$('.label-parks').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show15');
    $(".additional-margin1").toggleClass("hide13");
});
$('.label-residential').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show16');
    $(".additional-margin1").toggleClass("hide14");
});
$('.label-urban-district').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show17');
    $(".additional-margin1").toggleClass("hide15");
    $(".additional-margin2").toggleClass("hide6");
});
$('.label-urban-lands').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show18');
    $(".additional-margin1").toggleClass("hide16");
});
$('.label-transformation').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show19');
    $(".additional-margin1").toggleClass("hide17");
    $(".additional-margin2").toggleClass("hide7");
});
$('.label-completed').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show20');
    $(".additional-margin1").toggleClass("hide18");
    $(".additional-margin2").toggleClass("hide8");
});
$('.label-under').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show21');
});
$('.label-ongo').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show22');
    $(".additional-margin1").toggleClass("hide19");
    $(".additional-margin2").toggleClass("hide9");
    $(".additional-margin3").toggleClass("hide5");
    $(".additional-margin4").toggleClass("hide3");
});
$('.label-americas').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show23');
    $(".additional-margin1").toggleClass("hide20");
    $(".additional-margin2").toggleClass("hide10");
});
$('.label-asia').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show24');
    $(".additional-margin1").toggleClass("hide21");
    $(".additional-margin2").toggleClass("hide11");
});
$('.label-australia').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show25');
    $(".additional-margin1").toggleClass("hide22");
    $(".additional-margin2").toggleClass("hide12");
    $(".additional-margin3").toggleClass("hide3");
});
$('.label-europe').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show26');
    $(".additional-margin1").toggleClass("hide23");
    $(".additional-margin2").toggleClass("hide13");
    $(".additional-margin3").toggleClass("hide4");
    $(".additional-margin4").toggleClass("hide2");
});
$('.label-middle').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show27');
    $(".additional-margin1").toggleClass("hide24");
    $(".additional-margin2").toggleClass("hide14");
});
$('.label-nordics').click(function() {
    $('.clear-button').css('animation', 'fadeOut 0.5s 0.5s both').toggleClass('show28');
});







$('.css-list').click(function() {
  $('.grid-container').hide();
  $('.list-container').show();
  // $('.body-all-project .css-1qiu1u3 .css-eqspsu').hide();

  $('.css-list').addClass("css-1i3oz8q");
  $('.css-list').removeClass("css-vldfbe");
  $('.css-grid').addClass("css-1vww46y");
  $('.css-grid').removeClass("css-6usqxl");
});

$('.css-grid').click(function() {
  $('.list-container').hide();
  $('.grid-container').show();
  // $('.body-all-project .css-1qiu1u3 .css-eqspsu').show();


  $('.css-list').removeClass("css-1i3oz8q");
  $('.css-list').addClass("css-vldfbe");
  $('.css-grid').removeClass("css-1vww46y");
  $('.css-grid').addClass("css-6usqxl");
});






// Filter
// $(document).ready(function() {
//     // Initialize - show all items
//     $('.filter-item').show();

//     // Handle filter clicks
//     $('.filter-label').click(function() {
//         // Toggle active state
//         $(this).toggleClass('active');
        
//         // Get all active filters
//         const activeFilters = [];
//         $('.filter-label.active').each(function() {
//             const filterValue = $(this).data('filter');
//             activeFilters.push(filterValue);
//         });

//         // If no filters are active, show all
//         if (activeFilters.length === 0) {
//             $('.filter-item').fadeIn(500);
//             return;
//         }

//         // Hide all first
//         $('.filter-item').hide();

//         // Show items that match ANY active filter
//         activeFilters.forEach(function(filter) {
//             $(`.filter-item[data-filter*="${filter}"]`).fadeIn(500);
//         });
//     });
// });



// $(document).ready(function() {
//     // Initialize - show all items
//     $('.filter-item').show();

//     // Handle filter clicks
//     $('.filter-label').click(function() {
//         // Toggle active state
//         $(this).toggleClass('active');
        
//         // Get all active filters
//         const activeFilters = [];
//         $('.filter-label.active').each(function() {
//             const filterValue = $(this).data('filter');
//             activeFilters.push(filterValue);
//         });

//         // If no filters are active, show all
//         if (activeFilters.length === 0) {
//             $('.filter-item').fadeIn(500);
//             return;
//         }

//         // Hide all first
//         $('.filter-item').hide();

//         // Show items that match ANY active filter
//         activeFilters.forEach(function(filter) {
//             const $items = $(`.filter-item[data-filter*="${filter}"]`);
//             $items.removeClass('animate'); // Reset animation
//             setTimeout(() => {
//                 $items.addClass('animate').fadeIn(500);
//             }, 10);
//         });
//     });
// });



// $(document).ready(function() {
//     // Initialize - show all items
//     $('.filter-item').show();

//     // Handle filter clicks
//     $('.filter-label').click(function() {
//         // Toggle active state
//         $(this).toggleClass('active');
        
//         // Get all active filters
//         const activeFilters = [];
//         $('.filter-label.active').each(function() {
//             activeFilters.push($(this).data('filter'));
//         });

//         // If no filters are active, show all
//         if (activeFilters.length === 0) {
//             $('.filter-item').fadeIn(500);
//             return;
//         }

//         // Hide all first
//         $('.filter-item').hide();

//         // Show matching items with FORCED animation replay
//         // activeFilters.forEach(function(filter) {
//         //     const $items = $(`.filter-item[data-filter*="${filter}"]`);
            
//         //     // 1. Clone the element (forcing a fresh animation)
//         //     $items.each(function() {
//         //         const $el = $(this);
//         //         const $clone = $el.clone(true); // Deep clone with events
//         //         $el.replaceWith($clone);
                
//         //         // 2. Show with fade + animation
//         //         $clone.fadeIn(500);
//         //     });
//         // });


//         activeFilters.forEach(function(filter) {
//             const $items = $(`.filter-item[data-filter*="${filter}"]`);
            
//             // 1. Remove the animation class
//             $items.removeClass('filter-item');
            
//             // 2. Force a reflow (required for animation reset)
//             void $items[0].offsetWidth;
            
//             // 3. Re-add the animation class
//             $items.addClass('filter-item').fadeIn(500);
//         });
//     });
// });



// $(document).ready(function() {
//     // Initialize - show all items
//     $('.filter-item').show();

//     // Handle filter clicks
//     $('.filter-label').click(function() {
//         // Toggle active state
//         $(this).toggleClass('active');
        
//         // Get all active filters
//         const activeFilters = [];
//         $('.filter-label.active').each(function() {
//             activeFilters.push($(this).data('filter'));
//         });

//         // If no filters are active, show all
//         if (activeFilters.length === 0) {
//             $('.filter-item').css('animation', 'fadeOut 0.5s 0.5s both')
//                             .show()
//                             .css('opacity', 1);
//             return;
//         }

//         // Hide all first
//         $('.filter-item').hide().css('opacity', 0);

//         // Show matching items with animation restart
//         activeFilters.forEach(function(filter) {
//             const $items = $(`.filter-item[data-filter*="${filter}"]`);
            
//             // Reset and restart animation
//             $items.css('animation', 'none')
//                  .show()
//                  .delay(10) // Small delay to allow reflow
//                  .queue(function() {
//                      $(this).css('animation', 'fadeIn 0.5s 0.5s both');
//                      $(this).dequeue();
//                  });
//         });
//     });
// });
// End of filter


$('.clear-button').click(function() {
    $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
    $(".chakra-icon").removeClass("chakra-icon-fill");
    $(".filter-label").removeClass("active");
    $('.filter-item').css('animation', 'fadeOut 0.5s 0.5s both').show().css('opacity', 1);
    $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");
    // $('.filter-item').css('animation', 'none').show().css('animation', 'fadeIn 0.5s forwards', 'opacity', 1);
});






// const mediaQuery = window.matchMedia('(max-width: 743px)')
// if (mediaQuery.matches) {
// }



// Remove tags
function removeElementsOnMobile() {
    const isMobile = window.matchMedia('(max-width: 743px)').matches;

    if (isMobile) {
      document.querySelectorAll('.filter-big, .additional-margin').forEach(el => el.remove());
      console.log('Removed .filter-big and .additional-margin elements');
    }
}

// Run once when the page is ready
window.addEventListener('DOMContentLoaded', removeElementsOnMobile);

// Optional: Also remove on screen resize
window.addEventListener('resize', removeElementsOnMobile);
// End of remove tags








// Sort-Filter
// for one selector
// document.addEventListener('DOMContentLoaded', () => {
//   const contentList = document.querySelector('.sort-wrapper');
//   const items = Array.from(contentList.children);
//   let originalOrder = [...items]; // Store original order
//   let isAZSorted = false;
//   let isZASorted = false;
//   let isOldestSorted = false;
//   let isLatestSorted = false;

//   // Helper function to restore original order
//   const restoreOriginalOrder = () => {
//     contentList.innerHTML = '';
//     originalOrder.forEach(item => contentList.appendChild(item));
//   };

//   // Helper function to get text for alphabetical sorting
//   const getSortText = (item) => {
//     // Use data-alphabet attribute, fallback to textContent if missing
//     return (item.dataset.alphabet || item.textContent.trim()).toLowerCase();
//   };

//   // A-Z Sort Button
//   document.querySelector('.button-a-z').addEventListener('click', () => {
//     if (!isAZSorted) {
//       const sortedItems = [...items].sort((a, b) => {
//         const textA = getSortText(a);
//         const textB = getSortText(b);
//         console.log('A-Z Sorting:', textA, textB); // Debug
//         return textA.localeCompare(textB);
//       });
//       contentList.innerHTML = '';
//       sortedItems.forEach(item => contentList.appendChild(item));
//       isAZSorted = true;
//       isZASorted = false;
//       isOldestSorted = false;
//       isLatestSorted = false;
//     } else {
//       restoreOriginalOrder();
//       isAZSorted = false;
//     }
//   });

//   // Z-A Sort Button
//   document.querySelector('.button-z-a').addEventListener('click', () => {
//     if (!isZASorted) {
//       const sortedItems = [...items].sort((a, b) => {
//         const textA = getSortText(a);
//         const textB = getSortText(b);
//         console.log('Z-A Sorting:', textA, textB); // Debug
//         return textB.localeCompare(textA);
//       });
//       contentList.innerHTML = '';
//       sortedItems.forEach(item => contentList.appendChild(item));
//       isZASorted = true;
//       isAZSorted = false;
//       isOldestSorted = false;
//       isLatestSorted = false;
//     } else {
//       restoreOriginalOrder();
//       isZASorted = false;
//     }
//   });

//   // Oldest Sort Button (unchanged)
//   document.querySelector('.button-oldest').addEventListener('click', () => {
//     if (!isOldestSorted) {
//       const sortedItems = [...items].sort((a, b) => 
//         new Date(a.dataset.date) - new Date(b.dataset.date)
//       );
//       contentList.innerHTML = '';
//       sortedItems.forEach(item => contentList.appendChild(item));
//       isOldestSorted = true;
//       isAZSorted = false;
//       isZASorted = false;
//       isLatestSorted = false;
//     } else {
//       restoreOriginalOrder();
//       isOldestSorted = false;
//     }
//   });

//   // Latest Sort Button (unchanged)
//   document.querySelector('.button-latest').addEventListener('click', () => {
//     if (!isLatestSorted) {
//       const sortedItems = [...items].sort((a, b) => 
//         new Date(b.dataset.date) - new Date(a.dataset.date)
//       );
//       contentList.innerHTML = '';
//       sortedItems.forEach(item => contentList.appendChild(item));
//       isLatestSorted = true;
//       isAZSorted = false;
//       isZASorted = false;
//       isOldestSorted = false;
//     } else {
//       restoreOriginalOrder();
//       isLatestSorted = false;
//     }
//   });
// });


// Reset filter and sort with filter-label and sort-button (Between filter and sort)
document.addEventListener('DOMContentLoaded', () => {
    const sortState = new Map(); // Store state for each sort-wrapper

    document.querySelectorAll('.sort-wrapper').forEach(contentList => {
        const items = Array.from(contentList.children);
        const state = {
            originalOrder: [...items],
            isAZSorted: false,
            isZASorted: false,
            isOldestSorted: false,
            isLatestSorted: false,
            restoreOriginalOrder: () => {
                contentList.innerHTML = '';
                state.originalOrder.forEach(item => contentList.appendChild(item));
            }
        };
        sortState.set(contentList, state);

        // Helper function to get text for alphabetical sorting
        const getSortText = (item) => {
            return (item.dataset.alphabet || item.textContent.trim()).toLowerCase();
        };

        // A-Z Sort Button
        document.querySelector('.button-a-z').addEventListener('click', () => {
            if (!state.isAZSorted) {
                const sortedItems = [...items].sort((a, b) => getSortText(a).localeCompare(getSortText(b)));
                contentList.innerHTML = '';
                sortedItems.forEach(item => contentList.appendChild(item));
                state.isAZSorted = true;
                state.isZASorted = false;
                state.isOldestSorted = false;
                state.isLatestSorted = false;
            } else {
                state.restoreOriginalOrder();
                state.isAZSorted = false;
            }
            // Existing clear logic
            $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
            $('.filter-item').show().css('opacity', 1);
            $(".chakra-icon").removeClass("chakra-icon-fill");
            $(".filter-label").removeClass("active");
            $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");
        });

        // Z-A Sort Button
        document.querySelector('.button-z-a').addEventListener('click', () => {
            if (!state.isZASorted) {
                const sortedItems = [...items].sort((a, b) => getSortText(b).localeCompare(getSortText(a)));
                contentList.innerHTML = '';
                sortedItems.forEach(item => contentList.appendChild(item));
                state.isZASorted = true;
                state.isAZSorted = false;
                state.isOldestSorted = false;
                state.isLatestSorted = false;
            } else {
                state.restoreOriginalOrder();
                state.isZASorted = false;
            }
            // Existing clear logic
            $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
            $('.filter-item').show().css('opacity', 1);
            $(".chakra-icon").removeClass("chakra-icon-fill");
            $(".filter-label").removeClass("active");
            $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");
        });

        // Oldest Sort Button
        document.querySelector('.button-oldest').addEventListener('click', () => {
            if (!state.isOldestSorted) {
                const sortedItems = [...items].sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
                contentList.innerHTML = '';
                sortedItems.forEach(item => contentList.appendChild(item));
                state.isOldestSorted = true;
                state.isAZSorted = false;
                state.isZASorted = false;
                state.isLatestSorted = false;
            } else {
                state.restoreOriginalOrder();
                state.isOldestSorted = false;
            }
            // Existing clear logic
            $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
            $('.filter-item').show().css('opacity', 1);
            $(".chakra-icon").removeClass("chakra-icon-fill");
            $(".filter-label").removeClass("active");
            $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");
        });

        // Latest Sort Button
        document.querySelector('.button-latest').addEventListener('click', () => {
            if (!state.isLatestSorted) {
                const sortedItems = [...items].sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
                contentList.innerHTML = '';
                sortedItems.forEach(item => contentList.appendChild(item));
                state.isLatestSorted = true;
                state.isAZSorted = false;
                state.isZASorted = false;
                state.isOldestSorted = false;
            } else {
                state.restoreOriginalOrder();
                state.isLatestSorted = false;
            }
            // Existing clear logic
            $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
            $('.filter-item').show().css('opacity', 1);
            $(".chakra-icon").removeClass("chakra-icon-fill");
            $(".filter-label").removeClass("active");
            $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");
        });
    });

    // Update .sort-button-filter handler
    $('.sort-button-filter').click(function() {
        $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest show-latest");
        $(".button-a-z span, .button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");

        sortState.forEach((state, contentList) => {
            state.isAZSorted = false;
            state.isZASorted = false;
            state.isOldestSorted = false;
            state.isLatestSorted = false;
            state.restoreOriginalOrder();
        });

        // Clear filter-related visual states
        $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
        $('.filter-item').show().css('opacity', 1);
        $(".chakra-icon").removeClass("chakra-icon-fill");
        $(".filter-label").removeClass("active");
        $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");


    });

    // Update .filter-label handler
    $(document).ready(function() {
        $('.filter-item').show();

        $('.filter-label').click(function() {
            $(this).toggleClass('active');
            const activeFilters = [];
            $('.filter-label.active').each(function() {
                activeFilters.push($(this).data('filter'));
            });

            // Reset sorting states
            sortState.forEach((state, contentList) => {
                state.isAZSorted = false;
                state.isZASorted = false;
                state.isOldestSorted = false;
                state.isLatestSorted = false;
                state.restoreOriginalOrder();
            });

            $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest show-latest");
            $(".button-a-z span, .button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");

            if (activeFilters.length === 0) {
                $('.filter-item').css('animation', 'fadeOut 0.5s 0.5s both').show().css('opacity', 1);
                return;
            }

            $('.filter-item').hide().css('opacity', 0);
            activeFilters.forEach(function(filter) {
                const $items = $(`.filter-item[data-filter*="${filter}"]`);
                $items.css('animation', 'none').show().delay(10).queue(function() {
                    $(this).css('animation', 'fadeIn 0.5s 0.5s both');
                    $(this).dequeue();
                });
            });
        });
    });
});

$(".button-filter").click(function() {
    $(".css-filter").slideToggle(300, function() {
        // This callback runs after the slide animation completes
        // $(".css-text-change").text(function(i, text) {
        //     return text === "Show more" ? "Show less" : "Show more";
        // });
    });

    $(".css-sort, .css-search").slideUp(300);
    $(".filter-transform").toggleClass("filter-rotate");
    $(".sort-transform").removeClass("sort-rotate");
    $(".search-transform").removeClass("search-rotate");
    
    $(".css-ld4ywo").toggleClass("hide");
});
$(".button-sort").click(function() {
    $(".css-sort").slideToggle(300, function() {
        // This callback runs after the slide animation completes
        // $(".css-text-change").text(function(i, text) {
        //     return text === "Show more" ? "Show less" : "Show more";
        // });
    });

    $(".css-filter, .css-search").slideUp(300);
    $(".sort-transform").toggleClass("sort-rotate");
    $(".filter-transform").removeClass("filter-rotate");
    $(".search-transform").removeClass("search-rotate");

    $(".search-projects input").toggleClass("hide");
});
$(".button-search").click(function() {
    $(".css-search").slideToggle(300, function() {
        document.getElementById('searchInput').focus();
        // This callback runs after the slide animation completes
        // $(".css-text-change").text(function(i, text) {
        //     return text === "Show more" ? "Show less" : "Show more";
        // });
    });

    $(".css-filter, .css-sort").slideUp(300);
    $(".search-transform").toggleClass("search-rotate");
    $(".sort-transform").removeClass("sort-rotate");
    $(".filter-transform").removeClass("filter-rotate");

    $(".search-projects input").removeClass("hide");
});
// End of Reset filter and sort with filter-label and sort-button (Between filter and sort)






// !Reset Filter and Sort-filter with click button-filter and button-sort
// document.addEventListener('DOMContentLoaded', () => {
//   const contentLists = document.querySelectorAll('.sort-wrapper');

//   contentLists.forEach(contentList => {
//     const items = Array.from(contentList.children);
//     let originalOrder = [...items]; // Store original order
//     let isAZSorted = false;
//     let isZASorted = false;
//     let isOldestSorted = false;
//     let isLatestSorted = false;

//     // Helper function to restore original order
//     const restoreOriginalOrder = () => {
//       contentList.innerHTML = '';
//       originalOrder.forEach(item => contentList.appendChild(item));
//     };

//     // Helper function to reset all sorting flags
//     const resetSortingState = () => {
//       restoreOriginalOrder();
//       isAZSorted = false;
//       isZASorted = false;
//       isOldestSorted = false;
//       isLatestSorted = false;
//     };

//     // Helper function to get text for alphabetical sorting
//     const getSortText = (item) => {
//       // Use data-alphabet attribute, fallback to textContent if missing
//       return (item.dataset.alphabet || item.textContent.trim()).toLowerCase();
//     };

//     // A-Z Sort Button
//     document.querySelector('.button-a-z').addEventListener('click', () => {
//       if (!isAZSorted) {
//         const sortedItems = [...items].sort((a, b) => {
//           const textA = getSortText(a);
//           const textB = getSortText(b);
//           console.log('A-Z Sorting:', textA, textB); // Debug
//           return textA.localeCompare(textB);
//         });
//         contentList.innerHTML = '';
//         sortedItems.forEach(item => contentList.appendChild(item));
//         isAZSorted = true;
//         isZASorted = false;
//         isOldestSorted = false;
//         isLatestSorted = false;
//       } else {
//         restoreOriginalOrder();
//         isAZSorted = false;
//       }

//       $('.filter-item').css('animation', 'fadeIn 0.5s 0.5s both, fadeOut 0.5s 0.5s both').css('opacity', 1);
//     });

//     // Z-A Sort Button
//     document.querySelector('.button-z-a').addEventListener('click', () => {
//       if (!isZASorted) {
//         const sortedItems = [...items].sort((a, b) => {
//           const textA = getSortText(a);
//           const textB = getSortText(b);
//           console.log('Z-A Sorting:', textA, textB); // Debug
//           return textB.localeCompare(textA);
//         });
//         contentList.innerHTML = '';
//         sortedItems.forEach(item => contentList.appendChild(item));
//         isZASorted = true;
//         isAZSorted = false;
//         isOldestSorted = false;
//         isLatestSorted = false;
//       } else {
//         restoreOriginalOrder();
//         isZASorted = false;
//       }

//       $('.filter-item').css('animation', 'fadeIn 0.5s 0.5s both, fadeOut 0.5s 0.5s both').css('opacity', 1);
//     });

//     // Oldest Sort Button
//     document.querySelector('.button-oldest').addEventListener('click', () => {
//       if (!isOldestSorted) {
//         const sortedItems = [...items].sort((a, b) => 
//           new Date(a.dataset.date) - new Date(b.dataset.date)
//         );
//         contentList.innerHTML = '';
//         sortedItems.forEach(item => contentList.appendChild(item));
//         isOldestSorted = true;
//         isAZSorted = false;
//         isZASorted = false;
//         isLatestSorted = false;
//       } else {
//         restoreOriginalOrder();
//         isOldestSorted = false;
//       }

//       $('.filter-item').css('animation', 'fadeIn 0.5s 0.5s both, fadeOut 0.5s 0.5s both').css('opacity', 1);
//     });

//     // Latest Sort Button
//     document.querySelector('.button-latest').addEventListener('click', () => {
//       if (!isLatestSorted) {
//         const sortedItems = [...items].sort((a, b) => 
//           new Date(b.dataset.date) - new Date(a.dataset.date)
//         );
//         contentList.innerHTML = '';
//         sortedItems.forEach(item => contentList.appendChild(item));
//         isLatestSorted = true;
//         isAZSorted = false;
//         isZASorted = false;
//         isOldestSorted = false;
//       } else {
//         restoreOriginalOrder();
//         isLatestSorted = false;
//       }

//       $('.filter-item').css('animation', 'fadeIn 0.5s 0.5s both, fadeOut 0.5s 0.5s both').css('opacity', 1);
//     });

//     // Expose resetSortingState to jQuery handlers
//     contentList.resetSortingState = resetSortingState;
//   });

//   // jQuery: Sort Button Filter Click Handler
//   $('.sort-button-filter').click(function() {
//     // Reset sorting state for all sort-wrappers
//     contentLists.forEach(contentList => {
//       if (contentList.resetSortingState) {
//         contentList.resetSortingState();
//       }
//     });

//     // Existing UI logic
//     $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest show-latest");
//     $(".button-a-z span, .button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");
//   });

//   // jQuery: Button Filter Click Handler
//   $('.button-filter').click(function() {
//         // Reset sorting state for all sort-wrappers
//         contentLists.forEach(contentList => {
//           if (contentList.resetSortingState) {
//             contentList.resetSortingState();
//           }
//         });

//         // Existing UI logic
//         $(".css-filter").slideToggle(300, function() {
//           // This callback runs after the slide animation completes
//           // $(".css-text-change").text(function(i, text) {
//           //     return text === "Show more" ? "Show less" : "Show more";
//           // });
//         });

//         $(".css-sort, .css-search").slideUp(300);
//         $(".filter-transform").toggleClass("filter-rotate");
//         $(".sort-transform").removeClass("sort-rotate");
//         $(".search-transform").removeClass("search-rotate");
        
//         $(".css-ld4ywo").toggleClass("hide");

//         $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest show-latest");
//         $(".button-a-z span, .button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");

//         $('.filter-item').css('animation', 'none').css('opacity', 1);
//   });
// });
// // End of Sort-filter


// $(".button-sort").click(function() {
//     $(".css-sort").slideToggle(300, function() {
//         // This callback runs after the slide animation completes
//         // $(".css-text-change").text(function(i, text) {
//         //     return text === "Show more" ? "Show less" : "Show more";
//         // });
//     });

//     $(".css-filter, .css-search").slideUp(300);
//     $(".sort-transform").toggleClass("sort-rotate");
//     $(".filter-transform").removeClass("filter-rotate");
//     $(".search-transform").removeClass("search-rotate");

//     $(".search-projects input").toggleClass("hide");


//     $(".clear-button").removeClass("show show1 show2 show3 show4 show5 show6 show7 show8 show9 show10 show11 show12 show13 show14 show15 show16 show17 show18 show19 show20 show21 show22 show23 show24 show25 show26 show27 show28");
//     $('.filter-item')/*.css('animation', 'fadeOut 0.5s 0.5s both')*/.show().css('opacity', 1);
//     $(".chakra-icon").removeClass("chakra-icon-fill");
//     $(".filter-label").removeClass("active");
//     $(".additional-margin1, .additional-margin2, .additional-margin3, .additional-margin4").removeClass("hide hide1 hide2 hide3 hide4 hide5 hide6 hide7 hide8 hide9 hide10 hide11 hide12 hide13 hide14 hide15 hide16 hide17 hide18 hide19 hide20 hide21 hide22 hide23 hide24");
// });
// $(".button-search").click(function() {
//     $(".css-search").slideToggle(300, function() {
//         // This callback runs after the slide animation completes
//         // $(".css-text-change").text(function(i, text) {
//         //     return text === "Show more" ? "Show less" : "Show more";
//         // });
//     });

//     $(".css-filter, .css-sort").slideUp(300);
//     $(".search-transform").toggleClass("search-rotate");
//     $(".sort-transform").removeClass("sort-rotate");
//     $(".filter-transform").removeClass("filter-rotate");

//     $(".search-projects input").removeClass("hide");
// });

// // Filter
// $(document).ready(function() {
//     // Initialize - show all items
//     $('.filter-item').show();

//     // Handle filter clicks
//     $('.filter-label').click(function() {
//         // Toggle active state
//         $(this).toggleClass('active');
        
//         // Get all active filters
//         const activeFilters = [];
//         $('.filter-label.active').each(function() {
//             activeFilters.push($(this).data('filter'));
//         });

//         // If no filters are active, show all
//         if (activeFilters.length === 0) {
//             $('.filter-item').css('animation', 'fadeOut 0.5s 0.5s both')
//                             .show()
//                             .css('opacity', 1);
//             return;
//         }

//         // Hide all first
//         $('.filter-item').hide().css('opacity', 0);

//         // Show matching items with animation restart
//         activeFilters.forEach(function(filter) {
//             const $items = $(`.filter-item[data-filter*="${filter}"]`);
            
//             // Reset and restart animation
//             $items.css('animation', 'none')
//                  .show()
//                  .delay(10) // Small delay to allow reflow
//                  .queue(function() {
//                      $(this).css('animation', 'fadeIn 0.5s 0.5s both');
//                      $(this).dequeue();
//                  });
//         });
//     });
// });
// !End of Reset Filter and Sort-filter with click button-filter and button-sort






$('.button-a-z').click(function() {
    $(".button-a-z span").toggleClass("under-line");
    $(".sort-button-filter").toggleClass("show-a-z").css('animation', 'fadeOut 0.5s 0.5s both');
    $(".sort-button-filter").removeClass("show-z-a show-oldest show-latest");
    $(".button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");
});
$('.button-z-a').click(function() {
    $(".button-z-a span").toggleClass("under-line");
    $(".sort-button-filter").toggleClass("show-z-a").css('animation', 'fadeOut 0.5s 0.5s both');
    $(".sort-button-filter").removeClass("show-a-z show-oldest show-latest");
    $(".button-a-z span, .button-oldest span, .button-latest span").removeClass("under-line");
});
$('.button-oldest').click(function() {
    $(".button-oldest span").toggleClass("under-line");
    $(".sort-button-filter").toggleClass("show-oldest").css('animation', 'fadeOut 0.5s 0.5s both');
    $(".sort-button-filter").removeClass("show-a-z show-z-a show-latest");
    $(".button-a-z span, .button-z-a span, .button-latest span").removeClass("under-line");
});
$('.button-latest').click(function() {
    $(".button-latest span").toggleClass("under-line");
    $(".sort-button-filter").toggleClass("show-latest").css('animation', 'fadeOut 0.5s 0.5s both');
    $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest");
    $(".button-a-z span, .button-z-a span, .button-oldest span").removeClass("under-line");
});


// document.querySelector('.css-icznz7').addEventListener('click', () => {
//     history.back();
// });

// document.querySelectorAll('.css-icznz7').forEach(button => {
//     button.addEventListener('click', () => {
//         history.back();
//     });
// });

// $('.sort-button-filter').click(function() {
//     $(".sort-button-filter").removeClass("show-a-z show-z-a show-oldest show-latest");
//     $(".button-a-z span, .button-z-a span, .button-oldest span, .button-latest span").removeClass("under-line");
// });

