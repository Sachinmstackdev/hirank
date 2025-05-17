# Supabase Setup for Lead Magnet Forms

This document provides instructions on how to set up your Supabase database to work with the lead magnet forms in this project.

## Prerequisites

1. A Supabase account (create one at [supabase.com](https://supabase.com))
2. A Supabase project created for this application

## Database Setup

### 1. Create the Leads Table

In your Supabase dashboard, navigate to the SQL Editor and run the following SQL to create the leads table:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  source TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add a unique constraint on email to prevent duplicates
  CONSTRAINT unique_email_per_source UNIQUE (email, source)
);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting data
CREATE POLICY "Allow anonymous insert access" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy for select access (for authenticated users only)
CREATE POLICY "Allow authenticated select access" ON leads
  FOR SELECT TO authenticated
  USING (true);
```

### 2. Create the Newsletter Subscribers Table

Run the following SQL to create the newsletter subscribers table:

```sql
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting data
CREATE POLICY "Allow anonymous insert access" ON newsletter_subscribers
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy for select access (for authenticated users only)
CREATE POLICY "Allow authenticated select access" ON newsletter_subscribers
  FOR SELECT TO authenticated
  USING (true);
```

## Environment Variables

Add the following variables to your `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under "API".

## Testing the Integration

1. Fill out and submit one of the lead magnet forms in the app
2. Check the Supabase "Table Editor" for the `leads` table to verify that the data was inserted correctly
3. Try the newsletter form on the blog page
4. Check the Supabase "Table Editor" for the `newsletter_subscribers` table to verify that the data was inserted correctly

## Security Considerations

1. Row Level Security (RLS) is enabled on both tables
2. Anonymous users can only insert data (they cannot read or modify existing data)
3. Only authenticated users (via the Supabase dashboard or authenticated app sessions) can view the submitted data

## Recommended Next Steps

1. Set up email notifications using Supabase Edge Functions or webhooks to get alerted about new leads
2. Create an admin dashboard to view and manage leads
3. Implement a CSV export feature for your leads
4. Set up analytics to track conversion rates from different sources 