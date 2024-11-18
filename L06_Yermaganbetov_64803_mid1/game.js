document.addEventListener("DOMContentLoaded", () => {
    const newGameButton = document.getElementById("newGameButton");
    const numbersContainer = document.getElementById("numbersContainer");
    const gameResult = document.getElementById("gameResult");

    const userID = 79162; // Replace with your actual ID
    const isEvenID = userID % 2 === 0;

    // Function to generate a random number in range [1, max)
    const getRandomNumber = (max) => Math.floor(Math.random() * (max - 1)) + 1;

    // Function to draw two numbers and update the UI
    const drawNumbers = () => {
        const max = parseInt(userID.toString().slice(1), 10); // n3n2n1n0
        const num1 = getRandomNumber(max);
        let num2;
        do {
            num2 = getRandomNumber(max);
        } while (num1 === num2); // Ensure numbers are different

        // Update numbers in the UI
        numbersContainer.innerHTML = `
            <button class="numberButton">${num1}</button>
            <button id="newGameButton">New Game</button>
            <button class="numberButton">${num2}</button>
        `;
        attachButtonListeners(num1, num2);
    };

    // Function to attach listeners to the buttons
    const attachButtonListeners = (num1, num2) => {
        const buttons = document.querySelectorAll(".numberButton");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const chosenNumber = parseInt(button.textContent, 10);
                const result = determineResult(chosenNumber, num1, num2);
                gameResult.textContent = `result = ${result}`;
                drawNumbers(); // Draw new numbers immediately
            });
        });
    };

    // Function to determine the result based on the chosen number
    const determineResult = (chosen, num1, num2) => {
        const smaller = Math.min(num1, num2);
        const larger = Math.max(num1, num2);

        if (isEvenID) {
            return chosen === smaller ? "Win" : "Loss";
        } else {
            return chosen === larger ? "Win" : "Loss";
        }
    };

    // Start the game when "New Game" is clicked
    newGameButton.addEventListener("click", drawNumbers);
});