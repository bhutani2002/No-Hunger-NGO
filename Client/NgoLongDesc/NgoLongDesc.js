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
//Works
//Awards
var longdesc = [{}, {}]
for (let i = 0; i < longdesc.length; i++) {
    if (longdesc[i].name == name) {
        var para = document.createElement("p");
        para.setAttribute("class", "text");
        para.innerHTML = longdesc[i].desc;
        body.appendChild(para);
    }
}