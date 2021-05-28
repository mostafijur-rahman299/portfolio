$(document).ready(function(){
	$(function(){
		Dots.generate({speed: 20000});
	});

	 
});

  document.addEventListener("DOMContentLoaded", function(){
    
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#main_nav',
    })

    // add smooth animated scroll via javascript
    document.querySelectorAll('.scrollto').forEach(function(element){
      element.addEventListener('click', function(e) {
        e.preventDefault();
        var section_name = element.getAttribute('href');
        var offset_num = document.querySelector(section_name).offsetTop;
          window.scrollTo({ top:(offset_num - 0), behavior:'smooth' });
      });
    })

  }); 
  // DOMContentLoaded  end

  function toggleFunction(){
  	var nav = document.querySelector(".responsive-sidebar");
  	var toggle = document.querySelector(".toggle");
  	nav.classList.toggle("active");
  	toggle.classList.toggle("active"); 

  }

 // copyclip board
 function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
}