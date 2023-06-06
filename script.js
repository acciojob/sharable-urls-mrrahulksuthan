// your code here
document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;

      var queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

      document.getElementById("url").textContent = "https://localhost:8080/" + queryString;
    });