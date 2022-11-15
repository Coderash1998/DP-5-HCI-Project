# HCI-Project

The project contains 11 HTML, 5 JavaScript, 11 CSS files, and each are in the respective folders
The Index page is the head page, that will allow the user to start the web app

The following Goals have been achieved:
 1. The User can set up the profile from SignUp Page
 2. The User can access the Home page, through LogIn Page
 3. The User can access, the group/people page, where he/she might get the suggestion from the app
 4. Can connect to emeregency page, and according to level of threat, different options can be chosen

All the pages are static and are limited to HTML, CSS, JavaScript and BootStrap.

# Page Descriptions and Functionalities

1. SignUp Page:

This is the first page, which appears, when a user access the link.
It has got 4 fields:
 1. Email - here a email check is done to know, whether a valid mail is entered or not.
 2. Password - here a password check is done, password should be of length 6, password should contain, atleast one numeric value, one capital letter and one special character.
 3. Re-Type Password - here a check is done, whether the entered password is same as the previous field or not.
 4. Phone Number - here a check is done, whehter the entered value is numeric or not and of lenth 10 or not.
 5. There is a checkbox user should click on before moving forward.

2. Login Page:

 The User can switch from SignUp Page, and vice versa. This page assumes that the user has already created an account.
 The mentioned fields are:
  1. Email - here is a check to verify whether the mail is valid or not, and exists or not. The hardcoded value for this is : 'admin@utdallas.edu'
  2. Password - here is a check to verify whether the password is correct or not, and the hardcoded value for this field is: 'Admin@123'

3. Hobbies Page:

 Here user can select the certain, activities which will help the app (if ever we have a backend) to present selection according to user's preferences.
 This page doesn't have a home page, as the user cannot access the homepage, until and unless they have set the preferences.
 Here User can select the activites by clicking on them.
 Next button at bottom right will guide the user to next page.
 
4. Expertise Page:

 Here the user can select their 2nd preference. This page understands what the user can provide back to world in terms of knowledge and experiece.
 All the fields can be selected, and the sub-button ,'edit', allows user to further describe their expertise.
 Under the edit button, a modal will apear, where the user can enter the presented fields.
 This page has no home button as this is still a part of setting up the profile.
 The page has got previous button to go back to hobbies page and next to go to next Profile page.
 
5. Profile Page

 As the name suggests, it allows the user to set their basic profile.
 
 Profile page has two roles:
  1. When setting up the profile.
  
   While the person signs up for the first time, they have to follow from SignUp Page, Hobbies Page, Expertise Page and then Profile Page.
   At this time the user enters the basic details such as Name, Age, City and State of residence. There is only submit button.
   After clicking on the submit button the user profile and preferences are set. Now the user moves to Home Page.
   
  2. After setting up the profile.

   There may be situations, when the person may move to a different city and different location. So they can go to the profile page from the dropdown at top right corner of any page after signing in. Select the profile and reach back to profile page.
   Now Profile page will have Submit and Reset button.
   If the user wants to only change the city and state, they can, enter details of this field and press submit. 
   Reset button will allow the user to again reset their preferences(Hobbies -> Expertise -> Profile), but they cannot change their name anymore.
   
6. Home Page

 Home Page is the page, where a user will get to upon accessing his/her/other account. This page, also has a brief summary about the various feature of the application, which will guide the user.
 From here all the pages will have the same navigation bar, except the emeregency page.
 
 Navigation Bar
  The general Nav Bar, has got 'Home', 'Groups', 'People', 'Friends', 'Emeregecy' and the drop down at top right corner, which has features to 'Log Out' and 'Profile' to visit profile page.
  
7. Groups Page

 This page suggests user, different groups present around their locality, as per their selected preferences.
 Each dialog box has 'View Group', which upon clicking gives the general information about the group and also the ability to message the group admin, 'request' to join and 'cancel' to come out of the information placard.
 Here the groups can be filtered on the basis of 'last active', 'most members', 'newly created' and 'alphabetical' order. 
 Search also gives us the ability to search groups, but this is not active field.
 
8. People

  This page suggests user, different people present around their locality, as per their selected preferences.
 Each dialog box has 'View Group', which upon clicking gives the general information about the group and also the ability to message the group admin, 'request' to join and 'cancel' to come out of the information placard.
 Here the groups can be filtered on the basis of 'last active', 'most members', 'newly created' and 'alphabetical' order. 
 Search also gives us the ability to search groups, but this is not active field.
 It is just the as same as groups page, just suggesting individuals on the group too.
 
9. Emergency Page

 This is a critical page, and the button for this page keeps on blinking on the Nav Bar on each each page.
 This page has got 3 placards.
 Each placard is to adress different issues that may be faced by the users, according to its severity.
 The First placard, 'Call Friends', which has call option. Upon clicking the 'Call' button, a emergency messages is sent to all people who have been selected by the user as trusted people. The message will not only appear on the web app of other person, but will also notify the other person via sms.
 
 The Second placard, 'Call Communities', is for some cetain severe emergencies. It also has got the call function. Upon clicking the 'Call' button the local communities, like NGOs, homegroups will be notified, about the person, their phone number and location. They will resolve issues where 911 cannot help much.
 
 The Third placard, 'Call Authorities' which also has got call option, is for 911. Here the user may think, they would prefer to call 911, but this option will help to send all the details about the user to 911 like location, contact number and etc, incase the user is unable to speak or servierly facing health issue.
 
 This page has got only the Home button.
 
 10. Friends Page

 This page shows new friend request from other people and also the user's friends list. The user can accept or reject the friend requests, view the profile of the people, send messages and also see the match percentage.
 
 The friends list shows the users friends. Each of the friend's placard has the information about common friends, interests and an "Add to Emergency Contacts" button where the user can add the emergency contacts from the friends list.

#Flow
##Task - 1

 Here the user can either SignUp or LogIn.
 
 If the user SignUp for the first time then,
  1. They go to the SignUp.html page, fill all the fields accroding to the defined rules, check the checkbox and Signs In.
  2. Then here they reach the Hobbies.html. Here they selected the hobbies they really like or wanna pursue from now. This page is for setting profile preference of the user. From here they can only click next and go forward.
  3. From Hobbies.html, the user reaches Expertise.html. Here the user, selects the field in which they are experienced, this also happens to be a preference page. From here the user can go to previous page to reset the Hobbes.html prefereces or go forward to Profile.html Page.
  4. At this Profile.html, the user can set his/her/other name, age, location and finally set their profile. From here also we can either go back to reset the prefereces or click submit.
  5. After clicking Submit, the first task at hand is done. We reach Home.html.

##Task - 2

 Here the user can access emergency page.
 
 1. Emeregecy.html page can reached from any page, other than Hobbies.html, Expertise.html and Profile.html. This page can be access from ProfileView.html. That is after first setup of profile, within app, user can access this page from any page.
 2. At Emergency. according to the order of emeregecy, the user can selected the provided option. On selecting any of the options, our app is expected to send emergency message, with location, number and user's details. Because our project is limited to only static pages, a sent affirmations with what all has been sent will appear on scree.

##Task - 3

 Here the user can access People.html and Groups.html.
 
 1. 
 
   

 
