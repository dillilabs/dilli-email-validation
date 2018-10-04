## dilli-email-validation

Official email address validation for Node.js using Dilli Email Validation API(DEVA)

Verify email addresses instantly using DEVA that does the following checks:
- Format Validation (RFC defined grammar)
- Mail Exchanger existense (MX records exists or are resolvable)
- Profanity check
- Email Service Provider (ESP) specific local-part grammar rules
- Disposable/Temporary email addresses
- Blacklisted email addresses

You will need to sign up at [https://www.dillilabs.com/products/email-validation-api/](https://www.dillilabs.com/products/email-validation-api/) for a public API key.

### Installation

```
npm install dilli-email-validation
```

### Use

```javascript
var Validator = require('dilli-email-validation');

var validator = new Validator('deva-pub-key');
validator.validate('emailtotest@domaintotest.com', function(err, response) {
	if (err) {
		// Validation error
		// TODO handle failure
		return;
	}

	// response is true if valid, false if invalid

	if (response === true) {
		// Email valid
	} else {
		// Email invalid
	}
})
```

### Licence

MIT