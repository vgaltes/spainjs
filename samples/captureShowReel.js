var casper = require('casper').create({
	viewportSize: {
		width: 400,
		height: 300
	}
});

casper.start('http://spainjs.org', function(){
    this.captureSelector('showreel.png', '.showreel');
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});