const form = document.getElementsByClassName("login-form")[0]
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log([...form.elements].some(el=>el.value===""))
})