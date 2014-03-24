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
                    fr : "tiebreakerFR"
                },
                "tiebreaker_extra" : {
                    nl : "tiebreaker_extra",
                    fr : "tiebreaker_extraFR"
                },
                "first_name" : {
                    nl : "first_name",
                    fr : "first_nameFR"
                },
                "last_name" : {
                    nl : "last_name",
                    fr : "last_nameFR"
                },
                "email" : {
                    nl : "email",
                    fr : "emailFR"
                },
                "gsm" : {
                    nl : "gsm",
                    fr : "gsmFR"
                },
                "adres" : {
                    nl : "adres",
                    fr : "adresFR"
                },
                "zip" : {
                    nl : "zip",
                    fr : "zipFR"
                },
                "city" : {
                    nl : "city",
                    fr : "cityFR"
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