var Models = function (data) {
    this.data = data;
}

Models.prototype.data = {}

Models.prototype.FormResult = function (status, message, FormGame) {
    this.data.status = status;
    this.data.message = message;
    this.data.FormGame = FormGame;
}

var FormGame = {};


/*
* API_SETTINGS_FORM
*/
Models.prototype.ApiSettingsForm = function (ApiSettingsForm) {
    this.data.ApiSettingsForm = ApiSettingsForm;
}
var ApiSettingsForm = {}

module.exports = Models;