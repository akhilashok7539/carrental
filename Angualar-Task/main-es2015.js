(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<app-sidebar></app-sidebar>\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\n\n\n\n\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-3\">\n                <h4 class=\"page-title\">Vehicle Mangement</h4>\n\n            </div>\n\n\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\n\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\n                        class=\"fa fa-plus\"></i> </a> -->\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n\n\n            <div class=\"table-responsive\">\n                <!-- <div class=\"row\">\n                    <div class=\"col-sm-4\">\n\n                    </div>\n                    <div class=\"col-sm-4\"></div>\n                    <div class=\"col-sm-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\n                            (keyup)=\"applyFilter(searchString)\">\n\n\n\n                    </div>\n                </div> -->\n                <div class=\"col-sm-12\">\n                    <mat-tab-group  mat-align-tabs=\"center\"  (selectedTabChange)=\"tabClick($event)\">\n                        <mat-tab label=\"Pending\">\n                            <div class=\"row\" style=\"margin-top: 10px;\">\n                                <div class=\"col-sm-3\" *ngFor=\"let results of results\">\n                                    <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\n                                    <div class=\"card\">\n                                        <img src=\"{{apiurl}}vehicle/getImage1/{{results.id}}\" alt=\"\"\n                                            style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\n                                        <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\n                                        &nbsp;\n                                        <button class=\"btn btn-dark\"\n                                            style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\n                                            (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> View More</button>\n                                        <div class=\"row\" style=\"padding: 5px;\">\n                                            <button class=\"btn btn-success\" style=\"margin-right: 1px;\" (click)=\"approve(results)\"><i class=\"fa fa-check\"></i> Approve</button>\n                                            <button class=\"btn btn-danger\" style=\" \" (click)=\"reject(results)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Reject</button>\n\n                                        </div>\n                                        <!-- </mat-card> -->\n                                    </div>\n                                </div>\n                            </div>\n\n                        </mat-tab>\n\n\n\n                        <mat-tab label=\"Accepted\">\n                            <div class=\"row\" style=\"margin-top: 10px;\">\n                                <div class=\"col-sm-3\" *ngFor=\"let results of results\">\n                                    <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\n                                        <div class=\"card\">\n                                        <img src=\"{{apiurl}}vehicle/getImage1/{{results.id}}\" alt=\"\"\n                                            style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\n                                        <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\n                                        &nbsp;\n                                        <button class=\"btn btn-dark\"\n                                            style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\n                                            (click)=\"view(results)\"><i class=\"fa fa-eye\"></i> View More</button>\n                                    <!-- </mat-card> -->\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n\n\n                        <mat-tab label=\"Rejected\">\n                            <div class=\"row\" style=\"margin-top: 10px;\">\n                                <div class=\"col-sm-3\" *ngFor=\"let results of results\">\n                                    <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\n                                        <div class=\"card\">\n                                        <img src=\"{{apiurl}}vehicle/getImage1/{{results.id}}\" alt=\"\"\n                                            style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\n                                        <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\n                                        &nbsp;\n                                        <button class=\"btn btn-dark\"\n                                            style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\n                                            (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> View More</button>\n                                    <!-- </mat-card> -->\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n                    </mat-tab-group>\n                    <!-- <mat-table #table [dataSource]=\"dataSource\">\n\n                        <ng-container matColumnDef=\"vname\">\n                            <mat-header-cell *matHeaderCellDef>Vehicle Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let element \">{{element.model}} </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"vnumber\">\n                            <mat-header-cell *matHeaderCellDef>Vehicle Number</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\">{{element.numberPlate}} </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"name\">\n                            <mat-header-cell *matHeaderCellDef> Company Name</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\">{{element.companyName}}</mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"view\">\n                            <mat-header-cell *matHeaderCellDef> View Details</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> <button (click)=\"view(element)\" class=\"btn btn-warning\">View</button></mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"approve\">\n                            <mat-header-cell *matHeaderCellDef> Approve / Reject</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\">\n                                <button class=\"btn btn-danger\" (click)=\"approve(element)\">Approve</button> &nbsp;\n                                <button class=\"btn btn-dark\" (click)=\"reject(element)\">Reject</button>\n\n                            </mat-cell>\n                        </ng-container>\n\n\n\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" (page)=\"changePage($event)\">\n                    </mat-paginator> -->\n\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<app-sidebar></app-sidebar>\n<!-- \n<div class=\"page-wrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Vehicle Details</h3>\n                <hr>\n\n            </div>\n\n            <div class=\"col-sm-12\">\n                <img src=\"{{apiurl}}vehicle/getImage1/{{vehicleID}}\" alt=\"\" style=\"    width: 124px;\">\n                <hr style=\"    width: 52%;\n                margin-right: auto;\n                margin-left: auto;\n                display: block;\">\n            </div>\n          \n            <div class=\"col-sm-12\">\n                <mat-card>\n                    <p><i class=\"fa fa-industry\"></i> &nbsp; Comapny Name : {{vehicleModel.vehicleCompany}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Type : {{vehicleModel.vehicleType}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-registered\"></i> &nbsp; Vehicle Registration :\n                        {{vehicleModel.vehicleRegistration}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Model :\n                        {{vehicleModel.vehicleModel}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\n                        {{vehicleModel.locality}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-calendar\"></i> &nbsp; Vehicle Year :\n                        {{vehicleModel.vehicleYear}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\n                        {{vehicleModel.rent}}</p>\n                </mat-card>\n\n                <mat-card>\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\n                        {{vehicleModel.rent}}</p>\n                </mat-card>\n                <mat-card>\n                    <p>License Front</p>\n                    <img [src]=\"liscence1\" alt=\"\" style=\"    width: 36%;\">\n                </mat-card>\n                <mat-card>\n                    <p>License Back</p>\n                    <img [src]=\"liscence2\" alt=\"\" style=\"    width: 36%;\">\n                </mat-card>  <mat-card>\n                    <p>RC Book</p>\n                    <img [src]=\"rc\" alt=\"\" style=\"    width: 36%;\">\n                </mat-card>\n            </div>\n\n        </div>\n    </div>\n</div> -->\n<div class=\"page-wrapper\">\n    <div class=\"container\">\n        <h4>Vehicle <span style=\"color: #ffa800;\">Details</span> </h4>\n<hr>\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n\n                <!-- <mat-card> -->\n                <div class=\"card\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <h5 style=\"text-align: center;\">{{vehicleModel.vehicleCompany}},{{vehicleModel.vehicleModel}}</h5>\n\n                            <hr>\n                        </div>\n                        <!-- <div class=\"col-sm-3\">\n                            <p style=\"\n                           background: #ffcb67;\n                            border-radius: 125px;\n                            padding: 3px;\n                        \">{{vehicleModel.vehicleModel}}</p>\n                        </div> -->\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <img src=\"{{apiurl}}vehicle/getImage1/{{vehicleID}}\" alt=\"\"\n                                style=\"     width: 200px; height: 186px;  \">\n                        </div>\n                        <div class=\"col-sm-8\">\n                            <p style=\"margin-top: 10px;    text-align: left;\"><i class=\"fa fa-car\"></i>&nbsp;Vehicle\n                                Type : {{vehicleModel.vehicleType}}</p>\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-registered\"></i>&nbsp; Registration Number\n                                : {{vehicleModel.vehicleRegistration}}</p>\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\n                                {{vehicleModel.locality}}</p>\n                            <hr>\n                            <h6>Rent Details</h6>\n                            &nbsp;\n                            <p *ngIf=\"rentperhour != null\" style=\"    text-align: left;\"><i class=\"fa fa-inr\"></i>&nbsp; Rent Per Hour :\n                                {{rentperhour}}</p>\n                            <p *ngIf=\"vehicleModel.rent != null\" style=\"    text-align: left;\"><i class=\"fa fa-calendar\"></i>&nbsp; Rent Per Day :\n                                {{vehicleModel.rent}}</p>\n                            <p *ngIf=\"rentperkm != null\" style=\"    text-align: left;\"><i class=\"fa fa-road\"></i>&nbsp; Rent Per KM :\n                                {{rentperkm}}</p>\n\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <img src=\"{{apiurl}}driver/getProfilePic/{{driverDetails}}\" alt=\"\" style=\"\" />\n\n                        </div>\n                        <div class=\"col-sm-8\">\n                            <h6>Driver Details</h6>\n                            <hr>\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-user\"></i>&nbsp;Driver Name\n                                :\n                                {{vehicleModel.dname}}</p>\n                            <p *ngIf=\"DriverDetailsofCar !=null\"style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-phone\"></i>&nbsp;Contact\n                                Number :\n                                {{vehicleModel.dnumber}}</p>\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i\n                                    class=\"fa fa-map-marker\"></i>&nbsp;Driver\n                                Address : {{vehicleModel.daddreess}}</p>\n                            <p *ngIf=\"DriverDetailsofCar ==null\"> No Driver is linked to this vehicle!</p>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card\">\n                    <h6> Vehicle Details </h6>\n                    <hr>\n                    <p>License Front</p>\n                    <img [src]=\"liscence1\" alt=\"\">\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n\n                    <p>License Back</p>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    <img [src]=\"liscence2\" alt=\"\">\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n\n                    <p>RC Book</p>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    <img [src]=\"rc\" alt=\"\">\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminhome/adminhome.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminhome/adminhome.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrapper\" >\n    <div class=\"row\" >\n        <div class=\"col-md-12 \" *ngIf=\"userRole == 'ADMIN'\">\n    \n            <!-- <div class=\"table-responsive\"> -->\n                <!-- <app-countries></app-countries> -->\n                <app-companies></app-companies>\n            <!-- </div> -->\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"userRole == 'OWNER'\">\n<app-ownerpannel></app-ownerpannel>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminpannel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminpannel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<app-sidebar></app-sidebar>\n<app-adminhome></app-adminhome>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/companies/companies.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/companies/companies.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n<app-sidebar></app-sidebar>\n<app-navigation></app-navigation>\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\n\n\n\n\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-3\">\n                <h4 class=\"page-title\">Owner</h4>\n\n            </div>\n\n\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\n\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\n                        class=\"fa fa-plus\"></i> </a> -->\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n\n\n            <div class=\"table-responsive\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <!-- <h5>Owner</h5> -->\n\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\n                        (keyup)=\"applyFilter(searchString)\">\n                        <span style=\"    float: right;\n                        margin-top: -29px;\n                        margin-right: 13px;\n                    \"><i class=\"fa fa-search\"></i> </span>\n                    </div>\n                    <div class=\"col-sm-3\">\n                       \n\n\n\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n\n                    <mat-table #table [dataSource]=\"dataSource\">\n\n                        <ng-container matColumnDef=\"name\">\n                            <mat-header-cell *matHeaderCellDef>Owner Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let element \"> {{element.name}}</mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"email\">\n                            <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\">{{element.emailId}} </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"phonenumber\">\n                            <mat-header-cell *matHeaderCellDef> Contact</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\">{{element.mobile}}</mat-cell>\n                        </ng-container>\n\n\n\n\n\n\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" (page)=\"changePage($event)\">\n                    </mat-paginator>\n\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/countries/countries.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/countries/countries.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header>\n<app-sidebar></app-sidebar>\n<div class=\"row\" style=\"margin-top: 5vw;\">\n    <div class=\"col-md-10 \">\n  \n      <div class=\"table-responsive\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <h5>Countries</h5>\n  \n          </div>\n          <div class=\"col-sm-4\"></div>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\n              (keyup)=\"applyFilter(searchString)\">\n          \n  \n  \n          </div>\n        </div>\n  \n        <mat-table #table [dataSource]=\"dataSource\">\n  \n          <ng-container matColumnDef=\"no\">\n            <mat-header-cell *matHeaderCellDef>No </mat-header-cell>\n            <mat-cell *matCellDef=\"let element ; let i = index;\"> {{this.paginator.pageIndex == 0 ? i + 1 : 1 + i + this.paginator.pageIndex * this.paginator.pageSize}} </mat-cell>\n          </ng-container> \n          <ng-container matColumnDef=\"country\">\n            <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name | uppercase }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"code\">\n            <mat-header-cell *matHeaderCellDef> Exam Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.code}} </mat-cell>\n          </ng-container>\n  \n  \n  \n  \n  \n  \n  \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n  \n  \n        <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageLimit\"\n          >\n        </mat-paginator>\n        \n        <h5 *ngIf=\"message == 'No data found'\">No data Found</h5>\n  \n  \n      </div>\n    </div>\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/header/header.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/header/header.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar class=\"mat-elevation-z6\" color=\"primary\" >\n Dashboard \n <div style=\"position:absolute; right:10px;\">\n    <button style=\"outline: none;\" mat-icon-button [matMenuTriggerFor]=\"menu\" matTooltip=\"Profile Actions\">\n        <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"logout()\" style=\"outline: none;\">\n          <span>Sign Out</span>\n          <mat-icon style=\"padding-left: 5px;\">exit_to_app</mat-icon>\n        </button>\n    </mat-menu>\n</div>\n  </mat-toolbar> -->\n  <header id=\"header-area\" class=\"fixed-top\">\n\n    <div id=\"header-bottom\" style=\"background-color: rgb(0 0 0);\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!--== Logo Start ==-->\n                <div class=\"col-lg-4\">\n                   \n                </div>\n                <!--== Logo End ==-->\n\n                <!--== Main Menu Start ==-->\n                <div class=\"col-lg-8 d-none d-xl-block\">\n                    <nav class=\"mainmenu alignright\">\n                        <ul>\n                            <li routerLinkActive=\"active\">\n                                <a routerLink=\"/Home\">Home</a>\n\n                            </li>\n                            <li routerLinkActive=\"active\"><a href=\"about.html\">About</a></li>\n                            <li routerLinkActive=\"active\"><a href=\"services.html\">services</a></li>\n\n\n                            <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\n                            <li routerLinkActive=\"active\"><a routerLink=\"/register\">Register</a></li>\n                        </ul>\n                    </nav>\n                </div>\n                <!--== Main Menu End ==-->\n            </div>\n        </div>\n    </div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/add-location/add-location.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/add-location/add-location.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/locations\"><i\n                style=\"color: black;\">Locality</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Add Locality</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Add New Locality</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"locationForn\">\n                    <div class=\"row\">\n                       \n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>Locality Name<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" \n                                type=\"text\"  [(ngModel)]=\"Location\" formControlName=\"Location\" >\n                              \n\n                            </div>\n                        </div>\n                        \n                       \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/edit-location/edit-location.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/edit-location/edit-location.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/locations\"><i\n                style=\"color: black;\">Locality</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Edit Locality</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Edit Locality</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"locationForn\">\n                    <div class=\"row\">\n                       \n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>Locality Name<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" \n                                type=\"text\"  [(ngModel)]=\"Location\" formControlName=\"Location\" >\n                              \n\n                            </div>\n                        </div>\n                        \n                       \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/location.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/location.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<app-sidebar></app-sidebar>\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\n\n\n\n\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-3\">\n                <h4 class=\"page-title\">Locality</h4>\n\n            </div>\n\n\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\n\n                <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" routerLink=\"/add-location\"><i\n                        class=\"fa fa-plus\"></i> </a>\n            </div>\n        </div>\n        <div class=\"row\" >\n\n            <div class=\"table-responsive\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <!-- <h5>Location</h5> -->\n\n                    </div>\n                    <div class=\"col-sm-4\"></div>\n                    <div class=\"col-sm-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\n                            (keyup)=\"applyFilter(searchString)\">\n\n\n\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n\n                    <mat-table #table [dataSource]=\"dataSource\">\n\n                        <ng-container matColumnDef=\"location\">\n                            <mat-header-cell *matHeaderCellDef>Location Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let element \"> {{element.name}}</mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"Edit\">\n                            <mat-header-cell *matHeaderCellDef>Options</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> <button (click)=\"edit(element)\" class=\"btn btn-danger\">Edit</button>  &nbsp;&nbsp;&nbsp;\n                          <button (click)=\"delete(element)\" class=\"btn btn-dark\">Delete</button> </mat-cell>\n                       \n                        </ng-container>\n                        <!-- <ng-container matColumnDef=\"delete\">\n                            <mat-header-cell *matHeaderCellDef>Delete</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> <button (click)=\"delete(element)\" class=\"btn btn-dark\">Delete</button> </mat-cell>\n                        </ng-container> -->\n                        \n\n\n\n\n\n\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" >\n                    </mat-paginator>\n\n\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/paymentreports/paymentreports.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/paymentreports/paymentreports.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<app-sidebar></app-sidebar>\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\n\n\n\n\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-3\">\n                <h4 class=\"page-title\">Payment Reports</h4>\n\n            </div>\n\n\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\n\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\n                        class=\"fa fa-plus\"></i> </a> -->\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n\n\n            <div class=\"table-responsive\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <!-- <h5>Vehicles</h5> -->\n\n                    </div>\n                    <div class=\"col-sm-4\"></div>\n                    <div class=\"col-sm-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\n                            (keyup)=\"applyFilter(searchString)\">\n\n\n\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n\n                    <mat-table #table [dataSource]=\"dataSource\">\n\n                        <ng-container matColumnDef=\"transId\">\n                            <mat-header-cell *matHeaderCellDef>Transaction ID  </mat-header-cell>\n                            <mat-cell *matCellDef=\"let element \"> </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"uname\">\n                            <mat-header-cell *matHeaderCellDef>User Name</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"unumber\">\n                            <mat-header-cell *matHeaderCellDef> User Number</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"></mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"dname\">\n                            <mat-header-cell *matHeaderCellDef> Driver Name</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"></mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"dnumber\">\n                            <mat-header-cell *matHeaderCellDef> Driver Number</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"></mat-cell>\n                        </ng-container>\n                      \n\n\n\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageLimit\">\n                    </mat-paginator>\n\n                    <h5 *ngIf=\"message == 'No data found'\">No data Found</h5>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/reset-passowrd/reset-passowrd.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/reset-passowrd/reset-passowrd.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<app-sidebar></app-sidebar>\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\n\n\n\n\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-3\">\n                <h4 class=\"page-title\">Reset Password</h4>\n\n            </div>\n\n\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\n\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\n                        class=\"fa fa-plus\"></i> </a> -->\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"card\">\n                    <form>\n                        <div class=\"col-sm-12\" style=\"margin-left: auto;\n                        margin-right: auto;\">\n                            <label for=\"\">Password</label>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Please Enter Your Password\">\n                        </div>\n                        <div class=\"col-sm-12\" style=\"margin-left: auto;margin-top: 10px;\n                        margin-right: auto;\">\n                            <label for=\"\">Confirm Password</label>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Confirm Your Password\">\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <button style=\"    margin: 12px;\n                            margin-left: auto;\n                            margin-right: auto;\n                            display: block;\n                            padding: 9px;\n                            width: 38%;\n                        \" class=\"btn btn-danger\">Reset Password</button>\n                        </div>\n                    </form>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"col-sm-3\">\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/sidebar/sidebar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/sidebar/sidebar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-sidenav-container>\n    <mat-sidenav  mode=\"side\" opened=\"true\" [fixedInViewport]=\"true\" [fixedTopGap]=\"64\">\n                <ul>\n                    <li routerLink=\"/admin\" routerLinkActive=\"active\">Home</li>\n                    \n                    <li *ngIf=\"userRole == 'ADMIN'\" routerLink=\"/countries\" routerLinkActive=\"active\">Countries</li>\n\n                </ul>\n      </mat-sidenav>\n  \n </mat-sidenav-container> -->\n    \n<div class=\"sidebar\" id=\"sidebar\" >\n    <div class=\"sidebar-inner slimscroll\" style=\"overflow-y: auto;\">\n        <div id=\"sidebar-menu\" class=\"sidebar-menu\">\n            <ul  *ngIf=\"userRole == 'ADMIN'\">\n\n                <img src=\"assets/img/logoos.png\" alt=\"\" style=\"    display: block;\n                width: 52%;\n                margin: 0 auto;\n                padding-top: 32px;\">\n                <li class=\"menu-title\" style=\"text-align: center;\"> <strong>  Admin</strong></li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/admin\"><i class=\"fa fa-user\"></i> <span>Owners</span></a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/locations\"><i class=\"fa fa-map-marker\"></i> <span>Locality</span></a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/admin-vehicles\" ><i class=\"fa fa-car\"></i> <span>Vehicles</span></a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/admin-paymentreports\"><i class=\"fa fa-inr\"></i> <span>Payment Reports</span></a>\n                </li>\n              \n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/admin-resetpassword\"><i class=\"fa fa-lock\"></i> <span>Reset Password</span></a>\n                </li>\n                \n            </ul >\n            <ul  *ngIf =\"userRole=='OWNER'\">\n                <img src=\"assets/img/logoos.png\" alt=\"\" style=\"    display: block;\n                width: 52%;\n                margin: 0 auto;\n                padding-top: 32px;\">\n                <li class=\"menu-title\" style=\"text-align: center;\"> <strong> Owner</strong></li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/admin\"><i class=\"fa fa-user-md\"></i> <span>Home</span></a>\n                </li>\n                <!-- <li routerLinkActive=\"active\">\n                    <a routerLink =\"/items\"><i class=\"fa fa-user-md\"></i> <span>Vehicles</span></a>\n                </li>\n           \n             \n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/booking-customers\"><i class=\"fa fa-user-md\"></i> <span>Drivers  </span></a>\n                </li>\n               \n                <li routerLinkActive=\"active\">\n                    <a  routerLink =\"/admin-deliveryBoys\"><i class=\"fa fa-user-md\"></i> <span>Vehicle Tracking</span></a>\n                </li>\n              \n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/booking-history\"><i class=\"fa fa-user-md\"></i> <span>Payment reports</span></a>\n                </li>\n              \n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>  Bank manage</span></a>\n                </li>  -->\n               \n                 <!-- <li routerLinkActive=\"active\">\n                    <a routerLink =\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Profile</span></a>\n                </li>  -->\n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Terms & Conditions</span></a>\n                </li> \n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Privacy</span></a>\n                </li> \n                <li routerLinkActive=\"active\">\n                    <a routerLink =\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Help and Support</span></a>\n                </li> \n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/admin-resetpassword\"><i class=\"fa fa-lock\"></i> <span>Reset Password</span></a>\n                </li> \n                <!-- <li routerLinkActive=\"active\">\n                    <a routerLink =\"/booking-history\"><i class=\"fa fa-user-md\"></i> <span>Change password</span></a>\n                </li> -->\n            </ul >\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"page-404-wrap\" class=\"section-padding overlay\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <div class=\"page-404-content\">\n                    <div class=\"number\">\n                        <div class=\"four\">4</div>\n                        <div class=\"zero\">\n                            <img src=\"assets/img/404.png\" alt=\"JSOFT\">\n                        </div>\n                        <div class=\"four\">4</div>\n                    </div>\n                    <h4>COMMING SOON !</h4>\n                    <p>SORRY, WE COULDN'T FIND THE PAGE <br> YOU'RE LOOKING.</p>\n                    <a href=\"404.html\" class=\"btn-404-home\"><i class=\"fa fa-home\"></i></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--== Footer Area Start ==-->\n<section id=\"footer-area\">\n    <!-- Footer Widget Start -->\n    <div class=\"footer-widget-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!-- Single Footer Widget Start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"single-footer-widget\">\n                        <h2>About Us</h2>\n                        <div class=\"widget-body\">\n                            <img src=\"assets/img/logoos.png\" alt=\"JSOFT\" style=\"    height: 106px;\n                            width: 107px;\">\n                            <!-- <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit. Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p> -->\n\n                           \n\n                        </div>\n                    </div>\n                </div>\n                <!-- Single Footer Widget End -->\n\n                <!-- Single Footer Widget Start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"single-footer-widget\">\n                        <h2>Subscribe for Newsletter </h2>\n                        <div class=\"newsletter-area\">\n                            <form action=\"index.html\">\n                                <input type=\"email\" placeholder=\"Subscribe Our Newsletter\">\n                                <button type=\"submit\" class=\"newsletter-btn\"><i class=\"fa fa-send\"></i></button>\n                            </form>\n                        </div>\n                        <!-- <div class=\"widget-body\">\n                            <ul class=\"recent-post\">\n                                <li>\n                                    <a href=\"#\">\n                                       Hello Bangladesh! \n                                       <i class=\"fa fa-long-arrow-right\"></i>\n                                   </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                      Lorem ipsum dolor sit amet\n                                       <i class=\"fa fa-long-arrow-right\"></i>\n                                   </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                       Hello Bangladesh! \n                                       <i class=\"fa fa-long-arrow-right\"></i>\n                                   </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        consectetur adipisicing elit?\n                                       <i class=\"fa fa-long-arrow-right\"></i>\n                                   </a>\n                                </li>\n                            </ul>\n                        </div> -->\n                    </div>\n                </div>\n                <!-- Single Footer Widget End -->\n\n                <!-- Single Footer Widget Start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"single-footer-widget\">\n                        <h2>get touch</h2>\n                        <div class=\"widget-body\">\n                            <p>ea, scelerisque sed</p>\n\n                            <ul class=\"get-touch\">\n                                <li><i class=\"fa fa-map-marker\"></i> location address</li>\n                                <li><i class=\"fa fa-mobile\"></i> +9878786672</li>\n                                <li><i class=\"fa fa-envelope\"></i> cmgadi@gmail.com</li>\n                            </ul>\n                            <a href=\"https://goo.gl/maps/b5mt45MCaPB2\" class=\"map-show\" target=\"_blank\">Show Location</a>\n                        </div>\n                    </div>\n                </div>\n                <!-- Single Footer Widget End -->\n            </div>\n        </div>\n    </div>\n    <!-- Footer Widget End -->\n\n    <!-- Footer Bottom Start -->\n    <div class=\"footer-bottom-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved </p>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Footer Bottom End -->\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<div class=\"page-wrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n\n            </div>\n            <div class=\"col-sm-5\">\n                <form >\n                    <div class=\"card\">\n                        <div class=\"card-title\">\n                            <h4>Reset Password</h4>\n                            <p>Please enter your Email Id for reset your password.</p>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Email Id</label>\n                                <input type=\"text\" id=\"email\" class=\"form-control\">\n                                \n                            </div>\n                        </div>\n                        <div class=\"row\" style=\"    margin: 0px;\">\n                            <button class=\"loginbtn\"  >Reset Password</button> &nbsp; &nbsp;\n                        \n\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"page-wrapper\">\n    <div class=\"container\">\n  \n    <div class=\"row\"> \n            <div class=\"col-sm-6\">\n                <mat-card (click)=\"login()\">\n                    <h5>Login</h5>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card (click)=\"register()\">\n\n                    <h5>Register</h5>\n                    \n                </mat-card>\n            </div>\n          \n        </div>\n    </div>\n</div> -->\n<app-navigation></app-navigation>\n<section id=\"slider-area\">\n    <!--== slide Item One ==-->\n    <div class=\"single-slide-item overlay\">\n        <div class=\"container\">\n            <div class=\"row\">\n                \n\n                <div class=\"col-lg-7 text-right\">\n                    <div class=\"display-table\">\n                        <div class=\"display-table-cell\">\n                            <div class=\"slider-right-text\">\n                                <h1>BOOK A CAR TODAY!</h1>\n                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br> FOR OUR RETURNING CUSTOMERS</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--== slide Item One ==-->\n</section>\n<section id=\"service-area\" class=\"section-padding\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- Section Title Start -->\n            <div class=\"col-lg-12\">\n                <div class=\"section-title  text-center\">\n                    <h2>Our Services</h2>\n                    <span class=\"title-line\"><i class=\"fa fa-car\"></i></span>\n                </div>\n            </div>\n            <!-- Section Title End -->\n        </div>\n\n       \n        <!-- Service Content Start -->\n        <div class=\"row\">\n            <!-- Single Service Start -->\n            <div class=\"col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <i class=\"fa fa-taxi\"></i>\n                    <h3>RENTAL CAR</h3>\n                </div>\n            </div>\n           \n            <!-- Single Service End -->\n            \n            <!-- Single Service Start -->\n            <div class=\"col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <i class=\"fa fa-map-marker\"></i>\n                    <h3>TAXI SERVICE</h3>\n                </div>\n            </div>\n         \n            <div class=\"col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <i class=\"fa fa-phone\"></i>\n                    <h3>call driver</h3>\n                </div>\n            </div>\n            <!-- Single Service End -->\n        </div>\n        <!-- Service Content End -->\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading | async\" class=\"overlay\" >\n    <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" aria-label=\"Loading\">\n    </mat-progress-spinner>\n    <!-- <div style=\"font-size: 40px;  margin-top: 450px; padding-left: 710px; color: white;\" >Loading......</div>   -->\n\n</div>\n  <!-- <div class=\"loader\" style=\"background-image: url('assets/images/pageLoader.gif') 50% 50% no-repeat rgb(249,249,249)\"></div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<div class=\"page-wrapper\" >\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n\n            </div>\n            <div class=\"col-sm-5\">\n                <form (ngSubmit)=\"onSubmit(loginfrom, userData)\" #loginfrom=\"ngForm\">\n                    <div class=\"card\">\n                        <div class=\"card-title\">\n                            <h4>LOGIN</h4>\n                            <p>Welcome back! Please login to your account.</p>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Username</label>\n                                <input type=\"text\" id=\"email\" class=\"form-control\" [(ngModel)]=\"userData.usernameOrEmail\" name=\"usernameOrEmail\"  #email=\"ngModel\"  required>\n                                <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a user name</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"password\">Password</label>\n                                <input type=\"text\" id=\"password\" class=\"form-control\" [(ngModel)]=\"userData.password\" name=\"password\"  #password=\"ngModel\" required>\n                                <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a password!</span>\n                              \n                            </div>\n\n                            <div class=\"row\" style=\"    margin: 0px;\">\n                                <button class=\"loginbtn\"  [disabled]=\"!loginfrom.valid\" >Login</button> &nbsp; &nbsp;\n                                <button class=\"signupbtn\" (click)=register()>Sign up</button>\n\n                            </div>\n                            <p style=\"text-align: left;cursor: pointer;\n                            margin-top: 12px;\" routerLink=\"/forgotpassword\">Forgot Password ?</p>\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"header-area\" class=\"fixed-top\">\n\n    <div id=\"header-bottom\" style=\"background-color: rgb(0 0 0);\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!--== Logo Start ==-->\n                <div class=\"col-lg-4\">\n                    <a routerLink=\"/Home\" class=\"logo\">\n                        <!-- <img src=\"assets/img/logo.png\" alt=\"JSOFT\"> -->\n                        <img src=\"assets/img/logoos.png\" style=\"\n                        height: 64px;\" alt=\"JSOFT \" *ngIf=\"!isloggedIn\">\n                        <h6 *ngIf=\"isloggedIn\" style=\"    color: white;\n                        font-weight: bold;\n                        padding-top: 16px;\">Cmgaadi.com</h6>\n                    </a>\n                </div>\n                <!--== Logo End ==-->\n\n                <!--== Main Menu Start ==-->\n                <div class=\"col-lg-8 d-none d-xl-block\">\n                    <nav class=\"mainmenu alignright\">\n                        <ul>\n                            <li  *ngIf=\"!isloggedIn\" routerLinkActive=\"active\">\n                                <a routerLink=\"/Home\">Home</a>\n\n                            </li>\n                            <!-- <li routerLinkActive=\"active\"><a href=\"about.html\">About</a></li>\n                            <li routerLinkActive=\"active\"><a href=\"services.html\">services</a></li> -->\n                            <li *ngIf=\"isloggedIn\" routerLinkActive=\"active\">\n                                <a routerLink=\"/admin\">Home</a>\n\n                            </li>\n\n                            <li *ngIf=\"!isloggedIn\" routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\n                            <li  *ngIf=\"!isloggedIn\" routerLinkActive=\"active\"><a routerLink=\"/register\">Register</a></li>\n                            <!-- <li  *ngIf=\"isloggedIn\" routerLinkActive=\"active\"><a style=\"cursor: pointer;\" routerLink=\"/admin\">Profile</a></li> -->\n                            <li  *ngIf=\"isloggedIn\" (click)=\"logout()\"><a style=\"cursor: pointer;\">Logout</a></li>\n                        \n                        </ul>\n                    </nav>\n                </div>\n                <!--== Main Menu End ==-->\n            </div>\n        </div>\n    </div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addnew-cars.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addnew-cars.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Add Vehicles</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Add New Vehicles</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"addVehiclesform\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Vehicle Type<span class=\"text-danger\">*</span></label>\n                                <!-- <input [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\" class=\"form-control\" \n                                type=\"text\"   > -->\n                                <select [ngClass]=\"{ 'is-invalid': submitted && f.vehicleType.errors }\"\n                                    [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\"\n                                    class=\"form-control\">\n                                    <option value=\"\">Choose a option</option>\n                                    <option value=\"2Wheeler\">2 Wheeler</option>\n                                    <option value=\"3Wheeler\">3 Wheeler</option>\n                                    <option value=\"4Wheeler\">4 Wheeler</option>\n\n                                </select>\n                                <div *ngIf=\"submitted && f.vehicleType.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleType.errors.required\">Vehicle Type is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Company Name<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleCompany.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleCompany\"\n                                    formControlName=\"vehicleCompany\">\n                                <div *ngIf=\"submitted && f.vehicleCompany.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleCompany.errors.required\">Company Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Model<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleModel.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleModel\"\n                                    formControlName=\"vehicleModel\">\n                                <div *ngIf=\"submitted && f.vehicleModel.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleModel.errors.required\">Vehicle Model is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Year<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleYear.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleYear\"\n                                    formControlName=\"vehicleYear\">\n                                <div *ngIf=\"submitted && f.vehicleYear.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleYear.errors.required\">Year is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Registration Number<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleRegistration.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleRegistration\"\n                                    formControlName=\"vehicleRegistration\">\n                                <div *ngIf=\"submitted && f.vehicleRegistration.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleRegistration.errors.required\">Vehicle Registration Number is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Rent Per Day<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.rent.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.rent\"\n                                    formControlName=\"rent\">\n                                <div *ngIf=\"submitted && f.rent.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.rent.errors.required\">Vehicle Rent is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Locality<span class=\"text-danger\">*</span></label>\n                                <select [ngClass]=\"{ 'is-invalid': submitted && f.locality.errors }\"\n                                    [(ngModel)]=\"vehicleModel.locality\" formControlName=\"locality\" class=\"form-control\">\n                                    <option value=\"\" selected disabled>Choose your locality</option>\n                                    <option value=\"{{locations.id}}\" *ngFor=\"let locations of locations\">\n                                        {{locations.name}}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.locality.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.locality.errors.required\">Locality is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Driver<span class=\"text-danger\"></span></label>\n                                <select [(ngModel)]=\"vehicleModel.driver\" formControlName=\"driver\" class=\"form-control\">\n                                    <option value=\"\">Choose your Driver</option>\n                                    <option value=\"{{driverslist.id}}\" *ngFor=\"let driverslist of driverslist\"> {{driverslist.name}}</option>\n                                </select>\n\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"vehicleModel.driver != ''\">\n                            <div class=\"form-group\">\n                                <label>Driver Rent Per KM</label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.dRent.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.dRent\"\n                                    formControlName=\"dRent\">\n                                <div *ngIf=\"submitted && f.dRent.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.dRent.errors.required\">Driver Rent is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\" >\n                            <div class=\"form-group\">\n                                <label>Vehicle Rent Per KM</label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperKm.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperKm\"\n                                    formControlName=\"vRentperKm\">\n                                <div *ngIf=\"submitted && f.vRentperKm.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vRentperKm.errors.required\">Vehicle Rent Per KM is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\" >\n                            <div class=\"form-group\">\n                                <label>Vehicle Rent Per Hour</label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperHr.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperHr\"\n                                    formControlName=\"vRentperHr\">\n                                <div *ngIf=\"submitted && f.vRentperHr.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vRentperHr.errors.required\">Vehicle Rent per Hour is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> License Front <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addliscensefrnt($event)\" formControlName=\"liscencefrnt\">\n\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">License Front is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>License Back <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\">\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscenceback.errors.required\">License Back is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> RC Image <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.rcbook.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addrcimage($event)\" formControlName=\"rcbook\">\n                                <div *ngIf=\"submitted && f.rcbook.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.rcbook.errors.required\">RC Book is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> Image 1 <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img1.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addimage1($event)\" formControlName=\"img1\">\n                                <div *ngIf=\"submitted && f.img1.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.img1.errors.required\">Image 1 is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> Image 2<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\n                                (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                                <!-- <button (click)=\"clicks()\">click</button> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\n                style=\"color: black;\">Cars</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Add Banks</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Add New Vehicles</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"addBankForm\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Account Holder Name <span class=\"text-danger\">*</span></label>\n                                <input [(ngModel)]=\"bankModel.acocuntholderName\" formControlName=\"acocuntholderName\" [ngClass]=\"{ 'is-invalid': submitted && f.acocuntholderName.errors }\" class=\"form-control\" \n                                type=\"text\"   >\n                             \n                                <div *ngIf=\"submitted && f.acocuntholderName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.acocuntholderName.errors.required\">Acocunt holder name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Account Number<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.accountNumber\"\n                                    formControlName=\"accountNumber\">\n                                <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.accountNumber.errors.required\">Company Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>IFSC Code<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.ifscode.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.ifscode\"\n                                    formControlName=\"ifscode\">\n                                <div *ngIf=\"submitted && f.ifscode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.ifscode.errors.required\">IFSC Code is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Bank Name<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.bankName\"\n                                    formControlName=\"bankName\">\n                                <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\n                                (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                                <!-- <button (click)=\"clicks()\">click</button> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/bankdetails.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/bankdetails.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/admin\"><i\n                style=\"color: black;\">Home</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\"> Banks</i> </p>\n            <button *ngIf=\"arr.length != 1\"  style=\"    float: right;\n            margin-top: -27px;\n            margin-right: 23px;\" class=\"btn btn-success\">Add Bank</button>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n   \n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Bank Details</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"addBankForm\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Account Holder Name <span class=\"text-danger\">*</span></label>\n                                <input disabled [(ngModel)]=\"bankModel.acocuntholderName\" formControlName=\"acocuntholderName\" [ngClass]=\"{ 'is-invalid': submitted && f.acocuntholderName.errors }\" class=\"form-control\" \n                                type=\"text\"   >\n                             \n                                <div *ngIf=\"submitted && f.acocuntholderName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.acocuntholderName.errors.required\">Acocunt holder name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Account Number<span class=\"text-danger\">*</span></label>\n                                <input disabled [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.accountNumber\"\n                                    formControlName=\"accountNumber\">\n                                <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.accountNumber.errors.required\">Company Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>IFSC Code<span class=\"text-danger\">*</span></label>\n                                <input disabled [ngClass]=\"{ 'is-invalid': submitted && f.ifscode.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.ifscode\"\n                                    formControlName=\"ifscode\">\n                                <div *ngIf=\"submitted && f.ifscode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.ifscode.errors.required\">IFSC Code is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Bank Name<span class=\"text-danger\">*</span></label>\n                                <input disabled [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.bankName\"\n                                    formControlName=\"bankName\">\n                                <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\n                                (click)=\"edit()\" class=\"btn btn-warning\">Edit</button>\n                                <!-- <button (click)=\"clicks()\">click</button> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/bankdetails\"><i\n                style=\"color: black;\">Bank</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Add Banks</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Edit Bank Details</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"addBankForm\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Account Holder Name <span class=\"text-danger\">*</span></label>\n                                <input [(ngModel)]=\"bankModel.acocuntholderName\" formControlName=\"acocuntholderName\" [ngClass]=\"{ 'is-invalid': submitted && f.acocuntholderName.errors }\" class=\"form-control\" \n                                type=\"text\"   >\n                             \n                                <div *ngIf=\"submitted && f.acocuntholderName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.acocuntholderName.errors.required\">Acocunt holder name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Account Number<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.accountNumber\"\n                                    formControlName=\"accountNumber\">\n                                <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.accountNumber.errors.required\">Company Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>IFSC Code<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.ifscode.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.ifscode\"\n                                    formControlName=\"ifscode\">\n                                <div *ngIf=\"submitted && f.ifscode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.ifscode.errors.required\">IFSC Code is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Bank Name<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.bankName\"\n                                    formControlName=\"bankName\">\n                                <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\n                                (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                                <!-- <button (click)=\"clicks()\">click</button> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\n                style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Add Drivers</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Add New Drivers</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"driverForm\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Driver Name <span class=\"text-danger\">*</span></label>\n                                <input [(ngModel)]=\"driverModel.name\" formControlName=\"name\" class=\"form-control\" \n                                type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"  >\n                              \n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.name.errors.required\">Driver Name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Phone Number<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.number.errors }\"\n                                type=\"text\"  [(ngModel)]=\"number\" formControlName=\"number\" >\n\n                                <div *ngIf=\"submitted && f.number.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.number.errors.required\">Driver Number is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Address<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                type=\"text\" [(ngModel)]=\"driverModel.address\" formControlName=\"address\"  >\n                              \n                                <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.address.errors.required\">Driver Address is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Pancard No<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pancard.errors }\"\n                                type=\"text\"   [(ngModel)]=\"driverModel.pancard\" formControlName=\"pancard\">\n                              \n                                <div *ngIf=\"submitted && f.pancard.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pancard.errors.required\">Driver Pancard is required</div>\n                                </div>\n                            </div>\n                        </div>\n                      \n                        \n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> License Front <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\"\n                                #file type=\"file\" (change)=\"addliscensefrnt($event)\"  formControlName=\"liscencefrnt\" >\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">Driver liscence front pic is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>License Back <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\"\n                                #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\"  >\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscenceback.errors.required\">Driver liscence back Pic is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> Profile Pic <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.propic.errors }\"\n                                #file type=\"file\" (change)=\"addprofilepic($event)\"  formControlName=\"propic\"   >\n                                <div *ngIf=\"submitted && f.propic.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.propic.errors.required\">Driver Pic is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/drivers.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/drivers.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<div class=\"row\" style=\"margin-bottom: 27px;\nmargin-top: 100px;  \">\n \n    <div class=\"col-sm-4\">\n        <button routerLink=\"/admin\" class=\" btn btn-dark\" style=\"float: Left;\">Back</button>\n\n    </div>\n    <div class=\"col-sm-4\">\n        <h4 style=\"text-align: center;\" >Driver <em style=\"font-style: normal;\n            color: #ffb100;\">Management</em> </h4>\n    </div>\n    <div class=\"col-sm-4\">\n        <button routerLink=\"/add-drivers\" class=\" btn btn-success\" style=\"float: right;\">Add Drivers</button>\n        \n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-sm-12\">\n      \n        <!-- <mat-card>\n            <span class=\"close\"> <i  matTooltip=\"Edit Profile\" (click)=\"edit(driverslist)\" class=\"fa fa-edit\"></i> </span>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <img src=\"{{apUrl}}driver/getProfilePic/{{driverslist.id}}\" alt=\"\" style=\"height: 108px;\n                    width: 92px;\">\n                   \n\n                </div>\n                <div class=\"col-sm-8\">\n                    <p>Driver Name : {{driverslist.name}}</p>\n                    <p>Phone Number : {{driverslist.number}} </p>\n                    <p>Pan Card No : {{driverslist.panCardNO}}</p>\n                    <p>License Front : <Button (click)=\"getlicsence(driverslist.id)\" style=\"    border: none;\n                    background: none;\" matTooltip=\"donwload \"> <i class=\"fa fa-eye\"></i></Button></p>\n                    <p>License Back : <Button (click)=\"getlicsenceback(driverslist.id)\"  style=\"    border: none;\n                    background: none;\" matTooltip=\"donwload\"> <i class=\"fa fa-eye\"></i></Button></p>\n\n                </div>\n            </div>\n        </mat-card> -->\n            <ul  *ngFor=\"let driverslist of driverslist; let i=index;\">\n                <li><a style=\"    margin-top: 13px;\n                    \"> {{i+1}}</a> </li>\n            <li><a style=\"    margin-top: 13px;\n                width: 200px;\"><img src=\"{{apUrl}}driver/getProfilePic/{{driverslist.id}}\" alt=\"Avatar\" class=\"avatar\"></a></li>\n            <li><a style=\"    margin-top: 13px;\n                width: 200px;\">{{driverslist.name}}</a></li>\n            <li><a style=\"    margin-top: 13px;\n                width: 200px;\">{{driverslist.number}}</a></li>\n            <li><a style=\"    margin-top: 13px;\n                width: 200px;\">{{driverslist.panCardNO}}</a></li>\n            <li><a style=\"    margin-top: 13px;\n                width: 200px;\">License Front : <Button (click)=\"getlicsence(driverslist.id)\" style=\"    border: none;\n                    background: none;\" matTooltip=\"License Front \"> <i class=\"fa fa-eye\"></i></Button></a> </li>    \n            <li> <a style=\"margin-top: 13px;\n                width: 200px;\"> License Back : <Button (click)=\"getlicsenceback(driverslist.id)\"  style=\"    border: none;\n                    background: none;\" matTooltip=\"License Back\"> <i class=\"fa fa-eye\"></i></Button></a> </li>\n                    <li><a  style=\"margin-top: 13px;\"><i  matTooltip=\"Edit Profile\" (click)=\"edit(driverslist)\" class=\"fa fa-edit\"></i></a> </li>\n          \n                </ul>\n          \n          \n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\n                style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Edit Drivers</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Edit  Drivers</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"driverForm\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Driver Name <span class=\"text-danger\">*</span></label>\n                                <input [(ngModel)]=\"driverModel.name\" formControlName=\"name\" class=\"form-control\" \n                                type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"  >\n                              \n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.name.errors.required\">Driver Name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Phone Number<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.number.errors }\"\n                                type=\"text\"  [(ngModel)]=\"driverModel.number\" formControlName=\"number\" >\n\n                                <div *ngIf=\"submitted && f.number.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.number.errors.required\">Driver Number is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Address<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                type=\"text\" [(ngModel)]=\"driverModel.address\" formControlName=\"address\"  >\n                              \n                                <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.address.errors.required\">Driver Address is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Pancard No<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pancard.errors }\"\n                                type=\"text\"   [(ngModel)]=\"driverModel.pancard\" formControlName=\"pancard\">\n                              \n                                <div *ngIf=\"submitted && f.pancard.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pancard.errors.required\">Driver Pancard is required</div>\n                                </div>\n                            </div>\n                        </div>\n                      \n                        \n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> License Front <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\"\n                                #file type=\"file\" (change)=\"addliscensefrnt($event)\"  formControlName=\"liscencefrnt\" >\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">Driver liscence front pic is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>License Back <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\"\n                                #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\"  >\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscenceback.errors.required\">Driver liscence back Pic is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> Profile Pic <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.propic.errors }\"\n                                #file type=\"file\" (change)=\"addprofilepic($event)\"  formControlName=\"propic\"   >\n                                <div *ngIf=\"submitted && f.propic.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.propic.errors.required\">Driver Pic is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-navigation></app-navigation> -->\n<div class=\"div\">\n    <span class=\"close\" (click)=\"close()\">X</span>\n</div>\n<img [src]=\"liscenimag\" alt=\"\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-navigation></app-navigation> -->\n<div class=\"div\">\n    <span class=\"close\" (click)=\"close()\" style=\"    padding: 8px;\">X</span>\n</div>\n<img [src]=\"liscenimag\" alt=\"\" style=\"    height: 315px;\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/edit-cars/edit-cars.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/edit-cars/edit-cars.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\n            style=\"color:#1492E6;\">Edit Vehicles</i> </p>\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\n    padding: 20px;\n    background-color: #F8FAFB;\n    margin-top: 25px;\n    margin-left: 31px;\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Edit Vehicles</h3>\n            </div>\n        </div>\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\n            <div class=\"col-lg-12\">\n\n                <form [formGroup]=\"addVehiclesform\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Vehicle Type<span class=\"text-danger\">*</span></label>\n                                <!-- <input [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\" class=\"form-control\" \n                                type=\"text\"   > -->\n                                <select [ngClass]=\"{ 'is-invalid': submitted && f.vehicleType.errors }\"\n                                    [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\"\n                                    class=\"form-control\">\n                                    <option value=\"\">Choose a option</option>\n                                    <option value=\"2Wheeler\">2 Wheeler</option>\n                                    <option value=\"3Wheeler\">3 Wheeler</option>\n                                    <option value=\"4Wheeler\">4 Wheeler</option>\n\n                                </select>\n                                <div *ngIf=\"submitted && f.vehicleType.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleType.errors.required\">Vehicle Type is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Company Name<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleCompany.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleCompany\"\n                                    formControlName=\"vehicleCompany\">\n                                <div *ngIf=\"submitted && f.vehicleCompany.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleCompany.errors.required\">Company Name is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Model<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleModel.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleModel\"\n                                    formControlName=\"vehicleModel\">\n                                <div *ngIf=\"submitted && f.vehicleModel.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleModel.errors.required\">Vehicle Model is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Year<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleYear.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleYear\"\n                                    formControlName=\"vehicleYear\">\n                                <div *ngIf=\"submitted && f.vehicleYear.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleYear.errors.required\">Year is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Registration Number<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleRegistration.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleRegistration\"\n                                    formControlName=\"vehicleRegistration\">\n                                <div *ngIf=\"submitted && f.vehicleRegistration.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vehicleRegistration.errors.required\">Vehicle Registration Number is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Rent Per Day<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.rent.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.rent\"\n                                    formControlName=\"rent\">\n                                <div *ngIf=\"submitted && f.rent.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.rent.errors.required\">Vehicle Rent is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Locality<span class=\"text-danger\">*</span></label>\n                                <select [ngClass]=\"{ 'is-invalid': submitted && f.locality.errors }\"\n                                    [(ngModel)]=\"vehicleModel.locality\" formControlName=\"locality\" class=\"form-control\">\n                                    <option value=\"\" selected disabled>Choose your locality</option>\n                                    <option value=\"{{locations.id}}\" *ngFor=\"let locations of locations\">\n                                        {{locations.name}}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.locality.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.locality.errors.required\">Locality is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>Driver<span class=\"text-danger\"></span></label>\n                                <select [(ngModel)]=\"vehicleModel.driver\" formControlName=\"driver\" class=\"form-control\">\n                                    <option value=\"\">Choose your Driver</option>\n                                    <option value=\"{{driverslist.id}}\" *ngFor=\"let driverslist of driverslist\"> {{driverslist.name}}</option>\n                                </select>\n\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"vehicleModel.driver != ''\">\n                            <div class=\"form-group\">\n                                <label>Driver Rent Per KM</label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.dRent.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.dRent\"\n                                    formControlName=\"dRent\">\n                                <div *ngIf=\"submitted && f.dRent.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.dRent.errors.required\">Driver Rent is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\" >\n                            <div class=\"form-group\">\n                                <label>Vehicle Rent Per KM</label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperKm.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperKm\"\n                                    formControlName=\"vRentperKm\">\n                                <div *ngIf=\"submitted && f.vRentperKm.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vRentperKm.errors.required\">Vehicle Rent Per KM is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\" >\n                            <div class=\"form-group\">\n                                <label>Vehicle Rent Per Hour</label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperHr.errors }\"\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperHr\"\n                                    formControlName=\"vRentperHr\">\n                                <div *ngIf=\"submitted && f.vRentperHr.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.vRentperHr.errors.required\">Vehicle Rent per Hour is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> License Front <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addliscensefrnt($event)\" formControlName=\"liscencefrnt\">\n\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">License Front is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label>License Back <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\">\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.liscenceback.errors.required\">License Back is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> RC Image <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.rcbook.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addrcimage($event)\" formControlName=\"rcbook\">\n                                <div *ngIf=\"submitted && f.rcbook.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.rcbook.errors.required\">RC Book is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> Image 1 <span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img1.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addimage1($event)\" formControlName=\"img1\">\n                                <div *ngIf=\"submitted && f.img1.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.img1.errors.required\">Image 1 is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label> Image 2<span class=\"text-danger\">*</span></label>\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\"\n                                    class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\n                                (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\n                                <!-- <button (click)=\"clicks()\">click</button> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/ownerpannel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/ownerpannel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrapper\">\n\n   \n<section id=\"service-area\" class=\"section-padding\" style=\"    margin-top: 74px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- Section Title Start -->\n         \n            <!-- Section Title End -->\n        </div>\n\n       \n        <!-- Service Content Start -->\n        <div class=\"row\">\n            <!-- Single Service Start -->\n            <div class=\"col-lg-4 text-center\" routerLink=\"/vehicles\">\n                <div class=\"service-item\">\n                    <!-- <i class=\"fa fa-taxi\" style=\"color: rebeccapurple;\"></i> -->\n                    <img src=\"./assets/img/car.png\"/>\n                    <h3>Vehicles</h3>\n                </div>\n            </div>\n           \n            <!-- Single Service End -->\n            \n            <!-- Single Service Start -->\n            <div class=\"col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <!-- <i class=\"fa fa-map-marker\" style=\"    color: red\"></i> -->\n                    <img src=\"./assets/img/order-shipped.png\"/>\n                    <h3>Vehicle Tracking</h3>\n                </div>\n            </div>\n         \n            <div class=\"col-lg-4 text-center\" routerLink=\"/drivers\">\n                <div class=\"service-item\">\n                    <!-- <i class=\"fa fa-user\" style=\"    color: green\"></i> -->\n                    <img src=\"./assets/img/taxi-driver.png\"/>\n                    <h3>Drivers</h3>\n                </div>\n            </div>\n            <div class=\"col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <!-- <i class=\"fa fa-history\" ></i> -->\n                    <img src=\"./assets/img/mobile-payment--v3.png\"/>\n\n                    <h3>Payment Reports</h3>\n                </div>\n            </div>\n            <div class=\"col-lg-4 text-center\" routerLink=\"/request\">\n                <div class=\"service-item\">\n                    <img src=\"./assets/img/request-service.png\"/>\n\n                    <h3>Request</h3>\n                </div>\n            </div>\n            <div class=\"col-lg-4 text-center\" routerLink=\"/bankdetails\"> \n                <div class=\"service-item\">\n                    <img src=\"./assets/img/bank-building.png\"/>\n                    <h3>Bank Manage</h3>\n                </div>\n            </div>\n            <!-- <div class=\"col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <i class=\"fa fa-user\" style=\"    color: blue\"></i>\n                    <h3>Profile</h3>\n                </div>\n            </div>\n            <div class=\"col-lg-4 text-center\" routerLink=\"/admin-resetpassword\">\n                <div class=\"service-item\">\n                    <i class=\"fa fa-refresh\" style=\"    color: darkorange\"></i>\n                    <h3>Change password</h3>\n                </div>\n            </div> -->\n            <!-- Single Service End -->\n        </div>\n        <!-- Service Content End -->\n    </div>\n</section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/requests.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/requests.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"page-wrapper\">\n\n\n\n\n    <div class=\"content\"  style=\"margin-top: 33px !important;\">\n        <button class=\"btn btn-warning\" routerLink=\"/admin\"><i class=\"fa fa-arrow-left\"></i>  </button>\n        <div class=\"row\" >\n            <div class=\"col-sm-12\">\n   \n                <mat-tab-group mat-align-tabs=\"center\" (selectedTabChange)=\"tabClick($event)\">\n                    <mat-tab label=\"Pending\">\n\n                        <div class=\"row\" style=\"margin-top: 10px;\">\n                            <div class=\"col-sm-3\" *ngFor=\"let results of results\">\n                                <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\n                                <div class=\"card\">\n                                    <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\n                                        style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\n                                    <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\n                                    <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\n                                   \n                                    &nbsp;\n                                    <button class=\"btn btn-dark\"\n                                        style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\n                                        (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> View More</button>\n                                    <div class=\"row\" style=\"padding: 5px;\">\n                                        <button class=\"btn btn-success\" style=\"margin-left: auto;\" (click)=\"approve(results)\"><i class=\"fa fa-check\"></i> Approve</button>\n                                        <button class=\"btn btn-danger\" style=\"    margin-right: auto; \n                                            margin-left: 11px;\" (click)=\"reject(results)\"> <i class=\"fa fa-close\"></i> Reject</button>\n\n                                    </div>\n                                    <!-- </mat-card> -->\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Approved\">\n                        <div class=\"row\" style=\"margin-top: 10px;\">\n                            <div class=\"col-sm-3\" *ngFor=\"let results of results\">\n                                <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\n                                <div class=\"card\">\n                                    <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\n                                        style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\n                                    <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\n                                    <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\n                                   \n                                    &nbsp;\n                                    <button class=\"btn btn-dark\"\n                                        style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\n                                        (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i>  View More</button>\n                                    \n                                    <!-- </mat-card> -->\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Reject\">\n                        <div class=\"row\" style=\"margin-top: 10px;\">\n                            <div class=\"col-sm-3\" *ngFor=\"let results of results\">\n                                <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\n                                <div class=\"card\">\n                                    <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\n                                        style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\n                                    <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\n                                    <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\n                                   \n                                    &nbsp;\n                                    <button class=\"btn btn-dark\"\n                                        style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\n                                        (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i>  View More</button>\n                                    \n                                    <!-- </mat-card> -->\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/view-requests/view-requests.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/view-requests/view-requests.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <!-- <h2>s</h2> -->\n      \n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <span style=\"    margin-left: auto;\" (click)=\"close()\" class=\"close\">X</span>\n                <h4>{{customerName}}</h4>\n                <hr>\n\n                <div class=\"line\"></div>\n\n                <hr>\n                <span class=\"round\" style=\"    margin-left: 94px;\n                background: green;\n                margin-top: -29px;\n                height: 25px;\n            \n              \n                width: 25px;\n                border-radius: 100%;\"></span>\n\n                <span class=\"round\" style=\"    margin-left: auto;\n                background: red;\n                margin-right: 94px;\n                margin-top: -25px;\n                height: 25px;\n               \n                left: -7px;\n                width: 25px;\n                border-radius: 100%;\"></span>\n                <div class=\"row\">\n                    <p style=\"margin-left: 70px; margin-right: auto;\">Starting From : {{startingLocation}}</p>\n                    <p style=\"margin-left: auto; margin-right: 100px;\">Destination : {{destinationLocation}}</p>\n\n                </div>\n\n                <!-- <div class=\"row\" style=\"margin-top: 20px;\"> -->\n                <h5 style=\"text-align:center;\">Details</h5>\n\n                <hr style=\"margin-left: auto;\n                    margin-right: auto;\n                    width: 50%;\n                    background: yellow;\">\n                <p style=\"text-align:center;\"><i class=\"fa fa-calendar\"></i> Requested Date : {{requestedDate}}</p>\n                <h6 style=\"text-align:center;\">Vehicle Details</h6>\n                <hr style=\"margin-left: auto;\n                    margin-right: auto;\n                    width: 50%;\n                    background: yellow;\">\n\n                <p style=\"text-align:center;\"><i class=\"fa fa-car\"></i> Company Name : {{companyName}}</p>\n                <p style=\"text-align:center;\"><i class=\"fa fa-car\"></i> Vehicle Model : {{model}}</p>\n                <p style=\"text-align:center;\"><i class=\"fa fa-number\"></i> Registration Number : {{numberPlate}}</p>\n                <p style=\"text-align:center;\"><i class=\"fa fa-inr\"></i> Rent Per Day : {{rentPerDay}}</p>\n\n                <!-- </div>  -->\n            </div>\n\n\n\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<app-sidebar></app-sidebar>\n\n<div class=\"page-wrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Vehicle <em style=\"    font-style: normal;\n                    color: #ffd000;\"> Details</em> </h3>\n                <hr>\n\n            </div>\n            <div class=\"col-sm-8\">\n\n                <!-- <mat-card> -->\n                <div class=\"card\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <h5 style=\"text-align: left;    margin-left: 24px;\"> {{vehicleModel.vehicleCompany}},{{vehicleModel.vehicleModel}}</h5>\n\n                        </div>\n                        <!-- <div class=\"col-sm-3\">\n                            <p style=\"\n                           background: #ffcb67;\n                            border-radius: 125px;\n                            padding: 3px;\n                        \">{{vehicleModel.vehicleModel}}</p>\n                        </div> -->\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <img src=\"{{apiurl}}vehicle/getImage1/{{vId}}\" alt=\"\"\n                                style=\"     width: 200px; height: 186px;  \">\n                        </div>\n                        <div class=\"col-sm-8\">\n                            <p style=\"margin-top: 10px;    text-align: left;\"><i class=\"fa fa-car\"></i>&nbsp;Vehicle\n                                Type :{{vehicleModel.vehicleType}}</p>\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-registered\"></i>&nbsp; Registration Number\n                                : {{vehicleModel.vehicleRegistration}}</p>\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\n                                {{vehicleModel.locality}}</p>\n                            <hr>\n                            <h6>Rent Details</h6>\n                            &nbsp;\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-inr\"></i>&nbsp; Rent Per Hour :\n                                {{rentperhour}}</p>\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-calendar\"></i>&nbsp; Rent Per Day :\n                                {{vehicleModel.rent}}</p>\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-road\"></i>&nbsp; Rent Per KM :\n                                {{rentperkm}}</p>\n\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"card\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <img src=\"{{apiurl}}driver/getProfilePic/{{id}}\" alt=\"\" style=\"\" />\n\n                        </div>\n                        <div class=\"col-sm-8\">\n                            <h6>Driver Details</h6>\n                            <hr>\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-user\"></i>&nbsp;Driver Name\n                                :\n                                {{vehicleModel.dname}}</p>\n                            <p *ngIf=\"DriverDetailsofCar !=null\"style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-phone\"></i>&nbsp;Contact\n                                Number :\n                                {{vehicleModel.dnumber}}</p>\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i\n                                    class=\"fa fa-map-marker\"></i>&nbsp;Driver\n                                Address : {{vehicleModel.daddreess}}</p>\n                            <p *ngIf=\"DriverDetailsofCar ==null\"> No Driver is linked to this vehicle!</p>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card\">\n                    <h6> Vehicle Details </h6>\n                    <hr>\n                    <p>License Front</p>\n                    <img [src]=\"liscence1\" alt=\"\">\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n\n                    <p>License Back</p>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    <img [src]=\"liscence2\" alt=\"\">\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n\n                    <p>RC Book</p>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    <img [src]=\"rc\" alt=\"\">\n                </div>\n\n            </div>\n        </div>\n        <!-- <div class=\"col-sm-12\">\n\n\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" style=\"    width: 241px;\n                margin-left: auto;\n                margin-right: auto;\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block \" src=\"{{apiurl}}vehicle/getImage1/{{vId}}\" style=\"      margin-left: auto;\n                        margin-right: auto;      width: 242px;\" alt=\"First slide\">\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block\" [src]=\"vehicleimage2\" style=\"      margin-left: auto;\n                        margin-right: auto;      width: 242px;\" alt=\"Second slide\">\n                        </div>\n\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n\n\n                <hr style=\"    width: 52%;\n                margin-right: auto;\n                margin-left: auto;\n                display: block;\">\n            </div> -->\n        <!-- <div class=\"col-sm-12\">\n                <mat-card>\n                    <p><i class=\"fa fa-industry\"></i> &nbsp; Comapny Name : {{vehicleModel.vehicleCompany}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Type : {{vehicleModel.vehicleType}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-registered\"></i> &nbsp; Vehicle Registration :\n                        {{vehicleModel.vehicleRegistration}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Model :\n                        {{vehicleModel.vehicleModel}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\n                        {{vehicleModel.locality}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-calendar\"></i> &nbsp; Vehicle Year :\n                        {{vehicleModel.vehicleYear}}</p>\n                </mat-card>\n                <mat-card>\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\n                        {{vehicleModel.rent}}</p>\n                </mat-card>\n\n                <mat-card>\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\n                        {{vehicleModel.rent}}</p>\n                </mat-card>\n                <mat-card>\n                    <p>License Front</p>\n                    <img [src]=\"liscence1\" alt=\"\" style=\"    width: 36%;\">\n                </mat-card>\n                <mat-card>\n                    <p>License Back</p>\n                    <img [src]=\"liscence2\" alt=\"\" style=\"    width: 36%;\">\n                </mat-card>\n                <mat-card>\n                    <p>RC Book</p>\n                    <img [src]=\"rc\" alt=\"\" style=\"    width: 36%;\">\n                </mat-card>\n            </div> -->\n    </div>\n</div>\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/vehicles.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/vehicles.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n<app-navigation></app-navigation>\n<div class=\"page-wrapper\" style=\"margin-top: 101px;\">\n    <div class=\"row\">\n       \n        <div class=\"col-sm-4\">\n            <button routerLink=\"/admin\" class=\" btn btn-dark\" style=\"float: Left;\"><i class=\"fa fa-arrow-left\"\n                aria-hidden=\"true\"></i> Back</button>\n\n        </div>\n        <div class=\"col-sm-4\">\n            <h4 style=\"text-align: center;\" >Vehicle <em style=\"font-style: normal;\n                color: #ffb100;\">Management</em> </h4>\n        </div>\n        <div class=\"col-sm-4\">\n            <button routerLink=\"/add-cars\" class=\" btn btn-success\" style=\"float: right;\"><i class=\"fa fa-plus\"\n                aria-hidden=\"true\"></i> Add New Cars</button>\n        </div>\n      \n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-9\">\n\n        </div>\n        <div class=\"col-sm-3\">\n            <select [(ngModel)]=\"vstatus\" (change)=\"changeFilter(vstatus)\" class=\"form-control\"\n                style=\"margin-top: 15px;\">\n                <option value=\"\" selected disabled>Filter Options</option>\n                <option value=\"1\">Approved</option>\n                <option value=\"3\">Rejected</option>\n                <option value=\"2\">Pending</option>\n\n            </select>\n        </div>\n\n    </div>\n    <div class=\"row \" style=\"margin-top: 11px;\">\n        <!-- Single Popular Car Start -->\n        <div class=\"col-lg-3 col-md-6 con suv mpv\" *ngFor=\"let car of carList\">\n            <div class=\"single-popular-car\">\n                <div class=\"p-car-thumbnails\">\n                    <!-- <a  > -->\n                    <img src=\"{{apUrl}}vehicle/getImage1/{{car.id}}\" alt=\"JSOFT\" style=\"width: 100%;\n                        height: 200px;\">\n                    <!-- </a> -->\n                </div>\n\n                <div class=\"p-car-content\">\n                    <h3>\n                        <a>{{car.companyName}}</a>\n                        <span class=\"price\"><i class=\"fa fa-tag\"></i> {{car.rentPerDay}}</span>\n                    </h3>\n                    <h5 style=\"float: right;\">Model : {{car.model}}</h5>\n\n                    <h5>{{car.numberPlate}}</h5>\n\n                    <h5 style=\"    float: right;\n                        margin-top: -1px;\">{{car.type}}</h5>\n\n                    <h5>{{car.year}}</h5>\n                    <h5><i class=\"fa fa-map-marker\"></i> {{car.locationName}}</h5>\n\n                    <!-- <div class=\"p-car-feature\">\n                            <a href=\"#\">{{car.year}}</a>\n                            <br>\n                            <a href=\"#\">{{car.type}}</a>\n                           <br>\n                            <a href=\"#\"><i class=\"fa fa-map-marker\"></i>  {{car.locationName}}</a>\n                        </div> -->\n\n\n\n                </div>\n                <div class=\"p-car-content\" style=\"    padding: 0px 20px 19px;\">\n                    <button style=\"margin: 2px;\" (click)=\"view(car)\" class=\"btn btn-dark\"><i class=\"fa fa-eye\"></i>\n                        View</button>\n                    <button style=\"margin: 2px;\" (click)=\"edit(car)\" class=\"btn btn-danger\"><i class=\"fa fa-pencil\"></i>\n                        Edit</button>\n                    <button style=\"margin: 2px;\" (click)=\"delete(car)\" class=\"btn btn-warning\"><i\n                            class=\"fa fa-trash\"></i> Delete</button>\n\n                </div>\n\n            </div>\n        </div>\n\n\n\n        <!-- <div class=\"col-lg-3 col-md-6 con suv mpv\">\n            <div class=\"single-popular-car\">\n                <div class=\"p-car-thumbnails\">\n                    <a class=\"car-hover\" href=\"assets/img/car/car-1.jpg\">\n                        <img src=\"assets/img/car/car-5.jpg\" alt=\"JSOFT\">\n                    </a>\n                </div>\n\n                <div class=\"p-car-content\">\n                    <h3>\n                        <a href=\"#\">Dodge Ram 1500</a>\n                        <span class=\"price\"><i class=\"fa fa-tag\"></i> $55/day</span>\n                    </h3>\n\n                    <h5>HATCHBACK</h5>\n\n                    <div class=\"p-car-feature\">\n                        <a href=\"#\">2017</a>\n                        <a href=\"#\">manual</a>\n                        <a href=\"#\">AIR CONDITION</a>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n        <!-- <div class=\"col-lg-3 col-md-6 con suv mpv\">\n            <div class=\"single-popular-car\">\n                <div class=\"p-car-thumbnails\">\n                    <a class=\"car-hover\" href=\"assets/img/car/car-1.jpg\">\n                        <img src=\"assets/img/car/car-1.jpg\" alt=\"JSOFT\">\n                    </a>\n                </div>\n\n                <div class=\"p-car-content\">\n                    <h3>\n                        <a href=\"#\">Dodge Ram 1500</a>\n                        <span class=\"price\"><i class=\"fa fa-tag\"></i> $55/day</span>\n                    </h3>\n\n                    <h5>HATCHBACK</h5>\n\n                    <div class=\"p-car-feature\">\n                        <a href=\"#\">2017</a>\n                        <a href=\"#\">manual</a>\n                        <a href=\"#\">AIR CONDITION</a>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n    <div class=\"row\" *ngIf=\"errormessage == 'No data found'\">\n        <img src=\"./assets/img/nodata.png\" alt=\"\" style=\"    margin: auto;\n        display: block;     width: 36%;   filter: brightness(0.5);\">\n    </div>\n    <h5 *ngIf=\"errormessage == 'No data found'\" style=\"text-align: center;\">No Data Found</h5>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<div class=\"page-wrapper\" >\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n\n            </div>\n            <div class=\"col-sm-5\">\n                <form [formGroup]=\"registerForm\">\n                    <div class=\"card\">\n                        <div class=\"card-title\">\n                            <h4>Register</h4>\n                            <p>Welcome back! Please register your account.</p>\n\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n                                <input [(ngModel)]=\"registerModel.name\" formControlName=\"name\" matInput\n                                    placeholder=\"Name\" type=\"text\">\n                                <button mat-icon-button matSuffix>\n                                    <mat-icon></mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('name').hasError('required')\">\n                                   Name is Required!\n                                </mat-error>\n\n                            </mat-form-field>\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n                                <input [(ngModel)]=\"registerModel.email\" formControlName=\"email\" matInput\n                                    placeholder=\"Email ID\" type=\"text\">\n                                <button mat-icon-button matSuffix>\n                                    <mat-icon></mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                                    Email ID is Required!\n                                </mat-error>\n                                <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                                    Email ID must be a valid!\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n                                <input [(ngModel)]=\"registerModel.username\" formControlName=\"username\" matInput\n                                    placeholder=\"User Name\" type=\"text\">\n                                <button mat-icon-button matSuffix>\n                                    <mat-icon></mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('username').hasError('required')\">\n                                    User Name is Required!\n                                </mat-error>\n                               \n                            </mat-form-field>\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n                                <input [(ngModel)]=\"registerModel.address\" formControlName=\"address\" matInput\n                                    placeholder=\"Address\" type=\"text\">\n                                <button mat-icon-button matSuffix>\n                                    <mat-icon></mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('address').hasError('required')\">\n                                   Address is Required!\n                                </mat-error>\n                               \n                            </mat-form-field>\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px;\">\n                                <input [(ngModel)]=\"registerModel.mobNo\" formControlName=\"mobNo\" matInput\n                                    placeholder=\"Mobile Number\" type=\"number\">\n                                <button mat-icon-button matSuffix>\n                                    <mat-icon></mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('mobNo').hasError('required')\">\n                                    Mobile Number is Required!\n                                </mat-error>\n                                <mat-error *ngIf=\"registerForm.get('mobNo').hasError('pattern')\">\n                                    Mobile Number must be a valid 10 digit !\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width\">\n                                <input [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"registerModel.password\"\n                                    formControlName=\"password\" matInput placeholder=\"Password\" type=\"password\">\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\n                                    Password is Required!\n                                </mat-error>\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('minlength')\">\n                                   Minimum 8 letters needed!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width\">\n                                <input [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"registerModel.Confirmpassword\"\n                                    formControlName=\"Confirmpassword\" matInput placeholder=\"Confirm Password\" type=\"password\">\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                                <mat-error *ngIf=\"registerForm.get('Confirmpassword').hasError('required')\">\n                                    Password is Required!\n                                </mat-error>\n                                <mat-error *ngIf=\"registerForm.get('Confirmpassword').hasError('mustMatch')\">\n                                   Password must is Required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <div class=\"row\" style=\"    margin: 10px;\">\n                                <div class=\"col-sm-6\">\n                                    <button class=\"loginbtn\" [disabled]=\"!registerForm.valid\"   (click)=\"register()\">Register</button>\n\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <p routerLink=\"/login\" style=\"text-align: center; outline: none; cursor: pointer;\">\n                                        Already have an account? Login</p>\n\n                                </div>\n                            </div>\n\n\n\n\n                            <p style=\"margin-top: 50px;\">Term of use. Privacy policy</p>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pulicregistrationmarketing works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/registerpageformarketing.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/registerpageformarketing.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"header-area\" class=\"fixed-top\">\n    <!--== Header Top Start ==-->\n    <div id=\"header-top\" class=\"d-none d-xl-block\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!--== Single HeaderTop Start ==-->\n                <div class=\"col-lg-3 text-left\">\n                    <i class=\"fa fa-map-marker\"></i> Kerala\n                </div>\n                <!--== Single HeaderTop End ==-->\n\n                <!--== Single HeaderTop Start ==-->\n                <div class=\"col-lg-3 text-center\">\n                    <i class=\"fa fa-mobile\"></i> +91\n                </div>\n                <!--== Single HeaderTop End ==-->\n\n                <!--== Single HeaderTop Start ==-->\n                <div class=\"col-lg-3 text-center\">\n                    <i class=\"fa fa-clock-o\"></i> Mon-Fri\n                </div>\n                <!--== Single HeaderTop End ==-->\n\n                <!--== Social Icons Start ==-->\n                <div class=\"col-lg-3 text-right\">\n                    <div class=\"header-social-icons\">\n                        <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-pinterest\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n                <!--== Social Icons End ==-->\n            </div>\n        </div>\n    </div>\n    <!--== Header Top End ==-->\n\n    <!--== Header Bottom Start ==-->\n    <div id=\"header-bottom\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!--== Logo Start ==-->\n                <div class=\"col-lg-4\">\n                    <a href=\"index2.html\" class=\"logo\">\n                        <img src=\"assets/img/logoos.png\" style=\"\n                        height: 64px;\" alt=\"JSOFT\">\n                    </a>\n                </div>\n                <!--== Logo End ==-->\n\n                <!--== Main Menu Start ==-->\n                <div class=\"col-lg-8 d-none d-xl-block\">\n                    <nav class=\"mainmenu alignright\">\n                        <ul>\n                            <li class=\"active\"><a href=\"#\">Home</a>\n\n                            </li>\n                            <!-- <li><a href=\"about.html\">About</a></li>\n                            <li><a href=\"services.html\">services</a></li> -->\n                            <!-- <li> <a routerLink=\"\">Registration</a> -->\n                            <!-- </li>    -->\n\n                        </ul>\n                    </nav>\n                </div>\n                <!--== Main Menu End ==-->\n            </div>\n        </div>\n    </div>\n    <!--== Header Bottom End ==-->\n</header>\n<!--== Header Area End ==-->\n\n<!--== SlideshowBg Area Start ==-->\n<section id=\"slider-area\">\n    <!--== slide Item One ==-->\n    <div class=\"single-slide-item overlay\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n\n                <div class=\"col-lg-7 text-right\">\n                    <div class=\"display-table\">\n                        <div class=\"display-table-cell\">\n                            <div class=\"slider-right-text\">\n                                <h1>BOOK A CAR TODAY!</h1>\n                                <!-- <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br> FOR OUR RETURNING CUSTOMERS</p> -->\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- <div class=\"row\"> -->\n                <div class=\"col-sm-5\">\n                    <div class=\"r\" style=\"background: rgba(245, 234, 234, 0.473);    padding: 24px;\n                        border-radius: 13px;\">\n                        <form [formGroup]=\"publicreisterform\">\n\n                            <h5 style=\"text-align: center; color: #ffd000;    padding-bottom: 18px;\">REGISTRATION</h5>\n\n                            <label for=\"\" style=\"    font-size: 21px;\"> Choose a Type</label>\n                            <select class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.types.errors }\"\n                                [(ngModel)]=\"registerModel.types\" formControlName=\"types\">\n                                <option value=\"\" selected disabled>Choose a Type</option>\n                                <option value=\"3\">User</option>\n                                <option value=\"4\">Driver</option>\n\n                                <option value=\"2\">Car Owner</option>\n                            </select>\n                            <div *ngIf=\"submitted && f.types.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.types.errors.required\">User Type is required</div>\n                            </div>\n\n\n                            <label for=\"\" style=\"    font-size: 21px;\">Name </label>\n                            <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"\n                                [(ngModel)]=\"registerModel.name\" formControlName=\"name\" placeholder=\"Name\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\">\n                            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                            </div>\n                            <label for=\"\" style=\"    font-size: 21px;\">Email ID </label>\n                            <input [(ngModel)]=\"registerModel.email\" formControlName=\"email\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email ID\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\">\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email Id is required</div>\n                            </div>\n                            <label for=\"\" style=\"    font-size: 21px;\">Phone Number </label>\n                            <input [(ngModel)]=\"registerModel.mobNo\" formControlName=\"mobNo\" type=\"number\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.mobNo.errors }\" placeholder=\"Phone Number\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\">\n                            <div *ngIf=\"submitted && f.mobNo.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.mobNo.errors.required\">Phone Number is required</div>\n                                <div *ngIf=\"f.mobNo.errors.pattern\">Please Enter 10 digit Mobile Number.</div>\n\n                            </div>\n\n\n                            <label for=\"\" style=\"    font-size: 21px;\">District </label>\n                            <!-- <input [(ngModel)]=\"registerModel.dist\" formControlName=\"dist\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.dist.errors }\" placeholder=\" District\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\"> -->\n                            <select [(ngModel)]=\"registerModel.dist\" formControlName=\"dist\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.dist.errors }\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\">\n                                <option value=\"\">Choose a District</option>\n                                <option value=\"Alappuzha\"> Alappuzha</option>\n                                <option value=\"Ernakulam\"> Ernakulam</option>\n                                <option value=\"Idukki\"> Idukki</option>\n                                <option value=\"\tKannur\"> Kannur</option>\n                                <option value=\"Kasaragod\"> Kasaragod</option>\n                                <option value=\"Kollam\"> Kollam</option>\n                                <option value=\"Kottayam\"> Kottayam</option>\n                                <option value=\"Kozhikode\"> Kozhikode</option>\n                                <option value=\"Malappuram\"> Malappuram</option>\n                                <option value=\"Palakkad\"> Palakkad</option>\n                                <option value=\"Pathanamthitta\"> Pathanamthitta</option>\n                                <option value=\"Thiruvananthapuram\"> Thiruvananthapuram</option>\n                                <option value=\"Thrissur\"> Thrissur</option>\n                                <option value=\"Wayanad\"> Wayanad</option>\n\n                            </select>\n                            <div *ngIf=\"submitted && f.dist.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.dist.errors.required\">District is required</div>\n                            </div>\n\n                            <label for=\"\" style=\"    font-size: 21px;\">Locality </label>\n                            <input [(ngModel)]=\"registerModel.locality\" formControlName=\"locality\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.locality.errors }\" placeholder=\" Locality\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\">\n                            <div *ngIf=\"submitted && f.locality.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.locality.errors.required\">Locality is required</div>\n\n                            </div>\n                            <label for=\"\" style=\"    font-size: 21px;\">whatsapp Number </label>\n                            <input [(ngModel)]=\"registerModel.wnumber\" formControlName=\"wnumber\" type=\"number\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.wnumber.errors }\"\n                                placeholder=\" Whatsapp Number\" class=\"form-control\"\n                                style=\"    margin-bottom: 11px;background: white;\">\n                            <div *ngIf=\"submitted && f.wnumber.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.wnumber.errors.required\">Whatsapp Number is required</div>\n                                <div *ngIf=\"f.wnumber.errors.pattern\">Please Enter 10 digit Mobile Number.</div>\n                            </div>\n                            <label for=\"\" style=\"    font-size: 21px;\">Address </label>\n                            <textarea [(ngModel)]=\"registerModel.address\" formControlName=\"address\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" placeholder=\"Address\"\n                                class=\"form-control\" style=\"    margin-bottom: 11px;background: white;\">\n                        </textarea>\n                            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                            </div>\n                            <button (click)=\"register()\" style=\"    margin-left: auto;\n                        background: #ffd000;\n                        margin-right: auto;\n                        display: block;\n                        width: 50%;\" class=\"btn btn-warning\">Register</button>\n                        </form>\n\n                    </div>\n                </div>\n                <!-- </div>  -->\n            </div>\n        </div>\n    </div>\n    <!--== slide Item One ==-->\n</section>\n<!-- \n<section id=\"about-area\" class=\"section-padding\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"section-title  text-center\">\n                    <h2>About us</h2>\n                    <span class=\"title-line\"><i class=\"fa fa-car\"></i></span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"display-table\">\n                    <div class=\"display-table-cell\">\n                        <div class=\"about-content\">\n                            <p>Lorem simply dummy is a texted of the printing costed and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-6\">\n                <div class=\"about-image\">\n                    <img src=\"assets/img/home-2-about.png\" alt=\"JSOFT\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"about-feature-area\" >\n            <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\"about-feature-item \" style=\"    border: 1px solid yellow;\">\n                        <i class=\"fa fa-car\"></i>\n                        <h3>ALL BRANDS</h3>\n                        <p>Loremed ipsumed is a compnayes odsoyel dolor sit amet, consectetur adipisicing elit. Nesciunted all of.</p>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-4\">\n                    <div class=\"about-feature-item\" style=\"    border: 1px solid yellow;\">\n                        <i class=\"fa fa-car\"></i>\n                        <h3>ALL BRANDS</h3>\n                        <p>Loremed ipsumed is a compnayes odsoyel dolor sit amet, consectetur adipisicing elit. Nesciunted all of.</p>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-4\">\n                    <div class=\"about-feature-item\" style=\"    border: 1px solid yellow;\">\n                        <i class=\"fa fa-car\"></i>\n                        <h3>ALL BRANDS</h3>\n                        <p>Loremed ipsumed is a compnayes odsoyel dolor sit amet, consectetur adipisicing elit. Nesciunted all of.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section> -->\n\n<!--== Services Area Start ==-->\n<!-- \n<section id=\"mobile-app-area\" style=\"background-color: black;\">\n    <div class=\"container\">\n        <div class=\"row\">\n        \n        \n            <div class=\"col-lg-6\"> \n                <div class=\"mobile-app-content\">\n                    <h2>SAVE 30% WITH THE APP</h2>\n\n                    <div class=\"app-btns\">\n                        <a href=\"#\"><i class=\"fa fa-android\"></i> Android Store</a>\n                        <a href=\"#\"><i class=\"fa fa-apple\"></i> Apple Store</a>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section> -->\n\n\n\n<!-- <app-footer></app-footer> -->\n\n\n<div class=\"footer-bottom-area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <p>\n                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                    Copyright &copy;\n                    <script>document.write(new Date().getFullYear());</script> All rights reserved </p>\n                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_interceptor/jwtinterceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_interceptor/jwtinterceptor.ts ***!
  \************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(loginservice) {
        this.loginservice = loginservice;
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    intercept(req, next) {
        console.log('Token Interceptor');
        this.token = JSON.parse(localStorage.getItem('token'));
        // const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGFzaG9rQHBydmFrLmluIiwiZXhwIjoxNTgwNDU3Mjg0LCJpYXQiOjE1ODA0NTQ1ODR9.U-Og3vRa12LGn37-XieCXsSOG0SFF089kvh_sQrqEAM`;
        console.log(this.token);
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        console.log(req);
        return next.handle(req);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptor);



/***/ }),

