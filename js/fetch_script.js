fetch('https://ghibliapi.herokuapp.com/people', {
    method: 'get'
})
    .then(function (response) {
        return response.json()
            .then(
                function (data) {
                    let ghibli_data = '';
                    data.forEach(function(value){
                    	
                    		ghibli_data += `
                    		<tr>                    		                   		
                    		<td>${value.name}</td>
                    		<td>${value.age}</td>
                    		<td>${value.eye_color}</td>
                    		<td>${value.gender}</td>
                    		<td>${value.hair_color}</td>                    		                    		
                    		</tr>
                    	`;              	
                  	
                    });
                    
                    document.getElementById("people_table").innerHTML += ghibli_data;
                }
            )
    }).catch(function (err) {
    // Error :(
    console.log('oops!');
});


