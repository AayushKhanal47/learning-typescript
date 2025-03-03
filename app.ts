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


 //interface and type aliases

 interface User{
    name:string,
    age:number,
    email:string
 }
 function getUser(obj:User){

 }

 getUser({ name: "Aayush", age: 21, email: "aayush@gmail.com" });

 interface Admin extends User{
    admin: boolean;
 }

 type value = string|number|null;
 let k:value = "aayush";
 
class HumanMaker {
   age = 0;
   constructor(public name: string, public gender:string, public isHandsome:boolean){

   }
}
let h1 = new HumanMaker("Aayush", "male", true)
console.log(h1);