/***/ "./src/app/_interceptor/loadinginterceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/_interceptor/loadinginterceptor.ts ***!
  \****************************************************/
/*! exports provided: LoadingScreenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenInterceptor", function() { return LoadingScreenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading/loading.service */ "./src/app/loading/loading.service.ts");




let LoadingScreenInterceptor = class LoadingScreenInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.loaderService.show();
        console.log('loadingg......');
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loaderService.hide()));
    }
};
LoadingScreenInterceptor.ctorParameters = () => [
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }
];
LoadingScreenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoadingScreenInterceptor);



/***/ }),

/***/ "./src/app/_models/bank.ts":
/*!*********************************!*\
  !*** ./src/app/_models/bank.ts ***!
  \*********************************/
/*! exports provided: Bank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bank", function() { return Bank; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Bank {
}


/***/ }),

/***/ "./src/app/_models/driver.ts":
/*!***********************************!*\
  !*** ./src/app/_models/driver.ts ***!
  \***********************************/
/*! exports provided: Driver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Driver", function() { return Driver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Driver {
}


/***/ }),

/***/ "./src/app/_models/register.ts":
/*!*************************************!*\
  !*** ./src/app/_models/register.ts ***!
  \*************************************/
/*! exports provided: Registeruser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registeruser", function() { return Registeruser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Registeruser {
}


/***/ }),

