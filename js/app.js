/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 *
 * 
 * 
 * 
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections =document.querySelectorAll('section');
const navBar =document.querySelector('#navbar__list');

function bulidNavbar() {
    for(let section of sections){
        sectionName = section.getAttribute('data-nav')
    // when i click , it will go to the section
        sectionlink = section.getAttribute('id')
    
        listItem = document.createElement("li")
        listItem.innerHTML = `<a class='menu__link' href='#${sectionlink}'>  ${sectionName}  </a>`
        navBar.append(listItem)
    }
}
bulidNavbar()
section2 = document.querySelector('#section2')
function sectionVP(sec){
const sectionV =sec.getBoundingClientRect();
if(sectionV.bottom <= 700 ){
        if(sectionV.bottom >= 300) {
            return true
        }   
}
}
function toggleActiveClass() {
    for(let section of sections){
        if(sectionVP(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
            } 
        }else{
        section.classList.remove('your-active-class')
        }   
    } 
}
document.addEventListener('scroll',toggleActiveClass)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


