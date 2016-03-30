// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){

//"isstate" validator from mcgrailm @ stackoverflow
//http://stackoverflow.com/questions/5696222/jquery-validator-check-input-against-a-list-of-accepted-values
    jQuery.validator.addMethod("isstate", function(value) {
    var states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), states) != -1;
    }, "Data provided is not a valid state");
    
    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
             "email_2": {
                required: true,
                email: true,
                equalTo: "#email_1"
            },
            "first_name": {
                required: true,
            },
            "last_name": {
                required: true,
            },
            "state": {
                required: true,
                isstate: true,
            },
            "zip": {
                required: true,
                zipcodeUS: true,
            }
        },
        messages: {
            "email_1": {
                required: "Please enter an email address.",
                email: "Please enter an email address."
            },
            "email_2": {
                required: "Please re-enter your email address.",
                email: "Please re-enter your email address.",
                equalTo: "Please re-enter your email address."
            },
             "first_name": {
                required: "Please enter your first name."
            },
            "last_name": {
                required: "Please enter your last name."
            },
              "state": {
                required: "Please enter a state.",
                isstate: "Please enter a valid 2-character state code."
            },
              "zip": {
                required: "Please enter a zip code.",
                zipcodeUS: "Please enter a valid 5-digit zip code."
            },
        }
    });

});