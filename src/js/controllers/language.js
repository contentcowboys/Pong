define(['common'], function(common) {
    return {
        get : function (a , b) {
            return this.lang[a][b][common.lang];
        },
        lang: {
            "form": {
                "header": {
                    nl: "",
                    fr: ""
                },
                "tiebreaker" : {
                    nl : "Jouw antwoord",
                    fr : "tiebreakerFR"
                },
                "tiebreaker_extra" : {
                    nl : "Jouw antwoord",
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
                'accept' : {
                    nl : "acceptNL",
                    fr : "acceptFR"
                },
                'optin' : {
                    nl : "optinNL",
                    fr : "optinFR"
                },

            }, //end form
            "formError" : {
                "form" : {
                    "nl" : "Form error NL",
                    "fr" : "Form error FR"
                },
                "server" : {
                    "nl" : "server error NL",
                    "fr" : "server error FR"
                },
                "email" : {
                    "nl" : "email error NL",
                    "fr" : "email error FR"
                },
                'voorwaarden' : {
                    nl : "voorwaarden error NL",
                    fr : "voorwaarden error FR"
                }
            }, // end formError
            "lang": {
                "NL": {
                    nl: "NL",
                    fr: "NL"
                },
                "FR": {
                    nl: "FR",
                    fr: "FR"
                }
            }, //end defaults
            "buttons" : {
                "share" : {
                    nl : "Share",
                    fr : "shareFR"
                }
            }, //end buttons
            "share" : {
                "defaultBody" : {
                    nl : "",
                    fr : "",
                },
                "defaultTitle" : {
                    nl : "",
                    fr : "",
                },
            }
        }
    };
});