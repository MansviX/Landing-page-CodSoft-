// Function to scroll to a section smoothly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50,  // Offset for navbar
        behavior: 'smooth'
    });
}
