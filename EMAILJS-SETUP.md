# EmailJS Setup Guide

## Quick Setup Steps

1. **Sign up at EmailJS**: Go to https://www.emailjs.com/ and create a free account

2. **Create an Email Service**:
   - Go to Email Services
   - Add your email provider (Gmail recommended)
   - Note down the **Service ID** (replace `service_portfolio`)

3. **Create an Email Template**:
   - Go to Email Templates
   - Create new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (yashkokate0801@gmail.com)
   - Note down the **Template ID** (replace `template_contact`)

4. **Get Public Key**:
   - Go to Account → API Keys
   - Copy the **Public Key** (replace `YOUR_PUBLIC_KEY`)

5. **Update ContactSection.tsx**:
   - Replace `service_portfolio` with your Service ID
   - Replace `template_contact` with your Template ID  
   - Replace `YOUR_PUBLIC_KEY` with your Public Key

## Example Template Content

**Subject**: New Contact Form Submission from {{from_name}}

**Body**:
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

## Testing

After setup, test the contact form on your website. You should receive emails at yashkokate0801@gmail.com when someone submits the form.

## Free Tier Limits

- 200 emails per month
- Upgrade available for higher limits

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all IDs and keys are correct
3. Ensure template variables match exactly
4. Check EmailJS dashboard for delivery status