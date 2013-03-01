var EmailModel = function() {

    var EMAIL_DOMAIN = "@gmail.com";

    return {
        loadEmail: function(data) {
           return data.trim().replace(' ', '.').toLowerCase() + EMAIL_DOMAIN;
        }
    }
}