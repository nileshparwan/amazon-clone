Amazon clone

1. installation
	React: npm create-react-app
	icons: Material-ui
	firebase globally => npm i -g firebase-tools
	react-router-dom
	npm i @stripe/stripe-js

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

Link: https://fir-82e13.web.app/
		
5. checkout payment
	day4
		stripe functionality
		checkout page(payment page)
		cloud function to process stripe payment. 

	install stripe 

	create a stripe account
		Go to Get your test api keys or (
											Go to:
											Developers > api keys
										)
		



