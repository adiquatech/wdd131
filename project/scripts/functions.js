// getdate
const year = document.querySelector("#currentyear");
const todaysDate = new Date();

year.innerHTML = `${todaysDate.getFullYear()}`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last date page was modified ${document.lastModified}`;


// hamburger menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});
