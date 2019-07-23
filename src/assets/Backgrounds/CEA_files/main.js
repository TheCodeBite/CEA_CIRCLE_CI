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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <div class=\"mask rgba-black-light align-items-left\">\n    <div class=\"container\">\n      <div class=\"row\"> \n              <!--Grid column-->\n            <div class=\"col-md-12 mb-4 white-text text-left\">\n              <h1 class=\"h1-reponsive text-white text-uppercase mb-0 pt-md-5 pt-5\" style=\"letter-spacing: 8px; font-family: 'Signika', sans-serif;\"><strong class=\"d-inline-flex\" style=\"background-color: rgba(211, 17, 137, 0.356)\"> Universidad CEA</strong></h1>\n              <hr class=\"hr-light my-3\">\n              <div class=\"mb-4\">\n                  <h5 class=\"text-uppercase mb-4 text-white\" style=\"letter-spacing: 3px;\"><strong class=\"d-inline-flex\" style=\"background-color: rgba(211, 17, 137, 0.356)\">El Cámino al éxito</strong></h5>\n              </div>\n              <div style=\"margin-top: 4em;\">\n                  <a class=\"btn btn-success\" style=\"color: white; font-size: 18px; font-family: 'Roboto', sans-serif;\" (click)=\"registroAlumno()\" >Registrar Alumno</a>\n                  <a class=\"btn btn-success botones\" (click)=\"registroMaestro()\" >Registro Maestro</a>\n                  <a class=\"btn btn-success botones\" (click)=\"calificaciones()\" >Calificaciones</a>\n                  <a class=\"btn btn-success botones\" (click)=\"controlPagos()\">Control de Pagos</a>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!--\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div style=\"background-color: (rgba(180, 100, 255, 0.4));\" id=\"caja1\" class=\"cajas\">\n            -<div id=\"tablaOpciones\">\n                <div class=\"btn-group-vertical btn-lg btn-block\">\n                        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"registroAlumno()\">Inscribir Alumno</button>\n                        <ul></ul>\n                        <button type=\"button\" class=\"btn btn-secondary btn-lg\"(click)=\"registroMaestro()\">Registrar maestro</button>\n                        <ul></ul>\n                        <button type=\"button\" class=\"btn btn-light btn-lg\"(click)=\"registroMaestro()\">Calificaciones</button>\n                        <ul></ul>\n                        <button type=\"button\" class=\"btn btn-success btn-lg\"(click)=\"registroMaestro()\">Control de Pagos</button>\n                </div>\n                \n            </div>    \n          <div  id=\"card-main\" class=\"card\">\n            <div class=\"card-body\">\n              <h1 class=\"card-title\" style=\"font-size: 300%;\">Universidad CEA </h1>\n                <a></a>\n                <h6 class=\"card-subtitle mb-2 text-muted\"></h6>\n                <p class=\"card-bodys\" style=\"font-size: 30px;\">El Cámino al éxito</p>\n\n                <div class=\"btn-group\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"registroAlumno()\" style=\"margin-left: 1em;\">Inscribir Alumno</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"registroMaestro()\" style=\"margin-left: 1em;\"> Registrar maestro</button>\n                    <button type=\"button\" class=\"btn btn-primary\"(click)=\"calificaciones()\" style=\"margin-left: 1em;\">Calificaciones</button>\n                    <button type=\"button\" class=\"btn btn-primary\"(click)=\"controlPagos()\" style=\"margin-left: 1em;\">Control de Pagos</button>\n                </div>\n            </div>\n          </div>\n      </div>\n  </div>\n</div>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page404/page404.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page404/page404.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page404 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registro-alumnos/registro-alumnos.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro-alumnos/registro-alumnos.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>REGISTRO ALUMNO</h2>\n<form [formGroup] =\"formulario\"> \n        <h4>DATOS PERSONALES DEL ALUMNO</h4>\n        <label>Nombre(s):</label>\n        <p><input formControlName=\"nombre\" type=\"text\" placeholder=\"Nombre(s) del alumno\"></p>\n        \n        <label>Apellido paterno:</label>\n        <p><input formControlName=\"apellidoPaterno\" type=\"text\" placeholder=\"Apellido paterno\"></p>\n\n        <label>Apellido materno:</label>\n        <p><input formControlName=\"apellidoMaterno\" type=\"text\" placeholder=\"apellido materno\"> </p>\n\n        <label>CURP:</label>\n        <p><input formControlName=\"curp\" type=\"text\" placeholder=\"CURP\"> </p>\n        \n        <label>Fecha de nacimiento:</label>\n        <p><input formControlName=\"fechadeNacimiento\" type=\"date\" placeholder=\"Fecha de nacimiento\"></p>\n\n        <label>Edad:</label>\n        <p><input formControlName=\"edad\" type=\"number\" min=\"10\" max=\"80\" placeholder=\"Edad\"></p>\n\n        <label>Sexo:</label>\n        <p>\n            <select formControlName=\"sexo\">\n                <option value=\"1\">Masculino</option>\n                <option value=\"2\">Mujer</option>\n            </select>\n        </p>\n        \n        <label>Dirección:</label>\n        <p><input formControlName=\"direccion\" type=\"text\" placeholder=\"Dirección\"> </p>\n\n        <label>Municipio:</label>\n        <p><input formControlName=\"municipio\" type=\"text\" placeholder=\"Municipio\"></p>\n    \n    \n    \n        <h4>Datos de la escuela</h4>\n        \n        <label>Matricula:</label>\n        <p> <input formControlName=\"matricula\" type=\"text\" placeholder=\"Matricula\"> </p>\n\n        <label>Carrera: </label>\n        <p>\n            <select formControlName=\"carrera\">\n                <option value=\"1\">Carrera1</option>\n                <option value=\"2\">Carrera2</option>\n            </select>\n        </p>\n\n        <label>Aula:</label>\n        <p>\n            <select formControlName=\"aula\">\n                <option value=\"1\">Aula 1</option>\n                <option value=\"2\">Aula 2</option>\n            </select>\n        </p>\n\n        <label>Estado:</label>\n        <p>\n            <select formControlName=\"estado\">\n                <option value=\"1\">Activo</option>\n                <option value=\"2\">Inactivo</option>\n                <option value=\"3\">Concluido</option>\n            </select>\n        </p>\n\n        <label>Folio de certificado:</label>\n        <p> <input formControlName=\"foliocertificado\" type=\"text\" placeholder=\"Folio de certificado\"> </p>\n\n    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"guardar(formulario.value)\" >Guardar</button>\n</form>\n\n<button class=\"btn btn-primary\" (click)=\"regresar()\">Inicio</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registro-maestro/registro-maestro.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro-maestro/registro-maestro.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <h5 class=\"card-header\">\n          Registro de Maestro\n        </h5>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Datos Personales</h5>\n          \n          <form [formGroup]=\"formulario\">\n                <div formGroupName=\"datosPersonales\">\n\n                    <div class=\"form-group\">\n                    <label>Nombre(s):</label>\n                    <p><input formControlName=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre(s)\" required></p>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col\">\n                                <div class=\"form-group\">\n                                    <label>Apellido Paterno: </label>\n                                    <p><input formControlName=\"apellidopaterno\" required type=\"text\" class=\"form-control\" placeholder=\"aplleido Paterno\"></p>\n                                </div>\n                        </div>\n                            <div class=\"col\">\n                                <div class=\"form-group\">\n                                    <label>Apellido Materno:</label>\n                                    <p><input formControlName=\"apellidomaterno\" type=\"text\" class=\"form-control\" placeholder=\"Apellido Materno\" required></p>\n                                </div>\n                            </div>\n                    </div>\n                    \n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label>Fecha de nacimiento:</label>\n                                <p><input formControlName=\"fechadenacimiento\" type=\"date\" class=\"form-control\" required></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label>Edad:</label>\n                                <p><input formControlName=\"edad\" type=\"number\" class=\"form-control\" min=\"18\" max=\"98\" required></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label>Sexo:</label>\n                                <p>\n                                    <select formControlName=\"sexo\" class=\"form-control\">\n                                        <option value=\"1\">Hombre</option>\n                                        <option value=\"2\">Mujer</option>\n                                    </select>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label>Correo:</label>\n                                <p><input formControlName=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"example@example.com\" required></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label>Teléfono:</label>\n                                <p><input formControlName=\"telefono\" type=\"tel\" class=\"form-control\" placeholder=\"Teléfono\" required></p>\n                            </div>    \n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <label>Dirección</label>\n                        <p><input formControlName=\"direccion\" type=\"text\" class=\"form-control\" placeholder=\"Dirección\" required></p>\n                    </div>    \n                </div>\n                \n                <h5 class=\"card-title\">Información Académica</h5>\n\n                <div formGroupName=\"informacionAcademica\">\n\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label>Titulo profesional:</label>\n                                <p><input formControlName=\"tituloprofesional\" type=\"text\" class=\"form-control\" placeholder=\"Titulo profesional\" required></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                    <label>Cedula profesional:</label>\n                                    <p><input formControlName=\"cedulaprofesional\" type=\"text\" class=\"form-control\" placeholder=\"Cedula profesional\" required></p>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"form-group\">\n                                <label>Institución educativa:</label>\n                                <p><input type=\"text\" formControlName=\"institucioneducativa\" class=\"form-control\" placeholder=\"Institución educativa\" required></p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <label>Tipo:</label>\n                            <p>\n                                <select formControlName=\"tipo\" class=\"form-control\"> \n                                    <option value=\"1\">Preparatoria</option>\n                                    <option value=\"2\">Universidad</option>\n                                    <option value=\"3\">Ambas</option>\n                                </select>\n                            </p>\n                        </div>\n                    </div>\n        \n                </div>\n                \n                <div class=\"rd-flex flex-row-reverse\">\n                        <button class=\"btn btn-primary\" (click)=\"save(formulario.value)\">Guardar</button>\n                        <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                </div>                \n                \n            </form>\n        </div>\n</div>"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

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
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _registro_alumnos_registro_alumnos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-alumnos/registro-alumnos.component */ "./src/app/registro-alumnos/registro-alumnos.component.ts");
/* harmony import */ var _registro_maestro_registro_maestro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-maestro/registro-maestro.component */ "./src/app/registro-maestro/registro-maestro.component.ts");







const routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'registroAlumnos', component: _registro_alumnos_registro_alumnos_component__WEBPACK_IMPORTED_MODULE_5__["RegistroAlumnosComponent"] },
    { path: 'registroMaestro', component: _registro_maestro_registro_maestro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroMaestroComponent"] },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"] }
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'CEA';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _registro_alumnos_registro_alumnos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registro-alumnos/registro-alumnos.component */ "./src/app/registro-alumnos/registro-alumnos.component.ts");
/* harmony import */ var _registro_maestro_registro_maestro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registro-maestro/registro-maestro.component */ "./src/app/registro-maestro/registro-maestro.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
            _page404_page404_component__WEBPACK_IMPORTED_MODULE_7__["Page404Component"],
            _registro_alumnos_registro_alumnos_component__WEBPACK_IMPORTED_MODULE_8__["RegistroAlumnosComponent"],
            _registro_maestro_registro_maestro_component__WEBPACK_IMPORTED_MODULE_9__["RegistroMaestroComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    background-image: url(\"https://avante.biz/wp-content/uploads/Back-To-School-Wallpapers-For-Desktop/Back-To-School-Wallpapers-For-Desktop-021.jpg\"); \n    background-repeat: no-repeat; \n    background-size: cover; \n    background-position: absolute center;\n}\n\n.hr-light {\n    margin-left: 0%;\n    border-top: 5px solid #fff;\n    width: 300px;  \n}\n\n.botones{\n    margin-left: 1em;\n    color: white !important;\n    font-size: 18px;\n    font-family: 'Roboto', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtKQUFrSjtJQUNsSiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2F2YW50ZS5iaXovd3AtY29udGVudC91cGxvYWRzL0JhY2stVG8tU2Nob29sLVdhbGxwYXBlcnMtRm9yLURlc2t0b3AvQmFjay1Uby1TY2hvb2wtV2FsbHBhcGVycy1Gb3ItRGVza3RvcC0wMjEuanBnXCIpOyBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZSBjZW50ZXI7XG59XG5cbi5oci1saWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZmZmO1xuICAgIHdpZHRoOiAzMDBweDsgIFxufVxuXG4uYm90b25lc3tcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IndexComponent = class IndexComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    registroAlumno() {
        console.log("BOTON REGISTRO ALUMNO ");
        this.router.navigate(["/registroAlumnos"]);
    }
    registroMaestro() {
        console.log("BOTON REGISTRO MAESTRO");
        this.router.navigate(["/registroMaestro"]);
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IndexComponent);



