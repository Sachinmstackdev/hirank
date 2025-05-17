# Form Integration with Supabase

This project includes multiple forms that interact with a Supabase backend:

## 1. Lead Magnet Forms

Located in `components/lead-magnet/`, these forms collect lead information and store it in the `leads` table.

### Components:

- `LeadMagnetForm.tsx`: The core form component used by different presentations
- `DesktopExitIntent.tsx`: Displays as a popup when users try to leave the page (desktop only)
- `MobileSlideIn.tsx`: Slides in from the bottom on mobile devices after 20 seconds
- `LeadMagnet.tsx`: Parent component that combines both presentation types

### Features:

- Collects name, email, and optionally website URL
- Records the lead source for analytics
- Stores data in the Supabase `leads` table
- Shows success message after submission

## 2. Contact Form

Located in `components/contact/ContactForm.tsx`, this form collects user messages and stores them in the `contact_messages` table.

### Implementation:

- Uses a server action for form submission (`app/actions/contact.ts`)
- Integrates with Supabase using the `submitContactForm` helper
- Provides error handling and success feedback

## Database Schema

The forms use three different tables in Supabase:

1. `leads` table - For lead magnet submissions
   - `id`: UUID primary key
   - `name`: TEXT (required)
   - `email`: TEXT (required)
   - `website`: TEXT (optional)
   - `source`: TEXT
   - `notes`: TEXT
   - `created_at`: TIMESTAMP

2. `contact_messages` table - For contact form submissions
   - `id`: UUID primary key
   - `fullname`: TEXT (required)
   - `email`: TEXT (required)
   - `subject`: TEXT
   - `massage`: TEXT
   - `created_at`: TIMESTAMP

3. `newsletter_subscribers` table - For newsletter signups
   - `id`: UUID primary key
   - `email`: TEXT (required)
   - `source`: TEXT
   - `created_at`: TIMESTAMP

## Setup Instructions

1. Set up a Supabase project
2. Create the required tables using the SQL in `scripts/create-supabase-tables.sql`
3. Add your Supabase credentials to `.env.local`
4. Refer to `docs/SUPABASE-CONNECTION.md` for detailed setup instructions

## Error Handling

Both form types implement consistent error handling:
- Client-side validation ensures required fields are filled
- Server-side errors are caught and displayed to users
- Connection timeouts are handled gracefully

## Security

- Row Level Security (RLS) is enabled for all tables
- Anonymous users can only insert data, not read or modify it
- Only authenticated users can view the submitted data

## Testing

You can test the forms by:
1. Starting the development server (`npm run dev`)
2. Testing the lead magnet forms by:
   - Trying to leave the page (for desktop exit intent)
   - Waiting 20 seconds on mobile (for mobile slide-in)
3. Testing the contact form on the contact page
4. Verifying data insertion in the Supabase dashboard 