/*
  # Create campaigns table

  1. New Tables
    - `campaigns`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `goal_amount` (numeric)
      - `current_amount` (numeric)
      - `deadline` (timestamptz)
      - `image_url` (text)
      - `category` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `campaigns` table
    - Add policy for public read access
    - Add policy for public insert access
*/

CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  goal_amount numeric NOT NULL CHECK (goal_amount > 0),
  current_amount numeric NOT NULL DEFAULT 0 CHECK (current_amount >= 0),
  deadline timestamptz NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON campaigns
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert access"
  ON campaigns
  FOR INSERT
  TO public
  WITH CHECK (true);