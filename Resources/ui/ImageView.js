function ImageView() {
	var self = Ti.UI.createWindow({});
	var rotation = 90;
	
	var imageView = Ti.UI.createImageView({
		image: '/images/clock.png',
	}); self.add(imageView);
	
	imageView.addEventListener('click', function(e) {
		var rotateMatrix = Ti.UI.create2DMatrix({
			rotate: rotation,
		});
		
		rotation += 90;
		if (rotation > 270) {
			rotation = 0;
		}
		
		var rotateAnimation = Ti.UI.createAnimation({
			duration: 250,
			transform: rotateMatrix
		});
		imageView.animate(rotateAnimation);
	});

	return self;
};

module.exports = ImageView;
