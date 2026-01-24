# EmailJS Setup Guide

This guide explains how to set up EmailJS for the Neuromancers reach-out page to send emails.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email

## Step 2: Create an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Follow the authentication steps
5. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it something like `"reach_out_form"`
4. Set the **To Email** to: `{{to_email}}` (this will be your organization email)
5. Set the **Subject** to: `New Inquiry from {{from_name}}`
6. In the **HTML** section, paste the content from `EMAIL_TEMPLATE.html` file in the project root
   - This file contains a pre-designed, professional email template
   - All template variables are already configured

### Alternative: Use Simple Template

If you prefer a simple text template instead, use:

```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}
```

7. Click **Save**
8. Copy your **Template ID** (looks like: `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** in the dashboard
2. Find **API Keys** section
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of the project (if it doesn't exist)
2. Add these variables with your values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

3. **Important**: Make sure you replace the placeholder values with your actual IDs

## Step 6: Update the Recipient Email

In `/app/join/page.tsx`, update this line with your actual organization email:

```tsx
const templateParams = {
  to_email: "neuromancers@iitbbs.ac.in", // Change this to your email
  // ... rest of params
};
```

## Step 7: Test the Form

1. Save all changes
2. Restart your development server
3. Go to the reach-out page
4. Fill out the form and submit
5. Check your email inbox for the received message

## Troubleshooting

### "EmailJS configuration is missing"

- Make sure `.env.local` file exists and has all three environment variables
- Restart the development server after adding env variables

### Email not received

- Check your EmailJS dashboard for failed deliveries
- Verify the email template is correctly configured
- Make sure the service is active and authenticated

### CORS Errors

- EmailJS handles CORS, so this shouldn't be an issue
- If you see CORS errors, check your EmailJS account settings

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- Basic email templates
- Unlimited users

For production with higher volume, consider upgrading to a paid plan.
