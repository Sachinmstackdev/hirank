# Connecting Your Application with Supabase

This guide will walk you through setting up Supabase for the forms in this project.

## Step 1: Create a Supabase Account

If you don't already have one, sign up for a free Supabase account at [supabase.com](https://supabase.com).

## Step 2: Create a New Project

1. Log in to your Supabase dashboard
2. Click "New Project"
3. Fill in the required details
4. Wait for your project to be created (this might take a few minutes)

## Step 3: Set Up the Database Tables

1. In your Supabase project, go to the "SQL Editor" section
2. Copy and paste the contents of `scripts/create-supabase-tables.sql` from this project
3. Click "Run" to execute the script and create the necessary tables:
   - `leads` table for lead magnet forms
   - `contact_messages` table for the contact form
   - `newsletter_subscribers` table for newsletter signups

## Step 4: Configure Environment Variables

1. In your Supabase project, go to "Settings" > "API"
2. Copy the "Project URL" and "anon public" key
3. Create a `.env.local` file in the root of your project (if it doesn't exist)
4. Add the following environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
```

5. Replace `your_project_url` and `your_anon_public_key` with the values from Supabase

## Step 5: Test the Forms

1. Start your development server (`npm run dev`)
2. Test the lead magnet forms:
   - The desktop exit intent popup (appears when moving cursor outside viewport)
   - The mobile slide-in (appears after 20 seconds on mobile)
3. Test the contact form on the contact page
4. Check your Supabase "Table Editor" to verify that data is being correctly inserted into:
   - The `leads` table for lead magnet submissions
   - The `contact_messages` table for contact form submissions

## Form Implementations

### Lead Magnet Forms
- Located in `components/lead-magnet/`
- Uses `LeadMagnetForm.tsx` as the core component
- Submits data to the `leads` table in Supabase
- The website field is optional

### Contact Form
- Located in `components/contact/ContactForm.tsx`
- Uses server action in `app/actions/contact.ts`
- Submits data to the `contact_messages` table in Supabase

## Troubleshooting

If your forms are not submitting data to Supabase:

1. Check your browser console for errors
2. Verify that your environment variables are set correctly
3. Make sure the Supabase URL and key in `.env.local` match the ones in your Supabase project
4. Ensure that the Row Level Security (RLS) policies are set up correctly for both tables

## Next Steps

- Set up email notifications for new leads and contact form submissions
- Create an admin dashboard to view and manage leads
- Add analytics to track conversions from different sources 