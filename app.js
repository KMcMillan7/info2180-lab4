document.getElementById("searchBtn").addEventListener("click", function() {
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            alert("Superheroes:\n" + data);
        })
        .catch(error => {
            console.error('Error fetching superhero data:', error);
            alert('An error occurred while fetching superhero data.');
        });
});