/***/ "./src/app/_models/vehicle.ts":
/*!************************************!*\
  !*** ./src/app/_models/vehicle.ts ***!
  \************************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Vehicle {
    ;
}


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('userdata')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/adminpannel/admin.service.ts":
/*!**********************************************!*\
  !*** ./src/app/adminpannel/admin.service.ts ***!
  \**********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.BASEURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
    }
    // getallCountries(){
    //   return this.http.get(this.COUNTRIES_URL);
    // }
    getallowners(pageIndex) {
        return this.http.get(this.BASEURL + 'user/listUsers?page=' + pageIndex + '&size=10&roleId=2');
    }
    getalllocation() {
        return this.http.get(this.BASEURL + 'admin/listLocality');
    }
    addlocation(formdata) {
        return this.http.post(this.BASEURL + 'admin/addLocality', formdata);
    }
    Editlocation(formdata) {
        return this.http.put(this.BASEURL + 'admin/updateLocality', formdata);
    }
    getallvehicles() {
        return this.http.get(this.BASEURL + 'vehicle/listBasedOnApprovalStatus?status=2&page=0&size=100');
    }
    getallvehiclesapproved() {
        return this.http.get(this.BASEURL + 'vehicle/listBasedOnApprovalStatus?status=1&page=0&size=100');
    }
    getallvehiclesRejected() {
        return this.http.get(this.BASEURL + 'vehicle/listBasedOnApprovalStatus?status=3&page=0&size=100');
    }
    approve(formdata) {
        return this.http.post(this.BASEURL + 'vehicle/setApprovalStatus', formdata);
    }
    reject(formdata) {
        return this.http.post(this.BASEURL + 'vehicle/setApprovalStatus', formdata);
    }
    getimage(vehicleID) {
        let token = JSON.parse(localStorage.getItem('token'));
        const httpoptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer' + '' + token }) };
        return this.http.get(this.BASEURL + 'vehicle/getImage2/' + vehicleID, { headers: httpoptions.headers, responseType: 'blob' });
    }
    getlicencefrnt(id) {
        let token = JSON.parse(localStorage.getItem('token'));
        const httpoptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer' + '' + token }) };
        return this.http.get(this.BASEURL + 'vehicle/getLicenceFront/' + id, { headers: httpoptions.headers, responseType: 'blob' });
    }
    getlicscenceback(id) {
        let token = JSON.parse(localStorage.getItem('token'));
        const httpoptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer' + '' + token }) };
        return this.http.get(this.BASEURL + 'vehicle/getLicenceBack/' + id, { headers: httpoptions.headers, responseType: 'blob' });
    }
    getrc(id) {
        let token = JSON.parse(localStorage.getItem('token'));
        const httpoptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer' + '' + token }) };
        return this.http.get(this.BASEURL + 'vehicle/getRc/' + id, { headers: httpoptions.headers, responseType: 'blob' });
    }
    getVehicleDetailsbyId(id) {
        return this.http.get(this.BASEURL + 'vehicle/get/' + id);
    }
    getbankdetails(id) {
        return this.http.get(this.BASEURL + 'owner/getBankDetails/' + id);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.card{\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5hcHByb3ZldmVoaWNsZXMvYWRtaW5hcHByb3ZldmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5hcHByb3ZldmVoaWNsZXMvYWRtaW5hcHByb3ZldmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi8qIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSAqL1xyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ucGFnZS13cmFwcGVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4ICNlNWU1ZTU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcblx0cGFkZGluZzogMTBweCA4cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzNS4gTG9jayBTY3JlZW5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmxvY2stdXNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9jay11c2VyIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS5jdXN0b20tdGFibGU+IHRib2R5ID4gdHIgPiB0ZHtcclxuXHJcblx0cGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminapprovevehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminapprovevehiclesComponent", function() { return AdminapprovevehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let AdminapprovevehiclesComponent = class AdminapprovevehiclesComponent {
    constructor(adminservice, router) {
        this.adminservice = adminservice;
        this.router = router;
        this.displayedColumns = ['vname', 'vnumber', 'name', 'view', 'approve'];
        this.limit = 15;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.formData = new FormData();
        this.message = 'data found';
    }
    ngOnInit() {
        this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BASEURL;
        this.getallvehiclesforapproval();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
        console.log(this.dataSource.filteredData.length);
        if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
        }
    }
    getallvehiclesforapproval() {
        this.adminservice.getallvehicles().subscribe(data => {
            this.results = data;
            this.dataSource.data = this.results;
        }, error => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        });
    }
    approve(elemet) {
        this.formData.append('vehicleId', elemet.id);
        this.formData.append('status', "1");
        this.adminservice.approve(this.formData).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Approved!', 'Vehicle Added Successfully', 'success');
            this.ngOnInit();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Approve Vehicle!', 'Vehicle Approve  UnSuccessfully', 'error');
        });
    }
    reject(elemet) {
        this.formData.append('vehicleId', elemet.id);
        this.formData.append('status', "3");
        this.adminservice.reject(this.formData).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Reject!', 'Vehicle Reject Successfully', 'success');
            this.ngOnInit();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Reject Vehicle !', 'Vehicle Reject UnSuccessfully', 'error');
        });
    }
    changePage(event) {
        // this.adminservice.getallvehicles(event.pageIndex).subscribe(
        //   data => {
        //     this.results = data;
        //     this.dataSource.data = this.results;
        //   },
        //   error => {
        //     this.dataSource = new MatTableDataSource();
        //   }
        // )
    }
    view(e) {
        sessionStorage.setItem("vehicle", JSON.stringify(e));
        this.router.navigate(['/viewVehicle']);
    }
    tabClick(tab) {
        console.log(tab.index);
        if (tab.index == 0) {
            console.log('PENDING');
            this.getallvehiclesforapproval();
        }
        else if (tab.index == 1) {
            console.log('ACCEPTED');
            this.getallvehiclesApproved();
        }
        else if (tab.index == 2) {
            console.log('rejected');
            this.getallvehiclesRejected();
        }
    }
    getallvehiclesApproved() {
        this.adminservice.getallvehiclesapproved().subscribe(data => {
            this.results = data;
            this.dataSource.data = this.results;
        }, error => {
            // this.dataSource = new MatTableDataSource();
            this.results = [];
        });
    }
    getallvehiclesRejected() {
        this.adminservice.getallvehiclesRejected().subscribe(data => {
            this.results = data;
            this.dataSource.data = this.results;
        }, error => {
            // this.dataSource = new MatTableDataSource();
            this.results = [];
        });
    }
};
AdminapprovevehiclesComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], AdminapprovevehiclesComponent.prototype, "paginator", void 0);
AdminapprovevehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminapprovevehicles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminapprovevehicles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminapprovevehicles.component.css */ "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.css")).default]
    })
], AdminapprovevehiclesComponent);



