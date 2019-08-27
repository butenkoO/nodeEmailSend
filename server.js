let nodemailer = require('nodemailer');
let obj= {
    good:123,
    price:'qwe',
    how:'2 sk',
    sum: 1000
};
let myJSON = 'Дякуємо за ваше замвлення ' + obj.price + 'на загальну суму' + obj.sum;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'webbuttest@gmail.com',
        pass: '446352qwedsazxc'
    }
});

let mailOptions = {
    from: 'webbuttest@gmail.com',
    to: 'andriybutenko94@gmail.com',
    subject: 'hello',
    text: myJSON
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('mail sent: ' + info.response);
    }
});
