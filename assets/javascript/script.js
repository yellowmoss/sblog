document.addEventListener("DOMContentLoaded", function () {
    fetch("/search.json")
        .then(response => response.json())
        .then(data => {
            console.log("Search JSON loaded:", data);

            const output = document.getElementById("search-debug-output");
            if (output) {
                output.textContent = JSON.stringify(data, null, 2);
            }
        })
        .catch(err => {
            console.error("Error loading search.json:", err);
        });
});
