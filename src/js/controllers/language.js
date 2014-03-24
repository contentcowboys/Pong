define(['common'], function(common) {
    return {
        get : function (a , b) {
            return this.lang[a][b][common.lang];
        },
        lang: {
            "welcome": {
                "header": {
                    nl: "welcome header NL",
                    fr: "welcome header FR"
                }
            }, //end welcome
            "form": {
                "header": {
                    nl: "form header NL",
                    fr: "form header FR"
                },
                "tiebreaker" : {
                    nl : "tiebreaker",
                    fr : ""
                },
                "tiebreaker_extra" : {
                    nl : "tiebreaker_extra",
                    fr : ""
                },
                "first_name" : {
                    nl : "first_name",
                    fr : ""
                },
                "last_name" : {
                    nl : "last_name",
                    fr : ""
                },
                "email" : {
                    nl : "email",
                    fr : ""
                },
                "gsm" : {
                    nl : "gsm",
                    fr : ""
                },
                "adres" : {
                    nl : "adres",
                    fr : ""
                },
                "zip" : {
                    nl : "zip",
                    fr : ""
                },
                "city" : {
                    nl : "city",
                    fr : ""
                },
            }, //end form
            "formError" : {
                "form" : {
                    "nl" : "Form error",
                    "fr" : "Form error FR"
                },
                "server" : {
                    "nl" : "server error",
                    "fr" : "server error FR"
                },
                "email" : {
                    "nl" : "email error",
                    "fr" : "email error FR"
                }
            },
            "default" : {
                "winner" : {
                    nl : "Winnaars",
                    fr : ""
                }
            }, //end default
            "lang": {
                "NL": {
                    nl: "NL",
                    fr: "NL"
                },
                "FR": {
                    nl: "FR",
                    fr: "FR"
                }
            }
        }
    };
});