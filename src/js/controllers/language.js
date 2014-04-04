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
            }, //end defaults
            "buttons" : {
                "share" : {
                    nl : "shareNL",
                    fr : "shareFR"
                }
            }, //end buttons
            "share" : {
                "defaultBody" : {
                    nl : "default share body NL",
                    fr : "default share body FR",
                },
                "defaultTitle" : {
                    nl : "default title body NL",
                    fr : "default title body FR",
                },
            }
        }
    };
});