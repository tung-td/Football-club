let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i = 0; i < thumbnails.length; i++) {

	thumbnails[i].addEventListener('click', function () {
		console.log(activeImages)

		if (activeImages.length > 0) {
			activeImages[0].classList.remove('active')
		}


		this.classList.add('active')
		document.getElementById('featured').src = this.src
	})
}

// Recently & Also like

document.getElementById("show_re").onclick = function () {
	document.getElementById("recently_button").style.display = 'flex';
	document.getElementById("show_re").style.display = 'none';
	document.getElementById("hide_re").style.display = 'inline-block';
}
document.getElementById("hide_re").onclick = function () {
	document.getElementById("recently_button").style.display = 'none';
	document.getElementById("show_re").style.display = 'inline-block';
	document.getElementById("hide_re").style.display = 'none';
}

document.getElementById("show_al").onclick = function () {
	document.getElementById("also_like_button").style.display = 'flex';
	document.getElementById("show_al").style.display = 'none';
	document.getElementById("hide_al").style.display = 'inline-block';
}
document.getElementById("hide_al").onclick = function () {
	document.getElementById("also_like_button").style.display = 'none';
	document.getElementById("show_al").style.display = 'inline-block';
	document.getElementById("hide_al").style.display = 'none';
}

// Information product (description, shipping, ...)

document.getElementById("show_sh").onclick = function () {
	document.getElementById("shipping_button").style.display = 'flex';
	document.getElementById("show_sh").style.display = 'none';
	document.getElementById("hide_sh").style.display = 'inline-block';
}
document.getElementById("hide_sh").onclick = function () {
	document.getElementById("shipping_button").style.display = 'none';
	document.getElementById("show_sh").style.display = 'inline-block';
	document.getElementById("hide_sh").style.display = 'none';
}

document.getElementById("show_dt").onclick = function () {
	document.getElementById("detail_product").style.display = 'flex';
	document.getElementById("show_dt").style.display = 'none';
	document.getElementById("hide_dt").style.display = 'inline-block';
}
document.getElementById("hide_dt").onclick = function () {
	document.getElementById("detail_product").style.display = 'none';
	document.getElementById("show_dt").style.display = 'inline-block';
	document.getElementById("hide_dt").style.display = 'none';
}

document.getElementById("show_de").onclick = function () {
	document.getElementById("description_product").style.display = 'flex';
	document.getElementById("show_de").style.display = 'none';
	document.getElementById("hide_de").style.display = 'inline-block';
}
document.getElementById("hide_de").onclick = function () {
	document.getElementById("description_product").style.display = 'none';
	document.getElementById("show_de").style.display = 'inline-block';
	document.getElementById("hide_de").style.display = 'none';
}



