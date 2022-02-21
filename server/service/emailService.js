const nodemailer = require('nodemailer')
require('dotenv').config()


class EmailService{
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationEmail(to, link){
          await this.transporter.sendMail({
              from: process.env.SMTP_USER,
              to,
              subject: 'UNION account activation on ' + process.env.API_URL,
              text: '',
              html: `<div>
                         <h1>Please follow the link to activate your account</h1>
                         <a href="${link}">${link}</a>
                     </div>`
          })
    }
}

module.exports = new EmailService();