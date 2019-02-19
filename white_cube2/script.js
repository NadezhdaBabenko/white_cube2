// сколл меню
let linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.2;  
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        let w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}


//   всплытие popup
var open_pop_up=document.getElementsByClassName('open_pop_up');
for(i=0; i<open_pop_up.length; i++){
    open_pop_up[i].addEventListener('click', function(){
        var pop_up_window=document.getElementById('pop_up_window');
        pop_up_window.style.visibility='visible';
    });
};
var pop_up_close=document.getElementById('pop_up_close');
pop_up_close.addEventListener('click', function(){
    pop_up_window.style.visibility='hidden';
});

// затемнение при наведении
var block2Slider1=document.getElementById("block2Slider1");
block2Slider1.addEventListener("mouseover", function(){
    block2Slider1.style.backgroundColor='rgba(0,0,0,0.7)';
    var square1=document.getElementById("square1");
    var loc1=document.getElementById("loc1");
    square1.style.display="block";
    loc1.style.display="block";
});
block2Slider1.addEventListener("mouseout", function(){
    block2Slider1.style.backgroundColor='rgba(0,0,0,0)';
    var square1=document.getElementById("square1");
    var loc1=document.getElementById("loc1");
    square1.style.display="none";
    loc1.style.display="none";
});

var block2Slider2=document.getElementById("block2Slider2");
block2Slider2.addEventListener("mouseover", function(){
    block2Slider2.style.backgroundColor='rgba(0,0,0,0.7)';
    var square2=document.getElementById("square2");
    var loc2=document.getElementById("loc2");
    square2.style.display="block";
    loc2.style.display="block";
});
block2Slider2.addEventListener("mouseout", function(){
    block2Slider2.style.backgroundColor='rgba(0,0,0,0)';
    var square2=document.getElementById("square2");
    var loc2=document.getElementById("loc2");
    square2.style.display="none";
    loc2.style.display="none";
});

var block2Slider3=document.getElementById("block2Slider3");
block2Slider3.addEventListener("mouseover", function(){
    block2Slider3.style.backgroundColor='rgba(0,0,0,0.7)';
    var square3=document.getElementById("square3");
    var loc3=document.getElementById("loc3");
    square3.style.display="block";
    loc3.style.display="block";
});
block2Slider3.addEventListener("mouseout", function(){
    block2Slider3.style.backgroundColor='rgba(0,0,0,0)';
    var square3=document.getElementById("square3");
    var loc3=document.getElementById("loc3");
    square3.style.display="none";
    loc3.style.display="none";
});

var block2Slider3=document.getElementById("block2Slider3");
block2Slider3.addEventListener("mouseover", function(){
    block2Slider3.style.backgroundColor='rgba(0,0,0,0.7)';
    var square3=document.getElementById("square3");
    var loc3=document.getElementById("loc3");
    square3.style.display="block";
    loc3.style.display="block";
});
block2Slider3.addEventListener("mouseout", function(){
    block2Slider3.style.backgroundColor='rgba(0,0,0,0)';
    var square3=document.getElementById("square3");
    var loc3=document.getElementById("loc3");
    square3.style.display="none";
    loc3.style.display="none";
});

var block17Slider4=document.getElementById("block17Slider4");
block17Slider4.addEventListener("mouseover", function(){
    block17Slider4.style.backgroundColor='rgba(0,0,0,0.7)';
    var square4=document.getElementById("square4");
    var loc4=document.getElementById("loc4");
    square4.style.display="block";
    loc4.style.display="block";
});
block17Slider4.addEventListener("mouseout", function(){
    block17Slider4.style.backgroundColor='rgba(0,0,0,0)';
    var square4=document.getElementById("square4");
    var loc4=document.getElementById("loc4");
    square4.style.display="none";
    loc4.style.display="none";
});

var block17Slider5=document.getElementById("block17Slider5");
block17Slider5.addEventListener("mouseover", function(){
    block17Slider5.style.backgroundColor='rgba(0,0,0,0.7)';
    var square5=document.getElementById("square5");
    var loc5=document.getElementById("loc5");
    square5.style.display="block";
    loc5.style.display="block";
});
block17Slider5.addEventListener("mouseout", function(){
    block17Slider5.style.backgroundColor='rgba(0,0,0,0)';
    var square5=document.getElementById("square5");
    var loc5=document.getElementById("loc5");
    square5.style.display="none";
    loc5.style.display="none";
});

