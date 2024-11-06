// Set different colors for each box
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

// Apply colors to each box
colors.forEach((color, index) => {
    document.getElementById(`box${index + 1}`).style.backgroundColor = color;
});
