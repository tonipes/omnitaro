"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('es6-shim');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var tabs_1 = require('./pages/tabs/tabs');
var action_data_1 = require('./providers/action-data/action-data');
var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = tabs_1.TabsPage;
        platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        ionic_angular_1.App({
            template: '<ion-nav [root]="rootPage"></ion-nav>',
            config: {},
            providers: [action_data_1.ActionData,]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
