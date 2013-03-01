(function() {
    var facade = new Facade(new Mediator(), {core: new Core()});
    subscription.init(facade);
    ko.applyBindings(new ViewModel(facade));
})();