# Web Scrapper Application

## Architecture

Backend: Node.js and Express for the API server.
Web Scraper: Puppeteer (or alternative) for scraping dynamic web pages.
Scheduler: AWS Lambda with CloudWatch Events.
Deployment: AWS EC2 instance with optional Nginx for reverse proxy.
CI/CD: GitHub Actions for automating deployment on each push to the main branch.

## CI/CD Pipeline

Create a GitHub Actions workflow (.github/workflows/deploy.yml) to automate deployment.
Add repository secrets in GitHub for SSH_PRIVATE_KEY and EC2_HOST.
Push changes to the main branch to trigger the deployment pipeline.

## Scheduler Setup

Create a Lambda function to trigger the scraper via HTTP.
Set up CloudWatch Events to trigger the Lambda function daily.
Monitor using CloudWatch Logs to ensure the scraper is triggered successfully.
