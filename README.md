# ClearCart - E-commerce MERN App Project

<!-- **Link to live version - [TopTech](https://e-toptech.herokuapp.com/)** -->

ClearCart is a e-commerce application that allows users to search for products stored in database, add them to shopping cart. App has login system functionality. The guest user is able to browse and search products only. Checkout option is available for registerd users.
<!-- Checkout and payment option is available for registerd users. -->

## UX

The purpose of the the project is to create a e-commerce app for everyone interested in shopping online. Layout is simple and clear. Project is accesible through all modern browsers on both desktop and mobile devices. For build the front-end functionality CSS, HTML and React.js with Bootstrap framework is used and for back-end logic, MongoDb, Node.js and Express.js is used. 
<!-- As it's e-commerce app payments options is available by using Stripe API. -->

#### User Stories

- As a user I want to view application before login- it is achieved by guest users(but the accesibility is limited)
- As a user I want easily search for product - it is achieved by using search bar available on menubar
- As a user I want to find more details about product - after click on selected product user is redirected to page with all details about chosen product
- As a user I want to add product to cart - user is able to add product to cart
- As a user I want to update / delete items from cart - user is able to update and delete items on cart page and can select quantity if required (1 is default value)
<!-- - As a user I want to pay for chosen product - after registration/login user is able to access checkout page
- As a business owner I want to expand my business and increase sales
  - it is achieved by building online presence -->

#### Layout

The layout is simple and consistent through all modern browsers. The project has been designed with a mobile first approach and it is fully responsive across devices. To achieve this Bootstrap 4 components library was used along with custom styles.
Project consist following pages:

- Posts(homepage)
  - page where all products are displayed in form of card with image and short info about specs and price of each product. It container filter based on category and current promotions as banner.
- ViewPosts
  - Page contian all details about selected product - image, description, review chart, review form, price and add to cart button
- UserCart
  - Page allows to review what is in cart - Image thumbnail is displayed along with product name and possibility for user to change quantity or delete item completely.
    Page include total price for all product placed in cart. Buttons allowing user to continue shopping, add address to add new delivery address, checkout button to checkout. When we remove all items cart icon is displayed with short info that cart is empty with available categories of products and user can go back shopping by clicking _Continue Shopping_ button
- Navbar
  - with logo, searchbar, Go to Cart, Profile view and theme Toggle
<!-- - Checkout page (available after user login)
  - Page similar to cart page but the difference is that user can't update any product details. This is summary before payment. Page displays product thumbnail, name, quantity, price and total price. Below that user has payment form to fill in with user details and card details. After payment user is redirected to homepage. -->
- Login
  - Page allows user to login (user get access to checkout page)
- Registration
  - Page allows user to create an account (user get access to login functionality)

## Branches

- **Master** - Basic Structure of the application with static demo data
- **feature/firebase** - Database as firebase and db management using its own functions
- **feature/mongodb** - Database as mongoDB  

<!-- #### Existing Features

- search bar - allows user to search product by keyword. Return all products where search keywords appears
- login/register system - allows user access full app functionality
- logout
- back to top arrow - scrolling to top of page
- flash messages apperars after user login/registration, add/update/delete and purchase product (disappears after 5s)
- user can't access payment page without registration/login
- after adding product to cart small badge with product quantity appears on menubar beside cart icon
- Stripe payment integration
- short product info cards on homepage
- function preventing access restricted page(checkout) without registration/login

#### Features Left to Implement

- add some gallery image on product details page
- create categories (category model has been created and relation to product exist, but there is no views implemented for categories)
- create pagination
- create contact page
- add confirmation email after purchase (currently only flash message appears)
- add filters to search option (currently only search by any keyword is available)
- customers reviews -->

## Technologies used

- **[GitHub](https://github.com/)** - provides hosting for software development version control using Git.
- **[Git](https://git-scm.com/)** - version-control system for tracking changes in source code during software development.
- **[Google Fonts](https://fonts.google.com/)** - library of free licensed fonts, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS ('Lato' font used in this project).
- **[MongoDB](https://www.mongodb.com/)** - MongoDB is a document database with the scalability and flexibility, suitable for use on any application's backend. 
- **[React](https://react.dev/)** - React is a free and open-source front-end JavaScript library for building user interfaces based on components.
- **[Node.js](https://nodejs.org/en)** - Node.js is a cross-platform, open-source JavaScript runtime environment.
- **[JavaScript](https://en.wikipedia.org/wiki/JavaScript)** - used to program the behavior of Web pages.
- **[HTML5](https://en.wikipedia.org/wiki/HTML5)** - standard markup language for creating Web pages.
- **[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)** - used to define styles for Web pages, including the design, layout and variations in display for different devices and screen sizes.
- **[VS Code](https://code.visualstudio.com/)** - code editor redefined and optimized for building and debugging modern web and cloud applications.
- **[Bootstrap 5](https://getbootstrap.com/)** - free and open-source CSS framework directed at responsive, mobile-first front-end web development.
- **[Firebase](https://firebase.google.com/)** - Firebase is an app development platform that helps to build and grow applications. Backed by Google.
- **[ApexCharts](https://apexcharts.com/)** - A modern JavaScript charting library that allows you to build interactive data visualizations with simple API.
- **[Framer Motion](https://www.framer.com/motion/)** - An open source motion library for React, made by Framer.
- **[React Router](https://reactrouter.com/en/main)** - The react-router-dom package contains bindings for using React Router in web applications.


## Testing

### Manual testing

Manual testing was performed by clicking every element on page which can be clicked.

1. Search form

   - Available all the time on menubar
   - Try to submit empty form and verify that an error message about required fields appear 
   - form doesn't have required attribute. After submiting returning page with all available products.
   - Try to submit the form with valid input and verify that a success message appears (after entering keyword user is redirected to results page and the product matches searching criteria are displayed)

2) Login form page

   - Go to Products(homepage) page
   - Click Log in link on navigation bar (user is redirected to login page)
   - Try to submit empty form and verify that an error message about required fields appear(required field message appears)
   - Try to submit the form with valid input and verify that a success message appears (user is redirected to homepage with successful login message)
   - Try to submit the form with invalid input and verify that a error message appears (_Your username or password is incorrect_ message appears)

3. Registration form page

   - Go to Product(homepage) page
   - Click new user Link on login from (user is redirected to registration page)
   - Try to submit empty form and verify that an error message about required fields appear (required field message appears)
   - Try to submit the form with valid input and verify that a success message appears (user is redirected to homepage with success message)
   - Try to submit the form with invalid input and verify that a error message appears (_Unable to register your account_ message appears)
   - Click _Sign In_ under _Create account_ button (user is redirected to home page with success message)

4. Add to cart form

   - Go to Product details page
   - Try to submit empty form and verify that an error message about required fields appear (required message appears)
   - Try to submit the form with valid input and verify that a success message appears (_Item added to your cart. View cart_ message appears)
   - Try to submit the form with invalid input and verify that a error message appears.(field has html5 type _number_ attribute and initial default value 1 preventing entering invalid input)

5. Cart form

   - Go to the Cart page
   - Try to submit empty form and verify that an error message about required fields appear (required message appears)
   - Try to submit the form with valid input and verify that a success message appears (_Cart updated_ message appears)
   - Try to submit the form with invalid input and verify that a error message appears (field has html5 type _number_ attribute preventing entering invalid input and also has initial value number of the specific item, which was selected on _add to cart_ page)
   - Click _Trash_ icon - item is deleted from cart (message appears)
   - Click _Shoppig_ button (user is redirected to products page (homepage))
   - Click _Checkout_ button (user is redirected to checkout page)

<!-- 6. Payment user details/ credit card form

   - Go to Checkout page
   - Try to submit empty form and verify that an error message about required fields appear (required message appears)
   - Try to submit the form with valid input and verify that a success message appears (user is redirected to homepage and message appears)
   - Try to submit the form with invalid input and verify that a error message appears (use different card number cause error message appears)

   All fields in user details form have required attribute. Credit card forms has required attr set to false as there is some issue and payment cannot be successfully proceed.

   For Stripe payment test following details need to be used:

   Card number - 4242424242424242

   CVC - any 3 digit number

   Expiry date - any date in the future -->

6) Scrolling up and down all the pages

   - Project was manually tested in all the major browsers including Google Chrome, Safari and Internet Explorer to confirm compatibility. The tests were conducted in virtual mode using the google developer tools and also physical mobile phones such us: Samsung Galaxy Note 9, Iphone 13, Iphone 13 pro, Samsung s23. App looks consistent and works well on different browsers and screen sizes.

7) Site navigation

   - Click on _Home_ link (redirect to homepage)
   - Click on logo/brand link (redirect to homepage)
   - Click on _Log in_ link (redirect to login page form)
   - Click on _Register_ link (redirect to registration page form)
   - Click on _Cart_ link (redirect to cart page)
   - Click on _Logout_ link (user is logged out)
   - Click on Back to top arrow icon (page is scrolling up)

   All links are working and pointing to correct place.There are no dead links.

8) Products(homepage)
   - Click on selected product card (user is redirected to chosen product on product details page)

## Deployment

The project was developed, committed to git and pushed to GitHub using Visual Studio Code IDE.

<!-- The project was deployed using Heroku as a hosting platform. Static files and media files are stored using AWS S3 storage service. -->

##### Clone in GitHub

1. Open the [ClearCart](https://github.com/ashwinclarence/ClearCart) repository.
2. Click the _Clone or download_ button.
3. In the _clone with HTTPs_ pop-up, click the _copy icon_.
```bash
git clone https://github.com/ashwinclarence/ClearCart.git
```
4. Open git bash in your IDE.
5. Change the current working directory to where you want the cloned directory to be made.
6. Type _git clone_ and paste the URL copied earlier.
7. Press enter.
8. Repository is copied.
