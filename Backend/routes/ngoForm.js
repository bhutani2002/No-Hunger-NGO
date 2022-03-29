import mongoose from "mongoose";
import schema from "../database/schema.js";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const Ngo = mongoose.model("Ngo", schema.ngoSchema);

export default function ngoForm(req, res){

    var name = req.body.Name;
    var city = req.body.City;
    var country = req.body.Country;
    var description = req.body.Description;
    var image = req.body.Image;
    var link = req.body.Link;
    var address = req.body.Address;
    var phone = req.body.Phone;
    var works = req.body.Works;
    var awards = req.body.Awards;
    var ngoEmail = req.body.NgoEmail;
    var restroEmail = req.body.RestroEmail;

    const newNgo = new Ngo({
        Name: name,
        City: city,
        Country: country,
        Image: image,
        Description: description,
        Link: link,
        Address: address,
        Phone: phone,
        Works: works,
        Awards: awards
    });

    newNgo.save(function (errors) {
        //saving user data to database
        if (!errors) {
            //code to send data on successful registration
            res.status(200).send("NGO Added Successfully!")
        } else {
            res.status(401).send("<h2>Registration failed</h2>");
        }
    });

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'noHungerNgoProject@gmail.com',
            pass: 'ngo30032022'
        }
   }));

const mailList = [
    'jaiswalpiyushaerospacex@gmail.com',
    'piyushjaiswalofficial001@gmail.com'
];

   const mailOptions = {
    from: 'noHungerNgoProject@gmail.com',
    to: mailList,
    subject: '⚠ Alert: Model accuracy below 90%',
    html: '<h1>Hi, We noticed that the output of your model is giving accuracy less than 90%. Please update .ipy file after tuning and validation.</h1>'
};
transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {console.log("‘Email sent: ‘" + info.response);}

});
}
