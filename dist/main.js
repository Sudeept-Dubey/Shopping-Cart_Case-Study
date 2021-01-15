(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./cart/cart.module": [
		"./src/app/cart/cart.module.ts",
		"cart-cart-module"
	],
	"./products/products.module": [
		"./src/app/products/products.module.ts",
		"products-products-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-company-section\">\n  <div class=\"container p-1 p-sm-3\">\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <h2>About Product-Mart</h2>\n        <hr />\n      </div>\n\n      <div class=\"col-md-3\">\n        <img class=\"img-fluid\" src=\"../../assets/cart.jfif\" alt=\"\">\n\n      </div>\n\n      <div class=\"col-md-9\">\n        <p>\n          Welcome to Product-Mart, your number one source for all things. \n          We're dedicated to giving you the very best of products, with a focus on  \n          dependability, customer service and uniqueness. Founded in 2020 by Sudeept Dubey,\n          Product-Mart was initially built as a Case-Study project, which was part of the training\n          program at the Founders first job in a multinational company.\n        </p>\n        <p>\n         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, autem enim \n         tempore sed excepturi minus necessitatibus a eum minima esse reiciendis \n         officiis quod corporis aliquam ducimus? Ducimus vero animi ratione!\n         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia debitis \n         quaerat laborum, maiores iste quasi rem earum nesciunt impedit sequi dignissimos \n         aliquid omnis, corporis quibusdam saepe eum voluptatum numquam. Veritatis\n         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, autem enim \n         tempore sed excepturi minus necessitatibus a eum minima esse reiciendis \n         officiis.\n        </p>\n        <p>\n          We hope you enjoy our products as much as we enjoy offering them to you. \n          If you have any questions or comments, please don't hesitate to contact us.\n        </p>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'contact-us',
        pathMatch: 'full',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
    },
    {
        path: 'about-us',
        pathMatch: 'full',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]
    },
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule',
        canActivate: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _blocks_root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/root/app.component */ "./src/app/blocks/root/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/blocks.module */ "./src/app/blocks/blocks.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_9__["BlocksModule"]
            ],
            bootstrap: [_blocks_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blocks/blocks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/blocks/blocks.module.ts ***!
  \*****************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/blocks/header/header.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root/app.component */ "./src/app/blocks/root/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/blocks/footer/footer.component.ts");








var BlocksModule = /** @class */ (function () {
    function BlocksModule() {
    }
    BlocksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _root_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _root_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], BlocksModule);
    return BlocksModule;
}());



/***/ }),

