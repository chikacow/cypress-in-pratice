#How to clone and use this???

cd my-app

install some necessary react adn cypress packages, or not if not required

just remember to cd into my-app

anyway, this is a ReactJS project, don't forget that

for component testing, just do as usual

for e2e testing, don't forget to run both cypress app and react app with
- npx cypress open
- npm run dev
(open 2 terminal)

if your react app port is not 5173, change the port in 'my-app/cypress.config.js'

The .jsx and cy.jsx, I mean the test case, is designed to be both success and failed ones. Don't be nervous to see those red test results.

Enjoy!