
var exec = require("cordova/exec");

 var TouchID = function () {
    this.name = "TouchID";
};

  TouchID.prototype.isAvailable = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TouchID", "isAvailable", []);
  };

  TouchID.prototype.didFingerprintDatabaseChange = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TouchID", "didFingerprintDatabaseChange", []);
  };

  TouchID.prototype.verifyFingerprint = function (message, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TouchID", "verifyFingerprint", [message]);
  };

  TouchID.prototype.verifyFingerprintWithCustomPasswordFallback = function (message, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TouchID", "verifyFingerprintWithCustomPasswordFallback", [message]);
  };

  TouchID.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TouchID", "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", [message, enterPasswordLabel]);
  };

module.exports = new TouchID();
