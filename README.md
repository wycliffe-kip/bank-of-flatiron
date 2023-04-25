# Bank of Flatiron

Name: Wycliffe Chepchieng


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Deliverables

Data is fetched from db.json using GET requiest in the TransactionPage component. Fetched is placed within useEffect and data is fetched only once thus no inclusion of dependency. Thus, when the application is started using npm start, all transactions are rendered.

In the TransactionPage, useState is constructed and set to an empty array so that the data that is returned after fetch request can be passed down to the TransactionList component. 

In TransactionList, destructure prop, and map through the transactions where a new array is returned and saved into the TransactionCard component. 

### Form 
This code defines a NewTransactionForm component that allows the user to input data for a new transaction and send it to the API endpoint. Here are some additional comments:

React and useState are imported.
The NewTransactionForm component receives a addTransaction function as a prop from its parent component.
useState is used to define state variables for the transaction data (fetchedData).
onSubmit is a function that sends the new transaction data to the API and adds it to the list of transactions using addTransaction.
handleChange is a function that updates the fetchedData state variable as the user inputs data.
The NewTransactionForm component renders a form with inputs for date, description, category, and amount.
The onSubmit function is called when the user clicks the "Add Transaction" button.
The NewTransactionForm component is exported as the default export.


## TransactionLIst
This component receives a prop called transactionSearch, which is an array of transactions that match the user's search query. For each transaction in the transactionSearch array, the component renders a TransactionCard component, passing the transaction object as a prop. The key prop is used to uniquely identify each TransactionCard component.


## Search

The code defines a Search component that renders an input field for searching transactions by category. The component expects a search prop that represents the current search query, and a setSearch prop that is a callback function used to update the search query. The component renders a label and an input field, with the input's value set to the search prop. Whenever the input field changes, the setSearch function is called with the new value of the input field. The component is then exported so it can be used in other files.
