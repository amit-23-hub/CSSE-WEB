const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

console.log('Testing Brevo API...');
console.log('API Key loaded:', process.env.BREVO_API_KEY ? 'YES ✅' : 'NO ❌');
console.log('First 20 chars:', process.env.BREVO_API_KEY?.substring(0, 20));

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const api = new SibApiV3Sdk.TransactionalEmailsApi();

const sendSmtpEmail = {
    sender: { email: 'noreply@brevo.com', name: 'CSSE Test' },
    to: [{ email: 'akashgupta7484@gmail.com' }], // Your email
    subject: 'Brevo Connection Test',
    htmlContent: '<h1>✅ Brevo is working!</h1><p>If you receive this, your API key is correct.</p>'
};

console.log('\nSending test email to akashgupta7484@gmail.com...\n');

api.sendTransacEmail(sendSmtpEmail)
    .then(result => {
        console.log('✅ SUCCESS! Email sent via Brevo');
        console.log('Message ID:', result.messageId);
        console.log('\n📧 Check your inbox (and spam folder) for the test email!\n');
    })
    .catch(error => {
        console.error('❌ ERROR sending email:');
        console.error('Error message:', error.message);
        console.error('Status:', error.status);
        console.error('\nPossible issues:');
        console.error('- Invalid API key');
        console.error('- Brevo account issue');
        console.error('- Network connectivity');
        console.error('\nGet new API key at: https://app.brevo.com/settings/keys/api\n');
    });
