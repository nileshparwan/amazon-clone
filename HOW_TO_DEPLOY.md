Amazon clone

1. installation
   React: npm create-react-app
   npm install @material-ui/core
   firebase globally =>
   npm i -g firebase-tools
   npm i firebase
   react-router-dom
   npm install @stripe/react-stripe-js @stripe/stripe-js
   axios
   moment

2. add firebase config in config file
   open firebase > project setting
   scroll down the page and click on config
   copy and paste code in editor.

3. user authentication using firefox
   open firebase > authentication
   click on sign-in method
   click on email and password and enabled.
   Then in your project terminal, do npm i firebase.

4. deploy
   run the following code in your terminal
   firebase login
   firebase init
   select
   hosting
   use an existing project
   public directory ? => build
   Configure as a single-page app (rewrite all urls to /index.html): y
   npm run build
   firebase deploy

Link: https://fir-82e13.web.app/ 5. checkout payment
day4
stripe functionality
checkout page(payment page)
cloud function to process stripe payment.

    1) install stripe

    2) create a stripe account
    	Go to Get your test api keys or (
    										Go to:
    										Developers > api keys
    									)

6.  setting up cloud function

    1.  run this command in your terminal
        firebase init 1. Are you ready to proceed: Y 2. select functions: configure and deploy cloud functions 3. what language would you like to use to write clound functions?
        select your language: {javascript or typescript}
        (select js) 4. do you want to use ESlint to catch bugs: Y 5. do you want to install depencies with npm now? Y

    2.  a function folder will be generated automatically
        this folder is a complete backend folder.

            [IMPORTANT!] when you do npm i now,
            			 make sure that you are inside the function folder.

    3.  build an express app and host in a cloud function. (inside of function folder)
        move to function > index
        and do an
        npm install express
        npm install cors
        npm install stripe

    4.  after setting up the express server, run the following command
        firebase emulators:start => this will spin up an express server

            Now in the log there shpuld be something like that: (+  functions[api]: http function initialized (http://localhost:5001/fir-82e13/us-central1/api). )

            This is an api endpoint

    (\*\*The only way to make that a full payment is to switch from using the test keys to the real keys )

    (** FOR THE CARD DETAILS TYPE: 42424242424242424242 untill it reaches the end of the line (only 4 and 2) **) 5. implement firestore
    Go to firebase > cloud firestore > create DB > choose Test mode > then next next next

7.  Re deploy after making changes
    go to terminal(backend function(folder) terminal) and type in the following

    1. firebase deploy --only functions
            if it fails, go to firebase and update your plan to blaze(just add your card details, it does not cut money)
            scroll down change spark to blaze and follow the steps
    2. 