/***/ "./src/app/blocks/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blocks/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p><i class=\"far fa-copyright\"></i> Sudeept Dubey | 2020</p>\n\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/blocks/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/blocks/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: primary;\n  padding: 1rem 1.5rem 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tzL2Zvb3Rlci9EOlxccHJvZHVjdC1tYXJ0XFxwcm9kdWN0LW1hcnQvc3JjXFxhcHBcXGJsb2Nrc1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ibG9ja3MvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHJpbWFyeTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blocks/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/blocks/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/blocks/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/blocks/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/blocks/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blocks/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100vh\">\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <a class=\"logo\" [routerLink]=\"['/']\"></a>\n      <span class=\"pm-title\">Product Mart</span>\n\n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <a mat-button routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a>\n      </div>\n      \n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <a mat-button routerLink=\"/products\" routerLinkActive=\"active-link\">Products</a>\n      </div>\n\n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <a mat-button routerLink=\"/contact-us\" routerLinkActive=\"active-link\">Contact Us</a>\n      </div>\n\n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <a mat-button routerLink=\"/about-us\" routerLinkActive=\"active-link\">About Us</a>\n      </div>\n      <span class=\"header-spacer\"></span>\n      <div>\n        <a *ngIf=\"!user\" mat-button routerLink=\"/auth\" routerLinkActive=\"active-link\">\n          <mat-icon>person_outliner</mat-icon>\n          Login\n        </a>\n\n        <a mat-button *ngIf=\"user\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>account_box</mat-icon>\n          <span class=\"user-name\">\n            <span>Hi</span> <span><strong> {{ user.fullname }}!</strong></span>\n          </span>\n        </a>\n        <mat-menu #menu=\"matMenu\">\n          <button (click)=\"logoutEvent.emit()\" mat-menu-item>logout</button>\n        </mat-menu>\n      </div>\n      <pm-cart-item-count class=\"header-cart\"></pm-cart-item-count>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n\n\n  <mat-sidenav-container fxFlexFill>\n    <mat-sidenav #sidenav>\n      <mat-nav-list>\n\n        <a (click)=\"sidenav.toggle()\" mat-list-item routerLink=\"/products\" routerLinkActive=\"active-link\">Products</a>\n        <a (click)=\"sidenav.toggle()\" mat-list-item routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a>\n        <a (click)=\"sidenav.toggle()\" mat-list-item routerLink=\"/contact-us\" routerLinkActive=\"active-link\">Contact Us</a>\n        <a (click)=\"sidenav.toggle()\" mat-list-item routerLink=\"/about-us\" routerLinkActive=\"active-link\">About Us</a>\n\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/blocks/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/blocks/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  margin: 2px;\n  cursor: pointer; }\n\n.logo {\n  background-image: url('logo.png');\n  height: 50px;\n  width: 50px;\n  vertical-align: middle;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: 0px;\n  padding: 0px;\n  margin-right: 0.2em; }\n\n.header-spacer {\n  flex: 1 1 auto; }\n\n.user-name {\n  display: inline; }\n\n@media all and (max-width: 699px) {\n  .user-name {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tzL2hlYWRlci9EOlxccHJvZHVjdC1tYXJ0XFxwcm9kdWN0LW1hcnQvc3JjXFxhcHBcXGJsb2Nrc1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlDQUFpRDtFQUNqRCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgbWFyZ2luOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9nby5wbmdcIik7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbn1cblxuLmhlYWRlci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnVzZXItbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgLnVzZXItbmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/blocks/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/blocks/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logoutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "logoutEvent", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/blocks/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/blocks/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/blocks/root/app.component.html":
/*!************************************************!*\
  !*** ./src/app/blocks/root/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden\">\n    <pm-header (logoutEvent)=\"logout()\" [user]=\"user$|async\"></pm-header>\n\n    <router-outlet></router-outlet>\n\n    <pm-footer></pm-footer>\n</div>"

/***/ }),

