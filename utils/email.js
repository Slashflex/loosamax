const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const axios = require('axios');

module.exports = class Email {
  constructor(user, url, data) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `David Saoud <${process.env.EMAIL_FROM}>`;
    this.data = data;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Activate in gmail "less secure app" options
    });
  }

  async send(template, subject) {
    const gift = await axios({
      method: 'GET',
      url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=A',
      data: {},
    });
    const rand = Math.floor(Math.random() * 25);
    const meal = [gift.data.meals[rand].strMeal, gift.data.meals[rand].strMealThumb];

    // Send the actual email
    // 1. Render the html based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      data: this.data,
      subject,
      meal: meal[0],
      mealImg: meal[1],
    });

    // 2. Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    // 3. Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to Loosamax ♣♠♥♦');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
};
