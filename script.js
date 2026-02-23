function sendOrder() {
  let params = {
  name: document.getElementById("name").value,
  mobile: document.getElementById("mobile").value,
  email: document.getElementById("email").value,
  type: document.getElementById("type").value,
  message: document.getElementById("message").value
};


  emailjs.send("service_stfvqva","template_bpes4sj",params)
  .then(()=>{
    alert("✅ Order sent successfully! We will contact you soon.");
    document.querySelector("form").reset();
  });
}

function openPortfolioPage(){
  window.location.href = "portfolio-demo.html";
}
function openBusinessPage(){
  window.location.href = "business-demo.html";
}
function openEcommercePage(){
  window.location.href = "ecommerce-demo.html";
}