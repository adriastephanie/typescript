const ADMIN = "teste";
const USER = "user1";
const READONLY = "readonly1";

// enum consegue agrupar e fazer uma lista do grupo, poupando fazer a declaracao conforme acima
enum Permission {
    ADMIN = 1,
    USER = "user1",
    READONLY = "readonly1",
}

//consultando como objeto 
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);


//consultando como array 
console.log(Permission["ADMIN"]);
console.log(Permission["USER"]);
console.log(Permission["READONLY"]);

console.log("-------------------");

enum RGBColor {
    Red, 
    Green,
    Blue 
};
console.log('RGBColor:', RGBColor);
console.log('RGBColor.Green:', RGBColor.Green);


console.log("-------------------");

let colorBlue: RGBColor = RGBColor.Blue;
console.log('colorBlue:', colorBlue);

console.log("-------------------");

enum Cities1 { 
    Mumbai = 10, 
    Delhi = 20, 
    Kolkata = 30, 
    Chennai = 40, 
    Bangalore = 50 }
console.log('Cities:', Cities1);