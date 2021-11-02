console.log('Hola');
//INDEX----------------------------------------------------------------------------------------------------//
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
//REPUBLICA------------------------------------------------------------------------------------------------//

//ORIGEN---------------------------------------------------------------------------------------------------//
function origen()
{
	$(window).scroll(function(event)
	{
		var st = $(this).scrollTop();
		console.log(st);

		var orgLeft = document.getElementById("orgL");
		var orgImgLeft = document.getElementById("orgImgL");
		var orgRight = document.getElementById("orgR");
		var orgImgRight = document.getElementById("orgImgR");
		var orgLeft2 = document.getElementById("ciargaLeft");
		var orgImgLeft2 = document.getElementById("ciargaImgL");
		var orgRight2 = document.getElementById("ciargaR");
		var orgImgRight2 = document.getElementById("ciargaImgR");
		var orgLeft3 = document.getElementById("orgl3");
		var orgImgLeft3 = document.getElementById("orgil3");
		var orgRight3 = document.getElementById("orgr3");
		var orgImgRight3 = document.getElementById("orgir3");


			if(window.matchMedia("(min-width: 1200px)").matches && st > 600)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				
				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "0.5s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 2s ease";
				orgImgRight.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 1200px)").matches && st > 1200)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";

				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "0.5s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "1s";
			}

			if( window.matchMedia("(min-width: 1200px)").matches && st > 1700)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "1s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "1s";

			}


			if( window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 500)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "0.5s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 2s ease";
				orgImgRight.style.transitionDelay = "1s";
			}

			if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 1000)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "0.5s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "1s";

			}


			if( window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 1400)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "1s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "1s";
				
			}

			if(window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 300)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				orgLeft.style.transitionDelay = "0.5s";
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "1s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				orgImgRight.style.transitionDelay = "1s";
				
			}

			if(window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 750)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				orgLeft2.style.transitionDelay = "0.5s";
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "1s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "1s";

			}
			

			if(window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 1100)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";
			
				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "1s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "1s";
			}



			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 400)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				orgLeft.style.transitionDelay = "0.5s";
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "1s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				orgImgRight.style.transitionDelay = "1s";
				
			}

			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 800)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				orgLeft2.style.transitionDelay = "0.5s";
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "1s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "1s";

			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 400)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				orgLeft.style.transitionDelay = "0.5s";
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 900)
			{

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "0.51s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				orgImgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1600)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				orgLeft2.style.transitionDelay = "0.5s";
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 2100)
			{

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "0.5s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 2500)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 2800)
			{

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "0.5s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "0.5s";
			
			}

			
			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 300)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				orgLeft.style.transitionDelay = "0.5s";
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 700)
			{

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "0.51s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				orgImgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 1300)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				orgLeft2.style.transitionDelay = "0.5s";
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 1800)
			{

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "0.5s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 2200)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 2400)
			{

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "0.5s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "0.5s";
			
			}


			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 600)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				orgLeft.style.transitionDelay = "0.5s";
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 1000)
			{

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "0.51s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				orgImgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 1600)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				orgLeft2.style.transitionDelay = "0.5s";
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 2000)
			{

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "0.5s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 2400)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 2600)
			{

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "0.5s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "0.5s";
			
			}

			
			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 400)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				orgLeft.style.transitionDelay = "0.5s";
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";
				orgImgLeft.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 800)
			{

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
				orgRight.style.transitionDelay = "0.51s";
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				orgImgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 1400)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				orgLeft2.style.transitionDelay = "0.5s";
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";
				orgImgLeft2.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 1800)
			{

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				orgRight2.style.transitionDelay = "0.5s";
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				orgImgRight2.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 2200)
			{

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				orgImgLeft3.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 2300)
			{

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "0.5s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "0.5s";
			
			}

		


			if( window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 400)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";

			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 600)
			{

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
			
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				

			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1200)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";

			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1500)
			{

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				
			}

			 if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1900)
			 {

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				// orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				// orgImgLeft3.style.transitionDelay = "0.5s";

				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "0.5s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "0.5s";
			 }
			

			 if( window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 400)
			{

				orgLeft.style.left= "0%";
				orgLeft.style.transition ="left 2s ease";
				
				orgImgLeft.style.opacity = "1";
				orgImgLeft.style.transition = "opacity 2s ease";

			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 600)
			{

				orgRight.style.left= "0%";
				orgRight.style.transition ="left 2s ease";
			
				orgImgRight.style.opacity ="1";
				orgImgRight.style.transition = "opacity 3s ease";
				

			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1100)
			{

				orgLeft2.style.left= "0%";
				orgLeft2.style.transition ="left 2s ease";
				
				orgImgLeft2.style.opacity ="1";
				orgImgLeft2.style.transition = "opacity 3s ease";

			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1200)
			{

				orgRight2.style.left= "0%";
				orgRight2.style.transition ="left 2s ease";
				
				orgImgRight2.style.opacity ="1";
				orgImgRight2.style.transition = "opacity 3s ease";
				
			}

			 if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1500)
			 {

				orgLeft3.style.left= "0%";
				orgLeft3.style.transition ="left 2s ease";
				// orgLeft3.style.transitionDelay = "0.5s";
				orgImgLeft3.style.opacity = "1";
				orgImgLeft3.style.transition = "opacity 3s ease";
				// orgImgLeft3.style.transitionDelay = "0.5s";
			 }
			
			 if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1700)
			 {


				orgRight3.style.left= "0%";
				orgRight3.style.transition ="left 2s ease";
				orgRight3.style.transitionDelay = "0.5s";
				orgImgRight3.style.opacity = "1";
				orgImgRight3.style.transition = "opacity 3s ease";
				orgImgRight3.style.transitionDelay = "0.5s";
			 }
		
		});
}
//ORIGEN---------------------------------------------------------------------------------------------------//

