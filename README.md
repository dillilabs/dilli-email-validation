## dilli-email-validation

Verify email address instantly using [Dilli Email Validation API (DEVA)](https://www.dillilabs.com/products/email-validation-api/).
Get FREE API key by [signing up with Dilli Email Validation API](https://deva.dillilabs.com/register). 

Following checks are performed:
- Format Validation
- MX records exist and MX is resolvable
- Profanity in user or domain part.
- Email Service Provider (ESP) specific local-part grammar rules
- Disposable (a.k.a Temporary) email addresses
- Known spammer
- Role-based email addresses (ex: help@, support@, info@)
- Safe domains

### Installation

```
npm install --save dilli-email-validation
```

### Use

```javascript
var Validator = require('dilli-email-validation');

// To get FREE API key sign-up at:
// https://deva.dillilabs.com/register
// Replace API_KEY below with that API KEY
var validator = new Validator('API_KEY');

// replace emailtotest@domaintotest.com with the 
// actual email address to validate.
validator.validate('emailtotest@domaintotest.com', function(err, response) {
	if (err) {
		// Validation error
		// TODO handle failure
		return;
	}

	// response is true if valid, false if invalid
	if (response === true) {
		// Email valid, DO SOMETHING
		console.log('email is valid')
	} else {
		// Email invalid, DO SOMETHING
		console.log('email is invalid);
	}
})
```

### Licence

MIT