document.addEventListener("DOMContentLoaded", function () {
   const out = document.getElementById("search-output");
   if (out) {
      fetch("search.json")
      .then(response => response.json())
      .then(data => {
         console.log("Search JSON loaded:", data);
         out.textContent = JSON.stringify(data, null, 2);
      })
      .catch(err => {
         console.error("Error loading search.json:", err);
      });
   }
});