var block17Slider6=document.getElementById("block17Slider6");
block17Slider6.addEventListener("mouseover", function(){
    block17Slider6.style.backgroundColor='rgba(0,0,0,0.7)';
    var square6=document.getElementById("square6");
    var loc6=document.getElementById("loc6");
    square6.style.display="block";
    loc6.style.display="block";
});
block17Slider6.addEventListener("mouseout", function(){
    block17Slider6.style.backgroundColor='rgba(0,0,0,0)';
    var square6=document.getElementById("square6");
    var loc6=document.getElementById("loc6");
    square6.style.display="none";
    loc6.style.display="none";
});

var block17Slider7=document.getElementById("block17Slider7");
block17Slider7.addEventListener("mouseover", function(){
    block17Slider7.style.backgroundColor='rgba(0,0,0,0.7)';
    var square7=document.getElementById("square7");
    var loc7=document.getElementById("loc7");
    square7.style.display="block";
    loc7.style.display="block";
});
block17Slider7.addEventListener("mouseout", function(){
    block17Slider7.style.backgroundColor='rgba(0,0,0,0)';
    var square7=document.getElementById("square7");
    var loc7=document.getElementById("loc7");
    square7.style.display="none";
    loc7.style.display="none";
});

var block17Slider8=document.getElementById("block17Slider8");
block17Slider8.addEventListener("mouseover", function(){
    block17Slider8.style.backgroundColor='rgba(0,0,0,0.7)';
    var square8=document.getElementById("square8");
    var loc8=document.getElementById("loc8");
    square8.style.display="block";
    loc8.style.display="block";
});
block17Slider8.addEventListener("mouseout", function(){
    block17Slider8.style.backgroundColor='rgba(0,0,0,0)';
    var square8=document.getElementById("square8");
    var loc8=document.getElementById("loc8");
    square8.style.display="none";
    loc8.style.display="none";
});

var block17Slider9=document.getElementById("block17Slider9");
block17Slider9.addEventListener("mouseover", function(){
    block17Slider9.style.backgroundColor='rgba(0,0,0,0.7)';
    var square9=document.getElementById("square9");
    var loc9=document.getElementById("loc9");
    square9.style.display="block";
    loc9.style.display="block";
});
block17Slider9.addEventListener("mouseout", function(){
    block17Slider9.style.backgroundColor='rgba(0,0,0,0)';
    var square9=document.getElementById("square9");
    var loc9=document.getElementById("loc9");
    square9.style.display="none";
    loc9.style.display="none";
});

// Ввод номера телефона
// $(function() {
//     $('#phone_input').inputmask({   alias: "phone", "clearIncomplete": true });
// });
// $(function() {
//     $('#phone_input2').inputmask({   alias: "phone", "clearIncomplete": true });
// });
// $(function() {
//     $('#phone_pop_up').inputmask({   alias: "phone", "clearIncomplete": true });
// });
$(function(){
    $("#phone_input").mask("9(999) 999-9999");
  });
  $(function(){
    $("#phone_input2").mask("9(999) 999-9999");
  });
  $(function(){
    $("#phone_pop_up").mask("9(999) 999-9999");
  });

//   аккордеон вопросов
var acc = document.getElementsByClassName("accordion");
var count = 0;
var i;
var selected = '';

function openPanel(id){
    var fa = document.getElementById('fa' + id.getAttribute("data-panel-id"));
    let panel = document.getElementById('panel' + id.getAttribute("data-panel-id"));
    
    if(count == 0){
        setTimeout(function(){
        panel.style.display = "block";
    }, 100);
    setTimeout(function(){
        fa.style.transition = "ease" + ".3s";
        fa.style.transform = "rotate(180deg)"
        fa.classList.remove('fa-plus');
        fa.classList.add('fa-minus');
    },100);
    count++;
    fa.style = '';
    }else{
        setTimeout(function(){
            panel.style.display = "none";
            fa.style.transition = "ease" + ".3s";
            fa.style.transform = "rotate(180deg)"
            fa.classList.remove('fa-minus');
            fa.classList.add('fa-plus');
        }, 100);
    count--;
    fa.style = '';
    }
}
// слайдер примеров
$('#carouselExamples').carousel({
    interval: 20000
  })

  $('.carousel-control-prev').click(function() {
    $('#carouselExamples').carousel('prev');
  });
  
  $('.carousel-control-next').click(function() {
    $('#carouselExamples').carousel('next');
  });
  


