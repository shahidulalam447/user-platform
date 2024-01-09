function calculateAge() {
    const birthDateInput = document.getElementById('birthDate');
    const resultContainer = document.getElementById('age-result');
    
    // Validate birthdate input
    const birthDate = new Date(birthDateInput.value);
    if (isNaN(birthDate.getTime())) {
        resultContainer.style.color = 'red';
        resultContainer.textContent = 'Please enter a valid birthdate.';
        return;
    }

    // Calculate age
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);

    // Extract years, months, and days
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    // Display result
    resultContainer.style.color = 'green';
    resultContainer.textContent = `Your age is ${years} Year, ${months} Month, and ${days} Day.`;
}

