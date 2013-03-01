var Facade = function (mediator, app) {

    var _private = {
        loadEmail: function(data) {
            return app.email.loadEmail(data);
        }
    };

    return {
        notify: function (event) {
            if (event.type === Subscription.LOAD_EMAIL) {
                event.data = _private.loadEmail(event.data);
            }
            mediator.publish(event.type, event.data);
        },
        listen: function (event) {
            mediator.subscribe(event.type, event.callback);
        },
        ignore: function (event) {
            mediator.unsubscribe(event.type, event.callback);
        }
    }

}