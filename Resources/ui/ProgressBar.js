function ProgressBar() {
	var self = Ti.UI.createWindow({
		
	});
	
	var value = 0;
	
	var barView = Ti.UI.createView({
		width: '100%',
		height: 100,
		layout: 'horizontal',
		top: 100,
	});
	
	var progressBar = Ti.UI.createProgressBar({
		width: '79%',
		height: 'auto',
		min: 0,
		max: 10,
		
		value: value,
		color: 'Black',
		message: 'Loading 0 of 10',
		fontSize: { fontSize: 14, fontWeight: 'bold' },
		style: Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	});
	
	barView.add(Ti.UI.createLabel({
		text: '0',
		width: '10%',
	}));
	barView.add(progressBar);
	barView.add(Ti.UI.createLabel({
		text: '10',
		width: '10%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
	}));
	self.add(barView);
	
	progressBar.show();
	
	var nextProgress = function() {
		var newValue = value++;
		progressBar.setValue(newValue);
		progressBar.setMessage('Loading ' + newValue + ' of 10');
		if (value <= progressBar.getMax()) {
			setTimeout(function() { nextProgress(); }, 500);
		}
	};
	
	var button = Ti.UI.createButton({
		title: 'start',
		bottom: 25,
	});
	
	self.add(button);
	
	button.addEventListener('click', function(e) {
		nextProgress();
	});
	
	return self;
};

module.exports = ProgressBar;