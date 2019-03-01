console.log("script.js connected");

var passkey = "jfink";

var paragraphs = $("#divAddPara");
var imgs = $("#divAddImg");
var vids = $("#divAddVid");


var cs1 = {
	"color": "#327bb3",
	"cursor": "pointer"
}
var cs2 = {
	"color": "#225378",
	"cursor": "auto"
}

var parIndex = 1;
var imgIndex = 1;
var vidIndex = 1;

var x = $("#divAdd").css("width")

$("#changeWidth").css("width", `${x}`);

$(".mouseOver").hover(function() {
  $(this).css(cs1);
  }, function(){
  $(this).css(cs2);
  });

$("#addPara").click(function(){
	paragraphs.append(retParaFrame(parIndex));
	parIndex++;
});

$("#minPara").click(function(){
	$(`#para${parIndex - 1}`).remove();
	if (parIndex > 1){
		parIndex--;
	}
});

$("#addImg").click(function(){
	imgs.append(retImgFrame(imgIndex));
	// imgClicked(imgIndex);
	imgIndex++;
});

$("#minImg").click(function(){
	$(`#img${imgIndex - 1}`).remove();
	if (imgIndex > 1){
		imgIndex--;
	}
});

$("#addVid").click(function(){
	vids.append(retVidFrame(vidIndex));
	vidIndex++;
});

$("#minVid").click(function(){
	$(`#vid${vidIndex - 1}`).remove();
	if (vidIndex > 1){
		vidIndex--;
	}
});

// function imgClicked(x){

// 	$(`#imga${x}`).click(function(){
// 		$(`#file${x}`).click();
// 	});

// 	$(`#file${x}`).change(function(){
// 		var filePath = $(`#file${x}`).val();
// 		var str = "";
// 		str += filePath;
// 		str = str.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
// 		if (filePath){
// 			$(`#custom-text${x}`).html(str);
// 		} else {
// 			console.log("fail");
// 		}
// 	});

// 	$(`#imga${x}`).hover(function() {
//   		$(this).css(cs1);
//   	}, function(){
//   		$(this).css(cs2);
//   	});
// }

function retParaFrame(x){
	return `<div id = "para${x}" class="form-group paragraphs">` +
			`<label for="clientText">Paragraph ${x}</label>` +
			`<input  style = "margin-bottom:6px;" type="text" name = "titles" class="form-control" placeholder="Enter title">` +
			`<textarea placeholder = "Enter text" class="form-control" name="textAreas" rows="5"></textarea>` +
		    '</div>';
}

// function retImgFrame(x){

// 	return `<div id="img${x}" class="form-group paragraphs">` +
// 			`<input type="file" id="file${x}" hidden="hidden" name = "imgs">` +
// 			`<a id = "imga${x}"><i style = "font-size: 30px;" class="fas fa-file-upload"></i>  <span id = "custom-text${x}">  Upload image</span> </a>` +
// 		    '</div>';
// }

function retImgFrame(x){

	return `<div id="img${x}" class="form-group paragraphs">` +
			`<label for="img">Image ${x}</label>` +
			`<input type="text" name = "imgs" class="form-control" placeholder="Enter image url">`
		    '</div>';
}

function retVidFrame(x){
	return `<div id="vid${x}" class="form-group paragraphs">` +
			`<label for="vid">Video ${x}</label>` +
			`<input type="text" name = "videos" class="form-control" placeholder="Enter video url">`
		    '</div>';
}

function checkPassword(){
	var pwd = document.getElementById("pwd").value;
		console.log("request successful");
		if (pwd == passkey){
			document.getElementById("nav").style.height = "0%";
		}
		else {
			alert("The passkey is incorrect. Please check your spelling and try again");
	}
}




