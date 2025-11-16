document.addEventListener("DOMContentLoaded", function () {
   const out = document.getElementById("search-output");
   if (out) {
      //out.textContent += "hello worlllld"
      //out.textContent += "/n"
      //out.textContent += "\n"

      //out.textContent += {{ '/search.json' | relative_url }}
      //out.textContent += {{ '/search.json' | absolute_url }}
      //out.textContent += {{ '/search.json' }}
      //out.textContent += {{ site.baseurl | relative_url }}/search.json
      //out.textContent += {{ site.baseurl | absolute_url }}/search.json
      //out.textContent += {{ site.baseurl }}/search.json
      //out.textContent += {{ site.url | relative_url }}/search.json
      //out.textContent += {{ site.url | absolute_url }}/search.json
      //out.textContent += {{ site.url }}/search.json
      //fetch('{{ "/search.txt" | relative_url }}')
      fetch("https://yellowmoss.github.io/sblog/search.txt")
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
