function Switch() {
	var self = Ti.UI.createWindow({});
	
	var view = Ti.UI.createView({
		left: '35%',
		top: '35%',
		layout: 'horizontal',
	});
	
	var titleLabel = Ti.UI.createLabel({
		text: 'On/Off',
	});
	
	// you can't use the keyword switch because it is reserved
	
	var onOffSwitch = Ti.UI.createSwitch({
		left: '10dp',
		value: true,
		title: 'On off',
		style: (Ti.Platform.osname === 'android' ?
				Ti.UI.Android.SWITCH_STYLE_CHECKBOX : undefined) // android only
	});
	
	onOffSwitch.addEventListener('change', function(e) {
		alert(e.value);
	});
	
	if (Ti.Platform.osname === 'ipad' || Ti.Platform.osname === 'iphone') {
		view.add(titleLabel);
	};
	
	view.add(onOffSwitch);
	
	self.add(view);

	return self;
};

module.exports = Switch;
