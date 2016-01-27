$(document).ready(function() {
	var shapes = [
		{name: 'mona.png', x: 721, y: 279, w: 119, aspect: 0.8156028369, classes: 'blink'},
		{name: 'cell.png', w: 140, x: 530, y: 450, aspect: 0.5857740586, classes: 'shake shake-constant'},
		{name: 'box.png', x: 210, y: 390, w: 200, aspect: 1, classes: 'spin'},
		{name: 'this-is-content.png', x: 210, y: 390, w: 162, aspect: 1.8}
	]
	shapes.forEach(function(shape) {
		var loaded = $(window).resize();
		shape.node = $("<img>").attr('src', '/assets/Animation/' + shape.name).css('position', 'absolute').appendTo('#phones').addClass(shape.classes || '').get(0);
	})
	
	var imageSize = {w: 852, h: 752}; // 1.1337
	var resize = function() {
		var imageFrame = {x: 0, y: 0, w: $("#phones").width(), h: $("#phones").height()};
		var scale = Math.min(imageFrame.w / imageSize.w, imageFrame.h / imageSize.h);
		var contentFrame = {w: imageSize.w * scale, h: imageSize.h * scale};
		contentFrame.x = imageFrame.x + (imageFrame.w - contentFrame.w)/2;
		contentFrame.y = imageFrame.y + (imageFrame.h - contentFrame.h);
		
		shapes.forEach(function(shape) {
			shape.node.style.width = shape.w * scale + 'px';
			shape.node.style.left = (contentFrame.x + shape.x * scale - shape.w * scale / 2) + 'px';
			shape.node.style.top = (contentFrame.y + shape.y * scale - shape.w * scale / shape.aspect / 2) + 'px';
		});
	}
	resize();
	$(document).load(resize);
	$(window).resize(resize);
});
