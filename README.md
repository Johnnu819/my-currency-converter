# My Currency Converter

## Overview
My Currency Converter is a currency conversion web app built using the React javascrtipt framework. The applications primary purpose will be to allow users to convert amounts from one currency to another using real-time exchange rates. Further functionalitly will allow users to store stocks of currency enabling them to monitor how these stocks are fluctuating in a single currency value. This tool could better help my colleagues to understand how much of changes in stocks are a result of exchange rate movements (revaluation affects), and how much is change in volumes. 

The goal of this project is to design and develop My Currency Converter through an agile, test-driven development process. 

The application should:
- provide up to date exchange rates
- provide exchange rates for all countries of interest
- uses caching to limit unnecessary API calls
- provide a responsive UI

## Design and Prototyping

The design phase followed industry-standard UX/UI principles and practices to ensure a functional and intuitive user interface. Figma was used as the primary prototyping tool due to its collaborative features and ease of iteration. A low-fidelity wireframe was first developed to map out the user journey, including key components of the MVP:
- currency selection dropdowns
- conversion amount input
- conversion results

This served as the foundation for visual discussions and rapid feedback. From the wireframes, a MVP was created to simulate user interactions and finalize the layout and color scheme. Accessibility and responsiveness were prioritised to ensure the app has good user experience. Design iterations will be 1 week sprints, incorporating stakeholder feedback and sprint review findings. Figma should be continuously updated to reflect evolving requirements. By syncing design decisions with development progress, the team can avoided bottlenecks and improved cohesion between UI and functionality. This approach will ensure the product vision remained user-centered while allowing for adaptability throughout the development lifecycle.

## Project management

### Agile Methodology

This project will be carries out in an Agile method with a focus on short, iterative development cycles. The work is divided into three one-week sprints, each designed to deliver functional increments of the product while allowing time for feedback, testing, and refinement. Agile was chosen for its emphasis on adaptability and continuous improvement, which aligns well with individual software projects with evolving scope and feedback.

### Sprint Breakdown
#### Sprint 1: Setup and Infrastructure
- Initialize the project repository and structure
- integrate GitHub Actions for CI
- Create the exchange rates fetching logic with caching
- Verify connectivity to the external API

#### Sprint 2: Core Features
- Build the user interface for currency input and selection
- Implement the conversion logic and connect with exchange rate data
- Introduce basic styling using Bootstrap

### Sprint 3: Testing, and Polish
- Tidy up project and documentation
- Get full coverage of tests
- Explore nice to haves
- Finalize error handling and user feedback
- Refine UI/UX based on initial testing and complete documentation

### Project Management with GitHub Projects
A GitHub Projects (kanban) board has been set-up to track tasks, progress, and priorities across sprints. Columns structure is - To Do, Ready, In Progress, In Review, and Done. Each ticket corresponds to a GitHub Issue, linked with branches and Pull Requests, following the one-feature-per-ticket convention. This ensures transparency and traceability throughout the project.

### Test-Driven Development (TDD)
To ensure code reliability and future extensibility, key logic—such as currency conversion and formatting will be developed using TDD. Tests are written with Jest before implementing the respective functions, enabling quicker debugging, functionality validation, and continuous integration and continuous deployment (CICD). Using Github actions tests will run any time code is pushed to Github - all tests must pass for a pull request to complete. Given this - all dfuture development work must be done in a branch and reviewed before pull requests are merged.

## Requirements Capture
Requirements for the App were gathered using a stakeholder-focused approach. Early-stage input was gathered through informal consultations with potential users to identify core needs—such as ease of use, speed of conversion, offline fallback, and clarity of UI. These conversations informed the initial product backlog. Feedback willl be continuously incorporated during sprint reviews, allowing rapid adjustments to priorities. Each user story is recorded as a GitHub Issue and labeled accordingly (feature, bug, enhancement). These issues are then visible on the GitHub Projects kanban board and roadmap, ensuring traceability and transparency. 

## MVP Development
The MVP was built incrementally as follows:

- Step 1: Fetch Exchange Rates
  
A custom hook (useExchangeRates) was implemented to fetch exchange rates and cache them in localStorage.
- Step 2: UI Development
  
Dropdowns for currency selection and input for the amount were created. A central converter panel (ConverterPanel) tied all elements together.
- Step 3: Conversion Logic
  
Implemented currency conversion logic and rendered the result.


## User and Technical Documentation

### User Documentation

How to Use the App:
- Select the currency you want to convert from.
- Select the currency you want to convert to.
- Enter the amount.
- View the converted amount below.

The app automatically updates exchange rates every 3 hours using caching to avoid unnecessary API requests.

### Technical Documentation
#### Setup: 
- Clone the repository: git clone https://github.com/Johnnu819/my-currency-converter.git
- Navigate to the directory: cd currency-converter-app
- Install dependencies: npm install
- **Run the app**: npm start

Project Structure:

src/
|-- components/
|   |-- ConverterPanel.js
|   |-- CurrencySelector.js
///// more componenets
|-- api/
|   |-- useExchangeRates.js
|-- __tests__/
|   |-- convertButtonTests.js
///// more tests
|-- App.js
|-- index.js

Testing:
- **Run the tests**: npm test
- Tests are located in __tests__/

## Evaluation
### What went well?
My Currency Converter succedeed in meeting the MVP goals within the sprint schedule. Using React hooks such as useState and useEffect provided a clean and modular way to manage state and side effects, particularly for asynchronous API calls. The use of a custom hook (useExchangeRates) helped isolate logic and promote reusability. Implementing caching via localStorage significantly reduced unnecessary API requests and improved performance. The user interface, styled with Bootstrap, is responsive across devices and provides a simple, intuitive user journey. Additionally, version control and branching practices ensured that every feature and bug fix was tied to a GitHub issue and thoroughly reviewed through pull requests.

#### What Could Be Improved?
Although the core functionality is stable, several areas could be refined or refactored for a more complete product. Accessibility was not fully implemented - improving ARIA roles and keyboard navigation would help with this. Currency selectors could also benefit from features like typeahead search or the inclusion of national flags to enhance user experience. The app currently lacks end-to-end testing. Furthermore, while caching is functional, integrating service workers could support offline access.

#### Future Work:
- Implement historical exchange rate graphs using a charting library
- Expand language support for internationalization
- Add user authentication to save currency preferences
- Set up automated deployment to GitHub Pages
