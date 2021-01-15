(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/core/products/product-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/products/product-data.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDataService", function() { return ProductDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductDataService = /** @class */ (function () {
    function ProductDataService($http) {
        this.$http = $http;
    }
    ProductDataService.prototype.getAllProducts = function () {
        return this.$http.get('products.json');
    };
    ProductDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductDataService);
    return ProductDataService;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");




var routes = [
    {
        path: '',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");
/* harmony import */ var _core_products_product_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/products/product-data.service */ "./src/app/core/products/product-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            providers: [_core_products_product_data_service__WEBPACK_IMPORTED_MODULE_5__["ProductDataService"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/products/products/products.component.html":
/*!***********************************************************!*\
  !*** ./src/app/products/products/products.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n\n    <mat-form-field style=\"width:100%\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n    <table matSort mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"imgUrl\">\n        <th mat-header-cell *matHeaderCellDef> Image </th>\n        <td mat-cell *matCellDef=\"let product\">\n          <img [src]=\"product.imgUrl\" class=\"product-listing-image\">\n        </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-sort-header mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let product\"> {{product.name}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"price\">\n        <th mat-sort-header mat-header-cell *matHeaderCellDef> Price </th>\n        <td mat-cell *matCellDef=\"let product\"> {{product.price| currency:'INR' }} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"addToCart\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let product\">\n          <pm-add-to-cart [product]=\"product\"></pm-add-to-cart>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[3,6,9]\" showFirstLastButtons></mat-paginator>\n  </mat-card-content>\n</mat-card>\n<mat-spinner color=\"primary\" *ngIf=\"loading\"></mat-spinner>"

/***/ }),

/***/ "./src/app/products/products/products.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/products/products/products.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-table {\n  width: 100%;\n  box-shadow: none; }\n\n.product-listing-image {\n  height: 20em;\n  width: 15em; }\n\n@media all and (max-width: 699px) {\n  .product-listing-image {\n    height: 9em;\n    width: 7em; } }\n\n.mat-spinner {\n  margin: 10% auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvRDpcXHByb2R1Y3QtbWFydFxccHJvZHVjdC1tYXJ0L3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBS2I7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUEsRUFDWDs7QUFHSDtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucHJvZHVjdC1saXN0aW5nLWltYWdlIHtcbiAgaGVpZ2h0OiAyMGVtO1xuICB3aWR0aDogMTVlbTtcbn1cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gIC5wcm9kdWN0LWxpc3RpbmctaW1hZ2Uge1xuICAgIGhlaWdodDogOWVtO1xuICAgIHdpZHRoOiA3ZW07XG4gIH1cblxufVxuLm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbn1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/products/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/products/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_products_product_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/products/product-data.service */ "./src/app/core/products/product-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _core_utils_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/logger.service */ "./src/app/core/utils/logger.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productDataService, logService) {
        this.productDataService = productDataService;
        this.logService = logService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.loading = true;
        this.subscriptions = [];
        this.displayedColumns = ['imgUrl', 'name', 'price', 'addToCart'];
    }
    ProductsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.productDataService.getAllProducts().subscribe(function (products) {
            _this.logService.log('products loaded', products);
            _this.onDataLoad(products);
        }));
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    ProductsComponent.prototype.onDataLoad = function (products) {
        this.loading = false;
        this.dataSource.sort = this.sort;
        this.dataSource.data = products;
        this.dataSource.paginator = this.paginator;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ProductsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ProductsComponent.prototype, "paginator", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pm-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products/products.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_products_product_data_service__WEBPACK_IMPORTED_MODULE_1__["ProductDataService"],
            _core_utils_logger_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map