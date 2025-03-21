# Contact Form Setup Guide

This guide explains how to set up the contact form in your portfolio website to receive messages directly to your email (sahnayan2061@gmail.com).

## How the Contact Form Works

The contact form uses EmailJS, a service that allows sending emails directly from client-side JavaScript without needing your own server. When a visitor fills out the contact form and clicks "Send Message", the information is sent directly to your email.

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for a personal portfolio

### 2. Connect Your Gmail Account

1. After logging in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose "Gmail" as the service provider
4. Connect your Gmail account (sahnayan2061@gmail.com)
5. Give the service a name (e.g., "Portfolio Contact")
6. Note the Service ID (e.g., "service_abc123") - you'll need this later

### 3. Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template:
   - Set the template name (e.g., "Contact Form")
   - For the "To Email" field, use your email: sahnayan2061@gmail.com
   - Set the subject line (e.g., "Portfolio Contact: {{subject}}")
   - Design the email body using the available variables:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
4. Save the template
5. Note the Template ID (e.g., "template_xyz789") - you'll need this later

### 4. Get Your API Key

1. Go to the "Account" tab
2. Click on "API Keys"
3. Copy your Public Key (e.g., "user_AbCdEfG123456")

### 5. Update Your Code

Open `src/components/Contact.tsx` and update the following values:

```javascript
// EmailJS configuration
const serviceId = 'YOUR_EMAILJS_SERVICE_ID';  // Replace with your actual Service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your actual Template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';  // Replace with your actual Public Key
```

Replace these placeholder values with the actual values you noted in the previous steps.

### 6. Test the Form

1. Run your website locally or deploy it
2. Fill out the contact form with test information
3. Click "Send Message"
4. Check your email (sahnayan2061@gmail.com) to ensure you receive the test message

## Troubleshooting

If the contact form doesn't work:

1. Check the browser console for any errors
2. Verify that you've entered the correct Service ID, Template ID, and Public Key
3. Make sure your EmailJS account is active and within the free tier limits
4. Check that your template has the correct variables ({{from_name}}, {{from_email}}, {{subject}}, {{message}})

## Security Considerations

- EmailJS Public Key: This key is designed to be used in client-side code and is safe to include in your repository
- Your email credentials: These remain secure as they're stored within the EmailJS service, not in your code
- Spam protection: EmailJS provides basic spam protection, but consider adding reCAPTCHA for additional security if needed

For more information, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 