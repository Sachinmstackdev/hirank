-- Create the leads table with optional website field
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT, -- Optional field
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

-- Create the newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
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

-- Create the contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fullname TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  massage TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting data
CREATE POLICY "Allow anonymous insert access" ON contact_messages
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy for select access (for authenticated users only)
CREATE POLICY "Allow authenticated select access" ON contact_messages
  FOR SELECT TO authenticated
  USING (true);

-- If the leads table already exists, modify the website column to be optional
DO $$
BEGIN
  IF EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_name = 'leads' AND column_name = 'website' AND is_nullable = 'NO'
  ) THEN
    ALTER TABLE leads ALTER COLUMN website DROP NOT NULL;
  END IF;
END$$; 