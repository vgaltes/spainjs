var casper = require('casper').create();

casper.start('http://casperjs.azurewebsites.com');

casper.then(function(){
	this.test.pass('SpainJS is a great conference');
	this.test.fail('I am not going to talk with anybody these three days');
});

casper.run(function(){
	this.test.done(2);
	this.test.renderResults(true);
});