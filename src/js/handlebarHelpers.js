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
        if (typeof b == "string") a = a + ":" + b;
        if (languageController.lang[a] && languageController.lang[a][common.lang]) {
            return new Handlebars.SafeString(languageController.lang[a][common.lang]);
        } else {
            console.log('%cLanguage particle not found -> ' + a , "color: red");
        }
    });
});