/***/ "./src/app/blocks/root/app.component.scss":
/*!************************************************!*\
  !*** ./src/app/blocks/root/app.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9yb290L2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blocks/root/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/blocks/root/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.subscriptions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user$ = this.authService.user;
        this.subscriptions.push(this.authService.findMe().subscribe());
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/blocks/root/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/blocks/root/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"about-company-section\">\n  <div class=\"container p-1 p-sm-3\">\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <h2>Contact Us</h2>\n        <hr />\n      </div>\n\n      <div class=\"col-md-3\">\n        <img class=\"img-fluid\" src=\"../../assets/contact.jfif\" alt=\"\">\n\n      </div>\n\n      <div class=\"col-md-9\">\n        <p>\n          1] Mobile Number : 9702940603/7021467736 \n        </p>\n        <p>\n          2] Email : sudeeptdubey1997@gmail.com\n        </p>\n        <p>\n          3] linkedin : www.linkedin.com/in/sudeept-dubey-b24625140\n        </p>\n        <p>\n          4] Facebook : https://www.facebook.com/sudeept.dubey\n        </p>\n        <p>\n          5] Instagram : https://www.instagram.com/sudeept_dubey/\n        </p>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 800px;\n  min-width: 150px;\n  margin: 10% auto; }\n\n.card-text {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9EOlxccHJvZHVjdC1tYXJ0XFxwcm9kdWN0LW1hcnQvc3JjXFxhcHBcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUlwQjtFQUVJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['auth']);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/core/auth/token-storage.service.ts");






var AuthService = /** @class */ (function () {
    function AuthService(httpClient, tokenStorage) {
        this.httpClient = httpClient;
        this.tokenStorage = tokenStorage;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.apiUrl = 'http://localhost:4060/api/auth/';
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.user$.value != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var loginCredentials = { email: email, password: password };
        console.log('login credentials', loginCredentials);
        return this.httpClient
            .post(this.apiUrl + "login", loginCredentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var user = _a.user, token = _a.token;
            _this.setUser(user);
            _this.tokenStorage.setToken(token);
            console.log("user found", user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            console.log("Your login details could not be verified. Please try again", e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Your login details could not be verified. Please try again");
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from suject
        // remove token from localstorage
        this.tokenStorage.removeToken();
        this.setUser(null);
        console.log('user did logout successfull');
    };
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.user$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.register = function (userToSave) {
        var _this = this;
        return this.httpClient.post(this.apiUrl + "register", userToSave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var user = _a.user, token = _a.token;
            _this.setUser(user);
            _this.tokenStorage.setToken(token);
            console.log("user registered successfully", user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            console.log("server error occured", e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Registration failed please contact to admin");
        }));
    };
    AuthService.prototype.findMe = function () {
        var _this = this;
        var token = this.tokenStorage.getToken();
        if (!token) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        return this.httpClient.get(this.apiUrl + "findme").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var user = _a.user;
            _this.setUser(user);
            console.log("user found", user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            console.log("Your login details could not be verified. Please try again", e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Your login details could not be verified. Please try again");
        }));
    };
    AuthService.prototype.setUser = function (user) {
        this.user$.next(user);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.TOKEN_KEY = "ProductMart.AuthToken";
    }
    TokenStorageService.prototype.setToken = function (token) {
        if (!token) {
            return;
        }
        this.removeToken();
        window.localStorage.setItem(this.TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return window.localStorage.getItem(this.TOKEN_KEY);
    };
    TokenStorageService.prototype.removeToken = function () {
        window.localStorage.removeItem(this.TOKEN_KEY);
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/core/cart/cart-queries.ts":
/*!*******************************************!*\
  !*** ./src/app/core/cart/cart-queries.ts ***!
  \*******************************************/
/*! exports provided: ALLOWED_QUANTITIES, CartQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_QUANTITIES", function() { return ALLOWED_QUANTITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQueries", function() { return CartQueries; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-store */ "./src/app/core/cart/cart-store.ts");





var TAX = 0.02;
var SHIPPING = 0.01;
var ALLOWED_QUANTITIES = Array.from({ length: 30 }, function (v, i) { return i; });
var CartQueries = /** @class */ (function () {
    function CartQueries(cartStore) {
        this.cartStore = cartStore;
    }
    Object.defineProperty(CartQueries.prototype, "cartState", {
        get: function () {
            return this.cartStore.state$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartQueries.prototype, "cartItems", {
        get: function () {
            return this.cartState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (s) { return s.cartItems; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartQueries.prototype, "cartItemsCount", {
        get: function () {
            return this.cartItems.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) {
                return items.reduce(function (totalCount, currentItem) { return totalCount + currentItem.quantity; }, 0);
            }));
        },
        enumerable: true,
        configurable: true
    });
    CartQueries.prototype.isItemAlreadyInCart = function (itemId) {
        return this.cartItems.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) { return items.filter(function (item) { return item.id === itemId; }).length > 0; }));
    };
    Object.defineProperty(CartQueries.prototype, "cartSubTotal", {
        get: function () {
            return this.cartItems.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) {
                return items.reduce(function (subTotal, currentItem) { return subTotal + currentItem.itemTotal; }, 0);
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartQueries.prototype, "shippingCost", {
        get: function () {
            return this.cartSubTotal.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (subTotal) { return subTotal * SHIPPING; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartQueries.prototype, "estimattedTax", {
        get: function () {
            return this.cartSubTotal.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (subTotal) { return subTotal * TAX; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartQueries.prototype, "orderTotal", {
        get: function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.cartSubTotal, this.shippingCost, this.estimattedTax, function (cartSubTotal, shippingCost, estimattedTax) {
                return cartSubTotal + shippingCost + estimattedTax;
            });
        },
        enumerable: true,
        configurable: true
    });
    CartQueries = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_store__WEBPACK_IMPORTED_MODULE_4__["CartStore"]])
    ], CartQueries);
    return CartQueries;
}());



/***/ }),

/***/ "./src/app/core/cart/cart-state.ts":
/*!*****************************************!*\
  !*** ./src/app/core/cart/cart-state.ts ***!
  \*****************************************/
/*! exports provided: CartState, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartState", function() { return CartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var CartState = /** @class */ (function () {
    function CartState() {
        this.cartItems = [];
    }
    return CartState;
}());

var initialState = new CartState();


/***/ }),

/***/ "./src/app/core/cart/cart-store.ts":
/*!*****************************************!*\
  !*** ./src/app/core/cart/cart-store.ts ***!
  \*****************************************/
/*! exports provided: CartStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStore", function() { return CartStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/store */ "./src/app/core/store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-state */ "./src/app/core/cart/cart-state.ts");
/* harmony import */ var _core_utils_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/logger.service */ "./src/app/core/utils/logger.service.ts");





var CartStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartStore, _super);
    function CartStore(logService) {
        var _this = _super.call(this, _cart_state__WEBPACK_IMPORTED_MODULE_3__["initialState"]) || this;
        _this.logService = logService;
        _this.addCartItem = function (cartItemToAdd) {
            _this.logService.log('[Cart] Add Item', cartItemToAdd);
            _this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { cartItems: [].concat(_this.state.cartItems, cartItemToAdd) }));
        };
        _this.updateCartItem = function (cartItemToUpdate) {
            _this.logService.log('[Cart] Update Item', cartItemToUpdate);
            var newCartItems = _this.state.cartItems.map(function (i) {
                return i.id === cartItemToUpdate.id ? cartItemToUpdate : i;
            });
            _this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { cartItems: newCartItems }));
        };
        _this.removeCartItem = function (cartItemToRemove) {
            _this.logService.log('[Cart] Remove Item', cartItemToRemove);
            var newCartItems = _this.state.cartItems.filter(function (i) { return i.id !== cartItemToRemove.id; });
            _this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { cartItems: newCartItems }));
        };
        _this.clearCart = function () {
            _this.logService.log('[Cart] Clear Item');
            _this.setState(_cart_state__WEBPACK_IMPORTED_MODULE_3__["initialState"]);
        };
        return _this;
    }
    CartStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_utils_logger_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]])
    ], CartStore);
    return CartStore;
}(_core_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));



