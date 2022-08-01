async function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
const form = document.getElementById('form-login');

const payload = new FormData(form);

console.log(payload.values());
// var response = await fetch('http://3.109.88.105:5000/upload_login', {
//         method: 'POST',
//         body: payload,
//         // headers: {'Access-Control-Allow-Origin':'*'}
//     })
//     var res=await response.text()
//     // window.alert(res);
//     alert(res);
//     if (res =="login success") { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         // let json = await response.text();
//         // console.log(json);
//         form.submit();
//     } else if(res == "fail"){
//         alert("invalid credentials");
//     }
//     else {
//         alert("failed to upload article");
//     }
if(username=="theleafletlaw@gmail.com" && password=="TLConsti1st@#2022")
{
    document.getElementById("form-login").submit();
}
else
{
    alert("invalid credentials");
}


}
/*
const form = document.getElementById('form-login');
form.addEventListener('submit', async function (e) {
    const payload = new FormData(form);

    var response = await fetch('http://3.109.88.105:5000/uploadPost', {
        method: 'POST',
        body: payload,
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.text();
        console.log(json)
        alert("article uploaded");
    } else {
        alert("failed to upload article");
    }
});*/