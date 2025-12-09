function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if (!height || !weight || height <= 0 || weight <= 0) {
        result.innerHTML = `<p class="text-red-500">Please enter valid values</p>`;
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let category = '';
    let colorClass = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = 'text-blue-500';
    } else if (bmi < 25) {
        category = 'Normal weight';
        colorClass = 'text-green-500';
    } else if (bmi < 30) {
        category = 'Overweight';
        colorClass = 'text-yellow-500';
    } else {
        category = 'Obese';
        colorClass = 'text-red-500';
    }

    result.innerHTML = `
        <p>Your BMI:</p>
        <p class="text-4xl font-extrabold ${colorClass}">${bmi.toFixed(1)}</p>
        <p class="${colorClass} font-semibold">${category}</p>
    `;
}
