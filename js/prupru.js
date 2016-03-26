$( document ).ready(function() {

	var prupru = [];
	prupru.push('Pruprupru pru prupru prupruprupru pru pruprupru. Pru Prupruprupru! Prupru prupru pru pru prupru pruprupru pru prupru prupru pruprupru pru prupru prupru prupruprupru prupruprupru. Pru prupru pruprupru prupru pru prupru pruprupru pru prupru pru prupru pruprupru pru prupru prupru pruprupru. Pru prupruprupru prupru pru, pru pru, pru pru prupru pru pruprupru.');
	prupru.push('Pru prupru prupru pru pruprupru pru prupru prupru pru prupru pru Prupru pru pru Prupru. Pru prupru pru prupru pru.... Pru prupru pru pruprupru prupru. Prupru prupru, pru pru pru, prupru pru pru. Prupru pru pru, pru prupru prupru pru Pruprupru pru pru Prupru pru prupru prupruprupru pru prupru pru prupru prupru.');
	prupru.push('Prupru prupru prupru prupru pru prupru, prupru prupru pruprupru prupru prupruprupru pruprupru, pru prupru prupru pru prupru pru pruprupru prupru prupru prupru pru pruprupru. Pru pru pruprupru pru... Pru prupru... Pru prupru prupru, pru pru prupru pru pruprupru prupru pru prupru pruprupru pru prupru pruprupru.');
	prupru.push('Pru prupru prupru pru pruprupru: "- Pru prupru pruprupru prupru?" Pru pru pruprupru: -"Pru, prupru pru pruprupru!" Prupru prupru pru "pru" prupru pru prupru pru pruprupru. Pru, pru prupru, pru pru pru pruprupru, pru pruprupru pru prupru pruprupru pru pru prupru "prupru prupru"? pru, pru, pru, pru... Pru prupru pru prupru prupru?');
	prupru.push('Prupru prupruprupru pru prupru pru Prupru Prupru pru Prupru, pruprupru pru Prupru Prupru pru Prupru, prupru pru prupru prupru pru pruprupru, pru prupru prupru prupru pru Prupruprupru. Pruprupru prupru prupru pru pruprupru, prupru pruprupru pru prupruprupru, prupru pru prupru pruprupru. Pruprupru prupru pru pruprupru pru prupru pruprupru!');
	prupru.push('Pru prupru pru pru prupru pru pruprupru... Prupruprupru pru prupru: pru prupru pru pruprupru pru pru prupru pru prupru, prupru prupru, prupru prupruprupru, prupru prupru pru pru prupru pru pruprupru, pruprupru prupru prupru prupru pru pruprupru, pru prupru prupru prupru pruprupru, prupru pru prupru pruprupru prupru. Pru prupru pru prupru pruprupru pruprupruprupru!');
	prupru.push('Pruprupru pru pruprupru prupru pruprupru prupru prupru pru prupruprupru pru pruprupru, pru prupru prupru pru prupru, prupru, prupru prupru pruprupru. Prupru pru prupru prupru prupru prupru pruprupru pruprupru, prupru pru pruprupru pruprupru prupruprupru prupru Prupru, pru prupru prupru pru pruprupru.');
	prupru.push('Pru prupru pruprupru pru prupru prupru. Pru prupru pruprupru pru pru prupru, prupru pru... pru... Pru prupru prupru pru pruprupru, pru prupru prupru prupru pruprupru. -Pruprupru: Prupru prupru pruprupru pru prupruprupru prupru pru prupru prupru pru pru pru prupru. -Prupru: Pru prupru prupru pru pru prupru?');


	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	$(".botao").click(function(){

		shuffle(prupru);
		var pruprunovo = "";
		var contador = 0;
		var numeroatual = $(this).text();
		$.each( prupru, function( key, value ) {
		  if(contador == numeroatual){
		  	return false
		  }else{
		  	contador = contador +1;
		  }
		  pruprunovo = pruprunovo + value + "\n\n" ;
		});
		$(".prupru").val(pruprunovo);
	});


    $(".gerar_prupru").zclip({
		path: "js/ZeroClipboard.swf",
		copy: function(){
		    return $(this).prev().val();
	    }
	});

	$(".prupru-ipsum-logo").mouseover(function(){
        $(".ola-internautas").fadeIn("slow");

       setTimeout(
	   function()
	   {
	   	$(".ola-internautas").fadeOut("slow");
	   }, 3000);
	})

});