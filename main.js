//document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.sidenav');
//    var instances = M.Sidenav.init(elems, options);
//  });
//
//$(document).ready(function(){
//    $('.sidenav').sidenav();
//});

const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav);

// SILDER
const sliderTitle = document.querySelector(".slider");
M.Slider.init(sliderTitle, {
  indicators: false,
  height: 500,
  transtion: 600
});

// AUTOCOMPLETE
const autoComp = document.querySelector(".autocomplete");
M.Autocomplete.init(autoComp, {
  data: {
    Cartage: null,
    Kayrawan: null,
    German: null,
    Berlin: null,
    "New york": null,
    Wanshington: null
  }
});

// MATERIALBOXED FOR GALLERY
const matBox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(matBox);

// SCROLLSPY
const scSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scSpy);
