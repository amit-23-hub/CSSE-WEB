const SibApiV3Sdk = require('sib-api-v3-sdk');

// Initialize Brevo (Sendinblue) API
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();

/**
 * Send email verification OTP
 * @param {string} email - Recipient email
 * @param {string} otp - 6-digit OTP
 * @returns {Promise<Object>} Email send result
 */
const sendOTPEmail = async (email, otp) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background-color: #2563eb;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 5px 5px;
          }
          .otp-box {
            background-color: #f0f7ff;
            border: 2px dashed #2563eb;
            padding: 20px;
            text-align: center;
            margin: 20px 0;
            border-radius: 5px;
          }
          .otp-code {
            font-size: 32px;
            font-weight: bold;
            color: #2563eb;
            letter-spacing: 5px;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Email Verification</h1>
          </div>
          <div class="content">
            <h2>Welcome to CSSE!</h2>
            <p>Thank you for registering with the Computer Science & Software Engineering Technical Society.</p>
            <p>To complete your registration, please use the following One-Time Password (OTP):</p>
            
            <div class="otp-box">
              <div class="otp-code">${otp}</div>
            </div>
            
            <p><strong>This OTP will expire in 10 minutes.</strong></p>
            <p>If you didn't request this verification, please ignore this email.</p>
            
            <div class="footer">
              <p>This is an automated message from CSSE. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const sendSmtpEmail = {
      sender: { email: 'akashgupta7484@gmail.com', name: 'CSSE - Technical Society' },
      to: [{ email: email }],
      subject: 'Email Verification - CSSE',
      htmlContent: htmlContent
    };

    const result = await transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
    console.log('✅ Email sent successfully via Brevo. Message ID:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error.message || error);
    throw new Error('Failed to send email');
  }
};

/**
 * Send password reset OTP
 * @param {string} email - Recipient email
 * @param {string} otp - 6-digit OTP
 * @returns {Promise<Object>} Email send result
 */
const sendPasswordResetEmail = async (email, otp) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background-color: #dc2626;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 5px 5px;
          }
          .otp-box {
            background-color: #fef2f2;
            border: 2px dashed #dc2626;
            padding: 20px;
            text-align: center;
            margin: 20px 0;
            border-radius: 5px;
          }
          .otp-code {
            font-size: 32px;
            font-weight: bold;
            color: #dc2626;
            letter-spacing: 5px;
          }
          .warning {
            background-color: #fff7ed;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 20px 0;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Password Reset Request</h1>
          </div>
          <div class="content">
            <h2>Reset Your Password</h2>
            <p>We received a request to reset your password for your CSSE account.</p>
            <p>Use the following One-Time Password (OTP) to reset your password:</p>
            
            <div class="otp-box">
              <div class="otp-code">${otp}</div>
            </div>
            
            <p><strong>This OTP will expire in 15 minutes.</strong></p>
            
            <div class="warning">
              <strong>⚠️ Security Notice:</strong><br>
              If you didn't request a password reset, please ignore this email and ensure your account is secure.
            </div>
            
            <div class="footer">
              <p>This is an automated message from CSSE. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const sendSmtpEmail = {
      sender: { email: 'akashgupta7484@gmail.com', name: 'CSSE - Technical Society' },
      to: [{ email: email }],
      subject: 'Password Reset Request - CSSE',
      htmlContent: htmlContent
    };

    const result = await transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
    console.log('✅ Email sent successfully via Brevo. Message ID:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error.message || error);
    throw new Error('Failed to send email');
  }
};

module.exports = {
  sendOTPEmail,
  sendPasswordResetEmail
};
