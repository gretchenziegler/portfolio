console.log("connected")

window.onload = function(){

	function projectLoad(){
		$container.empty();
		var $projectTemplate = $('#projects-template').html();
		$container.append($projectTemplate);
	}

	// renders projects upon page open
	var $container = $("#container")
	projectLoad();

	// on projectButton click, render projects within template and append to DOM
	var $projectButton = $("#project-button")

	$projectButton.on("click", function(){
		projectLoad();
	});

	// on aboutButton click, render about information and append to DOM
	var $aboutButton = $("#about-button")

	$aboutButton.on("click", function(){
		$container.empty();
		var $about = $("#about-template").html();
		$container.append($about);
	})

	// on resumeButton click, render resume and append to DOM
	var $resumeButton = $("#resume-button")

	$resumeButton.on("click", function(){
		$container.empty();
		var $resume = $("#resume-template").html();
		$container.append($resume)
	})

}
