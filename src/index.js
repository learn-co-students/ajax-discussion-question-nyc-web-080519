const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector("body > div > div.row.align-items-end > div:nth-child(2) > button")

  button.addEventListener("click", function(e){
    fetch("https://randomuser.me/api/")
    .then( res => res.json())
    .then( function(res){
      let person = res.results[0]
      // debugger
      
      // fullname, email, street, city, state, postcode, phone, cell, DOB
      titleFirstLast = `${person.name.title} ${person.name.first} ${person.name.last}`
      document.querySelector("#fullname").innerText = titleFirstLast
      document.querySelector("#email").innerText = person.email
      document.querySelector("#street").innerText = person.street
      document.querySelector("#city").innerText = person.city
      document.querySelector("#state").innerText = person.state
      document.querySelector("#postcode").innerText = person.postcode
      document.querySelector("#phone").innerText = person.phone
      document.querySelector("#cell").innerText = person.cell
      document.querySelector("#date_of_birth").innerText = person.date_of_birth
    })

  })
});
