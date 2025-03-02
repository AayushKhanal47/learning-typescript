"use strict";
let a = 13;
let arr = [23, 'hello'];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Basic"] = 200] = "Basic";
    StatusCodes[StatusCodes["OK"] = 201] = "OK";
})(StatusCodes || (StatusCodes = {}));
UserRoles.ADMIN;
StatusCodes.OK;
let b = 12;
let c = "aayush";
let d;
c.toUpperCase();
if (typeof d == "string") {
    d.toLocaleLowerCase();
}
function abcd() {
    console.log("aayush");
}
function cds() {
    return 10;
}
function aas() {
    return "Aayush";
}
