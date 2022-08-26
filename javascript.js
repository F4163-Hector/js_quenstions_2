//! 1 ile 100 arasındaki ÇİFT sayıları TERSTEN ekrana javascript kodları ile yazdırınız

// for (let i = 100; i >= 0; i--) {
//   if (i % 2 == 0) {
//     document.write(`${i} <br>`);
//   }
// }

//! 1 ile 100 arasındaki TEK sayıları ekrana javascript kodları ile yazdırınız

// for (let i = 0; i >= 100; i++) {
//   if (i % 2 == 1) {
//     document.write(`${i} <br>`);
//   }
// }

//! 1 ile 100 arasındaki TEK sayıları TERSTEN ekrana javascript kodları ile yazdırınız

// for (let i = 100; i >= 0; i--) {
//   if (i % 2 == 1) {
//     document.write(`${i} <br>`);
//   }
// }

//! 1 ile 100 arasında 3 erli yazdır

// for(let i=0; i<=100; i++){
//     if( i %3 == 0){
//         console.log(`${i} <br>`)
//     }
// }
//!----------------------------------------------
// for(let i=0; i<=100; i++){

//     if( i %5 !== 0){
//         console.log(`${i} <br>`)
//     }
// }


//!---------------------------------------------
// for (let i = 0; i <= 100; i++) {
//   if (i % 5 !== 0 && i % 7 !== 0) {
//     console.log(`${i} <br>`);
//   }
// }

//! Sayıları 1 den 100 e kadar yazdır ama 20-40 arası 3 ün katı olacak şekilde yazdır..

// for (let i = 1; i < 101; i++) {
//   if (i >= 20 && i <= 40) {
//     if (i % 3 == 0) {
//       console.log(i);
//     }
//   }
//   else {
//     console.log(i);
//   }
// }

//! Sayıları 1 den 100 e kadar yazdır ama 20-40 arası 3 ün katı olmayacak  şekilde yazdır..

// for (let i = 0; i <= 100; i++) {
//   if (i > 20 && i <40) {
//     if (i % 3 !== 0) {
//       console.log(i);
//     }
//   } else {
//     console.log(i);
//   }
// }

//! Ekrana büyüyen font ile  11 kez TÜRKİYE yazan javascript kodları

// for(let i = 0; i <= 10; i++) {
//     document.write("<span style='font-size:" + (i + 5) + "px;'>TÜRKİYE</span> <br>");
// }


//! 1.çözüm: 3 ve 5 tam bölünebilen sayıların toplamını bılma...
// let topla = 0
// for (let i = 0; i < 100; i++) {
//    if (i %3 ==0 && i %5 == 0){
//      topla  += i
   
//     console.log(topla)
//    } 
    
// }

//! 2. çözüm: 3 ve 5’e tam bölünen sayıları ve bu sayıların toplamını yazdıran javascript kodları

// let topla = 0;
// for( let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         if(i != 90){
//             document.write(i + " + ");
//         }
//         else{
//             document.write(i + " = ");
//         }
//         topla += i;
//     }
// }
// document.write(topla);

//! Kullanıcının girdiği mesajı yine kullanıcının girdiği tekrar sayısı kadar yazdıran javascript kodları

// let mesaj = prompt("Mesajınızı Giriniz");
// let sayi = +prompt("Sayı Giriniz");
// for(let i = 1; i <= sayi; i++) {
//     document.write(mesaj + "<br>");
// }

//! sintax farkı (yazılışı biraz değiştirdik)

// let mesaj = prompt("Mesajınızı Giriniz");
// let sayi = Number(prompt("Sayı Giriniz"));
// for(let i = 1; i <= sayi; i++) {
//     document.write(`${mesaj} <br>`);
// }


//! Çarpım Tablosu

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
        
//         document.write(`${i} * ${j} = ${i*j} <br>`);
        
//     }document.write(`--------------<br>`);
    
// }

//! Ekrana bir sayı giriniz ve o sayıya kadar olan sayıların toplamını veren js kodu yazınız


// let sayi = Number(prompt("Sayı Giriniz"));
// let toplam = sayi*(sayi+1)/2;
// document.write(`Toplam Sayı : ${toplam}`)


//! Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız


// let sayi1 = Number(prompt("Birinci sayıyı giriniz"));
// let sayi2 = Number(prompt("İkinci sayıyı giriniz"));
// let sayi3 = Number(prompt("Üçüncü sayıyı giriniz"));

// let ortalama = ((sayi1 + sayi2 + sayi3) / 3).toFixed(3);
// document.write(`${ortalama}`);


//! Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız
// let sayi = +prompt("Bir sayı giriniz");
// let sonuc = 1;
// for(let i = 1; i <= sayi; i++) {
//     sonuc *= i;
// }
// console.log(sonuc)

