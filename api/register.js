// api/register.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error('Error signing up:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message: 'User registered successfully', user: data.user });
  } catch (error) {
    console.error('Unexpected error during signup:', error);
    return res.status(500).json({ error: 'Unexpected error' });
  }
};