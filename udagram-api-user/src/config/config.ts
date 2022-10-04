export const config = {
  'username': process.env.FWD_POSTGRES_USERNAME,
  'password': process.env.FWD_POSTGRES_PASSWORD,
  'database': process.env.FWD_POSTGRES_DB,
  'host': process.env.FWD_POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.FWD_AWS_REGION,
  'aws_profile': process.env.FWD_AWS_PROFILE,
  'aws_media_bucket': process.env.FWD_AWS_BUCKET,
  'url': process.env.FWD_URL,
  'jwt': {
    'secret': process.env.FWD_JWT_SECRET,
  },
};
