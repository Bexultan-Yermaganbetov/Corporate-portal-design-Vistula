document.addEventListener("DOMContentLoaded", () => {
    const firstSectionBY = document.querySelector("#client-register-sectionBY");
    const secondSectionBY = document.querySelector("#client-data-sectionBY");
    const editButtonSectionBY = document.querySelector("#edit-button-sectionBY");

    const firstInputBY = firstSectionBY.querySelector("#register-inputBY");
    const secondInputBY = secondSectionBY.querySelector("#display-inputBY");
    const firstButtonBY = firstSectionBY.querySelector("#register-buttonBY");
    const secondButtonBY = secondSectionBY.querySelector("button");
    const dynamicEditButtonBY = document.querySelector("#dynamicEditButtonBY");

    secondSectionBY.style.display = "none"; // Initially hides the second section
    editButtonSectionBY.style.display = "none"; // Initially hides the dynamic button section

    firstButtonBY.addEventListener("click", () => {
        if (firstInputBY.value.trim() !== "") {
            secondInputBY.value = firstInputBY.value; 
            dynamicEditButtonBY.textContent = `Edit ${firstInputBY.value}`;
            firstSectionBY.style.display = "none";
            secondSectionBY.style.display = "block";
            editButtonSectionBY.style.display = "block"; // Shows the dynamic button
        } else {
            alert("Please enter valid client data.");
        }
    });

    secondButtonBY.addEventListener("click", () => {
        firstSectionBY.style.display = "block";
        secondSectionBY.style.display = "none";
        editButtonSectionBY.style.display = "none"; // Hides the dynamic button when editing
    });

    dynamicEditButtonBY.addEventListener("click", () => {
        firstSectionBY.style.display = "block";
        secondSectionBY.style.display = "none";
        editButtonSectionBY.style.display = "none";
    });
});
