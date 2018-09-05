var module = (function () {
	// Create a request variable and assign a new XMLHttpRequest object to it.
	let request = new XMLHttpRequest();
	let info;

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://randomuser.me/api/?results=16', true);

	request.onreadystatechange = function () {
		// Begin accessing JSON data here
		if(request.readyState === 4 && request.status === 200) {
			info = JSON.parse(request.responseText);
			console.log(info);

			for (let i = 0; i < info.results.length; i++) {
				
				let template = 
				`
				<div class="adressbook__entry">
					<img class="adressbook__data--small" src="${info.results[i].picture.large}" width=70 height=70>
					<div class="adressbook__data">
						<div class="adressbook__name">${info.results[i].name.first + " " + info.results[i].name.last}</div>
						<div class="adressbook__phone">${info.results[i].cell}</div>
					</div>
				</div>
				`;

				const adressbook = document.querySelector(".adressbook__container");
				adressbook.insertAdjacentHTML('beforeend', template);
			}
			
			console.log(info.results.length + ' contacts added')
		}
	}

	// Send request
	request.send();
}());