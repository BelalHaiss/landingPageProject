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

const bulidNavbar = () => {
    for(let section of sections){
        sectionName = section.getAttribute('data-nav')
        listItem = document.createElement("li")
        listItem.innerHTML = `<a class='menu__link'>  ${sectionName}  </a>`
        listItem.addEventListener('click',function () {
            section.scrollIntoView()
        })
        navBar.append(listItem)
    }
}
bulidNavbar()

const activeNav = () => {
    const navItems = document.querySelectorAll('a')
    for(let section of sections) {
        if(section.classList.contains('your-active-class')){
            for(let navItem of navItems) {
                if(navItem.innerText === section.getAttribute('data-nav')){
                    if(!navItem.classList.contains('selectedNav')){
                    navItem.classList.add('selectedNav')
                }
                } else{
                    navItem.classList.remove('selectedNav')
                }
            }
        }
    }
}

    
const sectionVP = (sec) => {
const sectionV =sec.getBoundingClientRect();
if(sectionV.bottom <= 700 ){
        if(sectionV.bottom >= 300) {
            return true
        }   
}
}

const toggleActiveClass = ()=> {
    for(let section of sections){
        if(sectionVP(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
                activeNav()
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


