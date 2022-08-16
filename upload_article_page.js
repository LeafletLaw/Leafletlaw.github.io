
const form = document.getElementById('myform');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const payload = new FormData(form);

    var response = await fetch('http://3.109.88.105:5000/uploadPost', {
        method: 'POST',
        body: payload,
        // headers: {'Access-Control-Allow-Origin':'*'}

    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.text();
        console.log(json)
        alert("article uploaded");
    } else {
        alert("failed to upload article");
    }
});

