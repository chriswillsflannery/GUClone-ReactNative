
Please build a very basic version of the customer app.  First, here are a few requirements and parameters:

1)  The app should be built as a native mobile app (i.e., *not* a mobile web app) using React Native and written in JavaScript (not TypeScript or another language that cross-compiles into JS).

2)  The app should build on both iOS and Android — running in the iOS simulator / Android emulator is fine.

3)  You do not need to write tests for your app.  But, if test writing is something that helps your development process, by all means write tests — we would love to see them and you should include any tests in the project repo.

4)  A core part of this assignment is for you to consider how to structure data flows across multiple views.  Although this is a simple app, you should set up the skeleton of the app in a way that would scale for a much larger app.  You can choose any design pattern or library that you think is best to accomplish this (but, really, you should use Redux).

5)  You should set up a GitHub repo to hold your project.

6)  The project repo should include a clear readme that explains to anyone who clones down the project how to build and run it in Xcode and Android Studio, as well as how to troubleshoot common problems.

7)  Don’t worry about the styling of your app.  But, please make sure all content is visible and that the app works on an iPhone 8, iPhone 11 Pro Max, Pixel 2, and Pixel 2 XL.  If you do find yourself motivated to style the app, feel free to do so.

8)  This challenge is intended to be vague and unclear in some respects (that is how the real world is).  You’ll have to make some assumptions as you build out the app — doing so is expected, just please be ready to explain your assumptions to us. 

Basic features and functionality:

1)  The app should have a landing screen, from which the user can choose to sign up, or sign in — choosing either option brings the user to a new view...

2)  On sign up, the user will be required to enter a 10-digit phone number and minimum 6-character password.  A unique phone number may only be used once to sign up for an account.  You can choose to enforce this rule any way you choose.  The user will be brought into the app experience once they sign up.

3)  On sign in, the user will be required to enter a phone number and valid password for an already existing account.  The user will be brought into the app experience once they sign in.

4)  A user should be able to log out, which brings them back to the landing screen.

5)  Fairly up to date test data of the products that Good Uncle sells can be found in JSON form here: https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json  This data refreshes every 10 minutes.

6)  Good Uncle sells 5 types of products: mains (i.e., entrees), sides, snacks, drinks, and condiments.  For this project, you only need to concern yourself with products that are "mains".

7)  The home view of your your app should list every main.

8)  Tapping a main opens a new view that shows the main’s name, description, and price.  This view should have an "add to cart" button that adds the main to the user’s cart and returns the user to the previous view.

9)  The current, up to date subtotal of the user’s cart should be visible on all views once the user logs in.

10)  From anywhere, the user can tap on their cart total, which opens a new view with a cart summary.  From the cart summary a user can remove items from their cart, which updates their subtotal globally.


Common error messages and how to debug:

on iOS emulator:

"No bundle url present"
- npm install
- react-native run-ios

on Android emulator: