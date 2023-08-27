import  React from "react";
import ReactDOM from "react-dom";
// Landing Page :
//  * Header Component :
//      --> logo
//      --> search bar  
//      --> login button
//      --> signup button
//  * Body Component :  
//      --> background image
//      --> title
//      --> Resturant Cards
//            -->Image
//            --> Name
//            --> rating
//      --> Location Cards
//  * Footer Component :
//      --> logo
//      --> links
//      --> social media icons
//      --> contact us
//      --> about us
//      --> privacy policy
//      --> terms and conditions
//      --> careers
//      --> help
//      --> faq
//      --> contact us
//      --> email
//      --> phone number
//      --> address
//      --> newsletter

const React = require("react")

//      --> subscribe button
const Header = () => {
    return (
       <div class='header'>
             <div className='logo'>
                    <img src='./images/food_App_Logo.jpg' alt='logo' />
            </div>
            <div className ='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Resturants</li>
                    <li>Locations</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayput = () => {
    return (
        <div class ='app'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayput />);