/***/ }),

/***/ "./src/app/core/cart/cart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/cart/cart.service.ts ***!
  \*******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_utils_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/logger.service */ "./src/app/core/utils/logger.service.ts");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-store */ "./src/app/core/cart/cart-store.ts");





var CartService = /** @class */ (function () {
    function CartService(logService, cartStore) {
        this.logService = logService;
        this.cartStore = cartStore;
    }
    CartService.prototype.addToCart = function (product, quantity) {
        var cartItemToAdd = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, product, { quantity: quantity, itemTotal: product.price * quantity });
        this.cartStore.addCartItem(cartItemToAdd);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(cartItemToAdd);
    };
    CartService.prototype.updateCartItem = function (cartItemToUpdate) {
        cartItemToUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cartItemToUpdate, { itemTotal: cartItemToUpdate.price * cartItemToUpdate.quantity });
        this.cartStore.updateCartItem(cartItemToUpdate);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(cartItemToUpdate);
    };
    CartService.prototype.removeCartItem = function (itemToRemove) {
        this.cartStore.removeCartItem(itemToRemove);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(itemToRemove);
    };
    CartService.prototype.clearCart = function () {
        this.cartStore.clearCart();
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_utils_logger_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _cart_store__WEBPACK_IMPORTED_MODULE_4__["CartStore"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_auth_header_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/auth-header-interceptor.service */ "./src/app/core/interceptors/auth-header-interceptor.service.ts");
/* harmony import */ var _utils_module_import_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/module-import-guard */ "./src/app/core/utils/module-import-guard.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_utils_module_import_guard__WEBPACK_IMPORTED_MODULE_7__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_header_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AuthHeaderInterceptorService"],
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth-header-interceptor.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/interceptors/auth-header-interceptor.service.ts ***!
  \**********************************************************************/
