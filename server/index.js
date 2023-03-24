const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {



    const { firstName, lastName, email, phone, termsAccepted, state } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'potapchuk30@gmail.com', // замініть на свій email
            pass: 'bmamdblxniyvvyya' // замініть на свій пароль
        },
    });

    const mailOptions = {
        from: 'No reply',
        to: 'potapchuk30@gmail.com',           // замініть на адресу отримувача
        subject: 'New proposal submitted',
        html: `
    <html>
      <head>
        <style>
          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th, td {
            padding: 5px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>New Proposal Submitted</h1>
        <table>
          <tr>
            <th>Field Name</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>First Name</td>
            <td>${firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>${lastName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td>Terms Accepted</td>
            <td>${termsAccepted}</td>
          </tr>
        
          <tr>
           <td><b>Submitted Data</b> 
</td>
<td>
  ${Object.entries(state)
            .map(([key, value]) => `<b>${key}:</b> ${value}<br/>`)
            .join('')}
</td>
        </table>
      </body>
    </html>
  `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent successfully');
            res.send('Email sent successfully');
        }
    });
});

const PORT =  5100;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
