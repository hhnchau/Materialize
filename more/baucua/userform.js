var Models = function (data) {
this.data = data;
}

Models.prototype.data = {}

Models.prototype.UserForm = function (room, MyForm, GuestForm) {
      this.data.room = room;
      this.data.MyForm = MyForm;
      this.data.GuestForm = GuestForm;
}

var MyForm = {};
var GuestForm = {};

module.exports = Models;