/*! exports provided: AuthHeaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptorService", function() { return AuthHeaderInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/core/auth/token-storage.service.ts");



var AuthHeaderInterceptorService = /** @class */ (function () {
    function AuthHeaderInterceptorService(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    AuthHeaderInterceptorService.prototype.intercept = function (req, next) {
        var token = this.tokenStorage.getToken();
        var clonedRequest = req.clone({
            headers: req.headers.set("Authorization", token ? "Bearer " + token : "")
        });
        return next.handle(clonedRequest);
    };
    AuthHeaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AuthHeaderInterceptorService);
    return AuthHeaderInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/store.ts":
/*!*******************************!*\
  !*** ./src/app/core/store.ts ***!
  \*******************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var Store = /** @class */ (function () {
    function Store(initialState) {
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initialState);
        this.state$ = this._state$.asObservable();
    }
    Object.defineProperty(Store.prototype, "state", {
        get: function () {
            return this._state$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.setState = function (nextState) {
        console.log('Previous State:', this.state);
        this._state$.next(nextState);
        console.log('Current State:', this.state);
    };
    return Store;
}());



/***/ }),

/***/ "./src/app/core/utils/logger.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/utils/logger.service.ts ***!
  \**********************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log.apply(console, msg);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/core/utils/module-import-guard.ts":
/*!***************************************************!*\
  !*** ./src/app/core/utils/module-import-guard.ts ***!
  \***************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    \n  </head>\n      <body>\n        \n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" ></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n          </ol>\n            <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                    <img class=\"d-block w-100\" src=\"../../assets/Image_1C.jpg\" alt=\"First slide\">\n                </div>\n                  <div class=\"carousel-item\">\n                    <img class=\"d-block w-100\" src=\"../../assets/Image_2C.jpg\" alt=\"Second slide\">\n                  </div>\n                    <div class=\"carousel-item\">\n                      <img class=\"d-block w-100\" src=\"../../assets/Image_4C.jpg\" alt=\"Third slide\">\n                    </div>\n                      <div class=\"carousel-item\">\n                        <img class=\"d-block w-100\" src=\"../../assets/Image_5C.jpg\" alt=\"Third slide\">\n                      </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../assets/Image_3C.jpg\" alt=\"Third slide\">\n                        </div>\n              </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n\n        </div>\n\n        <!-- grid code -->\n   <div class=\"container\">\n        <div class=\"card-deck\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/thumb1.jfif\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Nike Running Shoe</h4>\n              <p class=\"card-text\">Nike, originally known as Blue Ribbon Sports (BRS), was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 1964.</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Last updated 3 mins ago</small>\n            </div>\n          </div>\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/thumb2.jfif\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Nike Air Huarache</h4>\n              <p class=\"card-text\">The company initially operated in Eugene, Oregon as a distributor for Japanese shoe maker Onitsuka Tiger, making most sales at track meets out of Knight's automobile.</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Last updated 3 mins ago</small>\n            </div>\n          </div>\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/image4.jfif\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Nike Air</h4>\n              <p class=\"card-text\">According to Otis Davis, a University of Oregon student athlete coached by Bowerman and Olympic gold medalist at the 1960 Summer Olympics.</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Last updated 3 mins ago</small>\n            </div>\n          </div>\n        </div>\n    \n      <div class=\"card-deck\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"../../assets/thumb3.jfif\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">White T-shirt for Men</h4>\n            <p class=\"card-text\">A crew neck is a type of shirt or sweater that has a round neckline and no collar, often worn with other layers.The name dates back to 1939 and was named after a type of sweater worn by rowers.</p>\n          </div>\n          <div class=\"card-footer\">\n            <small class=\"text-muted\">Last updated 5 mins ago</small>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"../../assets/thumb4.jfif\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Black T-shirt for Women</h4>\n            <p class=\"card-text\">Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams. The manufacture of T-shirts has become highly automated.</p>\n          </div>\n          <div class=\"card-footer\">\n            <small class=\"text-muted\">Last updated 5 mins ago</small>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"../../assets/thumb5.jfif\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Men printed T-shirt</h4>\n            <p class=\"card-text\">T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest).T-shirts have also become a medium.</p>\n          </div>\n          <div class=\"card-footer\">\n            <small class=\"text-muted\">Last updated 5 mins ago</small>\n          </div>\n        </div>\n        </div>\n\n        <div class=\"card-deck\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/thumb6.jfif\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Men Blue jeans</h4>\n              <p class=\"card-text\">Jeans are a type of pants or trousers, typically made from denim or dungaree cloth. Often the term \"jeans\" refers to a particular style of trousers, called \"blue jeans\", which were invented by Jacob W.</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Last updated 10 mins ago</small>\n            </div>\n          </div>\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/thumb7.jfif\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Blue jeans for Women</h4>\n              <p class=\"card-text\">patented by Jacob W. Davis and Levi Strauss on May 20, 1873. Prior to the Levi Strauss patented trousers, the term \"blue jeans\" had been long in use for various garments, constructed from blue-colored denim.</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Last updated 10 mins ago</small>\n            </div>\n          </div>\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/thumb8.jfif\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Men dark blue jeans</h4>\n              <p class=\"card-text\">The term jeans appears first in 1795, when a Swiss banker by the name Jean-Gabriel Eynard and his brother Jacques went to Genoa and both were soon heading a flourishing commercial concern.</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Last updated 10 mins ago</small>\n            </div>\n          </div>\n          </div>\n\n          <div class=\"card-deck\">\n            <div class=\"card\">\n              <img class=\"card-img-top\" src=\"../../assets/thumb9.jfif\" alt=\"Card image cap\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">Green Fabric Sofa</h4>\n                <p class=\"card-text\">A couch, also known as a sofa, settee, futon, or chesterfield, is a piece of furniture for seating two or three people.</p>\n              </div>\n              <div class=\"card-footer\">\n                <small class=\"text-muted\">Last updated 12 mins ago</small>\n              </div>\n            </div>\n            <div class=\"card\">\n              <img class=\"card-img-top\" src=\"../../assets/thumb10.jfif\" alt=\"Card image cap\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">living Room Sofa</h4>\n                <p class=\"card-text\">It is commonly found in the form of a bench, with upholstered armrests, and often fitted with springs and tailored cushions.</p>\n              </div>\n              <div class=\"card-footer\">\n                <small class=\"text-muted\">Last updated 12 mins ago</small>\n              </div>\n            </div>\n            <div class=\"card\">\n              <img class=\"card-img-top\" src=\"../../assets/thumb11.jfif\" alt=\"Card image cap\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">Brown & white Fabric Sofa</h4>\n                <p class=\"card-text\">Although a couch is used primarily for seating, it may be used for sleeping. In homes, couches are normally put in the family room, living room.</p>\n              </div>\n              <div class=\"card-footer\">\n                <small class=\"text-muted\">Last updated 12 mins ago</small>\n              </div>\n            </div>\n            </div>\n\n\n\n\n   </div>\n        <div class=\"footer\">\n          <p>Footer</p>\n        </div>\n        \n      </body>\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  height: 1000px;\n  width: 100%; }\n\n.card {\n  margin-bottom: 100px; }\n\n.footer {\n  padding: 10px;\n  text-align: center;\n  background-color: gray;\n  color: black;\n  font-weight: bold; }\n\nbody {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxccHJvZHVjdC1tYXJ0XFxwcm9kdWN0LW1hcnQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBVztFQUNYLGlCQUFpQixFQUFBOztBQUVwQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiBib2R5e1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container>\n  <h1 mat-dialog-title>{{cartItem.quantity}} item/s added to cart</h1>\n  <div mat-dialog-content>\n\n    <div class=\"pm-dialog-row\">\n      <img mat-card-image src=\"{{ cartItem.imgUrl }}\" alt=\"{{ cartItem.name }}\" class=\"product-listing-image\" />\n\n\n      <span class=\"mat-caption\">\n        {{cartItem.name}} {{cartItem.itemTotal |currency:'INR'}}\n      </span>\n    </div>\n    <div class=\"pm-dialog-row\">\n      <button mat-raised-button [tabIndex]=\"0\" color=\"primary\" (click)=\"continueShopping()\">Continue Shopping</button>\n\n      <button mat-raised-button color=\"accent\" (click)=\"goToCart()\">Got to Cart</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-listing-image {\n  height: 5em;\n  width: 3.5em;\n  padding: 20px;\n  margin: 2px; }\n\n.mat-dialog-title {\n  padding: 0px;\n  text-align: center;\n  margin: 0px; }\n\n.pm-dialog-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcnQvYWRkLXRvLWNhcnQtZGlhbG9nL0Q6XFxwcm9kdWN0LW1hcnRcXHByb2R1Y3QtbWFydC9zcmNcXGFwcFxcc2hhcmVkXFxjYXJ0XFxhZGQtdG8tY2FydC1kaWFsb2dcXGFkZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJ0L2FkZC10by1jYXJ0LWRpYWxvZy9hZGQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0aW5nLWltYWdlIHtcbiAgaGVpZ2h0OiA1ZW07XG4gIHdpZHRoOiAzLjVlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucG0tZGlhbG9nLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddToCartDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartDialogComponent", function() { return AddToCartDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddToCartDialogComponent = /** @class */ (function () {
    function AddToCartDialogComponent(data, router, matDialogRef) {
        this.router = router;
        this.matDialogRef = matDialogRef;
        this.cartItem = data.cartItem;
        console.log('showing add to cart dialog for', this.cartItem);
    }
    AddToCartDialogComponent.prototype.ngOnInit = function () { };
    AddToCartDialogComponent.prototype.goToCart = function () {
        var _this = this;
        this.router.navigate(['cart']).then(function () { return _this.closeDialog(); });
    };
    AddToCartDialogComponent.prototype.continueShopping = function () {
        var _this = this;
        this.router.navigate(['products']).then(function () { return _this.closeDialog(); });
    };
    AddToCartDialogComponent.prototype.closeDialog = function () {
        this.matDialogRef.close();
    };
    AddToCartDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-add-to-cart-dialog',
            template: __webpack_require__(/*! ./add-to-cart-dialog.component.html */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./add-to-cart-dialog.component.scss */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddToCartDialogComponent);
    return AddToCartDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/cart/add-to-cart/add-to-cart.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart/add-to-cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"atc-container\">\n  <mat-card-content>\n\n    <mat-form-field class=\"atc-quantity\">\n      <mat-label>Quantity</mat-label>\n      <mat-select name=\"quantity\" [(value)]=\"quantity\">\n        <mat-option *ngFor=\"let quantity of availableQuantities\" [value]=\"quantity\"> {{quantity}}</mat-option>\n\n      </mat-select>\n    </mat-form-field>\n\n    <span class=\"atc-spacer\"></span>\n\n    <button mat-raised-button color=\"primary\" (click)=\"addItemToCart()\" *ngIf=\"!( isItemAlreadyInCart|async)\">\n      <mat-icon> add_shopping_cart </mat-icon> \n      <span class=\"addcart-btn-text\">\n        Add to Cart\n      </span>\n    </button>\n\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['../cart']\" class=\"btn-md\"\n      *ngIf=\"isItemAlreadyInCart|async\">\n      <mat-icon> shopping_cart </mat-icon> <span class=\"viewcart-btn-text\">\n        View in Cart\n      </span>\n    </button>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart/add-to-cart.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart/add-to-cart.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\n  font-size: 30px;\n  height: 56px;\n  width: 56px;\n  line-height: 56px;\n  color: white; }\n\n.addcart-btn-text,\n.viewcart-btn-text {\n  display: inline; }\n\n.atc-container {\n  width: 50%;\n  box-shadow: none; }\n\n.atc-spacer {\n  flex: 1 1 auto; }\n\n.mat-column-price {\n  flex: 1 1 60px; }\n\n.atc-quantity {\n  width: 5em;\n  margin-right: 2em; }\n\n@media all and (max-width: 699px) {\n  .addcart-btn-text,\n  .viewcart-btn-text {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcnQvYWRkLXRvLWNhcnQvRDpcXHByb2R1Y3QtbWFydFxccHJvZHVjdC1tYXJ0L3NyY1xcYXBwXFxzaGFyZWRcXGNhcnRcXGFkZC10by1jYXJ0XFxhZGQtdG8tY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQWU7RUFDZixZQUhjO0VBSWQsV0FKYztFQUtkLGlCQUxjO0VBTWQsWUFBWSxFQUFBOztBQUVkOztFQUVFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7O0lBRUUsYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uV2lkdGg6IDU2cHg7XG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGhlaWdodDogJGljb25XaWR0aDtcbiAgd2lkdGg6ICRpY29uV2lkdGg7XG4gIGxpbmUtaGVpZ2h0OiAkaWNvbldpZHRoO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWRkY2FydC1idG4tdGV4dCxcbi52aWV3Y2FydC1idG4tdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5hdGMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmF0Yy1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tcHJpY2Uge1xuICBmbGV4OiAxIDEgNjBweDtcbn1cblxuLmF0Yy1xdWFudGl0eSB7XG4gIHdpZHRoOiA1ZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2OTlweCkge1xuICAuYWRkY2FydC1idG4tdGV4dCxcbiAgLnZpZXdjYXJ0LWJ0bi10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/cart/add-to-cart/add-to-cart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/cart/add-to-cart/add-to-cart.component.ts ***!
  \******************************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/cart/cart.service */ "./src/app/core/cart/cart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-to-cart-dialog/add-to-cart-dialog.component */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts");
/* harmony import */ var _core_cart_cart_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/cart/cart-queries */ "./src/app/core/cart/cart-queries.ts");






var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartQueries, cartService, matDialog) {
        this.cartQueries = cartQueries;
        this.cartService = cartService;
        this.matDialog = matDialog;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        this.availableQuantities = _core_cart_cart_queries__WEBPACK_IMPORTED_MODULE_5__["ALLOWED_QUANTITIES"];
        this.quantity = 1;
        this.isItemAlreadyInCart = this.cartQueries.isItemAlreadyInCart(this.product.id);
    };
    AddToCartComponent.prototype.addItemToCart = function () {
        var _this = this;
        this.cartService
            .addToCart(this.product, this.quantity)
            .subscribe(function (cartItem) { return _this.openDialog(cartItem); });
    };
    AddToCartComponent.prototype.openDialog = function (cartItem) {
        this.matDialog.open(_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddToCartDialogComponent"], {
            width: '350px',
            height: '250px',
            data: { cartItem: cartItem },
            disableClose: true
        });
    };
    AddToCartComponent.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddToCartComponent.prototype, "product", void 0);
    AddToCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-add-to-cart',
            template: __webpack_require__(/*! ./add-to-cart.component.html */ "./src/app/shared/cart/add-to-cart/add-to-cart.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./add-to-cart.component.scss */ "./src/app/shared/cart/add-to-cart/add-to-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_cart_cart_queries__WEBPACK_IMPORTED_MODULE_5__["CartQueries"],
            _core_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "./src/app/shared/cart/cart-item-count/cart-item-count.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/cart/cart-item-count/cart-item-count.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon [matBadge]=\"cartItemCount$|async\" matBadgeColor=\"accent\" [routerLink]=\"['cart']\">shopping_cart</mat-icon>"

/***/ }),

