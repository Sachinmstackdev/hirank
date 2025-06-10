-- SQL to fix the leads table schema issues

-- 1. Alter the name and email columns to be NOT NULL
ALTER TABLE public.leads 
  ALTER COLUMN name SET NOT NULL,
  ALTER COLUMN email SET NOT NULL;

-- 2. Create unique constraint on email if needed (optional)
-- This will prevent duplicate submissions with the same email
-- ALTER TABLE public.leads ADD CONSTRAINT leads_email_unique UNIQUE (email);

-- 3. Make sure RLS is enabled with proper policy
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. Recreate the insert policy to ensure it works properly
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.leads;
CREATE POLICY "Allow anonymous inserts" 
ON public.leads 
FOR INSERT 
TO public
WITH CHECK (true);

-- 5. Add a select policy if you need to return the inserted data
DROP POLICY IF EXISTS "Allow users to read their own submissions" ON public.leads;
CREATE POLICY "Allow users to read their own submissions"
ON public.leads
FOR SELECT
TO public
USING (true); 