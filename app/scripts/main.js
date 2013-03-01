(function() {
    var facade = new Facade(new Mediator(), {email: new EmailModel()});
    var module = new ViewModel(facade);
    module.init();
    ko.applyBindings(module);
})();