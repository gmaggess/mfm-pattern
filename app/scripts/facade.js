var Facade = function (mediator, appCore) {

    this.mediator = mediator;

    return {
        updateEmail: function(data, callback) {
            publish('email', data);
            //abc(callback);
        },
        subscribe: function (channel, callback) {
            mediator.subscribe(channel, callback);
        },
        publish: function (channel, data) {
            mediator.publish(channel, data);
        }
    }

}