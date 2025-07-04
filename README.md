# Static Website Deployment with GitHub Actions & AWS S3

This repository contains a static website project that is automatically deployed to an AWS S3 bucket via GitHub Actions CI/CD pipeline.

## Features

- Automatic deployment triggered on every push to `main` branch  
- Secure AWS credentials management using GitHub Secrets  
- Syncs website files to S3 bucket, excluding `.git` and `.github` folders  
- Uses `aws-actions/configure-aws-credentials` action for authentication  

## How It Works

1. Push your code changes to the `main` branch.  
2. GitHub Actions runs the deployment workflow.  
3. The workflow uses stored secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET_NAME`) for authentication and bucket info.  
4. The static website files are synced to the specified S3 bucket.

## Setup Instructions

To replicate this setup:

1. Create an S3 bucket and configure it for static website hosting.  
2. Add the following secrets to your GitHub repository:  
   - `AWS_ACCESS_KEY_ID`  
   - `AWS_SECRET_ACCESS_KEY`  
   - `S3_BUCKET_NAME`  
3. Update the `.github/workflows/deploy.yml` with your secret names and AWS region.  
4. Push your code to the `main` branch to trigger the deployment.

## Technologies Used

- GitHub Actions  
- AWS S3  
- AWS CLI  
- Git

## License

This project is licensed under the MIT License.

---
