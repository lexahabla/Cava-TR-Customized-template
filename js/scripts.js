console.log('Hola');

function index1200()
{

	$(window).scroll(function(event){
	var st = $(this).scrollTop();
	console.log(st);

		var img1 = document.getElementById("logo");
		var img1alpha = document.getElementById("logoImg");
		var img2 = document.getElementById("dones");
		var img2alpha2 = document.getElementById("donesImg2");
		var img3 = document.getElementById("copes");
		var img3alpha = document.getElementById("copesImg");
		var img4 = document.getElementById("gel");
		var img4alpha = document.getElementById("gelImg");


		if(window.matchMedia("(min-width: 1200px)").matches && st > 400 ){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";
			img1.style.transitionDelay = "0.5s";
			
			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
			img1alpha.style.transitionDelay = "0.5s";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "1s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "1s";
		
		}

		if( window.matchMedia("(min-width: 1200px)").matches && st > 1800 ){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";

		}

		if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 400 ){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";
			img1.style.transitionDelay = "0.5s";
			
			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
			img1alpha.style.transitionDelay = "0.5s";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "1s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "1s";
		
		}

		if( window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 1600 ){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";

		}

		if(window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches  && st > 300){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "0.5s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "0.5s";
		}

		if(window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches && st > 1200){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";

		}


		if(window.matchMedia("(min-width: 576px) and (max-width:767px)").matches && st > 150){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "0.5s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "0.5s";
		}


		if(window.matchMedia("(min-width: 576px) and (max-width:767px)").matches && st > 1000){
			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";
		}


		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 600)
		{

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
		}
		
		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 1300)
		{

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			
		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 2600)
		{
		
			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";
		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 3100)
		{

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
		

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
		
		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 400){
		
			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
		}

		

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 700){
		
			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";

		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1900){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";
		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 2200){

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			
			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";

		}


		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 200){
		
			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
		}

		

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 600){
		
			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";

		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1600){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";
		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 2000){

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			
			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";

		}

	});

}
//INDEX----------------------------------------------------------------------------------------------------//
//REPUBLICA------------------------------------------------------------------------------------------------//
function repu(){

	$(window).scroll(function(event){
	var st = $(this).scrollTop();
	console.log(st);
    console.log('Hola');

		var repu1 = document.getElementById("repuL");
		var repuImg1 = document.getElementById("repuImg1L");
		var repu2 = document.getElementById("repuR");
		var repuImg2 = document.getElementById("repuImg2R");
		var repu3 = document.getElementById("repuL2");
		var repuImg3 = document.getElementById("repuImg2L");
		var repu4 = document.getElementById("repuL3");
		var repuImg4 = document.getElementById("repuImg4L2");
		var repu5 = document.getElementById("repuR2");
		var repuImg5 = document.getElementById("repuImg5R2");


		if(window.matchMedia("(min-width: 1200px)").matches && st > 400 )
		
		{
			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
			repu1.style.transitionDelay ="0.5s";
			
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 2s ease";
			repuImg1.style.transitionDelay = "0.5s";
			
			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
			repu2.style.transitionDelay = "1s";
				
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 2s ease";
			repuImg2.style.transitionDelay = "1s";
			
			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			repu3.style.transitionDelay = "2s";
			repuImg3.style.opacity ="2";
			repuImg3.style.transition = "opacity 2s ease";
			repuImg3.style.transitionDelay = "2s";
		}

		if(window.matchMedia("(min-width: 1200px)").matches && st > 1700)
		{
			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			repu4.style.transitionDelay = "0.5s";
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 2s ease";
			repuImg4.style.transitionDelay = "0.5s";

			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			repu5.style.transitionDelay = "1s";
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 2s ease";
			repuImg5.style.transitionDelay = "1s";
		}


		if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 500)
		{

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
			repu1.style.transitionDelay ="0.5s";
			
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 2s ease";
			repuImg1.style.transitionDelay = "0.5s";
			
			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
			repu2.style.transitionDelay = "1s";
				
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 2s ease";
			repuImg2.style.transitionDelay = "1s";
			
			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			repu3.style.transitionDelay = "2s";
			repuImg3.style.opacity ="2";
			repuImg3.style.transition = "opacity 2s ease";
			repuImg3.style.transitionDelay = "2s";

	
		}

		if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 1200)
		
		{		
			
			
			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			repu4.style.transitionDelay = "0.5s";
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 2s ease";
			repuImg4.style.transitionDelay = "0.5s";

			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			repu5.style.transitionDelay = "1s";
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 2s ease";
			repuImg5.style.transitionDelay = "1s";


	
		}

	
		if(window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches && st > 200){

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
			repu1.style.transitionDelay ="0.5s";
			
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 2s ease";
			repuImg1.style.transitionDelay = "0.5s";
			
			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
			repu2.style.transitionDelay = "1s";
				
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 2s ease";
			repuImg2.style.transitionDelay = "1s";
			
			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			repu3.style.transitionDelay = "1s";
			repuImg3.style.opacity ="1";
			repuImg3.style.transition = "opacity 2s ease";
			repuImg3.style.transitionDelay = "1s";
		}

	

		if(window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches && st > 900){

			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			repu4.style.transitionDelay = "0.5s";
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 2s ease";
			repuImg4.style.transitionDelay = "0.5s";
		
			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			repu5.style.transitionDelay = "1s";
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 2s ease";
			repuImg5.style.transitionDelay = "1s";
		}


		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 400){

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
			// repu1.style.transitionDelay ="0.5s";
		
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 2s ease";
			// repuImg1.style.transitionDelay = "0.5s";
		}

		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 800){

			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
			// repu2.style.transitionDelay = "1s";
			
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 2s ease";
			// repuImg2.style.transitionDelay = "1s";

		}

		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1700){

			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			// repu3.style.transitionDelay = "1s";
			repuImg3.style.opacity ="1";
			repuImg3.style.transition = "opacity 2s ease";
			// repuImg3.style.transitionDelay = "1s";

		}


		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 2400){

			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			// repu4.style.transitionDelay = "0.5s";
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 2s ease";
			// repuImg4.style.transitionDelay = "0.5s";

		}
		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 2800){
		
			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			// repu5.style.transitionDelay = "1s";
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 2s ease";
			// repuImg5.style.transitionDelay = "1s";
		}

		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 250){

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
			// repu1.style.transitionDelay ="0.5s";
		
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 2s ease";
			// repuImg1.style.transitionDelay = "0.5s";
		}

		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 750){

			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
			// repu2.style.transitionDelay = "1s";
			
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 2s ease";
			// repuImg2.style.transitionDelay = "1s";

		}

		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 1300){

			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			// repu3.style.transitionDelay = "1s";
			repuImg3.style.opacity ="1";
			repuImg3.style.transition = "opacity 2s ease";
			// repuImg3.style.transitionDelay = "1s";

		}


		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 2000){

			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			// repu4.style.transitionDelay = "0.5s";
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 2s ease";
			// repuImg4.style.transitionDelay = "0.5s";

		}

		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 2200)
		
		{
			
			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			repu5.style.transitionDelay = "1s";
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 2s ease";
			repuImg5.style.transitionDelay = "1s";

		}

	



		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 600){

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
		
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 3s ease";

		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 1000){

			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
		
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 3s ease";

		}


		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 1600){

			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			
			repuImg3.style.opacity ="1";
			repuImg3.style.transition = "opacity 3s ease";
			
		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 2100){

			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 3s ease";
			
		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 2500){

			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 3s ease";

		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 300){

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
		
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 3s ease";

		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 600){

			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";
		
			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 3s ease";

		}


		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1000){

			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			
			repuImg3.style.opacity ="1";
			repuImg3.style.transition = "opacity 3s ease";
			
		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1500){

			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 3s ease";
				
			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			repu5.style.transitionDelay = "1s";
			
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 3s ease";
			repuImg5.style.transitionDelay ="1s";
			
		}



		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 200){

			repu1.style.left= "0%";
			repu1.style.transition ="left 2s ease";
			
			repuImg1.style.opacity = "1";
			repuImg1.style.transition = "opacity 3s ease";
		
		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 500){

			repu2.style.left= "0%";
			repu2.style.transition ="left 2s ease";

			repuImg2.style.opacity ="1";
			repuImg2.style.transition = "opacity 3s ease";

		}

		if( window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 800){

			repu3.style.left= "0%";
			repu3.style.transition ="left 2s ease";
			
			repuImg3.style.opacity ="1";
			repuImg3.style.transition = "opacity 3s ease";

		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1200){

			repu4.style.left= "0%";
			repu4.style.transition ="left 2s ease";
			
			repuImg4.style.opacity = "1";
			repuImg4.style.transition = "opacity 3s ease";
		
		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1500){

			repu5.style.left= "0%";
			repu5.style.transition ="left 2s ease";
			
			repuImg5.style.opacity = "1";
			repuImg5.style.transition = "opacity 3s ease";
	
		}
	});
}