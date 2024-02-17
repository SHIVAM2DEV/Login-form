console.log("javascript initilised sucessfully")
let form = document.getElementById("formfill")
form.addEventListener('submit', function(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let formObj = Object.fromEntries(formData)
    console.log(formObj)
})