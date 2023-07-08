let mybutton = document.getElementById("back-top");
var expand = document.getElementById("nav");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

var showClub = document.getElementById("dropdown-club");
showClub.style.display = "none";


function dropMyList1() {
  if (showClub.style.display === "none") {
    showLogo.style.display = "none"
    showNational.style.display = "none"
    showClub.style.display = "flex"
  } else {
    showClub.style.display = "none"
  }
}

var showLogo = document.getElementById("dropdown-logo");
showLogo.style.display = "none";


function dropMyList2() {
  if (showLogo.style.display === "none") {
    showClub.style.display = "none"
    showNational.style.display = "none"
    showLogo.style.display = "flex"
  } else {
    showLogo.style.display = "none"
  }
}

var showNational = document.getElementById("dropdown-national");
showNational.style.display = "none";


function dropMyList3() {
  if (showNational.style.display === "none") {
    showClub.style.display = "none"
    showLogo.style.display = "none"
    showNational.style.display = "flex"
  } else {
    showNational.style.display = "none"
  }
}

var show = document.getElementById("nav");
show.style.display = "none";
hide = document.getElementById("logo");


function showMenu() {
  if(document.body.scrollWidth >= 1000) {
    if (show.style.display === "none") {
      show.style.display = "grid"
      zoom();
    } else {
      show.style.display = "none"
    }
  } else {
    if (show.style.display === "none") {
      show.style.display = "block"
      zoom();

    } else {
      show.style.display = "none"
    }
  }
}

function zoom() {
  if(show.style.display !== "none") {
    expand.addEventListener('resize', function() {
      var width = window.innerWidth; 
      if (width >= 1000) {
          expand.style.display = "grid";
      } else {
        expand.style.display = "block";
      }
    })
  }
}


 





  