/***/ }),

/***/ "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper{\r\n    margin-left: 236px;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n}\r\n\r\n.detailsheading{\r\n    float: right;\r\n}\r\n\r\n.detailsheading1{\r\n    float: left;\r\n}\r\n\r\nmat-card{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    \r\n}\r\n\r\n.row\r\n{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.card{\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5hcHByb3ZldmVoaWNsZXMvdmlldy12ZWhpY2xlZGV0YWlscy92aWV3LXZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQjs7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2FkbWluYXBwcm92ZXZlaGljbGVzL3ZpZXctdmVoaWNsZWRldGFpbHMvdmlldy12ZWhpY2xlZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsc2hlYWRpbmd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmRldGFpbHNoZWFkaW5nMXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBcclxufVxyXG4ucm93XHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewVehicledetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVehicledetailsComponent", function() { return ViewVehicledetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/vehicle */ "./src/app/_models/vehicle.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminpannel/admin.service.ts");






let ViewVehicledetailsComponent = class ViewVehicledetailsComponent {
    constructor(domsanitizer, adminService) {
        this.domsanitizer = domsanitizer;
        this.adminService = adminService;
    }
    ngOnInit() {
        this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_3__["Vehicle"]();
        this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].BASEURL;
        this.vehicledetails = JSON.parse(sessionStorage.getItem('vehicle'));
        this.vehicleModel.vehicleCompany = this.vehicledetails['companyName'];
        this.vehicleModel.vehicleType = this.vehicledetails['type'];
        this.vehicleModel.rent = this.vehicledetails['rentPerDay'];
        this.rentperhour = this.vehicledetails['rentPerHour'];
        this.rentperkm = this.vehicledetails['rentPerKM'];
        this.vehicleModel.vehicleYear = this.vehicleModel['year'];
        this.vehicleModel.locality = this.vehicledetails['locationName'];
        this.vehicleModel.vehicleModel = this.vehicledetails['model'];
        this.vehicleModel.vehicleRegistration = this.vehicledetails['numberPlate'];
        this.vehicleID = this.vehicledetails['id'];
        this.driverDetails = this.vehicledetails['driverId'];
        this.driverRentPerKM = this.vehicledetails['driverRentPerKM'];
        this.getvehicleImage2imagesbyId();
        this.getlicencefrnt();
        this.getlicscenceback();
        this.getrc();
        this.getvehicleDetailsById();
    }
    getvehicleImage2imagesbyId() {
        this.adminService.getimage(this.vehicleID).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.vehicleimage2 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getlicencefrnt() {
        this.adminService.getlicencefrnt(this.vehicleID).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.liscence1 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getlicscenceback() {
        this.adminService.getlicscenceback(this.vehicleID).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.liscence2 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getrc() {
        this.adminService.getrc(this.vehicleID).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.rc = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getvehicleDetailsById() {
        this.adminService.getVehicleDetailsbyId(this.vehicleID).subscribe(data => {
            this.DriverDetailsofCar = data['driver'];
            console.log(this.DriverDetailsofCar);
            if (this.DriverDetailsofCar != null) {
                this.vehicleModel.dname = this.DriverDetailsofCar['name'];
                this.vehicleModel.dnumber = this.DriverDetailsofCar['number'];
                this.vehicleModel.daddreess = this.DriverDetailsofCar['addresss'];
            }
            this.id = this.driverDetails['id'];
        }, error => {
        });
    }
};
ViewVehicledetailsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
];
ViewVehicledetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-vehicledetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-vehicledetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-vehicledetails.component.css */ "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.css")).default]
    })
], ViewVehicledetailsComponent);



/***/ }),

/***/ "./src/app/adminpannel/adminhome/adminhome.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adminpannel/adminhome/adminhome.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    padding-top: 143px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2FkbWluaG9tZS9hZG1pbmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE0M3B4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/adminpannel/adminhome/adminhome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminpannel/adminhome/adminhome.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function() { return AdminhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminhomeComponent = class AdminhomeComponent {
    constructor() { }
    ngOnInit() {
        this.userDetails = JSON.parse(localStorage.getItem('ROLE'));
        // this.userName = this.userDetails['username'];
        this.userRole = this.userDetails;
    }
};
AdminhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminhome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminhome/adminhome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminhome.component.css */ "./src/app/adminpannel/adminhome/adminhome.component.css")).default]
    })
], AdminhomeComponent);



/***/ }),

/***/ "./src/app/adminpannel/adminpannel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/adminpannel/adminpannel.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5wYW5uZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhbm5lbC9hZG1pbnBhbm5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpannel/adminpannel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/adminpannel/adminpannel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminpannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpannelComponent", function() { return AdminpannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.service */ "./src/app/adminpannel/admin.service.ts");



let AdminpannelComponent = class AdminpannelComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminpannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminpannel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminpannel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminpannel.component.html")).default,
        providers: [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminpannel.component.css */ "./src/app/adminpannel/adminpannel.component.css")).default]
    })
], AdminpannelComponent);



