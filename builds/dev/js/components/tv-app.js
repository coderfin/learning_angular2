System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Decorator: Info about the Component
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "begin";
                    this.artists = [];
                }
                AppComponent.prototype.onClick = function (name, nameContainer) {
                    this.name = name;
                    nameContainer.style.backgroundColor = "#FECE4E";
                };
                AppComponent.prototype.addArtist = function (artist) {
                    this.artists.push(artist);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "tv-app",
                        templateUrl: "templates/app.html",
                        styleUrls: ["css/components/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=tv-app.js.map