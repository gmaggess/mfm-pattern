var subscription = {

    init:function (facade) {
        facade.subscribe('email', facade.updateEmail);
    }
}