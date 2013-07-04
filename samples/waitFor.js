var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.start('http://casperjs.azurewebsites.net');

casper.waitFor(function(check){
	return (this.getTitle() == 'Home | Application');
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});