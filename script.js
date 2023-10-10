// O'zgaruvchini turlari va farqlari haqida
// O'zgaruvchilar 3 ta boladi bular var let const 
// var bu global
// let bu global emas
// const bu ozgarmas yani update qilaolamymiz
// =============================================================
// Template Dead Zone (TDZ)
// Bu boshlanish joyida biron biz uzgaruvchi ochdikmi uni undan oldin chaqirilmagan joy Tempral Dead Zone deyiladi.
// {
    // start 



// TDZ deyiladi.



    // let name = "Jack" // end
// }
// =============================================================
// Malumot tiplari 
// Primitive - number,string, bigInt, symbol , boolean, null undefined
// =============================================================
// Garbage collection 
// Bu Heap tulib qolmaslik uchun malumotlarni xotiradan o'chirb tashaydi
// let user = {
//     name: "Rahimjon"
// }
// console.log(user.suname); // Agar biz yuq malumotni yozadigan bolsak bu onrechibal boladi va xotirdan uchib ketadi
// =============================================================
// This kalit suzi nima
// this bu objectdan tashqarida bolga global window object 
// objectni ichida bolsa global object boladi. this orqali objectni ichidagi xoxlagan malumotimizni olsak boladi
// =============================================================
// call apply bin 
// bu contextni boshqa objectga yunaltirib beradi
// Masalan bizda bitta object bor uni function bor u funtionni ichida biz name yozdik lekin u name 
// bizni objectimizda emas boshqa objectda bor endi huddi shu objectda biz shu nameni olmoqchi bolsak 
// call apply, bin dan foydalansak boladi
// =============================================================
// Optiona chaining nima?
// Optional chainig bu masalan bitta objectni ichida malumot oolmoqchimiz biz uni borligini yoki yuq ekanligini bilmaymiz bu 
// reactda agar yuq malumot yozilsa eror beradi shuni oldini olishi uchun ? quyib ketishimiz kerak.
// let user = {
//     name: "John",
//     age: 25
// }
// console.log(user?.name);
// console.log(user?.age); // shu xolatda yozib ketsak bizga eror bermaydi














