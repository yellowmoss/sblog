document.addEventListener("DOMContentLoaded", function () {
   const out = document.getElementById("search-output");
   if (out) {
      //fetch("https://yellowmoss.github.io/sblog/search.txt")
      fetch("search.txt")
      .then(response => {
         if (!response.ok) throw new Error('Network response was not ok');
         return response.text();
      })
      .then(text => {
         console.log('File loaded:', text);
         document.getElementById('search-output').textContent = text;
      })
      .catch(err => {
         console.error('Error fetching file:', err);
         document.getElementById('search-output').textContent = 'Failed to load file';
      });
      //.then(response => response.json())
      //.then(data => {
      //   console.log("Search JSON loaded:", data);
      //   out.textContent = JSON.stringify(data, null, 2);
      //})
      //.catch(err => {
      //   console.error("Error loading search.json:", err);
      //});
   }
});