//CAVA-----------------------------------------------------------------------------------------------------//

function cava()
{

	$(window).scroll(function(event)
	{
		var st = $(this).scrollTop();
		console.log(st);

		var cavaLeft = document.getElementById("cavaleft");
		var cavaImgLeft = document.getElementById("cavaImgLeft");
		var cavaRight = document.getElementById("cavaright");
		var cavamgRight = document.getElementById("cavaImgRight");
		var cavaPan = document.getElementById("cavapan");
		var cavaImgPan = document.getElementById("cavaImgPan");
		var cavaPan2 = document.getElementById("cavapan2");
		var cavaImgPan2 = document.getElementById("cavaImgPan2");


			if(window.matchMedia("(min-width: 1200px)").matches && st > 800)
			{
				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				
				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				cavaRight.style.transitionDelay = "0.5s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				cavamgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 1200px)").matches && st > 1600)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 2s ease";
				// cavaPan.style.transitionDelay = "0.5s";

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 3s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
				cavaPan2.style.transitionDelay = "1s";
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 3s ease";
				cavaImgPan2.style.transitionDelay = "1s";
			}
		

			if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 400)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				
				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				cavaRight.style.transitionDelay = "0.5s";
				cavaImgRight.style.opacity ="1";
				cavaImgRight.style.transition = "opacity 2s ease";
				cavaImgRight.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 900)
			{

				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 2s ease";
				cavaPan.style.transitionDelay = "0.5s";

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 3s ease";
				cavaImgPan.style.transitionDelay = "0.5s";

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
				cavaPan2.style.transitionDelay = "1s";
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 3s ease";
				cavaImgPan2.style.transitionDelay = "1s";

			}

		
			if(window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 400)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
				
				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				cavaRight.style.transitionDelay = "1s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				cavamgRight.style.transitionDelay = "1s";

			}


			if( window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 900)
			{

				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 2s ease";
				// cavaPan.style.transitionDelay = "0.5s";

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 3s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
				cavaPan2.style.transitionDelay = "1s";
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 3s ease";
				cavaImgPan2.style.transitionDelay = "1s";
			}


			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 300)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
				
				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				cavaRight.style.transitionDelay = "1s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				cavamgRight.style.transitionDelay = "1s";

			}

			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 700)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 2s ease";
				// cavaPan.style.transitionDelay = "0.5s";

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 3s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
				cavaPan2.style.transitionDelay = "1s";
			
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 3s ease";
				cavaImgPan2.style.transitionDelay = "1s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 400)
			{
				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 900)
			{

				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				// cavaRight.style.transitionDelay = "0.5s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				// cavamgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1400)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 1.5s ease";
				// cavaPan.style.transitionDelay = "0.5s";

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 2s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1800)
			{

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
			
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 2s ease";
				// cavaImgPan2.style.transitionDelay = "0.5s";
			}

	
			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 400)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
			
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 800)
			{

				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				// cavaRight.style.transitionDelay = "0.5s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				// cavamgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 1350)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 1.5s ease";
				

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 2s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 1750)
			{

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
			
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 2s ease";
				// cavaImgPan2.style.transitionDelay = "0.5s";
			}
			
			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 500)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
			
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 800)
			{

				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				// cavaRight.style.transitionDelay = "0.5s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				// cavamgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 1200)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 1.5s ease";
				

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 2s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width: 516px) and (max-width:575px)").matches && st > 1650)
			{

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
			
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 2s ease";
				// cavaImgPan2.style.transitionDelay = "0.5s";
			}
			

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 300)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
			
			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 600)
			{

				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				// cavaRight.style.transitionDelay = "0.5s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				// cavamgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1100)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 1.5s ease";
				

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 2s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1400)
			{

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
			
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 2s ease";
				// cavaImgPan2.style.transitionDelay = "0.5s";
			}

			
			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 300)
			{

				cavaLeft.style.left= "0%";
				cavaLeft.style.transition ="left 2s ease";
				
				cavaImgLeft.style.opacity = "1";
				cavaImgLeft.style.transition = "opacity 2s ease";
				// cavaImgLeft.style.transitionDelay = "0.5s";
			
			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 500)
			{

				cavaRight.style.left= "0%";
				cavaRight.style.transition ="left 2s ease";
				// cavaRight.style.transitionDelay = "0.5s";
				cavamgRight.style.opacity ="1";
				cavamgRight.style.transition = "opacity 2s ease";
				// cavamgRight.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1000)
			{
				cavaPan.style.left= "0%";
				cavaPan.style.transition ="left 1.5s ease";
				

				cavaImgPan.style.opacity ="1";
				cavaImgPan.style.transition = "opacity 2s ease";
				// cavaImgPan.style.transitionDelay = "0.5s";
			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1200)
			{

				cavaPan2.style.left= "0%";
				cavaPan2.style.transition ="left 2s ease";
			
				cavaImgPan2.style.opacity = "1";
				cavaImgPan2.style.transition = "opacity 2s ease";
				// cavaImgPan2.style.transitionDelay = "0.5s";
			}

			

			

		});
}
//CAVA-----------------------------------------------------------------------------------------------------//

