# Cypress Test Automation

# Description
This project is a test automation framework using Cypress. It includes automated tests for various user functionalities, ensuring smooth and efficient validation of key features. Test execution reports are generated for analysis.


# Features
-Automated testing of:

1.User Registration

2.Login

3.Forgot Password

4.Account Creation (Saving & Current Accounts)

5.Contact Us Form

6.Bill Payment


- Mochawesome for generating detailed test reports.
- Data-driven testing using JSON files.
- CI/CD Integration: Tests are executed using GitHub Actions on every push to automate the testing process.
- Cross-Browser Testing: Test execution is carried out concurrently in Chrome, Edge, and Firefox to ensure compatibility and performance.

# Prerequisites
- Install Node.js and npm (Node Package Manager)
- Install Cypress
- Install Mochawesome for test reporting


# Steps to Run
1. Clone the Repository - git clone <repository_url>
cd <project_folder>
2. Install Dependencies- npm install
3. Run Tests in Cypress Test Runner- npx cypress open
4. Run Tests in Headless Mode (All Browsers)- npx cypress run --browser chrome
npx cypress run --browser edge
npx cypress run --browser firefox
5. Execute Tests in Parallel Across Browsers- npm run test:parallel


# Test Results
- The reports/browserfoldername/videos folder contains recordings of test executions.![Image Alt Text](C:\Users\Aswat\cypress_project_Para _2025\test-results\video_results.png)
- The reports/browserfoldername/index.html contains html test report.
- The reports/screenshots folder stores screenshots captured during test executions.
- Headless Report

# Run Tests via GitHub Actions (CI/CD)
- Tests run automatically via GitHub Actions as part of the CI/CD pipeline.
- Tests are executed concurrently in Chrome, Edge, and Firefox for broader browser compatibility.
- View the test results under GitHub Actions > Workflows in the repository.