"use strict";
const ADMIN = "teste";
const USER = "user1";
const READONLY = "readonly1";
// enum consegue agrupar e fazer uma lista do grupo, poupando fazer a declaracao conforme acima
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission["USER"] = "user1";
    Permission["READONLY"] = "readonly1";
})(Permission || (Permission = {}));
//consultando como objeto 
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
//consultando como array 
console.log(Permission["ADMIN"]);
console.log(Permission["USER"]);
console.log(Permission["READONLY"]);
console.log("-------------------");
var RGBColor;
(function (RGBColor) {
    RGBColor[RGBColor["Red"] = 0] = "Red";
    RGBColor[RGBColor["Green"] = 1] = "Green";
    RGBColor[RGBColor["Blue"] = 2] = "Blue";
})(RGBColor || (RGBColor = {}));
;
console.log('RGBColor:', RGBColor);
console.log('RGBColor.Green:', RGBColor.Green);
console.log("-------------------");
let colorBlue = RGBColor.Blue;
console.log('colorBlue:', colorBlue);
console.log("-------------------");
var Cities1;
(function (Cities1) {
    Cities1[Cities1["Mumbai"] = 10] = "Mumbai";
    Cities1[Cities1["Delhi"] = 20] = "Delhi";
    Cities1[Cities1["Kolkata"] = 30] = "Kolkata";
    Cities1[Cities1["Chennai"] = 40] = "Chennai";
    Cities1[Cities1["Bangalore"] = 50] = "Bangalore";
})(Cities1 || (Cities1 = {}));
console.log('Cities:', Cities1);
