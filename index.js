var https = require("https");

var validator = function(pubKey) {
  this.pubKey = pubKey;
};

validator.prototype.sendBack = function(err, msg, fn) {
  if (fn) {
    fn.call(this, err, msg);
  } else {
    console.log(err ? err : msg);
  }
};

validator.prototype.validate = function(email, fn) {
  // There should be a api key
  if (!this.pubKey) {
    this.sendBack(
      "Provide your dilli email validation api(deva) api key.",
      null,
      fn
    );
    return;
  }

  // There should be an email
  if (!email) {
    this.sendBack("Provide the email to validate.", null, fn);
    return;
  }

  var self = this;
  var options = {
    hostname: "deva.dillilabs.com",
    path: "/api/" + this.pubKey + "/email/" + email,
    method: "GET"
  };

  var req = https.request(options, function(res) {
    //console.log("statusCode: ", res.statusCode);

    var result = "";
    var status = res.statusCode;
    res.setEncoding("utf8");

    res.on("data", function(chunk) {
      result += chunk;
    });

    res.on("end", function(body) {
      if (status != 200) {
        self.sendBack(true, null, fn);
      } else {
        self.sendBack(result == "true", null, fn);
      }
      //console.log(chunk);
    });
  });
  req.end();
  req.on("error", function(e) {
    //console.error(e);
    self.sendBack(e, null, fn);
  });
};

module.exports = validator;
