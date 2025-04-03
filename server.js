// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add a GET route for the root path
app.get("/", (req, res) => {
  res.send("Server is running! Use POST /send-consultation to submit the form.");
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.post("/send-consultation", async (req, res) => {
  try {
    const {
      fullName, phone, orgName, companySize,
      industry, timeline, contactMethod, message
    } = req.body;

    if (!fullName || !phone || !message) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "niku2003kumari@gmail.com",
        pass: "wure wbcc xabm wqiq",
      },
    });

    const mailOptions = {
      from: "niku2003kumari@gmail.com",
      to: "niku2003kumari@gmail.com",
      subject: `New Consultation Request from ${fullName}`,
      text: `
📩 New Consultation Request

Full Name: ${fullName}
Phone: ${phone}
Organization: ${orgName}
Company Size: ${companySize}
Industry: ${industry}
Timeline: ${timeline}
Preferred Contact Method: ${contactMethod}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Your consultation request has been sent!" });
  } catch (err) {
    console.error("Error sending mail:", err);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
