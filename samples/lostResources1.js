var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.on("resource.received", function(request) {
    if (request.status === 404) {
        this.echo('Resource Not Found:' + request.url);
    }
});

casper.start('http://casperjs.azurewebsites.net');

casper.run(function(){
	this.echo('finished');
	this.exit();
});