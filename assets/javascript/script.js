document.addEventListener("DOMContentLoaded", function () {
   fetch("{{ site.baseurl | absolute_url }}/search.json")

   .then(response => response.json())
   .then(data => {
      console.log("Search JSON loaded:", data);

      const out = document.getElementById("search-output");
      if (out) {
         out.textContent = "hello world";
      }

      if (out) {
         out.textContent = JSON.stringify(data, null, 2);
      }
   })
   .catch(err => {
      console.error("Error loading search.json:", err);
   });
});
