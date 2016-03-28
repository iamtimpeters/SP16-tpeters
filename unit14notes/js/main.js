// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
            "email_2": {
                required: true,
                email: true
            }
        },
        messages: {
            "email_1": {
                required: "Really?"
            }
        }
    });

});