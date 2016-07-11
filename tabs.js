var sections 
  = document.querySelectorAll("#tabs-wrapper .tab-content");

var headers 
  = document.querySelectorAll("#table-of-content a");

var table 
  = document.getElementById("table-of-content");



table.classList.add("tabs-design");

for(var i = 1; i < sections.length; i++) {
  sections[i].classList.add("hidden");
}

headers[0].classList.add("active");



function showTab (event) {

  console.log(event.target);

  document.querySelectorAll(".active")[0].classList.remove("active");

  for(var j = 0; j < headers.length; j++) {
    
    sections[j].classList.add("hidden");

    if(headers[j] === event.target) {
      var position = j;
    }

  }

    headers[position].classList.add("active");
    sections[position].classList.remove("hidden");


}


table.addEventListener("click", showTab);