
# 📧 EmailJS Setup Guide - Complete Contact Form Integration

## 🚀 Quick Setup Steps

### 1. **Create EmailJS Account**
- Go to **https://www.emailjs.com/** 
- Sign up for a free account
- Verify your email address

### 2. **Add Email Service**
- Click **"Email Services"** in dashboard
- Click **"Add New Service"**
- Choose **"Gmail"** (recommended)
- Follow authentication steps to connect your Gmail
- **Copy the Service ID** (e.g., `service_abc123`)

### 3. **Create Email Template**
- Click **"Email Templates"** in dashboard
- Click **"Create New Template"**
- Use this template:

**Subject:**
```
New Portfolio Contact: {{from_name}}
```

**Content:**
```
You received a new message from your portfolio website!

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from your portfolio contact form
Reply directly to this email to respond.
```

- **Save** and copy the **Template ID** (e.g., `template_xyz789`)

### 4. **Get Public Key**
- Go to **Account** → **General**
- Find **"Public Key"** section
- **Copy your Public Key** (e.g., `user_AbCdEf123456`)

### 5. **Update Your Code**
Open `src/components/ContactSection.tsx` and replace these lines:

```javascript
// FIND THESE LINES (around line 121):
const serviceId = 'service_portfolio';        // ← Replace with YOUR Service ID
const templateId = 'template_contact';        // ← Replace with YOUR Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';          // ← Replace with YOUR Public Key
```

**Example of what it should look like:**
```javascript
const serviceId = 'service_abc123';           // ← Your actual Service ID
const templateId = 'template_xyz789';         // ← Your actual Template ID
const publicKey = 'user_AbCdEf123456';        // ← Your actual Public Key
```

## ✅ Testing Your Setup

1. **Save the file** after updating the credentials
2. **Visit your portfolio website**
3. **Scroll to "Get in touch" section**
4. **Fill out and submit the contact form**
5. **Check your Gmail inbox** - you should receive the message!

## 🔧 Troubleshooting

**Problem:** "EmailJS Setup Required" error
- **Solution:** Make sure you replaced ALL THREE values (serviceId, templateId, publicKey)

**Problem:** Form submits but no email received
- **Solution:** 
  - Check your EmailJS dashboard for delivery status
  - Verify template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
  - Check Gmail spam folder

**Problem:** "Failed to send email" error
- **Solution:**
  - Verify your Public Key is correct
  - Check browser console for detailed error messages
  - Ensure EmailJS service is active

## 📊 Free Tier Limits

- **200 emails per month** (free)
- **Upgrade available** for higher limits
- **No credit card required** for basic usage

## 🎯 What Happens After Setup

✅ **Contact form works perfectly**  
✅ **Messages sent to yashkokate0801@gmail.com**  
✅ **Professional email notifications**  
✅ **Automatic form validation**  
✅ **Success/error feedback to visitors**  

## 📝 Template Variables Reference

Use these exact variables in your EmailJS template:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_email}}` - Your email (automatically set)

---

**🚨 IMPORTANT:** After updating the credentials, your contact form will be fully functional and visitors can send you messages directly!