/***/ }),

/***/ "./src/app/adminpannel/companies/companies.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adminpannel/companies/companies.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\nmat-header-row{\r\n\tborder-bottom: 2px solid #ffd000;\r\n}\r\n\r\nmat-header-cell{\r\n\tfont-size: 16px;\r\n}\r\n\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\n\r\na {\r\n\tcolor: #009ce7;\r\n}\r\n\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\n\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\n\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\n\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\n\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\n\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7OztHQUdHOztBQUNIO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDOztBQUNBOztDQUVDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7QUFDckI7O0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQywwQ0FBMEM7QUFDM0M7O0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9COztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUdBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTs7d0JBRXdCOztBQUV4QjtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFDQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFDQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFDQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFDQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFDQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFDQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTs7Ozs7O0NBTUMseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QiwyQkFBMkI7QUFDNUI7O0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBR0E7O3dCQUV3Qjs7QUFFeEI7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBOztDQUVDLGtCQUFrQjtJQUNmLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhbm5lbC9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLXJvd3tcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZDAwMDtcclxufVxyXG5tYXQtaGVhZGVyLWNlbGx7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi8qIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSAqL1xyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ucGFnZS13cmFwcGVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4ICNlNWU1ZTU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcblx0cGFkZGluZzogMTBweCA4cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzNS4gTG9jayBTY3JlZW5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmxvY2stdXNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9jay11c2VyIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS5jdXN0b20tdGFibGU+IHRib2R5ID4gdHIgPiB0ZHtcclxuXHJcblx0cGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpannel/companies/companies.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminpannel/companies/companies.component.ts ***!
  \**************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/adminpannel/admin.service.ts");





let CompaniesComponent = class CompaniesComponent {
    constructor(adminservice) {
        this.adminservice = adminservice;
        this.displayedColumns = ['name', 'email', 'phonenumber'];
        this.limit = 15;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.message = 'data found';
    }
    ngOnInit() {
        this.getallOwners();
    }
    getallOwners() {
        this.adminservice.getallowners(this.pageIndex).subscribe(data => {
            this.results = data;
            this.dataSource.data = this.results;
        }, error => {
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
        console.log(this.dataSource.filteredData.length);
        if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
        }
    }
    changePage(e) {
        this.adminservice.getallowners(e.pageIndex).subscribe(data => {
            this.results = data;
            this.dataSource.data = this.results;
        }, error => {
        });
    }
};
CompaniesComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], CompaniesComponent.prototype, "paginator", void 0);
CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/companies/companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies.component.css */ "./src/app/adminpannel/companies/companies.component.css")).default]
    })
], CompaniesComponent);



/***/ }),

/***/ "./src/app/adminpannel/countries/countries.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adminpannel/countries/countries.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\n/* ::ng-deep .mat-row:hover {\r\n    background-color: rgba(255, 115, 0, 0.527);\r\n  }\r\n  h5{\r\n      text-align: center;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBOzs7OztLQUtLIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLyogOjpuZy1kZWVwIC5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMTUsIDAsIDAuNTI3KTtcclxuICB9XHJcbiAgaDV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9ICovIl19 */");

/***/ }),

/***/ "./src/app/adminpannel/countries/countries.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminpannel/countries/countries.component.ts ***!
  \**************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/adminpannel/admin.service.ts");





let CountriesComponent = class CountriesComponent {
    constructor(adminservice) {
        this.adminservice = adminservice;
        this.displayedColumns = ['no', 'country', 'code'];
        this.limit = 5;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.message = 'data found';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
        console.log(this.dataSource.filteredData.length);
        if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
        }
    }
};
CountriesComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], CountriesComponent.prototype, "paginator", void 0);
CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./countries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/countries/countries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./countries.component.css */ "./src/app/adminpannel/countries/countries.component.css")).default]
    })
], CountriesComponent);



/***/ }),

/***/ "./src/app/adminpannel/header/header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adminpannel/header/header.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ::ng-deep .mat-toolbar{\r\n    position: fixed;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOjpuZy1kZWVwIC5tYXQtdG9vbGJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/adminpannel/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adminpannel/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/adminpannel/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/adminpannel/location/add-location/add-location.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/adminpannel/location/add-location/add-location.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vYWRkLWxvY2F0aW9uL2FkZC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2xvY2F0aW9uL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/adminpannel/location/add-location/add-location.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/adminpannel/location/add-location/add-location.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let AddLocationComponent = class AddLocationComponent {
    constructor(fb, router, toaster, adminservice) {
        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.adminservice = adminservice;
        this.formData = new FormData();
    }
    ngOnInit() {
        this.locationForn = this.fb.group({
            Location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submit() {
        if (this.Location == undefined || this.Location == '') {
            this.toaster.error('Please enter a location name');
            return;
        }
        else {
            this.formData.append('name', this.Location);
            this.adminservice.addlocation(this.formData).subscribe(data => {
                this.router.navigate(['/locations']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Location Added!', 'Location Added Successfully', 'success');
            }, error => {
                this.formData.delete;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cant add Location!', 'Location Added UnSuccessfully', 'error');
            });
        }
    }
};
AddLocationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
];
AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/add-location/add-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-location.component.css */ "./src/app/adminpannel/location/add-location/add-location.component.css")).default]
    })
], AddLocationComponent);



/***/ }),

/***/ "./src/app/adminpannel/location/edit-location/edit-location.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/adminpannel/location/edit-location/edit-location.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vZWRpdC1sb2NhdGlvbi9lZGl0LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCO0FBQ0E7Q0FDQztJQUNHLGlCQUFpQjtBQUNyQixDQUFDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vZWRpdC1sb2NhdGlvbi9lZGl0LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXHJcbnsuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG59fVxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpannel/location/edit-location/edit-location.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/adminpannel/location/edit-location/edit-location.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLocationComponent", function() { return EditLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let EditLocationComponent = class EditLocationComponent {
    constructor(fb, activaterouter, router, adminservice) {
        this.fb = fb;
        this.activaterouter = activaterouter;
        this.router = router;
        this.adminservice = adminservice;
        this.formData = new FormData();
    }
    ngOnInit() {
        this.locationForn = this.fb.group({
            Location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.activaterouter.params.subscribe(params => {
            console.log(params);
            this.Location = params.name;
            this.Id = params.id;
        });
    }
    submit() {
        this.formData.append('id', this.Id);
        this.formData.append('name', this.Location);
        this.adminservice.Editlocation(this.formData).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Location Updated!', 'Location Updated Successfully', 'success');
            this.router.navigate(['/locations']);
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cant Update Location!', 'Location Updated UnSuccessfully', 'error');
            this.formData.delete;
        });
    }
};
EditLocationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
];
EditLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/edit-location/edit-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-location.component.css */ "./src/app/adminpannel/location/edit-location/edit-location.component.css")).default]
    })
], EditLocationComponent);



/***/ }),

/***/ "./src/app/adminpannel/location/location.component.css":
/*!*************************************************************!*\
  !*** ./src/app/adminpannel/location/location.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLyogLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59ICovXHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1OXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRwYWRkaW5nOiAwLjQ2OXJlbSAwLjc1cmVtO1xyXG5cdGJvcmRlci1jb2xvcjogI2VhZWFlYTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWluLWhlaWdodDogNDBweDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRvdXRsaW5lOiAwIG5vbmU7XHJcbn1cclxuYSB7XHJcblx0Y29sb3I6ICMwMDljZTc7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxuYSB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbiB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHBhZGRpbmc6IDZweCAwLjc1cmVtO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRyZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5uYXZiYXItbmF2ID4gbGkge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5kaXNwbGF5LWJsb2NrIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnRuLnJvdW5kZWQge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uYnRuLmZvY3VzLFxyXG4uYnRuOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxufVxyXG5cclxuXHJcbi50YWJsZSB7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxufVxyXG4udGFibGUudGFibGUtd2hpdGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZSgybiArIDEpIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIC5hdmF0YXIge1xyXG5cdG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhIHtcclxuXHRjb2xvcjogIzc1NzU3NTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhOmhvdmVyIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBzcGFuIHtcclxuXHRjb2xvcjogIzllOWU5ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0My4gSGVscGVyIENsYXNzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tLXItNSB7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubS1yLTEwIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1sLTUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTAge1xyXG5cdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubS10LTEwIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0yMCB7XHJcblx0bWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMzAge1xyXG5cdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTUwIHtcclxuXHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0xMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMjAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTMwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNDAge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbi5ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1lbGxpcHNpcyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udGV4dC1tdXRlZC1saWdodCB7XHJcblx0Y29sb3I6ICNhYWE7XHJcbn1cclxuLmNhcmQtYm94IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uY2FyZC10aXRsZSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG5cdGNvbG9yOiAjNTY1NjU2O1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZ2Utc3ViLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmFkZ2Utc3VjY2Vzcy1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM1NWNlNjM7XHJcblx0Y29sb3I6ICM1NWNlNjM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS1kYW5nZXItYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjYyZDUxO1xyXG5cdGNvbG9yOiAjZjYyZDUxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2Utd2FybmluZy1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmJjMzQ7XHJcblx0Y29sb3I6ICNmZmJjMzQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS1pbmZvLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwOWVmYjtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLm1vZGFsLWZvb3Rlci50ZXh0LWxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm1vZGFsLWZvb3Rlci50ZXh0LWNlbnRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb250LTE4IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmJvcmRlci1yaWdodCB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3ZTdlNztcclxufVxyXG4uYmx1ciB7XHJcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbW96LWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1vLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1tcy1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRmaWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG4uYnRuIHtcclxuXHRmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG4ucGFnaW5hdGlvbiA+IGxpID4gYSxcclxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW4ge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdHBhZGRpbmc6IC41cmVtIC43NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA1cHggMDtcclxufVxyXG4udGFibGUgaDUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUgaDUgKyBwIHtcclxuXHRjb2xvcjogIzllOWU5ZTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucGFnZS1saW5rOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5wYWdlLXdyYXBwZXIge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciA+IC5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXRhYmxlIHRyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IDAgMCAzcHggI2U1ZTVlNTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuXHRwYWRkaW5nOiAxMHB4IDhweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDM1LiBMb2NrIFNjcmVlblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubG9jay11c2VyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2NrLXVzZXIgaW1nIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRhYmxlLmN1c3RvbS10YWJsZT4gdGJvZHkgPiB0ciA+IHRke1xyXG5cclxuXHRwYWRkaW5nOiAxMHB4IDcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgcGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/adminpannel/location/location.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adminpannel/location/location.component.ts ***!
  \************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LocationComponent = class LocationComponent {
    constructor(adminpannel, router) {
        this.adminpannel = adminpannel;
        this.router = router;
        this.displayedColumns = ['location', 'Edit'];
        this.limit = 15;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.message = 'data found';
    }
    ngOnInit() {
        this.getalllocations();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
        console.log(this.dataSource.filteredData.length);
        if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
        }
    }
    getalllocations() {
        this.adminpannel.getalllocation().subscribe(data => {
            console.log(data);
            this.results = data;
            this.dataSource.data = this.results;
        }, error => {
        });
    }
    edit(w) {
        this.router.navigate(['/edit-location', w.id, w.name]);
    }
    delete(e) {
    }
};
LocationComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], LocationComponent.prototype, "paginator", void 0);
LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.component.css */ "./src/app/adminpannel/location/location.component.css")).default]
    })
], LocationComponent);



/***/ }),

/***/ "./src/app/adminpannel/paymentreports/paymentreports.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adminpannel/paymentreports/paymentreports.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvcGF5bWVudHJlcG9ydHMvcGF5bWVudHJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvcGF5bWVudHJlcG9ydHMvcGF5bWVudHJlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLyogLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59ICovXHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1OXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRwYWRkaW5nOiAwLjQ2OXJlbSAwLjc1cmVtO1xyXG5cdGJvcmRlci1jb2xvcjogI2VhZWFlYTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWluLWhlaWdodDogNDBweDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRvdXRsaW5lOiAwIG5vbmU7XHJcbn1cclxuYSB7XHJcblx0Y29sb3I6ICMwMDljZTc7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxuYSB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbiB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHBhZGRpbmc6IDZweCAwLjc1cmVtO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRyZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5uYXZiYXItbmF2ID4gbGkge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5kaXNwbGF5LWJsb2NrIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnRuLnJvdW5kZWQge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uYnRuLmZvY3VzLFxyXG4uYnRuOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxufVxyXG5cclxuXHJcbi50YWJsZSB7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxufVxyXG4udGFibGUudGFibGUtd2hpdGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZSgybiArIDEpIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIC5hdmF0YXIge1xyXG5cdG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhIHtcclxuXHRjb2xvcjogIzc1NzU3NTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhOmhvdmVyIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBzcGFuIHtcclxuXHRjb2xvcjogIzllOWU5ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0My4gSGVscGVyIENsYXNzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tLXItNSB7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubS1yLTEwIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1sLTUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTAge1xyXG5cdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubS10LTEwIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0yMCB7XHJcblx0bWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMzAge1xyXG5cdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTUwIHtcclxuXHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0xMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMjAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTMwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNDAge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbi5ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1lbGxpcHNpcyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udGV4dC1tdXRlZC1saWdodCB7XHJcblx0Y29sb3I6ICNhYWE7XHJcbn1cclxuLmNhcmQtYm94IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uY2FyZC10aXRsZSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG5cdGNvbG9yOiAjNTY1NjU2O1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZ2Utc3ViLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmFkZ2Utc3VjY2Vzcy1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM1NWNlNjM7XHJcblx0Y29sb3I6ICM1NWNlNjM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS1kYW5nZXItYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjYyZDUxO1xyXG5cdGNvbG9yOiAjZjYyZDUxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2Utd2FybmluZy1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmJjMzQ7XHJcblx0Y29sb3I6ICNmZmJjMzQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS1pbmZvLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwOWVmYjtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLm1vZGFsLWZvb3Rlci50ZXh0LWxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm1vZGFsLWZvb3Rlci50ZXh0LWNlbnRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb250LTE4IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmJvcmRlci1yaWdodCB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3ZTdlNztcclxufVxyXG4uYmx1ciB7XHJcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbW96LWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1vLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1tcy1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRmaWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG4uYnRuIHtcclxuXHRmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG4ucGFnaW5hdGlvbiA+IGxpID4gYSxcclxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW4ge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdHBhZGRpbmc6IC41cmVtIC43NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA1cHggMDtcclxufVxyXG4udGFibGUgaDUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUgaDUgKyBwIHtcclxuXHRjb2xvcjogIzllOWU5ZTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucGFnZS1saW5rOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5wYWdlLXdyYXBwZXIge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciA+IC5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXRhYmxlIHRyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IDAgMCAzcHggI2U1ZTVlNTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuXHRwYWRkaW5nOiAxMHB4IDhweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDM1LiBMb2NrIFNjcmVlblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubG9jay11c2VyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2NrLXVzZXIgaW1nIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRhYmxlLmN1c3RvbS10YWJsZT4gdGJvZHkgPiB0ciA+IHRke1xyXG5cclxuXHRwYWRkaW5nOiAxMHB4IDcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgcGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/adminpannel/paymentreports/paymentreports.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminpannel/paymentreports/paymentreports.component.ts ***!
  \************************************************************************/
/*! exports provided: PaymentreportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentreportsComponent", function() { return PaymentreportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");




let PaymentreportsComponent = class PaymentreportsComponent {
    constructor() {
        this.displayedColumns = ['transId', 'uname', 'unumber', 'dname', 'dnumber'];
        this.limit = 5;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.message = 'data found';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
        console.log(this.dataSource.filteredData.length);
        if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], PaymentreportsComponent.prototype, "paginator", void 0);
PaymentreportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paymentreports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paymentreports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/paymentreports/paymentreports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paymentreports.component.css */ "./src/app/adminpannel/paymentreports/paymentreports.component.css")).default]
    })
], PaymentreportsComponent);



/***/ }),

/***/ "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adminpannel/reset-passowrd/reset-passowrd.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.card{\r\n\tpadding: 20px;\r\n}\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvcmVzZXQtcGFzc293cmQvcmVzZXQtcGFzc293cmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDtDQUNDLGFBQWE7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7OztDQUdDLHlCQUF5QjtDQUN6Qiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QixpQ0FBaUM7QUFDbEM7QUFDQTs7Q0FFQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQywwQ0FBMEM7QUFDM0M7QUFDQTs7Q0FFQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUdBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFFQTs7d0JBRXdCO0FBRXhCO0NBQ0MsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsMENBQTBDO0FBQzNDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFFQTs7Ozs7O0NBTUMseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLGNBQWM7Q0FDZCxnQ0FBZ0M7QUFDakM7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FHbEIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QiwyQkFBMkI7QUFDNUI7QUFDQTs7Ozs7O0NBTUMsaUJBQWlCO0NBQ2pCLHNCQUFzQjtBQUN2QjtBQUdBOzt3QkFFd0I7QUFFeEI7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7QUFFQTs7Q0FFQyxrQkFBa0I7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhbm5lbC9yZXNldC1wYXNzb3dyZC9yZXNldC1wYXNzb3dyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4vKiAudGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn0gKi9cclxuLmNhcmR7XHJcblx0cGFkZGluZzogMjBweDtcclxufVxyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ucGFnZS13cmFwcGVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4ICNlNWU1ZTU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcblx0cGFkZGluZzogMTBweCA4cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzNS4gTG9jayBTY3JlZW5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmxvY2stdXNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9jay11c2VyIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS5jdXN0b20tdGFibGU+IHRib2R5ID4gdHIgPiB0ZHtcclxuXHJcblx0cGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts ***!
  \************************************************************************/
/*! exports provided: ResetPassowrdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassowrdComponent", function() { return ResetPassowrdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResetPassowrdComponent = class ResetPassowrdComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResetPassowrdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-passowrd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-passowrd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/reset-passowrd/reset-passowrd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-passowrd.component.css */ "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.css")).default]
    })
], ResetPassowrdComponent);



/***/ }),

