let a = 13;
let arr: [number,string] = [23, 'hello'];

enum UserRoles{
    ADMIN = "admin",
    USER = "user"
}
enum StatusCodes{
    Basic = 200,
    OK = 201,
}

UserRoles.ADMIN;
StatusCodes.OK;


let b:number = 12;
let c:string = "aayush";
let d:unknown;
 c.toUpperCase();
 if(typeof d == "string"){
    d.toLocaleLowerCase();
 }

 function abcd(): void{
    console.log("aayush");
    
 }
 function cds(): number{
   return 10;
    
 }
 function aas(): string{
    return "Aayush";
 }