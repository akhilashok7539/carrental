function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutusAboutusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    About Us\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"home-about-area\" id=\"about\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center align-items-center\">\r\n            <div class=\"col-lg-6 no-padding home-about-left\">\r\n                <img class=\"img-fluid\" src=\"assets/assets/img/about-img.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-lg-6 no-padding home-about-right\">\r\n                <h1>About Us</h1>\r\n                <hr>\r\n                <p>CM Gaadi is an Indian company that offers vehicles for hire such as self-drive car rental or Auto rental services. It’s a platform for vehicle owners to rent your vehicle to desired customers and earn money from your own vehicle. And also\r\n                    it’s a better place to search your desired vehicle with your budget. CM Gaadi is mainly focuses on expatriates who are abroad but have vehicles, it’s have no usage –can register your vehicle on CM Gaadi and they can manage their rental\r\n                    service at where ever they are. So, this will help expatriates to earn money by their vehicles while sitting abroad. Also people who need vehicle for travelling can rent a vehicle from CM Gaadi by providing their details</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelAdminapprovevehiclesAdminapprovevehiclesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<app-sidebar></app-sidebar>\r\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\r\n\r\n\r\n\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-3\">\r\n                <h4 class=\"page-title\">Vehicle Mangement</h4>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\r\n\r\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\r\n                        class=\"fa fa-plus\"></i> </a> -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n\r\n            <div class=\"table-responsive\">\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4\"></div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\r\n                            (keyup)=\"applyFilter(searchString)\">\r\n\r\n\r\n\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-sm-12\">\r\n                    <mat-tab-group  mat-align-tabs=\"center\"  (selectedTabChange)=\"tabClick($event)\">\r\n                        <mat-tab label=\"Pending\">\r\n                            <div class=\"row\" style=\"margin-top: 10px;\">\r\n                                <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n                                    <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n                                    <div class=\"card\">\r\n                                        <img src=\"{{apiurl}}vehicle/getImage1/{{results.id}}\" alt=\"\"\r\n                                            style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                                        <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                                        <p style=\"text-align: center;\"><i class=\"fa fa-map-marker\"></i> {{results.locationName }}</p>\r\n                                     \r\n                                        &nbsp;\r\n                                        <button class=\"btn btn-dark\"\r\n                                            style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\r\n                                            (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> View Vehicle</button>\r\n                                        <div class=\"row\" style=\"padding: 5px;\">\r\n                                            <button class=\"btn btn-success\" style=\"margin-right: 1px;\" (click)=\"approve(results)\"><i class=\"fa fa-check\"></i> Approve</button>\r\n                                            <button class=\"btn btn-danger\" style=\" \" (click)=\"reject(results)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Reject</button>\r\n\r\n                                        </div>\r\n                                        <!-- </mat-card> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <h5 *ngIf=\"message == 'No data found'\" style=\"      margin-top: 100px;  text-align: center;overflow: hidden;\">No Request Found</h5>\r\n\r\n                        </mat-tab>\r\n\r\n\r\n\r\n                        <mat-tab label=\"Accepted\">\r\n                            <div class=\"row\" style=\"margin-top: 10px;\">\r\n                                <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n                                    <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n                                        <div class=\"card\">\r\n                                        <img src=\"{{apiurl}}vehicle/getImage1/{{results.id}}\" alt=\"\"\r\n                                            style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                                        <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                                        <p style=\"text-align: center;\"><i class=\"fa fa-map-marker\"></i> {{results.locationName }}</p>\r\n\r\n                                        &nbsp;\r\n                                        <button class=\"btn btn-dark\"\r\n                                            style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\r\n                                            (click)=\"view(results)\"><i class=\"fa fa-eye\"></i> View Vehicle</button>\r\n                                    <!-- </mat-card> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <h5 *ngIf=\"message == 'No data found'\"  style=\"     margin-top: 100px;   text-align: center;overflow: hidden;\">No Request Found</h5>\r\n\r\n                        </mat-tab>\r\n\r\n\r\n                        <mat-tab label=\"Rejected\">\r\n                            <div class=\"row\" style=\"margin-top: 10px;\">\r\n                                <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n                                    <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n                                        <div class=\"card\">\r\n                                        <img src=\"{{apiurl}}vehicle/getImage1/{{results.id}}\" alt=\"\"\r\n                                            style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                                        <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                                        <p style=\"text-align: center;\"><i class=\"fa fa-map-marker\"></i> {{results.locationName }}</p>\r\n                                       \r\n                                        &nbsp;\r\n                                        <button class=\"btn btn-dark\"\r\n                                            style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\r\n                                            (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> View Vehicle</button>\r\n                                    <!-- </mat-card> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-tab>\r\n                        <h5 *ngIf=\"message == 'No data found'\" style=\"     margin-top: 100px;   text-align: center;overflow: hidden;\">No Request Found</h5>\r\n\r\n                    </mat-tab-group>\r\n                    <!-- <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n                        <ng-container matColumnDef=\"vname\">\r\n                            <mat-header-cell *matHeaderCellDef>Vehicle Name </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element \">{{element.model}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"vnumber\">\r\n                            <mat-header-cell *matHeaderCellDef>Vehicle Number</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">{{element.numberPlate}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <mat-header-cell *matHeaderCellDef> Company Name</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">{{element.companyName}}</mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"view\">\r\n                            <mat-header-cell *matHeaderCellDef> View Details</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> <button (click)=\"view(element)\" class=\"btn btn-warning\">View</button></mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"approve\">\r\n                            <mat-header-cell *matHeaderCellDef> Approve / Reject</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">\r\n                                <button class=\"btn btn-danger\" (click)=\"approve(element)\">Approve</button> &nbsp;\r\n                                <button class=\"btn btn-dark\" (click)=\"reject(element)\">Reject</button>\r\n\r\n                            </mat-cell>\r\n                        </ng-container>\r\n\r\n\r\n\r\n\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n\r\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" (page)=\"changePage($event)\">\r\n                    </mat-paginator> -->\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelAdminapprovevehiclesViewVehicledetailsViewVehicledetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<app-sidebar></app-sidebar>\r\n<!-- \r\n<div class=\"page-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3>Vehicle Details</h3>\r\n                <hr>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-sm-12\">\r\n                <img src=\"{{apiurl}}vehicle/getImage1/{{vehicleID}}\" alt=\"\" style=\"    width: 124px;\">\r\n                <hr style=\"    width: 52%;\r\n                margin-right: auto;\r\n                margin-left: auto;\r\n                display: block;\">\r\n            </div>\r\n          \r\n            <div class=\"col-sm-12\">\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-industry\"></i> &nbsp; Comapny Name : {{vehicleModel.vehicleCompany}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Type : {{vehicleModel.vehicleType}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-registered\"></i> &nbsp; Vehicle Registration :\r\n                        {{vehicleModel.vehicleRegistration}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Model :\r\n                        {{vehicleModel.vehicleModel}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\r\n                        {{vehicleModel.locality}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-calendar\"></i> &nbsp; Vehicle Year :\r\n                        {{vehicleModel.vehicleYear}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\r\n                        {{vehicleModel.rent}}</p>\r\n                </mat-card>\r\n\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\r\n                        {{vehicleModel.rent}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p>License Front</p>\r\n                    <img [src]=\"liscence1\" alt=\"\" style=\"    width: 36%;\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p>License Back</p>\r\n                    <img [src]=\"liscence2\" alt=\"\" style=\"    width: 36%;\">\r\n                </mat-card>  <mat-card>\r\n                    <p>RC Book</p>\r\n                    <img [src]=\"rc\" alt=\"\" style=\"    width: 36%;\">\r\n                </mat-card>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<div class=\"page-wrapper\">\r\n    <div class=\"container\">\r\n        <h4>Vehicle <span style=\"color: #ffa800;\">Details</span> </h4>\r\n<hr>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8\">\r\n\r\n                <!-- <mat-card> -->\r\n                <div class=\"card\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h5 style=\"text-align: center;\">{{vehicleModel.vehicleCompany}},{{vehicleModel.vehicleModel}}</h5>\r\n\r\n                            <hr>\r\n                        </div>\r\n                        <!-- <div class=\"col-sm-3\">\r\n                            <p style=\"\r\n                           background: #ffcb67;\r\n                            border-radius: 125px;\r\n                            padding: 3px;\r\n                        \">{{vehicleModel.vehicleModel}}</p>\r\n                        </div> -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <img src=\"{{apiurl}}vehicle/getImage1/{{vehicleID}}\" alt=\"\"\r\n                                style=\"     width: 200px; height: 186px;  \">\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <p style=\"margin-top: 10px;    text-align: left;\"><i class=\"fa fa-car\"></i>&nbsp;Vehicle\r\n                                Type : {{vehicleModel.vehicleType}}</p>\r\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-registered\"></i>&nbsp; Registration Number\r\n                                : {{vehicleModel.vehicleRegistration}}</p>\r\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\r\n                                {{vehicleModel.locality}}</p>\r\n                            <hr>\r\n                            <h6>Rent Details</h6>\r\n                            &nbsp;\r\n                            <p *ngIf=\"rentperhour != null\" style=\"    text-align: left;\"><i class=\"fa fa-inr\"></i>&nbsp; Rent Per Hour :\r\n                                {{rentperhour}}</p>\r\n                            <p *ngIf=\"vehicleModel.rent != null\" style=\"    text-align: left;\"><i class=\"fa fa-calendar\"></i>&nbsp; Rent Per Day :\r\n                                {{vehicleModel.rent}}</p>\r\n                            <p *ngIf=\"rentperkm != null\" style=\"    text-align: left;\"><i class=\"fa fa-road\"></i>&nbsp; Rent Per KM :\r\n                                {{rentperkm}}</p>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"card\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <img src=\"{{apiurl}}driver/getProfilePic/{{driverDetails}}\" alt=\"\" />\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <h6>Driver Details</h6>\r\n                            <hr>\r\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-user\"></i>&nbsp;Driver Name\r\n                                :\r\n                                {{vehicleModel.dname}}</p>\r\n                            <p *ngIf=\"DriverDetailsofCar !=null\"style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-phone\"></i>&nbsp;Contact\r\n                                Number :\r\n                                {{vehicleModel.dnumber}}</p>\r\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i\r\n                                    class=\"fa fa-map-marker\"></i>&nbsp;Driver\r\n                                Address : {{vehicleModel.daddreess}}</p>\r\n                            <p *ngIf=\"DriverDetailsofCar ==null\"> No Driver is linked to this vehicle!</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"vehiclestatus == 'PENDING'\">\r\n\r\n                    <div class=\"row\">\r\n                      \r\n                        <div class=\"col-sm-12\">\r\n                            <h6>Vehicle Approve or Reject</h6>\r\n                            <hr>\r\n                            <p>Please verify the above documents and then approve or reject vehicles</p>\r\n                            \r\n                            <button class=\"btn btn-success\" (click)=\"approve()\">Approve</button>\r\n                            <button class=\"btn btn-danger\" (click)=\"reject()\">Reject</button>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"card\">\r\n                    <h6> Vehicle Documents </h6>\r\n                    <hr>\r\n                    <p>License Front</p>\r\n                    <img [src]=\"liscence1\" alt=\"\">\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n\r\n                    <p>License Back</p>\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    <img [src]=\"liscence2\" alt=\"\">\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n\r\n                    <p>RC Book</p>\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    <img [src]=\"rc\" alt=\"\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminhome/adminhome.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminhome/adminhome.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelAdminhomeAdminhomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"page-wrapper\" >\r\n    <div class=\"row\" >\r\n        <div class=\"col-md-12 \" *ngIf=\"userRole == 'ADMIN'\">\r\n    \r\n        \r\n                <app-companies></app-companies>\r\n         \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"userRole == 'OWNER'\">\r\n<app-ownerpannel></app-ownerpannel>\r\n    \r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminpannel.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminpannel.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelAdminpannelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-navigation></app-navigation>\r\n<app-sidebar></app-sidebar>\r\n<app-adminhome></app-adminhome>  -->\r\n\r\n<div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <app-sidebar></app-sidebar>\r\n    <!-- End of Sidebar -->\r\n\r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n\r\n        <!-- Main Content -->\r\n        <div id=\"content\">\r\n\r\n            <!-- Topbar -->\r\n            <app-header></app-header>\r\n            <!-- End of Topbar -->\r\n            <!-- <app-adminhome></app-adminhome> -->\r\n            <!-- Begin Page Content -->\r\n            <div class=\"container-fluid\" style=\"margin-left: 223px;\r\n            margin-top: 99px;\r\n            padding-right: 240px;  \">\r\n\r\n                <!-- Page Heading -->\r\n                <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n                    <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n                    <!-- <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i\r\n                            class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a> -->\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                            <div class=\"card-body\" routerLink=\"/vehicles\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">\r\n                                            Vehicle</div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-car fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-success shadow h-100 py-2\" style=\"border-left: 0.25rem solid #ff0278 !important;\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" style=\"color: #ff0278 !important;\">\r\n                                            Vehicle Tracking</div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-map-marker fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-info shadow h-100 py-2\" style=\"border-left: 0.25rem solid #ff5f02 !important;\">\r\n                            <div class=\"card-body\" routerLink=\"/drivers\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" style=\"color: #ff5f02 !important;\">\r\n                                            Drivers</div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-user fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-info shadow h-100 py-2\" style=\"border-left: 0.25rem solid #ff02d5 !important;\">\r\n\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\" style=\"color: #ff02d5 !important;\">\r\n                                            Payment Reports</div>\r\n                                        <!-- <div class=\"h5 mb-0 font-weight-bold text-gray-800\">18</div> -->\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-clipboard fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <!-- <div class=\"card border-left-info shadow h-100 py-2\"> -->\r\n                        <div class=\"card border-left-info shadow h-100 py-2\" style=\"border-left: 0.25rem solid #00d6a1 !important;\">\r\n\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" style=\"color: #00d6a1 !important;\">\r\n                                            Request</div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-refresh fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-info shadow h-100 py-2\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\r\n                                            Handover Vehicle </div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <!-- <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i> -->\r\n                                        <img src=\"./assets/img/iconshandover.png\" alt=\"\" style=\"width: 26px !important;\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-info shadow h-100 py-2\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\r\n                                            Bank Manage</div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-university fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                        <div class=\"card border-left-info shadow h-100 py-2\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col mr-2\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\r\n                                            Reset Password</div>\r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <i class=\"fa fa-key fa-2x text-gray-300\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/companies/companies.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/companies/companies.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelCompaniesCompaniesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header></app-header> -->\r\n<app-sidebar></app-sidebar>\r\n<app-navigation></app-navigation>\r\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\r\n\r\n\r\n\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-3\">\r\n                <h4 class=\"page-title\">Owner</h4>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\r\n\r\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\r\n                        class=\"fa fa-plus\"></i> </a> -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n\r\n            <div class=\"table-responsive\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <!-- <h5>Owner</h5> -->\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"    padding: 11px;\">\r\n\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search owner\" [(ngModel)]=\"searchString\"\r\n                        (keyup)=\"applyFilter(searchString)\">\r\n                        <span style=\"    float: right;\r\n                        margin-top: -29px;\r\n                        margin-right: 13px;\r\n                    \"><i class=\"fa fa-search\"></i> </span>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                       \r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <mat-header-cell *matHeaderCellDef>Owner Name </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element \"> {{element.name}}</mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"email\">\r\n                            <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">{{element.emailId}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"phonenumber\">\r\n                            <mat-header-cell *matHeaderCellDef> Contact</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">{{element.mobile}}</mat-cell>\r\n                        </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n\r\n\r\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" (page)=\"changePage($event)\">\r\n                    </mat-paginator>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/countries/countries.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/countries/countries.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelCountriesCountriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<div class=\"row\" style=\"margin-top: 5vw;\">\r\n    <div class=\"col-md-10 \">\r\n  \r\n      <div class=\"table-responsive\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <h5>Countries</h5>\r\n  \r\n          </div>\r\n          <div class=\"col-sm-4\"></div>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\r\n              (keyup)=\"applyFilter(searchString)\">\r\n          \r\n  \r\n  \r\n          </div>\r\n        </div>\r\n  \r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n  \r\n          <ng-container matColumnDef=\"no\">\r\n            <mat-header-cell *matHeaderCellDef>No </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element ; let i = index;\"> {{this.paginator.pageIndex == 0 ? i + 1 : 1 + i + this.paginator.pageIndex * this.paginator.pageSize}} </mat-cell>\r\n          </ng-container> \r\n          <ng-container matColumnDef=\"country\">\r\n            <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.name | uppercase }} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"code\">\r\n            <mat-header-cell *matHeaderCellDef> Exam Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.code}} </mat-cell>\r\n          </ng-container>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n  \r\n  \r\n        <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageLimit\"\r\n          >\r\n        </mat-paginator>\r\n        \r\n        <h5 *ngIf=\"message == 'No data found'\">No data Found</h5>\r\n  \r\n  \r\n      </div>\r\n    </div>\r\n  </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/header/header.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/header/header.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-toolbar class=\"mat-elevation-z6\" color=\"primary\" >\r\n Dashboard \r\n <div style=\"position:absolute; right:10px;\">\r\n    <button style=\"outline: none;\" mat-icon-button [matMenuTriggerFor]=\"menu\" matTooltip=\"Profile Actions\">\r\n        <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"logout()\" style=\"outline: none;\">\r\n          <span>Sign Out</span>\r\n          <mat-icon style=\"padding-left: 5px;\">exit_to_app</mat-icon>\r\n        </button>\r\n    </mat-menu>\r\n</div>\r\n  </mat-toolbar> -->\r\n\r\n\r\n<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 fixed-top shadow\">\r\n\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/img/logonew.png\" alt=\"\" style=\"width: 101px;\">\r\n        <!-- <h6>CMGAADI</h6> -->\r\n    </a>\r\n\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/add-location/add-location.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/add-location/add-location.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelLocationAddLocationAddLocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/locations\"><i\r\n                style=\"color: black;\">Locality</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\r\n            style=\"color:#1492E6;\">Add Locality</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add New Locality</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"locationForn\">\r\n                    <div class=\"row\">\r\n                       \r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Locality Name<span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" \r\n                                type=\"text\"  [(ngModel)]=\"Location\" formControlName=\"Location\" >\r\n                              \r\n\r\n                            </div>\r\n                        </div>\r\n                        \r\n                       \r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/edit-location/edit-location.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/edit-location/edit-location.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelLocationEditLocationEditLocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/locations\"><i\r\n                style=\"color: black;\">Locality</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\r\n            style=\"color:#1492E6;\">Edit Locality</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Edit Locality</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"locationForn\">\r\n                    <div class=\"row\">\r\n                       \r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Locality Name<span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" \r\n                                type=\"text\"  [(ngModel)]=\"Location\" formControlName=\"Location\" >\r\n                              \r\n\r\n                            </div>\r\n                        </div>\r\n                        \r\n                       \r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/location.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/location.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelLocationLocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<app-sidebar></app-sidebar>\r\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\r\n\r\n\r\n\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-3\">\r\n                <h4 class=\"page-title\">Locality</h4>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\r\n\r\n                <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" routerLink=\"/add-location\"><i\r\n                        class=\"fa fa-plus\"></i> Add Locality </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" >\r\n\r\n            <div class=\"table-responsive\">\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                     \r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4\"></div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\r\n                            (keyup)=\"applyFilter(searchString)\">\r\n\r\n\r\n\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <!-- <h5>Owner</h5> -->\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"    padding: 11px;\">\r\n\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search locality\" [(ngModel)]=\"searchString\"\r\n                        (keyup)=\"applyFilter(searchString)\">\r\n                        <span style=\"    float: right;\r\n                        margin-top: -29px;\r\n                        margin-right: 13px;\r\n                    \"><i class=\"fa fa-search\"></i> </span>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                       \r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n                        <ng-container matColumnDef=\"location\">\r\n                            <mat-header-cell *matHeaderCellDef>Location Name </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element \"> {{element.name}}</mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Edit\">\r\n                            <mat-header-cell *matHeaderCellDef>Options</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> <button (click)=\"edit(element)\" class=\"btn btn-success\"><i class=\"fa fa-edit\"></i> Edit</button>  &nbsp;&nbsp;&nbsp;\r\n                          <button (click)=\"delete(element)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i> Delete</button> </mat-cell>\r\n                       \r\n                        </ng-container>\r\n                        <!-- <ng-container matColumnDef=\"delete\">\r\n                            <mat-header-cell *matHeaderCellDef>Delete</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> <button (click)=\"delete(element)\" class=\"btn btn-dark\">Delete</button> </mat-cell>\r\n                        </ng-container> -->\r\n                        \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n\r\n\r\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" >\r\n                    </mat-paginator>\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/paymentreports/paymentreports.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/paymentreports/paymentreports.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelPaymentreportsPaymentreportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<app-sidebar></app-sidebar>\r\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\r\n\r\n\r\n\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-3\">\r\n                <h4 class=\"page-title\">Payment Reports</h4>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\r\n\r\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\r\n                        class=\"fa fa-plus\"></i> </a> -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n\r\n            <div class=\"table-responsive\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <!-- <h5>Vehicles</h5> -->\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4\"></div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"search here\" [(ngModel)]=\"searchString\"\r\n                            (keyup)=\"applyFilter(searchString)\">\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n                        <ng-container matColumnDef=\"transId\">\r\n                            <mat-header-cell *matHeaderCellDef>Transaction ID  </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element \"> </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"uname\">\r\n                            <mat-header-cell *matHeaderCellDef>User Name</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"unumber\">\r\n                            <mat-header-cell *matHeaderCellDef> User Number</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"></mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"dname\">\r\n                            <mat-header-cell *matHeaderCellDef> Driver Name</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"></mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"dnumber\">\r\n                            <mat-header-cell *matHeaderCellDef> Driver Number</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"></mat-cell>\r\n                        </ng-container>\r\n                      \r\n\r\n\r\n\r\n\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n\r\n\r\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageLimit\">\r\n                    </mat-paginator>\r\n\r\n                    <h5 *ngIf=\"message == 'No data found'\">No data Found</h5>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/reset-passowrd/reset-passowrd.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/reset-passowrd/reset-passowrd.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelResetPassowrdResetPassowrdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<app-sidebar></app-sidebar>\r\n<div class=\"page-wrapper\" style=\"margin-top: 33px;\">\r\n\r\n\r\n\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h4 style=\"text-align: center;\" >Reset <em style=\"font-style: normal;\r\n                    color: #ffb100;\">Password</em> </h4>\r\n                <hr>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-8 col-9 text-right m-b-20\">\r\n\r\n                <!-- <a class=\"btn btn btn-primary btn-rounded float-right \" style=\"color: white;\" (click)=\"addcompany()\"><i\r\n                        class=\"fa fa-plus\"></i> </a> -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"card\">\r\n                    <form [formGroup]=\"resetForm\">\r\n                        <div class=\"col-sm-12\" style=\"margin-left: auto;\r\n                        margin-right: auto;\">\r\n                            <label for=\"\">Old Password</label>\r\n                            <input class=\"form-control\" placeholder=\"Old Password\" [ngClass]=\"{ 'is-invalid': submitted && f.oldPasswords.errors }\"\r\n                            type=\"password\" [(ngModel)]=\"adminmodel.oldPasswords\" formControlName=\"oldPasswords\">\r\n                            <div *ngIf=\"submitted && f.oldPasswords.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.oldPasswords.errors.required\"> Old Password is required</div>\r\n                                <div *ngIf=\"f.oldPasswords.errors.minlength\">Old Password must be at least 8 characters</div>\r\n                            </div>\r\n                        </div>\r\n                        &nbsp;\r\n                        <div class=\"col-sm-12\" style=\"margin-left: auto;\r\n                        margin-right: auto;\">\r\n                            <label for=\"\">Password</label>\r\n                            <input class=\"form-control\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n                            type=\"password\" [(ngModel)]=\"adminmodel.password\" formControlName=\"password\">\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.password.errors.required\"> Password is required</div>\r\n                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters</div>\r\n                            </div>\r\n                        </div>\r\n                        &nbsp;\r\n                        <div class=\"col-sm-12\" style=\"margin-left: auto;margin-top: 10px;\r\n                        margin-right: auto;\">\r\n                            <label for=\"\">Confirm Password</label>\r\n                            <input class=\"form-control\" placeholder=\"Confirm Password\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\r\n                                type=\"password\" [(ngModel)]=\"adminmodel.confirmPassword\" formControlName=\"confirmPassword\">\r\n                               \r\n                               <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                                   <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                                   <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                               </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"    margin: 12px;\r\n                            margin-left: auto;\r\n                            margin-right: auto;\r\n                            display: block;\r\n                            padding: 9px;\r\n                            width: 38%;\r\n                        \" class=\"btn btn-danger\" (click)=\"reset()\">Reset Password</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/sidebar/sidebar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/sidebar/sidebar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminpannelSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-sidenav-container>\r\n    <mat-sidenav mode=\"side\" opened=\"true\" [fixedInViewport]=\"true\" [fixedTopGap]=\"64\">\r\n        <ul>\r\n            <li routerLink=\"/admin\" routerLinkActive=\"active\">Home</li>\r\n\r\n            <li *ngIf=\"userRole == 'ADMIN'\" routerLink=\"/countries\" routerLinkActive=\"active\">Countries</li>\r\n\r\n        </ul>\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container> -->\r\n<!-- \r\n<div class=\"sidebar\" id=\"sidebar\">\r\n    <div class=\"sidebar-inner slimscroll\" style=\"overflow-y: auto;\">\r\n        <div id=\"sidebar-menu\" class=\"sidebar-menu\">\r\n            <ul *ngIf=\"userRole == 'ADMIN'\">\r\n\r\n                <img src=\"assets/img/logoos.png\" alt=\"\" style=\"    display: block;\r\n                width: 52%;\r\n                margin: 0 auto;\r\n                padding-top: 32px;\">\r\n                <li class=\"menu-title\" style=\"text-align: center;\"> <strong>  Admin</strong></li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/admin\"><i class=\"fa fa-user\"></i> <span>Owners</span></a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/locations\"><i class=\"fa fa-map-marker\"></i> <span>Locality</span></a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/admin-vehicles\"><i class=\"fa fa-car\"></i> <span>Vehicles</span></a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/admin-paymentreports\"><i class=\"fa fa-inr\"></i> <span>Payment Reports</span></a>\r\n                </li>\r\n\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/admin-resetpassword\"><i class=\"fa fa-lock\"></i> <span>Reset Password</span></a>\r\n                </li>\r\n\r\n            </ul>\r\n            <ul *ngIf=\"userRole=='OWNER'\">\r\n                <img src=\"assets/img/logoos.png\" alt=\"\" style=\"    display: block;\r\n                width: 52%;\r\n                margin: 0 auto;\r\n                padding-top: 32px;\">\r\n                <li class=\"menu-title\" style=\"text-align: center;\"> <strong> Owner</strong></li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/admin\"><i class=\"fa fa-user-md\"></i> <span>Home</span></a>\r\n                </li>\r\n              \r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Terms & Conditions</span></a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Privacy</span></a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/item-rating\"><i class=\"fa fa-user-md\"></i> <span>Help and Support</span></a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/admin-resetpassword\"><i class=\"fa fa-lock\"></i> <span>Reset Password</span></a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\" style=\"position: fixed;\">\r\n\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\r\n        <div class=\"sidebar-brand-icon rotate-n-15\">\r\n            <i class=\"fas fa-laugh-wink\"></i>\r\n        </div>\r\n        <div class=\"sidebar-brand-text mx-3\"> <sup></sup></div>\r\n    </a>\r\n\r\n    <hr class=\"sidebar-divider my-0\">\r\n\r\n    <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/admin\">\r\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n            <span>Dashboard</span></a>\r\n    </li>\r\n\r\n    <hr class=\"sidebar-divider\">\r\n    <!-- \r\n    <div class=\"sidebar-heading\">\r\n        Interface\r\n    </div>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n            <i class=\"fas fa-fw fa-cog\"></i>\r\n            <span>Components</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n                <h6 class=\"collapse-header\">Custom Components:</h6>\r\n                <a class=\"collapse-item\" href=\"buttons.html\">Buttons</a>\r\n                <a class=\"collapse-item\" href=\"cards.html\">Cards</a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\r\n            <i class=\"fas fa-fw fa-wrench\"></i>\r\n            <span>Utilities</span>\r\n        </a>\r\n        <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n                <h6 class=\"collapse-header\">Custom Utilities:</h6>\r\n                <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\r\n                <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\r\n                <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\r\n                <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <div class=\"sidebar-heading\">\r\n        Addons\r\n    </div>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n            <i class=\"fas fa-fw fa-folder\"></i>\r\n            <span>Pages</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n                <h6 class=\"collapse-header\">Login Screens:</h6>\r\n                <a class=\"collapse-item\" href=\"login.html\">Login</a>\r\n                <a class=\"collapse-item\" href=\"register.html\">Register</a>\r\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\r\n                <div class=\"collapse-divider\"></div>\r\n                <h6 class=\"collapse-header\">Other Pages:</h6>\r\n                <a class=\"collapse-item\" href=\"404.html\">404 Page</a>\r\n                <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"charts.html\">\r\n            <i class=\"fas fa-fw fa-chart-area\"></i>\r\n            <span>Charts</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"tables.html\">\r\n            <i class=\"fas fa-fw fa-table\"></i>\r\n            <span>Tables</span></a>\r\n    </li>\r\n\r\n    <hr class=\"sidebar-divider d-none d-md-block\"> -->\r\n\r\n\r\n\r\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loading></app-loading>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cancelationpolicy/cancelationpolicy.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cancelationpolicy/cancelationpolicy.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCancelationpolicyCancelationpolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    CANCELLATION AND REFUND POLICY\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div class=\"container\" style=\"margin-top: 20px;\">\r\n\r\n        <h6>CANCELLATION</h6>\r\n        <hr>\r\n        <p>You can cancel a trip at any time through the Cmgaadi app, but may be charged a cancellation fee if you cancel after you're matched with your driver. These fees pay driver-partners for the time and effort they spend getting to your location.</p>\r\n        <p>If you believe you were charged a cancellation fee in error, let us know the reason and you can feel free to contact us through help & support desk.</p>\r\n        <h6>REFUND</h6>\r\n        <hr>\r\n        <p>\r\n            Your cancellation fee will be refunded to your original payment method if you are eligible for a refund when we checking with the reasons. Refunds may take up to 5 business days to process depending on your bank.\r\n        </p>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    Contact Us\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"contact-page-area section-gap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!-- <h3>Contact Us</h3> -->\r\n            <!-- <div class=\"map-wrap\" style=\"width:100%; height: 445px;\" id=\"map\"></div> -->\r\n            <div class=\"col-lg-4 d-flex flex-column address-wrap\">\r\n                <div class=\"single-contact-address d-flex flex-row\">\r\n                    <div class=\"icon\">\r\n                        <span class=\"lnr lnr-home\"></span>\r\n                    </div>\r\n                    <div class=\"contact-details\">\r\n                        <h5>N0.6/858-M,2nd Floor,Suite #126</h5>\r\n                        <p>Valamkottil Towers,judgemukku,Thrikkakara P.O,Kakkanad,Eranakulam</p>\r\n                        <p>KL-682021</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"single-contact-address d-flex flex-row\">\r\n                    <div class=\"icon\">\r\n                        <span class=\"lnr lnr-phone-handset\"></span>\r\n                    </div>\r\n                    <div class=\"contact-details\">\r\n                        <h5>00 (000) 0000 0000</h5>\r\n                        <p>Mon to Fri 9am to 6 pm</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"single-contact-address d-flex flex-row\">\r\n                    <div class=\"icon\">\r\n                        <span class=\"lnr lnr-envelope\"></span>\r\n                    </div>\r\n                    <div class=\"contact-details\">\r\n                        <h5><a href=\"/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"84f7f1f4f4ebf6f0c4e7ebe0e1f0ece1e9e1f7aae7ebe9\">customercare@cmgaadi.com</a></h5>\r\n                        <p>Send us your query anytime!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n                <form class=\"form-area \" id=\"myForm\" action=\"mail.php\" method=\"post\" class=\"contact-form text-right\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 form-group\">\r\n                            <input name=\"name\" placeholder=\"Enter your name\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter your name'\" class=\"common-input mb-20 form-control\" required=\"\" type=\"text\">\r\n                            <input name=\"email\" placeholder=\"Enter email address\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter email address'\" class=\"common-input mb-20 form-control\" required=\"\" type=\"email\">\r\n                            <input name=\"subject\" placeholder=\"Enter your subject\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter your subject'\" class=\"common-input mb-20 form-control\" required=\"\" type=\"text\">\r\n                            <div class=\"mt-20 alert-msg\" style=\"text-align: left;\"></div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 form-group\">\r\n                            <textarea class=\"common-textarea form-control\" name=\"message\" placeholder=\"Messege\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Messege'\" required=\"\"></textarea>\r\n                            <button class=\"primary-btn mt-20 text-white\" style=\"float: right;\">Send Message</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"page-404-wrap\" class=\"section-padding overlay\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <div class=\"page-404-content\">\r\n                    <div class=\"number\">\r\n                        <div class=\"four\">4</div>\r\n                        <div class=\"zero\">\r\n                            <img src=\"assets/img/404.png\" alt=\"JSOFT\">\r\n                        </div>\r\n                        <div class=\"four\">4</div>\r\n                    </div>\r\n                    <h4>COMMING SOON !</h4>\r\n                    <p>SORRY, WE COULDN'T FIND THE PAGE <br> YOU'RE LOOKING.</p>\r\n                    <a href=\"404.html\" class=\"btn-404-home\"><i class=\"fa fa-home\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFeaturesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    Features\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"reviews-area section-gap \" id=\"review \">\r\n    <div class=\"container \">\r\n        <div class=\"row d-flex justify-content-center \">\r\n            <div class=\"col-md-8 pb-40 header-text text-center \">\r\n                <h1>Some Features that Made us Unique</h1>\r\n                <p class=\"mb-10 text-center \">\r\n                    Who are in extremely love with eco friendly system.\r\n                </p>\r\n                <hr style=\"    background: yellow;\r\n                width: 50%;\r\n                margin: 14px auto;\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>Regular Rides</h4>\r\n                    <p>\r\n                        You can use our CM Gaadi vehicles for regular rides. We provides some offers for our regular customers\r\n                    </p>\r\n                    <!-- <div class=\"star \">\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>Prebook Your Rides</h4>\r\n                    <p>\r\n                        You can prebook your rides before ready to take our services. Free cancellation before the rides begins\r\n                    </p>\r\n                    <!-- <div class=\"star \">\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>Vehicle Pickup Using Map Locations</h4>\r\n                    <p>\r\n                        You can choose the location for the car to pick up. Also you can search the cars to available in the nearest locations\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\"></div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>24/7 Customer support</h4>\r\n                    <p>\r\n                        For support and other queries 24/7 customer support is provided.For any kind of issues while the ride, we will help you resolve it.\r\n\r\n                    </p>\r\n                    <!-- <div class=\"star \">\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \" style=\"    height: 208px;\">\r\n                    <h4>Push Notifications</h4>\r\n                    <p>\r\n                        You will get timely notifications on your rides. All your data are safe with us.\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\"></div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"reviews-area  \" id=\"review \">\r\n    <div class=\"container \">\r\n        <div class=\"row d-flex justify-content-center \">\r\n            <div class=\"col-md-8 pb-40 header-text text-center \">\r\n                <h1>How it Works?</h1>\r\n                <hr style=\"    background: yellow;\r\n                width: 50%;\r\n                margin: 14px auto;\">\r\n            </div>\r\n        </div>\r\n\r\n        <h3>For Owners</h3>\r\n        <hr style=\"    background: yellow;\r\n        width: 20%;\r\n        \">\r\n        <h5>• Register your cab/auto with CM Gaadi</h5>\r\n        <p style=\"margin-top: 20px;\">Cab/Auto owner needs to register your details and complete verification. Verification will takes 5-7 days. After the verification process your car will be active on CM Gaadi and live to the customer who needs car/auto rental.</p>\r\n\r\n        <h5>• Manage your rental service from phone</h5>\r\n        <p style=\"margin-top: 20px;\">You will get an id and password for your car rental. You can register n number of cars. Owner can register their drivers also in CM Gaadi.</p>\r\n\r\n\r\n        <h3>For Customer/Members</h3>\r\n\r\n        <hr style=\"background: yellow;\r\n        width: 20%; \">\r\n        <h5>• Search for a taxi book a taxi from our site</h5>\r\n        <p style=\"margin-top: 20px;\">We provide car/auto taxi services.</p>\r\n        <h5>• Search for a car and book a cab from our site</h5>\r\n        <p style=\"margin-top: 20px;\">If you need a driver for that trip, you will be directed to drivers list, and you can select your driver. Otherwise you prefer self-drive, upload you driver’s license, Aadhar number and address details. We SMS your car details 20 minutes before\r\n            pickup. Unlock it via the CM Gaadi app.</p>\r\n        <h5>• Fill the start checklist & end checklist in the CM Gaadi app</h5>\r\n        <p style=\"margin-top: 20px;\">Grab the keys from our office and drive. Return the car to the same location and fill the end checklist to end your trip.</p>\r\n    </div>\r\n</section>\r\n\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-area section-gap \">\r\n    <div class=\"container \">\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 \">\r\n                <div class=\"single-footer-widget \">\r\n                    <h6>About Us</h6>\r\n                    <p>CM Gaadi is an Indian company that offers vehicles for hire such as self-drive car rental or Auto rental services. It’s a platform for vehicle owners to rent your vehicle to desired customers and earn money from your own vehicle. And\r\n                        also it’s a better place to search your desired vehicle with your budget. </p>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6 \">\r\n                <div class=\"single-footer-widget \">\r\n                    <h6>Quick links</h6>\r\n                    <ul>\r\n                        <li><a routerLink=\"/userhome\">Home</a></li>\r\n                        <li><a routerLink=\"/aboutus \">Aboutus</a></li>\r\n                        <li><a routerLink=\"/features \">Features</a></li>\r\n                        <li><a routerLink=\"/privacy\">Privacy Policy</a> </li>\r\n\r\n                        <li><a routerLink=\"/terms\">Terms & Conditons</a></li>\r\n                        <li><a routerLink=\"/cancelations\">Refund Policy</a> </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-lg-3 col-md-6 col-sm-6 \"></div> -->\r\n            <!-- <div class=\"col-lg-2 col-md-6 col-sm-6 \">\r\n                <div class=\"single-footer-widget \">\r\n                    <h6>Features</h6>\r\n                    <ul>\r\n                        <li><a href=\"# \">Jobs</a></li>\r\n                        <li><a href=\"# \">Brand Assets</a></li>\r\n                        <li><a href=\"# \">Investor Relations</a></li>\r\n                        <li><a href=\"# \">Terms of Service</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6 \">\r\n                <div class=\"single-footer-widget \">\r\n                    <h6>Resources</h6>\r\n                    <ul>\r\n                        <li><a href=\"# \">Jobs</a></li>\r\n                        <li><a href=\"# \">Brand Assets</a></li>\r\n                        <li><a href=\"# \">Investor Relations</a></li>\r\n                        <li><a href=\"# \">Terms of Service</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6 social-widget \">\r\n                <div class=\"single-footer-widget \">\r\n                    <h6>Follow Us</h6>\r\n                    <p>Let us be social</p>\r\n                    <div class=\"footer-social d-flex align-items-center \">\r\n                        <a href=\"# \"><i class=\"fa fa-facebook \"></i></a>\r\n                        <a href=\"# \"><i class=\"fa fa-twitter \"></i></a>\r\n                        <a href=\"# \"><i class=\"fa fa-dribbble \"></i></a>\r\n                        <a href=\"# \"><i class=\"fa fa-behance \"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-lg-4 col-md-6 col-sm-6 \">\r\n                <div class=\"single-footer-widget \">\r\n                    <h6>Newsletter</h6>\r\n                    <p>Stay update with our latest</p>\r\n                    <div class=\" \" id=\"mc_embed_signup \">\r\n                        <form target=\"_blank \" novalidate=\"true \" action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01 \" method=\"get \" class=\"form-inline \">\r\n                            <input class=\"form-control \" name=\"EMAIL \" placeholder=\"Enter Email \" onfocus=\"this.placeholder='' \" onblur=\"this.placeholder='Enter Email ' \" required=\" \" type=\"email \">\r\n                            <button class=\"click-btn btn btn-default \"><span class=\"lnr lnr-arrow-right \"></span></button>\r\n                            <div style=\"position: absolute; left: -5000px; \">\r\n                                <input name=\"b_36c4fd991d266f23781ded980_aefe40901a \" tabindex=\"-1 \" value=\" \" type=\"text \">\r\n                            </div>\r\n                            <div class=\"info \"></div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <p class=\"mt-50 mx-auto footer-text col-lg-12 \">\r\n\r\n                Copyright &copy;\r\n                <script>\r\n                    document.write(new Date().getFullYear());\r\n                </script> All rights reserved\r\n\r\n            </p>\r\n        </div>\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotpasswordForgotpasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<div class=\"page-wrapper\" style=\"margin-top: 0px;\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-7\">\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <form>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-title\">\r\n                            <h4>Reset Password</h4>\r\n                            <p>Please enter your Email Id for reset your password.</p>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Email Id</label>\r\n                                <input type=\"text\" id=\"email\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"    margin: 0px;\">\r\n                            <button class=\"loginbtn\">Reset Password</button> &nbsp; &nbsp;\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-navigation></app-navigation>\r\n<section id=\"slider-area\">\r\n    <div class=\"single-slide-item overlay\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                \r\n\r\n                <div class=\"col-lg-7 text-right\">\r\n                    <div class=\"display-table\">\r\n                        <div class=\"display-table-cell\">\r\n                            <div class=\"slider-right-text\">\r\n                                <h1>BOOK A CAR TODAY!</h1>\r\n                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br> FOR OUR RETURNING CUSTOMERS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"service-area\" class=\"section-padding\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"section-title  text-center\">\r\n                    <h2>Our Services</h2>\r\n                    <span class=\"title-line\"><i class=\"fa fa-car\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n       \r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <i class=\"fa fa-taxi\"></i>\r\n                    <h3>RENTAL CAR</h3>\r\n                </div>\r\n            </div>\r\n           \r\n            \r\n            <div class=\"col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <i class=\"fa fa-map-marker\"></i>\r\n                    <h3>TAXI SERVICE</h3>\r\n                </div>\r\n            </div>\r\n         \r\n            <div class=\"col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <i class=\"fa fa-phone\"></i>\r\n                    <h3>call driver</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading | async\" class=\"overlay\" >\r\n    <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" aria-label=\"Loading\">\r\n    </mat-progress-spinner>\r\n    <!-- <div style=\"font-size: 40px;  margin-top: 450px; padding-left: 710px; color: white;\" >Loading......</div>   -->\r\n\r\n</div>\r\n  <!-- <div class=\"loader\" style=\"background-image: url('assets/images/pageLoader.gif') 50% 50% no-repeat rgb(249,249,249)\"></div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<div class=\"page-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-7\">\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <form (ngSubmit)=\"onSubmit(loginfrom, userData)\" #loginfrom=\"ngForm\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-title\">\r\n                            <h4>LOGIN</h4>\r\n                            <p>Welcome back! Please login to your account.</p>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Username</label>\r\n                                <input type=\"text\" id=\"email\" class=\"form-control\" [(ngModel)]=\"userData.usernameOrEmail\" name=\"usernameOrEmail\" #email=\"ngModel\" required>\r\n                                <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a user\r\n                                    name</span>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"password\">Password</label>\r\n                                <input type=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"userData.password\" name=\"password\" #password=\"ngModel\" required>\r\n                                <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a\r\n                                    password!</span>\r\n\r\n                            </div>\r\n                            <div class=\"row\" style=\"    margin: 0px;\">\r\n                                <button class=\"loginbtn\" [disabled]=\"!loginfrom.valid\">Login</button> &nbsp; &nbsp;\r\n                                <button class=\"signupbtn\" (click)=register()>Sign up</button>\r\n                            </div>\r\n                            <p style=\"text-align: left;cursor: pointer;\r\n                            margin-top: 12px;\" routerLink=\"/forgotpassword\">Forgot Password ?</p>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <header id=\"header-area\" class=\"fixed-top\">\r\n\r\n    <div id=\"header-bottom\" style=\"background-color: rgb(0 0 0);\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <a routerLink=\"/Home\" class=\"logo\">\r\n                        <img src=\"assets/img/logoos.png\" style=\"\r\n                        height: 64px;\" alt=\"JSOFT \" *ngIf=\"!isloggedIn\">\r\n                        <h6 *ngIf=\"isloggedIn\" style=\"    color: white;\r\n                        font-weight: bold;\r\n                        padding-top: 16px;\">Cmgaadi.com</h6>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"col-lg-8 d-none d-xl-block\">\r\n                    <nav class=\"mainmenu alignright\">\r\n                        <ul>\r\n                            <li *ngIf=\"!isloggedIn\" routerLinkActive=\"active\">\r\n                                <a routerLink=\"/userhome\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                                <a class=\"nav-link\" routerLink=\"/aboutus\" style=\"color: white;\">About US</a>\r\n                            </li>\r\n                            <li *ngIf=\"isloggedIn\" routerLinkActive=\"active\">\r\n                                <a routerLink=\"/admin\">Home</a>\r\n                            </li>\r\n                            <li *ngIf=\"!isloggedIn\" routerLinkActive=\"active\">\r\n                                <a routerLink=\"/login\">Login</a>\r\n                            </li>\r\n                            <li *ngIf=\"!isloggedIn\" routerLinkActive=\"active\">\r\n                                <a routerLink=\"/register\">Register</a>\r\n                            </li>\r\n                            <li *ngIf=\"isloggedIn\" (click)=\"logout()\">\r\n                                <a style=\"cursor: pointer;\">Logout</a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header> -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" style=\"background-color: #00060f !important;\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/img/logonew.png\" alt=\"\" style=\"width: 101px;\">\r\n        <!-- <h6>CMGAADI</h6> -->\r\n    </a>\r\n    <button style=\"background: white;\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/userhome\" style=\"color: white;\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/aboutus\" style=\"color: white;\">About Us</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/features\" style=\"color: white;\">Features</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/services\" style=\"color: white;\">Services</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/contactus\" style=\"color: white;\">Contact Us</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/login\" style=\"color: white;\">Login</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/register\" style=\"color: white;\">Register</a>\r\n            </li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelAddnewCarsAddimageOneAddimageOneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Vehicles</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Vehicles Image 1</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"addVehiclesform\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Image 1 <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img1.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage1($event)\" formControlName=\"img1\">\r\n                                <div *ngIf=\"submitted && f.img1.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img1.errors.required\">Image 1 is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelAddnewCarsAddimageTwoAddimageTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Vehicles</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Vehicles Image 2</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"addVehiclesform\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Image 2 <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\r\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelAddnewCarsAddlicenceBackAddlicenceBackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Vehicles</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Vehicles licence Image Back</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"addVehiclesform\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Image 2 <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\r\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelAddnewCarsAddlicenceFrontAddlicenceFrontComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Vehicles</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Vehicles licence Image Front</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"addVehiclesform\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Image 2 <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\r\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addnew-cars.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addnew-cars.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelAddnewCarsAddnewCarsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Vehicles</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add New Vehicles</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"addVehiclesform\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Vehicle Type<span class=\"text-danger\">*</span></label>\r\n\r\n                                <select [ngClass]=\"{ 'is-invalid': submitted && f.vehicleType.errors }\" [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\" class=\"form-control\">\r\n                                    <option value=\"\">Choose a option</option>\r\n                                    <option value=\"2Wheeler\">2 Wheeler</option>\r\n                                    <option value=\"3Wheeler\">3 Wheeler</option>\r\n                                    <option value=\"4Wheeler\">4 Wheeler</option>\r\n\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.vehicleType.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vehicleType.errors.required\">Vehicle Type is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Company Name<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleCompany.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleCompany\" formControlName=\"vehicleCompany\">\r\n\r\n                                <div *ngIf=\"submitted && f.vehicleCompany.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vehicleCompany.errors.required\">Company Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Model<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleModel.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleModel\" formControlName=\"vehicleModel\">\r\n                                <div *ngIf=\"submitted && f.vehicleModel.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vehicleModel.errors.required\">Vehicle Model is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Year<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleYear.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleYear\" formControlName=\"vehicleYear\">\r\n                                <div *ngIf=\"submitted && f.vehicleYear.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vehicleYear.errors.required\">Year is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Registration Number<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleRegistration.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleRegistration\" formControlName=\"vehicleRegistration\">\r\n                                <div *ngIf=\"submitted && f.vehicleRegistration.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vehicleRegistration.errors.required\">Vehicle Registration Number is required\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Rent Per Day<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.rent.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.rent\" formControlName=\"rent\">\r\n                                <div *ngIf=\"submitted && f.rent.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.rent.errors.required\">Vehicle Rent is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Locality<span class=\"text-danger\">*</span></label>\r\n                                <select [ngClass]=\"{ 'is-invalid': submitted && f.locality.errors }\" [(ngModel)]=\"vehicleModel.locality\" formControlName=\"locality\" class=\"form-control\">\r\n                                    <option value=\"\" selected disabled>Choose your locality</option>\r\n                                    <option value=\"{{locations.id}}\" *ngFor=\"let locations of locations\">\r\n                                        {{locations.name}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.locality.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.locality.errors.required\">Locality is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Driver<span class=\"text-danger\"></span></label>\r\n                                <select [(ngModel)]=\"vehicleModel.driver\" formControlName=\"driver\" class=\"form-control\">\r\n                                    <option value=\"\">Choose your Driver</option>\r\n                                    <option value=\"{{driverslist.id}}\" *ngFor=\"let driverslist of driverslist\">\r\n                                        {{driverslist.name}}</option>\r\n                                </select>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\" *ngIf=\"vehicleModel.driver != ''\">\r\n                            <div class=\"form-group\">\r\n                                <label>Driver Rent Per KM</label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.dRent.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.dRent\" formControlName=\"dRent\">\r\n                                <div *ngIf=\"submitted && f.dRent.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.dRent.errors.required\">Driver Rent is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Vehicle Rent Per KM</label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperKm.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperKm\" formControlName=\"vRentperKm\">\r\n                                <div *ngIf=\"submitted && f.vRentperKm.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vRentperKm.errors.required\">Vehicle Rent Per KM is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Vehicle Rent Per Hour</label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperHr.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperHr\" formControlName=\"vRentperHr\">\r\n                                <div *ngIf=\"submitted && f.vRentperHr.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.vRentperHr.errors.required\">Vehicle Rent per Hour is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> License Front <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addliscensefrnt($event)\" formControlName=\"liscencefrnt\">\r\n\r\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">License Front is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>License Back <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\">\r\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.liscenceback.errors.required\">License Back is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> RC Image <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.rcbook.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addrcimage($event)\" formControlName=\"rcbook\">\r\n                                <div *ngIf=\"submitted && f.rcbook.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.rcbook.errors.required\">RC Book is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Image 1 <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img1.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage1($event)\" formControlName=\"img1\">\r\n                                <div *ngIf=\"submitted && f.img1.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img1.errors.required\">Image 1 is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Image 2<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\r\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelAddnewCarsAddrcimageAddrcimageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Vehicles</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Vehicles RC Image </h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"addVehiclesform\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> RC Image  <span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\" class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\r\n                                <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.img2.errors.required\">RC Image is required</div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelBankdetailsAddBanksAddBanksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Cars</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\r\n            style=\"color:#1492E6;\">Add Banks</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add New Vehicles</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"addBankForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Account Holder Name <span class=\"text-danger\">*</span></label>\r\n                                <input [(ngModel)]=\"bankModel.acocuntholderName\" formControlName=\"acocuntholderName\" [ngClass]=\"{ 'is-invalid': submitted && f.acocuntholderName.errors }\" class=\"form-control\" \r\n                                type=\"text\"   >\r\n                             \r\n                                <div *ngIf=\"submitted && f.acocuntholderName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.acocuntholderName.errors.required\">Acocunt holder name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Account Number<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.accountNumber\"\r\n                                    formControlName=\"accountNumber\">\r\n                                <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.accountNumber.errors.required\">Company Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>IFSC Code<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.ifscode.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.ifscode\"\r\n                                    formControlName=\"ifscode\">\r\n                                <div *ngIf=\"submitted && f.ifscode.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.ifscode.errors.required\">IFSC Code is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Bank Name<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.bankName\"\r\n                                    formControlName=\"bankName\">\r\n                                <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\r\n                                (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                                <!-- <button (click)=\"clicks()\">click</button> -->\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/bankdetails.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/bankdetails.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelBankdetailsBankdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/admin\"><i\r\n                style=\"color: black;\">Home</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\r\n            style=\"color:#1492E6;\"> Banks</i> </p>\r\n            <button *ngIf=\"arr.length != 1\"  style=\"    float: right;\r\n            margin-top: -27px;\r\n            margin-right: 23px;\" class=\"btn btn-success\">Add Bank</button>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n   \r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Bank Details</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"addBankForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Account Holder Name <span class=\"text-danger\">*</span></label>\r\n                                <input disabled [(ngModel)]=\"bankModel.acocuntholderName\" formControlName=\"acocuntholderName\" [ngClass]=\"{ 'is-invalid': submitted && f.acocuntholderName.errors }\" class=\"form-control\" \r\n                                type=\"text\"   >\r\n                             \r\n                                <div *ngIf=\"submitted && f.acocuntholderName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.acocuntholderName.errors.required\">Acocunt holder name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Account Number<span class=\"text-danger\">*</span></label>\r\n                                <input disabled [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.accountNumber\"\r\n                                    formControlName=\"accountNumber\">\r\n                                <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.accountNumber.errors.required\">Company Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>IFSC Code<span class=\"text-danger\">*</span></label>\r\n                                <input disabled [ngClass]=\"{ 'is-invalid': submitted && f.ifscode.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.ifscode\"\r\n                                    formControlName=\"ifscode\">\r\n                                <div *ngIf=\"submitted && f.ifscode.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.ifscode.errors.required\">IFSC Code is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Bank Name<span class=\"text-danger\">*</span></label>\r\n                                <input disabled [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.bankName\"\r\n                                    formControlName=\"bankName\">\r\n                                <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\r\n                                (click)=\"edit()\" class=\"btn btn-warning\">Edit</button>\r\n                                <!-- <button (click)=\"clicks()\">click</button> -->\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelBankdetailsEditBankdetailsEditBankdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/bankdetails\"><i\r\n                style=\"color: black;\">Bank</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i\r\n            style=\"color:#1492E6;\">Add Banks</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Edit Bank Details</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"addBankForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Account Holder Name <span class=\"text-danger\">*</span></label>\r\n                                <input [(ngModel)]=\"bankModel.acocuntholderName\" formControlName=\"acocuntholderName\" [ngClass]=\"{ 'is-invalid': submitted && f.acocuntholderName.errors }\" class=\"form-control\" \r\n                                type=\"text\"   >\r\n                             \r\n                                <div *ngIf=\"submitted && f.acocuntholderName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.acocuntholderName.errors.required\">Acocunt holder name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Account Number<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.accountNumber\"\r\n                                    formControlName=\"accountNumber\">\r\n                                <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.accountNumber.errors.required\">Company Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>IFSC Code<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.ifscode.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.ifscode\"\r\n                                    formControlName=\"ifscode\">\r\n                                <div *ngIf=\"submitted && f.ifscode.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.ifscode.errors.required\">IFSC Code is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Bank Name<span class=\"text-danger\">*</span></label>\r\n                                <input [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\"\r\n                                    class=\"form-control\" type=\"text\" [(ngModel)]=\"bankModel.bankName\"\r\n                                    formControlName=\"bankName\">\r\n                                <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\"\r\n                                (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                                <!-- <button (click)=\"clicks()\">click</button> -->\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversAddDriversAddDriversComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\r\n                style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Drivers</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add New Drivers</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form [formGroup]=\"driverForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Driver Name <span class=\"text-danger\">*</span></label>\r\n                                <input [(ngModel)]=\"driverModel.name\" formControlName=\"name\" class=\"form-control\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n\r\n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.name.errors.required\">Driver Name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Phone Number<span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.number.errors }\" type=\"text\" [(ngModel)]=\"number\" formControlName=\"number\">\r\n\r\n                                <div *ngIf=\"submitted && f.number.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.number.errors.required\">Driver Number is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Address<span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" type=\"text\" [(ngModel)]=\"driverModel.address\" formControlName=\"address\">\r\n\r\n                                <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.address.errors.required\">Driver Address is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Pancard No<span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pancard.errors }\" type=\"text\" [(ngModel)]=\"driverModel.pancard\" formControlName=\"pancard\">\r\n\r\n                                <div *ngIf=\"submitted && f.pancard.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.pancard.errors.required\">Driver Pancard is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> License Front <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\"\r\n                                #file type=\"file\" (change)=\"addliscensefrnt($event)\"  formControlName=\"liscencefrnt\" >\r\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">Driver liscence front pic is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>License Back <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\"\r\n                                #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\"  >\r\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.liscenceback.errors.required\">Driver liscence back Pic is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Profile Pic <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.propic.errors }\"\r\n                                #file type=\"file\" (change)=\"addprofilepic($event)\"  formControlName=\"propic\"   >\r\n                                <div *ngIf=\"submitted && f.propic.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.propic.errors.required\">Driver Pic is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversAddDriversAdddriverLicscenceAdddriverLicscenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\r\n        style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Drivers</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\npadding: 20px;\r\nbackground-color: #F8FAFB;\r\nmargin-top: 25px;\r\nmargin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Driver licence Image Front</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"driverForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> License Front <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\" #file type=\"file\" (change)=\"addliscensefrnt($event)\" formControlName=\"liscencefrnt\">\r\n                                <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.liscencefrnt.errors.required\">Driver liscence front pic is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversAddDriversAdddriverLicscencebackAdddriverLicscencebackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\r\n        style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Drivers</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\npadding: 20px;\r\nbackground-color: #F8FAFB;\r\nmargin-top: 25px;\r\nmargin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Driver licence Image Back</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"driverForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>License Back <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\" #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\">\r\n                                <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.liscenceback.errors.required\">Driver liscence back Pic is required</div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversAddDriversAdddriverProfilepicAdddriverProfilepicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\r\n        style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Add Drivers</i> </p>\r\n    <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\npadding: 20px;\r\nbackground-color: #F8FAFB;\r\nmargin-top: 25px;\r\nmargin-left: 31px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>Add Driver Profile Pic</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n            <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"driverForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label> Profile Pic <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.propic.errors }\" #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"propic\">\r\n                                <div *ngIf=\"submitted && f.propic.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.propic.errors.required\">Driver Pic is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                <div class=\"col-sm-12\">\r\n                    <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/drivers.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/drivers.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversDriversComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-navigation></app-navigation>\r\n<div class=\"row\" style=\"margin-bottom: 27px;\r\nmargin-top: 100px;  \">\r\n \r\n    <div class=\"col-sm-4\">\r\n        <button routerLink=\"/admin\" class=\" btn btn-dark\" style=\"float: Left;\"><i class=\"fa fa-arrow-left\"></i> Back</button>\r\n\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <h4 style=\"text-align: center;\" >Driver <em style=\"font-style: normal;\r\n            color: #ffb100;\">Management</em> </h4>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <button routerLink=\"/add-drivers\" class=\" btn btn-success\" style=\"float: right;\"> <i class=\"fa fa-plus\"></i> Add Drivers</button>\r\n        \r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    \r\n</div>\r\n<div class=\"row\">\r\n<div class=\"container\">\r\n\r\n    <div class=\"col-sm-12\">\r\n      \r\n    \r\n                    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <mat-header-cell *matHeaderCellDef>Driver Name </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element \"> {{element.name}}</mat-cell>\r\n                        </ng-container>\r\n                      \r\n                        <ng-container matColumnDef=\"phonenumber\">\r\n                            <mat-header-cell *matHeaderCellDef> Contact Number</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">{{element.number}}</mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"pan\">\r\n                            <mat-header-cell *matHeaderCellDef>Pancard Number</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\">{{element.panCardNO}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"licensefrnt\">\r\n                            <mat-header-cell *matHeaderCellDef>License Front</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"><Button (click)=\"getlicsence(element.id)\" style=\"    border: none;\r\n                                background: none;\" matTooltip=\"License Front \"> <i class=\"fa fa-eye\"></i> View</Button> </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"licenseback\">\r\n                            <mat-header-cell *matHeaderCellDef>License Back</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> <Button (click)=\"getlicsenceback(element.id)\"  style=\"    border: none;\r\n                                background: none;\" matTooltip=\"License Back\">\r\n                                 <i class=\"fa fa-eye\"></i> View</Button></mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"edit\">\r\n                            <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"><i  matTooltip=\"Edit Profile\" (click)=\"edit(element)\" class=\"fa fa-edit\"></i> </mat-cell>\r\n\r\n                        </ng-container>\r\n\r\n\r\n\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n\r\n\r\n                    <mat-paginator #paginator [length]=\"totalLength\" [pageSize]=\"limit\" (page)=\"changePage($event)\">\r\n                    </mat-paginator>\r\n\r\n\r\n                </div>\r\n\r\n          \r\n\r\n    </div>\r\n</div> -->\r\n\r\n\r\n<div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <app-sidebar></app-sidebar>\r\n    <!-- End of Sidebar -->\r\n\r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n\r\n        <!-- Main Content -->\r\n        <div id=\"content\">\r\n\r\n            <!-- Topbar -->\r\n            <app-header></app-header>\r\n            <!-- End of Topbar -->\r\n            <!-- <app-adminhome></app-adminhome> -->\r\n            <!-- Begin Page Content -->\r\n            <div class=\"container-fluid\" style=\"margin-left: 223px;\r\n            margin-top: 99px;\r\n            padding-right: 240px;  \">\r\n                <!-- Page Heading -->\r\n                <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n                    <div class=\"col-sm-6\">\r\n                        <h1 class=\"h3 mb-2 text-gray-800\">Driver Management</h1>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <button routerLink=\"/add-drivers\" style=\"float: right;\" class=\" btn btn-success\"><i class=\"fa fa-plus\"\r\n                            aria-hidden=\"true\"></i> Add New Drivers</button>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!-- DataTales Example -->\r\n                <div class=\"card shadow mb-4\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Driver Name</th>\r\n                                        <th>Phone Number</th>\r\n                                        <th>Pan Card</th>\r\n                                        <th>License Front</th>\r\n                                        <th>License Back</th>\r\n                                        <th>Edit</th>\r\n                                    </tr>\r\n                                </thead>\r\n\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let driverslist of driverslist\">\r\n                                        <td>{{driverslist.name}}</td>\r\n                                        <td>{{driverslist.number}}</td>\r\n                                        <td>{{driverslist.panCardNO}}</td>\r\n                                        <td>\r\n                                            <Button (click)=\"getlicsence(driverslist.id)\" style=\"    border: none;\r\n                                            background: none;\" matTooltip=\"License Front \"> <i class=\"fa fa-eye\"></i> View</Button>\r\n                                        </td>\r\n                                        <td>\r\n                                            <Button (click)=\"getlicsenceback(driverslist.id)\" style=\"    border: none;\r\n                                            background: none;\" matTooltip=\"License Back\">\r\n                                             <i class=\"fa fa-eye\"></i> View</Button>\r\n                                        </td>\r\n                                        <td><i matTooltip=\"Edit Profile\" (click)=\"edit(driverslist)\" class=\"fa fa-edit\"></i></td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversEditDriversEditDriversComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/drivers\"><i\r\n                style=\"color: black;\">Drivers</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Edit Drivers</i> </p>\r\n\r\n\r\n    <div class=\"container\" style=\"margin-top: 20px;\">\r\n\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Edit Driver Basic Details\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Driver Basic Details\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n                padding: 20px;\r\n                background-color: #F8FAFB;\r\n                margin-top: 25px;\r\n                  margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Driver Basic Details</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <form [formGroup]=\"driverForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Driver Name <span class=\"text-danger\">*</span></label>\r\n                                            <input [(ngModel)]=\"driverModel.name\" formControlName=\"name\" class=\"form-control\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n\r\n                                            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.name.errors.required\">Driver Name is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Phone Number<span class=\"text-danger\">*</span></label>\r\n                                            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.number.errors }\" type=\"text\" [(ngModel)]=\"driverModel.number\" formControlName=\"number\">\r\n\r\n                                            <div *ngIf=\"submitted && f.number.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.number.errors.required\">Driver Number is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Address<span class=\"text-danger\">*</span></label>\r\n                                            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" type=\"text\" [(ngModel)]=\"driverModel.address\" formControlName=\"address\">\r\n\r\n                                            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.address.errors.required\">Driver Address is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Pancard No<span class=\"text-danger\">*</span></label>\r\n                                            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pancard.errors }\" type=\"text\" [(ngModel)]=\"driverModel.pancard\" formControlName=\"pancard\">\r\n\r\n                                            <div *ngIf=\"submitted && f.pancard.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.pancard.errors.required\">Driver Pancard is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                    <div class=\"col-sm-12\">\r\n                                        <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Edit Driver License Front\r\n\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Driver License Front\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n                padding: 20px;\r\n                background-color: #F8FAFB;\r\n                margin-top: 25px;\r\n                  margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Driver License Front\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> License Front <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addliscensefrnt($event)\">\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"update()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Edit Driver License Back\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Driver License Back\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n            padding: 20px;\r\n            background-color: #F8FAFB;\r\n            margin-top: 25px;\r\n              margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Driver License Back\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>License Back <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addliscenseback($event)\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updateLback()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Edit Driver Profile Picture\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Driver Profile Picture\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n            padding: 20px;\r\n            background-color: #F8FAFB;\r\n            margin-top: 25px;\r\n              margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Driver Profile Picture</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Profile Pic <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addprofilepic($event)\">\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updatepPic()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversViewlicsencebackViewlicsencebackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-navigation></app-navigation> -->\r\n<div class=\"div\">\r\n    <span class=\"close\" (click)=\"close()\">X</span>\r\n</div>\r\n<img [src]=\"liscenimag\" alt=\"\">";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelDriversViewliscenceViewliscenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-navigation></app-navigation> -->\r\n<div class=\"div\">\r\n    <span class=\"close\" (click)=\"close()\" style=\"    padding: 8px;\">X</span>\r\n</div>\r\n<img [src]=\"liscenimag\" alt=\"\" style=\"    height: 315px;\">";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/edit-cars/edit-cars.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/edit-cars/edit-cars.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelEditCarsEditCarsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n    <p style=\"padding-left: 29px; margin-top: 68px;font-size: 19px;\"> <a routerLink=\"/vehicles\"><i\r\n                style=\"color: black;\">Vehicles</i></a> &nbsp; <i class=\"fa fa-angle-double-right\"></i> &nbsp; <i style=\"color:#1492E6;\">Edit Vehicles</i> </p>\r\n\r\n    <div class=\"container\" style=\"margin-top: 20px;\">\r\n\r\n        <mat-accordion>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Edit Vehicle Details\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Vehicle Details\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n            padding: 20px;\r\n            background-color: #F8FAFB;\r\n            margin-top: 25px;\r\n            margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Vehicles</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <form [formGroup]=\"addVehiclesform\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Vehicle Type<span class=\"text-danger\">*</span></label>\r\n                                            <!-- <input [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\" class=\"form-control\" \r\n                                        type=\"text\"   > -->\r\n                                            <select [ngClass]=\"{ 'is-invalid': submitted && f.vehicleType.errors }\" [(ngModel)]=\"vehicleModel.vehicleType\" formControlName=\"vehicleType\" class=\"form-control\">\r\n                                            <option value=\"\">Choose a option</option>\r\n                                            <option value=\"2Wheeler\">2 Wheeler</option>\r\n                                            <option value=\"3Wheeler\">3 Wheeler</option>\r\n                                            <option value=\"4Wheeler\">4 Wheeler</option>\r\n\r\n                                        </select>\r\n                                            <div *ngIf=\"submitted && f.vehicleType.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vehicleType.errors.required\">Vehicle Type is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Company Name<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleCompany.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleCompany\" formControlName=\"vehicleCompany\">\r\n                                            <div *ngIf=\"submitted && f.vehicleCompany.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vehicleCompany.errors.required\">Company Name is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Model<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleModel.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleModel\" formControlName=\"vehicleModel\">\r\n                                            <div *ngIf=\"submitted && f.vehicleModel.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vehicleModel.errors.required\">Vehicle Model is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Year<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleYear.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleYear\" formControlName=\"vehicleYear\">\r\n                                            <div *ngIf=\"submitted && f.vehicleYear.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vehicleYear.errors.required\">Year is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Registration Number<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.vehicleRegistration.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vehicleRegistration\" formControlName=\"vehicleRegistration\">\r\n                                            <div *ngIf=\"submitted && f.vehicleRegistration.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vehicleRegistration.errors.required\">Vehicle Registration Number is required\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Rent Per Day<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.rent.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.rent\" formControlName=\"rent\">\r\n                                            <div *ngIf=\"submitted && f.rent.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.rent.errors.required\">Vehicle Rent is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Locality<span class=\"text-danger\">*</span></label>\r\n                                            <select [ngClass]=\"{ 'is-invalid': submitted && f.locality.errors }\" [(ngModel)]=\"vehicleModel.locality\" formControlName=\"locality\" class=\"form-control\">\r\n                                            <option value=\"\" selected disabled>Choose your locality</option>\r\n                                            <option value=\"{{locations.id}}\" *ngFor=\"let locations of locations\">\r\n                                                {{locations.name}}</option>\r\n                                        </select>\r\n                                            <div *ngIf=\"submitted && f.locality.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.locality.errors.required\">Locality is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Driver<span class=\"text-danger\"></span></label>\r\n                                            <select [(ngModel)]=\"vehicleModel.driver\" formControlName=\"driver\" class=\"form-control\">\r\n                                            <option value=\"\">Choose your Driver</option>\r\n                                            <option value=\"{{driverslist.id}}\" *ngFor=\"let driverslist of driverslist\">\r\n                                                {{driverslist.name}}</option>\r\n                                        </select>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\" *ngIf=\"vehicleModel.driver != ''\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Driver Rent Per KM</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.dRent.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.dRent\" formControlName=\"dRent\">\r\n                                            <div *ngIf=\"submitted && f.dRent.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.dRent.errors.required\">Driver Rent is required</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Vehicle Rent Per KM</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperKm.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperKm\" formControlName=\"vRentperKm\">\r\n                                            <div *ngIf=\"submitted && f.vRentperKm.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vRentperKm.errors.required\">Vehicle Rent Per KM is required\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Vehicle Rent Per Hour</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && f.vRentperHr.errors }\" class=\"form-control\" type=\"text\" [(ngModel)]=\"vehicleModel.vRentperHr\" formControlName=\"vRentperHr\">\r\n                                            <div *ngIf=\"submitted && f.vRentperHr.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.vRentperHr.errors.required\">Vehicle Rent per Hour is required\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> License Front <span class=\"text-danger\">*</span></label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': submitted && f.liscencefrnt.errors }\"\r\n                                            class=\"form-control\" #file type=\"file\" (change)=\"addliscensefrnt($event)\" formControlName=\"liscencefrnt\">\r\n        \r\n                                        <div *ngIf=\"submitted && f.liscencefrnt.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.liscencefrnt.errors.required\">License Front is required</div>\r\n                                        </div>\r\n        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>License Back <span class=\"text-danger\">*</span></label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': submitted && f.liscenceback.errors }\"\r\n                                            class=\"form-control\" #file type=\"file\" (change)=\"addliscenseback($event)\" formControlName=\"liscenceback\">\r\n                                        <div *ngIf=\"submitted && f.liscenceback.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.liscenceback.errors.required\">License Back is required</div>\r\n                                        </div>\r\n        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> RC Image <span class=\"text-danger\">*</span></label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': submitted && f.rcbook.errors }\"\r\n                                            class=\"form-control\" #file type=\"file\" (change)=\"addrcimage($event)\" formControlName=\"rcbook\">\r\n                                        <div *ngIf=\"submitted && f.rcbook.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.rcbook.errors.required\">RC Book is required</div>\r\n                                        </div>\r\n        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Image 1 <span class=\"text-danger\">*</span></label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': submitted && f.img1.errors }\"\r\n                                            class=\"form-control\" #file type=\"file\" (change)=\"addimage1($event)\" formControlName=\"img1\">\r\n                                        <div *ngIf=\"submitted && f.img1.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.img1.errors.required\">Image 1 is required</div>\r\n                                        </div>\r\n        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Image 2<span class=\"text-danger\">*</span></label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': submitted && f.img2.errors }\"\r\n                                            class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\" formControlName=\"img2\">\r\n                                        <div *ngIf=\"submitted && f.img2.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.img2.errors.required\">Image 2 is required</div>\r\n                                        </div>\r\n        \r\n                                    </div>\r\n                                </div> -->\r\n                                    <div class=\"col-sm-12\">\r\n                                        <button style=\"width: 20%; margin-left: auto;margin-right: auto;display: block;\" (click)=\"submit()\" class=\"btn btn-warning\">Submit</button>\r\n                                        <!-- <button (click)=\"clicks()\">click</button> -->\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Vehicle Image 1\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Update Vehicle Image\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n            padding: 20px;\r\n            background-color: #F8FAFB;\r\n            margin-top: 25px;\r\n            margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Vehicles Image 1</h3>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Image 1 <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addimage1($event)\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updateimg1()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Vehicle Image 2\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Update Vehicle Image 2\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n            padding: 20px;\r\n            background-color: #F8FAFB;\r\n            margin-top: 25px;\r\n            margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>Edit Vehicles Image 2</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Image 1 <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addimage2($event)\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updateimg2()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <!-- licesnce imag frnt -->\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        License Front\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Update License Front\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n            padding: 20px;\r\n            background-color: #F8FAFB;\r\n            margin-top: 25px;\r\n            margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>License Front</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> License Front <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addliscensefrnt($event)\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updatelicfrnt()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <!-- licesnce imag back -->\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        License Back\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Update License Back\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>License Back</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> License Back <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addliscenseback($event)\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updatelicback()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <!-- rc Image -->\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        RC Image\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                        Update Rc Image\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"container\" style=\"    box-shadow: 0px 3px 6px #00000029;\r\n    padding: 20px;\r\n    background-color: #F8FAFB;\r\n    margin-top: 25px;\r\n    margin-left: 1px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h3>RC Image</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"     padding: 34px;   background-color: WHITE;\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Rc Image<span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" #file type=\"file\" (change)=\"addrcimage($event)\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-warning\" (click)=\"updaterc()\">Update</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelHandovervehiclesAddVehiclekmHandoverAddVehiclekmHandoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>add-vehiclekm-handover works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/handovervehicles/handovervehicles.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/handovervehicles/handovervehicles.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelHandovervehiclesHandovervehiclesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<div class=\"page-wrapper\" style=\"margin-top: 101px;\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-4\">\r\n            <button routerLink=\"/admin\" class=\" btn btn-dark\" style=\"float: Left;\"><i class=\"fa fa-arrow-left\"\r\n                    aria-hidden=\"true\"></i> Back</button>\r\n\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <h4 style=\"text-align: center;\">Vehicle <em style=\"font-style: normal;\r\n                color: #ffb100;\">Handover Management</em> </h4>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n\r\n        </div>\r\n        <hr>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"margin-top: 10px;\">\r\n        <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n            <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n            <div class=\"card\" style=\"margin-bottom: 10px;\">\r\n                <span class=\"close\">   <button matTooltip=\"View Vehicle\" class=\"btn btn-dark\"\r\n                    style=\"display: block;margin-bottom: 10px;margin-left: auto;\"\r\n                    (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> </button></span>\r\n                <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\r\n                    style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\r\n                <P style=\"text-align: center;\">Starting Location : {{results.startingLocation}}</P>\r\n                <P style=\"text-align: center;\">Destination Location : {{results.destinationLocation}}</P>\r\n\r\n                &nbsp;\r\n             \r\n                <button class=\"btn btn-dark\" (click)=\"openDialog(results)\">Add current kilometer</button>\r\n                <!-- </mat-card> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/ownerpannel.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/ownerpannel.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelOwnerpannelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\r\n\r\n\r\n    <section id=\"service-area\" class=\"section-padding\" style=\"    margin-top: 74px;\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <!-- Section Title Start -->\r\n\r\n                <!-- Section Title End -->\r\n            </div>\r\n\r\n\r\n            <!-- Service Content Start -->\r\n            <div class=\"row\">\r\n                <!-- Single Service Start -->\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/vehicles\">\r\n                    <div class=\"service-item\">\r\n                        <!-- <i class=\"fa fa-taxi\" style=\"color: rebeccapurple;\"></i> -->\r\n                        <img src=\"./assets/img/car.png\" />\r\n                        <h3>Vehicles</h3>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Single Service End -->\r\n\r\n                <!-- Single Service Start -->\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/vehicletracking\">\r\n                    <div class=\"service-item\">\r\n                        <!-- <i class=\"fa fa-map-marker\" style=\"    color: red\"></i> -->\r\n                        <img src=\"./assets/img/order-shipped.png\" />\r\n                        <h3>Vehicle Tracking</h3>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/drivers\">\r\n                    <div class=\"service-item\">\r\n                        <!-- <i class=\"fa fa-user\" style=\"    color: green\"></i> -->\r\n                        <img src=\"./assets/img/taxi-driver.png\" />\r\n                        <h3>Drivers</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-item\">\r\n                        <!-- <i class=\"fa fa-history\" ></i> -->\r\n                        <img src=\"./assets/img/mobile-payment--v3.png\" />\r\n\r\n                        <h3>Payment Reports</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/request\">\r\n                    <div class=\"service-item\">\r\n                        <img src=\"./assets/img/request-service.png\" />\r\n\r\n                        <h3>Request</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/handovervehicles\">\r\n                    <div class=\"service-item\">\r\n                        <img src=\"./assets/img/icons8-valet-parking-100.png\" />\r\n\r\n\r\n                        <h3>Handover Vehicles </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/bankdetails\">\r\n                    <div class=\"service-item\">\r\n                        <img src=\"./assets/img/bank-building.png\" />\r\n                        <h3>Bank Manage</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\" routerLink=\"/admin-resetpassword\">\r\n                    <div class=\"service-item\">\r\n                        <img src=\"./assets/img/icons8-password-book-100.png\" alt=\"\">\r\n                        <h3>Reset password</h3>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <i class=\"fa fa-user\" style=\"    color: blue\"></i>\r\n                    <h3>Profile</h3>\r\n                </div>\r\n            </div>\r\n           -->\r\n                <!-- Single Service End -->\r\n            </div>\r\n            <!-- Service Content End -->\r\n        </div>\r\n    </section>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/requests.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/requests.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelRequestsRequestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"page-wrapper\">\r\n\r\n\r\n\r\n\r\n    <div class=\"content\"  style=\"margin-top: 33px !important;\">\r\n        <button class=\"btn btn-warning\" routerLink=\"/admin\"><i class=\"fa fa-arrow-left\"></i>  </button>\r\n        <div class=\"row\" >\r\n            <div class=\"col-sm-12\">\r\n   \r\n                <mat-tab-group mat-align-tabs=\"center\" (selectedTabChange)=\"tabClick($event)\">\r\n                    <mat-tab label=\"Pending\">\r\n\r\n                        <div class=\"row\" style=\"margin-top: 10px;\">\r\n                            <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n                                <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n                                <div class=\"card\">\r\n                                    <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\r\n                                        style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                                    <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                                    <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\r\n                                    <P style=\"text-align: center;\">Starting Location : {{results.startingLocation}}</P>\r\n                                    <P style=\"text-align: center;\">Destination Location : {{results.destinationLocation}}</P>\r\n                                   \r\n                                    &nbsp;\r\n                                    <button class=\"btn btn-dark\"\r\n                                        style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\r\n                                        (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i> View More</button>\r\n                                    <div class=\"row\" style=\"padding: 5px;\">\r\n                                        <button class=\"btn btn-success\" style=\"margin-left: auto;\" (click)=\"approve(results)\"><i class=\"fa fa-check\"></i> Approve</button>\r\n                                        <button class=\"btn btn-danger\" style=\"    margin-right: auto; \r\n                                            margin-left: 11px;\" (click)=\"reject(results)\"> <i class=\"fa fa-close\"></i> Reject</button>\r\n\r\n                                    </div>\r\n                                    <!-- </mat-card> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h5 *ngIf=\"message == 'No Data Found'\" style=\"      margin-top: 100px;  text-align: center;overflow: hidden;\">No Request Found</h5>\r\n\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Approved\">\r\n                        <div class=\"row\" style=\"margin-top: 10px;\">\r\n                            <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n                                <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n                                <div class=\"card\">\r\n                                    <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\r\n                                        style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                                    <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                                    <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\r\n                                    <P style=\"text-align: center;\">Starting Location : {{results.startingLocation}}</P>\r\n                                    <P style=\"text-align: center;\">Destination Location : {{results.destinationLocation}}</P>\r\n                                   \r\n                                    &nbsp;\r\n                                    <button class=\"btn btn-dark\"\r\n                                        style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\r\n                                        (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i>  View More</button>\r\n                                    \r\n                                    <!-- </mat-card> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h5 *ngIf=\"message == 'No Data Found'\" style=\"      margin-top: 100px;  text-align: center;overflow: hidden;\">No Request Found</h5>\r\n\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Reject\">\r\n                        <div class=\"row\" style=\"margin-top: 10px;\">\r\n                            <div class=\"col-sm-3\" *ngFor=\"let results of results\">\r\n                                <!-- <mat-card style=\"margin-bottom: 10px;\"> -->\r\n                                <div class=\"card\">\r\n                                    <img src=\"{{apiurl}}vehicle/getImage1/{{results.vehicleId}}\" alt=\"\"\r\n                                        style=\"display: block;height: 134px;margin-bottom: 10px;margin-left: auto;margin-right: auto;\">\r\n                                    <P style=\"text-align: center;\">Company : {{results.companyName}}</P>\r\n                                    <P style=\"text-align: center;\">Customer Name : {{results.customerName}}</P>\r\n                                    <P style=\"text-align: center;\">Starting Location : {{results.startingLocation}}</P>\r\n                                    <P style=\"text-align: center;\">Destination Location : {{results.destinationLocation}}</P>\r\n                                   \r\n                                    &nbsp;\r\n                                    <button class=\"btn btn-dark\"\r\n                                        style=\"display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;\"\r\n                                        (click)=\"view(results)\"> <i class=\"fa fa-eye\"></i>  View More</button>\r\n                                    \r\n                                    <!-- </mat-card> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h5 *ngIf=\"message == 'No Data Found'\" style=\"      margin-top: 100px;  text-align: center;overflow: hidden;\">No Request Found</h5>\r\n                        \r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/view-requests/view-requests.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/view-requests/view-requests.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelRequestsViewRequestsViewRequestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <!-- <h2>s</h2> -->\r\n      \r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <span style=\"    margin-left: auto;\" (click)=\"close()\" class=\"close\">X</span>\r\n                <h4>{{customerName}}</h4>\r\n                <hr>\r\n\r\n                <div class=\"line\"></div>\r\n\r\n                <hr>\r\n                <span class=\"round\" style=\"    margin-left: 94px;\r\n                background: green;\r\n                margin-top: -29px;\r\n                height: 25px;\r\n            \r\n              \r\n                width: 25px;\r\n                border-radius: 100%;\"></span>\r\n\r\n                <span class=\"round\" style=\"    margin-left: auto;\r\n                background: red;\r\n                margin-right: 94px;\r\n                margin-top: -25px;\r\n                height: 25px;\r\n               \r\n                left: -7px;\r\n                width: 25px;\r\n                border-radius: 100%;\"></span>\r\n                <div class=\"row\">\r\n                    <p style=\"margin-left: 70px; margin-right: auto;\">Starting From : {{startingLocation}}</p>\r\n                    <p style=\"margin-left: auto; margin-right: 100px;\">Destination : {{destinationLocation}}</p>\r\n\r\n                </div>\r\n\r\n                <!-- <div class=\"row\" style=\"margin-top: 20px;\"> -->\r\n                <h5 style=\"text-align:center;\">Details</h5>\r\n\r\n                <hr style=\"margin-left: auto;\r\n                    margin-right: auto;\r\n                    width: 50%;\r\n                    background: yellow;\">\r\n                <p style=\"text-align:center;\"><i class=\"fa fa-calendar\"></i> Requested Date : {{requestedDate}}</p>\r\n                <h6 style=\"text-align:center;\">Vehicle Details</h6>\r\n                <hr style=\"margin-left: auto;\r\n                    margin-right: auto;\r\n                    width: 50%;\r\n                    background: yellow;\">\r\n\r\n                <p style=\"text-align:center;\"><i class=\"fa fa-car\"></i> Company Name : {{companyName}}</p>\r\n                <p style=\"text-align:center;\"><i class=\"fa fa-car\"></i> Vehicle Model : {{model}}</p>\r\n                <p style=\"text-align:center;\"><i class=\"fa fa-number\"></i> Registration Number : {{numberPlate}}</p>\r\n                <p style=\"text-align:center;\"><i class=\"fa fa-inr\"></i> Rent Per Day : {{rentPerDay}}</p>\r\n\r\n                <!-- </div>  -->\r\n                <div class=\"row\" style=\"    margin: 13px auto 0;\" *ngIf=\"approvalstatus == 2\">\r\n                    <button class=\"btn btn-success\" style=\"margin-right: 10px;\" (click)=\"approve()\"> <i class=\"fa fa-check\"></i> Approve</button>\r\n                    <button class=\"btn btn-danger\" style=\"margin-left: 10px;\" (click)=\"reject()\"> <i class=\"fa fa-close\"></i> Reject</button>\r\n                </div>\r\n            </div>\r\n\r\n         \r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelVehiclesOwnerviewvehiclesOwnerviewvehiclesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<app-sidebar></app-sidebar>\r\n\r\n<div class=\"page-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3>Vehicle <em style=\"    font-style: normal;\r\n                    color: #ffd000;\"> Details</em> </h3>\r\n                <hr>\r\n\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n\r\n                <!-- <mat-card> -->\r\n                <div class=\"card\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h5 style=\"text-align: center;    margin-left: 24px;\"> {{vehicleModel.vehicleCompany}},{{vehicleModel.vehicleModel}}</h5>\r\n                            <hr>\r\n                        </div>\r\n                        <!-- <div class=\"col-sm-3\">\r\n                            <p style=\"\r\n                           background: #ffcb67;\r\n                            border-radius: 125px;\r\n                            padding: 3px;\r\n                        \">{{vehicleModel.vehicleModel}}</p>\r\n                        </div> -->\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <img src=\"{{apiurl}}vehicle/getImage1/{{vId}}\" alt=\"\"\r\n                                style=\"     width: 200px; height: 186px;  \">\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <p style=\"margin-top: 10px;    text-align: left;\"><i class=\"fa fa-car\"></i>&nbsp;Vehicle\r\n                                Type :{{vehicleModel.vehicleType}}</p>\r\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-registered\"></i>&nbsp; Registration Number\r\n                                : {{vehicleModel.vehicleRegistration}}</p>\r\n                            <p style=\"    text-align: left;\"><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\r\n                                {{vehicleModel.locality}}</p>\r\n                            <hr>\r\n                            <h6>Rent Details</h6>\r\n                            &nbsp;\r\n                            <p  *ngIf=\"rentPerHour != null\" style=\"    text-align: left;\"><i class=\"fa fa-inr\"></i>&nbsp; Rent Per Hour :\r\n                                {{rentperhour}}</p>\r\n                            <p *ngIf=\"vehicleModel.rent != null\" style=\"    text-align: left;\"><i class=\"fa fa-calendar\"></i>&nbsp; Rent Per Day :\r\n                                {{vehicleModel.rent}}</p>\r\n                            <p *ngIf=\"rentperkm != null\" style=\"    text-align: left;\"><i class=\"fa fa-road\"></i>&nbsp; Rent Per KM :\r\n                                {{rentperkm}}</p>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"card\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                            <img src=\"{{apiurl}}driver/getProfilePic/{{id}}\" alt=\"\" style=\"\" />\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <h6>Driver Details</h6>\r\n                            <hr>\r\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-user\"></i>&nbsp;Driver Name\r\n                                :\r\n                                {{vehicleModel.dname}}</p>\r\n                            <p *ngIf=\"DriverDetailsofCar !=null\"style=\"text-align: left;    font-size: 16px;\"><i class=\"fa fa-phone\"></i>&nbsp;Contact\r\n                                Number :\r\n                                {{vehicleModel.dnumber}}</p>\r\n                            <p *ngIf=\"DriverDetailsofCar !=null\" style=\"text-align: left;    font-size: 16px;\"><i\r\n                                    class=\"fa fa-map-marker\"></i>&nbsp;Driver\r\n                                Address : {{vehicleModel.daddreess}}</p>\r\n                            <p *ngIf=\"DriverDetailsofCar ==null\"> No Driver is linked to this vehicle!</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"card\">\r\n                    <h6> Vehicle Details </h6>\r\n                    <hr>\r\n                    <p>License Front</p>\r\n                    <img [src]=\"liscence1\" alt=\"\">\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n\r\n                    <p>License Back</p>\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    <img [src]=\"liscence2\" alt=\"\">\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n\r\n                    <p>RC Book</p>\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    &nbsp;\r\n                    <img [src]=\"rc\" alt=\"\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        \r\n        <!-- <div class=\"col-sm-12\">\r\n\r\n\r\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" style=\"    width: 241px;\r\n                margin-left: auto;\r\n                margin-right: auto;\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img class=\"d-block \" src=\"{{apiurl}}vehicle/getImage1/{{vId}}\" style=\"      margin-left: auto;\r\n                        margin-right: auto;      width: 242px;\" alt=\"First slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block\" [src]=\"vehicleimage2\" style=\"      margin-left: auto;\r\n                        margin-right: auto;      width: 242px;\" alt=\"Second slide\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n\r\n\r\n                <hr style=\"    width: 52%;\r\n                margin-right: auto;\r\n                margin-left: auto;\r\n                display: block;\">\r\n            </div> -->\r\n        <!-- <div class=\"col-sm-12\">\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-industry\"></i> &nbsp; Comapny Name : {{vehicleModel.vehicleCompany}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Type : {{vehicleModel.vehicleType}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-registered\"></i> &nbsp; Vehicle Registration :\r\n                        {{vehicleModel.vehicleRegistration}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-car\"></i> &nbsp; Vehicle Model :\r\n                        {{vehicleModel.vehicleModel}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-map-marker\"></i> &nbsp; Location :\r\n                        {{vehicleModel.locality}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-calendar\"></i> &nbsp; Vehicle Year :\r\n                        {{vehicleModel.vehicleYear}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\r\n                        {{vehicleModel.rent}}</p>\r\n                </mat-card>\r\n\r\n                <mat-card>\r\n                    <p><i class=\"fa fa-inr\"></i> &nbsp; Vehicle Rent :\r\n                        {{vehicleModel.rent}}</p>\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p>License Front</p>\r\n                    <img [src]=\"liscence1\" alt=\"\" style=\"    width: 36%;\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p>License Back</p>\r\n                    <img [src]=\"liscence2\" alt=\"\" style=\"    width: 36%;\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <p>RC Book</p>\r\n                    <img [src]=\"rc\" alt=\"\" style=\"    width: 36%;\">\r\n                </mat-card>\r\n            </div> -->\r\n    </div>\r\n</div>\r\n<!-- </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/vehicles.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/vehicles.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelVehiclesVehiclesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-navigation></app-navigation> -->\r\n<!-- <app-header></app-header> -->\r\n<!-- <div class=\"page-wrapper\" style=\"margin-top: 101px;\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-4\">\r\n            <button routerLink=\"/admin\" class=\" btn btn-dark\" style=\"float: Left;\"><i class=\"fa fa-arrow-left\"\r\n                aria-hidden=\"true\"></i> Back</button>\r\n\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <h4 style=\"text-align: center;\">Vehicle <em style=\"font-style: normal;\r\n                color: #ffb100;\">Management</em> </h4>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <button routerLink=\"/add-cars\" class=\" btn btn-success\" style=\"float: right;\"><i class=\"fa fa-plus\"\r\n                aria-hidden=\"true\"></i> Add New Cars</button>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <select [(ngModel)]=\"vstatus\" (change)=\"changeFilter(vstatus)\" class=\"form-control\" style=\"margin-top: 15px;\">\r\n                <option value=\"\" selected disabled>Filter Options</option>\r\n                <option value=\"1\">Approved</option>\r\n                <option value=\"3\">Rejected</option>\r\n                <option value=\"2\">Pending</option>\r\n\r\n            </select>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row \" style=\"margin-top: 11px;\">\r\n        <div class=\"col-lg-3 col-md-6 con suv mpv\" *ngFor=\"let car of carList\">\r\n            <div class=\"single-popular-car\">\r\n                <div class=\"p-car-thumbnails\">\r\n                    <img src=\"{{apUrl}}vehicle/getImage1/{{car.id}}\" alt=\"JSOFT\" class=\"vehImg\">\r\n                </div>\r\n\r\n                <div class=\"p-car-content\">\r\n                    <h3>\r\n                        <a>{{car.companyName}}</a>\r\n                        <span class=\"price\"><i class=\"fa fa-tag\"></i> {{car.rentPerDay}}</span>\r\n                    </h3>\r\n                    <h5 style=\"float: right;\">Model : {{car.model}}</h5>\r\n\r\n                    <h5>{{car.numberPlate}}</h5>\r\n\r\n                    <h5 style=\"    float: right;\r\n                        margin-top: -1px;\">{{car.type}}</h5>\r\n\r\n                    <h5>{{car.year}}</h5>\r\n                    <h5><i class=\"fa fa-map-marker\"></i> {{car.locationName}}</h5>\r\n\r\n               \r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"p-car-content\" style=\"    padding: 0px 20px 19px;\">\r\n                    <button style=\"margin: 2px;\" (click)=\"view(car)\" class=\"btn btn-dark\"><i class=\"fa fa-eye\"></i>\r\n                        View</button>\r\n                    <button style=\"margin: 2px;\" (click)=\"edit(car)\" class=\"btn btn-danger\"><i class=\"fa fa-pencil\"></i>\r\n                        Edit</button>\r\n                    <button style=\"margin: 2px;\" (click)=\"delete(car)\" class=\"btn btn-warning\"><i\r\n                            class=\"fa fa-trash\"></i> Delete</button>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"errormessage == 'No data found'\">\r\n        <img src=\"./assets/img/nodata.png\" alt=\"\" style=\"    margin: auto;\r\n        display: block;     width: 36%;   filter: brightness(0.5);\">\r\n    </div>\r\n    <h5 *ngIf=\"errormessage == 'No data found'\" style=\"text-align: center;\">No Vehicles Found</h5>\r\n</div> -->\r\n\r\n\r\n<div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <app-sidebar></app-sidebar>\r\n    <!-- End of Sidebar -->\r\n\r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n\r\n        <!-- Main Content -->\r\n        <div id=\"content\">\r\n\r\n            <!-- Topbar -->\r\n            <app-header></app-header>\r\n            <!-- End of Topbar -->\r\n            <!-- <app-adminhome></app-adminhome> -->\r\n            <!-- Begin Page Content -->\r\n            <div class=\"container-fluid\" style=\"margin-left: 223px;\r\n            margin-top: 99px;\r\n            padding-right: 240px;  \">\r\n                <!-- Page Heading -->\r\n                <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n                    <div class=\"col-sm-6\">\r\n                        <h1 class=\"h3 mb-2 text-gray-800\">Vehicle Management</h1>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <button routerLink=\"/add-cars\" style=\"float: right;\" class=\" btn btn-success\"><i class=\"fa fa-plus\"\r\n                            aria-hidden=\"true\"></i> Add New Cars</button>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!-- DataTales Example -->\r\n                <div class=\"card shadow mb-4\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Name</th>\r\n                                        <th>Position</th>\r\n                                        <th>Office</th>\r\n                                        <th>Age</th>\r\n                                        <th>Start date</th>\r\n                                        <th>Salary</th>\r\n                                    </tr>\r\n                                </thead>\r\n\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Tiger Nixon</td>\r\n                                        <td>System Architect</td>\r\n                                        <td>Edinburgh</td>\r\n                                        <td>61</td>\r\n                                        <td>2011/04/25</td>\r\n                                        <td>$320,800</td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicletracking/vehicletracking.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicletracking/vehicletracking.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnerpannelVehicletrackingVehicletrackingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n\r\n<div class=\"row\" style=\"margin-left: 10px;margin-bottom: 10px;\">\r\n    <button class=\"btn btn-dark\" routerLink=\"/admin\"> <i class=\"fa fa-arrow-left\"\r\n        aria-hidden=\"true\"></i> Back</button>\r\n</div>\r\n<div class=\"row\" style=\"margin-top: 0px;\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let result of result\">\r\n        <div class=\"card\">\r\n            <div class=\"row\" style=\"margin-top: 0px;\">\r\n                <div class=\"col-sm-4\">\r\n                    <span class=\"material-icons\" style=\"color: green;\">\r\n                        location_on\r\n                        </span>\r\n                    <p>{{result.startingLocation}} </p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"line-top\"></div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <span class=\"material-icons\" style=\"    color: red;\r\n                        margin-left: 66px;\">\r\n                        location_on\r\n                        </span>\r\n                    <p style=\"text-align: end;\">{{result.destinationLocation}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 0px;\">\r\n                <div class=\"col-sm-12\">\r\n                    <h5>Details</h5>\r\n                    <hr>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <p>Vehicle Model <em style=\"    float: right;\">{{result.model}}</em> </p>\r\n                    <p>Requested Days <em style=\"    float: right;\">{{result.requestedDays}}</em> </p>\r\n                    <p>Requested Date <em style=\"    float: right;\">{{result.requestedDate}}</em> </p>\r\n                    <p>Requested End Date <em style=\"    float: right;\">{{result.requestEndDate}}</em> </p>\r\n\r\n                    <p>Starting Km <em style=\"    float: right;\">{{result.startingKM}}</em> </p>\r\n                    <p>Ending KM <em style=\"    float: right;\">{{result.endingKM}}</em> </p>\r\n                    <p>Travelled KM <em style=\"    float: right;\">{{result.customerTravelledKM}}</em> </p>\r\n                    <p>Amount <em style=\"    float: right;\">{{result.amount}}</em> </p>\r\n                    <p>Driver is Required <em style=\"    float: right;\">{{result.driverRequired}}</em> </p>\r\n                </div>\r\n                <!-- <div class=\"col-sm-6\">\r\n                    <p style=\"text-align:end ;\">{{result.model}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.requestedDays}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.requestedDate}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.requestEndDate}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.startingKM}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.endingKM}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.customerTravelledKM}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.amount}}</p>\r\n                    <p style=\"text-align:end ;\">{{result.driverRequired}}</p>\r\n\r\n                </div> -->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/privacyandpolicy/privacyandpolicy.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacyandpolicy/privacyandpolicy.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrivacyandpolicyPrivacyandpolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    Privacy & Policy\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div class=\"container\" style=\"margin-top: 20px;\">\r\n\r\n        <h6> 1. Introduction </h6>\r\n        <hr>\r\n        <p>\r\n\r\n            In this policy, we, us, our and Cmgaadi refer to Cmgaadi. For more information about us and how to contact us, see our website www.cmgaadi.com. When you use CM Gaadi mobile and desktop applications (the App) and services offered to users (collectively\r\n            with the Website and the App, the Services), you trust us with your personal data. We’re committed to keeping that trust. That starts with helping you understand our privacy practices. This notice describes the personal data we collect, how\r\n            it’s used and shared, and your choices regarding this data. We recommend that you read this along with our privacy overview, which highlights key points about our privacy practices.\r\n        </p>\r\n        <h6> 2. Overview </h6>\r\n        <hr>\r\n\r\n        <p> Scope This notice describes how CM Gaadi and its affiliates collect and use personal data. This notice applies to all users of our apps, websites, features in the world, unless covered by a separate privacy notice, such as the CM Gaadi Freight\r\n            Privacy Notice or Careem Privacy Policy. This notice specifically applies to:  Riders: individuals who request or receive transportation, including those who receive transportation requested by another individual  Drivers: individuals who\r\n            provide transportation to Riders individually or through partner transportation companies This notice also governs CM Gaadi’s other collections of personal data in connection with CM Gaadi’s services. For example, we may collect the contact\r\n            information of individuals who use accounts owned by CM Gaadi for Business customers or of owners. We may also collect the personal data of those who start but do not complete applications to be drivers or in connection with our mapping technology\r\n            and features. All those subject to this notice are referred to as “users” in this notice. In addition, please note the following: Our data practices are subject to applicable laws in the places in which we operate. This means that we engage\r\n            in the practices described in this notice in a particular country or region only if permitted under the laws of those places. Please contact us here or through the addresses below with any questions regarding our practices in a particular\r\n            country or region.\r\n        </p>\r\n        <h6>3. Data controller and transfer </h6>\r\n        <hr>\r\n\r\n        <p>  [data Collector Company] are the data controllers for the personal data collected in connection with use of CM Gaadi’s services in the Indian Economic Area, the India . If you’re a driver in the India , the CM Gaadi entity holding the operator\r\n            or driver license is a controller for complying with licensing requirements. [Data Collector ] is the data controller for the personal data collected in connection with use of CM Gaadi’s services anywhere else. CM Gaadi operates, and processes\r\n            data, globally. We may also transfer data to countries other than the one where our users live or use CM Gaadi’s services. We do so in order to fulfill our agreements with users, such as our Terms of Use, or based on users’ prior consent,\r\n            adequacy decisions for the relevant countries, or other transfer mechanisms as may be available under applicable law, such as the Standard Contractual Clauses. Questions, comments, and complaints about CM Gaadi’s data practices can be submitted\r\n            here [Link]. You may also use this form to submit a question to CM Gaadi’s Data Protection Officer [Link].\r\n        </p>\r\n        <h6> 4. Data Collection & Uses </h6>\r\n        <hr>\r\n\r\n        <p>\r\n            Data provided by users. This includes:  User profile: We collect data when users create or update their CM Gaadi accounts. This may include their name, email, phone number, login name and password, address, profile picture, payment or banking information\r\n            (including related payment verification information), driver’s license and other government identification documents (which may indicate document numbers as well as birth date, gender, and photo). This also includes vehicle or insurance information\r\n            of drivers, emergency contact information, user settings, and evidence of health or fitness to provide services using CM Gaadi apps.  This also includes gender and/or occupation (when required for certain CM Gaadi services or programs, such\r\n            as CM Gaadi Cash or Women Rider Preferred).  We may use the photos submitted by users to verify their identities, such as through facial recognition technologies. For more information, please see the section titled “How we use personal data.”\r\n             Background check and identity verification: We collect background check and identity verification information for drivers This may include information such as driver history or criminal record (where permitted by law), and right to work.\r\n            This information may be collected by an authorized vendor on CM Gaadi’s behalf. We also collect identity verification from CM Gaadi Eats users who request alcohol delivery.  Demographic data: We may collect demographic data about users, including\r\n            through user surveys. In some countries, we may also receive demographic data about users from third parties.  User content: We collect the information users submit when they contact CM Gaadi customer support, provide ratings or compliments\r\n            for other users, or otherwise contact CM Gaadi. This may include feedback, photographs or other recordings collected by users. Data created during use of our services. This includes:  Location data (driver): CM Gaadi collects this data when\r\n            the CM Gaadi app is running in the foreground (app open and on-screen) or background (app open but not on-screen) of their mobile device.  Location data (riders). We collect precise or approximate location data from riders’ and delivery recipients’\r\n            mobile devices if they enable us to do so. CM Gaadi collects this data from the time a ride until it is finished, and any time the app is running in the foreground of their mobile device. We use this data to enhance your use of our apps, including\r\n            to improve pick-up locations, enable safety features, and prevent and detect fraud.  CM Gaadi collects driver location data, and links location data collected during a trip with their rider’s account, even if the rider has not enabled us\r\n            to collect location data from their device. This enables us to offer services to the rider like receipt generation and customer support.  Transaction information: We collect transaction information related to the use of our services, including\r\n            the type of services requested or provided, order details, delivery information, date and time the service was provided, amount charged, distance traveled, and payment method. Additionally, if someone uses your promotion code, we may associate\r\n            your name with that person.  Usage data: We collect data about how users interact with our services. This includes data such as access dates and times, app features or pages viewed, app crashes and other system activity, type of browser,\r\n            and third-party sites or services used before interacting with our services. In some cases, we collect this data through cookies, pixels, tags, and similar tracking technologies that create and maintain unique identifiers. To learn more about\r\n            these technologies, please see our Cookie Notice.  Device data: We may collect data about the devices used to access our services, including the hardware models, device IP address, operating systems and versions, software, preferred languages,\r\n            unique device identifiers, advertising identifiers, serial numbers, device motion data, and mobile network data.  Communications data: We enable users to communicate with each other and CM Gaadi through CM Gaadi’s mobile apps and websites.\r\n            For example, we enable drivers and riders to call, text, or send other files to each other (generally without disclosing their telephone numbers to each other). To provide this service, CM Gaadi receives some data regarding the calls, texts,\r\n            or other communications, including the date and time of the communications and the content of the communications. CM Gaadi may also use this data for customer support services (including to resolve disputes between users), for safety and security\r\n            purposes, to improve our products and services, and for analytics.  Rental car’s data: We collect data generated by rental Car’s, when they’re in use. This includes the date and time of use, and the location, route, and distance traveled.\r\n            To the extent permitted by law, the location data collected from the rental car during the trip will be linked to the renter’s account, even if they have not enabled CM Gaadi to collect location data from their mobile device.  Audio recordings:\r\n            In certain jurisdictions, and where permitted by law, users can record the audio of their trips through an in-app feature. Recordings are encrypted and stored on users’ devices, and are only shared with CM Gaadi if submitted to customer support\r\n            by the users in connection with safety incidents. Data from other sources.  User feedback, such as ratings, feedback, or compliments.  Users participating in our referral programs. For example, when a user refers another person, we receive\r\n            the referred person’s personal data from that user.  CM Gaadi account owners who request services for or on behalf of other users, or who enable such users to request or receive services through their accounts. This includes owners of CM\r\n            Gaadi for Business accounts.  Users or others providing information in connection with claims or disputes.  CM Gaadi business partners through which users create or access their CM Gaadi account, such as payment providers, social media services,\r\n            or apps or websites that use CM Gaadi’s APIs or whose APIs CM Gaadi uses.  Vendors who help us verify users’ identity, background information, and eligibility to work, for regulatory, safety, and security purposes.  Insurance, vehicle, or\r\n            financial services providers for drivers.  Partner transportation companies (for drivers who use our services through an account associated with such a company).  Publicly available sources.  Marketing service providers. How we use Personal\r\n            Data  To enhance the safety and security of our users and services  For customer support  For research and development  To enable communications between users  To send marketing and non-marketing communications to users  In connection\r\n            with legal proceedings CM Gaadi uses the data it collects for purposes including: Providing services and features- CM Gaadi uses the data we collect to provide, personalize, maintain, and improve our products and services.  Create and update\r\n            users’ accounts.  Verify drivers’ identity, background history, and eligibility to work.  Enable transportation, and other services.  Offer, process, or facilitate payments for our services.  Offer, obtain, provide, or facilitate insurance,\r\n            vehicle, invoicing, or financing solutions in connection with our services.  Track and share the progress of rides.  Enable features that allow users to share information with other people, such as when riders submit a compliment about a\r\n            driver, refer a friend to CM Gaadi, split fares, or share ETA and location with their contacts.  Enable features to personalize users’ CM Gaadi accounts, such as creating bookmarks for favorite places, and to enable quick access to previous\r\n            destinations. Please see the section of this notice titled “Choice and transparency” to learn how to object to this use of personal data.  Enable Accessibility features that make it easier for users with disabilities to use our services,\r\n            such as those that enable deaf or hard-of-hearing drivers to alert their riders of their disabilities, allow only text messages from riders, and enable receipt of flashing trip request notifications instead of sound notifications on their\r\n            mobile device.  Perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity\r\n            trends. Safety and security. We use personal data to help maintain the safety, security, and integrity of our services and users. This includes:  Screening riders and drivers persons before enabling their use of our services and at subsequent\r\n            intervals, including through reviews of background checks, where permitted by law, to help prevent use of our services by unsafe drivers and/or riders.  Using data from drivers’ devices to help identify unsafe driving behavior such as speeding\r\n            or harsh braking and acceleration, and to inform them of safer driving practices. We also use data from car owner’s to verify the type of vehicles they used to provide rental service.  using information derived from driver’s license photos,\r\n            and other photos submitted to CM Gaadi, for safety and security purposes. This includes CM Gaadi’s Real-Time ID Check feature, which prompts drivers to share a selfie before going online to help ensure that the driver using the app matches\r\n            the CM Gaadi account we have on file. This also includes comparing photographs that we have on file against photographs (i) of other users to prevent identity-borrowing, and (ii) from public databases to verify user identity.  Using device,\r\n            location, profile, usage, and other data to prevent, detect, and combat fraud or unsafe activities.  Using user ratings and feedback to encourage compliance with our Community Guidelines and as grounds for deactivating drivers and delivery\r\n            persons with low ratings or who otherwise violated such guidelines in certain countries. Customer support. CM Gaadi uses the information we collect (including recordings of customer support calls with notice to and the consent of the user)\r\n            to provide customer support, including to:  Direct questions to the appropriate customer support person  Investigate and address user concerns  Monitor and improve our customer support responses and processes Research and development. We\r\n            may use the data we collect for testing, research, analysis, product development, and machine learning to improve the user experience. This helps us to improve and enhance the safety and security of our services, improve our ability to prevent\r\n            the use of our services for illegal or improper purposes, develop new features and products, and facilitate insurance and finance solutions in connection with our services. Enabling communications between users. For example, a driver may message\r\n            or call a rider to confirm a pickup location, a rider may contact a driver to retrieve a lost item. Marketing. CM Gaadi may use the data we collect to market our services to our users. This includes sending users communications about CM Gaadi\r\n            services, features, promotions, sweepstakes, studies, surveys, news, updates, and events. We may also send communications to our users about products and services offered by CM Gaadi partners. Although we may send users communications about\r\n            CM Gaadi partners’ products and services, we do not sell users’ personal data to, or share it with, such partners or others for purposes of their own direct marketing or advertising, except with users’ consent. We may use the data we collect\r\n            to personalize the marketing communications (including advertisements) that we send, including based on user location, past use of CM Gaadi’s services, and user preferences and settings. Non-marketing communications. CM Gaadi may use the data\r\n            we collect to generate and provide users with receipts; inform them of changes to our terms, services, or policies; or send other communications that aren’t for the purpose of marketing the services or products of CM Gaadi or its partners.\r\n            Legal proceedings and requirements. We may use the personal data we collect to investigate or address claims or disputes relating to use of CM Gaadi’s services, or as otherwise allowed by applicable law, or as requested by regulators, government\r\n            entities, and official inquiries. Automated decision-making. We use personal data to make automated decisions relating to use of our services. This includes:  Enabling dynamic pricing, in which the price of a ride for CM Gaadi orders, is\r\n            determined based on constantly varying factors such as the estimated time and distance, the predicted route, estimated traffic, and the number of riders and drivers using CM Gaadi at a given moment.  Matching available drivers to users requesting\r\n            services. Users can be matched based on availability, proximity, and other factors.  Determining driver and car’s rating , and deactivating drivers, riders, and cars with low ratings  Deactivating users who are identified as having engaged\r\n            in fraud or activities that may otherwise harm CM Gaadi, its users, and others. In some cases, such as when a user is determined to be abusing CM Gaadi’s referral program, such behavior may result in automatic deactivation.  Using driver\r\n            location information, and communications between riders and drivers, to identify cancellation fees earned or induced through fraud. For example, if we determine by using such information that a driver is delaying a rider pickup in order to\r\n            induce a cancellation, we will not charge the rider a cancellation fee and will adjust the amounts paid to the driver to omit such a fee. To object to such adjustment, please contact CM Gaadi customer support.\r\n        </p>\r\n        <h6>5. Cookies and Third Party Technologies </h6>\r\n        <hr>\r\n\r\n        <p> Cookies are small text files that are stored on browsers or devices by websites, apps, online media, and advertisements. CM Gaadi uses cookies and similar technologies for purposes such as:  Authenticating users  Remembering user preferences\r\n            and settings  Determining the popularity of content  Delivering and measuring the effectiveness of advertising campaigns  Analyzing site traffic and trends, and generally understanding the online behaviors and interests of people who interact\r\n            with our services We may also allow others to provide audience measurement and analytics services for us, to serve advertisements on our behalf across the Internet, and to track and report on the performance of those advertisements. These\r\n            entities may use cookies, web beacons, SDKs, and other technologies to identify the devices used by visitors to our websites, as well as when they visit other online sites and services.\r\n        </p>\r\n        <h6>6. Data Sharing and disclosure </h6>\r\n        <hr>\r\n\r\n        <p>\r\n            With Other User  Riders’ first name, rating, and pickup and/or dropoff locations with drivers.  Riders’ first name with other riders in a carpool trip. Riders in carpool trips may also see the dropoff location of the other riders.  For drivers and\r\n            Car Owner, we may share data with the rider(s), delivery recipient(s) and car owner(s), including name and photo; vehicle make, model, color, license plate, and vehicle photo; location (before and during trip); average rating provided by users;\r\n            total number of trips; length of use of the CM Gaadi app; contact information (depending upon applicable laws); and driver or delivery person profile, including compliments and other feedback submitted by past users.  We also provide riders\r\n            recipients with receipts containing information such as a breakdown of amounts charged, driver first name, photo, route map, and such other information required on invoices in the country or region where the driver operates.  For those who\r\n            participate in CM Gaadi’s referral program, we share certain personal data of referred users, such as trip count, with the user who referred them, to the extent relevant to determining the referral bonus. At the user’s request  Other people\r\n            at the user’s request. For example, we share a user’s ETA and location with a friend when requested by that user, or a user’s trip information when they split a fare with a friend.  CM Gaadi business partners. For example, if a user requests\r\n            a service through a partnership or promotional offering made by a third party, CM Gaadi may share certain data with those third parties. This may include, for example, other services, platforms, apps, or websites that integrate with our APIs;\r\n            vehicle suppliers or services; those with an API or service with which we integrate; With the General Public  Questions or comments from users submitted through public forums such as CM Gaadi blogs and CM Gaadi social media pages may be viewable\r\n            by the public, including any personal data included in the questions or comments submitted by a user. The CM Gaadi Account Owner If a user requests transportation or places an order using an account owned by another party, we may share their\r\n            order or trip information, including real-time location data, with the owner of that account. This occurs, for example, when:  A rider uses their employer’s CM Gaadi for Business profile, such as when they take trips arranged through CM Gaadi\r\n            Central  A driver uses an account owned by or associated with an CM Gaadi partner transportation company  A rider takes a trip arranged by a friend or under a Family Profile With CM Gaadi subsidiaries and affiliates We share data with our\r\n            subsidiaries and affiliates to help us provide our services or conduct data processing on our behalf. With CM Gaadi service providers and business partners CM Gaadi provides data to vendors, consultants, marketing partners, research firms,\r\n            and other service providers or business partners. These include:  Payment processors and facilitators  Background check and identity verification providers (drivers and cash riders only)  Cloud storage providers  Google, in connection\r\n            with the use of Google Maps in CM Gaadi’s apps (see Google’s privacy policy for information on their collection and use of data)  Facebook, in connection with the use of the Facebook Business Tools in CM Gaadi’s apps and websites (see Facebook’s\r\n            privacy policy for information on their collection and use of data)  Marketing partners and marketing platform providers, including social media advertising services  Data analytics providers  Research partners, including those performing\r\n            surveys or research projects in partnership with CM Gaadi or on CM Gaadi’s behalf  Vendors that assist CM Gaadi to enhance the safety and security of its apps  Consultants, lawyers, accountants, and other professional service providers \r\n            Fleet partners  Insurance and financing partners  Airports  Lime and other local providers  Vehicle solution vendors or third-party vehicle suppliers For legal reasons or in the event of a dispute CM Gaadi may share users’ personal data\r\n            if we believe it’s required by applicable law, regulation, operating license or agreement, legal process or governmental request, or where the disclosure is otherwise appropriate due to safety or similar concerns. This includes sharing personal\r\n            data with law enforcement officials, public health officials, other government authorities, airports (if required by the airport authorities as a condition of operating on airport property), or other third parties as necessary to enforce our\r\n            Terms of Service, user agreements, or other policies; to protect CM Gaadi’s rights or property or the rights, safety, or property of others; or in the event of a claim or dispute relating to the use of our services. If you use another person’s\r\n            credit card, we may be required by law to share your personal data, including trip or order information, with the owner of that credit card. This also includes sharing personal data with others in connection with, or during negotiations of,\r\n            any merger, sale of company assets, consolidation or restructuring, financing, or acquisition of all or a portion of our business by or into another company. With consent CM Gaadi may share a user’s personal data other than as described in\r\n            this notice if we notify the user and they consent to the sharing. 7. Data Retention and Deletion CM Gaadi retains user data for as long as necessary for the purposes described above. This means that we retain different categories of data\r\n            for different periods of time depending on the category of user to whom the data relates, the type of data, and the purposes for which we collected the data. Users may request deletion of their account at any time through the app or website\r\n            provided by CM Gaadi Following an account deletion request, CM Gaadi deletes the user’s account and data, unless they must be retained due to legal or regulatory requirements, for purposes of safety, security, and fraud prevention, or because\r\n            of an issue relating to the user’s account such as an outstanding credit or an unresolved claim or dispute. Because we are subject to legal and regulatory requirements relating to drivers and delivery persons, this generally means that we\r\n            retain their account and data for a minimum of 7 years after a deletion request. For riders and delivery recipients, their data is generally deleted within 90 days of a deletion request, except where retention is necessary for the above reasons.\r\n        </p>\r\n        <h6>8. Ground For Processing.</h6>\r\n        <hr>\r\n\r\n        <p>\r\n\r\n            To provide requested services and features For purposes of the legitimate interests of CM Gaadi or other parties This includes using personal data to maintain and enhance our users’ safety and security. For example, we use personal data to prevent use\r\n            of our services by users who have engaged in inappropriate or dangerous behaviour, such as by retaining data of banned users to prevent their use of CM Gaadi’s apps. We also use usage data to prevent matching of riders and drivers for whom\r\n            there is higher risk of conflict (for instance, because they have been the subject of prior complaints from other users). This also includes purposes such as combating fraud; improving our services, direct marketing, research, and development;\r\n            and enforcing CM Gaadi’s Terms of Service. In addition, it includes using personal data to the extent necessary for the interests of other people or the general public, such as in connection with legal or insurance claims, and to protect the\r\n            rights and safety of others. With consent CM Gaadi may collect and use personal data based on the user’s consent. For example, we may collect personal data through voluntary surveys. Responses to such surveys are collected on the basis of\r\n            consent and will be deleted once no longer necessary for the purposes collected. A user who has provided consent to a collection or use of their personal data can revoke it at any time. However, the user will not be able to use any service\r\n            or feature that requires collection or use of that personal data.\r\n        </p>\r\n        <ul>\r\n            <li>In order to provide our services, we must collect and use certain personal data. This includes:</li>\r\n            <li>User profile data, which we use to establish and maintain user accounts; verify user identity; communicate with users about their trips, orders, and accounts; and enable users to make payments or receive earnings</li>\r\n            <li>Background trip information, which is used to verify an applicant’s eligibility to be a driver.</li>\r\n            <li>Driver and delivery person location data, which we use to track trips and assist with navigation</li>\r\n            <li>Transaction information</li>\r\n            <li>Information relating to customer support</li>\r\n            <li>\r\n                Usage data, which is necessary to maintain, optimize, and enhance CM Gaadi’s services, including to determine incentives, connect riders and drivers, and calculate costs of trips and driver earnings\r\n\r\n\r\n            </li>\r\n\r\n        </ul>\r\n        <h6>9. Choice of Transparency</h6>\r\n        <hr>\r\n\r\n        <p> CM Gaadi enables users to access and control the data that CM Gaadi collects, including through:\r\n\r\n\r\n        </p>\r\n        <ul>\r\n            <li>In-app settings</li>\r\n            <li>Device permissions</li>\r\n            <li>In-app ratings pages</li>\r\n            <li>Marketing opt-outs</li>\r\n\r\n        </ul>\r\n\r\n        <h6>10. Updates To This Notice</h6>\r\n        <hr>\r\n\r\n        <p>We may occasionally update this notice. If we make significant changes, we will notify users in advance of the changes through the CM Gaadi apps or through other means, such as email and website. Your continued use of the Services after we make\r\n            changes is deemed to be acceptance of those changes, We encourage users to periodically review this notice for the latest information on our privacy practices. After such notice, use of our services by users in countries outside the European\r\n            Union will be understood as consent to the updates to the extent permitted by law.\r\n        </p>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<div class=\"page-wrapper\" >\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-7\">\r\n\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <form [formGroup]=\"registerForm\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-title\">\r\n                            <h4>Register</h4>\r\n                            <p>Welcome back! Please register your account.</p>\r\n\r\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\r\n                                <input [(ngModel)]=\"registerModel.name\" formControlName=\"name\" matInput\r\n                                    placeholder=\"Name\" type=\"text\">\r\n                                <button mat-icon-button matSuffix>\r\n                                    <mat-icon></mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('name').hasError('required')\">\r\n                                   Name is Required!\r\n                                </mat-error>\r\n\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\r\n                                <input [(ngModel)]=\"registerModel.email\" formControlName=\"email\" matInput\r\n                                    placeholder=\"Email ID\" type=\"text\">\r\n                                <button mat-icon-button matSuffix>\r\n                                    <mat-icon></mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\r\n                                    Email ID is Required!\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\r\n                                    Email ID must be a valid!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\r\n                                <input [(ngModel)]=\"registerModel.username\" formControlName=\"username\" matInput\r\n                                    placeholder=\"User Name\" type=\"text\">\r\n                                <button mat-icon-button matSuffix>\r\n                                    <mat-icon></mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('username').hasError('required')\">\r\n                                    User Name is Required!\r\n                                </mat-error>\r\n                               \r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\r\n                                <input [(ngModel)]=\"registerModel.address\" formControlName=\"address\" matInput\r\n                                    placeholder=\"Address\" type=\"text\">\r\n                                <button mat-icon-button matSuffix>\r\n                                    <mat-icon></mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('address').hasError('required')\">\r\n                                   Address is Required!\r\n                                </mat-error>\r\n                               \r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px;\">\r\n                                <input [(ngModel)]=\"registerModel.mobNo\" formControlName=\"mobNo\" matInput\r\n                                    placeholder=\"Mobile Number\" type=\"number\">\r\n                                <button mat-icon-button matSuffix>\r\n                                    <mat-icon></mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('mobNo').hasError('required')\">\r\n                                    Mobile Number is Required!\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"registerForm.get('mobNo').hasError('pattern')\">\r\n                                    Mobile Number must be a valid 10 digit !\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"registerModel.password\"\r\n                                    formControlName=\"password\" matInput placeholder=\"Password\" type=\"password\">\r\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\r\n                                    Password is Required!\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"registerForm.get('password').hasError('minlength')\">\r\n                                   Minimum 8 letters needed!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"registerModel.Confirmpassword\"\r\n                                    formControlName=\"Confirmpassword\" matInput placeholder=\"Confirm Password\" type=\"password\">\r\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                                <mat-error *ngIf=\"registerForm.get('Confirmpassword').hasError('required')\">\r\n                                    Password is Required!\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"registerForm.get('Confirmpassword').hasError('mustMatch')\">\r\n                                   Password must is Required!\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <div class=\"row\" style=\"    margin: 10px;\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <button class=\"loginbtn\" [disabled]=\"!registerForm.valid\"   (click)=\"register()\">Register</button>\r\n\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <p routerLink=\"/login\" style=\"text-align: center; outline: none; cursor: pointer;\">\r\n                                        Already have an account? Login</p>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n\r\n                            <p style=\"margin-top: 50px;\">Term of use. Privacy policy</p>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterpageformarketingPulicregistrationmarketingPulicregistrationmarketingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pulicregistrationmarketing works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/registerpageformarketing.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/registerpageformarketing.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterpageformarketingRegisterpageformarketingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" style=\"background-color: #00060f !important;\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/img/logoos.png\" alt=\"\" style=\"width: 50px;\">\r\n    </a>\r\n    <button style=\"background: white;\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/userhome\" style=\"color: white;\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/aboutus\" style=\"color: white;\">About US</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" style=\"color: white;\">Features</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" style=\"color: white;\">Contact Us</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" style=\"color: white;\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" style=\"color: white; padding-left: 8px;   border: 1px solid #ffcb67;\">Register</a>\r\n            </li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n</nav> -->\r\n\r\n<app-navigation></app-navigation>\r\n<section class=\"banner-area relative\">\r\n    <!-- <div class=\"overlay overlay-bg\"></div> -->\r\n    <div class=\"container\">\r\n        <div class=\"row fullscreen d-flex align-items-center justify-content-center\" style=\" height: 667px;\">\r\n            <div class=\"banner-content col-lg-7 col-md-6 \">\r\n                <h6 class=\"text-white \">the Royal Essence of Journey</h6>\r\n                <h1 class=\"text-white text-uppercase\">\r\n                    Bringing the future of rides\r\n                </h1>\r\n                <p class=\"pt-20 pb-20 text-white\">\r\n                    Offers vehicles for hire such as self-drive car rental or Auto rental services.\r\n\r\n                </p>\r\n                <!-- <a href=\"#\" class=\"primary-btn text-uppercase\">Rent Car Now</a> -->\r\n            </div>\r\n            <!-- <div class=\"col-lg-5  col-md-6 header-right\">\r\n                <h4 class=\"text-white pb-30\">Book Your Car Today!</h4>\r\n                <form class=\"form\" role=\"form\" autocomplete=\"off\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"default-select\" id=\"default-select\">\r\n                            <select>\r\n                                <option value=\" \" disabled selected hidden>Select Your Car</option>\r\n                                <option value=\" 1 \">BMW</option>\r\n                                <option value=\" 1 \">Farrari</option>\r\n                                <option value=\" 1 \">Toyota</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group row \">\r\n                        <div class=\" col-md-6 wrap-left \">\r\n                            <div class=\" default-select \" id=\" default-select \">\r\n                                <select>\r\n                                    <option value=\"\" disabled selected hidden>Pickup</option>\r\n                                    <option value=\"1\">Pickup One</option>\r\n                                    <option value=\"1\">Pickup Two</option>\r\n                                    <option value=\"1\">Pickup Three</option>\r\n                                    <option value=\"1\">Pickup Four</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\" from-group \">\r\n                        <input class=\" form-control txt-field \" type=\" text \" name=\" name \" placeholder=\" Your name \">\r\n                        <input class=\" form-control txt-field \" type=\" email \" name=\" email \" placeholder=\" Email address \">\r\n                        <input class=\" form-control txt-field \" type=\" tel \" name=\" phone \" placeholder=\" Phone number \">\r\n                    </div>\r\n                    <div class=\" form-group row \">\r\n                        <div class=\" col-md-12 \">\r\n                            <button type=\" reset \" class=\" btn btn-default btn-lg btn-block text-center text-uppercase \">Confirm Car\r\n                                Booking</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"feature-area section-gap \">\r\n    <div class=\"container \">\r\n        <div class=\"row d-flex justify-content-center \">\r\n            <div class=\"col-md-8 pb-40 header-text \">\r\n                <h1>What Services we offer to our clients</h1>\r\n                <p>\r\n                    Who are in extremely love with eco friendly system.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-user \"></span>Taxi Services</h4>\r\n                    <p>\r\n                        We provides taxi services in locations like (write Locations). You can book your taxi from our CM Gaadi site or app. After the ride ends you can pay by cash or cards or UPI\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-car \"></span>Rent a Car</h4>\r\n                    <p>\r\n                        Rent a car for ride with or without driver. You can use our app to select the car. No hidden or extra charges applicable. You can choose the locations and car type before submitting your confirmation\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-car \"></span>Rent Your Car</h4>\r\n                    <p>\r\n                        You can rent your cars by registering, you will get a user id and account details after the verification. You can register n number of cars you owned.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-rocket \"></span>Technical Skills</h4>\r\n                    <p>\r\n                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-diamond \"></span>Highly Recomended</h4>\r\n                    <p>\r\n                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-bubble \"></span>Positive Reviews</h4>\r\n                    <p>\r\n                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.\r\n                    </p>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<!-- <section class=\"home-about-area \" id=\"about \">\r\n    <div class=\"container-fluid \">\r\n        <div class=\"row justify-content-center align-items-center \">\r\n            <div class=\"col-lg-6 no-padding home-about-left \">\r\n                <img class=\"img-fluid \" src=\"assets/assets/img/about-img.jpg \" alt=\" \">\r\n            </div>\r\n            <div class=\"col-lg-6 no-padding home-about-right \">\r\n                <h1>Globally Connected <br> by Large Network</h1>\r\n                <p>\r\n                    <span>We are here to listen from you deliver exellence</span>\r\n                </p>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.\r\n                </p>\r\n                <a class=\"text-uppercase primary-btn \" href=\"# \">get details</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n<!-- <section class=\"facts-area section-gap \">\r\n    <div class=\"container \">\r\n        <div class=\"row \">\r\n            <div class=\"col single-fact \">\r\n                <h1 class=\"counter \">2536</h1>\r\n                <p>Projects Completed</p>\r\n            </div>\r\n            <div class=\"col single-fact \">\r\n                <h1 class=\"counter \">6784</h1>\r\n                <p>Really Happy Clients</p>\r\n            </div>\r\n            <div class=\"col single-fact \">\r\n                <h1 class=\"counter \">1059</h1>\r\n                <p>Total Tasks Completed</p>\r\n            </div>\r\n            <div class=\"col single-fact \">\r\n                <h1 class=\"counter \">2239</h1>\r\n                <p>Cups of Coffee Taken</p>\r\n            </div>\r\n            <div class=\"col single-fact \">\r\n                <h1 class=\"counter \">435</h1>\r\n                <p>In House Professionals</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n\r\n<section class=\"reviews-area\" id=\"review \">\r\n    <div class=\"container \">\r\n        <div class=\"row d-flex justify-content-center \">\r\n            <div class=\"col-md-8 pb-40 header-text text-center \">\r\n                <h1>Some Features that Made us Unique</h1>\r\n                <p class=\"mb-10 text-center \">\r\n                    Who are in extremely love with eco friendly system.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>Regular Rides</h4>\r\n                    <p>\r\n                        You can use our CM Gaadi vehicles for regular rides. We provides some offers for our regular customers\r\n                    </p>\r\n                    <!-- <div class=\"star \">\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>Prebook Your Rides</h4>\r\n                    <p>\r\n                        You can prebook your rides before ready to take our services. Free cancellation before the rides begins\r\n                    </p>\r\n                    <!-- <div class=\"star \">\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>Vehicle Pickup Using Map Locations</h4>\r\n                    <p>\r\n                        You can choose the location for the car to pick up. Also you can search the cars to available in the nearest locations\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\"></div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4>24/7 Customer support</h4>\r\n                    <p>\r\n                        For support and other queries 24/7 customer support is provided.For any kind of issues while the ride, we will help you resolve it.\r\n\r\n                    </p>\r\n                    <!-- <div class=\"star \">\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star checked \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                        <span class=\"fa fa-star \"></span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \" style=\"    height: 208px;\">\r\n                    <h4>Push Notifications</h4>\r\n                    <p>\r\n                        You will get timely notifications on your rides. All your data are safe with us.\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\"></div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"reviews-area\" id=\"review \">\r\n    <div class=\"container \">\r\n        <div class=\"row d-flex justify-content-center \">\r\n            <div class=\"col-md-8 pb-40 header-text text-center \">\r\n                <h1>Pricing</h1>\r\n                <p class=\"mb-10 text-center \">\r\n                    Our Pricing Structure.\r\n                </p>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-user \"></span>Pricing For CAB Services</h4>\r\n                    <!-- <p>\r\n                        We provides taxi services in locations like (write Locations). You can book your taxi from our CM Gaadi site or app. After the ride ends you can pay by cash or cards or UPI\r\n                    </p> -->\r\n                    <p>Minumum Kilometer - 5</p>\r\n                    <p>Minumum Charge - 150</p>\r\n                    <p>Waiting Charge - Per hour basis</p>\r\n\r\n                    <p>Note : Beyond 5km per hour or per km charges whichever comes big will be included with RS 150/-</p>\r\n                    <p>Km charge and hour charge will display on screen when booking a vehicle</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-user \"></span>Pricing For AUTO Services</h4>\r\n                    <p>Minumum Kilometer - 1.5</p>\r\n                    <p>Minumum Charge - 25</p>\r\n                    <p>Waiting Charge - Per Half hour basis</p>\r\n\r\n                    <p>Note : Beyond 1.5km per hour or per km charges whichever comes big will be included with RS 25/-</p>\r\n                    <p>Km charge and hour charge will display on screen when booking a vehicle</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- <section class=\"callaction-area relative section-gap \">\r\n    <div class=\"overlay overlay-bg \"></div>\r\n    <div class=\"container \">\r\n        <div class=\"row justify-content-center \">\r\n            <div class=\"col-lg-10 \">\r\n                <h1 class=\"text-white \">Experience Great Support</h1>\r\n                <p>\r\n                </p>\r\n                <a class=\"callaction-btn text-uppercase \" href=\"# \">Reach Our Support Team</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n\r\n\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    Services\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"feature-area section-gap \">\r\n    <div class=\"container \">\r\n        <div class=\"row d-flex justify-content-center \">\r\n            <div class=\"col-md-8 pb-40 header-text \">\r\n                <h1>What Services we offer to our clients</h1>\r\n                <p>\r\n                    Who are in extremely love with eco friendly system.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-user \"></span>Taxi Services</h4>\r\n                    <p>\r\n                        We provides taxi services in locations like (write Locations). You can book your taxi from our CM Gaadi site or app. After the ride ends you can pay by cash or cards or UPI\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-car \"></span>Rent a Car</h4>\r\n                    <p>\r\n                        Rent a car for ride with or without driver. You can use our app to select the car. No hidden or extra charges applicable. You can choose the locations and car type before submitting your confirmation\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-car \"></span>Rent Your Car</h4>\r\n                    <p>\r\n                        You can rent your cars by registering, you will get a user id and account details after the verification. You can register n number of cars you owned.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-rocket \"></span>Technical Skills</h4>\r\n                    <p>\r\n                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-diamond \"></span>Highly Recomended</h4>\r\n                    <p>\r\n                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 \">\r\n                <div class=\"single-feature \">\r\n                    <h4><span class=\"lnr lnr-bubble \"></span>Positive Reviews</h4>\r\n                    <p>\r\n                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.\r\n                    </p>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/termsandconditons/termsandconditons.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/termsandconditons/termsandconditons.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsandconditonsTermsandconditonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\r\n\r\n<section class=\"banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-12\">\r\n                <h1 class=\"text-white\">\r\n                    Terms & Conditions\r\n                </h1>\r\n                <!-- <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a href=\"about.html\"> About Us</a></p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\" style=\"margin-top: 20px;\">\r\n\r\n        <h6> Forbidden Uses: vehicles may not be used for the following:</h6>\r\n        <hr>\r\n        <p>Transporting goods/people in violation of local laws or excise & customs rules.</p>\r\n        <p>For sports, adventure, races rally and other competitive events.</p>\r\n        <p>For over speeding violations over 125 Km/hr, there will be a fine of ₹2500. Vehicle speed is tracked and monitored remotely through an in-car device to ensure the safety of all CM Gaadi members.</p>\r\n        <h6>For Self-Driving Cars</h6>\r\n        <hr>\r\n        <p>CM Gaadi member can choose two type of renting service. </p>\r\n        <p>1.Self-Driving car by the usage of a kilometer, Daily rent is applicable if the usage exceeds 24 hours. </p>\r\n        <p>2.Self-Driving car with Daily rent by kilometer limit, the additional charge is applicable if the daily limit exceeds.\r\n        </p>\r\n        <p>Proper Registration should be made on CM Gaadi for car owner approval, An approval process may take a maximum of 48 hours.</p>\r\n        <p>Once the owner approved the trip, The CM Gaadi member should pick up the car from the desired location specified by the owner.</p>\r\n        <p>If the CM Gaadi member, cancel’s the trip after the Owner’s approval Rs.75 will be charged towards the CM Gaadi member</p>\r\n\r\n        <p> CM Gaadi members should bring the original driving license followed by an Aadhar card for identity reference. Once the verification process was done the owner and CM Gaadi member mutually verified the starting kilometer reading from the car's\r\n            Odometer. </p>\r\n        <p>\r\n            Customer should verify the fuel level in the fuel gauge with the owner and it’s the customer's responsibility to return the car with the same fuel noted at the time of pickup\r\n        </p>\r\n        <p>Trip charges are calculated only at the time returning a car, and a trip kilometer is calculated by starting kilometer and ending kilometer from car’s odometer. </p>\r\n        <p>The rider should drive or utilize the car at the desired location as specified during the time of registration, Incase the customer violates the city limit or state limit or change in drop location. Then the owner will claim the legal case against\r\n            the rider for policy violation. </p>\r\n\r\n\r\n\r\n        <p>Your liability in the event of theft or accident to the vehicle is restricted to a maximum amount equal to ₹10,000/-. Car insurance handles the remainder. This is provided you adhere to all of CM Gaadi's standard rules and regulations as described</p>\r\n        <p>Requesting customers to mark damages, if any, in the car at the time of taking it as well as returning it to the owner</p>\r\n\r\n        <p>Incase of breakdown during the time of ride, customer can contact for customer support</p>\r\n\r\n        <p>Customer is responsible for any minor scratches, minor damages, self-damages, interior damages, change in any vehicle parts, damage due to rash driving, damage due to rough usage. And those damages are chargeable by the owner or the owner will\r\n            charge the cost for the damaged part with the labour cost for changing the damaged part</p>\r\n\r\n        <p>Customers are not permitted to do any changes on the engine part or electronic part. But customers can customize the driver components such as music system, Steering system, seat hight, light focus area, and other user-accessible equipment.</p>\r\n\r\n\r\n\r\n        <p>CM Gaadi or Owner is not responsible for missing any personal belongings of the customer during or after the drop off of the car. </p>\r\n        <p>In case of puncture or tire replacement due to rough driving or driving off-road, the customer needs to pay for the puncture and tire repairing or replacement. It is advised to the customer not to pick up the car if there is any tire-related issue\r\n            or report the issue properly during at the time of car pickup. </p>\r\n\r\n        <p>Customer should fuel the car very carefully recommend by the car company such as diesel or petrol or LPG. Any miss fuel to the car will leads to severe damage to the engine and customer should pay the entire service cost along with penalty and\r\n            daily rent of the car.</p>\r\n\r\n        <p>Customer can demand a driver in case they need a full-time driver for their trip, and separate charges will be applicable for the driver. Still, all the terms and conditions will be applicable to customers if they bring a driver into action. </p>\r\n\r\n\r\n        <h6>For Owners </h6>\r\n        <hr>\r\n\r\n        <p>Owner can register the vehicle using CM Gaadi App, along with vehicle details such as vehicle make, model, year, fuel type, seating capacity, color, average mileage, wheel type, details of the modification. Owners need to submit the vehicle Registration\r\n            copy, Insurance Copy, pollution Certificate, Owner’s ID proof, Pickup location details</p>\r\n\r\n\r\n        <p>Owners need to specify the desired pickup location, or the owner can utilize the CM Gaadi yard as pickup and drop-off location. The owner should specify either the car is applicable for multicity, interstate driving, and multicity drop-off. </p>\r\n\r\n\r\n        <p>The CM Gaadi technician will visit the location and examines the vehicle for CM Gaadi specification. Once the evaluation was done CM Gaadi will create the customized tariff for your vehicle. The entire process may take up to 5-7 days. </p>\r\n        <p>Owner need to pay the registration fee of rupees 1000 for the evaluation process and technician charges if applicable</p>\r\n        <p>Owner is responsible for any accident during at the time of ride, hence owner needs to choose the right insurance for their car. </p>\r\n\r\n        <p>Owner needs to update the kilometer reading, damages, fuel gauge, Tire condition, interior and exterior of the car with pictures. </p>\r\n\r\n\r\n\r\n        <p>Owner should share the GPS signal of the vehicle with CM Gaadi, If the vehicle does not have the GPS signaling Device then CM Gaadi will install the GPS device on the vehicle to identify the the exact location of the vehicle. Charges may be applicable\r\n            if CM Gaadi installs the GPS.</p>\r\n\r\n        <p>Owners shall have direct contact with the CM Gaadi customer in case of any issues, Such as puncture, Accident, City violation, State violation, Over speeding or in case of any illegal activities. </p>\r\n\r\n        <p>Owner is responsible for any accident, car theft, or car utilized for any illegal activities. It’s the owners' responsibility to keep Insurance, Pollution Certificate, Road tax, Permit, and FC on up to date. CM Gaadi is not responsible if an issue\r\n            raised due to the expiry of legal documents. It is advised to owners that their vehicle should have full insurance with the proper valuation for safety. </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</section>\r\n\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/_interceptor/jwtinterceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/_interceptor/jwtinterceptor.ts ***!
    \************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcApp_interceptorJwtinterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(loginservice) {
        _classCallCheck(this, AuthInterceptor);

        this.loginservice = loginservice;
        this.token = JSON.parse(localStorage.getItem('token'));
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          console.log('Token Interceptor');
          this.token = JSON.parse(localStorage.getItem('token')); // const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGFzaG9rQHBydmFrLmluIiwiZXhwIjoxNTgwNDU3Mjg0LCJpYXQiOjE1ODA0NTQ1ODR9.U-Og3vRa12LGn37-XieCXsSOG0SFF089kvh_sQrqEAM`;

          console.log(this.token);
          req = req.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.token)
            }
          });
          console.log(req);
          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/_interceptor/loadinginterceptor.ts":
  /*!****************************************************!*\
    !*** ./src/app/_interceptor/loadinginterceptor.ts ***!
    \****************************************************/

  /*! exports provided: LoadingScreenInterceptor */

  /***/
  function srcApp_interceptorLoadinginterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingScreenInterceptor", function () {
      return LoadingScreenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../loading/loading.service */
    "./src/app/loading/loading.service.ts");

    var LoadingScreenInterceptor = /*#__PURE__*/function () {
      function LoadingScreenInterceptor(loaderService) {
        _classCallCheck(this, LoadingScreenInterceptor);

        this.loaderService = loaderService;
      }

      _createClass(LoadingScreenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          this.loaderService.show();
          console.log('loadingg......');
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            return _this.loaderService.hide();
          }));
        }
      }]);

      return LoadingScreenInterceptor;
    }();

    LoadingScreenInterceptor.ctorParameters = function () {
      return [{
        type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }];
    };

    LoadingScreenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoadingScreenInterceptor);
    /***/
  },

  /***/
  "./src/app/_models/bank.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/bank.ts ***!
    \*********************************/

  /*! exports provided: Bank */

  /***/
  function srcApp_modelsBankTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bank", function () {
      return Bank;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Bank = function Bank() {
      _classCallCheck(this, Bank);
    };
    /***/

  },

  /***/
  "./src/app/_models/driver.ts":
  /*!***********************************!*\
    !*** ./src/app/_models/driver.ts ***!
    \***********************************/

  /*! exports provided: Driver */

  /***/
  function srcApp_modelsDriverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Driver", function () {
      return Driver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Driver = function Driver() {
      _classCallCheck(this, Driver);
    };
    /***/

  },

  /***/
  "./src/app/_models/login.ts":
  /*!**********************************!*\
    !*** ./src/app/_models/login.ts ***!
    \**********************************/

  /*! exports provided: Login */

  /***/
  function srcApp_modelsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Login = function Login() {
      _classCallCheck(this, Login);
    };
    /***/

  },

  /***/
  "./src/app/_models/register.ts":
  /*!*************************************!*\
    !*** ./src/app/_models/register.ts ***!
    \*************************************/

  /*! exports provided: Registeruser */

  /***/
  function srcApp_modelsRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Registeruser", function () {
      return Registeruser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Registeruser = function Registeruser() {
      _classCallCheck(this, Registeruser);
    };
    /***/

  },

  /***/
  "./src/app/_models/vehicle.ts":
  /*!************************************!*\
    !*** ./src/app/_models/vehicle.ts ***!
    \************************************/

  /*! exports provided: Vehicle */

  /***/
  function srcApp_modelsVehicleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vehicle", function () {
      return Vehicle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Vehicle = function Vehicle() {
      _classCallCheck(this, Vehicle);
    };
    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('userdata')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this2 = this;

          return this.http.post("/users/authenticate", {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user) {
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this2.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.css":
  /*!***********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutusAboutusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr {\r\n    background: #ffcb67;\r\n    width: 60%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjYjY3O1xyXG4gICAgd2lkdGg6IDYwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutusComponent = /*#__PURE__*/function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aboutus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aboutus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aboutus.component.css */
      "./src/app/aboutus/aboutus.component.css"))["default"]]
    })], AboutusComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/admin.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/adminpannel/admin.service.ts ***!
    \**********************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppAdminpannelAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.BASEURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
      } // getallCountries(){
      //   return this.http.get(this.COUNTRIES_URL);
      // }


      _createClass(AdminService, [{
        key: "getallowners",
        value: function getallowners(pageIndex) {
          return this.http.get(this.BASEURL + 'user/listUsers?page=' + pageIndex + '&size=10&roleId=2');
        }
      }, {
        key: "getalllocation",
        value: function getalllocation() {
          return this.http.get(this.BASEURL + 'admin/listLocality');
        }
      }, {
        key: "addlocation",
        value: function addlocation(formdata) {
          return this.http.post(this.BASEURL + 'admin/addLocality', formdata);
        }
      }, {
        key: "Editlocation",
        value: function Editlocation(formdata) {
          return this.http.put(this.BASEURL + 'admin/updateLocality', formdata);
        }
      }, {
        key: "getallvehicles",
        value: function getallvehicles() {
          return this.http.get(this.BASEURL + 'vehicle/listBasedOnApprovalStatus?status=2&page=0&size=100');
        }
      }, {
        key: "getallvehiclesapproved",
        value: function getallvehiclesapproved() {
          return this.http.get(this.BASEURL + 'vehicle/listBasedOnApprovalStatus?status=1&page=0&size=100');
        }
      }, {
        key: "getallvehiclesRejected",
        value: function getallvehiclesRejected() {
          return this.http.get(this.BASEURL + 'vehicle/listBasedOnApprovalStatus?status=3&page=0&size=100');
        }
      }, {
        key: "approve",
        value: function approve(formdata) {
          return this.http.post(this.BASEURL + 'vehicle/setApprovalStatus', formdata);
        }
      }, {
        key: "reject",
        value: function reject(formdata) {
          return this.http.post(this.BASEURL + 'vehicle/setApprovalStatus', formdata);
        }
      }, {
        key: "getimage",
        value: function getimage(vehicleID) {
          var token = JSON.parse(localStorage.getItem('token'));
          var httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer' + '' + token
            })
          };
          return this.http.get(this.BASEURL + 'vehicle/getImage2/' + vehicleID, {
            headers: httpoptions.headers,
            responseType: 'blob'
          });
        }
      }, {
        key: "getlicencefrnt",
        value: function getlicencefrnt(id) {
          var token = JSON.parse(localStorage.getItem('token'));
          var httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer' + '' + token
            })
          };
          return this.http.get(this.BASEURL + 'vehicle/getLicenceFront/' + id, {
            headers: httpoptions.headers,
            responseType: 'blob'
          });
        }
      }, {
        key: "getlicscenceback",
        value: function getlicscenceback(id) {
          var token = JSON.parse(localStorage.getItem('token'));
          var httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer' + '' + token
            })
          };
          return this.http.get(this.BASEURL + 'vehicle/getLicenceBack/' + id, {
            headers: httpoptions.headers,
            responseType: 'blob'
          });
        }
      }, {
        key: "getrc",
        value: function getrc(id) {
          var token = JSON.parse(localStorage.getItem('token'));
          var httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer' + '' + token
            })
          };
          return this.http.get(this.BASEURL + 'vehicle/getRc/' + id, {
            headers: httpoptions.headers,
            responseType: 'blob'
          });
        }
      }, {
        key: "getVehicleDetailsbyId",
        value: function getVehicleDetailsbyId(id) {
          return this.http.get(this.BASEURL + 'vehicle/get/' + id);
        }
      }, {
        key: "getbankdetails",
        value: function getbankdetails(id) {
          return this.http.get(this.BASEURL + 'owner/getBankDetails/' + id);
        }
      }, {
        key: "resetpassword",
        value: function resetpassword(old, password) {
          var req = {};
          return this.http.post(this.BASEURL + 'updatePassword?currentPassword=' + old + '&newPassword=' + password, req);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelAdminapprovevehiclesAdminapprovevehiclesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.card{\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5hcHByb3ZldmVoaWNsZXMvYWRtaW5hcHByb3ZldmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5hcHByb3ZldmVoaWNsZXMvYWRtaW5hcHByb3ZldmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi8qIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSAqL1xyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ucGFnZS13cmFwcGVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4ICNlNWU1ZTU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcblx0cGFkZGluZzogMTBweCA4cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzNS4gTG9jayBTY3JlZW5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmxvY2stdXNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9jay11c2VyIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS5jdXN0b20tdGFibGU+IHRib2R5ID4gdHIgPiB0ZHtcclxuXHJcblx0cGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AdminapprovevehiclesComponent */

  /***/
  function srcAppAdminpannelAdminapprovevehiclesAdminapprovevehiclesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminapprovevehiclesComponent", function () {
      return AdminapprovevehiclesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AdminapprovevehiclesComponent = /*#__PURE__*/function () {
      function AdminapprovevehiclesComponent(adminservice, router) {
        _classCallCheck(this, AdminapprovevehiclesComponent);

        this.adminservice = adminservice;
        this.router = router;
        this.results = [];
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

      _createClass(AdminapprovevehiclesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].BASEURL;
          this.getallvehiclesforapproval();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
          console.log(this.dataSource.filteredData.length);

          if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
          }
        }
      }, {
        key: "getallvehiclesforapproval",
        value: function getallvehiclesforapproval() {
          var _this3 = this;

          sessionStorage.setItem('tabstatus', "PENDING");
          this.adminservice.getallvehicles().subscribe(function (data) {
            _this3.results = data;
            _this3.dataSource.data = _this3.results;

            if (_this3.results.length == 0) {
              _this3.message = 'No data found';
            } else {
              _this3.message = 'data found';
            }
          }, function (error) {
            _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          });
        }
      }, {
        key: "approve",
        value: function approve(elemet) {
          var _this4 = this;

          this.formData.append('vehicleId', elemet.id);
          this.formData.append('status', "1");
          this.adminservice.approve(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Approved!', 'Vehicle Added Successfully', 'success');

            _this4.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Approve Vehicle!', 'Vehicle Approve  UnSuccessfully', 'error');
          });
        }
      }, {
        key: "reject",
        value: function reject(elemet) {
          var _this5 = this;

          this.formData.append('vehicleId', elemet.id);
          this.formData.append('status', "3");
          this.adminservice.reject(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Reject!', 'Vehicle Reject Successfully', 'success');

            _this5.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Reject Vehicle !', 'Vehicle Reject UnSuccessfully', 'error');
          });
        }
      }, {
        key: "changePage",
        value: function changePage(event) {// this.adminservice.getallvehicles(event.pageIndex).subscribe(
          //   data => {
          //     this.results = data;
          //     this.dataSource.data = this.results;
          //   },
          //   error => {
          //     this.dataSource = new MatTableDataSource();
          //   }
          // )
        }
      }, {
        key: "view",
        value: function view(e) {
          sessionStorage.setItem("vehicle", JSON.stringify(e));
          this.router.navigate(['/viewVehicle']);
        }
      }, {
        key: "tabClick",
        value: function tabClick(tab) {
          console.log(tab.index);

          if (tab.index == 0) {
            console.log('PENDING');
            this.getallvehiclesforapproval();
            sessionStorage.setItem('tabstatus', "PENDING");
          } else if (tab.index == 1) {
            console.log('ACCEPTED');
            this.getallvehiclesApproved();
            sessionStorage.setItem('tabstatus', "ACCEPTED");
          } else if (tab.index == 2) {
            console.log('rejected');
            this.getallvehiclesRejected();
            sessionStorage.setItem('tabstatus', "REJECTED");
          }
        }
      }, {
        key: "getallvehiclesApproved",
        value: function getallvehiclesApproved() {
          var _this6 = this;

          this.adminservice.getallvehiclesapproved().subscribe(function (data) {
            _this6.results = data;
            _this6.dataSource.data = _this6.results;
            console.log(_this6.results.length);
            console.log(_this6.message);

            if (_this6.results.length == 0) {
              _this6.message = 'No data found';
              console.log(_this6.message);
            } else {
              _this6.message = 'data found';
            }
          }, function (error) {
            // this.dataSource = new MatTableDataSource();
            _this6.results = [];
          });
        }
      }, {
        key: "getallvehiclesRejected",
        value: function getallvehiclesRejected() {
          var _this7 = this;

          this.adminservice.getallvehiclesRejected().subscribe(function (data) {
            _this7.results = data;
            _this7.dataSource.data = _this7.results;

            if (_this7.results.length == 0) {
              _this7.message = 'No data found';
            } else {
              _this7.message = 'data found';
            }
          }, function (error) {
            // this.dataSource = new MatTableDataSource();
            _this7.results = [];
          });
        }
      }]);

      return AdminapprovevehiclesComponent;
    }();

    AdminapprovevehiclesComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": false
    })], AdminapprovevehiclesComponent.prototype, "paginator", void 0);
    AdminapprovevehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adminapprovevehicles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminapprovevehicles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminapprovevehicles.component.css */
      "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.css"))["default"]]
    })], AdminapprovevehiclesComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelAdminapprovevehiclesViewVehicledetailsViewVehicledetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper{\r\n    margin-left: 236px;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n}\r\n\r\n.detailsheading{\r\n    float: right;\r\n}\r\n\r\n.detailsheading1{\r\n    float: left;\r\n}\r\n\r\nmat-card{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    \r\n}\r\n\r\n.row\r\n{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.card{\r\n    padding: 20px;\r\n}\r\n\r\n.btn-success\r\n{\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.btn-danger\r\n{\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5hcHByb3ZldmVoaWNsZXMvdmlldy12ZWhpY2xlZGV0YWlscy92aWV3LXZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQjs7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhbm5lbC9hZG1pbmFwcHJvdmV2ZWhpY2xlcy92aWV3LXZlaGljbGVkZXRhaWxzL3ZpZXctdmVoaWNsZWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmRldGFpbHNoZWFkaW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5kZXRhaWxzaGVhZGluZzF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgXHJcbn1cclxuLnJvd1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5idG4tc3VjY2Vzc1xyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5idG4tZGFuZ2VyXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ViewVehicledetailsComponent */

  /***/
  function srcAppAdminpannelAdminapprovevehiclesViewVehicledetailsViewVehicledetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewVehicledetailsComponent", function () {
      return ViewVehicledetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var ViewVehicledetailsComponent = /*#__PURE__*/function () {
      function ViewVehicledetailsComponent(domsanitizer, adminService) {
        _classCallCheck(this, ViewVehicledetailsComponent);

        this.domsanitizer = domsanitizer;
        this.adminService = adminService;
        this.formData = new FormData();
      }

      _createClass(ViewVehicledetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
          this.vehiclestatus = sessionStorage.getItem('tabstatus');
          this.getvehicleImage2imagesbyId();
          this.getlicencefrnt();
          this.getlicscenceback();
          this.getrc();
          this.getvehicleDetailsById();
        }
      }, {
        key: "getvehicleImage2imagesbyId",
        value: function getvehicleImage2imagesbyId() {
          var _this8 = this;

          this.adminService.getimage(this.vehicleID).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this8.vehicleimage2 = _this8.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getlicencefrnt",
        value: function getlicencefrnt() {
          var _this9 = this;

          this.adminService.getlicencefrnt(this.vehicleID).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this9.liscence1 = _this9.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getlicscenceback",
        value: function getlicscenceback() {
          var _this10 = this;

          this.adminService.getlicscenceback(this.vehicleID).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this10.liscence2 = _this10.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getrc",
        value: function getrc() {
          var _this11 = this;

          this.adminService.getrc(this.vehicleID).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this11.rc = _this11.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getvehicleDetailsById",
        value: function getvehicleDetailsById() {
          var _this12 = this;

          this.adminService.getVehicleDetailsbyId(this.vehicleID).subscribe(function (data) {
            _this12.DriverDetailsofCar = data['driver'];
            console.log(_this12.DriverDetailsofCar);

            if (_this12.DriverDetailsofCar != null) {
              _this12.vehicleModel.dname = _this12.DriverDetailsofCar['name'];
              _this12.vehicleModel.dnumber = _this12.DriverDetailsofCar['number'];
              _this12.vehicleModel.daddreess = _this12.DriverDetailsofCar['addresss'];
            }

            _this12.id = _this12.driverDetails['id'];
          }, function (error) {});
        }
      }, {
        key: "approve",
        value: function approve() {
          var _this13 = this;

          this.formData.append('vehicleId', this.vehicleID);
          this.formData.append('status', "1");
          this.adminService.approve(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Vehicle Approved!', 'Vehicle Added Successfully', 'success');

            _this13.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unable to Approve Vehicle!', 'Vehicle Approve  UnSuccessfully', 'error');
          });
        }
      }, {
        key: "reject",
        value: function reject(elemet) {
          var _this14 = this;

          this.formData.append('vehicleId', this.vehicleID);
          this.formData.append('status', "3");
          this.adminService.reject(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Vehicle Reject!', 'Vehicle Reject Successfully', 'success');

            _this14.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unable to Reject Vehicle !', 'Vehicle Reject UnSuccessfully', 'error');
          });
        }
      }]);

      return ViewVehicledetailsComponent;
    }();

    ViewVehicledetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
      }];
    };

    ViewVehicledetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-vehicledetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-vehicledetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-vehicledetails.component.css */
      "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.css"))["default"]]
    })], ViewVehicledetailsComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/adminhome/adminhome.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/adminpannel/adminhome/adminhome.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelAdminhomeAdminhomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    padding-top: 143px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2FkbWluaG9tZS9hZG1pbmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE0M3B4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/adminpannel/adminhome/adminhome.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/adminpannel/adminhome/adminhome.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdminhomeComponent */

  /***/
  function srcAppAdminpannelAdminhomeAdminhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function () {
      return AdminhomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminhomeComponent = /*#__PURE__*/function () {
      function AdminhomeComponent() {
        _classCallCheck(this, AdminhomeComponent);
      }

      _createClass(AdminhomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = JSON.parse(localStorage.getItem('ROLE')); // this.userName = this.userDetails['username'];

          this.userRole = this.userDetails;
        }
      }]);

      return AdminhomeComponent;
    }();

    AdminhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adminhome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminhome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminhome/adminhome.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminhome.component.css */
      "./src/app/adminpannel/adminhome/adminhome.component.css"))["default"]]
    })], AdminhomeComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/adminpannel.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/adminpannel/adminpannel.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelAdminpannelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.table-responsive {\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5wYW5uZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvYWRtaW5wYW5uZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/adminpannel/adminpannel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/adminpannel/adminpannel.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminpannelComponent */

  /***/
  function srcAppAdminpannelAdminpannelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminpannelComponent", function () {
      return AdminpannelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin.service */
    "./src/app/adminpannel/admin.service.ts");

    var AdminpannelComponent = /*#__PURE__*/function () {
      function AdminpannelComponent() {
        _classCallCheck(this, AdminpannelComponent);
      }

      _createClass(AdminpannelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminpannelComponent;
    }();

    AdminpannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adminpannel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminpannel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/adminpannel.component.html"))["default"],
      providers: [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminpannel.component.css */
      "./src/app/adminpannel/adminpannel.component.css"))["default"]]
    })], AdminpannelComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/companies/companies.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/adminpannel/companies/companies.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelCompaniesCompaniesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\nmat-header-row{\r\n\t/* border-bottom: 2px solid #ffd000; */\r\n\tborder: 1px solid #c1c1c1;\r\n}\r\n\r\nmat-row\r\n{\r\n\tborder: 1px solid #c1c1c1;\r\n\r\n}\r\n\r\nmat-header-cell{\r\n\tfont-size: 16px;\r\n}\r\n\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\r\n\tborder-radius: 14px !important;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\n\r\na {\r\n\tcolor: #009ce7;\r\n}\r\n\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\n\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\n\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\n\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\n\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\n\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtDQUNDLHNDQUFzQztDQUN0Qyx5QkFBeUI7QUFDMUI7O0FBQ0E7O0NBRUMseUJBQXlCOztBQUUxQjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7OztHQUdHOztBQUNIO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjs7Q0FFckIsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7OztDQUdDLHlCQUF5QjtDQUN6Qiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QixpQ0FBaUM7QUFDbEM7O0FBQ0E7O0NBRUMsYUFBYTtBQUNkOztBQUNBO0NBQ0MsWUFBWTtDQUNaLG9CQUFvQjtBQUNyQjs7QUFDQTs7Q0FFQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLDBDQUEwQztBQUMzQzs7QUFDQTs7Q0FFQyw4QkFBOEI7QUFDL0I7O0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBR0E7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBOzt3QkFFd0I7O0FBRXhCO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUNBO0NBQ0MsOEJBQThCO0FBQy9COztBQUNBO0NBQ0MsOEJBQThCO0FBQy9COztBQUNBO0NBQ0MsOEJBQThCO0FBQy9COztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsMENBQTBDO0FBQzNDOztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQywrQkFBK0I7QUFDaEM7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBOzs7Ozs7Q0FNQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCOztBQUNBOztDQUVDLGNBQWM7Q0FDZCxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsU0FBUztDQUNULGNBQWM7QUFDZjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FHbEIseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDJCQUEyQjtBQUM1Qjs7QUFDQTs7Ozs7O0NBTUMsaUJBQWlCO0NBQ2pCLHNCQUFzQjtBQUN2Qjs7QUFHQTs7d0JBRXdCOztBQUV4QjtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbm1hdC1oZWFkZXItcm93e1xyXG5cdC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZkMDAwOyAqL1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbn1cclxubWF0LXJvd1xyXG57XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2MxYzFjMTtcclxuXHJcbn1cclxubWF0LWhlYWRlci1jZWxse1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4vKiAudGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn0gKi9cclxuLnBhZ2Utd3JhcHBlciA+IC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDU5cHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdHBhZGRpbmc6IDAuNDY5cmVtIDAuNzVyZW07XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWFlYWVhO1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ucGFnZS13cmFwcGVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4ICNlNWU1ZTU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcblx0cGFkZGluZzogMTBweCA4cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzNS4gTG9jayBTY3JlZW5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmxvY2stdXNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9jay11c2VyIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS5jdXN0b20tdGFibGU+IHRib2R5ID4gdHIgPiB0ZHtcclxuXHJcblx0cGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/adminpannel/companies/companies.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/adminpannel/companies/companies.component.ts ***!
    \**************************************************************/

  /*! exports provided: CompaniesComponent */

  /***/
  function srcAppAdminpannelCompaniesCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function () {
      return CompaniesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/adminpannel/admin.service.ts");

    var CompaniesComponent = /*#__PURE__*/function () {
      function CompaniesComponent(adminservice) {
        _classCallCheck(this, CompaniesComponent);

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

      _createClass(CompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getallOwners();
        }
      }, {
        key: "getallOwners",
        value: function getallOwners() {
          var _this15 = this;

          this.adminservice.getallowners(this.pageIndex).subscribe(function (data) {
            _this15.results = data;
            _this15.dataSource.data = _this15.results;
          }, function (error) {});
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
          console.log(this.dataSource.filteredData.length);

          if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
          }
        }
      }, {
        key: "changePage",
        value: function changePage(e) {
          var _this16 = this;

          this.adminservice.getallowners(e.pageIndex).subscribe(function (data) {
            _this16.results = data;
            _this16.dataSource.data = _this16.results;
          }, function (error) {});
        }
      }]);

      return CompaniesComponent;
    }();

    CompaniesComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": false
    })], CompaniesComponent.prototype, "paginator", void 0);
    CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./companies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/companies/companies.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./companies.component.css */
      "./src/app/adminpannel/companies/companies.component.css"))["default"]]
    })], CompaniesComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/countries/countries.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/adminpannel/countries/countries.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelCountriesCountriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\n/* ::ng-deep .mat-row:hover {\r\n    background-color: rgba(255, 115, 0, 0.527);\r\n  }\r\n  h5{\r\n      text-align: center;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBOzs7OztLQUtLIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLyogOjpuZy1kZWVwIC5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMTUsIDAsIDAuNTI3KTtcclxuICB9XHJcbiAgaDV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/adminpannel/countries/countries.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/adminpannel/countries/countries.component.ts ***!
    \**************************************************************/

  /*! exports provided: CountriesComponent */

  /***/
  function srcAppAdminpannelCountriesCountriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesComponent", function () {
      return CountriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/adminpannel/admin.service.ts");

    var CountriesComponent = /*#__PURE__*/function () {
      function CountriesComponent(adminservice) {
        _classCallCheck(this, CountriesComponent);

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

      _createClass(CountriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
          console.log(this.dataSource.filteredData.length);

          if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
          }
        }
      }]);

      return CountriesComponent;
    }();

    CountriesComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": false
    })], CountriesComponent.prototype, "paginator", void 0);
    CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/countries/countries.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countries.component.css */
      "./src/app/adminpannel/countries/countries.component.css"))["default"]]
    })], CountriesComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/header/header.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/adminpannel/header/header.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ::ng-deep .mat-toolbar{\r\n    position: fixed;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOjpuZy1kZWVwIC5tYXQtdG9vbGJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/adminpannel/header/header.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/adminpannel/header/header.component.ts ***!
    \********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppAdminpannelHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, authenticationService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/adminpannel/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/location/add-location/add-location.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/adminpannel/location/add-location/add-location.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelLocationAddLocationAddLocationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vYWRkLWxvY2F0aW9uL2FkZC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2xvY2F0aW9uL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/adminpannel/location/add-location/add-location.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/adminpannel/location/add-location/add-location.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddLocationComponent */

  /***/
  function srcAppAdminpannelLocationAddLocationAddLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function () {
      return AddLocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var AddLocationComponent = /*#__PURE__*/function () {
      function AddLocationComponent(fb, router, toaster, adminservice) {
        _classCallCheck(this, AddLocationComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.adminservice = adminservice;
        this.formData = new FormData();
      }

      _createClass(AddLocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.locationForn = this.fb.group({
            Location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this17 = this;

          if (this.Location == undefined || this.Location == '') {
            this.toaster.error('Please enter a location name');
            return;
          } else {
            this.formData.append('name', this.Location);
            this.adminservice.addlocation(this.formData).subscribe(function (data) {
              _this17.router.navigate(['/locations']);

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Location Added!', 'Location Added Successfully', 'success');
            }, function (error) {
              _this17.formData["delete"];
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cant add Location!', 'Location Added UnSuccessfully', 'error');
            });
          }
        }
      }]);

      return AddLocationComponent;
    }();

    AddLocationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
      }];
    };

    AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-location.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/add-location/add-location.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-location.component.css */
      "./src/app/adminpannel/location/add-location/add-location.component.css"))["default"]]
    })], AddLocationComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/location/edit-location/edit-location.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/adminpannel/location/edit-location/edit-location.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelLocationEditLocationEditLocationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vZWRpdC1sb2NhdGlvbi9lZGl0LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCO0FBQ0E7Q0FDQztJQUNHLGlCQUFpQjtBQUNyQixDQUFDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vZWRpdC1sb2NhdGlvbi9lZGl0LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXHJcbnsuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG59fVxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/adminpannel/location/edit-location/edit-location.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/adminpannel/location/edit-location/edit-location.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EditLocationComponent */

  /***/
  function srcAppAdminpannelLocationEditLocationEditLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLocationComponent", function () {
      return EditLocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var EditLocationComponent = /*#__PURE__*/function () {
      function EditLocationComponent(fb, activaterouter, router, adminservice) {
        _classCallCheck(this, EditLocationComponent);

        this.fb = fb;
        this.activaterouter = activaterouter;
        this.router = router;
        this.adminservice = adminservice;
        this.formData = new FormData();
      }

      _createClass(EditLocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.locationForn = this.fb.group({
            Location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.activaterouter.params.subscribe(function (params) {
            console.log(params);
            _this18.Location = params.name;
            _this18.Id = params.id;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this19 = this;

          this.formData.append('id', this.Id);
          this.formData.append('name', this.Location);
          this.adminservice.Editlocation(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Location Updated!', 'Location Updated Successfully', 'success');

            _this19.router.navigate(['/locations']);
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cant Update Location!', 'Location Updated UnSuccessfully', 'error');
            _this19.formData["delete"];
          });
        }
      }]);

      return EditLocationComponent;
    }();

    EditLocationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }];
    };

    EditLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-location.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/edit-location/edit-location.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-location.component.css */
      "./src/app/adminpannel/location/edit-location/edit-location.component.css"))["default"]]
    })], EditLocationComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/location/location.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/adminpannel/location/location.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelLocationLocationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tborder-radius: 14px !important;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTs7O0NBR0MseUJBQXlCO0NBQ3pCLDhCQUE4QjtDQUM5Qiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLGlDQUFpQztBQUNsQztBQUNBOztDQUVDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLG9CQUFvQjtBQUNyQjtBQUNBOztDQUVDLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLDBDQUEwQztBQUMzQztBQUNBOztDQUVDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBR0E7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjtBQUVBOzt3QkFFd0I7QUFFeEI7Q0FDQyw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiwwQ0FBMEM7QUFDM0M7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQywrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUVBOzs7Ozs7Q0FNQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBQ0E7O0NBRUMsY0FBYztDQUNkLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsU0FBUztDQUNULGNBQWM7QUFDZjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtDQUNDLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUdsQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDJCQUEyQjtBQUM1QjtBQUNBOzs7Ozs7Q0FNQyxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCO0FBR0E7O3dCQUV3QjtBQUV4QjtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjtBQUVBOztDQUVDLGtCQUFrQjtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFubmVsL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi8qIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSAqL1xyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcclxuXHRtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdG91dGxpbmU6IDAgbm9uZTtcclxufVxyXG5hIHtcclxuXHRjb2xvcjogIzAwOWNlNztcclxufVxyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG5hIHtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5pbnB1dCxcclxuYnV0dG9uIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0cGFkZGluZzogNnB4IDAuNzVyZW07XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5cdHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuLm5hdmJhci1uYXYgPiBsaSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmRpc3BsYXktYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5idG4ucm91bmRlZCB7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5idG4uZm9jdXMsXHJcbi5idG46Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG59XHJcblxyXG5cclxuLnRhYmxlIHtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG59XHJcbi50YWJsZS50YWJsZS13aGl0ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1vZi10eXBlKDJuICsgMSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxudGFibGUudGFibGUgdGQgLmF2YXRhciB7XHJcblx0bWFyZ2luOiAwIDVweCAwIDA7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IGluaGVyaXQ7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyIGEge1xyXG5cdGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyIGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyIHNwYW4ge1xyXG5cdGNvbG9yOiAjOWU5ZTllO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzLiBIZWxwZXIgQ2xhc3NcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm0tci01IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXItMTAge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWwtNSB7XHJcblx0bWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMCB7XHJcblx0bWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMTAge1xyXG5cdG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTIwIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0zMCB7XHJcblx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtNTAge1xyXG5cdG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTEwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0yMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMzAge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4udy00MCB7XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuLmJsb2NrIHtcclxuXHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWVsbGlwc2lzIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50ZXh0LW11dGVkLWxpZ2h0IHtcclxuXHRjb2xvcjogI2FhYTtcclxufVxyXG4uY2FyZC1ib3gge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucGFnZS10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAyMXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucGFnZS1zdWItdGl0bGUge1xyXG5cdGNvbG9yOiAjNTY1NjU2O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5iYWRnZS1zdWNjZXNzLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzU1Y2U2MztcclxuXHRjb2xvcjogIzU1Y2U2MztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLWRhbmdlci1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmNjJkNTE7XHJcblx0Y29sb3I6ICNmNjJkNTE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS13YXJuaW5nLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmYmMzNDtcclxuXHRjb2xvcjogI2ZmYmMzNDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLWluZm8tYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA5ZWZiO1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyLnRleHQtbGVmdCB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubW9kYWwtZm9vdGVyLnRleHQtY2VudGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvbnQtMTgge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYm9yZGVyLXJpZ2h0IHtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG59XHJcbi5ibHVyIHtcclxuXHQtd2Via2l0LWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1tb3otZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW8tZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1zLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdGZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcbi5idG4ge1xyXG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGE6Zm9jdXMsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGE6aG92ZXIsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW4sXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW46Zm9jdXMsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW46aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG59XHJcbi5wYWdpbmF0aW9uID4gbGkgPiBhLFxyXG4ucGFnaW5hdGlvbiA+IGxpID4gc3BhbiB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0cGFkZGluZzogLjVyZW0gLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDVweCAwO1xyXG59XHJcbi50YWJsZSBoNSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50YWJsZSBoNSArIHAge1xyXG5cdGNvbG9yOiAjOWU5ZTllO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5wYWdlLWxpbms6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciB7XHJcblx0bGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogMjMwcHg7XHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tdGFibGUgdHIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogMCAwIDNweCAjZTVlNWU1O1xyXG59XHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Ym9keSA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Zm9vdCA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG5cdHBhZGRpbmc6IDEwcHggOHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MzUuIExvY2sgU2NyZWVuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5sb2NrLXVzZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxvY2stdXNlciBpbWcge1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4udGFibGUuY3VzdG9tLXRhYmxlPiB0Ym9keSA+IHRyID4gdGR7XHJcblxyXG5cdHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/adminpannel/location/location.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/adminpannel/location/location.component.ts ***!
    \************************************************************/

  /*! exports provided: LocationComponent */

  /***/
  function srcAppAdminpannelLocationLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationComponent", function () {
      return LocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LocationComponent = /*#__PURE__*/function () {
      function LocationComponent(adminpannel, router) {
        _classCallCheck(this, LocationComponent);

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

      _createClass(LocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getalllocations();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
          console.log(this.dataSource.filteredData.length);

          if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
          }
        }
      }, {
        key: "getalllocations",
        value: function getalllocations() {
          var _this20 = this;

          this.adminpannel.getalllocation().subscribe(function (data) {
            console.log(data);
            _this20.results = data;
            _this20.dataSource.data = _this20.results;
          }, function (error) {});
        }
      }, {
        key: "edit",
        value: function edit(w) {
          this.router.navigate(['/edit-location', w.id, w.name]);
        }
      }, {
        key: "delete",
        value: function _delete(e) {}
      }]);

      return LocationComponent;
    }();

    LocationComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": false
    })], LocationComponent.prototype, "paginator", void 0);
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./location.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/location/location.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./location.component.css */
      "./src/app/adminpannel/location/location.component.css"))["default"]]
    })], LocationComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/paymentreports/paymentreports.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/adminpannel/paymentreports/paymentreports.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelPaymentreportsPaymentreportsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvcGF5bWVudHJlcG9ydHMvcGF5bWVudHJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5uZWwvcGF5bWVudHJlcG9ydHMvcGF5bWVudHJlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLyogLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59ICovXHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1OXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRwYWRkaW5nOiAwLjQ2OXJlbSAwLjc1cmVtO1xyXG5cdGJvcmRlci1jb2xvcjogI2VhZWFlYTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWluLWhlaWdodDogNDBweDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRvdXRsaW5lOiAwIG5vbmU7XHJcbn1cclxuYSB7XHJcblx0Y29sb3I6ICMwMDljZTc7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxuYSB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbiB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHBhZGRpbmc6IDZweCAwLjc1cmVtO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRyZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5uYXZiYXItbmF2ID4gbGkge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5kaXNwbGF5LWJsb2NrIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnRuLnJvdW5kZWQge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uYnRuLmZvY3VzLFxyXG4uYnRuOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxufVxyXG5cclxuXHJcbi50YWJsZSB7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxufVxyXG4udGFibGUudGFibGUtd2hpdGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZSgybiArIDEpIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIC5hdmF0YXIge1xyXG5cdG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhIHtcclxuXHRjb2xvcjogIzc1NzU3NTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhOmhvdmVyIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBzcGFuIHtcclxuXHRjb2xvcjogIzllOWU5ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0My4gSGVscGVyIENsYXNzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tLXItNSB7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubS1yLTEwIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1sLTUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTAge1xyXG5cdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubS10LTEwIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0yMCB7XHJcblx0bWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMzAge1xyXG5cdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTUwIHtcclxuXHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0xMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMjAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTMwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNDAge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbi5ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1lbGxpcHNpcyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udGV4dC1tdXRlZC1saWdodCB7XHJcblx0Y29sb3I6ICNhYWE7XHJcbn1cclxuLmNhcmQtYm94IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uY2FyZC10aXRsZSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG5cdGNvbG9yOiAjNTY1NjU2O1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZ2Utc3ViLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmFkZ2Utc3VjY2Vzcy1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM1NWNlNjM7XHJcblx0Y29sb3I6ICM1NWNlNjM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS1kYW5nZXItYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjYyZDUxO1xyXG5cdGNvbG9yOiAjZjYyZDUxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2Utd2FybmluZy1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmJjMzQ7XHJcblx0Y29sb3I6ICNmZmJjMzQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZS1pbmZvLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwOWVmYjtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLm1vZGFsLWZvb3Rlci50ZXh0LWxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm1vZGFsLWZvb3Rlci50ZXh0LWNlbnRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb250LTE4IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmJvcmRlci1yaWdodCB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3ZTdlNztcclxufVxyXG4uYmx1ciB7XHJcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbW96LWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1vLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdC1tcy1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRmaWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG4uYnRuIHtcclxuXHRmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG4ucGFnaW5hdGlvbiA+IGxpID4gYSxcclxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW4ge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdHBhZGRpbmc6IC41cmVtIC43NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA1cHggMDtcclxufVxyXG4udGFibGUgaDUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUgaDUgKyBwIHtcclxuXHRjb2xvcjogIzllOWU5ZTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucGFnZS1saW5rOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5wYWdlLXdyYXBwZXIge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciA+IC5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXRhYmxlIHRyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IDAgMCAzcHggI2U1ZTVlNTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLFxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuXHRwYWRkaW5nOiAxMHB4IDhweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDM1LiBMb2NrIFNjcmVlblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubG9jay11c2VyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2NrLXVzZXIgaW1nIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRhYmxlLmN1c3RvbS10YWJsZT4gdGJvZHkgPiB0ciA+IHRke1xyXG5cclxuXHRwYWRkaW5nOiAxMHB4IDcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgcGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/adminpannel/paymentreports/paymentreports.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/adminpannel/paymentreports/paymentreports.component.ts ***!
    \************************************************************************/

  /*! exports provided: PaymentreportsComponent */

  /***/
  function srcAppAdminpannelPaymentreportsPaymentreportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentreportsComponent", function () {
      return PaymentreportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var PaymentreportsComponent = /*#__PURE__*/function () {
      function PaymentreportsComponent() {
        _classCallCheck(this, PaymentreportsComponent);

        this.displayedColumns = ['transId', 'uname', 'unumber', 'dname', 'dnumber'];
        this.limit = 5;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.message = 'data found';
      }

      _createClass(PaymentreportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
          console.log(this.dataSource.filteredData.length);

          if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
          }
        }
      }]);

      return PaymentreportsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": false
    })], PaymentreportsComponent.prototype, "paginator", void 0);
    PaymentreportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paymentreports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paymentreports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/paymentreports/paymentreports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paymentreports.component.css */
      "./src/app/adminpannel/paymentreports/paymentreports.component.css"))["default"]]
    })], PaymentreportsComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/adminpannel/reset-passowrd/reset-passowrd.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelResetPassowrdResetPassowrdComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.card{\r\n\tpadding: 20px;\r\n}\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\tmargin-left: 230px;\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvcmVzZXQtcGFzc293cmQvcmVzZXQtcGFzc293cmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDtDQUNDLGFBQWE7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7OztDQUdDLHlCQUF5QjtDQUN6Qiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QixpQ0FBaUM7QUFDbEM7QUFDQTs7Q0FFQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQywwQ0FBMEM7QUFDM0M7QUFDQTs7Q0FFQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUdBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFFQTs7d0JBRXdCO0FBRXhCO0NBQ0MsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsMENBQTBDO0FBQzNDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFFQTs7Ozs7O0NBTUMseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLGNBQWM7Q0FDZCxnQ0FBZ0M7QUFDakM7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FHbEIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QiwyQkFBMkI7QUFDNUI7QUFDQTs7Ozs7O0NBTUMsaUJBQWlCO0NBQ2pCLHNCQUFzQjtBQUN2QjtBQUdBOzt3QkFFd0I7QUFFeEI7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7QUFFQTs7Q0FFQyxrQkFBa0I7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhbm5lbC9yZXNldC1wYXNzb3dyZC9yZXNldC1wYXNzb3dyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4vKiAudGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn0gKi9cclxuLmNhcmR7XHJcblx0cGFkZGluZzogMjBweDtcclxufVxyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ucGFnZS13cmFwcGVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4ICNlNWU1ZTU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcblx0cGFkZGluZzogMTBweCA4cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQzNS4gTG9jayBTY3JlZW5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmxvY2stdXNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9jay11c2VyIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS5jdXN0b20tdGFibGU+IHRib2R5ID4gdHIgPiB0ZHtcclxuXHJcblx0cGFkZGluZzogMTBweCA3MXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGFibGUuY3VzdG9tLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts ***!
    \************************************************************************/

  /*! exports provided: ResetPassowrdComponent */

  /***/
  function srcAppAdminpannelResetPassowrdResetPassowrdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPassowrdComponent", function () {
      return ResetPassowrdComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_register_password_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/register/password-validation */
    "./src/app/register/password-validation.ts");
    /* harmony import */


    var src_app_models_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/login */
    "./src/app/_models/login.ts");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var ResetPassowrdComponent = /*#__PURE__*/function () {
      function ResetPassowrdComponent(fb, adminservice) {
        _classCallCheck(this, ResetPassowrdComponent);

        this.fb = fb;
        this.adminservice = adminservice;
        this.submitted = false;
      }

      _createClass(ResetPassowrdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminmodel = new src_app_models_login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
          this.resetForm = this.fb.group({
            oldPasswords: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: Object(src_app_register_password_validation__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          var _this21 = this;

          this.submitted = true;

          if (this.resetForm.invalid) {
            return;
          } else if (this.resetForm.valid) {
            this.adminservice.resetpassword(this.adminmodel.oldPasswords, this.adminmodel.password).subscribe(function (data) {
              _this21.resetForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Password Reset!', 'Password Reset Successfully', 'success');
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unable to Reset Password !', 'Password Reset UnSuccessfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.resetForm.controls;
        }
      }]);

      return ResetPassowrdComponent;
    }();

    ResetPassowrdComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
      }];
    };

    ResetPassowrdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-passowrd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-passowrd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/reset-passowrd/reset-passowrd.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-passowrd.component.css */
      "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.css"))["default"]]
    })], ResetPassowrdComponent);
    /***/
  },

  /***/
  "./src/app/adminpannel/sidebar/sidebar.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/adminpannel/sidebar/sidebar.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminpannelSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* \r\n.sidebar {\r\n\tbackground: linear-gradient(to bottom, white , #ffcb67);\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n\ttop: 79px;\r\n\twidth: 230px;\r\n\tz-index: 0;\r\n\tbackground-color: #fff;\r\n\tbottom: 0;\r\n\tmargin-top: 0px;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n.sidebar.opened {\r\n\t-webkit-transition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.sidebar-inner {\r\n\theight: 100%;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n.sidebar-menu ul {\r\n\tfont-size: 14px;\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.sidebar-menu li a {\r\n\tcolor: #888;\r\n\tdisplay: block;\r\n\tfont-size: 15px;\r\n\theight: auto;\r\n\tpadding: 0 20px;\r\n}\r\n.sidebar-menu li a:hover {\r\n\tcolor: #009efb;\r\n}\r\n.sidebar-menu li.active a {\r\n\tcolor: #009efb;\r\n\tbackground-color: #f3f3f3;\r\n}\r\n.menu-title {\r\n\tcolor: #333;\r\n\tfont-size: 15px;\r\n\tfont-weight: 500;\r\n\tpadding: 12px 20px;\r\n}\r\n.menu-title > i {\r\n\tfloat: right;\r\n\tline-height: 40px;\r\n}\r\n.sidebar-menu li.menu-title a {\r\n\tcolor: #009efb;\r\n\tdisplay: inline-block;\r\n\tpadding: 0;\r\n}\r\n.sidebar-menu li.menu-title a.btn {\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tfloat: none;\r\n\tfont-size: 15px;\r\n\tline-height: inherit;\r\n\tmargin-bottom: 15px;\r\n}\r\n.sidebar-menu ul ul a.active {\r\n\tcolor: #009efb;\r\n\ttext-decoration: underline;\r\n}\r\n.mobile-user-menu {\r\n\tcolor: #fff;\r\n\tdisplay: none;\r\n\tfont-size: 24px;\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tpadding: 0 20px;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttext-align: right;\r\n\ttop: 0;\r\n\twidth: 50px;\r\n\tz-index: 10;\r\n}\r\n.mobile-user-menu > a {\r\n\tcolor: #fff;\r\n\tpadding: 0;\r\n}\r\n.mobile-user-menu > a:hover {\r\n\tcolor: #fff;\r\n}\r\n.mobile-user-menu > .dropdown-menu > a {\r\n    line-height: 23px;\r\n}\r\n.profile-rightbar {\r\n\tdisplay: none !important;\r\n\tcolor: #009efb;\r\n\tfont-size: 26px;\r\n\tmargin-left: 15px;\r\n}\r\n.fixed-sidebar-right {\r\n\tposition: fixed;\r\n\ttop: 60px;\r\n\tright: 0;\r\n\twidth: 300px;\r\n\tmargin-right: -300px;\r\n\tbottom: 0;\r\n\tz-index: 101;\r\n\t-webkit-transition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.mobile_btn {\r\n\tdisplay: none;\r\n}\r\n.sidebar .sidebar-menu > ul > li > a span {\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10px;\r\n\twhite-space: nowrap;\r\n\tcolor: black;\r\n}\r\n.sidebar .sidebar-menu > ul > li > a span.badge {\r\n\tcolor: #fff;\r\n\tmargin-left: auto;\r\n}\r\n.sidebar-menu ul ul a {\r\n\tdisplay: block;\r\n\tfont-size: 14px;\r\n\tpadding: 9px 10px 9px 50px;\r\n\tposition: relative;\r\n}\r\n.sidebar-menu ul ul {\r\n\tbackground-color: #f3f3f3;\r\n\tdisplay: none;\r\n}\r\n.sidebar-menu ul ul ul a {\r\n\tpadding-left: 70px;\r\n}\r\n.sidebar-menu ul ul ul ul a {\r\n\tpadding-left: 90px;\r\n}\r\n.sidebar-menu > ul > li {\r\n\tposition: relative;\r\n}\r\n.sidebar-menu .menu-arrow {\r\n\t-webkit-transition: -webkit-transform 0.15s;\r\n\t-o-transition: -o-transform 0.15s;\r\n\ttransition: transform .15s;\r\n\tposition: absolute;\r\n\tright: 15px;\r\n\tdisplay: inline-block;\r\n\tfont-family: 'FontAwesome';\r\n\ttext-rendering: auto;\r\n\tline-height: 40px;\r\n\tfont-size: 18px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\t-webkit-transform: translate(0, 0);\r\n\t-ms-transform: translate(0, 0);\r\n\t-o-transform: translate(0, 0);\r\n\ttransform: translate(0, 0);\r\n\tline-height: 18px;\r\n\ttop: 15px;\r\n}\r\n.sidebar-menu .menu-arrow:before {\r\n\tcontent: \"\\f105\";\r\n}\r\n.sidebar-menu li a.subdrop .menu-arrow {\r\n\t-ms-transform: rotate(90deg);\r\n\t-webkit-transform: rotate(90deg);\r\n\t-o-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n}\r\n.sidebar-menu ul ul a .menu-arrow {\r\n\ttop: 6px;\r\n}\r\n.sidebar-menu a {\r\n\ttransition: unset;\r\n\t-moz-transition: unset;\r\n\t-o-transition: unset;\r\n\t-ms-transition: unset;\r\n\t-webkit-transition: unset;\r\n}\r\n.sidebar-menu > ul > li > a {\r\n\tpadding: 12px 20px;\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tposition: relative;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n.sidebar-menu ul li a i {\r\n\talign-items: center;\r\n\tdisplay: inline-flex;\r\n\tfont-size: 18px;\r\n\tmin-height: 24px;\r\n\tline-height: 18px;\r\n\twidth: 20px;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n.sidebar-menu ul li.menu-title a i {\r\n\tfont-size: 16px;\r\n\tmargin-right: 0;\r\n\ttext-align: right;\r\n\twidth: auto;\r\n}\r\n\r\n\r\n\r\n\r\n.sidebar-menu li.active a {\r\n\tcolor: orange;\r\n}\r\n */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5uZWwvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzTkUiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhbm5lbC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG4uc2lkZWJhciB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgLCAjZmZjYjY3KTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0dG9wOiA3OXB4O1xyXG5cdHdpZHRoOiAyMzBweDtcclxuXHR6LWluZGV4OiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG1hcmdpbi10b3A6IDBweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0bGVmdDogMDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uc2lkZWJhci5vcGVuZWQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uc2lkZWJhci1pbm5lciB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaSBhIHtcclxuXHRjb2xvcjogIzg4ODtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpIGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgbGkuYWN0aXZlIGEge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuLm1lbnUtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDEycHggMjBweDtcclxufVxyXG4ubWVudS10aXRsZSA+IGkge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpLm1lbnUtdGl0bGUgYSB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaS5tZW51LXRpdGxlIGEuYnRuIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmbG9hdDogbm9uZTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEuYWN0aXZlIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ubW9iaWxlLXVzZXItbWVudSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdHotaW5kZXg6IDEwO1xyXG59XHJcbi5tb2JpbGUtdXNlci1tZW51ID4gYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4ubW9iaWxlLXVzZXItbWVudSA+IGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tb2JpbGUtdXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBhIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG59XHJcbi5wcm9maWxlLXJpZ2h0YmFyIHtcclxuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5maXhlZC1zaWRlYmFyLXJpZ2h0IHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA2MHB4O1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0zMDBweDtcclxuXHRib3R0b206IDA7XHJcblx0ei1pbmRleDogMTAxO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4ubW9iaWxlX2J0biB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2lkZWJhciAuc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEgc3BhbiB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcbi5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSBzcGFuLmJhZGdlIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiA5cHggMTBweCA5cHggNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNpZGViYXItbWVudSB1bCB1bCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgdWwgYSB7XHJcblx0cGFkZGluZy1sZWZ0OiA3MHB4O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgdWwgdWwgYSB7XHJcblx0cGFkZGluZy1sZWZ0OiA5MHB4O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgPiB1bCA+IGxpIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNpZGViYXItbWVudSAubWVudS1hcnJvdyB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cztcclxuXHQtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4xNXM7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXM7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxNXB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxuXHR0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHR0b3A6IDE1cHg7XHJcbn1cclxuLnNpZGViYXItbWVudSAubWVudS1hcnJvdzpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaSBhLnN1YmRyb3AgLm1lbnUtYXJyb3cge1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEgLm1lbnUtYXJyb3cge1xyXG5cdHRvcDogNnB4O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgYSB7XHJcblx0dHJhbnNpdGlvbjogdW5zZXQ7XHJcblx0LW1vei10cmFuc2l0aW9uOiB1bnNldDtcclxuXHQtby10cmFuc2l0aW9uOiB1bnNldDtcclxuXHQtbXMtdHJhbnNpdGlvbjogdW5zZXQ7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB1bnNldDtcclxufVxyXG4uc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEge1xyXG5cdHBhZGRpbmc6IDEycHggMjBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIGxpIGEgaSB7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bWluLWhlaWdodDogMjRweDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHR3aWR0aDogMjBweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIGxpLm1lbnUtdGl0bGUgYSBpIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2lkZWJhci1tZW51IGxpLmFjdGl2ZSBhIHtcclxuXHRjb2xvcjogb3JhbmdlO1xyXG59XHJcbiAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/adminpannel/sidebar/sidebar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/adminpannel/sidebar/sidebar.component.ts ***!
    \**********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppAdminpannelSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = JSON.parse(localStorage.getItem('ROLE'));
          this.userRole = this.userDetails;
          console.log(this.userRole);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpannel/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/adminpannel/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./adminpannel/adminpannel.component */
    "./src/app/adminpannel/adminpannel.component.ts");
    /* harmony import */


    var _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./adminpannel/countries/countries.component */
    "./src/app/adminpannel/countries/countries.component.ts");
    /* harmony import */


    var _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ownerpannel/vehicles/vehicles.component */
    "./src/app/ownerpannel/vehicles/vehicles.component.ts");
    /* harmony import */


    var _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./adminpannel/location/location.component */
    "./src/app/adminpannel/location/location.component.ts");
    /* harmony import */


    var _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./adminpannel/adminapprovevehicles/adminapprovevehicles.component */
    "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts");
    /* harmony import */


    var _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./adminpannel/paymentreports/paymentreports.component */
    "./src/app/adminpannel/paymentreports/paymentreports.component.ts");
    /* harmony import */


    var _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./adminpannel/reset-passowrd/reset-passowrd.component */
    "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addnew-cars.component */
    "./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ownerpannel/drivers/drivers.component */
    "./src/app/ownerpannel/drivers/drivers.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/add-drivers.component */
    "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ownerpannel/drivers/viewliscence/viewliscence.component */
    "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts");
    /* harmony import */


    var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./forgotpassword/forgotpassword.component */
    "./src/app/forgotpassword/forgotpassword.component.ts");
    /* harmony import */


    var _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./adminpannel/location/add-location/add-location.component */
    "./src/app/adminpannel/location/add-location/add-location.component.ts");
    /* harmony import */


    var _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./adminpannel/location/edit-location/edit-location.component */
    "./src/app/adminpannel/location/edit-location/edit-location.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ownerpannel/edit-cars/edit-cars.component */
    "./src/app/ownerpannel/edit-cars/edit-cars.component.ts");
    /* harmony import */


    var _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./registerpageformarketing/registerpageformarketing.component */
    "./src/app/registerpageformarketing/registerpageformarketing.component.ts");
    /* harmony import */


    var _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component */
    "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts");
    /* harmony import */


    var _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component */
    "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts");
    /* harmony import */


    var _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component */
    "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component */
    "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./ownerpannel/drivers/edit-drivers/edit-drivers.component */
    "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts");
    /* harmony import */


    var _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./ownerpannel/bankdetails/bankdetails.component */
    "./src/app/ownerpannel/bankdetails/bankdetails.component.ts");
    /* harmony import */


    var _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ownerpannel/bankdetails/add-banks/add-banks.component */
    "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts");
    /* harmony import */


    var _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component */
    "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts");
    /* harmony import */


    var _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./ownerpannel/requests/requests.component */
    "./src/app/ownerpannel/requests/requests.component.ts");
    /* harmony import */


    var _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./ownerpannel/requests/view-requests/view-requests.component */
    "./src/app/ownerpannel/requests/view-requests/view-requests.component.ts");
    /* harmony import */


    var _ownerpannel_handovervehicles_handovervehicles_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./ownerpannel/handovervehicles/handovervehicles.component */
    "./src/app/ownerpannel/handovervehicles/handovervehicles.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addimage_one_addimage_one_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addimage-one/addimage-one.component */
    "./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addimage_two_addimage_two_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addimage-two/addimage-two.component */
    "./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addlicence_front_addlicence_front_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addlicence-front/addlicence-front.component */
    "./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addlicence_back_addlicence_back_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addlicence-back/addlicence-back.component */
    "./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addrcimage_addrcimage_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addrcimage/addrcimage.component */
    "./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_adddriver_licscence_adddriver_licscence_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component */
    "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_adddriver_licscenceback_adddriver_licscenceback_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component */
    "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_adddriver_profilepic_adddriver_profilepic_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component */
    "./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.ts");
    /* harmony import */


    var _ownerpannel_vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./ownerpannel/vehicletracking/vehicletracking.component */
    "./src/app/ownerpannel/vehicletracking/vehicletracking.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _features_features_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./features/features.component */
    "./src/app/features/features.component.ts");
    /* harmony import */


    var _termsandconditons_termsandconditons_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./termsandconditons/termsandconditons.component */
    "./src/app/termsandconditons/termsandconditons.component.ts");
    /* harmony import */


    var _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./privacyandpolicy/privacyandpolicy.component */
    "./src/app/privacyandpolicy/privacyandpolicy.component.ts");
    /* harmony import */


    var _cancelationpolicy_cancelationpolicy_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./cancelationpolicy/cancelationpolicy.component */
    "./src/app/cancelationpolicy/cancelationpolicy.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts"); // import { AuthGuard } from './_guards/auth.guard';


    var routes = [{
      path: '',
      redirectTo: '/userhome',
      pathMatch: 'full'
    }, // {path: '**', redirectTo: '/404'},
    {
      path: '404',
      component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_20__["ErrorPageComponent"]
    }, {
      path: 'userhome',
      component: _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_22__["RegisterpageformarketingComponent"]
    }, {
      path: 'aboutus',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_43__["AboutusComponent"]
    }, {
      path: 'features',
      component: _features_features_component__WEBPACK_IMPORTED_MODULE_45__["FeaturesComponent"]
    }, {
      path: 'contactus',
      component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_44__["ContactusComponent"]
    }, {
      path: 'terms',
      component: _termsandconditons_termsandconditons_component__WEBPACK_IMPORTED_MODULE_46__["TermsandconditonsComponent"]
    }, {
      path: 'privacy',
      component: _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_47__["PrivacyandpolicyComponent"]
    }, {
      path: 'cancelations',
      component: _cancelationpolicy_cancelationpolicy_component__WEBPACK_IMPORTED_MODULE_48__["CancelationpolicyComponent"]
    }, {
      path: 'services',
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_49__["ServicesComponent"]
    }, {
      path: 'Home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'admin',
      component: _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_6__["AdminpannelComponent"]
    }, {
      path: 'countries',
      component: _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"]
    }, {
      path: 'vehicles',
      component: _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_8__["VehiclesComponent"]
    }, {
      path: 'locations',
      component: _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"]
    }, {
      path: 'admin-vehicles',
      component: _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_10__["AdminapprovevehiclesComponent"]
    }, {
      path: 'admin-paymentreports',
      component: _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_11__["PaymentreportsComponent"]
    }, {
      path: 'admin-resetpassword',
      component: _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_12__["ResetPassowrdComponent"]
    }, {
      path: 'add-cars',
      component: _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_13__["AddnewCarsComponent"]
    }, {
      path: 'drivers',
      component: _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_14__["DriversComponent"]
    }, {
      path: 'add-drivers',
      component: _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_15__["AddDriversComponent"]
    }, {
      path: 'forgotpassword',
      component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_17__["ForgotpasswordComponent"]
    }, {
      path: 'add-location',
      component: _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_18__["AddLocationComponent"]
    }, {
      path: 'edit-location/:id/:name',
      component: _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_19__["EditLocationComponent"]
    }, {
      path: 'edit-car/:id',
      component: _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_21__["EditCarsComponent"]
    }, // { path:'view-licsense/:id', component: ViewliscenceComponent,},
    {
      path: 'public',
      component: _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_23__["PulicregistrationmarketingComponent"]
    }, {
      path: 'viewVehicle',
      component: _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_24__["ViewVehicledetailsComponent"]
    }, {
      path: 'ownerviewvehicles',
      component: _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_25__["OwnerviewvehiclesComponent"]
    }, {
      path: 'viewlicsence',
      component: _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_16__["ViewliscenceComponent"]
    }, {
      path: 'viewlicsenceback',
      component: _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_26__["ViewlicsencebackComponent"]
    }, {
      path: 'editdrivers',
      component: _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_27__["EditDriversComponent"]
    }, {
      path: 'bankdetails',
      component: _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_28__["BankdetailsComponent"]
    }, {
      path: 'handovervehicles',
      component: _ownerpannel_handovervehicles_handovervehicles_component__WEBPACK_IMPORTED_MODULE_33__["HandovervehiclesComponent"]
    }, {
      path: 'add-bankdetails',
      component: _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_29__["AddBanksComponent"]
    }, {
      path: 'edit-bankdetails',
      component: _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_30__["EditBankdetailsComponent"]
    }, {
      path: 'request',
      component: _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_31__["RequestsComponent"]
    }, {
      path: 'view-request/:id/:name',
      component: _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_32__["ViewRequestsComponent"]
    }, {
      path: 'image1',
      component: _ownerpannel_addnew_cars_addimage_one_addimage_one_component__WEBPACK_IMPORTED_MODULE_34__["AddimageOneComponent"]
    }, {
      path: 'image2',
      component: _ownerpannel_addnew_cars_addimage_two_addimage_two_component__WEBPACK_IMPORTED_MODULE_35__["AddimageTwoComponent"]
    }, {
      path: 'licsence1',
      component: _ownerpannel_addnew_cars_addlicence_front_addlicence_front_component__WEBPACK_IMPORTED_MODULE_36__["AddlicenceFrontComponent"]
    }, {
      path: 'licsence2',
      component: _ownerpannel_addnew_cars_addlicence_back_addlicence_back_component__WEBPACK_IMPORTED_MODULE_37__["AddlicenceBackComponent"]
    }, {
      path: 'rcfrnt',
      component: _ownerpannel_addnew_cars_addrcimage_addrcimage_component__WEBPACK_IMPORTED_MODULE_38__["AddrcimageComponent"]
    }, {
      path: 'driverlicsencefrnt',
      component: _ownerpannel_drivers_add_drivers_adddriver_licscence_adddriver_licscence_component__WEBPACK_IMPORTED_MODULE_39__["AdddriverLicscenceComponent"]
    }, {
      path: 'driverlicsenceback',
      component: _ownerpannel_drivers_add_drivers_adddriver_licscenceback_adddriver_licscenceback_component__WEBPACK_IMPORTED_MODULE_40__["AdddriverLicscencebackComponent"]
    }, {
      path: 'profilepicdriver',
      component: _ownerpannel_drivers_add_drivers_adddriver_profilepic_adddriver_profilepic_component__WEBPACK_IMPORTED_MODULE_41__["AdddriverProfilepicComponent"]
    }, {
      path: 'vehicletracking',
      component: _ownerpannel_vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_42__["VehicletrackingComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Angualar-Task';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./adminpannel/adminpannel.component */
    "./src/app/adminpannel/adminpannel.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material */
    "./src/app/material.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _adminpannel_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./adminpannel/sidebar/sidebar.component */
    "./src/app/adminpannel/sidebar/sidebar.component.ts");
    /* harmony import */


    var _adminpannel_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./adminpannel/header/header.component */
    "./src/app/adminpannel/header/header.component.ts");
    /* harmony import */


    var _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./adminpannel/countries/countries.component */
    "./src/app/adminpannel/countries/countries.component.ts");
    /* harmony import */


    var _adminpannel_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./adminpannel/adminhome/adminhome.component */
    "./src/app/adminpannel/adminhome/adminhome.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _ownerpannel_ownerpannel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ownerpannel/ownerpannel.component */
    "./src/app/ownerpannel/ownerpannel.component.ts");
    /* harmony import */


    var _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./ownerpannel/vehicles/vehicles.component */
    "./src/app/ownerpannel/vehicles/vehicles.component.ts");
    /* harmony import */


    var _adminpannel_companies_companies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./adminpannel/companies/companies.component */
    "./src/app/adminpannel/companies/companies.component.ts");
    /* harmony import */


    var _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./adminpannel/location/location.component */
    "./src/app/adminpannel/location/location.component.ts");
    /* harmony import */


    var _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./adminpannel/adminapprovevehicles/adminapprovevehicles.component */
    "./src/app/adminpannel/adminapprovevehicles/adminapprovevehicles.component.ts");
    /* harmony import */


    var _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./adminpannel/paymentreports/paymentreports.component */
    "./src/app/adminpannel/paymentreports/paymentreports.component.ts");
    /* harmony import */


    var _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./adminpannel/reset-passowrd/reset-passowrd.component */
    "./src/app/adminpannel/reset-passowrd/reset-passowrd.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addnew-cars.component */
    "./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts");
    /* harmony import */


    var _interceptor_jwtinterceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./_interceptor/jwtinterceptor */
    "./src/app/_interceptor/jwtinterceptor.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./adminpannel/admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var _ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ownerpannel/owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./ownerpannel/drivers/drivers.component */
    "./src/app/ownerpannel/drivers/drivers.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/add-drivers.component */
    "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading.component.ts");
    /* harmony import */


    var _interceptor_loadinginterceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./_interceptor/loadinginterceptor */
    "./src/app/_interceptor/loadinginterceptor.ts");
    /* harmony import */


    var _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./ownerpannel/drivers/viewliscence/viewliscence.component */
    "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts");
    /* harmony import */


    var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./forgotpassword/forgotpassword.component */
    "./src/app/forgotpassword/forgotpassword.component.ts");
    /* harmony import */


    var _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./adminpannel/location/edit-location/edit-location.component */
    "./src/app/adminpannel/location/edit-location/edit-location.component.ts");
    /* harmony import */


    var _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./adminpannel/location/add-location/add-location.component */
    "./src/app/adminpannel/location/add-location/add-location.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./ownerpannel/edit-cars/edit-cars.component */
    "./src/app/ownerpannel/edit-cars/edit-cars.component.ts");
    /* harmony import */


    var _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./registerpageformarketing/registerpageformarketing.component */
    "./src/app/registerpageformarketing/registerpageformarketing.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component */
    "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts");
    /* harmony import */


    var _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component */
    "./src/app/adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component.ts");
    /* harmony import */


    var _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component */
    "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component */
    "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./ownerpannel/drivers/edit-drivers/edit-drivers.component */
    "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts");
    /* harmony import */


    var _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./ownerpannel/bankdetails/bankdetails.component */
    "./src/app/ownerpannel/bankdetails/bankdetails.component.ts");
    /* harmony import */


    var _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./ownerpannel/bankdetails/add-banks/add-banks.component */
    "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts");
    /* harmony import */


    var _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component */
    "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts");
    /* harmony import */


    var _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./ownerpannel/requests/requests.component */
    "./src/app/ownerpannel/requests/requests.component.ts");
    /* harmony import */


    var _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./ownerpannel/requests/view-requests/view-requests.component */
    "./src/app/ownerpannel/requests/view-requests/view-requests.component.ts");
    /* harmony import */


    var _ownerpannel_handovervehicles_handovervehicles_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./ownerpannel/handovervehicles/handovervehicles.component */
    "./src/app/ownerpannel/handovervehicles/handovervehicles.component.ts");
    /* harmony import */


    var _ownerpannel_handovervehicles_add_vehiclekm_handover_add_vehiclekm_handover_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component */
    "./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addimage_one_addimage_one_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addimage-one/addimage-one.component */
    "./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addimage_two_addimage_two_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addimage-two/addimage-two.component */
    "./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addlicence_front_addlicence_front_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addlicence-front/addlicence-front.component */
    "./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addlicence_back_addlicence_back_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addlicence-back/addlicence-back.component */
    "./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.ts");
    /* harmony import */


    var _ownerpannel_addnew_cars_addrcimage_addrcimage_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./ownerpannel/addnew-cars/addrcimage/addrcimage.component */
    "./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_adddriver_licscence_adddriver_licscence_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component */
    "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_adddriver_licscenceback_adddriver_licscenceback_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component */
    "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.ts");
    /* harmony import */


    var _ownerpannel_drivers_add_drivers_adddriver_profilepic_adddriver_profilepic_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component */
    "./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.ts");
    /* harmony import */


    var _ownerpannel_vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./ownerpannel/vehicletracking/vehicletracking.component */
    "./src/app/ownerpannel/vehicletracking/vehicletracking.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _features_features_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./features/features.component */
    "./src/app/features/features.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _termsandconditons_termsandconditons_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./termsandconditons/termsandconditons.component */
    "./src/app/termsandconditons/termsandconditons.component.ts");
    /* harmony import */


    var _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ./privacyandpolicy/privacyandpolicy.component */
    "./src/app/privacyandpolicy/privacyandpolicy.component.ts");
    /* harmony import */


    var _cancelationpolicy_cancelationpolicy_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! ./cancelationpolicy/cancelationpolicy.component */
    "./src/app/cancelationpolicy/cancelationpolicy.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts"); // import { AuthGuard } from './_guards/auth.guard';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _adminpannel_adminpannel_component__WEBPACK_IMPORTED_MODULE_8__["AdminpannelComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _adminpannel_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"], _adminpannel_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _adminpannel_countries_countries_component__WEBPACK_IMPORTED_MODULE_15__["CountriesComponent"], _adminpannel_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_16__["AdminhomeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"], _ownerpannel_ownerpannel_component__WEBPACK_IMPORTED_MODULE_18__["OwnerpannelComponent"], _ownerpannel_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_19__["VehiclesComponent"], _adminpannel_companies_companies_component__WEBPACK_IMPORTED_MODULE_20__["CompaniesComponent"], _adminpannel_location_location_component__WEBPACK_IMPORTED_MODULE_21__["LocationComponent"], _adminpannel_adminapprovevehicles_adminapprovevehicles_component__WEBPACK_IMPORTED_MODULE_22__["AdminapprovevehiclesComponent"], _adminpannel_paymentreports_paymentreports_component__WEBPACK_IMPORTED_MODULE_23__["PaymentreportsComponent"], _adminpannel_reset_passowrd_reset_passowrd_component__WEBPACK_IMPORTED_MODULE_24__["ResetPassowrdComponent"], _ownerpannel_addnew_cars_addnew_cars_component__WEBPACK_IMPORTED_MODULE_25__["AddnewCarsComponent"], _ownerpannel_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_30__["DriversComponent"], _ownerpannel_drivers_add_drivers_add_drivers_component__WEBPACK_IMPORTED_MODULE_31__["AddDriversComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_32__["LoadingComponent"], _ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_34__["ViewliscenceComponent"], _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_35__["ForgotpasswordComponent"], _adminpannel_location_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_36__["EditLocationComponent"], _adminpannel_location_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_37__["AddLocationComponent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_38__["ErrorPageComponent"], _ownerpannel_edit_cars_edit_cars_component__WEBPACK_IMPORTED_MODULE_41__["EditCarsComponent"], _registerpageformarketing_registerpageformarketing_component__WEBPACK_IMPORTED_MODULE_42__["RegisterpageformarketingComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"], _registerpageformarketing_pulicregistrationmarketing_pulicregistrationmarketing_component__WEBPACK_IMPORTED_MODULE_44__["PulicregistrationmarketingComponent"], _adminpannel_adminapprovevehicles_view_vehicledetails_view_vehicledetails_component__WEBPACK_IMPORTED_MODULE_45__["ViewVehicledetailsComponent"], _ownerpannel_vehicles_ownerviewvehicles_ownerviewvehicles_component__WEBPACK_IMPORTED_MODULE_46__["OwnerviewvehiclesComponent"], _ownerpannel_drivers_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_47__["ViewlicsencebackComponent"], _ownerpannel_drivers_edit_drivers_edit_drivers_component__WEBPACK_IMPORTED_MODULE_48__["EditDriversComponent"], _ownerpannel_bankdetails_bankdetails_component__WEBPACK_IMPORTED_MODULE_49__["BankdetailsComponent"], _ownerpannel_bankdetails_add_banks_add_banks_component__WEBPACK_IMPORTED_MODULE_50__["AddBanksComponent"], _ownerpannel_bankdetails_edit_bankdetails_edit_bankdetails_component__WEBPACK_IMPORTED_MODULE_51__["EditBankdetailsComponent"], _ownerpannel_requests_requests_component__WEBPACK_IMPORTED_MODULE_52__["RequestsComponent"], _ownerpannel_requests_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_53__["ViewRequestsComponent"], _ownerpannel_handovervehicles_handovervehicles_component__WEBPACK_IMPORTED_MODULE_54__["HandovervehiclesComponent"], _ownerpannel_handovervehicles_add_vehiclekm_handover_add_vehiclekm_handover_component__WEBPACK_IMPORTED_MODULE_55__["AddVehiclekmHandoverComponent"], _ownerpannel_addnew_cars_addimage_one_addimage_one_component__WEBPACK_IMPORTED_MODULE_56__["AddimageOneComponent"], _ownerpannel_addnew_cars_addimage_two_addimage_two_component__WEBPACK_IMPORTED_MODULE_57__["AddimageTwoComponent"], _ownerpannel_addnew_cars_addlicence_front_addlicence_front_component__WEBPACK_IMPORTED_MODULE_58__["AddlicenceFrontComponent"], _ownerpannel_addnew_cars_addlicence_back_addlicence_back_component__WEBPACK_IMPORTED_MODULE_59__["AddlicenceBackComponent"], _ownerpannel_addnew_cars_addrcimage_addrcimage_component__WEBPACK_IMPORTED_MODULE_60__["AddrcimageComponent"], _ownerpannel_drivers_add_drivers_adddriver_licscence_adddriver_licscence_component__WEBPACK_IMPORTED_MODULE_61__["AdddriverLicscenceComponent"], _ownerpannel_drivers_add_drivers_adddriver_licscenceback_adddriver_licscenceback_component__WEBPACK_IMPORTED_MODULE_62__["AdddriverLicscencebackComponent"], _ownerpannel_drivers_add_drivers_adddriver_profilepic_adddriver_profilepic_component__WEBPACK_IMPORTED_MODULE_63__["AdddriverProfilepicComponent"], _ownerpannel_vehicletracking_vehicletracking_component__WEBPACK_IMPORTED_MODULE_64__["VehicletrackingComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_65__["AboutusComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_66__["FeaturesComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_67__["ContactusComponent"], _termsandconditons_termsandconditons_component__WEBPACK_IMPORTED_MODULE_68__["TermsandconditonsComponent"], _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_69__["PrivacyandpolicyComponent"], _cancelationpolicy_cancelationpolicy_component__WEBPACK_IMPORTED_MODULE_70__["CancelationpolicyComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_71__["ServicesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_40__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
      providers: [// AuthGuard,
      {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_39__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_39__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_loadinginterceptor__WEBPACK_IMPORTED_MODULE_33__["LoadingScreenInterceptor"],
        multi: true
      }, _login_login_service__WEBPACK_IMPORTED_MODULE_27__["LoginService"], _adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_28__["AdminService"], _ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_29__["OwnerService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_jwtinterceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_ownerpannel_drivers_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_34__["ViewliscenceComponent"], _ownerpannel_handovervehicles_add_vehiclekm_handover_add_vehiclekm_handover_component__WEBPACK_IMPORTED_MODULE_55__["AddVehiclekmHandoverComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cancelationpolicy/cancelationpolicy.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/cancelationpolicy/cancelationpolicy.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCancelationpolicyCancelationpolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNlbGF0aW9ucG9saWN5L2NhbmNlbGF0aW9ucG9saWN5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/cancelationpolicy/cancelationpolicy.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/cancelationpolicy/cancelationpolicy.component.ts ***!
    \******************************************************************/

  /*! exports provided: CancelationpolicyComponent */

  /***/
  function srcAppCancelationpolicyCancelationpolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelationpolicyComponent", function () {
      return CancelationpolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CancelationpolicyComponent = /*#__PURE__*/function () {
      function CancelationpolicyComponent() {
        _classCallCheck(this, CancelationpolicyComponent);
      }

      _createClass(CancelationpolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CancelationpolicyComponent;
    }();

    CancelationpolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancelationpolicy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cancelationpolicy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cancelationpolicy/cancelationpolicy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cancelationpolicy.component.css */
      "./src/app/cancelationpolicy/cancelationpolicy.component.css"))["default"]]
    })], CancelationpolicyComponent);
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.css":
  /*!***************************************************!*\
    !*** ./src/app/contactus/contactus.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactusContactusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .overlay-bg::after {\r\n    background-color: rgba(0, 0, 0, 0.096) !important;\r\n}\r\n\r\n.overlay {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUciLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAub3ZlcmxheS1iZzo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA5NikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactus/contactus.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactusComponent = /*#__PURE__*/function () {
      function ContactusComponent() {
        _classCallCheck(this, ContactusComponent);
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactusComponent;
    }();

    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactus.component.css */
      "./src/app/contactus/contactus.component.css"))["default"]]
    })], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/error-page/error-page.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorPageErrorPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/error-page/error-page.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-page.component.css */
      "./src/app/error-page/error-page.component.css"))["default"]]
    })], ErrorPageComponent);
    /***/
  },

  /***/
  "./src/app/features/features.component.css":
  /*!*************************************************!*\
    !*** ./src/app/features/features.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesFeaturesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/features.component.ts":
  /*!************************************************!*\
    !*** ./src/app/features/features.component.ts ***!
    \************************************************/

  /*! exports provided: FeaturesComponent */

  /***/
  function srcAppFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return FeaturesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FeaturesComponent = /*#__PURE__*/function () {
      function FeaturesComponent() {
        _classCallCheck(this, FeaturesComponent);
      }

      _createClass(FeaturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeaturesComponent;
    }();

    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-features',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./features.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./features.component.css */
      "./src/app/features/features.component.css"))["default"]]
    })], FeaturesComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/forgotpassword/forgotpassword.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotpasswordForgotpasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\r\n    width: 126%;\r\n    padding: 94px;\r\n    height:auto;\r\n    margin-top: 10px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n.help-block{\r\n    color: red;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n  background-color: #cccccc;\r\n  color: #666666;\r\n}\r\nh4{\r\n    text-align: center;\r\n}\r\n.page-wrapper{\r\n    /* background: linear-gradient(45deg, #0085B2, #00B3DA);\r\n     */\r\n    /* margin-top: 52px; */\r\n    margin-top: 81px;\r\n\r\n    height:100%;\r\n    background: transparent linear-gradient(301deg, #00B3DA 0%, #0085B2 100%) 0% 0% no-repeat padding-box;\r\n}\r\np{\r\n    text-align: center;\r\n    color: #4D4F5C;\r\n    font-size: 12px;\r\n}\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 370px !important;\r\n}\r\n@media (max-width: 968px)\r\n{\r\n    .card{\r\n        width: 100%;\r\n    }\r\n    ::ng-deep .mat-form-field-infix {\r\n        display: block;\r\n        position: relative;\r\n        flex: auto;\r\n        width: 170px !important;\r\n    }\r\n    .loginbtn{\r\n        width:  100%  !important;\r\n    }\r\n    .signupbtn{\r\n        width:  100%  !important;\r\n    }\r\n}\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\r\n.loginbtn{\r\n    border: none;\r\n    padding: 7px;\r\n    width: 160px;\r\n    color: white;\r\n    background: #009cc6;\r\n}\r\n.signupbtn{\r\n    color: #009cc6;\r\n    background: white;\r\n    border: 1px solid #009cc6;\r\n    padding: 7px;\r\n    width: 160px;\r\n    /* margin-left: 43px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtNQUNFO0lBQ0Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjs7SUFFaEIsV0FBVztJQUNYLHFHQUFxRztBQUN6RztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFFQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAxMjYlO1xyXG4gICAgcGFkZGluZzogOTRweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5idXR0b246ZGlzYWJsZWQsXHJcbmJ1dHRvbltkaXNhYmxlZF17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5oNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnZS13cmFwcGVye1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4NUIyLCAjMDBCM0RBKTtcclxuICAgICAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogNTJweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDgxcHg7XHJcblxyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMzAxZGVnLCAjMDBCM0RBIDAlLCAjMDA4NUIyIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0RDRGNUM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICB3aWR0aDogMzcwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KVxyXG57XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luYnRue1xyXG4gICAgICAgIHdpZHRoOiAgMTAwJSAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaWdudXBidG57XHJcbiAgICAgICAgd2lkdGg6ICAxMDAlICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDsgXHJcbn1cclxuXHJcbi5sb2dpbmJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDljYzY7XHJcbn1cclxuLnNpZ251cGJ0bntcclxuICAgIGNvbG9yOiAjMDA5Y2M2O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Y2M2O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDQzcHg7ICovXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/forgotpassword/forgotpassword.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
    \************************************************************/

  /*! exports provided: ForgotpasswordComponent */

  /***/
  function srcAppForgotpasswordForgotpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function () {
      return ForgotpasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgotpasswordComponent = /*#__PURE__*/function () {
      function ForgotpasswordComponent() {
        _classCallCheck(this, ForgotpasswordComponent);
      }

      _createClass(ForgotpasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotpasswordComponent;
    }();

    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgotpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgotpassword.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgotpassword.component.css */
      "./src/app/forgotpassword/forgotpassword.component.css"))["default"]]
    })], ForgotpasswordComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper{\r\n    /* margin-top: 50px; */\r\n    background-color: beige;\r\n    height: 100%;\r\n}\r\n::ng-deep .mat-card{\r\n    margin-top: 50% !important;\r\n}\r\nh5{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVye1xyXG4gICAgLyogbWFyZ2luLXRvcDogNTBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5oNXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, loginservice) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.loginservice = loginservice;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.loginservice.userLogin().subscribe(
          //   data =>{
          //     this.results = data;
          //     localStorage.setItem("userdata",JSON.stringify(this.results));
          //   },
          //   error =>{
          //   }
          // )
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['/register']);
        }
      }, {
        key: "admin",
        value: function admin() {
          this.router.navigate(['/admin']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/loading/loading.component.css":
  /*!***********************************************!*\
    !*** ./src/app/loading/loading.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoadingLoadingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".overlay {\r\n    position:fixed;\r\n    display:block;\r\n    width:100%;\r\n    height:100%;\r\n    top:0;\r\n    left:0px;\r\n    background-color:rgba(192, 181, 181, 0.589);\r\n    align-items: center;\r\n  }\r\n  .spinner {\r\n    position:absolute;\r\n    top:50%;\r\n    left:49%;\r\n    transform: translate(-50%,-50%);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  /* .loader {\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9999;\r\n   \r\n    opacity: .8;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsS0FBSztJQUNMLFFBQVE7SUFDUiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBOzs7Ozs7Ozs7R0FTQyIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxOTIsIDE4MSwgMTgxLCAwLjU4OSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjQ5JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLyogLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgXHJcbiAgICBvcGFjaXR5OiAuODtcclxufSAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/loading/loading.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/loading/loading.component.ts ***!
    \**********************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/loading/loading.service.ts");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent(loaderService) {
        _classCallCheck(this, LoadingComponent);

        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.showText = 'Loading';
        this.isLoading = this.loaderService.isLoading;
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ctorParameters = function () {
      return [{
        type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }];
    };

    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading.component.css */
      "./src/app/loading/loading.component.css"))["default"]]
    })], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/loading/loading.service.ts":
  /*!********************************************!*\
    !*** ./src/app/loading/loading.service.ts ***!
    \********************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppLoadingLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoadingService = /*#__PURE__*/function () {
      function LoadingService() {
        _classCallCheck(this, LoadingService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LoadingService, [{
        key: "show",
        value: function show() {
          this.isLoading.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isLoading.next(false);
        }
      }]);

      return LoadingService;
    }();

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoadingService);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\r\n    width: 126%;\r\n    padding: 94px;\r\n    height: auto;\r\n    margin-top: 10px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n.swal-modal {\r\n    width: 10px !important;\r\n}\r\n\r\n.help-block {\r\n    color: red;\r\n}\r\n\r\nbutton:disabled,\r\nbutton[disabled] {\r\n    background-color: #cccccc;\r\n    color: #666666;\r\n}\r\n\r\nh4 {\r\n    text-align: center;\r\n}\r\n\r\n.page-wrapper {\r\n    /* background: linear-gradient(45deg, #0085B2, #00B3DA);\r\n     */\r\n    /* margin-top: 52px; */\r\n    /* margin-top: 81px; */\r\n    height: 100%;\r\n    background: transparent linear-gradient(301deg, #00B3DA 0%, #0085B2 100%) 0% 0% no-repeat padding-box;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n    color: #4D4F5C;\r\n    font-size: 12px;\r\n}\r\n\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 370px !important;\r\n}\r\n\r\n@media (max-width: 968px) {\r\n    .card {\r\n        width: 100%;\r\n    }\r\n     ::ng-deep .mat-form-field-infix {\r\n        display: block;\r\n        position: relative;\r\n        flex: auto;\r\n        width: 170px !important;\r\n    }\r\n    .loginbtn {\r\n        width: 100% !important;\r\n    }\r\n    .signupbtn {\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.loginbtn {\r\n    border: none;\r\n    padding: 7px;\r\n    width: 160px;\r\n    color: white;\r\n    background: #009cc6;\r\n}\r\n\r\n.signupbtn {\r\n    color: #009cc6;\r\n    background: white;\r\n    border: 1px solid #009cc6;\r\n    padding: 7px;\r\n    width: 160px;\r\n    /* margin-left: 43px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7TUFDRTtJQUNGLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFHQUFxRztBQUN6Rzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0tBQ0M7UUFDRyxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMjYlO1xyXG4gICAgcGFkZGluZzogOTRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnN3YWwtbW9kYWwge1xyXG4gICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5cclxuaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwODVCMiwgIzAwQjNEQSk7XHJcbiAgICAgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDUycHg7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiA4MXB4OyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDMwMWRlZywgIzAwQjNEQSAwJSwgIzAwODVCMiAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0RDRGNUM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgd2lkdGg6IDM3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNpZ251cGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDljYzY7XHJcbn1cclxuXHJcbi5zaWdudXBidG4ge1xyXG4gICAgY29sb3I6ICMwMDljYzY7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDljYzY7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNDNweDsgKi9cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, loginservice, toaster, authservice, _snackBar) {
        _classCallCheck(this, LoginComponent);

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

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form, formData) {
          var _this22 = this;

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
          this.loginservice.userLogin(formData).subscribe(function (data) {
            localStorage.setItem('userDetail', JSON.stringify(data));
            localStorage.setItem('token', JSON.stringify(data['accessToken']));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));

            if (data['roleId'] == '1') {
              localStorage.setItem('ROLE', JSON.stringify('ADMIN'));

              _this22.router.navigate(['/admin']); // this.toaster.success('   Login Successfully');


              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Admin Login!', ' Admin Login Successfully', 'success');
            } else if (data['roleId'] == '2') {
              localStorage.setItem('ROLE', JSON.stringify('OWNER'));

              _this22.router.navigate(['/admin']);

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Owner Login!', ' Owner Login Successfully', 'success');
            }
          }, function (error) {
            console.log(error); // this.toaster.error('Incorrect User Details');

            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Invalid Details!', 'Incorrect User Details', 'error');
          });
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['/register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/login.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login.service.ts ***!
    \****************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.BASEURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
      } // userLogin()
      // {
      //   return this.http.get(this.LOGIN_DETIALS);
      // }


      _createClass(LoginService, [{
        key: "userLogin",
        value: function userLogin(formData) {
          return this.http.post(this.BASEURL + 'api/auth/admin/signin', formData);
        }
      }, {
        key: "register",
        value: function register(req) {
          return this.http.post(this.BASEURL + 'api/auth/signup', req);
        }
      }, {
        key: "userpublicregister",
        value: function userpublicregister(data) {
          return this.http.post(this.BASEURL + 'user/addCustomer', data);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/material.ts":
  /*!*****************************!*\
    !*** ./src/app/material.ts ***!
    \*****************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/navigation/navigation.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#header-area .header-social-icons a:hover i.fa, #header-area .mainmenu ul li.active a, #header-area .mainmenu ul li:hover a {\r\n    color: #ffd000;\r\n}\r\n#header-area, #header-area a {\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXItYXJlYSAuaGVhZGVyLXNvY2lhbC1pY29ucyBhOmhvdmVyIGkuZmEsICNoZWFkZXItYXJlYSAubWFpbm1lbnUgdWwgbGkuYWN0aXZlIGEsICNoZWFkZXItYXJlYSAubWFpbm1lbnUgdWwgbGk6aG92ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZDAwMDtcclxufVxyXG4jaGVhZGVyLWFyZWEsICNoZWFkZXItYXJlYSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(router) {
        _classCallCheck(this, NavigationComponent);

        this.router = router;
        this.isloggedIn = false;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isloggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isloggedIn = false;
          localStorage.clear();
          this.router.navigate(['/Home']);
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/navigation/navigation.component.css"))["default"]]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelAddnewCarsAddimageOneAddimageOneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkaW1hZ2Utb25lL2FkZGltYWdlLW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2FkZG5ldy1jYXJzL2FkZGltYWdlLW9uZS9hZGRpbWFnZS1vbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddimageOneComponent */

  /***/
  function srcAppOwnerpannelAddnewCarsAddimageOneAddimageOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddimageOneComponent", function () {
      return AddimageOneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddimageOneComponent = /*#__PURE__*/function () {
      function AddimageOneComponent(fb, router, toaster, owenerservice) {
        _classCallCheck(this, AddimageOneComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AddimageOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__["Vehicle"]();
          this.addVehiclesform = this.fb.group({
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            img1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
          console.log(this.vehicleId['id']);
        }
      }, {
        key: "addimage1",
        value: function addimage1(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this23 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addVehiclesform.invalid) {
            return;
          } else {
            this.formData.append('image', this.image1);
            this.formData.append('type', "1");
            this.formData.append('id', this.vehicleId['id']);
            this.owenerservice.addimages(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Image 1 Added!', 'Image 1 Added Successfully', 'success');

              _this23.router.navigate(['/image2']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add image 1!', 'Unable to add image 1 Successfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return AddimageOneComponent;
    }();

    AddimageOneComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    AddimageOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addimage-one',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addimage-one.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addimage-one.component.css */
      "./src/app/ownerpannel/addnew-cars/addimage-one/addimage-one.component.css"))["default"]]
    })], AddimageOneComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelAddnewCarsAddimageTwoAddimageTwoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkaW1hZ2UtdHdvL2FkZGltYWdlLXR3by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2FkZG5ldy1jYXJzL2FkZGltYWdlLXR3by9hZGRpbWFnZS10d28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddimageTwoComponent */

  /***/
  function srcAppOwnerpannelAddnewCarsAddimageTwoAddimageTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddimageTwoComponent", function () {
      return AddimageTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddimageTwoComponent = /*#__PURE__*/function () {
      function AddimageTwoComponent(fb, router, toaster, owenerservice) {
        _classCallCheck(this, AddimageTwoComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AddimageTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__["Vehicle"]();
          this.addVehiclesform = this.fb.group({
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            // img1:['',Validators.required],
            img2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
          console.log(this.vehicleId['id']);
        }
      }, {
        key: "addimage2",
        value: function addimage2(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this24 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addVehiclesform.invalid) {
            return;
          } else {
            this.formData.append('image', this.image1);
            this.formData.append('type', "2");
            this.formData.append('id', this.vehicleId['id']);
            this.owenerservice.addimages(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Image 1 Added!', 'Image 1 Added Successfully', 'success');

              _this24.router.navigate(['/licsence1']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add image 1!', 'Unable to add image 1 Successfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return AddimageTwoComponent;
    }();

    AddimageTwoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    AddimageTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addimage-two',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addimage-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addimage-two.component.css */
      "./src/app/ownerpannel/addnew-cars/addimage-two/addimage-two.component.css"))["default"]]
    })], AddimageTwoComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelAddnewCarsAddlicenceBackAddlicenceBackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkbGljZW5jZS1iYWNrL2FkZGxpY2VuY2UtYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2FkZG5ldy1jYXJzL2FkZGxpY2VuY2UtYmFjay9hZGRsaWNlbmNlLWJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AddlicenceBackComponent */

  /***/
  function srcAppOwnerpannelAddnewCarsAddlicenceBackAddlicenceBackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddlicenceBackComponent", function () {
      return AddlicenceBackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddlicenceBackComponent = /*#__PURE__*/function () {
      function AddlicenceBackComponent(fb, router, toaster, owenerservice) {
        _classCallCheck(this, AddlicenceBackComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AddlicenceBackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__["Vehicle"]();
          this.addVehiclesform = this.fb.group({
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            // img1:['',Validators.required],
            img2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
          console.log(this.vehicleId['id']);
        }
      }, {
        key: "addimage2",
        value: function addimage2(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this25 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addVehiclesform.invalid) {
            return;
          } else {
            this.formData.append('image', this.image1);
            this.formData.append('type', "3");
            this.formData.append('id', this.vehicleId['id']);
            this.owenerservice.addimages(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Licence Back Added!', 'Licence Added Successfully', 'success');

              _this25.router.navigate(['/rcfrnt']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Licence Back Added Error!', 'Licence Back Added SUnccessfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return AddlicenceBackComponent;
    }();

    AddlicenceBackComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    AddlicenceBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addlicence-back',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addlicence-back.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addlicence-back.component.css */
      "./src/app/ownerpannel/addnew-cars/addlicence-back/addlicence-back.component.css"))["default"]]
    })], AddlicenceBackComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelAddnewCarsAddlicenceFrontAddlicenceFrontComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkbGljZW5jZS1mcm9udC9hZGRsaWNlbmNlLWZyb250LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkbGljZW5jZS1mcm9udC9hZGRsaWNlbmNlLWZyb250LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyODdweDtcclxuICAgIH1cclxufVxyXG5cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AddlicenceFrontComponent */

  /***/
  function srcAppOwnerpannelAddnewCarsAddlicenceFrontAddlicenceFrontComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddlicenceFrontComponent", function () {
      return AddlicenceFrontComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddlicenceFrontComponent = /*#__PURE__*/function () {
      function AddlicenceFrontComponent(fb, router, toaster, owenerservice) {
        _classCallCheck(this, AddlicenceFrontComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AddlicenceFrontComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__["Vehicle"]();
          this.addVehiclesform = this.fb.group({
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            // img1:['',Validators.required],
            img2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
          console.log(this.vehicleId['id']);
        }
      }, {
        key: "addimage2",
        value: function addimage2(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this26 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addVehiclesform.invalid) {
            return;
          } else {
            this.formData.append('image', this.image1);
            this.formData.append('type', "3");
            this.formData.append('id', this.vehicleId['id']);
            this.owenerservice.addimages(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Licence Front Added!', 'Licence Front Added Successfully', 'success');

              _this26.router.navigate(['/licsence2']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Licence Front Added Error!', 'Licence Front Added SUnccessfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return AddlicenceFrontComponent;
    }();

    AddlicenceFrontComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    AddlicenceFrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addlicence-front',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addlicence-front.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addlicence-front.component.css */
      "./src/app/ownerpannel/addnew-cars/addlicence-front/addlicence-front.component.css"))["default"]]
    })], AddlicenceFrontComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addnew-cars.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addnew-cars.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelAddnewCarsAddnewCarsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkbmV3LWNhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUdsQix5QkFBeUI7QUFDN0I7QUFDQTtDQUNDO0lBQ0csaUJBQWlCO0FBQ3JCLENBQUM7QUFDRDtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9hZGRuZXctY2Fycy9hZGRuZXctY2Fycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KVxyXG57LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyODdweDtcclxufX1cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addnew-cars.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddnewCarsComponent */

  /***/
  function srcAppOwnerpannelAddnewCarsAddnewCarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddnewCarsComponent", function () {
      return AddnewCarsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddnewCarsComponent = /*#__PURE__*/function () {
      function AddnewCarsComponent(fb, router, toaster, owenerservice) {
        _classCallCheck(this, AddnewCarsComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.locations = [];
        this.submitted = false;
        this.driverslist = [];
      }

      _createClass(AddnewCarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            // img1:['',Validators.required],
            // img2 :['',Validators.required],
            driver: [''],
            dRent: [''],
            vRentperHr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vRentperKm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          console.log(this.ownerId);
          this.getalllocality();
          this.getalldrivers();
        }
      }, {
        key: "getalldrivers",
        value: function getalldrivers() {
          var _this27 = this;

          this.owenerservice.getalldrivers(this.ownerId).subscribe(function (data) {
            _this27.driverslist = data;
            console.log(_this27.driverslist);
          }, function (error) {});
        }
      }, {
        key: "getalllocality",
        value: function getalllocality() {
          var _this28 = this;

          this.owenerservice.getalllocality().subscribe(function (data) {
            console.log(data);
            _this28.locations = data;
          }, function (error) {});
        }
      }, {
        key: "addrcimage",
        value: function addrcimage(event) {
          this.files = event.target.files;
          this.rcproof = this.files.item(0);
        }
      }, {
        key: "addimage1",
        value: function addimage1(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "addimage2",
        value: function addimage2(event) {
          this.img2 = event.target.files;
          this.image2 = this.img2.item(0);
        }
      }, {
        key: "addliscensefrnt",
        value: function addliscensefrnt(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "addliscenseback",
        value: function addliscenseback(event) {
          this.lisence2 = event.target.files;
          this.lisenceback = this.lisence2.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this29 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addVehiclesform.invalid) {
            return;
          } else {
            this.formData.append('type', this.vehicleModel.vehicleType);
            this.formData.append('companyName', this.vehicleModel.vehicleCompany);
            this.formData.append('model', this.vehicleModel.vehicleModel);
            this.formData.append('year', this.vehicleModel.vehicleYear);
            this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
            this.formData.append('locality', this.vehicleModel.locality);
            this.formData.append('rentPerDay', this.vehicleModel.rent);
            this.formData.append('ownerId', this.ownerId); // this.formData.append('licenceFront', this.lisencefrnt);
            // this.formData.append('licenceBack', this.lisenceback);
            // this.formData.append('rcImage', this.rcproof);
            // this.formData.append('image1', this.image1);
            // this.formData.append('image2', this.image2);

            this.formData.append('driverId', this.vehicleModel.driver);
            this.formData.append('driverRentPerKM', this.vehicleModel.dRent);
            this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
            this.formData.append('rentPerHour', this.vehicleModel.vRentperHr);
            console.log(this.formData);
            this.owenerservice.addnewvehicle(this.formData).subscribe(function (data) {
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
              localStorage.setItem('vehicleadddetailsid', JSON.stringify(data));
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Added!', 'Basic Details Added Successfully', 'success');

              _this29.router.navigate(['/image1']);
            }, function (error) {
              // alert('error')
              _this29.error = error.error['message'];
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add Vehicle!', _this29.error, 'error'); // this.toaster.error(this.error)

              _this29.formData["delete"];
            });
          }
        }
      }, {
        key: "clicks",
        value: function clicks() {}
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return AddnewCarsComponent;
    }();

    AddnewCarsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"]
      }];
    };

    AddnewCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addnew-cars',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addnew-cars.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addnew-cars.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addnew-cars.component.css */
      "./src/app/ownerpannel/addnew-cars/addnew-cars.component.css"))["default"]]
    })], AddnewCarsComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelAddnewCarsAddrcimageAddrcimageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkcmNpbWFnZS9hZGRyY2ltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvYWRkbmV3LWNhcnMvYWRkcmNpbWFnZS9hZGRyY2ltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyODdweDtcclxuICAgIH1cclxufVxyXG5cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AddrcimageComponent */

  /***/
  function srcAppOwnerpannelAddnewCarsAddrcimageAddrcimageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddrcimageComponent", function () {
      return AddrcimageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddrcimageComponent = /*#__PURE__*/function () {
      function AddrcimageComponent(fb, router, toaster, owenerservice) {
        _classCallCheck(this, AddrcimageComponent);

        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.owenerservice = owenerservice;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AddrcimageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vehicleModel = new src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_5__["Vehicle"]();
          this.addVehiclesform = this.fb.group({
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            // img1:['',Validators.required],
            img2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
          console.log(this.vehicleId['id']);
        }
      }, {
        key: "addimage2",
        value: function addimage2(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this30 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addVehiclesform.invalid) {
            return;
          } else {
            this.formData.append('image', this.image1);
            this.formData.append('type', "5");
            this.formData.append('id', this.vehicleId['id']);
            this.owenerservice.addimages(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('RC Added!', 'RC Added Successfully', 'success');

              _this30.router.navigate(['/vehicles']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('RC Added Error!', 'RC Added SUnccessfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return AddrcimageComponent;
    }();

    AddrcimageComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    AddrcimageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addrcimage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addrcimage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addrcimage.component.css */
      "./src/app/ownerpannel/addnew-cars/addrcimage/addrcimage.component.css"))["default"]]
    })], AddrcimageComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelBankdetailsAddBanksAddBanksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvYWRkLWJhbmtzL2FkZC1iYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2JhbmtkZXRhaWxzL2FkZC1iYW5rcy9hZGQtYmFua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AddBanksComponent */

  /***/
  function srcAppOwnerpannelBankdetailsAddBanksAddBanksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBanksComponent", function () {
      return AddBanksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/bank */
    "./src/app/_models/bank.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var AddBanksComponent = /*#__PURE__*/function () {
      function AddBanksComponent(fb, router, ownerservice) {
        _classCallCheck(this, AddBanksComponent);

        this.fb = fb;
        this.router = router;
        this.ownerservice = ownerservice;
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
        this.submitted = false;
        this.formData = new FormData();
        this.userDetails = [];
      }

      _createClass(AddBanksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
          this.addBankForm = this.fb.group({
            acocuntholderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ifscode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
          console.log(this.userDetails);
          this.bankModel.ownerId = this.userDetails['userId'];
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this31 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addBankForm.invalid) {
            return;
          } else {
            this.formData.append('accountHolderName', this.bankModel.acocuntholderName);
            this.formData.append('accountNumber ', this.bankModel.accountNumber);
            this.formData.append('ifscCode', this.bankModel.ifscode);
            this.formData.append('bankName', this.bankModel.bankName);
            this.formData.append('ownerId', this.bankModel.ownerId);
            this.ownerservice.addbanks(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Bank Details Added!', 'Bank Details Added Successfully', 'success');

              _this31.router.navigate(['/bankdetails']);
            }, function (error) {});
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addBankForm.controls;
        }
      }]);

      return AddBanksComponent;
    }();

    AddBanksComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"]
      }];
    };

    AddBanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-banks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-banks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-banks.component.css */
      "./src/app/ownerpannel/bankdetails/add-banks/add-banks.component.css"))["default"]]
    })], AddBanksComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/bankdetails/bankdetails.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/ownerpannel/bankdetails/bankdetails.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelBankdetailsBankdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvYmFua2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUdsQix5QkFBeUI7QUFDN0I7QUFDQTtDQUNDO0lBQ0csaUJBQWlCO0FBQ3JCLENBQUM7QUFDRDtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9iYW5rZGV0YWlscy9iYW5rZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KVxyXG57LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyODdweDtcclxufX1cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/bankdetails/bankdetails.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/ownerpannel/bankdetails/bankdetails.component.ts ***!
    \******************************************************************/

  /*! exports provided: BankdetailsComponent */

  /***/
  function srcAppOwnerpannelBankdetailsBankdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankdetailsComponent", function () {
      return BankdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/adminpannel/admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var src_app_models_bank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/bank */
    "./src/app/_models/bank.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var BankdetailsComponent = /*#__PURE__*/function () {
      // constructor(private adminpannel:AdminService,private router:Router) { }
      function BankdetailsComponent(adminpannel, fb, router, ownerservice) {
        _classCallCheck(this, BankdetailsComponent);

        this.adminpannel = adminpannel;
        this.fb = fb;
        this.router = router;
        this.ownerservice = ownerservice;
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_5__["Bank"]();
        this.arr = [];
      }

      _createClass(BankdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
          console.log(this.userDetails);
          this.addBankForm = this.fb.group({
            acocuntholderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ifscode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.getbankdetails(); // this.bankModel.ownerId = this.userDetails['userId'];
        }
      }, {
        key: "getbankdetails",
        value: function getbankdetails() {
          var _this32 = this;

          this.adminpannel.getbankdetails(this.userDetails['userId']).subscribe(function (data) {
            console.log(data);
            _this32.results = data;

            _this32.arr.push(_this32.results);

            console.log(_this32.arr.length);
            _this32.bankModel.accountNumber = _this32.results['accountNumber'];
            _this32.bankModel.acocuntholderName = _this32.results['accountHolderName'];
            _this32.bankModel.ifscode = _this32.results['ifscCode'];
            _this32.bankModel.bankName = _this32.results['bankName']; // this.dataSource.data = this.results;
          }, function (error) {});
        }
      }, {
        key: "edit",
        value: function edit() {
          sessionStorage.setItem('bankDetails', JSON.stringify(this.results));
          this.router.navigate(['/edit-bankdetails']);
        }
      }]);

      return BankdetailsComponent;
    }();

    BankdetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    BankdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bankdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bankdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/bankdetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bankdetails.component.css */
      "./src/app/ownerpannel/bankdetails/bankdetails.component.css"))["default"]]
    })], BankdetailsComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelBankdetailsEditBankdetailsEditBankdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvZWRpdC1iYW5rZGV0YWlscy9lZGl0LWJhbmtkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCO0FBQ0E7Q0FDQztJQUNHLGlCQUFpQjtBQUNyQixDQUFDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvYmFua2RldGFpbHMvZWRpdC1iYW5rZGV0YWlscy9lZGl0LWJhbmtkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXHJcbnsuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG59fVxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: EditBankdetailsComponent */

  /***/
  function srcAppOwnerpannelBankdetailsEditBankdetailsEditBankdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBankdetailsComponent", function () {
      return EditBankdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/bank */
    "./src/app/_models/bank.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var EditBankdetailsComponent = /*#__PURE__*/function () {
      function EditBankdetailsComponent(fb, router, ownerservice) {
        _classCallCheck(this, EditBankdetailsComponent);

        this.fb = fb;
        this.router = router;
        this.ownerservice = ownerservice;
        this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
        this.submitted = false;
        this.formData = new FormData();
        this.bankDetails = [];
      }

      _createClass(EditBankdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bankModel = new src_app_models_bank__WEBPACK_IMPORTED_MODULE_4__["Bank"]();
          this.addBankForm = this.fb.group({
            acocuntholderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ifscode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.bankDetails = JSON.parse(sessionStorage.getItem('bankDetails'));
          this.bankModel.accountNumber = this.bankDetails['accountNumber'];
          this.bankModel.acocuntholderName = this.bankDetails['accountHolderName'];
          this.bankModel.ifscode = this.bankDetails['ifscCode'];
          this.bankModel.bankName = this.bankDetails['bankName'];
          this.bankModel.bankId = this.bankDetails['id'];
          this.bankModel.ownerId = this.bankDetails['ownerId'];
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this33 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.addBankForm.invalid) {
            return;
          } else {
            this.ownerservice.updateBank(this.bankModel.bankId, this.bankModel.ownerId, this.bankModel.acocuntholderName, this.bankModel.accountNumber, this.bankModel.ifscode, this.bankModel.bankName).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Bank Details Update!', 'Bank Details Updated Successfully', 'success');

              _this33.router.navigate(['/bankdetails']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unable to Update Bank Details !', 'Bank Details Updated UnSuccessfull', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addBankForm.controls;
        }
      }]);

      return EditBankdetailsComponent;
    }();

    EditBankdetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"]
      }];
    };

    EditBankdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-bankdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-bankdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-bankdetails.component.css */
      "./src/app/ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component.css"))["default"]]
    })], EditBankdetailsComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversAddDriversAddDriversComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n@media (min-width: 1200px)\r\n{.container {\r\n    max-width: 1287px;\r\n}}\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9hZGQtZHJpdmVycy9hZGQtZHJpdmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0M7SUFDRyxpQkFBaUI7QUFDckIsQ0FBQztBQUNEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvYWRkLWRyaXZlcnMvYWRkLWRyaXZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuey5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbn19XHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AddDriversComponent */

  /***/
  function srcAppOwnerpannelDriversAddDriversAddDriversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDriversComponent", function () {
      return AddDriversComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/driver */
    "./src/app/_models/driver.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddDriversComponent = /*#__PURE__*/function () {
      function AddDriversComponent(ownerservice, toaster, fb, router) {
        _classCallCheck(this, AddDriversComponent);

        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AddDriversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__["Driver"]();
          this.driverForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pancard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
        }
      }, {
        key: "addliscensefrnt",
        value: function addliscensefrnt(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "addliscenseback",
        value: function addliscenseback(event) {
          this.lisence2 = event.target.files;
          this.lisenceback = this.lisence2.item(0);
        }
      }, {
        key: "addprofilepic",
        value: function addprofilepic(event) {
          this.propicfile = event.target.files;
          this.propic = this.propicfile.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this34 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.driverForm.invalid) {
            return;
          } else {
            this.formData.append('name', this.driverModel.name);
            this.formData.append('ownerId', this.ownerId);
            this.formData.append('number', this.driverModel.number);
            this.formData.append('addresss', this.driverModel.address);
            this.formData.append('panCardNO', this.driverModel.pancard); // this.formData.append('proPic', this.propic);
            // this.formData.append('licenceFront', this.lisencefrnt);
            // this.formData.append('licenceBack', this.lisenceback);

            this.ownerservice.addnewdriver(this.formData).subscribe(function (data) {
              // this.toaster.success('Driver Added Successfully')
              localStorage.setItem("driverDetails", JSON.stringify(data));
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Driver Added!', 'Driver Added Successfully', 'success');

              _this34.router.navigate(['/driverlicsencefrnt']);
            }, function (error) {
              // alert('error')
              _this34.error = error.error['message']; // this.toaster.error(this.error);

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Add driver!', _this34.error, 'error');
              _this34.formData["delete"];
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.driverForm.controls;
        }
      }]);

      return AddDriversComponent;
    }();

    AddDriversComponent.ctorParameters = function () {
      return [{
        type: _owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddDriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-drivers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-drivers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-drivers.component.css */
      "./src/app/ownerpannel/drivers/add-drivers/add-drivers.component.css"))["default"]]
    })], AddDriversComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.css":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.css ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversAddDriversAdddriverLicscenceAdddriverLicscenceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9hZGQtZHJpdmVycy9hZGRkcml2ZXItbGljc2NlbmNlL2FkZGRyaXZlci1saWNzY2VuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUdsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9kcml2ZXJzL2FkZC1kcml2ZXJzL2FkZGRyaXZlci1saWNzY2VuY2UvYWRkZHJpdmVyLWxpY3NjZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: AdddriverLicscenceComponent */

  /***/
  function srcAppOwnerpannelDriversAddDriversAdddriverLicscenceAdddriverLicscenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddriverLicscenceComponent", function () {
      return AdddriverLicscenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/driver */
    "./src/app/_models/driver.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/ownerpannel/owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var AdddriverLicscenceComponent = /*#__PURE__*/function () {
      function AdddriverLicscenceComponent(ownerservice, toaster, fb, router) {
        _classCallCheck(this, AdddriverLicscenceComponent);

        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AdddriverLicscenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__["Driver"]();
          this.driverForm = this.fb.group({
            liscencefrnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.driverId = JSON.parse(localStorage.getItem('driverDetails'));
        }
      }, {
        key: "addliscensefrnt",
        value: function addliscensefrnt(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this35 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.driverForm.invalid) {
            return;
          } else {
            this.formData.append('image', this.lisencefrnt);
            this.formData.append('type', "1");
            this.formData.append('id', this.driverId['id']);
            this.ownerservice.adddriverimnage(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Driver License Added!', 'Driver License Added Successfully', 'success');

              _this35.router.navigate(['/driverlicsenceback']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Driver License Added Error!', 'Driver License Added Error Successfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.driverForm.controls;
        }
      }]);

      return AdddriverLicscenceComponent;
    }();

    AdddriverLicscenceComponent.ctorParameters = function () {
      return [{
        type: src_app_ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_7__["OwnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdddriverLicscenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adddriver-licscence',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adddriver-licscence.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adddriver-licscence.component.css */
      "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component.css"))["default"]]
    })], AdddriverLicscenceComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.css":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.css ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversAddDriversAdddriverLicscencebackAdddriverLicscencebackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9hZGQtZHJpdmVycy9hZGRkcml2ZXItbGljc2NlbmNlYmFjay9hZGRkcml2ZXItbGljc2NlbmNlYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvYWRkLWRyaXZlcnMvYWRkZHJpdmVyLWxpY3NjZW5jZWJhY2svYWRkZHJpdmVyLWxpY3NjZW5jZWJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTI4N3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubS10LTIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUIyO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: AdddriverLicscencebackComponent */

  /***/
  function srcAppOwnerpannelDriversAddDriversAdddriverLicscencebackAdddriverLicscencebackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddriverLicscencebackComponent", function () {
      return AdddriverLicscencebackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/driver */
    "./src/app/_models/driver.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/ownerpannel/owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var AdddriverLicscencebackComponent = /*#__PURE__*/function () {
      function AdddriverLicscencebackComponent(ownerservice, toaster, fb, router) {
        _classCallCheck(this, AdddriverLicscencebackComponent);

        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AdddriverLicscencebackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__["Driver"]();
          this.driverForm = this.fb.group({
            // liscencefrnt: ['', Validators.required],
            liscenceback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.driverId = JSON.parse(localStorage.getItem('driverDetails'));
        }
      }, {
        key: "addliscenseback",
        value: function addliscenseback(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this36 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.driverForm.invalid) {
            return;
          } else {
            this.formData.append('image', this.lisencefrnt);
            this.formData.append('type', "2");
            this.formData.append('id', this.driverId['id']);
            this.ownerservice.adddriverimnage(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Driver License Added!', 'Driver License Added Successfully', 'success');

              _this36.router.navigate(['/profilepicdriver']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Driver License Added Error!', 'Driver License Added Error Successfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.driverForm.controls;
        }
      }]);

      return AdddriverLicscencebackComponent;
    }();

    AdddriverLicscencebackComponent.ctorParameters = function () {
      return [{
        type: src_app_ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_7__["OwnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdddriverLicscencebackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adddriver-licscenceback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adddriver-licscenceback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adddriver-licscenceback.component.css */
      "./src/app/ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component.css"))["default"]]
    })], AdddriverLicscencebackComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.css":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.css ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversAddDriversAdddriverProfilepicAdddriverProfilepicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvYWRkLWRyaXZlcnMvYWRkZHJpdmVyLXByb2ZpbGVwaWMvYWRkZHJpdmVyLXByb2ZpbGVwaWMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdddriverProfilepicComponent */

  /***/
  function srcAppOwnerpannelDriversAddDriversAdddriverProfilepicAdddriverProfilepicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddriverProfilepicComponent", function () {
      return AdddriverProfilepicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/driver */
    "./src/app/_models/driver.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/ownerpannel/owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var AdddriverProfilepicComponent = /*#__PURE__*/function () {
      function AdddriverProfilepicComponent(ownerservice, toaster, fb, router) {
        _classCallCheck(this, AdddriverProfilepicComponent);

        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(AdddriverProfilepicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_2__["Driver"]();
          this.driverForm = this.fb.group({
            // liscencefrnt: ['', Validators.required],
            // liscenceback:['',Validators.required],
            propic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.driverId = JSON.parse(localStorage.getItem('driverDetails'));
        }
      }, {
        key: "addliscenseback",
        value: function addliscenseback(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this37 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.driverForm.invalid) {
            return;
          } else {
            this.formData.append('image', this.lisencefrnt);
            this.formData.append('type', "2");
            this.formData.append('id', this.driverId['id']);
            this.ownerservice.adddriverimnage(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Driver Profile Pic Added!', 'Driver Profile Pic Added Successfully', 'success');

              _this37.router.navigate(['/drivers']);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Driver Profile Pic Added Error!', 'Driver Profile Pic Added Error Successfully', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.driverForm.controls;
        }
      }]);

      return AdddriverProfilepicComponent;
    }();

    AdddriverProfilepicComponent.ctorParameters = function () {
      return [{
        type: src_app_ownerpannel_owner_service__WEBPACK_IMPORTED_MODULE_7__["OwnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdddriverProfilepicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adddriver-profilepic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adddriver-profilepic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adddriver-profilepic.component.css */
      "./src/app/ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component.css"))["default"]]
    })], AdddriverProfilepicComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/drivers.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/ownerpannel/drivers/drivers.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversDriversComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    /* margin-top: 100px; */\r\n}\r\nimg {\r\n    max-width: 87%;\r\n    height: auto;\r\n}\r\n::ng-deep .mat-card{\r\n    margin-top: 5px !important;\r\n}\r\nmat-header-row{\r\n\tborder-bottom: 2px solid #ffd000;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    border-bottom: 3px solid #ffbd01;\r\n  }\r\nli {\r\n    float: left;\r\n  }\r\nli a {\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n.avatar {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0NBQ0MsZ0NBQWdDO0FBQ2pDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztFQUNsQztBQUVBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCO0FBR0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9kcml2ZXJzL2RyaXZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cclxufVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA4NyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1oZWFkZXItcm93e1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZkMDAwO1xyXG59XHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmYmQwMTtcclxuICB9XHJcbiAgXHJcbiAgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLmF2YXRhciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/drivers.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ownerpannel/drivers/drivers.component.ts ***!
    \**********************************************************/

  /*! exports provided: DriversComponent */

  /***/
  function srcAppOwnerpannelDriversDriversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriversComponent", function () {
      return DriversComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./viewliscence/viewliscence.component */
    "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts");
    /* harmony import */


    var _viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./viewlicsenceback/viewlicsenceback.component */
    "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var DriversComponent = /*#__PURE__*/function () {
      function DriversComponent(router, dialog, ownerservice, domsanitizer) {
        _classCallCheck(this, DriversComponent);

        this.router = router;
        this.dialog = dialog;
        this.ownerservice = ownerservice;
        this.domsanitizer = domsanitizer;
        this.driverslist = [];
        this.displayedColumns = ['name', 'phonenumber', 'pan', 'licensefrnt', 'licenseback', 'edit'];
        this.limit = 15;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [5, 10];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
      }

      _createClass(DriversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.apUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].BASEURL;
          this.getallsdriver();
          this.contents = undefined;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
          console.log(this.dataSource.filteredData.length);

          if (this.dataSource.filteredData.length == 0) {
            this.message = 'No data found';
          }
        }
      }, {
        key: "getallsdriver",
        value: function getallsdriver() {
          var _this38 = this;

          this.ownerservice.getalldrivers(this.ownerId).subscribe(function (data) {
            console.log(data);
            _this38.driverslist = data;
            _this38.dataSource.data = _this38.driverslist;
          }, function (error) {});
        }
      }, {
        key: "getlicsence",
        value: function getlicsence(id) {
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
          var dialogRef = this.dialog.open(_viewliscence_viewliscence_component__WEBPACK_IMPORTED_MODULE_7__["ViewliscenceComponent"], {
            width: '400px',
            data: id
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result closed");
          });
        }
      }, {
        key: "getlicsenceback",
        value: function getlicsenceback(id) {
          var dialogRef = this.dialog.open(_viewlicsenceback_viewlicsenceback_component__WEBPACK_IMPORTED_MODULE_8__["ViewlicsencebackComponent"], {
            width: '400px',
            data: id
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result closed");
          });
        } // this.router.navigate(['/view-licsense',id]);
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

      }, {
        key: "edit",
        value: function edit(e) {
          console.log(e.id);
          sessionStorage.setItem("driverId", e.id);
          this.router.navigate(['/editdrivers']);
        }
      }]);

      return DriversComponent;
    }();

    DriversComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], {
      "static": false
    })], DriversComponent.prototype, "paginator", void 0);
    DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drivers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drivers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/drivers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drivers.component.css */
      "./src/app/ownerpannel/drivers/drivers.component.css"))["default"]]
    })], DriversComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversEditDriversEditDriversComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n::ng-deep .mat-expansion-panel {\r\n    margin-bottom: 20px !important;\r\n    background: #ffcb67;\r\n}\r\n\r\n::ng-deep .mat-panel-title {\r\n    font-weight: bold !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy9lZGl0LWRyaXZlcnMvZWRpdC1kcml2ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvZWRpdC1kcml2ZXJzL2VkaXQtZHJpdmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjg3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tLXQtMjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDg1QjI7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmNiNjc7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXBhbmVsLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.ts ***!
    \****************************************************************************/

  /*! exports provided: EditDriversComponent */

  /***/
  function srcAppOwnerpannelDriversEditDriversEditDriversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDriversComponent", function () {
      return EditDriversComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_models_driver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/driver */
    "./src/app/_models/driver.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var EditDriversComponent = /*#__PURE__*/function () {
      function EditDriversComponent(ownerservice, toaster, fb, router) {
        _classCallCheck(this, EditDriversComponent);

        this.ownerservice = ownerservice;
        this.toaster = toaster;
        this.fb = fb;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(EditDriversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.driverModel = new src_app_models_driver__WEBPACK_IMPORTED_MODULE_5__["Driver"]();
          this.driverForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pancard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.driverId = sessionStorage.getItem('driverId');
          this.getdriverDetailByDriverId();
        }
      }, {
        key: "getdriverDetailByDriverId",
        value: function getdriverDetailByDriverId() {
          var _this39 = this;

          this.ownerservice.getDriverDetailsBydriverId(this.driverId).subscribe(function (data) {
            _this39.results = data;
            _this39.driverModel.name = _this39.results['name'];
            _this39.driverModel.address = _this39.results['addresss'];
            _this39.driverModel.number = _this39.results['number'];
            _this39.driverModel.pancard = _this39.results['panCardNO'];
            console.log(data);
          }, function (error) {});
        }
      }, {
        key: "addliscensefrnt",
        value: function addliscensefrnt(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "addliscenseback",
        value: function addliscenseback(event) {
          this.lisence2 = event.target.files;
          this.lisenceback = this.lisence2.item(0);
        }
      }, {
        key: "addprofilepic",
        value: function addprofilepic(event) {
          this.propicfile = event.target.files;
          this.propic = this.propicfile.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this40 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.driverForm.invalid) {
            return;
          } else {
            this.formData.append('name', this.driverModel.name);
            this.formData.append('ownerId', this.ownerId);
            this.formData.append('number', this.driverModel.number);
            this.formData.append('addresss', this.driverModel.address);
            this.formData.append('panCardNO', this.driverModel.pancard); // this.formData.append('proPic', this.propic);
            // this.formData.append('licenceFront', this.lisencefrnt);
            // this.formData.append('licenceBack', this.lisenceback);

            this.formData.append('id', this.driverId);
            this.ownerservice.editdrivers(this.formData).subscribe(function (data) {
              _this40.toaster.success('Driver updated Successfully'); // this.router.navigate(['/drivers'])

            }, function (error) {
              // alert('error')
              _this40.error = error.error['message'];

              _this40.toaster.error(_this40.error);

              _this40.formData["delete"];
            });
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this41 = this;

          this.formData.append('image', this.lisencefrnt);
          this.formData.append('type', "1");
          this.formData.append('id', this.driverId);
          this.ownerservice.adddriverimnage(this.formData).subscribe(function (data) {
            _this41.formData = new FormData();

            _this41.toaster.success("Driver License Front Updated");
          }, function (error) {
            _this41.toaster.success("Unable to Driver License Front");
          });
        }
      }, {
        key: "updateLback",
        value: function updateLback() {
          var _this42 = this;

          this.formData.append('image', this.lisenceback);
          this.formData.append('type', "2");
          this.formData.append('id', this.driverId);
          this.ownerservice.adddriverimnage(this.formData).subscribe(function (data) {
            _this42.formData = new FormData();

            _this42.toaster.success("Driver License Back Updated");
          }, function (error) {
            _this42.toaster.success("Unable to Driver License Back");
          });
        }
      }, {
        key: "updatepPic",
        value: function updatepPic() {
          var _this43 = this;

          this.formData.append('image', this.propic);
          this.formData.append('type', "3");
          this.formData.append('id', this.driverId);
          this.ownerservice.adddriverimnage(this.formData).subscribe(function (data) {
            _this43.formData = new FormData();

            _this43.toaster.success("Profile Picture Updated");
          }, function (error) {
            _this43.toaster.success("Unable to update Profile Picture");
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.driverForm.controls;
        }
      }]);

      return EditDriversComponent;
    }();

    EditDriversComponent.ctorParameters = function () {
      return [{
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditDriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-drivers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-drivers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-drivers.component.css */
      "./src/app/ownerpannel/drivers/edit-drivers/edit-drivers.component.css"))["default"]]
    })], EditDriversComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversViewlicsencebackViewlicsencebackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy92aWV3bGljc2VuY2ViYWNrL3ZpZXdsaWNzZW5jZWJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2RyaXZlcnMvdmlld2xpY3NlbmNlYmFjay92aWV3bGljc2VuY2ViYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ViewlicsencebackComponent */

  /***/
  function srcAppOwnerpannelDriversViewlicsencebackViewlicsencebackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewlicsencebackComponent", function () {
      return ViewlicsencebackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var ViewlicsencebackComponent = /*#__PURE__*/function () {
      function ViewlicsencebackComponent(acttivatrouter, http, dialogRef, domsanitizer, data, onerservice) {
        _classCallCheck(this, ViewlicsencebackComponent);

        this.acttivatrouter = acttivatrouter;
        this.http = http;
        this.dialogRef = dialogRef;
        this.domsanitizer = domsanitizer;
        this.data = data;
        this.onerservice = onerservice;
        console.log(data);
        this.id = data;
      }

      _createClass(ViewlicsencebackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getlicsence();
        }
      }, {
        key: "getlicsence",
        value: function getlicsence() {
          var _this44 = this;

          // console.log(id)
          // this.Id = id
          this.onerservice.getlicscenceback(this.id).subscribe(function (data) {
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this44.liscenimag = _this44.domsanitizer.bypassSecurityTrustUrl(unnsafeimage); // window.open(this.liscenimag,"_blank")
          }, function (error) {});
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return ViewlicsencebackComponent;
    }();

    ViewlicsencebackComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerService"]
      }];
    };

    ViewlicsencebackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-viewlicsenceback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewlicsenceback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewlicsenceback.component.css */
      "./src/app/ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], ViewlicsencebackComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelDriversViewliscenceViewliscenceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZHJpdmVycy92aWV3bGlzY2VuY2Uvdmlld2xpc2NlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9kcml2ZXJzL3ZpZXdsaXNjZW5jZS92aWV3bGlzY2VuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ViewliscenceComponent */

  /***/
  function srcAppOwnerpannelDriversViewliscenceViewliscenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewliscenceComponent", function () {
      return ViewliscenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ViewliscenceComponent = /*#__PURE__*/function () {
      function ViewliscenceComponent(acttivatrouter, http, dialogRef, domsanitizer, data, onerservice) {
        _classCallCheck(this, ViewliscenceComponent);

        this.acttivatrouter = acttivatrouter;
        this.http = http;
        this.dialogRef = dialogRef;
        this.domsanitizer = domsanitizer;
        this.data = data;
        this.onerservice = onerservice;
        console.log(data);
        this.id = data;
      }

      _createClass(ViewliscenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getlicsence();
        }
      }, {
        key: "getlicsence",
        value: function getlicsence() {
          var _this45 = this;

          // console.log(id)
          // this.Id = id
          this.onerservice.getliscncefront(this.id).subscribe(function (data) {
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this45.liscenimag = _this45.domsanitizer.bypassSecurityTrustUrl(unnsafeimage); // window.open(this.liscenimag,"_blank")
          }, function (error) {});
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return ViewliscenceComponent;
    }();

    ViewliscenceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"]
      }];
    };

    ViewliscenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewliscence',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewliscence.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewliscence.component.css */
      "./src/app/ownerpannel/drivers/viewliscence/viewliscence.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))], ViewliscenceComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/edit-cars/edit-cars.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/ownerpannel/edit-cars/edit-cars.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelEditCarsEditCarsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\r\n    left: 0;\r\n    margin-left: 8px;\r\n    padding-top: 50px;\r\n    position: relative;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1287px;\r\n    }\r\n}\r\n\r\n.m-t-20 {\r\n    float: left;\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 0px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background: #0085B2;\r\n    min-width: 200px;\r\n    padding: 8px 20px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n::ng-deep .mat-expansion-panel {\r\n    margin-bottom: 20px !important;\r\n    background: #ffcb67;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvZWRpdC1jYXJzL2VkaXQtY2Fycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9lZGl0LWNhcnMvZWRpdC1jYXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyODdweDtcclxuICAgIH1cclxufVxyXG5cclxuLm0tdC0yMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODVCMjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmY2I2NztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/edit-cars/edit-cars.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ownerpannel/edit-cars/edit-cars.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditCarsComponent */

  /***/
  function srcAppOwnerpannelEditCarsEditCarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCarsComponent", function () {
      return EditCarsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var EditCarsComponent = /*#__PURE__*/function () {
      function EditCarsComponent(fb, router, toaster, activaterouter, owenerservice) {
        _classCallCheck(this, EditCarsComponent);

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

      _createClass(EditCarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

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
            // liscencefrnt:['',Validators.required],
            // liscenceback:['',Validators.required],
            // rcbook:['',Validators.required],
            // img1:['',Validators.required],
            // img2 :['',Validators.required],
            driver: [''],
            dRent: [''],
            vRentperHr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vRentperKm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          console.log(this.ownerId);
          this.activaterouter.params.subscribe(function (params) {
            _this46.vehicleId = params.id;
          });
          this.getvehiclesDetailsById();
          this.getalllocality();
          this.getalldrivers();
        }
      }, {
        key: "getvehiclesDetailsById",
        value: function getvehiclesDetailsById() {
          var _this47 = this;

          this.owenerservice.getvehiclesDetailsById(this.vehicleId).subscribe(function (data) {
            _this47.results = data;
            _this47.vehicleModel.vehicleCompany = _this47.results['companyName'];
            _this47.vehicleModel.vehicleType = _this47.results['type'];
            _this47.vehicleModel.vehicleModel = _this47.results['model'];
            _this47.vehicleModel.vehicleRegistration = _this47.results['numberPlate'];
            _this47.vehicleModel.rent = _this47.results['rentPerDay'];
            _this47.vehicleModel.locality = _this47.results['locality'];
            _this47.vehicleModel.vehicleYear = _this47.results['year'];
            _this47.vehicleModel.vRentperHr = _this47.results['rentPerHour'];
            _this47.vehicleModel.vRentperKm = _this47.results['rentPerKM'];

            if (_this47.results['driverId'] != null) {
              _this47.vehicleModel.driver = _this47.results['driverId'];
              _this47.vehicleModel.dRent = _this47.results['driverRentPerKM'];
            } else {
              _this47.vehicleModel.driver = '';
            }
          }, function (error) {});
        }
      }, {
        key: "getalldrivers",
        value: function getalldrivers() {
          var _this48 = this;

          this.owenerservice.getalldrivers(this.ownerId).subscribe(function (data) {
            _this48.driverslist = data;
            console.log(_this48.driverslist);
          }, function (error) {});
        }
      }, {
        key: "getalllocality",
        value: function getalllocality() {
          var _this49 = this;

          this.owenerservice.getalllocality().subscribe(function (data) {
            console.log(data);
            _this49.locations = data;
          }, function (error) {});
        }
      }, {
        key: "addrcimage",
        value: function addrcimage(event) {
          this.files = event.target.files;
          this.rcproof = this.files.item(0);
        }
      }, {
        key: "addimage1",
        value: function addimage1(event) {
          this.img1 = event.target.files;
          this.image1 = this.img1.item(0);
        }
      }, {
        key: "addimage2",
        value: function addimage2(event) {
          this.img2 = event.target.files;
          this.image2 = this.img2.item(0);
        }
      }, {
        key: "addliscensefrnt",
        value: function addliscensefrnt(event) {
          this.lisence1 = event.target.files;
          this.lisencefrnt = this.lisence1.item(0);
        }
      }, {
        key: "addliscenseback",
        value: function addliscenseback(event) {
          this.lisence2 = event.target.files;
          this.lisenceback = this.lisence2.item(0);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this50 = this;

          this.submitted = true;

          if (this.addVehiclesform.invalid) {
            console.log(this.addVehiclesform.value);
            return;
          } else {
            this.formData.append('type', this.vehicleModel.vehicleType);
            this.formData.append('companyName', this.vehicleModel.vehicleCompany);
            this.formData.append('model', this.vehicleModel.vehicleModel);
            this.formData.append('year', this.vehicleModel.vehicleYear);
            this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
            this.formData.append('locality', this.vehicleModel.locality);
            this.formData.append('rentPerDay', this.vehicleModel.rent);
            this.formData.append('ownerId', this.ownerId); // this.formData.append('licenceFront', this.lisencefrnt);
            // this.formData.append('licenceBack', this.lisenceback);
            // this.formData.append('rcImage', this.rcproof);
            // this.formData.append('image1', this.image1);
            // this.formData.append('image2', this.image2);

            this.formData.append('driverId', this.vehicleModel.driver);
            this.formData.append('id', this.vehicleId);
            this.formData.append('driverRentPerKM', this.vehicleModel.dRent);
            this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
            this.formData.append('rentPerHour', this.vehicleModel.vRentperHr);
            this.owenerservice.editvehicle(this.formData).subscribe(function (data) {
              // this.toaster.success('Vehicle Updated Successfully');
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Vehicle Updated!', 'Vehicle Updated Successfully', 'success'); // this.router.navigate(['/vehicles'])
            }, function (error) {
              _this50.error = error.error['message'];
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Update Vehicle!', _this50.error, 'error');
              _this50.formData["delete"];
            });
          }
        }
      }, {
        key: "updateimg1",
        value: function updateimg1() {
          var _this51 = this;

          this.formData.append('image', this.image1);
          this.formData.append('type', "1");
          this.formData.append('id', this.vehicleId);
          this.owenerservice.addimages(this.formData).subscribe(function (data) {
            _this51.formData = new FormData();
            _this51.files = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Image 1 Added!', 'Image 1 Added Successfully', 'success');
          }, function (error) {
            _this51.formData["delete"];
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add image 1!', 'Unable to add image 1 Successfully', 'error');
          });
        }
      }, {
        key: "updateimg2",
        value: function updateimg2() {
          var _this52 = this;

          this.formData.append('image', this.image2);
          this.formData.append('type', "2");
          this.formData.append('id', this.vehicleId);
          this.owenerservice.addimages(this.formData).subscribe(function (data) {
            _this52.formData = new FormData();
            _this52.files = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Image 2 Added!', 'Image 2 Added Successfully', 'success');
          }, function (error) {
            _this52.formData["delete"];
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add image 2!', 'Unable to add image 2 Successfully', 'error');
          });
        }
      }, {
        key: "updatelicfrnt",
        value: function updatelicfrnt() {
          var _this53 = this;

          this.formData.append('image', this.lisencefrnt);
          this.formData.append('type', "3");
          this.formData.append('id', this.vehicleId);
          this.owenerservice.addimages(this.formData).subscribe(function (data) {
            _this53.formData = new FormData();
            _this53.files = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('License Added!', 'License Added Successfully', 'success');
          }, function (error) {
            _this53.formData["delete"];
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add License front!', 'Unable to add License front Successfully', 'error');
          });
        }
      }, {
        key: "updatelicback",
        value: function updatelicback() {
          var _this54 = this;

          this.formData.append('image', this.lisenceback);
          this.formData.append('type', "4");
          this.formData.append('id', this.vehicleId);
          this.owenerservice.addimages(this.formData).subscribe(function (data) {
            _this54.formData = new FormData();
            _this54.files = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('License Back Added!', 'License Back Added Successfully', 'success');
          }, function (error) {
            _this54.formData = new FormData();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add License Back!', 'Unable to add License Back Successfully', 'error');
          });
        }
      }, {
        key: "updaterc",
        value: function updaterc() {
          var _this55 = this;

          this.formData.append('image', this.rcproof);
          this.formData.append('type', "5");
          this.formData.append('id', this.vehicleId);
          this.owenerservice.addimages(this.formData).subscribe(function (data) {
            _this55.formData = new FormData();
            _this55.files = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('RC Added!', 'RC Added Successfully', 'success');
          }, function (error) {
            _this55.formData = new FormData();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to add RC!', 'Unable to add RC Successfully', 'error');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.addVehiclesform.controls;
        }
      }]);

      return EditCarsComponent;
    }();

    EditCarsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"]
      }];
    };

    EditCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-cars',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-cars.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/edit-cars/edit-cars.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-cars.component.css */
      "./src/app/ownerpannel/edit-cars/edit-cars.component.css"))["default"]]
    })], EditCarsComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.css":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.css ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelHandovervehiclesAddVehiclekmHandoverAddVehiclekmHandoverComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL2hhbmRvdmVydmVoaWNsZXMvYWRkLXZlaGljbGVrbS1oYW5kb3Zlci9hZGQtdmVoaWNsZWttLWhhbmRvdmVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: AddVehiclekmHandoverComponent */

  /***/
  function srcAppOwnerpannelHandovervehiclesAddVehiclekmHandoverAddVehiclekmHandoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVehiclekmHandoverComponent", function () {
      return AddVehiclekmHandoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var AddVehiclekmHandoverComponent = /*#__PURE__*/function () {
      function AddVehiclekmHandoverComponent(dialogRef, data) {
        _classCallCheck(this, AddVehiclekmHandoverComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
      }

      _createClass(AddVehiclekmHandoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddVehiclekmHandoverComponent;
    }();

    AddVehiclekmHandoverComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddVehiclekmHandoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-vehiclekm-handover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-vehiclekm-handover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-vehiclekm-handover.component.css */
      "./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddVehiclekmHandoverComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/handovervehicles/handovervehicles.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/ownerpannel/handovervehicles/handovervehicles.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelHandovervehiclesHandovervehiclesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.single-popular-car h3 span.price {\r\n    color: #0e0e0e;\r\n    float: right;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n}\r\n.vehImg{\r\n    /* width: 78%;\r\n    margin: 0 auto;\r\n    height: 200px;\r\n    display: block; */\r\n    display: block;\r\n    /* height: 134px; */\r\n    margin-bottom: 10px;\r\n    margin-left: auto;\r\n    width: 221px !important;\r\n    margin-right: auto;\r\n    height: 183px !important;\r\n}\r\n/* img{\r\n        max-width: -webkit-fill-available;\r\n    } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvaGFuZG92ZXJ2ZWhpY2xlcy9oYW5kb3ZlcnZlaGljbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJOzs7cUJBR2lCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1QjtBQUNJOztPQUVHIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvaGFuZG92ZXJ2ZWhpY2xlcy9oYW5kb3ZlcnZlaGljbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5zaW5nbGUtcG9wdWxhci1jYXIgaDMgc3Bhbi5wcmljZSB7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnZlaEltZ3tcclxuICAgIC8qIHdpZHRoOiA3OCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogaGVpZ2h0OiAxMzRweDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiAyMjFweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxODNweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgICAvKiBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgfSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/handovervehicles/handovervehicles.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ownerpannel/handovervehicles/handovervehicles.component.ts ***!
    \****************************************************************************/

  /*! exports provided: HandovervehiclesComponent */

  /***/
  function srcAppOwnerpannelHandovervehiclesHandovervehiclesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandovervehiclesComponent", function () {
      return HandovervehiclesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var _add_vehiclekm_handover_add_vehiclekm_handover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-vehiclekm-handover/add-vehiclekm-handover.component */
    "./src/app/ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component.ts");

    var HandovervehiclesComponent = /*#__PURE__*/function () {
      function HandovervehiclesComponent(ownerService, dialog) {
        _classCallCheck(this, HandovervehiclesComponent);

        this.ownerService = ownerService;
        this.dialog = dialog;
        this.PENDING = '2';
        this.APPROVED = '1';
        this.REJECTED = '3';
        this.results = [];
        this.formData = new FormData();
        this.message = 'data found';
      }

      _createClass(HandovervehiclesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
          console.log(this.apiurl);
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.getapprovedVehicles();
        }
      }, {
        key: "getapprovedVehicles",
        value: function getapprovedVehicles() {
          var _this56 = this;

          this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.APPROVED).subscribe(function (data) {
            _this56.results = data;

            if (_this56.results.length == 0) {
              _this56.message = 'No Data Found';
            } else {
              _this56.message = 'Data Found';
            }
          }, function (error) {});
        }
      }, {
        key: "openDialog",
        value: function openDialog(s) {
          var dialogRef = this.dialog.open(_add_vehiclekm_handover_add_vehiclekm_handover_component__WEBPACK_IMPORTED_MODULE_5__["AddVehiclekmHandoverComponent"], {
            width: '450px',
            data: s
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }]);

      return HandovervehiclesComponent;
    }();

    HandovervehiclesComponent.ctorParameters = function () {
      return [{
        type: _owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    HandovervehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-handovervehicles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./handovervehicles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/handovervehicles/handovervehicles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./handovervehicles.component.css */
      "./src/app/ownerpannel/handovervehicles/handovervehicles.component.css"))["default"]]
    })], HandovervehiclesComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/owner.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/ownerpannel/owner.service.ts ***!
    \**********************************************/

  /*! exports provided: OwnerService */

  /***/
  function srcAppOwnerpannelOwnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerService", function () {
      return OwnerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var OwnerService = /*#__PURE__*/function () {
      function OwnerService(http) {
        _classCallCheck(this, OwnerService);

        this.http = http;
        this.BASEURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL;
      }

      _createClass(OwnerService, [{
        key: "getalllocality",
        value: function getalllocality() {
          return this.http.get(this.BASEURL + 'admin/listLocality');
        }
      }, {
        key: "getallcars",
        value: function getallcars(id) {
          return this.http.get(this.BASEURL + 'vehicle/list?ownerId=' + id + '&page=0&size=100');
        }
      }, {
        key: "addnewvehicle",
        value: function addnewvehicle(formdata) {
          return this.http.post(this.BASEURL + 'vehicle/add', formdata);
        }
      }, {
        key: "editvehicle",
        value: function editvehicle(formdata) {
          return this.http.put(this.BASEURL + 'vehicle/update', formdata);
        }
      }, {
        key: "getalldrivers",
        value: function getalldrivers(id) {
          return this.http.get(this.BASEURL + 'driver/list?ownerId=' + id + '&type=1&page=0&size=50');
        }
      }, {
        key: "addnewdriver",
        value: function addnewdriver(formdata) {
          return this.http.post(this.BASEURL + 'driver/add', formdata);
        }
      }, {
        key: "editdrivers",
        value: function editdrivers(formdata) {
          return this.http.put(this.BASEURL + 'driver/update', formdata);
        }
      }, {
        key: "getDriverDetailsBydriverId",
        value: function getDriverDetailsBydriverId(id) {
          return this.http.get(this.BASEURL + 'driver/get/' + id);
        }
      }, {
        key: "getliscncefront",
        value: function getliscncefront(id) {
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
          var token = JSON.parse(localStorage.getItem('token'));
          var httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Authorization': 'Bearer' + '' + token
            })
          };
          return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id, {
            headers: httpoptions.headers,
            responseType: 'blob'
          });
        }
      }, {
        key: "getlicscenceback",
        value: function getlicscenceback(id) {
          var token = JSON.parse(localStorage.getItem('token'));
          var httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Authorization': 'Bearer' + '' + token
            })
          };
          return this.http.get(this.BASEURL + 'driver/getLicenceBack/' + id, {
            headers: httpoptions.headers,
            responseType: 'blob'
          });
        }
      }, {
        key: "getvehiclesDetailsById",
        value: function getvehiclesDetailsById(id) {
          return this.http.get(this.BASEURL + 'vehicle/get/' + id);
        }
      }, {
        key: "addbanks",
        value: function addbanks(data) {
          return this.http.post(this.BASEURL + 'owner/addBankDetails', data);
        }
      }, {
        key: "updateBank",
        value: function updateBank(id, ownerId, ahName, aNumber, ifsc, bankName) {
          var req = {};
          return this.http.put(this.BASEURL + 'owner/updateBankDetails?id=' + id + '&ownerId=' + ownerId + '&accountHolderName=' + ahName + '&accountNumber=' + aNumber + '&ifscCode=' + ifsc + '&bankName=' + bankName, req);
        }
      }, {
        key: "getFilterOptionsVehicles",
        value: function getFilterOptionsVehicles(status, id) {
          return this.http.get(this.BASEURL + 'vehicle/listApprovalStatusForOwner?ownerId=' + id + '&status=' + status + '&page=0&size=100');
        }
      }, {
        key: "getallRequestfromUserBsedonStatus",
        value: function getallRequestfromUserBsedonStatus(id, status) {
          return this.http.get(this.BASEURL + 'trip/listForOwnerByApprovalStatus?ownerId=' + id + '&status=' + status);
        }
      }, {
        key: "getapprovalDetaislById",
        value: function getapprovalDetaislById(id) {
          return this.http.get(this.BASEURL + 'trip/getForOwnerByApprovalStatus/' + id);
        }
      }, {
        key: "approveRequest",
        value: function approveRequest(req) {
          return this.http.post(this.BASEURL + 'trip/setApproval', req);
        }
      }, {
        key: "addimages",
        value: function addimages(formdata) {
          return this.http.post(this.BASEURL + 'vehicle/addImages', formdata);
        }
      }, {
        key: "adddriverimnage",
        value: function adddriverimnage(formdata) {
          return this.http.post(this.BASEURL + 'driver/addImages', formdata);
        }
      }, {
        key: "getallvechilcedetails",
        value: function getallvechilcedetails(id) {
          return this.http.get(this.BASEURL + 'trip/listForOwnerByApprovalStatus?ownerId=' + id + '&status=2');
        }
      }]);

      return OwnerService;
    }();

    OwnerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OwnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OwnerService);
    /***/
  },

  /***/
  "./src/app/ownerpannel/ownerpannel.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/ownerpannel/ownerpannel.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelOwnerpannelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n}\r\n.service-item\r\n{\r\n    border-radius: 17px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    padding-top: 143px;\r\n}\r\n.service-item {\r\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);\r\n    color: #222;\r\n    margin-bottom: 30px;\r\n    padding: 17px 25px;\r\n}\r\n.service-item h3{\r\n    color: #000;\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    text-transform: none;\r\n    margin: 20px 0 15px;\r\n}\r\n.section-padding {\r\n    padding: 36px 0;\r\n}\r\n.page-wrapper{\r\n    margin-left: 221px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvb3duZXJwYW5uZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvb3duZXJwYW5uZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW1cclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNDNweDtcclxufVxyXG4uc2VydmljZS1pdGVtIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTdweCAyNXB4O1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW0gaDN7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMzZweCAwO1xyXG59XHJcbi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIxcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/ownerpannel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ownerpannel/ownerpannel.component.ts ***!
    \******************************************************/

  /*! exports provided: OwnerpannelComponent */

  /***/
  function srcAppOwnerpannelOwnerpannelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerpannelComponent", function () {
      return OwnerpannelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OwnerpannelComponent = /*#__PURE__*/function () {
      function OwnerpannelComponent() {
        _classCallCheck(this, OwnerpannelComponent);
      }

      _createClass(OwnerpannelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OwnerpannelComponent;
    }();

    OwnerpannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ownerpannel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ownerpannel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/ownerpannel.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ownerpannel.component.css */
      "./src/app/ownerpannel/ownerpannel.component.css"))["default"]]
    })], OwnerpannelComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/requests/requests.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/ownerpannel/requests/requests.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelRequestsRequestsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.card{\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n/* .table-responsive{\r\n    margin-left: 195px;\r\n    margin-top: 16px;\r\n} */\r\n.page-wrapper > .content {\r\n    padding: 59px;\r\n}\r\n.form-control {\r\n\tborder-radius: 0;\r\n\tbox-shadow: none;\r\n\tpadding: 0.469rem 0.75rem;\r\n\tborder-color: #eaeaea;\r\n\tfont-size: 14px;\r\n\tmin-height: 40px;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #009efb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\na {\r\n\tcolor: #009ce7;\r\n}\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\ninput,\r\nbutton {\r\n\toutline: none;\r\n}\r\ninput[type=\"file\"] {\r\n\theight: auto;\r\n\tpadding: 6px 0.75rem;\r\n}\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n.form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.display-block {\r\n\tdisplay: block;\r\n}\r\n.btn.rounded {\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.btn.focus,\r\n.btn:focus {\r\n\tbox-shadow: inherit !important;\r\n}\r\n.list-group-item {\r\n\tborder: 1px solid #eaeaea;\r\n}\r\n.table {\r\n\tcolor: #000;\r\n\tborder: 1px solid #f0f0f0;\r\n}\r\n.table.table-white {\r\n\tbackground-color: #fff;\r\n}\r\n.table > tbody > tr > td {\r\n\tfont-weight: 300;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n + 1) {\r\n\tbackground-color: #f6f6f6;\r\n}\r\ntable.table td .avatar {\r\n\tmargin: 0 5px 0 0;\r\n}\r\ntable.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #757575;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #009efb;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n/*-----------------\r\n\t3. Helper Class\r\n-----------------------*/\r\n.m-r-5 {\r\n\tmargin-right: 5px !important;\r\n}\r\n.m-r-10 {\r\n\tmargin-right: 10px !important;\r\n}\r\n.m-l-5 {\r\n\tmargin-left: 5px !important;\r\n}\r\n.m-t-0 {\r\n\tmargin-top: 0 !important;\r\n}\r\n.m-t-10 {\r\n\tmargin-top: 10px !important;\r\n}\r\n.m-t-20 {\r\n\tmargin-top: 20px !important;\r\n}\r\n.m-t-30 {\r\n\tmargin-top: 30px !important;\r\n}\r\n.m-t-50 {\r\n\tmargin-top: 50px !important;\r\n}\r\n.m-b-10 {\r\n\tmargin-bottom: 10px !important;\r\n}\r\n.m-b-20 {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n.m-b-30 {\r\n\tmargin-bottom: 30px !important;\r\n}\r\n.w-40 {\r\n\twidth: 40px;\r\n}\r\n.block {\r\n\tdisplay: block !important;\r\n}\r\n.text-ellipsis {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n.text-muted-light {\r\n\tcolor: #aaa;\r\n}\r\n.card-box {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-title {\r\n\tcolor: #333;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-title {\r\n\tcolor: #565656;\r\n\tfont-size: 21px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.page-sub-title {\r\n\tcolor: #565656;\r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n.badge-success-border {\r\n\tborder: 1px solid #55ce63;\r\n\tcolor: #55ce63;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-danger-border {\r\n\tborder: 1px solid #f62d51;\r\n\tcolor: #f62d51;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-warning-border {\r\n\tborder: 1px solid #ffbc34;\r\n\tcolor: #ffbc34;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.badge-info-border {\r\n\tborder: 1px solid #009efb;\r\n\tcolor: #009efb;\r\n\tbackground-color: #fff;\r\n\tdisplay: inline-block;\r\n\tmin-width: 80px;\r\n}\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n.font-18 {\r\n\tfont-size: 18px;\r\n}\r\n.border-right {\r\n\tborder-right: 1px solid #e7e7e7;\r\n}\r\n.blur {\r\n\t-webkit-filter: blur(3px);\r\n\t-moz-filter: blur(3px);\r\n\t-o-filter: blur(3px);\r\n\t-ms-filter: blur(3px);\r\n\tfilter: blur(3px);\r\n}\r\n.btn {\r\n\tfont-size: 0.875rem;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tcolor: #009efb;\r\n\tpadding: .5rem .75rem !important;\r\n}\r\n.page-item.active .page-link {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n.card .card-header .card-title {\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n\tpadding: 5px 0;\r\n}\r\n.table h5 {\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n.table h5 + p {\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 14px;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0;\r\n}\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}\r\n.card{\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.page-wrapper {\r\n\tleft: 0;\r\n\t/* margin-left: 230px; */\r\n\tpadding-top: 50px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n.page-wrapper > .content {\r\n\tpadding: 30px;\r\n}\r\n.custom-table tr {\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 0 3px #e5e5e5;\r\n}\r\n.table.custom-table > tbody > tr > td,\r\n.table.custom-table > tbody > tr > th,\r\n.table.custom-table > tfoot > tr > td,\r\n.table.custom-table > tfoot > tr > th,\r\n.table.custom-table > thead > tr > td,\r\n.table.custom-table > thead > tr > th {\r\n\tpadding: 10px 8px;\r\n\tvertical-align: middle;\r\n}\r\n/*-----------------\r\n\t35. Lock Screen\r\n-----------------------*/\r\n.lock-user {\r\n\tmargin-bottom: 20px;\r\n}\r\n.lock-user img {\r\n\tmargin-bottom: 15px;\r\n\twidth: 100px;\r\n}\r\n.table.custom-table> tbody > tr > td{\r\n\r\n\tpadding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n.table.custom-table > thead > tr > th {\r\n    padding: 10px 71px;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0FBQ2xDO0FBQ0E7O0NBRUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7O0NBRUMsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBRUE7O3dCQUV3QjtBQUV4QjtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7OztDQU1DLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsT0FBTztDQUNQLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBR2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBQ0E7Ozs7OztDQU1DLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFHQTs7d0JBRXdCO0FBRXhCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi8qIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSAqL1xyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTlweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0cGFkZGluZzogMC40NjlyZW0gMC43NXJlbTtcclxuXHRib3JkZXItY29sb3I6ICNlYWVhZWE7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0b3V0bGluZTogMCBub25lO1xyXG59XHJcbmEge1xyXG5cdGNvbG9yOiAjMDA5Y2U3O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24sXHJcbmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA2cHggMC43NXJlbTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlzcGxheS1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bi5yb3VuZGVkIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLnRhYmxlLnRhYmxlLXdoaXRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYXZhdGFyIHtcclxuXHRtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYSB7XHJcblx0Y29sb3I6ICM3NTc1NzU7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxudGFibGUudGFibGUgdGQgaDIgc3BhbiB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEhlbHBlciBDbGFzc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubS1yLTUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tci0xMCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tbC01IHtcclxuXHRtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0wIHtcclxuXHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC0xMCB7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS10LTMwIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdC01MCB7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItMTAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTIwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tYi0zMCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwIHtcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZWxsaXBzaXMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRleHQtbXV0ZWQtbGlnaHQge1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jYXJkLWJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXRpdGxlIHtcclxuXHRjb2xvcjogIzU2NTY1NjtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWdlLXN1Yi10aXRsZSB7XHJcblx0Y29sb3I6ICM1NjU2NTY7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3MtYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNTVjZTYzO1xyXG5cdGNvbG9yOiAjNTVjZTYzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtZGFuZ2VyLWJvcmRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2MmQ1MTtcclxuXHRjb2xvcjogI2Y2MmQ1MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuLmJhZGdlLXdhcm5pbmctYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZiYzM0O1xyXG5cdGNvbG9yOiAjZmZiYzM0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1pbi13aWR0aDogODBweDtcclxufVxyXG4uYmFkZ2UtaW5mby1ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDllZmI7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9udC0xOCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib3JkZXItcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuLmJsdXIge1xyXG5cdC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0LW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtby1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHQtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0ZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmJ0biB7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3BhbixcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuIHtcclxuXHRjb2xvcjogIzAwOWVmYjtcclxuXHRwYWRkaW5nOiAuNXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnRhYmxlIGg1IHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlIGg1ICsgcCB7XHJcblx0Y29sb3I6ICM5ZTllOWU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnBhZ2UtbGluazpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4uY2FyZHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciB7XHJcblx0bGVmdDogMDtcclxuXHQvKiBtYXJnaW4tbGVmdDogMjMwcHg7ICovXHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tdGFibGUgdHIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogMCAwIDNweCAjZTVlNWU1O1xyXG59XHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Ym9keSA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Zm9vdCA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXHJcbi50YWJsZS5jdXN0b20tdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG5cdHBhZGRpbmc6IDEwcHggOHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MzUuIExvY2sgU2NyZWVuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5sb2NrLXVzZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxvY2stdXNlciBpbWcge1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4udGFibGUuY3VzdG9tLXRhYmxlPiB0Ym9keSA+IHRyID4gdGR7XHJcblxyXG5cdHBhZGRpbmc6IDEwcHggNzFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhYmxlLmN1c3RvbS10YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/requests/requests.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ownerpannel/requests/requests.component.ts ***!
    \************************************************************/

  /*! exports provided: RequestsComponent */

  /***/
  function srcAppOwnerpannelRequestsRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsComponent", function () {
      return RequestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var RequestsComponent = /*#__PURE__*/function () {
      function RequestsComponent(ownerService, router) {
        _classCallCheck(this, RequestsComponent);

        this.ownerService = ownerService;
        this.router = router;
        this.PENDING = '2';
        this.APPROVED = '1';
        this.REJECTED = '3';
        this.results = [];
        this.formData = new FormData();
        this.message = 'data found';
      }

      _createClass(RequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apiurl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
          this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
          this.ownerId = this.ownerdetails['userId'];
          this.getallPendingdata();
        }
      }, {
        key: "tabClick",
        value: function tabClick(event) {
          if (event.index == 0) {
            console.log('PENDING');
            this.getallPendingdata();
          } else if (event.index == 1) {
            console.log('approved');
            this.getallApprovedData();
          } else if (event.index == 2) {
            console.log('rejected');
            this.getallrejectedData();
          }
        }
      }, {
        key: "getallPendingdata",
        value: function getallPendingdata() {
          var _this57 = this;

          this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.PENDING).subscribe(function (data) {
            _this57.results = data;

            if (_this57.results.length == 0) {
              _this57.message = 'No Data Found';
            } else {
              _this57.message = 'Data Found';
            }
          }, function (error) {});
        }
      }, {
        key: "getallApprovedData",
        value: function getallApprovedData() {
          var _this58 = this;

          this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.APPROVED).subscribe(function (data) {
            _this58.results = data;

            if (_this58.results.length == 0) {
              _this58.message = 'No Data Found';
            } else {
              _this58.message = 'Data Found';
            }
          }, function (error) {});
        }
      }, {
        key: "getallrejectedData",
        value: function getallrejectedData() {
          var _this59 = this;

          this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.REJECTED).subscribe(function (data) {
            _this59.results = data;

            if (_this59.results.length == 0) {
              _this59.message = 'No Data Found';
            } else {
              _this59.message = 'Data Found';
            }
          }, function (error) {});
        }
      }, {
        key: "view",
        value: function view(s) {
          this.router.navigate(['view-request', s.id, s.customerName]);
        }
      }, {
        key: "approve",
        value: function approve(s) {
          var _this60 = this;

          console.log(s.id);
          var status = "1";
          this.formData.append("tripId", s.id);
          this.formData.append("status", status);
          this.ownerService.approveRequest(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Request Approved!', 'Request Approved Successfully', 'success');

            _this60.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Unable to approve request!', 'Unable to approve request Successfully', 'error');
          });
        }
      }, {
        key: "reject",
        value: function reject(s) {
          var _this61 = this;

          console.log(s.id);
          var status = "3";
          this.formData.append("tripId", s.id);
          this.formData.append("status", status);
          this.ownerService.approveRequest(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Request Rejected!', 'Request Rejected Successfully', 'success');

            _this61.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Unable to reject request!', 'Unable to reject request Successfully', 'error');
          });
        }
      }]);

      return RequestsComponent;
    }();

    RequestsComponent.ctorParameters = function () {
      return [{
        type: _owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./requests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/requests.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./requests.component.css */
      "./src/app/ownerpannel/requests/requests.component.css"))["default"]]
    })], RequestsComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/requests/view-requests/view-requests.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/ownerpannel/requests/view-requests/view-requests.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelRequestsViewRequestsViewRequestsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    /* margin-top: 100px; */\r\n    margin-top: 106px;\r\n}\r\n.card{\r\n    padding: 20px;\r\n}\r\nh4{\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvcmVxdWVzdHMvdmlldy1yZXF1ZXN0cy92aWV3LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC9yZXF1ZXN0cy92aWV3LXJlcXVlc3RzL3ZpZXctcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwNnB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5oNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/requests/view-requests/view-requests.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ownerpannel/requests/view-requests/view-requests.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ViewRequestsComponent */

  /***/
  function srcAppOwnerpannelRequestsViewRequestsViewRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewRequestsComponent", function () {
      return ViewRequestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var ViewRequestsComponent = /*#__PURE__*/function () {
      function ViewRequestsComponent(activaterouter, router, ownerservice) {
        _classCallCheck(this, ViewRequestsComponent);

        this.activaterouter = activaterouter;
        this.router = router;
        this.ownerservice = ownerservice;
        this.formData = new FormData();
      }

      _createClass(ViewRequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          this.activaterouter.params.subscribe(function (params) {
            console.log(params.id, params.name);
            _this62.customerName = params.name;
            _this62.cId = params.id;
          });
          this.getDetails();
        }
      }, {
        key: "getDetails",
        value: function getDetails() {
          var _this63 = this;

          this.ownerservice.getapprovalDetaislById(this.cId).subscribe(function (data) {
            _this63.results = data;
            _this63.approvalstatus = _this63.results['approvalStatus'];
            _this63.startingLocation = _this63.results['startingLocation'];
            _this63.destinationLocation = _this63.results['destinationLocation'];
            _this63.requestedDate = _this63.results['requestedDate'];
            _this63.companyName = _this63.results.vehicleForm['companyName'];
            _this63.model = _this63.results.vehicleForm['model'];
            _this63.numberPlate = _this63.results.vehicleForm['numberPlate'];
            _this63.rentPerDay = _this63.results.vehicleForm['rentPerDay'];
          }, function (error) {});
        }
      }, {
        key: "close",
        value: function close() {
          this.router.navigate(['/request']);
        }
      }, {
        key: "approve",
        value: function approve() {
          var _this64 = this;

          console.log(this.cId);
          var status = "1";
          this.formData.append("tripId", this.cId);
          this.formData.append("status", status);
          this.ownerservice.approveRequest(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Request Approved!', 'Request Approved Successfully', 'success');

            _this64.router.navigate(['/request']);
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to approve request!', 'Unable to approve request Successfully', 'error');
          });
        }
      }, {
        key: "reject",
        value: function reject() {
          var _this65 = this;

          console.log(this.cId);
          var status = "3";
          this.formData.append("tripId", this.cId);
          this.formData.append("status", status);
          this.ownerservice.approveRequest(this.formData).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Request Rejected!', 'Request Rejected Successfully', 'success');

            _this65.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to reject request!', 'Unable to reject request Successfully', 'error');
          });
        }
      }]);

      return ViewRequestsComponent;
    }();

    ViewRequestsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"]
      }];
    };

    ViewRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-requests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/requests/view-requests/view-requests.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-requests.component.css */
      "./src/app/ownerpannel/requests/view-requests/view-requests.component.css"))["default"]]
    })], ViewRequestsComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelVehiclesOwnerviewvehiclesOwnerviewvehiclesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper{\r\n    margin-left: 236px;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n}\r\n\r\n.detailsheading{\r\n    float: right;\r\n}\r\n\r\n.detailsheading1{\r\n    float: left;\r\n}\r\n\r\nmat-card{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    \r\n}\r\n\r\n.row\r\n{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.card{\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCOztBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMvb3duZXJ2aWV3dmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmRldGFpbHNoZWFkaW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5kZXRhaWxzaGVhZGluZzF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgXHJcbn1cclxuLnJvd1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: OwnerviewvehiclesComponent */

  /***/
  function srcAppOwnerpannelVehiclesOwnerviewvehiclesOwnerviewvehiclesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerviewvehiclesComponent", function () {
      return OwnerviewvehiclesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/adminpannel/admin.service */
    "./src/app/adminpannel/admin.service.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var src_app_models_vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_models/vehicle */
    "./src/app/_models/vehicle.ts");

    var OwnerviewvehiclesComponent = /*#__PURE__*/function () {
      function OwnerviewvehiclesComponent(adminService, domsanitizer, owenerservice) {
        _classCallCheck(this, OwnerviewvehiclesComponent);

        this.adminService = adminService;
        this.domsanitizer = domsanitizer;
        this.owenerservice = owenerservice;
        this.DriverDetailsofCar = [];
      }

      _createClass(OwnerviewvehiclesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "getimage2",
        value: function getimage2() {
          var _this66 = this;

          this.adminService.getimage(this.vId).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this66.vehicleimage2 = _this66.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getvehicleDetailsByid",
        value: function getvehicleDetailsByid() {
          var _this67 = this;

          this.owenerservice.getvehiclesDetailsById(this.vId).subscribe(function (data) {
            _this67.results = data;
            console.log(_this67.results);
            _this67.vehicleModel.vehicleCompany = _this67.results['companyName'];
            _this67.vehicleModel.vehicleType = _this67.results['type'];
            _this67.vehicleModel.vehicleModel = _this67.results['model'];
            _this67.vehicleModel.vehicleRegistration = _this67.results['numberPlate'];
            _this67.vehicleModel.rent = _this67.results['rentPerDay'];
            _this67.rentperkm = _this67.results['rentPerKM'];
            _this67.rentPerHour = _this67.results['rentPerHour'];
            _this67.vehicleModel.locality = _this67.results['locality'];
            _this67.vehicleModel.vehicleYear = _this67.results['year'];

            if (_this67.results['driverId'] != null) {
              _this67.vehicleModel.driver = _this67.results['driverId'];
            } else {
              _this67.vehicleModel.driver = '';
            }
          }, function (error) {});
        }
      }, {
        key: "getlicencefrnt",
        value: function getlicencefrnt() {
          var _this68 = this;

          this.adminService.getlicencefrnt(this.vId).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this68.liscence1 = _this68.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getlicscenceback",
        value: function getlicscenceback() {
          var _this69 = this;

          this.adminService.getlicscenceback(this.vId).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this69.liscence2 = _this69.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getrc",
        value: function getrc() {
          var _this70 = this;

          this.adminService.getrc(this.vId).subscribe(function (data) {
            console.log(data);
            var unnsafeimage = URL.createObjectURL(data);
            console.log(unnsafeimage);
            _this70.rc = _this70.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
          }, function (error) {});
        }
      }, {
        key: "getvehicleDetailsById",
        value: function getvehicleDetailsById() {
          var _this71 = this;

          this.adminService.getVehicleDetailsbyId(this.vId).subscribe(function (data) {
            _this71.DriverDetailsofCar = data['driver'];
            console.log(_this71.DriverDetailsofCar);
            _this71.vehicleModel.dname = _this71.DriverDetailsofCar['name'];
            _this71.vehicleModel.dnumber = _this71.DriverDetailsofCar['number'];
            _this71.vehicleModel.daddreess = _this71.DriverDetailsofCar['addresss'];
            _this71.id = _this71.DriverDetailsofCar['id'];
          }, function (error) {});
        }
      }]);

      return OwnerviewvehiclesComponent;
    }();

    OwnerviewvehiclesComponent.ctorParameters = function () {
      return [{
        type: src_app_adminpannel_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerService"]
      }];
    };

    OwnerviewvehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ownerviewvehicles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ownerviewvehicles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ownerviewvehicles.component.css */
      "./src/app/ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component.css"))["default"]]
    })], OwnerviewvehiclesComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/vehicles/vehicles.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/ownerpannel/vehicles/vehicles.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelVehiclesVehiclesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.single-popular-car h3 span.price {\r\n    color: #0e0e0e;\r\n    float: right;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n}\r\n.vehImg{\r\n    /* width: 78%;\r\n    margin: 0 auto;\r\n    height: 200px;\r\n    display: block; */\r\n    display: block;\r\n    /* height: 134px; */\r\n    margin-bottom: 10px;\r\n    margin-left: auto;\r\n    width: 221px !important;\r\n    margin-right: auto;\r\n    height: 183px !important;\r\n}\r\n/* img{\r\n        max-width: -webkit-fill-available;\r\n    } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7OztxQkFHaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBQ0k7O09BRUciLCJmaWxlIjoic3JjL2FwcC9vd25lcnBhbm5lbC92ZWhpY2xlcy92ZWhpY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uc2luZ2xlLXBvcHVsYXItY2FyIGgzIHNwYW4ucHJpY2Uge1xyXG4gICAgY29sb3I6ICMwZTBlMGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi52ZWhJbWd7XHJcbiAgICAvKiB3aWR0aDogNzglO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIGhlaWdodDogMTM0cHg7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogMjIxcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGhlaWdodDogMTgzcHggIWltcG9ydGFudDtcclxufVxyXG4gICAgLyogaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIH0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/vehicles/vehicles.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ownerpannel/vehicles/vehicles.component.ts ***!
    \************************************************************/

  /*! exports provided: VehiclesComponent */

  /***/
  function srcAppOwnerpannelVehiclesVehiclesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function () {
      return VehiclesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var VehiclesComponent = /*#__PURE__*/function () {
      function VehiclesComponent(ownerserivice, toaster, router) {
        _classCallCheck(this, VehiclesComponent);

        this.ownerserivice = ownerserivice;
        this.toaster = toaster;
        this.router = router;
        this.carList = [];
        this.vstatus = '';
        this.apUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL;
      }

      _createClass(VehiclesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
          this.userId = this.userDetails['userId'];
          this.getallcarsbyowers();
        }
      }, {
        key: "getallcarsbyowers",
        value: function getallcarsbyowers() {
          var _this72 = this;

          this.ownerserivice.getallcars(this.userId).subscribe(function (data) {
            _this72.carList = data;
            _this72.errormessage = "data found";

            if (_this72.carList.length == 0) {
              _this72.errormessage = "No data found";
            }
          }, function (error) {
            _this72.errormessage = "No data found";
          });
        }
      }, {
        key: "edit",
        value: function edit(e) {
          this.router.navigate(['/edit-car', e.id]);
        }
      }, {
        key: "view",
        value: function view(e) {
          sessionStorage.setItem("vID", e.id);
          this.router.navigate(['/ownerviewvehicles']);
        }
      }, {
        key: "delete",
        value: function _delete(e) {
          this.toaster.warning('We are working on this module please be patient');
        }
      }, {
        key: "changeFilter",
        value: function changeFilter(s) {
          var _this73 = this;

          console.log(s);
          this.ownerserivice.getFilterOptionsVehicles(s, this.userId).subscribe(function (data) {
            _this73.carList = data;
            _this73.errormessage = "data found";

            if (_this73.carList.length == 0) {
              _this73.errormessage = "No data found";
            }
          }, function (error) {
            _this73.carList = [];
            _this73.errormessage = "No data found";
          });
        }
      }]);

      return VehiclesComponent;
    }();

    VehiclesComponent.ctorParameters = function () {
      return [{
        type: _owner_service__WEBPACK_IMPORTED_MODULE_2__["OwnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    VehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vehicles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicles/vehicles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicles.component.css */
      "./src/app/ownerpannel/vehicles/vehicles.component.css"))["default"]]
    })], VehiclesComponent);
    /***/
  },

  /***/
  "./src/app/ownerpannel/vehicletracking/vehicletracking.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/ownerpannel/vehicletracking/vehicletracking.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnerpannelVehicletrackingVehicletrackingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    margin-top: 100px;\r\n}\r\n\r\n.card {\r\n    padding: 20px;\r\n}\r\n\r\n#wrapper {\r\n    width: 680px;\r\n    display: table;\r\n    margin: auto;\r\n}\r\n\r\n#wrapper>div {\r\n    display: inline-block;\r\n}\r\n\r\n.circle {\r\n    position: relative;\r\n    padding: 20px;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #eee;\r\n    border: solid 1px #ddd;\r\n    z-index: 999;\r\n}\r\n\r\n.line-top {\r\n    width: 120px;\r\n    height: 60px;\r\n    z-index: -1;\r\n    background: transparent;\r\n    border: none;\r\n    border-top: dashed 2px #0a0a0a;\r\n    padding: 15px 159px;\r\n    /* border-radius: 50%; */\r\n    margin: 25px -113px 3px;\r\n}\r\n\r\n.line-bottom {\r\n    width: 120px;\r\n    height: 60px;\r\n    z-index: -1;\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: dashed 2px orange;\r\n    padding: 40px 40px;\r\n    border-radius: 0 0 50% 50%;\r\n    margin: 0 -65px;\r\n}\r\n\r\nh5 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJwYW5uZWwvdmVoaWNsZXRyYWNraW5nL3ZlaGljbGV0cmFja2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL293bmVycGFubmVsL3ZlaGljbGV0cmFja2luZy92ZWhpY2xldHJhY2tpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiN3cmFwcGVyIHtcclxuICAgIHdpZHRoOiA2ODBweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jd3JhcHBlcj5kaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5saW5lLXRvcCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogZGFzaGVkIDJweCAjMGEwYTBhO1xyXG4gICAgcGFkZGluZzogMTVweCAxNTlweDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cclxuICAgIG1hcmdpbjogMjVweCAtMTEzcHggM3B4O1xyXG59XHJcblxyXG4ubGluZS1ib3R0b20ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAycHggb3JhbmdlO1xyXG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XHJcbiAgICBtYXJnaW46IDAgLTY1cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownerpannel/vehicletracking/vehicletracking.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ownerpannel/vehicletracking/vehicletracking.component.ts ***!
    \**************************************************************************/

  /*! exports provided: VehicletrackingComponent */

  /***/
  function srcAppOwnerpannelVehicletrackingVehicletrackingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicletrackingComponent", function () {
      return VehicletrackingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../owner.service */
    "./src/app/ownerpannel/owner.service.ts");

    var VehicletrackingComponent = /*#__PURE__*/function () {
      function VehicletrackingComponent(Router, ownerservice) {
        _classCallCheck(this, VehicletrackingComponent);

        this.Router = Router;
        this.ownerservice = ownerservice;
        this.result = [];
      }

      _createClass(VehicletrackingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getallvehiclefortracking();
        }
      }, {
        key: "getallvehiclefortracking",
        value: function getallvehiclefortracking() {
          var _this74 = this;

          this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
          this.userId = this.userDetails['userId'];
          this.ownerservice.getallvechilcedetails(this.userId).subscribe(function (data) {
            _this74.result = data;
          }, function (error) {});
        }
      }]);

      return VehicletrackingComponent;
    }();

    VehicletrackingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _owner_service__WEBPACK_IMPORTED_MODULE_3__["OwnerService"]
      }];
    };

    VehicletrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vehicletracking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicletracking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpannel/vehicletracking/vehicletracking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicletracking.component.css */
      "./src/app/ownerpannel/vehicletracking/vehicletracking.component.css"))["default"]]
    })], VehicletrackingComponent);
    /***/
  },

  /***/
  "./src/app/privacyandpolicy/privacyandpolicy.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/privacyandpolicy/privacyandpolicy.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrivacyandpolicyPrivacyandpolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3lhbmRwb2xpY3kvcHJpdmFjeWFuZHBvbGljeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/privacyandpolicy/privacyandpolicy.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/privacyandpolicy/privacyandpolicy.component.ts ***!
    \****************************************************************/

  /*! exports provided: PrivacyandpolicyComponent */

  /***/
  function srcAppPrivacyandpolicyPrivacyandpolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyandpolicyComponent", function () {
      return PrivacyandpolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyandpolicyComponent = /*#__PURE__*/function () {
      function PrivacyandpolicyComponent() {
        _classCallCheck(this, PrivacyandpolicyComponent);
      }

      _createClass(PrivacyandpolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyandpolicyComponent;
    }();

    PrivacyandpolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacyandpolicy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacyandpolicy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/privacyandpolicy/privacyandpolicy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacyandpolicy.component.css */
      "./src/app/privacyandpolicy/privacyandpolicy.component.css"))["default"]]
    })], PrivacyandpolicyComponent);
    /***/
  },

  /***/
  "./src/app/register/password-validation.ts":
  /*!*************************************************!*\
    !*** ./src/app/register/password-validation.ts ***!
    \*************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppRegisterPasswordValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\r\n    width: 126%;\r\n    padding: 94px;\r\n    height: auto;\r\n    margin-top: 10px;\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\nh4 {\r\n    text-align: center;\r\n}\r\n\r\n.page-wrapper {\r\n    /* background: linear-gradient(45deg, #0085B2, #00B3DA);\r\n     */\r\n    height: auto;\r\n    background: transparent linear-gradient(301deg, #00B3DA 0%, #0085B2 100%) 0% 0% no-repeat padding-box;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n    color: #4D4F5C;\r\n    font-size: 12px;\r\n}\r\n\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 370px !important;\r\n}\r\n\r\n@media (max-width: 968px) {\r\n    .card {\r\n        width: 100%;\r\n    }\r\n    ::ng-deep .mat-form-field-infix {\r\n        display: block;\r\n        position: relative;\r\n        flex: auto;\r\n        width: 170px !important;\r\n    }\r\n    .loginbtn {\r\n        width: 100% !important;\r\n    }\r\n    .signupbtn {\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\nbutton:disabled, button[disabled] {\r\n    background-color: #cccccc;\r\n    color: #666666;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.loginbtn {\r\n    border: none;\r\n    padding: 7px;\r\n    width: 160px;\r\n    color: white;\r\n    background: #009cc6;\r\n}\r\n\r\n.signupbtn {\r\n    color: #009cc6;\r\n    background: white;\r\n    border: 1px solid #009cc6;\r\n    padding: 7px;\r\n    width: 160px;\r\n    /* margin-left: 43px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7TUFDRTtJQUNGLFlBQVk7SUFDWixxR0FBcUc7QUFDekc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgd2lkdGg6IDEyNiU7XHJcbiAgICBwYWRkaW5nOiA5NHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4NUIyLCAjMDBCM0RBKTtcclxuICAgICAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDMwMWRlZywgIzAwQjNEQSAwJSwgIzAwODVCMiAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0RDRGNUM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgd2lkdGg6IDM3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2lnbnVwYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQsIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9naW5idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwOWNjNjtcclxufVxyXG5cclxuLnNpZ251cGJ0biB7XHJcbiAgICBjb2xvcjogIzAwOWNjNjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOWNjNjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA0M3B4OyAqL1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_models/register */
    "./src/app/_models/register.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _password_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./password-validation */
    "./src/app/register/password-validation.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, loginservice, toaster, router) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.toaster = toaster;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerModel = new _models_register__WEBPACK_IMPORTED_MODULE_3__["Registeruser"]();
          this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[6-9]\\d{9}')]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            Confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: Object(_password_validation__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'Confirmpassword')
          }); // this.registerModel.email = "@gmail.com";
        }
      }, {
        key: "register",
        value: function register() {
          var _this75 = this;

          // alert('User Registration successfully');
          // console.log(this.registerForm.value);
          // this.registerForm.reset();
          var req = {
            "name": this.registerModel.name,
            "userName": this.registerModel.username,
            "emailId": this.registerModel.email,
            "password": this.registerModel.password,
            // "mobile":this.registerModel.mobNo,
            "username": this.registerModel.mobNo,
            "addres": this.registerModel.address,
            "roleId": 2
          };
          console.log(req);
          this.loginservice.register(req).subscribe(function (data) {
            _this75.toaster.success('Register Successfully');

            _this75.router.navigate(['/login']);
          }, function (error) {
            _this75.error = error.error['message'];
            console.log(_this75.error);

            _this75.toaster.error(_this75.error);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.css":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.css ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterpageformarketingPulicregistrationmarketingPulicregistrationmarketingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycGFnZWZvcm1hcmtldGluZy9wdWxpY3JlZ2lzdHJhdGlvbm1hcmtldGluZy9wdWxpY3JlZ2lzdHJhdGlvbm1hcmtldGluZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PulicregistrationmarketingComponent */

  /***/
  function srcAppRegisterpageformarketingPulicregistrationmarketingPulicregistrationmarketingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PulicregistrationmarketingComponent", function () {
      return PulicregistrationmarketingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PulicregistrationmarketingComponent = /*#__PURE__*/function () {
      function PulicregistrationmarketingComponent() {
        _classCallCheck(this, PulicregistrationmarketingComponent);
      }

      _createClass(PulicregistrationmarketingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PulicregistrationmarketingComponent;
    }();

    PulicregistrationmarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pulicregistrationmarketing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pulicregistrationmarketing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pulicregistrationmarketing.component.css */
      "./src/app/registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component.css"))["default"]]
    })], PulicregistrationmarketingComponent);
    /***/
  },

  /***/
  "./src/app/registerpageformarketing/registerpageformarketing.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/registerpageformarketing/registerpageformarketing.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterpageformarketingRegisterpageformarketingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::-webkit-input-placeholder {\r\n    color: grey;\r\n}\r\n\r\n.book-a-car input,\r\n.book-a-car select {\r\n    border-color: #ffd000;\r\n    border-radius: 0;\r\n    font-size: 14px;\r\n    height: 45px;\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n\r\nli .active {\r\n    color: red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJwYWdlZm9ybWFya2V0aW5nL3JlZ2lzdGVycGFnZWZvcm1hcmtldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycGFnZWZvcm1hcmtldGluZy9yZWdpc3RlcnBhZ2Vmb3JtYXJrZXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmJvb2stYS1jYXIgaW5wdXQsXHJcbi5ib29rLWEtY2FyIHNlbGVjdCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmQwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xyXG59XHJcblxyXG5saSAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/registerpageformarketing/registerpageformarketing.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/registerpageformarketing/registerpageformarketing.component.ts ***!
    \********************************************************************************/

  /*! exports provided: RegisterpageformarketingComponent */

  /***/
  function srcAppRegisterpageformarketingRegisterpageformarketingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterpageformarketingComponent", function () {
      return RegisterpageformarketingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_models/register */
    "./src/app/_models/register.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var RegisterpageformarketingComponent = /*#__PURE__*/function () {
      function RegisterpageformarketingComponent(formBuilder, loginservice, toaster, router) {
        _classCallCheck(this, RegisterpageformarketingComponent);

        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.toaster = toaster;
        this.router = router;
        this.formData = new FormData();
        this.submitted = false;
      }

      _createClass(RegisterpageformarketingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this76 = this;

          this.submitted = true;

          if (this.publicreisterform.invalid) {
            console.log(this.publicreisterform.value);
            return;
          } else {
            console.log(this.registerModel.types);
            this.formData.append('name', this.registerModel.name);
            this.formData.append('emailId', this.registerModel.email);
            this.formData.append('mobile', this.registerModel.mobNo);
            this.formData.append('address', this.registerModel.address);
            this.formData.append('roleId', this.registerModel.types);
            this.formData.append('whatsAppNo', this.registerModel.wnumber);
            this.formData.append('district', this.registerModel.dist);
            this.formData.append("city", this.registerModel.locality);
            this.loginservice.userpublicregister(this.formData).subscribe(function (data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Registration Completed!', 'Registered Successfully', 'success');
              _this76.formData["delete"];
              window.location.reload();
            }, function (error) {
              _this76.formData["delete"];
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Unable to Register!', 'Server is busy at this moment', 'error');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.publicreisterform.controls;
        }
      }]);

      return RegisterpageformarketingComponent;
    }();

    RegisterpageformarketingComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    RegisterpageformarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registerpageformarketing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registerpageformarketing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registerpageformarketing/registerpageformarketing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registerpageformarketing.component.css */
      "./src/app/registerpageformarketing/registerpageformarketing.component.css"))["default"]]
    })], RegisterpageformarketingComponent);
    /***/
  },

  /***/
  "./src/app/services/services.component.css":
  /*!*************************************************!*\
    !*** ./src/app/services/services.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/services/services.component.css"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/termsandconditons/termsandconditons.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/termsandconditons/termsandconditons.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsandconditonsTermsandconditonsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zYW5kY29uZGl0b25zL3Rlcm1zYW5kY29uZGl0b25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/termsandconditons/termsandconditons.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/termsandconditons/termsandconditons.component.ts ***!
    \******************************************************************/

  /*! exports provided: TermsandconditonsComponent */

  /***/
  function srcAppTermsandconditonsTermsandconditonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsandconditonsComponent", function () {
      return TermsandconditonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsandconditonsComponent = /*#__PURE__*/function () {
      function TermsandconditonsComponent() {
        _classCallCheck(this, TermsandconditonsComponent);
      }

      _createClass(TermsandconditonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsandconditonsComponent;
    }();

    TermsandconditonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-termsandconditons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./termsandconditons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/termsandconditons/termsandconditons.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./termsandconditons.component.css */
      "./src/app/termsandconditons/termsandconditons.component.css"))["default"]]
    })], TermsandconditonsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      BASEURL: "https://cmgaadi.com/server/" // BASEURL : "http://localhost:8080/server/"

    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Documents\CMGAADII\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map