// Слайдер скрытый
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  //открытие слайдеров скрытых
block2Slider1.addEventListener("click", function(){
    var sliderFon1=document.getElementById("sliderFon1");
    sliderFon1.style.visibility="visible";
  });
var closeSlider1=document.getElementById("closeSlider1");
closeSlider1.addEventListener("click", function(){
    var sliderFon1=document.getElementById("sliderFon1");
    sliderFon1.style.visibility="hidden";
  });


block2Slider2.addEventListener("click", function(){
    var sliderFon2=document.getElementById("sliderFon2");
    sliderFon2.style.visibility="visible";
  });
var closeSlider2=document.getElementById("closeSlider2");
closeSlider2.addEventListener("click", function(){
    var sliderFon2=document.getElementById("sliderFon2");
    sliderFon2.style.visibility="hidden";
  });


block2Slider3.addEventListener("click", function(){
    var sliderFon3=document.getElementById("sliderFon3");
    sliderFon3.style.visibility="visible";
  });
var closeSlider3=document.getElementById("closeSlider3");
closeSlider3.addEventListener("click", function(){
    var sliderFon3=document.getElementById("sliderFon3");
    sliderFon3.style.visibility="hidden";
  });

block17Slider4.addEventListener("click", function(){
    var sliderFon4=document.getElementById("sliderFon4");
    sliderFon4.style.visibility="visible";
  });
var closeSlider4=document.getElementById("closeSlider4");
closeSlider4.addEventListener("click", function(){
    var sliderFon4=document.getElementById("sliderFon4");
    sliderFon4.style.visibility="hidden";
  });



  
block17Slider5.addEventListener("click", function(){
    var sliderFon5=document.getElementById("sliderFon5");
    sliderFon5.style.visibility="visible";
  });
var closeSlider5=document.getElementById("closeSlider5");
closeSlider5.addEventListener("click", function(){
    var sliderFon5=document.getElementById("sliderFon5");
    sliderFon5.style.visibility="hidden";
  });


  
  block17Slider6.addEventListener("click", function(){
    var sliderFon6=document.getElementById("sliderFon6");
    sliderFon6.style.visibility="visible";
  });
var closeSlider6=document.getElementById("closeSlider6");
closeSlider6.addEventListener("click", function(){
    var sliderFon6=document.getElementById("sliderFon6");
    sliderFon6.style.visibility="hidden";
  });


block17Slider7.addEventListener("click", function(){
    var sliderFon7=document.getElementById("sliderFon7");
    sliderFon7.style.visibility="visible";
  });
var closeSlider7=document.getElementById("closeSlider7");
closeSlider7.addEventListener("click", function(){
    var sliderFon7=document.getElementById("sliderFon7");
    sliderFon7.style.visibility="hidden";
  });

block17Slider8.addEventListener("click", function(){
    var sliderFon8=document.getElementById("sliderFon8");
    sliderFon8.style.visibility="visible";
  });
var closeSlider8=document.getElementById("closeSlider8");
closeSlider8.addEventListener("click", function(){
    var sliderFon8=document.getElementById("sliderFon8");
    sliderFon8.style.visibility="hidden";
  });

  

block17Slider9.addEventListener("click", function(){
    var sliderFon1=document.getElementById("sliderFon1");
    sliderFon1.style.visibility="visible";
  });
var closeSlider1=document.getElementById("closeSlider1");
closeSlider1.addEventListener("click", function(){
    var sliderFon1=document.getElementById("sliderFon1");
    sliderFon1.style.visibility="hidden";
  });


  
  block17Slider10.addEventListener("click", function(){
    var sliderFon10=document.getElementById("sliderFon10");
    sliderFon10.style.visibility="visible";
  });
var closeSlider10=document.getElementById("closeSlider10");
closeSlider10.addEventListener("click", function(){
    var sliderFon10=document.getElementById("sliderFon10");
    sliderFon10.style.visibility="hidden";
  });