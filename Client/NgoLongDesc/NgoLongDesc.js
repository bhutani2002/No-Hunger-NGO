//Get the function form ngolist.js
//Array of objects of 
//name
//city
//country
//Image
//Description
//Link
//Address
//Phone
//Email
//Works
//Awards

var list = [{
    Image: "https://i.ibb.co/JtFxpVG/test-image-1.jpg",
    Name: "Ngo-Name",
    Description: "There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingembarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
    Phone: "+1 012 345 6789",
    Email: "reachusexample@gmail.com",
    Address: "212 , Ground floor seventh cross some layout, some road karamangla Bangaluru - 560001",
    Works: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    Awards: "First-award, Second-award, Third-award"
}]

var phone = document.getElementsByClassName("contact_subtitle")[0];
var email = document.getElementsByClassName("email_subtitle")[0];
var address = document.getElementsByClassName("address_subtitle")[0];
var works = document.getElementsByClassName("works_subtitle")[0];
var awards = document.getElementsByClassName("awards_subtitle")[0];

var image = document.getElementsByClassName("Ngo-image")[0];
var ngoName = document.getElementsByClassName("Ngo-name")[0];
var description = document.getElementsByClassName("Desc")[0];

phone.innerText = list[0].Phone;
email.innerText = list[0].Email;
address.innerText = list[0].Address;
works.innerText = list[0].Works;
awards.innerText = list[0].Awards;

image.src = list[0].Image;
ngoName.innerText = list[0].Name;
description.innerText = list[0].Description;


var text = description.innerText;
console.log(text);
for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i));
    if (text.charAt(i - 1) != '.') {
        console.log("HELLO");
        var char = text.charAt(i);
        // var line = char.bold();
        // document.getElementsByClassName("Desc")[0].innerText = line;
    }
    else
        break;
}