/***/ "./src/app/shared/cart/cart-item-count/cart-item-count.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/cart/cart-item-count/cart-item-count.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\n  margin-top: 0.5em;\n  margin-right: 0.5em;\n  font-size: 30px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcnQvY2FydC1pdGVtLWNvdW50L0Q6XFxwcm9kdWN0LW1hcnRcXHByb2R1Y3QtbWFydC9zcmNcXGFwcFxcc2hhcmVkXFxjYXJ0XFxjYXJ0LWl0ZW0tY291bnRcXGNhcnQtaXRlbS1jb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJ0L2NhcnQtaXRlbS1jb3VudC9jYXJ0LWl0ZW0tY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/cart/cart-item-count/cart-item-count.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/cart/cart-item-count/cart-item-count.component.ts ***!
  \**************************************************************************/
/*! exports provided: CartItemCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemCountComponent", function() { return CartItemCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_cart_cart_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/cart/cart-queries */ "./src/app/core/cart/cart-queries.ts");



var CartItemCountComponent = /** @class */ (function () {
    function CartItemCountComponent(cartQueries) {
        this.cartQueries = cartQueries;
    }
    CartItemCountComponent.prototype.ngOnInit = function () {
        this.cartItemCount$ = this.cartQueries.cartItemsCount;
    };
    CartItemCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-cart-item-count',
            template: __webpack_require__(/*! ./cart-item-count.component.html */ "./src/app/shared/cart/cart-item-count/cart-item-count.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./cart-item-count.component.scss */ "./src/app/shared/cart/cart-item-count/cart-item-count.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_cart_cart_queries__WEBPACK_IMPORTED_MODULE_2__["CartQueries"]])
    ], CartItemCountComponent);
    return CartItemCountComponent;
}());



