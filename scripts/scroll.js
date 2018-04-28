$(document).ready(function(){
  $("a").on('click', function(event) {

	if (this.hash !== "") {
	  event.preventDefault();

	  var hash = this.hash;

	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 800, function(){
   
		window.location.hash = hash;
	  });
	}
  });
});

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

window.scrollBy({ 
  top: 100,
  left: 0, 
  behavior: 'smooth' 
});

document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});