//TAST-----------------------------------------------------------------------------------------------------//
function tast()
{

	$(window).scroll(function(event)
	{
		var st = $(this).scrollTop();
		console.log(st);

		var tastLeft = document.getElementById("tastleft");
		var tastImgLeft = document.getElementById("tastImgLeft");
		var tastRight = document.getElementById("tastright");
		var tastmgRight = document.getElementById("tastImgRight");
		var tastPan = document.getElementById("tastpan");
		var tastImgPan = document.getElementById("tastImgPan");
		var tastPan2 = document.getElementById("tastpan2");
		var tastImgPan2 = document.getElementById("tastImgPan2");
	

			if(window.matchMedia("(min-width: 1200px)").matches && st > 400)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
				
				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				tastRight.style.transitionDelay = "0.5s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				tastmgRight.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 1200px)").matches && st > 1400)
			{

				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
			
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				tastImgPan2.style.transitionDelay = "1s";

			}

			if( window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 500)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
				
				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				tastmgRight.style.transitionDelay = "1s";
			}

			if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 1100)
			{

				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";

				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				tastImgPan2.style.transitionDelay = "1s";


			}


			if( window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 500)
			{
				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
				
				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				tastmgRight.style.transitionDelay = "1s";
			}


			if(window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 1200)
			{

				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				tastImgPan2.style.transitionDelay = "1s";


				
			}

			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 500)
			{
				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
				
				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				tastmgRight.style.transitionDelay = "1s";

			}

			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 1000)
			{
				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				tastImgPan2.style.transitionDelay = "1s";
			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 500)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
			}
			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1100)
			{


				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				// tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				// tastmgRight.style.transitionDelay = "1s";
			}

		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1900)
			{
				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";
			}

		if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 2500)
			{

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				// tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				// tastImgPan2.style.transitionDelay = "1s";

			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 300)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
			}
			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 900)
			{


				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				// tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				// tastmgRight.style.transitionDelay = "1s";
			}

		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 1600)
			{
				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";
			}

		if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 2100)
			{

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				// tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				// tastImgPan2.style.transitionDelay = "1s"

			}


			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 400)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
			}
			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 900)
			{


				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				// tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				// tastmgRight.style.transitionDelay = "1s";
			}

		if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 1600)
			{
				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";
			}

		if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 1900)
			{

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				// tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				// tastImgPan2.style.transitionDelay = "1s"

			}

		
			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 400)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
			}
			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 850)
			{


				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				// tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				// tastmgRight.style.transitionDelay = "1s";
			}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1400)
			{
				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";
			}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1700)
			{

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				// tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				// tastImgPan2.style.transitionDelay = "1s"

			}
		

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 400)
			{

				tastLeft.style.left= "0%";
				tastLeft.style.transition ="left 2s ease";
				
				tastImgLeft.style.opacity = "1";
				tastImgLeft.style.transition = "opacity 2s ease";
			}
			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 850)
			{


				tastRight.style.left= "0%";
				tastRight.style.transition ="left 2s ease";
				// tastRight.style.transitionDelay = "1s";
				tastmgRight.style.opacity ="1";
				tastmgRight.style.transition = "opacity 2s ease";
				// tastmgRight.style.transitionDelay = "1s";
			}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1400)
			{
				tastPan.style.left= "0%";
				tastPan.style.transition ="left 2s ease";
				
				tastImgPan.style.opacity ="1";
				tastImgPan.style.transition = "opacity 3s ease";
				// tastImgPan.style.transitionDelay = "0.5s";
			}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1700)
			{

				tastPan2.style.left= "0%";
				tastPan2.style.transition ="left 2s ease";
				// tastPan2.style.transitionDelay ="1s";
			
				tastImgPan2.style.opacity ="1";
				tastImgPan2.style.transition = "opacity 2s ease";
				// tastImgPan2.style.transitionDelay = "1s"

			}




		});
}
//TAST-----------------------------------------------------------------------------------------------------//