/***/ "./src/app/adminpannel/sidebar/sidebar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/adminpannel/sidebar/sidebar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.sidebar {\r\n\tbackground: linear-gradient(to bottom, white , #ffcb67);\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n\ttop: 79px;\r\n\twidth: 230px;\r\n\t/* z-index: 1039; */\r\n\tz-index: 0;\r\n\tbackground-color: #fff;\r\n\tbottom: 0;\r\n\tmargin-top: 0px;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n.sidebar.opened {\r\n\ttransition: all 0.4s ease;\r\n}\r\n.sidebar-inner {\r\n\theight: 100%;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n.sidebar-menu ul {\r\n\tfont-size: 14px;\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.sidebar-menu li a {\r\n\tcolor: #888;\r\n\tdisplay: block;\r\n\tfont-size: 15px;\r\n\theight: auto;\r\n\tpadding: 0 20px;\r\n}\r\n.sidebar-menu li a:hover {\r\n\tcolor: #009efb;\r\n}\r\n.sidebar-menu li.active a {\r\n\tcolor: #009efb;\r\n\tbackground-color: #f3f3f3;\r\n}\r\n.menu-title {\r\n\tcolor: #333;\r\n\tfont-size: 15px;\r\n\tfont-weight: 500;\r\n\tpadding: 12px 20px;\r\n}\r\n.menu-title > i {\r\n\tfloat: right;\r\n\tline-height: 40px;\r\n}\r\n.sidebar-menu li.menu-title a {\r\n\tcolor: #009efb;\r\n\tdisplay: inline-block;\r\n\t/* float: right; */\r\n\tpadding: 0;\r\n}\r\n.sidebar-menu li.menu-title a.btn {\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tfloat: none;\r\n\tfont-size: 15px;\r\n\tline-height: inherit;\r\n\tmargin-bottom: 15px;\r\n}\r\n.sidebar-menu ul ul a.active {\r\n\tcolor: #009efb;\r\n\ttext-decoration: underline;\r\n}\r\n.mobile-user-menu {\r\n\tcolor: #fff;\r\n\tdisplay: none;\r\n\tfont-size: 24px;\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tpadding: 0 20px;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttext-align: right;\r\n\ttop: 0;\r\n\twidth: 50px;\r\n\tz-index: 10;\r\n}\r\n.mobile-user-menu > a {\r\n\tcolor: #fff;\r\n\tpadding: 0;\r\n}\r\n.mobile-user-menu > a:hover {\r\n\tcolor: #fff;\r\n}\r\n.mobile-user-menu > .dropdown-menu > a {\r\n    line-height: 23px;\r\n}\r\n.profile-rightbar {\r\n\tdisplay: none !important;\r\n\tcolor: #009efb;\r\n\tfont-size: 26px;\r\n\tmargin-left: 15px;\r\n}\r\n.fixed-sidebar-right {\r\n\tposition: fixed;\r\n\ttop: 60px;\r\n\tright: 0;\r\n\twidth: 300px;\r\n\tmargin-right: -300px;\r\n\tbottom: 0;\r\n\tz-index: 101;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.mobile_btn {\r\n\tdisplay: none;\r\n}\r\n.sidebar .sidebar-menu > ul > li > a span {\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10px;\r\n\twhite-space: nowrap;\r\n\tcolor: black;\r\n}\r\n.sidebar .sidebar-menu > ul > li > a span.badge {\r\n\tcolor: #fff;\r\n\tmargin-left: auto;\r\n}\r\n.sidebar-menu ul ul a {\r\n\tdisplay: block;\r\n\tfont-size: 14px;\r\n\tpadding: 9px 10px 9px 50px;\r\n\tposition: relative;\r\n}\r\n.sidebar-menu ul ul {\r\n\tbackground-color: #f3f3f3;\r\n\tdisplay: none;\r\n}\r\n.sidebar-menu ul ul ul a {\r\n\tpadding-left: 70px;\r\n}\r\n.sidebar-menu ul ul ul ul a {\r\n\tpadding-left: 90px;\r\n}\r\n.sidebar-menu > ul > li {\r\n\tposition: relative;\r\n}\r\n.sidebar-menu .menu-arrow {\r\n\ttransition: transform .15s;\r\n\tposition: absolute;\r\n\tright: 15px;\r\n\tdisplay: inline-block;\r\n\tfont-family: 'FontAwesome';\r\n\ttext-rendering: auto;\r\n\tline-height: 40px;\r\n\tfont-size: 18px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\ttransform: translate(0, 0);\r\n\tline-height: 18px;\r\n\ttop: 15px;\r\n}\r\n.sidebar-menu .menu-arrow:before {\r\n\tcontent: \"\\f105\";\r\n}\r\n.sidebar-menu li a.subdrop .menu-arrow {\r\n\ttransform: rotate(90deg);\r\n}\r\n.sidebar-menu ul ul a .menu-arrow {\r\n\ttop: 6px;\r\n}\r\n.sidebar-menu a {\r\n\ttransition: unset;\r\n\t-moz-transition: unset;\r\n\t-o-transition: unset;\r\n\t-ms-transition: unset;\r\n\t-webkit-transition: unset;\r\n}\r\n.sidebar-menu > ul > li > a {\r\n\tpadding: 12px 20px;\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tposition: relative;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n.sidebar-menu ul li a i {\r\n\talign-items: center;\r\n\tdisplay: inline-flex;\r\n\tfont-size: 18px;\r\n\tmin-height: 24px;\r\n\tline-height: 18px;\r\n\twidth: 20px;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n.sidebar-menu ul li.menu-title a i {\r\n\tfont-size: 16px;\r\n\tmargin-right: 0;\r\n\ttext-align: right;\r\n\twidth: auto;\r\n}\r\n.sidebar-menu li.active a {\r\n\tcolor: orange;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsdURBQXVEO0NBQ3ZELDBDQUEwQztDQUMxQyxTQUFTO0NBQ1QsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsZUFBZTtDQUNmLE9BQU87Q0FDUCxnQ0FBZ0M7QUFDakM7QUFDQTtDQUdDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLG1DQUFtQztBQUNwQztBQUNBO0NBQ0MsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGVBQWU7Q0FDZixZQUFZO0NBQ1osZUFBZTtBQUNoQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixXQUFXO0NBQ1gsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0Msd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULFFBQVE7Q0FDUixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLFNBQVM7Q0FDVCxZQUFZO0NBR1oseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLG1DQUFtQztDQUNuQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsMEJBQTBCO0NBQzFCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7QUFDZDtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBR0MsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLDBCQUEwQjtDQUMxQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixtQ0FBbUM7Q0FDbkMsa0NBQWtDO0NBSWxDLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakIsU0FBUztBQUNWO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUlDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixxQkFBcUI7Q0FDckIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLG1DQUFtQztBQUNwQztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsbUNBQW1DO0FBQ3BDO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFLQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWRlYmFyIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSAsICNmZmNiNjcpO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHR0b3A6IDc5cHg7XHJcblx0d2lkdGg6IDIzMHB4O1xyXG5cdC8qIHotaW5kZXg6IDEwMzk7ICovXHJcblx0ei1pbmRleDogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvdHRvbTogMDtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGxlZnQ6IDA7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnNpZGViYXIub3BlbmVkIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLnNpZGViYXItaW5uZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgbGkgYSB7XHJcblx0Y29sb3I6ICM4ODg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaSBhOmhvdmVyIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpLmFjdGl2ZSBhIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcbi5tZW51LXRpdGxlIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbn1cclxuLm1lbnUtdGl0bGUgPiBpIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaS5tZW51LXRpdGxlIGEge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQvKiBmbG9hdDogcmlnaHQ7ICovXHJcblx0cGFkZGluZzogMDtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpLm1lbnUtdGl0bGUgYS5idG4ge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgYS5hY3RpdmUge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5tb2JpbGUtdXNlci1tZW51IHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0cGFkZGluZzogMCAyMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0ei1pbmRleDogMTA7XHJcbn1cclxuLm1vYmlsZS11c2VyLW1lbnUgPiBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi5tb2JpbGUtdXNlci1tZW51ID4gYTpob3ZlciB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLm1vYmlsZS11c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbn1cclxuLnByb2ZpbGUtcmlnaHRiYXIge1xyXG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmZpeGVkLXNpZGViYXItcmlnaHQge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDYwcHg7XHJcblx0cmlnaHQ6IDA7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogLTMwMHB4O1xyXG5cdGJvdHRvbTogMDtcclxuXHR6LWluZGV4OiAxMDE7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5tb2JpbGVfYnRuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSBzcGFuIHtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuLnNpZGViYXIgLnNpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIHNwYW4uYmFkZ2Uge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDlweCAxMHB4IDlweCA1MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNpZGViYXItbWVudSB1bCB1bCB1bCBhIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbn1cclxuLnNpZGViYXItbWVudSB1bCB1bCB1bCB1bCBhIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbn1cclxuLnNpZGViYXItbWVudSA+IHVsID4gbGkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2lkZWJhci1tZW51IC5tZW51LWFycm93IHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzO1xyXG5cdC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjE1cztcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDE1cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG5cdHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdHRvcDogMTVweDtcclxufVxyXG4uc2lkZWJhci1tZW51IC5tZW51LWFycm93OmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcXGYxMDVcIjtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpIGEuc3ViZHJvcCAubWVudS1hcnJvdyB7XHJcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHQtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgYSAubWVudS1hcnJvdyB7XHJcblx0dG9wOiA2cHg7XHJcbn1cclxuLnNpZGViYXItbWVudSBhIHtcclxuXHR0cmFuc2l0aW9uOiB1bnNldDtcclxuXHQtbW96LXRyYW5zaXRpb246IHVuc2V0O1xyXG5cdC1vLXRyYW5zaXRpb246IHVuc2V0O1xyXG5cdC1tcy10cmFuc2l0aW9uOiB1bnNldDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IHVuc2V0O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSB7XHJcblx0cGFkZGluZzogMTJweCAyMHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRtaW4taGVpZ2h0OiAyNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgbGkubWVudS10aXRsZSBhIGkge1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0d2lkdGg6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zaWRlYmFyLW1lbnUgbGkuYWN0aXZlIGEge1xyXG5cdGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/adminpannel/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adminpannel/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
        this.userDetails = JSON.parse(localStorage.getItem('ROLE'));
        this.userRole = this.userDetails;
        console.log(this.userRole);
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/adminpannel/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminpannel/adminpannel.component */ "./src/app/adminpannel/adminpannel.component.ts");
/* harmony import */ var _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminpannel/countries/countries.component */ "./src/app/adminpannel/countries/countries.component.ts");
/* harmony import */ var _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ownerpannel/vehicles/vehicles.component */ "./src/app/ownerpannel/vehicles/vehicles.component.ts");
/* harmony import */ var _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adminpannel/location/location.component */ "./src/app/adminpannel/location/location.component.ts");
/* harmony import */ var _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adminpannel/adminapprovevehicles/adminapprovevehicles.component */ "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts");
/* harmony import */ var _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adminpannel/paymentreports/paymentreports.component */ "./src/app/adminpannel/paymentreports/paymentreports.component.ts");
/* harmony import */ var _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adminpannel/reset-passowrd/reset-passowrd.component */ "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts");
/* harmony import */ var _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ownerpannel/addnew-cars/addnew-cars.component */ "./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts");
/* harmony import */ var _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ownerpannel/drivers/drivers.component */ "./src/app/ownerpannel/drivers/drivers.component.ts");
/* harmony import */ var _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ownerpannel/drivers/add-drivers/add-drivers.component */ "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts");
/* harmony import */ var _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ownerpannel/drivers/viewliscence/viewliscence.component */ "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adminpannel/location/add-location/add-location.component */ "./src/app/adminpannel/location/add-location/add-location.component.ts");
/* harmony import */ var _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./adminpannel/location/edit-location/edit-location.component */ "./src/app/adminpannel/location/edit-location/edit-location.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ownerpannel/edit-cars/edit-cars.component */ "./src/app/ownerpannel/edit-cars/edit-cars.component.ts");
/* harmony import */ var _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./registerpageformarketing/registerpageformarketing.component */ "./src/app/registerpageformarketing/registerpageformarketing.component.ts");
/* harmony import */ var _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component */ "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts");
/* harmony import */ var _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component */ "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts");
/* harmony import */ var _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component */ "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts");
/* harmony import */ var _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component */ "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts");
/* harmony import */ var _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ownerpannel/drivers/edit-drivers/edit-drivers.component */ "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts");
/* harmony import */ var _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ownerpannel/bankdetails/bankdetails.component */ "./src/app/ownerpannel/bankdetails/bankdetails.component.ts");
/* harmony import */ var _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ownerpannel/bankdetails/add-banks/add-banks.component */ "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts");
/* harmony import */ var _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component */ "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts");
/* harmony import */ var _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ownerpannel/requests/requests.component */ "./src/app/ownerpannel/requests/requests.component.ts");
/* harmony import */ var _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ownerpannel/requests/view-requests/view-requests.component */ "./src/app/ownerpannel/requests/view-requests/view-requests.component.ts");








// import { AuthGuard } from './_guards/auth.guard';

























const routes = [
    { path: '', redirectTo: '/userhome', pathMatch: 'full' },
    // {path: '**', redirectTo: '/404'},
    { path: '404', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_20__["ErrorPageComponent"] },
    { path: 'userhome', component: _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_22__["RegisterpageformarketingComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'admin', component: _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_6__["AdminpannelComponent"], },
    { path: 'countries', component: _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"], },
    { path: 'vehicles', component: _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_8__["VehiclesComponent"], },
    { path: 'locations', component: _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"], },
    { path: 'admin-vehicles', component: _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_10__["AdminapprovevehiclesComponent"], },
    { path: 'admin-paymentreports', component: _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_11__["PaymentreportsComponent"], },
    { path: 'admin-resetpassword', component: _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_12__["ResetPassowrdComponent"], },
    { path: 'add-cars', component: _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_13__["AddnewCarsComponent"], },
    { path: 'drivers', component: _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_14__["DriversComponent"], },
    { path: 'add-drivers', component: _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_15__["AddDriversComponent"], },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_17__["ForgotpasswordComponent"], },
    { path: 'add-location', component: _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_18__["AddLocationComponent"], },
    { path: 'edit-location/:id/:name', component: _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_19__["EditLocationComponent"], },
    { path: 'edit-car/:id', component: _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_21__["EditCarsComponent"], },
    // { path:'view-licsense/:id', component: ViewliscenceComponent,},
    { path: 'public', component: _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_23__["PulicregistrationmarketingComponent"] },
    { path: 'viewVehicle', component: _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_24__["ViewVehicledetailsComponent"] },
    { path: 'ownerviewvehicles', component: _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_25__["OwnerviewvehiclesComponent"] },
    { path: 'viewlicsence', component: _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_16__["ViewliscenceComponent"] },
    { path: 'viewlicsenceback', component: _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_26__["ViewlicsencebackComponent"] },
    { path: 'editdrivers', component: _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_27__["EditDriversComponent"] },
    { path: 'bankdetails', component: _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_28__["BankdetailsComponent"] },
    { path: 'add-bankdetails', component: _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_29__["AddBanksComponent"] },
    { path: 'edit-bankdetails', component: _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_30__["EditBankdetailsComponent"] },
    { path: 'request', component: _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_31__["RequestsComponent"] },
    { path: 'view-request/:id/:name', component: _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_32__["ViewRequestsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Angualar-Task';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adminpannel/adminpannel.component */ "./src/app/adminpannel/adminpannel.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _adminpannel_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adminpannel/sidebar/sidebar.component */ "./src/app/adminpannel/sidebar/sidebar.component.ts");
/* harmony import */ var _adminpannel_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminpannel/header/header.component */ "./src/app/adminpannel/header/header.component.ts");
/* harmony import */ var _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adminpannel/countries/countries.component */ "./src/app/adminpannel/countries/countries.component.ts");
/* harmony import */ var _adminpannel_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adminpannel/adminhome/adminhome.component */ "./src/app/adminpannel/adminhome/adminhome.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _ownerpannel_ownerpannel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ownerpannel/ownerpannel.component */ "./src/app/ownerpannel/ownerpannel.component.ts");
/* harmony import */ var _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ownerpannel/vehicles/vehicles.component */ "./src/app/ownerpannel/vehicles/vehicles.component.ts");
/* harmony import */ var _adminpannel_companies_companies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adminpannel/companies/companies.component */ "./src/app/adminpannel/companies/companies.component.ts");
/* harmony import */ var _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./adminpannel/location/location.component */ "./src/app/adminpannel/location/location.component.ts");
/* harmony import */ var _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./adminpannel/adminapprovevehicles/adminapprovevehicles.component */ "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts");
/* harmony import */ var _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./adminpannel/paymentreports/paymentreports.component */ "./src/app/adminpannel/paymentreports/paymentreports.component.ts");
/* harmony import */ var _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./adminpannel/reset-passowrd/reset-passowrd.component */ "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts");
/* harmony import */ var _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ownerpannel/addnew-cars/addnew-cars.component */ "./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts");
/* harmony import */ var _interceptor_jwtinterceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_interceptor/jwtinterceptor */ "./src/app/_interceptor/jwtinterceptor.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./adminpannel/admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var _ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ownerpannel/owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ownerpannel/drivers/drivers.component */ "./src/app/ownerpannel/drivers/drivers.component.ts");
/* harmony import */ var _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ownerpannel/drivers/add-drivers/add-drivers.component */ "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _interceptor_loadinginterceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_interceptor/loadinginterceptor */ "./src/app/_interceptor/loadinginterceptor.ts");
/* harmony import */ var _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ownerpannel/drivers/viewliscence/viewliscence.component */ "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./adminpannel/location/edit-location/edit-location.component */ "./src/app/adminpannel/location/edit-location/edit-location.component.ts");
/* harmony import */ var _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./adminpannel/location/add-location/add-location.component */ "./src/app/adminpannel/location/add-location/add-location.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ownerpannel/edit-cars/edit-cars.component */ "./src/app/ownerpannel/edit-cars/edit-cars.component.ts");
/* harmony import */ var _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./registerpageformarketing/registerpageformarketing.component */ "./src/app/registerpageformarketing/registerpageformarketing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component */ "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts");
/* harmony import */ var _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component */ "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts");
/* harmony import */ var _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component */ "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts");
/* harmony import */ var _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component */ "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts");
/* harmony import */ var _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ownerpannel/drivers/edit-drivers/edit-drivers.component */ "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts");
/* harmony import */ var _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ownerpannel/bankdetails/bankdetails.component */ "./src/app/ownerpannel/bankdetails/bankdetails.component.ts");
/* harmony import */ var _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ownerpannel/bankdetails/add-banks/add-banks.component */ "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts");
/* harmony import */ var _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component */ "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts");
/* harmony import */ var _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ownerpannel/requests/requests.component */ "./src/app/ownerpannel/requests/requests.component.ts");
/* harmony import */ var _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ownerpannel/requests/view-requests/view-requests.component */ "./src/app/ownerpannel/requests/view-requests/view-requests.component.ts");

















// import { AuthGuard } from './_guards/auth.guard';





































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_8__["AdminpannelComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _adminpannel_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
            _adminpannel_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_15__["CountriesComponent"],
            _adminpannel_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_16__["AdminhomeComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
            _ownerpannel_ownerpannel_component__WEBPACK_IMPORTED_MODULE_18__["OwnerpannelComponent"],
            _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_19__["VehiclesComponent"],
            _adminpannel_companies_companies_component__WEBPACK_IMPORTED_MODULE_20__["CompaniesComponent"],
            _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_21__["LocationComponent"],
            _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_22__["AdminapprovevehiclesComponent"],
            _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_23__["PaymentreportsComponent"],
            _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_24__["ResetPassowrdComponent"],
            _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_25__["AddnewCarsComponent"],
            _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_30__["DriversComponent"],
            _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_31__["AddDriversComponent"],
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_32__["LoadingComponent"],
            _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_34__["ViewliscenceComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_35__["ForgotpasswordComponent"],
            _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_36__["EditLocationComponent"],
            _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_37__["AddLocationComponent"],
            _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_38__["ErrorPageComponent"],
            _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_41__["EditCarsComponent"],
            _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_42__["RegisterpageformarketingComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"],
            _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_44__["PulicregistrationmarketingComponent"],
            _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_45__["ViewVehicledetailsComponent"],
            _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_46__["OwnerviewvehiclesComponent"],
            _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_47__["ViewlicsencebackComponent"],
            _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_48__["EditDriversComponent"],
            _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_49__["BankdetailsComponent"],
            _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_50__["AddBanksComponent"],
            _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_51__["EditBankdetailsComponent"],
            _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_52__["RequestsComponent"],
            _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_53__["ViewRequestsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_40__["ToastrModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ],
        providers: [
            // AuthGuard,
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_39__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_39__["HashLocationStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptor_loadinginterceptor__WEBPACK_IMPORTED_MODULE_33__["LoadingScreenInterceptor"], multi: true },
            _login_login_service__WEBPACK_IMPORTED_MODULE_27__["LoginService"], _adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_28__["AdminService"], _ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_29__["OwnerService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptor_jwtinterceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_34__["ViewliscenceComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorPageComponent = class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")).default]
    })
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    width: 126%;\r\n    padding: 94px;\r\n    height:auto;\r\n    margin-top: 10px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n.help-block{\r\n    color: red;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n  background-color: #cccccc;\r\n  color: #666666;\r\n}\r\nh4{\r\n    text-align: center;\r\n}\r\n.page-wrapper{\r\n    /* background: linear-gradient(45deg, #0085B2, #00B3DA);\r\n     */\r\n    /* margin-top: 52px; */\r\n    margin-top: 81px;\r\n\r\n    height:100%;\r\n    background: transparent linear-gradient(301deg, #00B3DA 0%, #0085B2 100%) 0% 0% no-repeat padding-box;\r\n}\r\np{\r\n    text-align: center;\r\n    color: #4D4F5C;\r\n    font-size: 12px;\r\n}\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 370px !important;\r\n}\r\n@media (max-width: 968px)\r\n{\r\n    .card{\r\n        width: 100%;\r\n    }\r\n    ::ng-deep .mat-form-field-infix {\r\n        display: block;\r\n        position: relative;\r\n        flex: auto;\r\n        width: 170px !important;\r\n    }\r\n    .loginbtn{\r\n        width:  100%  !important;\r\n    }\r\n    .signupbtn{\r\n        width:  100%  !important;\r\n    }\r\n}\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\r\n.loginbtn{\r\n    border: none;\r\n    padding: 7px;\r\n    width: 160px;\r\n    color: white;\r\n    background: #009cc6;\r\n}\r\n.signupbtn{\r\n    color: #009cc6;\r\n    background: white;\r\n    border: 1px solid #009cc6;\r\n    padding: 7px;\r\n    width: 160px;\r\n    /* margin-left: 43px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtNQUNFO0lBQ0Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjs7SUFFaEIsV0FBVztJQUNYLHFHQUFxRztBQUN6RztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFFQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAxMjYlO1xyXG4gICAgcGFkZGluZzogOTRweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5idXR0b246ZGlzYWJsZWQsXHJcbmJ1dHRvbltkaXNhYmxlZF17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5oNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnZS13cmFwcGVye1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4NUIyLCAjMDBCM0RBKTtcclxuICAgICAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogNTJweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDgxcHg7XHJcblxyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMzAxZGVnLCAjMDBCM0RBIDAlLCAjMDA4NUIyIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0RDRGNUM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICB3aWR0aDogMzcwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KVxyXG57XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luYnRue1xyXG4gICAgICAgIHdpZHRoOiAgMTAwJSAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaWdudXBidG57XHJcbiAgICAgICAgd2lkdGg6ICAxMDAlICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDsgXHJcbn1cclxuXHJcbi5sb2dpbmJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDljYzY7XHJcbn1cclxuLnNpZ251cGJ0bntcclxuICAgIGNvbG9yOiAjMDA5Y2M2O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Y2M2O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDQzcHg7ICovXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")).default]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper{\r\n    /* margin-top: 50px; */\r\n    background-color: beige;\r\n    height: 100%;\r\n}\r\n::ng-deep .mat-card{\r\n    margin-top: 50% !important;\r\n}\r\nh5{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVye1xyXG4gICAgLyogbWFyZ2luLXRvcDogNTBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5oNXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
    }
    ngOnInit() {
        // this.loginservice.userLogin().subscribe(
        //   data =>{
        //     this.results = data;
        //     localStorage.setItem("userdata",JSON.stringify(this.results));
        //   },
        //   error =>{
        //   }
        // )
    }
    login() {
        this.router.navigate(['/login']);
    }
    register() {
        this.router.navigate(['/register']);
    }
    admin() {
        this.router.navigate(['/admin']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay {\r\n    position:fixed;\r\n    display:block;\r\n    width:100%;\r\n    height:100%;\r\n    top:0;\r\n    left:0px;\r\n    background-color:rgba(192, 181, 181, 0.589);\r\n    align-items: center;\r\n  }\r\n  .spinner {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  /* .loader {\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9999;\r\n   \r\n    opacity: .8;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsS0FBSztJQUNMLFFBQVE7SUFDUiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBOzs7Ozs7Ozs7R0FTQyIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxOTIsIDE4MSwgMTgxLCAwLjU4OSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLyogLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgXHJcbiAgICBvcGFjaXR5OiAuODtcclxufSAqL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ "./src/app/loading/loading.service.ts");



let LoadingComponent = class LoadingComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.showText = 'Loading';
        this.isLoading = this.loaderService.isLoading;
    }
    ngOnInit() {
    }
};
LoadingComponent.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }
];
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/loading/loading.service.ts":
/*!********************************************!*\
  !*** ./src/app/loading/loading.service.ts ***!
  \********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingService = class LoadingService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    width: 126%;\r\n    padding: 94px;\r\n    height:auto;\r\n    margin-top: 10px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n.help-block{\r\n    color: red;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n  background-color: #cccccc;\r\n  color: #666666;\r\n}\r\nh4{\r\n    text-align: center;\r\n}\r\n.page-wrapper{\r\n    /* background: linear-gradient(45deg, #0085B2, #00B3DA);\r\n     */\r\n    /* margin-top: 52px; */\r\n    margin-top: 81px;\r\n\r\n    height:100%;\r\n    background: transparent linear-gradient(301deg, #00B3DA 0%, #0085B2 100%) 0% 0% no-repeat padding-box;\r\n}\r\np{\r\n    text-align: center;\r\n    color: #4D4F5C;\r\n    font-size: 12px;\r\n}\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 370px !important;\r\n}\r\n@media (max-width: 968px)\r\n{\r\n    .card{\r\n        width: 100%;\r\n    }\r\n    ::ng-deep .mat-form-field-infix {\r\n        display: block;\r\n        position: relative;\r\n        flex: auto;\r\n        width: 170px !important;\r\n    }\r\n    .loginbtn{\r\n        width:  100%  !important;\r\n    }\r\n    .signupbtn{\r\n        width:  100%  !important;\r\n    }\r\n}\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\r\n.loginbtn{\r\n    border: none;\r\n    padding: 7px;\r\n    width: 160px;\r\n    color: white;\r\n    background: #009cc6;\r\n}\r\n.signupbtn{\r\n    color: #009cc6;\r\n    background: white;\r\n    border: 1px solid #009cc6;\r\n    padding: 7px;\r\n    width: 160px;\r\n    /* margin-left: 43px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtNQUNFO0lBQ0Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjs7SUFFaEIsV0FBVztJQUNYLHFHQUFxRztBQUN6RztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFFQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAxMjYlO1xyXG4gICAgcGFkZGluZzogOTRweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5idXR0b246ZGlzYWJsZWQsXHJcbmJ1dHRvbltkaXNhYmxlZF17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5oNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnZS13cmFwcGVye1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4NUIyLCAjMDBCM0RBKTtcclxuICAgICAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogNTJweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDgxcHg7XHJcblxyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMzAxZGVnLCAjMDBCM0RBIDAlLCAjMDA4NUIyIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0RDRGNUM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICB3aWR0aDogMzcwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KVxyXG57XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luYnRue1xyXG4gICAgICAgIHdpZHRoOiAgMTAwJSAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaWdudXBidG57XHJcbiAgICAgICAgd2lkdGg6ICAxMDAlICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDsgXHJcbn1cclxuXHJcbi5sb2dpbmJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDljYzY7XHJcbn1cclxuLnNpZ251cGJ0bntcclxuICAgIGNvbG9yOiAjMDA5Y2M2O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Y2M2O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDQzcHg7ICovXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let LoginComponent = class LoginComponent {
    constructor(router, loginservice, toaster, authservice, _snackBar) {
        this.router = router;
        this.loginservice = loginservice;
        this.toaster = toaster;
        this.authservice = authservice;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.userData = {
            usernameOrEmail: '',
            password: '',
            deviceId: 'FFFFXXX'
        };
    }
    ngOnInit() {
    }
    onSubmit(form, formData) {
        // this.submitted = true;
        // this.authservice.login(formData.email,formData.password).pipe(first())
        // .subscribe(
        //     data => {
        //       this.results = data;
        //       console.log(this.results)
        //       this.router.navigate(['/admin']);
        //     },
        //     error => {
        //       this._snackBar.open(error.error.message +''+ '  UNAUTHORIZED USER' );
        //     }
        // )
        console.log(formData);
        this.loginservice.userLogin(formData).subscribe(data => {
            localStorage.setItem('userDetail', JSON.stringify(data));
            localStorage.setItem('token', JSON.stringify(data['accessToken']));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            if (data['roleId'] == '1') {
                localStorage.setItem('ROLE', JSON.stringify('ADMIN'));
                this.router.navigate(['/admin']);
                // this.toaster.success('   Login Successfully');
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Admin Login!', ' Admin Login Successfully', 'success');
            }
            else if (data['roleId'] == '2') {
                localStorage.setItem('ROLE', JSON.stringify('OWNER'));
                this.router.navigate(['/admin']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Owner Login!', ' Owner Login Successfully', 'success');
            }
        }, error => {
            console.log(error);
            // this.toaster.error('Incorrect User Details');
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Invalid Details!', 'Incorrect User Details', 'error');
        });
    }
    register() {
        this.router.navigate(['/register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.BASEURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
    }
    // userLogin()
    // {
    //   return this.http.get(this.LOGIN_DETIALS);
    // }
    userLogin(formData) {
        return this.http.post(this.BASEURL + 'api/auth/admin/signin', formData);
    }
    register(req) {
        return this.http.post(this.BASEURL + 'api/auth/signup', req);
    }
    userpublicregister(data) {
        return this.http.post(this.BASEURL + 'user/addCustomer', data);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header-area .header-social-icons a:hover i.fa, #header-area .mainmenu ul li.active a, #header-area .mainmenu ul li:hover a {\r\n    color: #ffd000;\r\n}\r\n#header-area, #header-area a {\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXItYXJlYSAuaGVhZGVyLXNvY2lhbC1pY29ucyBhOmhvdmVyIGkuZmEsICNoZWFkZXItYXJlYSAubWFpbm1lbnUgdWwgbGkuYWN0aXZlIGEsICNoZWFkZXItYXJlYSAubWFpbm1lbnUgdWwgbGk6aG92ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZDAwMDtcclxufVxyXG4jaGVhZGVyLWFyZWEsICNoZWFkZXItYXJlYSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavigationComponent = class NavigationComponent {
    constructor(router) {
        this.router = router;
        this.isloggedIn = false;
    }
    ngOnInit() {
        this.isloggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    }
    logout() {
        this.isloggedIn = false;
        localStorage.clear();
        this.router.navigate(['/Home']);
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/ownerpannel/addnew-cars/addnew-cars.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/ownerpannel/addnew-cars/addnew-cars.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkbmV3LWNhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUdsQix5QkFBeUI7QUFDN0I7QUFDQTtDQUNDO0lBQ0csaUJBQWlCO0FBQ3JCLENBQUM7QUFDRDtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9hZGRuZXctY2Fycy9hZGRuZXctY2Fycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KVxyXG57LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyODdweDtcclxufX1cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts ***!
  \******************************************************************/
/*! exports provided: AddnewCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewCarsComponent", function() { return AddnewCarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/vehicle */ "./src/app/_models/vehicle.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let AddnewCarsComponent = class AddnewCarsComponent {
    constructor(fb, router, toaster, owenerservice) {
        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.locations = [];
        this.submitted = false;
        this.driverslist = [];
    }
    ngOnInit() {
        this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]();
        this.vehicleModel.locality = '';
        this.vehicleModel.vehicleType = '';
        this.vehicleModel.driver = '';
        this.addVehiclesform = this.fb.group({
            vehicleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleRegistration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            liscencefrnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            liscenceback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rcbook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driver: [''],
            dRent: [''],
            vRentperHr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vRentperKm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
        this.ownerId = this.ownerdetails['userId'];
        console.log(this.ownerId);
        this.getalllocality();
        this.getalldrivers();
    }
    getalldrivers() {
        this.owenerservice.getalldrivers(this.ownerId).subscribe(data => {
            this.driverslist = data;
            console.log(this.driverslist);
        }, error => {
        });
    }
    getalllocality() {
        this.owenerservice.getalllocality().subscribe(data => {
            console.log(data);
            this.locations = data;
        }, error => {
        });
    }
    addrcimage(event) {
        this.files = event.target.files;
        this.rcproof = this.files.item(0);
    }
    addimage1(event) {
        this.img1 = event.target.files;
        this.image1 = this.img1.item(0);
    }
    addimage2(event) {
        this.img2 = event.target.files;
        this.image2 = this.img2.item(0);
    }
    addliscensefrnt(event) {
        this.lisence1 = event.target.files;
        this.lisencefrnt = this.lisence1.item(0);
    }
    addliscenseback(event) {
        this.lisence2 = event.target.files;
        this.lisenceback = this.lisence2.item(0);
    }
    get f() { return this.addVehiclesform.controls; }
    submit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addVehiclesform.invalid) {
            return;
        }
        else {
            this.formData.append('type', this.vehicleModel.vehicleType);
            this.formData.append('companyName', this.vehicleModel.vehicleCompany);
            this.formData.append('model', this.vehicleModel.vehicleModel);
            this.formData.append('year', this.vehicleModel.vehicleYear);
            this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
            this.formData.append('locality', this.vehicleModel.locality);
            this.formData.append('rentPerDay', this.vehicleModel.rent);
            this.formData.append('ownerId', this.ownerId);
            this.formData.append('licenceFront', this.lisencefrnt);
            this.formData.append('licenceBack', this.lisenceback);
            this.formData.append('rcImage', this.rcproof);
            this.formData.append('image1', this.image1);
            this.formData.append('image2', this.image2);
            this.formData.append('driverId', this.vehicleModel.driver);
            this.formData.append('driverRentPerKM', this.vehicleModel.dRent);
            this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
            this.formData.append('rentPerHour', this.vehicleModel.vRentperHr);
            console.log(this.formData);
            this.owenerservice.addnewvehicle(this.formData).subscribe(data => {
                // Swal.fire({
                //   title: 'Are you sure?',
                //   text: 'You will not be able to recover this imaginary file!',
                //   icon: 'success',
                //   showCancelButton: true,
                //   confirmButtonText: 'Ok',
                // }).then((result) => {
                //   if (result.value) {
                //     Swal.fire(
                //       'Vehicle Added!',
                //       'Vehicle Added Successfully',
                //       'success'
                //     )
                //   this.router.navigate(['/vehicles']);
                //   } 
                // })
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Added!', 'Vehicle Added Successfully', 'success');
                this.router.navigate(['/vehicles']);
            }, error => {
                // alert('error')
                this.error = error.error['message'];
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add Vehicle!', this.error, 'error');
                // this.toaster.error(this.error)
                this.formData.delete;
            });
        }
    }
    clicks() {
    }
};
AddnewCarsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"] }
];
AddnewCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addnew-cars',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addnew-cars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addnew-cars.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addnew-cars.component.css */ "./src/app/ownerpannel/addnew-cars/addnew-cars.component.css")).default]
    })
], AddnewCarsComponent);



/***/ }),

/***/ "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvYWRkLWJhbmtzL2FkZC1iYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2JhbmtkZXRhaWxzL2FkZC1iYW5rcy9hZGQtYmFua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddBanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBanksComponent", function() { return AddBanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/bank */ "./src/app/_models/bank.ts");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let AddBanksComponent = class AddBanksComponent {
    constructor(fb, router, ownerservice) {
        this.fb = fb;
        this.router = router;
        this.ownerservice = ownerservice;
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
        this.submitted = false;
        this.formData = new FormData();
        this.userDetails = [];
    }
    ngOnInit() {
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
        this.addBankForm = this.fb.group({
            acocuntholderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ifscode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
        console.log(this.userDetails);
        this.bankModel.ownerId = this.userDetails['userId'];
    }
    get f() { return this.addBankForm.controls; }
    submit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addBankForm.invalid) {
            return;
        }
        else {
            this.formData.append('accountHolderName', this.bankModel.acocuntholderName);
            this.formData.append('accountNumber ', this.bankModel.accountNumber);
            this.formData.append('ifscCode', this.bankModel.ifscode);
            this.formData.append('bankName', this.bankModel.bankName);
            this.formData.append('ownerId', this.bankModel.ownerId);
            this.ownerservice.addbanks(this.formData).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Bank Details Added!', 'Bank Details Added Successfully', 'success');
                this.router.navigate(['/bankdetails']);
            }, error => {
            });
        }
    }
};
AddBanksComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"] }
];
AddBanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-banks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-banks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-banks.component.css */ "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.css")).default]
    })
], AddBanksComponent);