/***/ }),

/***/ "./src/app/page404/page404.component.css":
/*!***********************************************!*\
  !*** ./src/app/page404/page404.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page404/page404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
    }
};
Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page404',
        template: __webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/index.js!./src/app/page404/page404.component.html"),
        styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/page404/page404.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Page404Component);



/***/ }),

/***/ "./src/app/registro-alumnos/registro-alumnos.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/registro-alumnos/registro-alumnos.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvLWFsdW1ub3MvcmVnaXN0cm8tYWx1bW5vcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/registro-alumnos/registro-alumnos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/registro-alumnos/registro-alumnos.component.ts ***!
  \****************************************************************/
/*! exports provided: RegistroAlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroAlumnosComponent", function() { return RegistroAlumnosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let RegistroAlumnosComponent = class RegistroAlumnosComponent {
    constructor(route, fb) {
        this.route = route;
        this.fb = fb;
    }
    ngOnInit() {
        this.formulario = this.fb.group({
            nombre: [''],
            apellidoPaterno: [''],
            apellidoMaterno: [''],
            curp: [''],
            fechadeNacimiento: [''],
            edad: [''],
            sexo: [''],
            direccion: [''],
            municipio: [''],
            matricula: [''],
            carrera: [''],
            aula: [''],
            estado: [''],
            foliocertificado: ['']
        });
    }
    guardar(datos) {
        console.log(datos);
    }
    regresar() {
        this.route.navigate([""]);
    }
};
RegistroAlumnosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
RegistroAlumnosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-alumnos',
        template: __webpack_require__(/*! raw-loader!./registro-alumnos.component.html */ "./node_modules/raw-loader/index.js!./src/app/registro-alumnos/registro-alumnos.component.html"),
        styles: [__webpack_require__(/*! ./registro-alumnos.component.css */ "./src/app/registro-alumnos/registro-alumnos.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], RegistroAlumnosComponent);



/***/ }),