//BOTIGA---------------------------------------------------------------------------------------------------//
function botiga()
{

	$(window).scroll(function(event)
	{
		var st = $(this).scrollTop();
		console.log(st);

		var botigaLeft = document.getElementById("ampollaLeft");
		var botigaImgLeft = document.getElementById("ampollaImgLeft");
		var botigaRight = document.getElementById("caixaRight");
		var botigaImgRight = document.getElementById("ampollaImgRight");
		

			if(window.matchMedia("(min-width: 1200px)").matches && st > 600)
			{

				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
				
				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				botigaRight.style.transitionDelay ="0.5s"

				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				botigaImgRight.style.transitionDelay = "0.5s";
			}

		
			if(window.matchMedia("(min-width: 992px) and (max-width:1199px)").matches && st > 400)
			{

				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
				
				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				botigaRight.style.transitionDelay ="0.5s"

				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				botigaImgRight.style.transitionDelay = "0.5s";

			}


			if( window.matchMedia("(min-width: 869px) and (max-width: 991px)").matches && st > 400)
			{
				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
				
				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				botigaRight.style.transitionDelay ="0.5s"

				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				botigaImgRight.style.transitionDelay = "0.5s";
				
			}


			if(window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches && st > 400)
			{

				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				

				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				botigaRight.style.transitionDelay ="0.5s"
				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				botigaImgRight.style.transitionDelay = "0.5s";

			}

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 400)
			{
				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
			}
				

			if(window.matchMedia("(min-width: 668px) and (max-width:767px)").matches && st > 1200)
			{
				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
			
			}


			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 400)
			{
				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
			}

			if(window.matchMedia("(min-width: 576px) and (max-width:667px)").matches && st > 700)
			{

				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				

			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 400)
			{
				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
			}

			if(window.matchMedia("(min-width:415px) and (max-width:515px)").matches && st > 1000)
			{

				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				

			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 300)
			{
				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
			}

			if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 800)
			{

				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				

			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 300)
			{
				botigaLeft.style.left= "0%";
				botigaLeft.style.transition ="left 2s ease";
				
				botigaImgLeft.style.opacity = "1";
				botigaImgLeft.style.transition = "opacity 2s ease";
				
			}

			if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 800)
			{

				botigaRight.style.left= "0%";
				botigaRight.style.transition ="left 2s ease";
				
				botigaImgRight.style.opacity ="1";
				botigaImgRight.style.transition = "opacity 2s ease";
				

			}
		});
	}
