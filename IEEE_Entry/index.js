//Sameer Choudhary 2106029

//Checking parametrs
function submit() {
    if (document.getElementById('username').value==''){alert('Enter username'); return}
    if (document.getElementById('password').value==''){alert('Enter password'); return}
    else (document.getElementById("login-button").onclick = function(){
        var username = document.getElementById("username").value;
        localStorage.setItem('name', username);
        location.href="home.html";
    });
};
