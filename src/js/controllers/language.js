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
                    nl : "Voornaam",
                    fr : "first_nameFR"
                },
                "last_name" : {
                    nl : "Naam",
                    fr : "last_nameFR"
                },
                "email" : {
                    nl : "E-mailadres",
                    fr : "emailFR"
                },
                "gsm" : {
                    nl : "Telefoonnummer",
                    fr : "gsmFR"
                },
                "adres" : {
                    nl : "Straat + nummer",
                    fr : "adresFR"
                },
                "zip" : {
                    nl : "Postcode",
                    fr : "zipFR"
                },
                "city" : {
                    nl : "Gemeente",
                    fr : "cityFR"
                },
                'accept' : {
                    nl : "Ik ga akkoord met de wedstrijdvoorwaarden.",
                    fr : "acceptFR"
                },
                'optin' : {
                    nl : "optinNL",
                    fr : "optinFR"
                },

            }, //end form
            "formError" : {
                "form" : {
                    "nl" : "Gelieve alle velden correct in te vullen.",
                    "fr" : "Complétez tous les champs"
                },
                "server" : {
                    "nl" : "Oeps, er is iets fout gelopen. Probeer het nog een keer!",
                    "fr" : "Oups, un problème est survenu. Veuillez réessayer."
                },
                "email" : {
                    "nl" : "Je hebt al eens deelgenomen met dit e-mailadres",
                    "fr" : "Vous avez déjà participé une fois avec cette adresse e-mail"
                },
                'voorwaarden' : {
                    nl : "Gelieve de voorwaarden te accepteren.",
                    fr : "Veuillez accepter les conditions du concours"
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