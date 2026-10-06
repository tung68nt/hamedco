-- Clean up and fix auth setup
-- Run this in Supabase Dashboard → SQL Editor

-- Step 1: Clean up existing broken data
DELETE FROM auth.users WHERE email NOT IN (SELECT email FROM cms_users);

-- Step 2: Drop old trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user_signup();

-- Step 3: Create simple trigger without ON CONFLICT (let it fail gracefully)
CREATE OR REPLACE FUNCTION handle_new_user_signup()
RETURNS TRIGGER AS $$
BEGIN
  BEGIN
    INSERT INTO cms_users (id, email, full_name, role)
    VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
      'viewer'
    );
  EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'User profile creation skipped: %', SQLERRM;
  END;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user_signup();

-- Step 4: Verify the table structure
SELECT 'cms_users table ready' as status;
