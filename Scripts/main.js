// initial variable for toggle
const navToggle = document.getElementById('nav-toggle');
let isNavExpanded = navToggle.getAttribute('aria-expanded') === 'true';

//function to toggle visibility
const toggleVisibility = () => {
    isNavExpanded = !isNavExpanded;
    navToggle.setAttribute('aria-expanded', isNavExpanded);
};

navToggle.addEventListener('click', toggleVisibility);