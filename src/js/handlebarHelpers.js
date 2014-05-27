define(['common', 'handlebars', 'controllers/language'], function (common, Handlebars, languageController) {
    //debug
    Handlebars.registerHelper("debug", function (optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
        if (typeof optionalValue !== "undefined") {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    });

    //if equal
    Handlebars.registerHelper('if_eq', function (a, b, opts) {
        if (a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    //lang helper
    Handlebars.registerHelper('lang', function (a, b) {
        console.log(a,b, common.lang);
        if (languageController.lang[a] && languageController.lang[a][b] && languageController.lang[a][b][common.lang]) {
            return new Handlebars.SafeString(languageController.lang[a][b][common.lang]);
        } else {
            console.trace();
            console.log('%cLanguage particle not found -> ' + a + ":" + b, "color: red");
        }

    });
});