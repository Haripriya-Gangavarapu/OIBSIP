function convertTemperature() {
	const temperature = document.getElementById('temperature').value;
	const from = document.getElementById('from').value;
	const to = document.getElementById('to').value;
	let result;
	
	switch (from) {
		case 'c':
			switch (to) {
				case 'f':
					result = (temperature * 9/5) + 32;
					break;
				case 'k':
					result = temperature + 273.15;
					break;
				default:
					result = temperature;
			}
			break;
		case 'f':
			switch (to) {
				case 'c':
					result = (temperature - 32) * 5/9;
					break;
				case 'k':
					result = (temperature - 32) * 5/9 + 273.15;
					break;
				default:
					result = temperature;
			}
			break;
		case 'k':
			switch (to) {
				case 'c':
					result = temperature - 273.15;
					break;
				case 'f':
					result = (temperature - 273.15) * 9/5 + 32;
					break;
				default:
					result = temperature;
			}
			break;
	}
	
	document.getElementById('result').innerText = `=${result.toFixed(2)} ${to.toUpperCase()}`;
}

