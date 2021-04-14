# for BuldingNavBar 

i created dynamic navbar by Creating function (bulidNavbar)
 1- looping through sections
 2- creating navLink for each section 
 3- each navLink have eventlistner to move to its section  

# adding active styles to navLinks 
 i created a function (activeNav)
 1- try to match each navLink with Its section
 2- then add a class to the navLink (selectedNav)

 # scrolling to matching section 
 created 2 functions(sectionVP - toggleActiveClass)
 1- the first function return true if the section in the viewport 
 2- the second section loop through sections and pass the first section as a param , if its value true its add class (your-active-class)