/***/ "./src/app/registro-maestro/registro-maestro.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/registro-maestro/registro-maestro.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .navbar-light .navbar-nav .nav-link {\n    color: white;\n}\n\n#btn_Guardar {\n    margin-left: 93%;\n    margin-right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tbWFlc3Ryby9yZWdpc3Ryby1tYWVzdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvLW1hZXN0cm8vcmVnaXN0cm8tbWFlc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNidG5fR3VhcmRhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDkzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registro-maestro/registro-maestro.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/registro-maestro/registro-maestro.component.ts ***!
  \****************************************************************/
/*! exports provided: RegistroMaestroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroMaestroComponent", function() { return RegistroMaestroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let RegistroMaestroComponent = class RegistroMaestroComponent {
    constructor(route, fb) {
        this.route = route;
        this.fb = fb;
    }
    ngOnInit() {
        this.formulario = this.fb.group({
            datosPersonales: this.fb.group({
                apellidopaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                apellidomaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                nombre: [''],
                fechadenacimiento: [''],
                edad: [''],
                correo: [''],
                telefono: [''],
                direccion: [''],
                sexo: ['']
            }),
            informacionAcademica: this.fb.group({
                tituloprofesional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                cedulaprofesional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                institucioneducativa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                tipo: ['']
            })
        });
    }
    save(datos) {
        console.log("guardando datos del profesor..");
        console.log(datos);
    }
    cancel() {
        this.route.navigate(['']);
    }
};
RegistroMaestroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
RegistroMaestroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-maestro',
        template: __webpack_require__(/*! raw-loader!./registro-maestro.component.html */ "./node_modules/raw-loader/index.js!./src/app/registro-maestro/registro-maestro.component.html"),
        styles: [__webpack_require__(/*! ./registro-maestro.component.css */ "./src/app/registro-maestro/registro-maestro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], RegistroMaestroComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Anel/Documents/Git/CEA/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/Anel/Documents/Git/CEA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map