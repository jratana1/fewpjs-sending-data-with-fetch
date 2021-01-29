// Add your code here

function  submitData(name, email){ 
    let formData = {
        name: `${name}`,
        email: `${email}`
      };
    
    let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      let body = document.getElementsByTagName("body")
      body[0].append(object.id)
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
      let body = document.getElementsByTagName("body")
      body[0].append(error.message)
    });
}