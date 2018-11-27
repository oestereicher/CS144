(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}! WHOO yas \n  </h1>\n</div>\n<app-list></app-list>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = /** @class */ (function () {
    function BlogService(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.posts = [];
        this.api = "http://localhost:3000/api/";
        if (document.cookie != null && document.cookie.search("jwt") != -1) {
            this.parseJWT(document.cookie);
        }
        this.updateboo = true;
        this.fetchPosts(this.auth_username);
        console.log(this.auth_username);
    }
    BlogService.prototype.fetchPosts = function (username) {
        var httpReq = new XMLHttpRequest();
        var classThis = this;
        httpReq.onreadystatechange = function () {
            if (httpReq.readyState == XMLHttpRequest.DONE) {
                if (httpReq.status == 401) {
                    window.location.href = "http://localhost:3000/login?redirect=/editor/";
                }
                console.log("REACHED");
                var res = JSON.parse(httpReq.responseText);
                console.log(res);
                var postnum = 0;
                while (postnum < res.posts.length) {
                    var post = {
                        postid: res.posts[postnum].postid,
                        created: new Date(res.posts[postnum].created),
                        modified: new Date(res.posts[postnum].modified),
                        title: res.posts[postnum].title,
                        body: res.posts[postnum].body
                    };
                    classThis.posts.push(post);
                    console.log(post);
                    console.log("PLEASEEEE");
                    postnum++;
                }
                //classThis.nextID = Math.max.apply(Math, classThis.posts.map(function(post) { return post.postid })) + 1;
                classThis.nextID = classThis.posts.length ? Math.max.apply(Math, classThis.posts.map(function (post) { return post.postid; })) + 1 : 0;
                console.log(classThis.nextID);
                console.log("YAS OMG FINALLY");
            }
            console.log(classThis.posts);
            console.log("HERE ARE POSTS BITHCEs");
        };
        httpReq.open('GET', this.api + username, true);
        httpReq.withCredentials = true;
        httpReq.send();
    };
    BlogService.prototype.getPosts = function (username) {
        return this.posts;
    };
    BlogService.prototype.getPost = function (username, id) {
        return this.posts.find(function (post) {
            return post.postid == id;
        });
    };
    BlogService.prototype.newPost = function (username) {
        var newPost = {
            postid: this.nextID,
            created: new Date(),
            modified: new Date(),
            title: " ",
            body: " "
        };
        var classThis = this;
        this.posts.push(newPost);
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function () {
            console.log("here is the new post in newPOst", newPost);
            if (httpReq.readyState == XMLHttpRequest.DONE && httpReq.status == 201) {
                console.log("good job making new post woot");
            }
            else if (httpReq.readyState == XMLHttpRequest.DONE) {
                if (httpReq.status == 401) {
                    window.location.href = "http://localhost:3000/login?redirect=/editor/";
                }
                classThis.posts.pop();
                window.alert("error creating new post rip lmao");
                //window.location.href = "http://localhost:3000/edit/";
            }
        };
        var postid = this.nextID;
        httpReq.open("POST", this.api + username + "/" + postid.toString(), true);
        this.nextID++;
        httpReq.setRequestHeader("Content-type", "application/json");
        console.log("THE NEW POST LOOKS LIKE THIS", JSON.stringify(newPost));
        console.log(newPost);
        httpReq.send(JSON.stringify(newPost));
        return newPost;
    };
    BlogService.prototype.updatePost = function (username, post) {
        if (!this.updateboo) {
            return;
        }
        var index = this.postToIndex(post.postid);
        var classThis = this;
        if (index != -1) {
            this.posts[index].title = post.title;
            this.posts[index].body = post.body;
            this.posts[index].modified = new Date();
            var httpReq_1 = new XMLHttpRequest();
            httpReq_1.onreadystatechange = function () {
                if (httpReq_1.readyState == XMLHttpRequest.DONE && httpReq_1.status == 200) {
                    console.log("successful update wooo");
                    classThis.updateboo = true;
                }
                else if (httpReq_1.readyState == XMLHttpRequest.DONE && httpReq_1.status == 401) {
                    window.location.href = "http://localhost:3000/login?redirect=/editor/";
                    classThis.updateboo = false;
                }
                else if (httpReq_1.readyState == XMLHttpRequest.DONE && httpReq_1.status != 0 && httpReq_1.status != 200) {
                    window.alert("error updating post");
                    console.log("dumb", httpReq_1.status);
                    //window.location.href = "http://localhost:3000/edit/" + post.postid;
                    classThis.updateboo = true;
                }
            };
            httpReq_1.open("PUT", this.api + username + "/" + post.postid.toString());
            httpReq_1.setRequestHeader("Content-type", "application/json");
            httpReq_1.send(JSON.stringify(this.posts[index]));
        }
    };
    BlogService.prototype.deletePost = function (username, postid) {
        var index = this.postToIndex(postid);
        var classThis = this;
        if (index != -1) {
            var httpReq_2 = new XMLHttpRequest();
            httpReq_2.onreadystatechange = function () {
                if (httpReq_2.readyState == XMLHttpRequest.DONE && httpReq_2.status == 204) {
                    console.log("successful delete guud job");
                    classThis.router.navigate(['/']);
                }
                else if (httpReq_2.readyState == XMLHttpRequest.DONE && httpReq_2.status == 401) {
                    window.alert("error deleting post");
                    window.location.href = "http://localhost:3000/login?redirect=/editor/";
                    classThis.router.navigate(['/']);
                }
                else if (httpReq_2.readyState == XMLHttpRequest.DONE && httpReq_2.status != 204) {
                    window.alert("error deleting post");
                    classThis.router.navigate(['/']);
                }
            };
            this.posts.splice(index, 1);
            console.log("HERE ARE THE POSTS IN BS delete", this.posts);
            httpReq_2.open('DELETE', this.api + username + "/" + postid.toString(), true);
            httpReq_2.send();
            //this.router.navigate(['/']);
        }
    };
    //extra functions
    BlogService.prototype.postToIndex = function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid == id) {
                return i;
            }
        }
        return -1;
    };
    BlogService.prototype.parseJWT = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var decoded = JSON.parse(atob(base64));
        this.auth_username = decoded.usr;
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <h2 id=\"edit-header\">Edit Post</h2>\n    <h4 >Title: </h4>\n    <input [(ngModel)]=\"post.title\" placeholder = \"title\">\n    <h4 >Body: </h4>\n    <textarea id=\"body\" [(ngModel)]=\"post.body\"></textarea>\n    <p> Last modified: {{post.modified | date: 'medium'}}</p>\n  <button type=\"button\" class=\"btn button-style\" id=\"deleteButton\" (click)=\"delete()\">Delete</button>\n  <button type=\"button\" class=\"btn button-style\" id=\"saveButton\" (click)=\"save()\">Save</button>\n  <button type=\"button\" class=\"btn button-style\" id=\"previewButton\" (click)=\"preview()\">Preview</button>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list.component */ "./src/app/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, router, activatedRoute, listComponent) {
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.listComponent = listComponent;
        //private oldPost: Post;
        this.editPost = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]() // post body input
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () {
            if (_this.post) {
                //this.blogService.updatePost(this.blogService.auth_username, this.post);
                _this.save();
            }
            _this.getPost();
        });
    };
    EditComponent.prototype.getPost = function () {
        var postid = this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(this.blogService.auth_username, Number(postid));
        if (this.post) {
            this.oldBody = this.post.body;
            this.oldTitle = this.post.title;
        }
        console.log("get post in edit was called again");
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.blogService.auth_username, this.post.postid);
        //this.router.navigate(['/']);
        //this.listComponent.ngOnInit();
    };
    EditComponent.prototype.save = function () {
        console.log("THIS OLD BODAY", this.oldBody);
        console.log("THIs old title ", this.oldTitle);
        console.log("this is the post", this.post);
        if (this.oldBody != this.post.body || this.oldTitle != this.post.title) {
            this.blogService.updatePost(this.blogService.auth_username, this.post);
            this.oldBody = this.post.body;
            this.oldTitle = this.post.title;
        }
    };
    EditComponent.prototype.preview = function () {
        this.save();
        this.router.navigateByUrl('/preview/' + this.post.postid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "save", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n.list li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.list .text {\n    position: relative;\n    top: -3px;\n  }\n.list .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.list a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px;\n  }\n.list a:hover {\n    color:#607D8B;\n  }\n.list li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"list-container\">\n  <div id = \"posts-container\">\n    <h3 id = \"list-title\">My Posts</h3>\n    <button type=\"button\" class=\"btn button-style\" id=\"newPostButton\" (click)=\"newPost()\">New Post</button>\n  </div>\n  <div id = \"post-container\">\n    <ul class = \"list\">\n      <li *ngFor=\"let post of posts\" >\n          <a routerLink=\"/edit/{{post.postid}}\">\n            <span class=\"badge\">{{post.postid}}</span> {{post.title}} Body: {{post.body}}\n          </a>\n      </li>\n    </ul>\n  </div>\n</div>\n<!--id = \"post-list\"-->"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.getPosts(); });
        this.posts = this.blogService.getPosts(this.blogService.auth_username);
        //console.log("init was called again in list component");
        //console.log(this.posts);
    };
    ListComponent.prototype.getPosts = function () {
        this.posts = this.blogService.getPosts(this.blogService.auth_username);
        console.log("get posts was called in list component");
    };
    ListComponent.prototype.newPost = function () {
        var newPost = this.blogService.newPost(this.blogService.auth_username);
        var newPostID = newPost.postid;
        this.router.navigate(['/edit/' + newPostID.toString()]);
    };
    ListComponent.prototype.parseJWT = function (token) {
        token = document.cookie; //WRONG
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var decoded = JSON.parse(atob(base64));
        this.username = decoded.usr;
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <h3 id=\"preview-header\">Preview</h3>\n  <button type=\"submit\" class=\"btn button-style\" (click)=\"back()\"> Edit</button>\n  <div id=\"preview-container\">\n    <div id=\"title\" [innerHTML]=title></div>\n    <div id=\"body\" [innerHTML]=body></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, router, activatedRoute) {
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.preview(); });
    };
    PreviewComponent.prototype.preview = function () {
        var postid = this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(this.blogService.auth_username, Number(postid));
        var reader = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        var writer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
        if (this.post != null) {
            var tempTitle = reader.parse(this.post.title);
            this.title = writer.render(tempTitle);
            var tempBody = reader.parse(this.post.body);
            this.body = writer.render(tempBody);
        }
    };
    PreviewComponent.prototype.back = function () {
        this.router.navigate(['/edit/' + this.post.postid]);
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PreviewComponent);
    return PreviewComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/gitrepos/CS144/p4/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map