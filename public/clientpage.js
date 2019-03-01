console.log("connected");

var imgs = [];
var imgIndex = 0;

onLoad();

var last = imgs.length - 1

console.log(last);

var cs1 = {
	"cursor": "pointer"

}
var cs2 = {
	"cursor": "auto"
}

function onLoad(){

	for (var i = 0; i < $(".imgs").length; i++) {
		$(`#img${i}`).hover(function() {
	  		$(this).css(cs1);
	  	}, function(){
	  		$(this).css(cs2);
	  	});
	}

	$(".imgs").each(function(i){
		imgs.push(i)
	});

	console.log(imgs);
}

function imgClicked(x){
	console.log(x);

	imgIndex = x;

	var src = $(`#img${x}`).attr("src");
	

	console.log(src);

	var imgEnlarge = `<img id = "imgEnlarge" style = "width: auto; height: 700px; float: none;" src = "${src}">`;


	$("#nav").css("height", "100%");
	$("#imgLarge").append(imgEnlarge);

}

$(".fas").hover(function() {
	$(this).css(cs1);
}, function(){
	$(this).css(cs2);
});

$("#exit").click(function(){
	console.log("exit");
	$(`#imgEnlarge`).remove();
	$("#nav").css("height", "0%");
});

$("#previous").click(function(){
	console.log(`${imgIndex}`);
	$(`#imgEnlarge`).remove();

	if (imgIndex == 0){
		imgIndex = last + 1;
	}

	var pre = $(`#img${imgIndex - 1}`).attr("src");

	var imgPrevious = `<img id = "imgEnlarge" style = "width: auto; height: 700px; float: none;" src = "${pre}">`;
	$("#imgLarge").append(imgPrevious);	
	imgIndex--;
});

$("#next").click(function(){
	console.log(`${imgIndex}`);
	$(`#imgEnlarge`).remove();

	if (imgIndex == last){
		imgIndex = - 1;
	}

	var next = $(`#img${imgIndex + 1}`).attr("src");

	var imgNext = `<img id = "imgEnlarge" style = "width: auto; height: 700px; float: none;" src = "${next}">`;
	$("#imgLarge").append(imgNext);
	imgIndex++;
});



