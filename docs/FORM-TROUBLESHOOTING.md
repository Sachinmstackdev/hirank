# Form Submission Troubleshooting Guide

If you're encountering issues with form submissions to Supabase, follow this guide to diagnose and fix the problem.

## Common Error: "Failed to submit your information. Please try again."

This general error message indicates that the form submission to Supabase failed. Here are the steps to resolve it:

### 1. Check Environment Variables

Make sure your `.env.local` file has the correct Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

- Get these values from your Supabase dashboard under "Settings" > "API"
- Ensure there are no extra spaces or quotes
- After updating, restart your development server

### 2. Check Browser Console for Error Details

Open your browser's developer tools (F12) and check the console for more specific error messages:

- **Error code 23505**: This indicates a unique constraint violation. Likely you're trying to submit a form with an email that's already in the database.
- **Error code 23502**: This indicates a NOT NULL constraint violation. Some required fields might be missing.
- **Error code 42P01**: This indicates a missing table. Make sure your tables are created correctly.

### 3. Verify Database Table Structure

Check that your database tables match the expected structure:

1. Open your Supabase dashboard
2. Go to "Table Editor"
3. Verify that:
   - The `leads` table exists
   - It has columns for `name`, `email`, `website` (optional), `source`, `notes`
   - The NOT NULL constraints are set correctly

### 4. Check Row Level Security (RLS) Policies

Supabase uses RLS to control access to your data:

1. Go to "Authentication" > "Policies" in your Supabase dashboard
2. Make sure you have an "INSERT" policy for the `leads` table that allows anonymous users
3. The policy should look like:
   ```sql
   CREATE POLICY "Allow anonymous insert access" ON leads
     FOR INSERT TO anon
     WITH CHECK (true);
   ```

### 5. Restart Your Application

Sometimes clearing the cache and restarting can fix issues:

1. Stop your development server
2. Clear your browser cache
3. Restart your development server with `npm run dev`

### 6. Test with Minimal Data

Try submitting a form with minimal data to isolate the issue:

1. Fill in only the required fields
2. Use a new email address that hasn't been submitted before
3. Check if the submission succeeds

### 7. Network Connectivity

Make sure your application can reach the Supabase servers:

1. Check your internet connection
2. Verify that your firewall isn't blocking outgoing connections
3. Try accessing your Supabase URL directly in the browser

## Still Having Issues?

If you're still encountering problems after trying these steps:

1. Look for more detailed error messages in the browser console
2. Check the Supabase logs in your dashboard
3. Try recreating the tables using the SQL script in `scripts/create-supabase-tables.sql`
4. Consider temporarily disabling RLS policies for testing

For more help, refer to the [Supabase documentation](https://supabase.com/docs) or contact support. 