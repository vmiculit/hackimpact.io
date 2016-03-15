var sendgrid  = require('sendgrid')('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');

function sendEmail (){
	sendgrid.send({
		  to:       'valsbox@gmail.com',
		  from:     'noreply@hackimpact.io',
		  subject:  'Hello World',
		  text:     'You logged in!'
		}, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);
	});
}

module.exports = {
	sendEmail : sendEmail
}