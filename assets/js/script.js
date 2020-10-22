// hamburger menu
var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", cross);
function cross() {
  hamburger.classList.toggle("active");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// slick slider floorplan
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  adaptiveHeight: false,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/slider_arrow_left.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/slider_arrow_right.png'>",
  asNavFor: '.slider-for',
  infinite: true,
  dots: false,
  focusOnSelect: true,
  adaptiveHeight: false
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});

document.addEventListener("click", function(){
  var active = document.querySelector(".slick-active");
  var activeData = active.getAttribute("data-slick-index");
  if(activeData==0){
    document.querySelector(".active-plan").className = ("a");
    document.getElementById("data1").className = ("active-plan");
  }else if(activeData==1){
    document.querySelector(".active-plan").className = ("");
    document.getElementById("data2").className = ("active-plan");
  }else if(activeData==2){
    document.querySelector(".active-plan").className = ("");
    document.getElementById("data3").className = ("active-plan");
  }else if(activeData==3){
    document.querySelector(".active-plan").className = ("");
    document.getElementById("data4").className = ("active-plan");
  }
});

//slick slider quote
$('.slider-for-modal').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  asNavFor: '.slider-nav-modal'
});

$('.slider-nav-modal').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/slider_arrow_left.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/slider_arrow_right.png'>",
  asNavFor: '.slider-for-modal',
  infinite: true,
  dots: false,
  focusOnSelect: true
});

//modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.querySelector("#modalFig1").addEventListener("click", function(){
  modal.style.display = "block";
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}