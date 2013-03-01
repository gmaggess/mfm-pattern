var ViewModel = function (facade) {

    return {
        init: function() {
            facade.listen({type: Subscription.LOAD_EMAIL,
                              callback:  this.email});
        },
        destroy: function() {
            facade.ignore({type: Subscription.LOAD_EMAIL,
                                callback: this.email});
        },
        name: ko.observable(),
        email: ko.observable(),
        loadEmail: function () {
            facade.notify ({
                type: Subscription.LOAD_EMAIL,
                data: this.name()
            });
        }
    }
}