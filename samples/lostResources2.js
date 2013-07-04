var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.on('http.status.404', function(resource) {
    casper.echo(resource.url + ' is 404');
});

casper.start('http://casperjs.azurewebsites.net/notfound');

casper.run(function(){
	this.echo('finished');
	this.exit();
});