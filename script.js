window.addEventListener('load', function() {
    fetch('https://api.ipify.org?format=json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById('ip').textContent = data.ip;
            // call the city API using the IP address
            fetch('https://ipapi.co/' + data.ip + '/json/')
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    document.getElementById('city').textContent = data.city;
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
        .catch(function(error) {
            console.log(error);
        });
});