/***/ }),

/***/ "./src/app/ownerpannel/bankdetails/bankdetails.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/ownerpannel/bankdetails/bankdetails.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvYmFua2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUdsQix5QkFBeUI7QUFDN0I7QUFDQTtDQUNDO0lBQ0csaUJBQWlCO0FBQ3JCLENBQUM7QUFDRDtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9iYW5rZGV0YWlscy9iYW5rZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KVxyXG57LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyODdweDtcclxufX1cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ownerpannel/bankdetails/bankdetails.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ownerpannel/bankdetails/bankdetails.component.ts ***!
  \******************************************************************/
/*! exports provided: BankdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankdetailsComponent", function() { return BankdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/adminpannel/admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var src_app_models_bank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/bank */ "./src/app/_models/bank.ts");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../owner.service */ "./src/app/ownerpannel/owner.service.ts");







let BankdetailsComponent = class BankdetailsComponent {
    // constructor(private adminpannel:AdminService,private router:Router) { }
    constructor(adminpannel, fb, router, ownerservice) {
        this.adminpannel = adminpannel;
        this.fb = fb;
        this.router = router;
        this.ownerservice = ownerservice;
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_5__["Bank"]();
        this.arr = [];
    }
    ngOnInit() {
        this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
        console.log(this.userDetails);
        this.addBankForm = this.fb.group({
            acocuntholderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ifscode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getbankdetails();
        // this.bankModel.ownerId = this.userDetails['userId'];
    }
    getbankdetails() {
        this.adminpannel.getbankdetails(this.userDetails['userId']).subscribe(data => {
            console.log(data);
            this.results = data;
            this.arr.push(this.results);
            console.log(this.arr.length);
            this.bankModel.accountNumber = this.results['accountNumber'];
            this.bankModel.acocuntholderName = this.results['accountHolderName'];
            this.bankModel.ifscode = this.results['ifscCode'];
            this.bankModel.bankName = this.results['bankName'];
            // this.dataSource.data = this.results;
        }, error => {
        });
    }
    edit() {
        sessionStorage.setItem('bankDetails', JSON.stringify(this.results));
        this.router.navigate(['/edit-bankdetails']);
    }
};
BankdetailsComponent.ctorParameters = () => [
    { type: src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"] }
];
BankdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bankdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/bankdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bankdetails.component.css */ "./src/app/ownerpannel/bankdetails/bankdetails.component.css")).default]
    })
], BankdetailsComponent);



/***/ }),

/***/ "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvZWRpdC1iYW5rZGV0YWlscy9lZGl0LWJhbmtkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCO0FBQ0E7Q0FDQztJQUNHLGlCQUFpQjtBQUNyQixDQUFDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvZWRpdC1iYW5rZGV0YWlscy9lZGl0LWJhbmtkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXHJcbnsuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG59fVxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditBankdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBankdetailsComponent", function() { return EditBankdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/bank */ "./src/app/_models/bank.ts");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let EditBankdetailsComponent = class EditBankdetailsComponent {
    constructor(fb, router, ownerservice) {
        this.fb = fb;
        this.router = router;
        this.ownerservice = ownerservice;
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
        this.submitted = false;
        this.formData = new FormData();
        this.bankDetails = [];
    }
    ngOnInit() {
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
        this.addBankForm = this.fb.group({
            acocuntholderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ifscode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.bankDetails = JSON.parse(sessionStorage.getItem('bankDetails'));
        this.bankModel.accountNumber = this.bankDetails['accountNumber'];
        this.bankModel.acocuntholderName = this.bankDetails['accountHolderName'];
        this.bankModel.ifscode = this.bankDetails['ifscCode'];
        this.bankModel.bankName = this.bankDetails['bankName'];
        this.bankModel.bankId = this.bankDetails['id'];
        this.bankModel.ownerId = this.bankDetails['ownerId'];
    }
    submit() {
        this.ownerservice.updateBank(this.bankModel.bankId, this.bankModel.ownerId, this.bankModel.acocuntholderName, this.bankModel.accountNumber, this.bankModel.ifscode, this.bankModel.bankName).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Bank Details Update!', 'Bank Details Updated Successfully', 'success');
            this.router.navigate(['/bankdetails']);
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unable to Update Bank Details !', 'Bank Details Updated UnSuccessfull', 'error');
        });
    }
};
EditBankdetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"] }
];
EditBankdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-bankdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-bankdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-bankdetails.component.css */ "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.css")).default]
    })
], EditBankdetailsComponent);



/***/ }),

/***/ "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9hZGQtZHJpdmVycy9hZGQtZHJpdmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvYWRkLWRyaXZlcnMvYWRkLWRyaXZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddDriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriversComponent", function() { return AddDriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/driver */ "./src/app/_models/driver.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let AddDriversComponent = class AddDriversComponent {
    constructor(ownerservice, toaster, fb, router) {
        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
    }
    ngOnInit() {
        this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__["Driver"]();
        this.driverForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pancard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            liscencefrnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            liscenceback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            propic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
        this.ownerId = this.ownerdetails['userId'];
    }
    get f() { return this.driverForm.controls; }
    addliscensefrnt(event) {
        this.lisence1 = event.target.files;
        this.lisencefrnt = this.lisence1.item(0);
    }
    addliscenseback(event) {
        this.lisence2 = event.target.files;
        this.lisenceback = this.lisence2.item(0);
    }
    addprofilepic(event) {
        this.propicfile = event.target.files;
        this.propic = this.propicfile.item(0);
    }
    submit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.driverForm.invalid) {
            return;
        }
        else {
            this.formData.append('name', this.driverModel.name);
            this.formData.append('ownerId', this.ownerId);
            this.formData.append('number', this.driverModel.number);
            this.formData.append('addresss', this.driverModel.address);
            this.formData.append('panCardNO', this.driverModel.pancard);
            this.formData.append('proPic', this.propic);
            this.formData.append('licenceFront', this.lisencefrnt);
            this.formData.append('licenceBack', this.lisenceback);
            this.ownerservice.addnewdriver(this.formData).subscribe(data => {
                // this.toaster.success('Driver Added Successfully')
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Driver Added!', 'Driver Added Successfully', 'success');
                this.router.navigate(['/drivers']);
            }, error => {
                // alert('error')
                this.error = error.error['message'];
                // this.toaster.error(this.error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Add driver!', this.error, 'error');
                this.formData.delete;
            });
        }
    }
};
AddDriversComponent.ctorParameters = () => [
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddDriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-drivers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-drivers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-drivers.component.css */ "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.css")).default]
    })
], AddDriversComponent);



/***/ }),

/***/ "./src/app/ownerpannel/drivers/drivers.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ownerpannel/drivers/drivers.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    /* margin-top: 100px; */\r\n}\r\nimg {\r\n    max-width: 87%;\r\n    height: auto;\r\n}\r\n::ng-deep .mat-card{\r\n    margin-top: 5px !important;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    border-bottom: 3px solid #ffbd01;\r\n  }\r\nli {\r\n    float: left;\r\n  }\r\nli a {\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n.avatar {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtBQUdBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTAwcHg7ICovXHJcbn1cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmJkMDE7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5hdmF0YXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/ownerpannel/drivers/drivers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ownerpannel/drivers/drivers.component.ts ***!
  \**********************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewliscence/viewliscence.component */ "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts");
/* harmony import */ var _viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewlicsenceback/viewlicsenceback.component */ "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts");









let DriversComponent = class DriversComponent {
    constructor(router, dialog, ownerservice, domsanitizer) {
        this.router = router;
        this.dialog = dialog;
        this.ownerservice = ownerservice;
        this.domsanitizer = domsanitizer;
        this.driverslist = [];
    }
    ngOnInit() {
        this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
        this.ownerId = this.ownerdetails['userId'];
        this.apUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].BASEURL;
        this.getallsdriver();
        this.contents = undefined;
    }
    getallsdriver() {
        this.ownerservice.getalldrivers(this.ownerId).subscribe(data => {
            console.log(data);
            this.driverslist = data;
        }, error => {
        });
    }
    getlicsence(id) {
        // console.log(id)
        // this.Id = id
        // this.ownerservice.getliscncefront(id).subscribe(
        //   data =>{
        //     var unnsafeimage = URL.createObjectURL(data);
        //     console.log(unnsafeimage)
        //     this.liscenimag = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        //     window.open(this.liscenimag,"_blank")
        //   },
        //   error =>{
        //   }
        // );
        const dialogRef = this.dialog.open(_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_7__["ViewliscenceComponent"], {
            width: '400px',
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result closed`);
        });
    }
    getlicsenceback(id) {
        const dialogRef = this.dialog.open(_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_8__["ViewlicsencebackComponent"], {
            width: '400px',
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result closed`);
        });
    }
    // this.router.navigate(['/view-licsense',id]);
    //   createImageFromBlob(image: Blob) {
    //     let reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //        this.imageToShow = reader.result;
    //        console.log(this.imageToShow)
    //     }, false);
    //     if (image) {
    //        reader.readAsDataURL(image);
    //     }
    //  }
    //  getImageFromService() {
    //   this.ownerservice.getliscncefront(this.Id).subscribe(data => {
    //     this.createImageFromBlob(data);
    //   }, error => {
    //     console.log(error);
    //   });
    // }
    edit(e) {
        console.log(e.id);
        sessionStorage.setItem("driverId", e.id);
        this.router.navigate(['/editdrivers']);
    }
};
DriversComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drivers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drivers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/drivers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drivers.component.css */ "./src/app/ownerpannel/drivers/drivers.component.css")).default]
    })
], DriversComponent);



/***/ }),

/***/ "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9lZGl0LWRyaXZlcnMvZWRpdC1kcml2ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCO0FBQ0E7Q0FDQztJQUNHLGlCQUFpQjtBQUNyQixDQUFDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9lZGl0LWRyaXZlcnMvZWRpdC1kcml2ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXHJcbnsuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG59fVxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditDriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDriversComponent", function() { return EditDriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_models_driver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/driver */ "./src/app/_models/driver.ts");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");







let EditDriversComponent = class EditDriversComponent {
    constructor(ownerservice, toaster, fb, router) {
        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
    }
    ngOnInit() {
        this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_5__["Driver"]();
        this.driverForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pancard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            liscencefrnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            liscenceback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            propic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
        this.ownerId = this.ownerdetails['userId'];
        this.driverId = sessionStorage.getItem('driverId');
        this.getdriverDetailByDriverId();
    }
    getdriverDetailByDriverId() {
        this.ownerservice.getDriverDetailsBydriverId(this.driverId).subscribe(data => {
            this.results = data;
            this.driverModel.name = this.results['name'];
            this.driverModel.address = this.results['addresss'];
            this.driverModel.number = this.results['number'];
            this.driverModel.pancard = this.results['panCardNO'];
            console.log(data);
        }, error => {
        });
    }
    get f() { return this.driverForm.controls; }
    addliscensefrnt(event) {
        this.lisence1 = event.target.files;
        this.lisencefrnt = this.lisence1.item(0);
    }
    addliscenseback(event) {
        this.lisence2 = event.target.files;
        this.lisenceback = this.lisence2.item(0);
    }
    addprofilepic(event) {
        this.propicfile = event.target.files;
        this.propic = this.propicfile.item(0);
    }
    submit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.driverForm.invalid) {
            return;
        }
        else {
            this.formData.append('name', this.driverModel.name);
            this.formData.append('ownerId', this.ownerId);
            this.formData.append('number', this.driverModel.number);
            this.formData.append('addresss', this.driverModel.address);
            this.formData.append('panCardNO', this.driverModel.pancard);
            this.formData.append('proPic', this.propic);
            this.formData.append('licenceFront', this.lisencefrnt);
            this.formData.append('licenceBack', this.lisenceback);
            this.formData.append('id', this.driverId);
            this.ownerservice.editdrivers(this.formData).subscribe(data => {
                this.toaster.success('Driver updated Successfully');
                this.router.navigate(['/drivers']);
            }, error => {
                // alert('error')
                this.error = error.error['message'];
                this.toaster.error(this.error);
                this.formData.delete;
            });
        }
    }
};
EditDriversComponent.ctorParameters = () => [
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditDriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-drivers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-drivers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-drivers.component.css */ "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.css")).default]
    })
], EditDriversComponent);



/***/ }),

/***/ "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy92aWV3bGljc2VuY2ViYWNrL3ZpZXdsaWNzZW5jZWJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvdmlld2xpY3NlbmNlYmFjay92aWV3bGljc2VuY2ViYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewlicsencebackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewlicsencebackComponent", function() { return ViewlicsencebackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");







let ViewlicsencebackComponent = class ViewlicsencebackComponent {
    constructor(acttivatrouter, http, dialogRef, domsanitizer, data, onerservice) {
        this.acttivatrouter = acttivatrouter;
        this.http = http;
        this.dialogRef = dialogRef;
        this.domsanitizer = domsanitizer;
        this.data = data;
        this.onerservice = onerservice;
        console.log(data);
        this.id = data;
    }
    ngOnInit() {
        this.getlicsence();
    }
    getlicsence() {
        // console.log(id)
        // this.Id = id
        this.onerservice.getlicscenceback(this.id).subscribe(data => {
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.liscenimag = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
            // window.open(this.liscenimag,"_blank")
        }, error => {
        });
    }
    close() {
        this.dialogRef.close();
    }
};
ViewlicsencebackComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"] }
];
ViewlicsencebackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-viewlicsenceback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewlicsenceback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewlicsenceback.component.css */ "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ViewlicsencebackComponent);



/***/ }),

/***/ "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy92aWV3bGlzY2VuY2Uvdmlld2xpc2NlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9kcml2ZXJzL3ZpZXdsaXNjZW5jZS92aWV3bGlzY2VuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewliscenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewliscenceComponent", function() { return ViewliscenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let ViewliscenceComponent = class ViewliscenceComponent {
    constructor(acttivatrouter, http, dialogRef, domsanitizer, data, onerservice) {
        this.acttivatrouter = acttivatrouter;
        this.http = http;
        this.dialogRef = dialogRef;
        this.domsanitizer = domsanitizer;
        this.data = data;
        this.onerservice = onerservice;
        console.log(data);
        this.id = data;
    }
    ngOnInit() {
        this.getlicsence();
    }
    getlicsence() {
        // console.log(id)
        // this.Id = id
        this.onerservice.getliscncefront(this.id).subscribe(data => {
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.liscenimag = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
            // window.open(this.liscenimag,"_blank")
        }, error => {
        });
    }
    close() {
        this.dialogRef.close();
    }
};
ViewliscenceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"] }
];
ViewliscenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewliscence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewliscence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewliscence.component.css */ "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], ViewliscenceComponent);



/***/ }),

/***/ "./src/app/ownerpannel/edit-cars/edit-cars.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ownerpannel/edit-cars/edit-cars.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZWRpdC1jYXJzL2VkaXQtY2Fycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2VkaXQtY2Fycy9lZGl0LWNhcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ownerpannel/edit-cars/edit-cars.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ownerpannel/edit-cars/edit-cars.component.ts ***!
  \**************************************************************/
/*! exports provided: EditCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCarsComponent", function() { return EditCarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/vehicle */ "./src/app/_models/vehicle.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let EditCarsComponent = class EditCarsComponent {
    constructor(fb, router, toaster, activaterouter, owenerservice) {
        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.activaterouter = activaterouter;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.locations = [];
        this.driverslist = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_3__["Vehicle"]();
        this.vehicleModel.locality = '';
        this.vehicleModel.vehicleType = '';
        this.vehicleModel.driver = '';
        this.addVehiclesform = this.fb.group({
            vehicleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleRegistration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            liscencefrnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            liscenceback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rcbook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driver: [''],
            dRent: [''],
            vRentperHr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vRentperKm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
        this.ownerId = this.ownerdetails['userId'];
        console.log(this.ownerId);
        this.activaterouter.params.subscribe(params => {
            this.vehicleId = params.id;
        });
        this.getvehiclesDetailsById();
        this.getalllocality();
        this.getalldrivers();
    }
    getvehiclesDetailsById() {
        this.owenerservice.getvehiclesDetailsById(this.vehicleId).subscribe(data => {
            this.results = data;
            this.vehicleModel.vehicleCompany = this.results['companyName'];
            this.vehicleModel.vehicleType = this.results['type'];
            this.vehicleModel.vehicleModel = this.results['model'];
            this.vehicleModel.vehicleRegistration = this.results['numberPlate'];
            this.vehicleModel.rent = this.results['rentPerDay'];
            this.vehicleModel.locality = this.results['locality'];
            this.vehicleModel.vehicleYear = this.results['year'];
            this.vehicleModel.vRentperHr = this.results['rentPerHour'];
            this.vehicleModel.vRentperKm = this.results['rentPerKM'];
            if (this.results['driverId'] != null) {
                this.vehicleModel.driver = this.results['driverId'];
                this.vehicleModel.dRent = this.results['driverRentPerKM'];
            }
            else {
                this.vehicleModel.driver = '';
            }
        }, error => {
        });
    }
    getalldrivers() {
        this.owenerservice.getalldrivers(this.ownerId).subscribe(data => {
            this.driverslist = data;
            console.log(this.driverslist);
        }, error => {
        });
    }
    getalllocality() {
        this.owenerservice.getalllocality().subscribe(data => {
            console.log(data);
            this.locations = data;
        }, error => {
        });
    }
    addrcimage(event) {
        this.files = event.target.files;
        this.rcproof = this.files.item(0);
    }
    addimage1(event) {
        this.img1 = event.target.files;
        this.image1 = this.img1.item(0);
    }
    addimage2(event) {
        this.img2 = event.target.files;
        this.image2 = this.img2.item(0);
    }
    addliscensefrnt(event) {
        this.lisence1 = event.target.files;
        this.lisencefrnt = this.lisence1.item(0);
    }
    addliscenseback(event) {
        this.lisence2 = event.target.files;
        this.lisenceback = this.lisence2.item(0);
    }
    get f() { return this.addVehiclesform.controls; }
    submit() {
        this.submitted = true;
        if (this.addVehiclesform.invalid) {
            console.log(this.addVehiclesform.value);
            return;
        }
        else {
            this.formData.append('type', this.vehicleModel.vehicleType);
            this.formData.append('companyName', this.vehicleModel.vehicleCompany);
            this.formData.append('model', this.vehicleModel.vehicleModel);
            this.formData.append('year', this.vehicleModel.vehicleYear);
            this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
            this.formData.append('locality', this.vehicleModel.locality);
            this.formData.append('rentPerDay', this.vehicleModel.rent);
            this.formData.append('ownerId', this.ownerId);
            this.formData.append('licenceFront', this.lisencefrnt);
            this.formData.append('licenceBack', this.lisenceback);
            this.formData.append('rcImage', this.rcproof);
            this.formData.append('image1', this.image1);
            this.formData.append('image2', this.image2);
            this.formData.append('driverId', this.vehicleModel.driver);
            this.formData.append('id', this.vehicleId);
            this.formData.append('driverRentPerKM', this.vehicleModel.dRent);
            this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
            this.formData.append('rentPerHour', this.vehicleModel.vRentperHr);
            this.owenerservice.editvehicle(this.formData).subscribe(data => {
                // this.toaster.success('Vehicle Updated Successfully');
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Updated!', 'Vehicle Updated Successfully', 'success');
                this.router.navigate(['/vehicles']);
            }, error => {
                this.error = error.error['message'];
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Update Vehicle!', this.error, 'error');
                this.formData.delete;
            });
        }
    }
};
EditCarsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"] }
];
EditCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-cars',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-cars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/edit-cars/edit-cars.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-cars.component.css */ "./src/app/ownerpannel/edit-cars/edit-cars.component.css")).default]
    })
], EditCarsComponent);



