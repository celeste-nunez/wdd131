const themeSelector = document.querySelector('#mySelect');
// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
    const currentValue = themeSelector.value;
// if the value is dark then:
// add the dark class to the body
    if (currentValue === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = 'mission-dark.png';
    }
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
    else {
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'mission.webp';
    }
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
