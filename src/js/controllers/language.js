define(['common'], function(common) {
    return {
        get : function (a , b) {
            return this.lang[a][b][common.lang];
        },
        lang: {
            "likeGate" : {
                "header" : {
                    nl : "Maak kans op een prijs",
                    fr : ""
                },
                "desktop-like" : {
                    nl : "Word fan en waag je kans!",
                    fr : ""
                },
                "mobile-like-header" : {
                    nl : "Word fan!",
                    fr : ""
                },
                "mobile-like-copy" : {
                    nl : "En maak kans op tickets",
                    fr : ""
                },
                "mobile-login" : {
                    nl : "Log dan eerst in op Facebook",
                    fr : ""
                },
                "legal" : {
                    nl : "Je gegevens en wedstrijddeelname worden niet gebruikt of gedeeld op je Facebook timeline. We gebruiken je gegevens alleen om de wedstrijd op een eerlijke manier te laten verlopen. Door deel te nemen aan de actie ga je akkoord met de wedstrijdvoorwaarden. ",
                    fr : ""
                }
            },
            "info" : {
                "header" : {
                    nl : "Maak kans op een prijs",
                    fr : ""
                },
                "copy" : {
                    nl : "Bacon ipsum dolor sit amet kevin flank andouille tail bresaola, pancetta cow chuck tenderloin porchetta doner spare ribs short loin venison pig.",
                    fr : ""
                },
                "option1" : {
                    nl : "Optie 1",
                    fr : ""
                },
                "option2" : {
                    nl : "Optie 2",
                    fr : ""
                },
                "option3" : {
                    nl : "Optie 3",
                    fr : ""
                },
                "option4" : {
                    nl : "Optie 4",
                    fr : ""
                }

            },
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
                    fr : ""
                },
                "send" : {
                    nl : "Verzenden",
                    fr : ""
                }
            }, //end buttons
            "share" : {
                "defaultBody" : {
                    nl : "",
                    fr : ""
                },
                "defaultTitle" : {
                    nl : "",
                    fr : ""
                }
            } //end share
        }
    };
});