/***/ }),

/***/ "./src/app/shared/material-module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material-module.ts ***!
  \*******************************************/
/*! exports provided: PmMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmMaterialModule", function() { return PmMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var PmMaterialModule = /** @class */ (function () {
    function PmMaterialModule() {
    }
    PmMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]
            ]
        })
    ], PmMaterialModule);
    return PmMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-module */ "./src/app/shared/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _cart_cart_item_count_cart_item_count_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart-item-count/cart-item-count.component */ "./src/app/shared/cart/cart-item-count/cart-item-count.component.ts");
/* harmony import */ var _cart_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/add-to-cart/add-to-cart.component */ "./src/app/shared/cart/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var _cart_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/add-to-cart-dialog/add-to-cart-dialog.component */ "./src/app/shared/cart/add-to-cart-dialog/add-to-cart-dialog.component.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _cart_cart_item_count_cart_item_count_component__WEBPACK_IMPORTED_MODULE_7__["CartItemCountComponent"],
                _cart_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__["AddToCartComponent"],
                _cart_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddToCartDialogComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["PmMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]],
            exports: [
                _material_module__WEBPACK_IMPORTED_MODULE_3__["PmMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _cart_cart_item_count_cart_item_count_component__WEBPACK_IMPORTED_MODULE_7__["CartItemCountComponent"],
                _cart_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__["AddToCartComponent"]
            ],
            entryComponents: [_cart_add_to_cart_dialog_add_to_cart_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddToCartDialogComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\product-mart\product-mart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map