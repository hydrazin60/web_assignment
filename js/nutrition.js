document.addEventListener('DOMContentLoaded', function() {
    // BMI Calculator
    const bmiForm = document.getElementById('bmi-form');
    const bmiResult = document.getElementById('bmi-result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');

    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (height && weight) {
            const bmi = (weight / (height * height)).toFixed(1);
            bmiValue.textContent = bmi;
            
            let category = '';
            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                category = 'Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                category = 'Overweight';
            } else {
                category = 'Obese';
            }
            
            bmiCategory.textContent = category;
            bmiResult.style.display = 'block';
        }
    });

    // Calorie Calculator
    const calorieForm = document.getElementById('calorie-form');
    const calorieResult = document.getElementById('calorie-result');
    const calorieValue = document.getElementById('calorie-value');

    calorieForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('cal-weight').value);
        const height = parseFloat(document.getElementById('cal-height').value);
        const activity = parseFloat(document.getElementById('activity').value);
        
        if (age && weight && height) {
            let bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }
            
            const calories = Math.round(bmr * activity);
            calorieValue.textContent = calories;
            calorieResult.style.display = 'block';
        }
    });

    // Water Intake Calculator
    const waterForm = document.getElementById('water-form');
    const waterResult = document.getElementById('water-result');
    const waterValue = document.getElementById('water-value');

    waterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const weight = parseFloat(document.getElementById('water-weight').value);
        const activity = parseFloat(document.getElementById('water-activity').value);
        
        if (weight) {
            const water = Math.round((weight * 0.033 + activity * 0.35) * 1000);
            waterValue.textContent = water;
            waterResult.style.display = 'block';
        }
    });
});