// TO INCLUDE THE NAV BAR (NAV.HTML)
fetch('/static/includes/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

// TO INCLUDE GLOSSARY.HTML
fetch('/static/includes/glossary.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_glossary");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

// TO INCLUDE FOOTER.HTML
fetch('/static/includes/footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

/*FOR SIDEBAR*/

function openNav() {
  document.getElementById("mySidebar").style.width = "250px"
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

/*FOR GLOSSARY SIDEBAR*/
function openGlossNav() {
  document.getElementById("myGlossSidebar").style.width = "350px"
  document.getElementById("main").style.marginRight = "350px";
}

function closeGlossNav() {
  document.getElementById("myGlossSidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

// For the carousels -- NOT USING ANYMORE

$("#carousel").carousel({
      pause: false, // don't forget the colon here, it's an object
      interval: false,
      wrap: false
    })

// For pop-ups
function myFunction(e, id) {
                    var popup = document.getElementById(id);
                    console.log(id);
                    popup.classList.toggle('show');
                    }
