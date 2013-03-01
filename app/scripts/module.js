var ViewModel = function (facade) {

    return {
        name: ko.observable(),
        email: ko.observable(),
        fire: function () {
            facade.updateEmail(this.name(), function(data) {
                this.email = data;
            });
        }
    }
}