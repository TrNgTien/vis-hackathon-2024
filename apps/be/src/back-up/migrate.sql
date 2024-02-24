DROP TABLE IF EXISTS "Profile" CASCADE ;
DROP TABLE IF EXISTS "User" CASCADE ;
DROP TABLE IF EXISTS "Post" CASCADE ;

CREATE TABLE "Profile" (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ,
  modified_at TIMESTAMPTZ
);

CREATE TABLE "User" (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ,
  modified_at TIMESTAMPTZ,
  username varchar(255),
  password text,
  first_name varchar(255),
  last_name varchar(255),
  profile_id INT,
  CONSTRAINT fk_profile
  FOREIGN KEY(profile_id)
  REFERENCES "Profile" (id)
);

CREATE TABLE "Post" (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ,
  modified_at TIMESTAMPTZ,
  description varchar(255),
  hastag varchar(255),
  category varchar(255),
  rating  NUMERIC (15, 2),
  assetLink text,
  author_id INT,
  CONSTRAINT fk_user
  FOREIGN KEY(author_id)
  REFERENCES "User" (id)
);
