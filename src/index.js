const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector(".btn-primary")
  button.addEventListener("click", function(e) {
    fetch("https://randomuser.me/api/")
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
      document.querySelector("#street").innerText = data.results[0].location.street
      const fullname = data.results[0].name.first + data.results[0].name.last
      document.querySelector("#fullname").innerText = fullname
      document.querySelector("#email").innerText = data.results[0].email
      document.querySelector("#city").innerText = data.results[0].location.city
      document.querySelector("#state").innerText = data.results[0].location.state
      document.querySelector("#postcode").innerText = data.results[0].location.postcode
      document.querySelector("#phone").innerText = data.results[0].phone
      document.querySelector("#cell").innerText = data.results[0].cell
      document.querySelector("#date_of_birth").innerText = data.results[0].dob.date
      document.querySelector(".col img").src = data.results[0].picture.thumbnail
  
    })
  })
});
