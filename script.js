// Select the display screen and all buttons
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the value assigned to the button
        const value = button.getAttribute('data-val');

        if (value === 'C') {
            // Clear the screen
            screen.value = '';
        } else if (value === 'DEL') {
            // Delete the last character
            screen.value = screen.value.slice(0, -1);
        } else if (value === '=') {
            // Calculate the result
            try {
                if (screen.value) {
                    // Evaluate the mathematical expression
                    let result = eval(screen.value);
                    
                    // Handle numbers getting too long
                    if (!Number.isInteger(result)) {
                        result = result.toFixed(4); // limit to 4 decimal places
                    }
                    screen.value = result;
                }
            } catch (error) {
                // If the user types invalid math (e.g. 5++5)
                screen.value = 'Error';
                setTimeout(() => {
                    screen.value = '';
                }, 1500);
            }
        } else {
            // Append the clicked number/operator to the screen
            if (screen.value === 'Error') {
                screen.value = value; // Reset if previous state was an error
            } else {
                screen.value += value;
            }
        }
    });
});