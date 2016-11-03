function ListView() {
	var self = Ti.UI.createWindow({});
	
	var letters = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
	letters = letters.split(',');
	
	var listView = Ti.UI.createListView();
	
	var sections = [];
	var i;
	for (var a = 0; a < letters.length; a++) {
		var section = Ti.UI.createListSection({
			headerTitle: letters[a],
		});
		i = 0;
		var dataSet = [];
		while (i < 10) {
			dataSet.push({ properties: { title: i.toString() } });
			i++;
		}
		section.setItems(dataSet);
		sections.push(section);
	}
	listView.setSections(sections);
	self.add(listView);
	
	/*
	// list views are designed to perform better than table views
	// but do not allow you to add subviews to a list item
	var listView = Ti.UI.createListView();
	// sections are required for list views vs table views
	var sections = [];
	
	var breakfastSection = Ti.UI.createListSection({
		headerTitle: 'breakfasts',
	});
	var breakfastDataSet = [
		{ properties: { title: 'pancakes' }},
		{ properties: { title: 'french toast' }},
		{ properties: { title: 'waffles' }},
	];
	breakfastSection.setItems(breakfastDataSet);
	sections.push(breakfastSection);
	
	var lunchSection = Ti.UI.createListSection({
		headerTitle: 'lunches',
	});
	var lunchDataSet = [
		{ properties: { title: 'grilled cheese' }},
		{ properties: { title: 'peanut butter & honey' }},
		{ properties: { title: 'soup' }},
	];
	lunchSection.setItems(lunchDataSet);
	sections.push(lunchSection);
	
	listView.setSections(sections);
	self.add(listView);
	
	var dinnerSection = Ti.UI.createListSection({
		headerTitle : 'dinners',
	});
	var dinnerDataSet = [
		{ properties: { title: 'hamburger' }},
		{ properties: { title: 'pizza' }},
		{ properties: { title: 'pasta' }},
	];
	dinnerSection.setItems(dinnerDataSet);
	listView.appendSection(dinnerSection);
	*/
	
	return self;

};

module.exports = ListView;