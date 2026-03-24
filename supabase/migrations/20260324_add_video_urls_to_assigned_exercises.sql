-- Add video_urls column to exercises and plan_template_exercises
ALTER TABLE exercises ADD COLUMN IF NOT EXISTS video_urls TEXT[] DEFAULT '{}';
ALTER TABLE plan_template_exercises ADD COLUMN IF NOT EXISTS video_urls TEXT[] DEFAULT '{}';

-- Populate video_urls from existing video_url
UPDATE exercises 
SET video_urls = ARRAY[video_url] 
WHERE video_url IS NOT NULL AND (video_urls IS NULL OR video_urls = '{}');

UPDATE plan_template_exercises 
SET video_urls = ARRAY[video_url] 
WHERE video_url IS NOT NULL AND (video_urls IS NULL OR video_urls = '{}');
