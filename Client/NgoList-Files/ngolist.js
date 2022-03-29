// import axios from 'axios';
//Ravish: Get the array through axios,with city and url too. Put it in a function. I will import the function in  this file and then use it
var list = [{
    imageUrl: "https://i.ibb.co/JtFxpVG/test-image-1.jpg",
    ngoName: "Panjab University",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/8PFrkm3/image-coding.jpg",
    ngoName: "Panjab University",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/JtFxpVG/test-image-1.jpg",
    ngoName: "Panjab University",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/8PFrkm3/image-coding.jpg",
    ngoName: "Panjab University",
    desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/JtFxpVG/test-image-1.jpg",
    ngoName: "Panjab University",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/8PFrkm3/image-coding.jpg",
    ngoName: "Panjab University",
    desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/JtFxpVG/test-image-1.jpg",
    ngoName: "Panjab University",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/8PFrkm3/image-coding.jpg",
    ngoName: "Panjab University",
    desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    formUrl: "www.google.com"
}, {
    imageUrl: "https://i.ibb.co/JtFxpVG/test-image-1.jpg",
    ngoName: "Panjab University",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    formUrl: "www.google.com"
}]

// var city, country;
// axios.post('/shortDesc', {
//     "City": city,
//     "Country": country,
// }).then((res) => {
//     console.log(res);
// })

for (let i = 0; i < list.length; i++) {
    var container = document.createElement("div");
    container.setAttribute("class", "container");



    var imageContainer = container.appendChild(document.createElement("div"));
    imageContainer.setAttribute("class", "imageContainer");
    var image = document.createElement("img");
    image.setAttribute("class", "ngo-image");
    var ngoImage = imageContainer.appendChild(image);
    ngoImage.src = list[i].imageUrl;


    var ngoName = container.appendChild(document.createElement("div"));
    ngoName.setAttribute("class", "ngo-name");
    ngoName.textContent = list[i].ngoName;


    var Description = container.appendChild(document.createElement("div"));
    Description.setAttribute("class", "description");
    var para = document.createElement("p");
    para.setAttribute("class", "text");
    para.innerHTML = list[i].desc;
    Description.appendChild(para);



    var Donate = container.appendChild(document.createElement("div"));
    Donate.setAttribute("class", "donate");
    var button = document.createElement("button");
    button.setAttribute("class", "form-button");
    var formlink = document.createElement("a");
    Object.assign(formlink, {     //Used for assigning one or more attributes in a single go.
        className: "formlink",
        target: "_blank"
    })
    var Link = button.appendChild(formlink);
    formlink.href = list[i].formUrl;
    Link.innerText = "Donate";
    Donate.appendChild(button);

    //Onclick pass name, city, country
    //Create function of name city country  (Array)

    document.getElementsByClassName("mainbox")[0].appendChild(container);
    container.style.margin = "0 0 20px 5px";
}