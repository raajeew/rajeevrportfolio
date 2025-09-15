// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key, Service ID, and Template ID
// 6. Replace the values below

export const emailConfig = {
  publicKey: 'E7aAYV5W3FdaJT0P1',      // Get from EmailJS Dashboard
  serviceId: 'service_vzfwocb',      // Get from EmailJS Dashboard  
  templateId: 'template_8fgp2g7'     // Get from EmailJS Dashboard
};

// Sample EmailJS Template Variables for reference:
// {{to_email}} - rajeev@rajeevr.com
// {{from_name}} - {{firstName}} {{lastName}}
// {{from_email}} - {{email}}
// {{phone}} - {{phone}}
// {{subject}} - {{subject}}
// {{message}} - {{message}}
// {{reply_to}} - {{email}}
