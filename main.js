const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

buttons.forEach((buttons) => {
	buttons.addEventListener('click', (e) => {
		switch (buttons.innerHTML) {
			case 'C':
				output.innerHTML = '';
				break;
			case '←':
				if (output.innerHTML != '') {
					output.innerHTML = output.innerHTML.slice(0, -1);
				}
				break;

			case '=':
				try {
					output.innerHTML = eval(output.innerHTML);
				} catch (error) {
					output.innerHTML = 'Error!';
				}
				break;
			default:
				output.innerHTML += buttons.innerHTML;
				break;
		}
	});
});
