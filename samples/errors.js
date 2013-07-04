var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.on("page.error", function (msg, trace) {
    this.echo("Error:    " + msg, "ERROR");
    this.echo("file:     " + trace[0].file, "WARNING");
    this.echo("line:     " + trace[0].line, "WARNING");
    this.echo("function: " + trace[0]["function"], "WARNING");
});

casper.start('http://casperjs.azurewebsites.net');

casper.run(function(){
	this.echo('finished');
	this.exit();
});