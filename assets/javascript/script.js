document.addEventListener("DOMContentLoaded", function () {
   const out = document.getElementById("search-output");
   if (out) {
      out.textContent = "hello world";
   

      fetch("{{ '/search.json' | relative_url }}")


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