//BOTIGA---------------------------------------------------------------------------------------------------//

//HIDE BOTTLE BUY BUTTONS---------------------------------------------------------------------------------//
function hideBottleBuyButtons()
{
	jQuery(function ($) {
	// var buttonone = document.getElementById("checkout-button-price_1HwoEQG3BL0zc1Gw7FxFo2KD");
	var buttontwo = document.getElementById("dosampolles").style.display = "none";
	var buttonthree = document.getElementById("tresampolles").style.display = "none";
	var buttonfour = document.getElementById("cuatreampolles").style.display = "none";
	var buttonfive = document.getElementById("cincampolles").style.display = "none";
 	// console.log('hideBuyButtond');
});
}
//HIDE BOTTLE BUY BUTTONS---------------------------------------------------------------------------------//

//CHANGE BOTTLE BUY BUTTOND------------------------------------------------------------------------------//
function changebottleBuyButtons()
{
	jQuery(function ($) {
	var buttonone = document.getElementById("unampolla");
	var buttontwo = document.getElementById("dosampolles");
	var buttonthree = document.getElementById("tresampolles");
	var buttonfour = document.getElementById("cuatreampolles");
	var buttonfive = document.getElementById("cincampolles");
	var onebox = document.getElementById("numberbottle").value;
	// console.log('changebottleBuyButtons');
	if(onebox==1) 
	{
		buttonone.style.opacity = "1";
	}
	if(onebox==2) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "block";
	}
	if(onebox==3) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "none";
		buttonthree.style.display = "block";
	}
	if(onebox==4) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "none";
		buttonthree.style.display = "none";
		buttonfour.style.display = "block";
	}
	if(onebox==5) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "none";
		buttonthree.style.display = "none";
		buttonfour.style.display = "none";
		buttonfive.style.display = "block";
	}

});

}
//CHANGE BOTTLE BUY BUTTOND------------------------------------------------------------------------------//

//HIDE BOX BUY BUTTONS---------------------------------------------------------------------------------//
function hideBoxBuyButtons()
{
	jQuery(function ($) {
	// var buttonone = document.getElementById("checkout-button-price_1HwoEQG3BL0zc1Gw7FxFo2KD");
	var buttontwo = document.getElementById("doscaixes").style.display = "none";
	var buttonthree = document.getElementById("trescaixes").style.display = "none";
	var buttonfour = document.getElementById("cuatrecaixes").style.display = "none";
	var buttonfive = document.getElementById("cincaixes").style.display = "none";
 	// console.log('hideBoxBuyButtons');
});
}
//HIDE BOX BUY BUTTONS---------------------------------------------------------------------------------//

//CHANGE BOTTLE BUY BUTTOND------------------------------------------------------------------------------//
function changeBoxBuyButtons()
{
	jQuery(function ($) {
	var buttonone = document.getElementById("unacaixa");
	var buttontwo = document.getElementById("doscaixes");
	var buttonthree = document.getElementById("trescaixes");
	var buttonfour = document.getElementById("cuatrecaixes");
	var buttonfive = document.getElementById("cincaixes");
	var onebox = document.getElementById("numberbox").value;
	// console.log('changeBoxBuyButtons');
	if(onebox==1) 
	{
		buttonone.style.opacity = "1";
	}
	if(onebox==2) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "block";
	}
	if(onebox==3) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "none";
		buttonthree.style.display = "block";
	}
	if(onebox==4) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "none";
		buttonthree.style.display = "none";
		buttonfour.style.display = "block";
	}
	if(onebox==5) 
	{
		buttonone.style.display = "none";
		buttontwo.style.display = "none";
		buttonthree.style.display = "none";
		buttonfour.style.display = "none";
		buttonfive.style.display = "block";
	}

});

}
//CHANGE BOTTLE BUY BUTTOND------------------------------------------------------------------------------//




//AMPOLLA STRIPE//




//CAIXA BUTTONS//



