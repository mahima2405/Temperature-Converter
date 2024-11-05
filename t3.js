document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    let convertedTemperature;
    let resultUnit;

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        document.getElementById('resultDisplay').innerText = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    // Conversion logic
    switch (unit) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32; // Convert to Fahrenheit
            resultUnit = 'Fahrenheit';
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Convert to Celsius
            resultUnit = 'Celsius';
            break;
        case 'Kelvin':
            convertedTemperature = temperature - 273.15; // Convert to Celsius
            resultUnit = 'Celsius';
            break;
        default:
            document.getElementById('resultDisplay').innerText = 'Invalid unit selected.';
            return;
    }

    // Display result
    document.getElementById('resultDisplay').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
});