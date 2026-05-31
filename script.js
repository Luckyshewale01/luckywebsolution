function sendOrder() {
  let params = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    type: document.getElementById("type").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_529eh0h", "template_bpes4sj", params)
    .then(function(response) {
      alert("✅ Order sent successfully!");
      document.querySelector("form").reset();
      console.log(response);
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      alert("❌ " + JSON.stringify(error));
    });
}