/***/ }),

/***/ "./src/app/ownerpannel/owner.service.ts":
/*!**********************************************!*\
  !*** ./src/app/ownerpannel/owner.service.ts ***!
  \**********************************************/
/*! exports provided: OwnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerService", function() { return OwnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let OwnerService = class OwnerService {
    constructor(http) {
        this.http = http;
        this.BASEURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL;
    }
    getalllocality() {
        return this.http.get(this.BASEURL + 'admin/listLocality');
    }
    getallcars(id) {
        return this.http.get(this.BASEURL + 'vehicle/list?ownerId=' + id + '&page=0&size=100');
    }
    addnewvehicle(formdata) {
        return this.http.post(this.BASEURL + 'vehicle/add', formdata);
    }
    editvehicle(formdata) {
        return this.http.put(this.BASEURL + 'vehicle/update', formdata);
    }
    getalldrivers(id) {
        return this.http.get(this.BASEURL + 'driver/list?ownerId=' + id + '&type=1&page=0&size=50');
    }
    addnewdriver(formdata) {
        return this.http.post(this.BASEURL + 'driver/add', formdata);
    }
    editdrivers(formdata) {
        return this.http.post(this.BASEURL + 'driver/update', formdata);
    }
    getDriverDetailsBydriverId(id) {
        return this.http.get(this.BASEURL + 'driver/get/' + id);
    }
    getliscncefront(id) {
        // var headers = new Headers();
        // headers.append('Content-Type', 'image/jpeg');
        // return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id);
        //  .pipe(
        //       map( res =>{
        //         console.log(res)
        //       }));
        // let token = JSON.parse(localStorage.getItem('token'));
        // var headers_object = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //    'Authorization': "Bearer "+token
        //   });
        //   const httpOptions = {
        //     headers: headers_object
        //   };
        //   let url =this.BASEURL + 'driver/getLicenceFront/' + id;
        // //   console.log(url);
        let token = JSON.parse(localStorage.getItem('token'));
        const httpoptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer' + '' + token }) };
        return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id, { headers: httpoptions.headers, responseType: 'blob' });
    }
    getlicscenceback(id) {
        let token = JSON.parse(localStorage.getItem('token'));
        const httpoptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer' + '' + token }) };
        return this.http.get(this.BASEURL + 'driver/getLicenceBack/' + id, { headers: httpoptions.headers, responseType: 'blob' });
    }
    getvehiclesDetailsById(id) {
        return this.http.get(this.BASEURL + 'vehicle/get/' + id);
    }
    addbanks(data) {
        return this.http.post(this.BASEURL + 'owner/addBankDetails', data);
    }
    updateBank(id, ownerId, ahName, aNumber, ifsc, bankName) {
        let req = {};
        return this.http.put(this.BASEURL + 'owner/updateBankDetails?id=' + id + '&ownerId=' + ownerId + '&accountHolderName=' + ahName + '&accountNumber=' + aNumber + '&ifscCode=' + ifsc + '&bankName=' + bankName, req);
    }
    getFilterOptionsVehicles(status, id) {
        return this.http.get(this.BASEURL + 'vehicle/listApprovalStatusForOwner?ownerId=' + id + '&status=' + status + '&page=0&size=100');
    }
    getallRequestfromUserBsedonStatus(id, status) {
        return this.http.get(this.BASEURL + 'trip/listForOwnerByApprovalStatus?ownerId=' + id + '&status=' + status);
    }
    getapprovalDetaislById(id) {
        return this.http.get(this.BASEURL + 'trip/getForOwnerByApprovalStatus/' + id);
    }
    approveRequest(req) {
        return this.http.post(this.BASEURL + 'trip/setApproval', req);
    }
};
OwnerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OwnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OwnerService);



/***/ }),

/***/ "./src/app/ownerpannel/ownerpannel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ownerpannel/ownerpannel.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\n.service-item\r\n{\r\n    border-radius: 17px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    padding-top: 143px;\r\n}\r\n.service-item {\r\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);\r\n    color: #222;\r\n    margin-bottom: 30px;\r\n    padding: 17px 25px;\r\n}\r\n.service-item h3{\r\n    color: #000;\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    text-transform: none;\r\n    margin: 20px 0 15px;\r\n}\r\n.section-padding {\r\n    padding: 36px 0;\r\n}\r\n.page-wrapper{\r\n    margin-left: 221px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvb3duZXJwYW5uZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvb3duZXJwYW5uZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW1cclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNDNweDtcclxufVxyXG4uc2VydmljZS1pdGVtIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTdweCAyNXB4O1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW0gaDN7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMzZweCAwO1xyXG59XHJcbi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIxcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ownerpannel/ownerpannel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ownerpannel/ownerpannel.component.ts ***!
  \******************************************************/
/*! exports provided: OwnerpannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerpannelComponent", function() { return OwnerpannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OwnerpannelComponent = class OwnerpannelComponent {
    constructor() { }
    ngOnInit() {
    }
};
OwnerpannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ownerpannel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ownerpannel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/ownerpannel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ownerpannel.component.css */ "./src/app/ownerpannel/ownerpannel.component.css")).default]
    })
], OwnerpannelComponent);



/***/ }),

/***/ "./src/app/ownerpannel/requests/requests.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ownerpannel/requests/requests.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.card{\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.card{\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\t/* margin-left: 230px; */\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsT0FBTztDQUNQLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi8qIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSAqL1xyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4uY2FyZHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciB7XHJcblx0bGVmdDogMDtcclxuXHQvKiBtYXJnaW4tbGVmdDogMjMwcHg7ICovXHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tdGFibGUgdHIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogMCAwIDNweCAjZTVlNWU1O1xyXG59XHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Ym9keSA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Zm9vdCA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG5cdHBhZGRpbmc6IDEwcHggOHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MzUuIExvY2sgU2NyZWVuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5sb2NrLXVzZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxvY2stdXNlciBpbWcge1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4udGFibGUuY3VzdG9tLXRhYmxlPiB0Ym9keSA+IHRyID4gdGR7XHJcblxyXG5cdHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ownerpannel/requests/requests.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ownerpannel/requests/requests.component.ts ***!
  \************************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let RequestsComponent = class RequestsComponent {
    constructor(ownerService, router) {
        this.ownerService = ownerService;
        this.router = router;
        this.PENDING = '2';
        this.APPROVED = '1';
        this.REJECTED = '3';
        this.results = [];
        this.formData = new FormData();
    }
    ngOnInit() {
        this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
        this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
        this.ownerId = this.ownerdetails['userId'];
        this.getallPendingdata();
    }
    tabClick(event) {
        if (event.index == 0) {
            console.log('PENDING');
            this.getallPendingdata();
        }
        else if (event.index == 1) {
            console.log('approved');
            this.getallApprovedData();
        }
        else if (event.index == 2) {
            console.log('rejected');
            this.getallrejectedData();
        }
    }
    getallPendingdata() {
        this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.PENDING).subscribe(data => {
            this.results = data;
        }, error => {
        });
    }
    getallApprovedData() {
        this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.APPROVED).subscribe(data => {
            this.results = data;
        }, error => {
        });
    }
    getallrejectedData() {
        this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.REJECTED).subscribe(data => {
            this.results = data;
        }, error => {
        });
    }
    view(s) {
        this.router.navigate(['view-request', s.id, s.customerName]);
    }
    approve(s) {
        console.log(s.id);
        let status = "1";
        this.formData.append("tripId", s.id);
        this.formData.append("status", status);
        this.ownerService.approveRequest(this.formData).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Request Approved!', 'Request Approved Successfully', 'success');
            this.ngOnInit();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Unable to approve request!', 'Unable to approve request Successfully', 'error');
        });
    }
    reject(s) {
        console.log(s.id);
        let status = "3";
        this.formData.append("tripId", s.id);
        this.formData.append("status", status);
        this.ownerService.approveRequest(this.formData).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Request Rejected!', 'Request Rejected Successfully', 'success');
            this.ngOnInit();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Unable to reject request!', 'Unable to reject request Successfully', 'error');
        });
    }
};
RequestsComponent.ctorParameters = () => [
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./requests.component.css */ "./src/app/ownerpannel/requests/requests.component.css")).default]
    })
], RequestsComponent);



/***/ }),

/***/ "./src/app/ownerpannel/requests/view-requests/view-requests.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/ownerpannel/requests/view-requests/view-requests.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    /* margin-top: 100px; */\r\n    margin-top: 106px;\r\n}\r\n.card{\r\n    padding: 20px;\r\n}\r\nh4{\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvcmVxdWVzdHMvdmlldy1yZXF1ZXN0cy92aWV3LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9yZXF1ZXN0cy92aWV3LXJlcXVlc3RzL3ZpZXctcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwNnB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5oNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/ownerpannel/requests/view-requests/view-requests.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ownerpannel/requests/view-requests/view-requests.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestsComponent", function() { return ViewRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");




let ViewRequestsComponent = class ViewRequestsComponent {
    constructor(activaterouter, router, ownerservice) {
        this.activaterouter = activaterouter;
        this.router = router;
        this.ownerservice = ownerservice;
    }
    ngOnInit() {
        this.activaterouter.params.subscribe(params => {
            console.log(params.id, params.name);
            this.customerName = params.name;
            this.cId = params.id;
        });
        this.getDetails();
    }
    getDetails() {
        this.ownerservice.getapprovalDetaislById(this.cId).subscribe(data => {
            this.results = data;
            this.startingLocation = this.results['startingLocation'];
            this.destinationLocation = this.results['destinationLocation'];
            this.requestedDate = this.results['requestedDate'];
            this.companyName = this.results.vehicleForm['companyName'];
            this.model = this.results.vehicleForm['model'];
            this.numberPlate = this.results.vehicleForm['numberPlate'];
            this.rentPerDay = this.results.vehicleForm['rentPerDay'];
        }, error => {
        });
    }
    close() {
        this.router.navigate(['/request']);
    }
};
ViewRequestsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"] }
];
ViewRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/view-requests/view-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-requests.component.css */ "./src/app/ownerpannel/requests/view-requests/view-requests.component.css")).default]
    })
], ViewRequestsComponent);



/***/ }),

/***/ "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-wrapper{\r\n    margin-left: 236px;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n}\r\n\r\n.detailsheading{\r\n    float: right;\r\n}\r\n\r\n.detailsheading1{\r\n    float: left;\r\n}\r\n\r\nmat-card{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    \r\n}\r\n\r\n.row\r\n{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.card{\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCOztBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmRldGFpbHNoZWFkaW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5kZXRhaWxzaGVhZGluZzF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgXHJcbn1cclxuLnJvd1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OwnerviewvehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerviewvehiclesComponent", function() { return OwnerviewvehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/adminpannel/admin.service */ "./src/app/adminpannel/admin.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_models/vehicle */ "./src/app/_models/vehicle.ts");







let OwnerviewvehiclesComponent = class OwnerviewvehiclesComponent {
    constructor(adminService, domsanitizer, owenerservice) {
        this.adminService = adminService;
        this.domsanitizer = domsanitizer;
        this.owenerservice = owenerservice;
        this.DriverDetailsofCar = [];
    }
    ngOnInit() {
        this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_6__["Vehicle"]();
        this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
        this.vId = sessionStorage.getItem('vID');
        console.log(this.vId);
        this.getimage2();
        this.getvehicleDetailsByid();
        this.getlicencefrnt();
        this.getlicscenceback();
        this.getrc();
        this.getvehicleDetailsById();
    }
    getimage2() {
        this.adminService.getimage(this.vId).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.vehicleimage2 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getvehicleDetailsByid() {
        this.owenerservice.getvehiclesDetailsById(this.vId).subscribe(data => {
            this.results = data;
            this.vehicleModel.vehicleCompany = this.results['companyName'];
            this.vehicleModel.vehicleType = this.results['type'];
            this.vehicleModel.vehicleModel = this.results['model'];
            this.vehicleModel.vehicleRegistration = this.results['numberPlate'];
            this.vehicleModel.rent = this.results['rentPerDay'];
            this.vehicleModel.locality = this.results['locality'];
            this.vehicleModel.vehicleYear = this.results['year'];
            if (this.results['driverId'] != null) {
                this.vehicleModel.driver = this.results['driverId'];
            }
            else {
                this.vehicleModel.driver = '';
            }
        }, error => {
        });
    }
    getlicencefrnt() {
        this.adminService.getlicencefrnt(this.vId).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.liscence1 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getlicscenceback() {
        this.adminService.getlicscenceback(this.vId).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.liscence2 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getrc() {
        this.adminService.getrc(this.vId).subscribe(data => {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            this.rc = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        }, error => {
        });
    }
    getvehicleDetailsById() {
        this.adminService.getVehicleDetailsbyId(this.vId).subscribe(data => {
            this.DriverDetailsofCar = data['driver'];
            console.log(this.DriverDetailsofCar);
            this.vehicleModel.dname = this.DriverDetailsofCar['name'];
            this.vehicleModel.dnumber = this.DriverDetailsofCar['number'];
            this.vehicleModel.daddreess = this.DriverDetailsofCar['addresss'];
            this.id = this.DriverDetailsofCar['id'];
        }, error => {
        });
    }
};
OwnerviewvehiclesComponent.ctorParameters = () => [
    { type: src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"] }
];
OwnerviewvehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ownerviewvehicles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ownerviewvehicles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ownerviewvehicles.component.css */ "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.css")).default]
    })
], OwnerviewvehiclesComponent);



/***/ }),

/***/ "./src/app/ownerpannel/vehicles/vehicles.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ownerpannel/vehicles/vehicles.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.single-popular-car h3 span.price {\r\n    color: #0e0e0e;\r\n    float: right;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL3ZlaGljbGVzL3ZlaGljbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5zaW5nbGUtcG9wdWxhci1jYXIgaDMgc3Bhbi5wcmljZSB7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ownerpannel/vehicles/vehicles.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ownerpannel/vehicles/vehicles.component.ts ***!
  \************************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../owner.service */ "./src/app/ownerpannel/owner.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let VehiclesComponent = class VehiclesComponent {
    constructor(ownerserivice, toaster, router) {
        this.ownerserivice = ownerserivice;
        this.toaster = toaster;
        this.router = router;
        this.carList = [];
        this.vstatus = '';
        this.apUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
    }
    ngOnInit() {
        this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
        this.userId = this.userDetails['userId'];
        this.getallcarsbyowers();
    }
    getallcarsbyowers() {
        this.ownerserivice.getallcars(this.userId).subscribe(data => {
            this.carList = data;
            this.errormessage = "data found";
        }, error => {
            this.errormessage = "No data found";
        });
    }
    edit(e) {
        this.router.navigate(['/edit-car', e.id]);
    }
    view(e) {
        sessionStorage.setItem("vID", e.id);
        this.router.navigate(['/ownerviewvehicles']);
    }
    delete(e) {
        this.toaster.warning('We are working on this module please be patient');
    }
    changeFilter(s) {
        console.log(s);
        this.ownerserivice.getFilterOptionsVehicles(s, this.userId).subscribe(data => {
            this.carList = data;
            this.errormessage = "data found";
        }, error => {
            this.carList = [];
            this.errormessage = "No data found";
        });
    }
};
VehiclesComponent.ctorParameters = () => [
    { type: _owner_service__WEBPACK_IMPORTED_MODULE_2__["OwnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/vehicles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicles.component.css */ "./src/app/ownerpannel/vehicles/vehicles.component.css")).default]
    })
], VehiclesComponent);



/***/ }),

/***/ "./src/app/register/password-validation.ts":
/*!*************************************************!*\
  !*** ./src/app/register/password-validation.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    width: 126%;\r\n    padding: 94px;\r\n    height: auto;\r\n    margin-top: 10px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\nh4 {\r\n    text-align: center;\r\n}\r\n\r\n.page-wrapper {\r\n    /* background: linear-gradient(45deg, #0085B2, #00B3DA);\r\n     */\r\n    height: auto;\r\n    background: transparent linear-gradient(301deg, #00B3DA 0%, #0085B2 100%) 0% 0% no-repeat padding-box;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n    color: #4D4F5C;\r\n    font-size: 12px;\r\n}\r\n\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 370px !important;\r\n}\r\n\r\n@media (max-width: 968px) {\r\n    .card {\r\n        width: 100%;\r\n    }\r\n    ::ng-deep .mat-form-field-infix {\r\n        display: block;\r\n        position: relative;\r\n        flex: auto;\r\n        width: 170px !important;\r\n    }\r\n    .loginbtn {\r\n        width: 100% !important;\r\n    }\r\n    .signupbtn {\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\nbutton:disabled, button[disabled] {\r\n    background-color: #cccccc;\r\n    color: #666666;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.loginbtn {\r\n    border: none;\r\n    padding: 7px;\r\n    width: 160px;\r\n    color: white;\r\n    background: #009cc6;\r\n}\r\n\r\n.signupbtn {\r\n    color: #009cc6;\r\n    background: white;\r\n    border: 1px solid #009cc6;\r\n    padding: 7px;\r\n    width: 160px;\r\n    /* margin-left: 43px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7TUFDRTtJQUNGLFlBQVk7SUFDWixxR0FBcUc7QUFDekc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgd2lkdGg6IDEyNiU7XHJcbiAgICBwYWRkaW5nOiA5NHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4NUIyLCAjMDBCM0RBKTtcclxuICAgICAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDMwMWRlZywgIzAwQjNEQSAwJSwgIzAwODVCMiAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0RDRGNUM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgd2lkdGg6IDM3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2lnbnVwYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQsIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9naW5idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwOWNjNjtcclxufVxyXG5cclxuLnNpZ251cGJ0biB7XHJcbiAgICBjb2xvcjogIzAwOWNjNjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOWNjNjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA0M3B4OyAqL1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/register */ "./src/app/_models/register.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-validation */ "./src/app/register/password-validation.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, loginservice, toaster, router) {
        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.toaster = toaster;
        this.router = router;
    }
    ngOnInit() {
        this.registerModel = new _models_register__WEBPACK_IMPORTED_MODULE_3__["Registeruser"]();
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[6-9]\\d{9}')]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            Confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validator: Object(_password_validation__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'Confirmpassword')
        });
        // this.registerModel.email = "@gmail.com";
    }
    register() {
        // alert('User Registration successfully');
        // console.log(this.registerForm.value);
        // this.registerForm.reset();
        let req = {
            "name": this.registerModel.name,
            "userName": this.registerModel.username,
            "emailId": this.registerModel.email,
            "password": this.registerModel.password,
            "mobile": this.registerModel.mobNo,
            "addres": this.registerModel.address,
            "roleId": 2
        };
        console.log(req);
        this.loginservice.register(req).subscribe(data => {
            this.toaster.success('Register Successfully');
            this.router.navigate(['/login']);
        }, error => {
            this.error = error.error['message'];
            console.log(this.error);
            this.toaster.error(this.error);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.css ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycGFnZWZvcm1hcmtldGluZy9wdWxpY3JlZ2lzdHJhdGlvbm1hcmtldGluZy9wdWxpY3JlZ2lzdHJhdGlvbm1hcmtldGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PulicregistrationmarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulicregistrationmarketingComponent", function() { return PulicregistrationmarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PulicregistrationmarketingComponent = class PulicregistrationmarketingComponent {
    constructor() { }
    ngOnInit() {
    }
};
PulicregistrationmarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pulicregistrationmarketing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pulicregistrationmarketing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pulicregistrationmarketing.component.css */ "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.css")).default]
    })
], PulicregistrationmarketingComponent);



/***/ }),

/***/ "./src/app/registerpageformarketing/registerpageformarketing.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/registerpageformarketing/registerpageformarketing.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-input-placeholder {\r\n    color: grey;\r\n}\r\n.book-a-car input, .book-a-car select\r\n{\r\n    border-color: #ffd000;\r\n    border-radius: 0;\r\n    font-size: 14px;\r\n    height: 45px;\r\n}\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJwYWdlZm9ybWFya2V0aW5nL3JlZ2lzdGVycGFnZWZvcm1hcmtldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixxRUFBcUU7QUFDekUiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RlcnBhZ2Vmb3JtYXJrZXRpbmcvcmVnaXN0ZXJwYWdlZm9ybWFya2V0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmJvb2stYS1jYXIgaW5wdXQsIC5ib29rLWEtY2FyIHNlbGVjdFxyXG57XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmQwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/registerpageformarketing/registerpageformarketing.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/registerpageformarketing/registerpageformarketing.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterpageformarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageformarketingComponent", function() { return RegisterpageformarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/register */ "./src/app/_models/register.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let RegisterpageformarketingComponent = class RegisterpageformarketingComponent {
    constructor(formBuilder, loginservice, toaster, router) {
        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.toaster = toaster;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
    }
    ngOnInit() {
        this.registerModel = new _models_register__WEBPACK_IMPORTED_MODULE_4__["Registeruser"]();
        this.registerModel.types = '';
        this.registerModel.dist = '';
        this.publicreisterform = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            wnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            types: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dist: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    get f() { return this.publicreisterform.controls; }
    register() {
        this.submitted = true;
        if (this.publicreisterform.invalid) {
            console.log(this.publicreisterform.value);
            return;
        }
        else {
            console.log(this.registerModel.types);
            this.formData.append('name', this.registerModel.name);
            this.formData.append('emailId', this.registerModel.email);
            this.formData.append('mobile', this.registerModel.mobNo);
            this.formData.append('address', this.registerModel.address);
            this.formData.append('roleId', this.registerModel.types);
            this.formData.append('whatsAppNo', this.registerModel.wnumber);
            this.formData.append('district', this.registerModel.dist);
            this.formData.append("city", this.registerModel.locality);
            this.loginservice.userpublicregister(this.formData).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Registration Completed!', 'Registered Successfully', 'success');
                this.formData.delete;
                window.location.reload();
            }, error => {
                this.formData.delete;
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Register!', 'Server is busy at this moment', 'error');
            });
        }
    }
};
RegisterpageformarketingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterpageformarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registerpageformarketing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registerpageformarketing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/registerpageformarketing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registerpageformarketing.component.css */ "./src/app/registerpageformarketing/registerpageformarketing.component.css")).default]
    })
], RegisterpageformarketingComponent);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true,
    BASEURL: "https://cmgaadi.com/server/"
    // BASEURL : "http://localhost:8080/server/"
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angualar-Task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map