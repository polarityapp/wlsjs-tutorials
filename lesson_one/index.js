let wls = require("@whaleshares/wlsjs");
wls.api.setOptions({ url: 'wss://whaleshares.io/ws' });
wls.api.getAccounts(['kennybll'], function(err, res) {
  console.log(err, res);
});