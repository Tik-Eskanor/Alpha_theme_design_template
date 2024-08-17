
$(document).ready(function(){
  $(".gimg").magnificPopup({
      type:'image',
      gallery:{
          enabled:true
      }
  })
})




$('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

$('.button-group  button').click(function(){
    $('.button-group  button').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.grid').isotope({
        filter:selector
    });
    return  false;
});



$(document).ready(function(){
  $('.owl-one').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
  });

  $('.owl-two').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:3
          },
          800:{
            items:4
        },
          1000:{
              items:6
          }
      }
  });

});


$('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
          items:3
      },
        1000:{
            items:3
        }
    }
});


$('.owl-four').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
          items:1
      },
        1000:{
            items:1
        }
    }
});



dropBtn = document.getElementById("drop-btn")

displayImg = document.getElementById("display-img")
textContainer = document.getElementById("display-text")
projectItem =  document.querySelectorAll(".project-section .col-md-8 .img")


dropBtn.addEventListener('click',()=>[
  textContainer.classList.toggle("remove-active")
]);

for (let i = 0; i < projectItem.length; i++) {
  
  projectItem[i].addEventListener('click',()=>{
   let img =  projectItem[i].children[0].src
   let title =  projectItem[i].children[2].children[0].textContent
   let body =  projectItem[i].children[2].children[1].textContent

   displayImg.src=img
   textContainer.children[0].textContent = title
   textContainer.children[1].textContent = body
  })
  
}