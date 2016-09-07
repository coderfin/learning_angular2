System.register(["angular2/platform/browser", "./components/tv-app"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, tv_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (tv_app_1_1) {
                tv_app_1 = tv_app_1_1;
            }],
        execute: function() {
            // Init/Load App/Root Component
            browser_1.bootstrap(tv_app_1.AppComponent);
        }
    }
});

//# sourceMappingURL=bootstrap.js.map
