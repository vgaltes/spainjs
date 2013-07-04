var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.start('http://casperjs.azurewebsites.net/#/details');

casper.waitUntilVisible('#wellcome-section', function(){
	this.echo("Wellcome message visible");
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});