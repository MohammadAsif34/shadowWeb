const loginbtn = document.querySelector("#loginBtn");
const logindiv = document.querySelector("logindiv");
loginBtn.addEventListener('click', accountLogin);
function accountLogin() {
  const loginPage = document.createElement( "div" );
  div.innerHTML = `
  <div class="loginDiv">
    <form id="formLogin" action="/shadow/web/user/doLogin" method="post">  
        <h1>LOGIN</h1>  <br><br>
        <label for="username">username/email/mobile no. :</label>  
        <input type="text" id="username" name="username" placeholder="username..."><br><br>
        <label for="password">password :</label> 
        <input type="password" id="password" name="password" placeholder="password..."><br><br>
        <input type="checkbox">
        <label for="rememberMe">Remember me</label><br><br>
        <button type="submit">Login</button> 
    </form>
  </div>
  `;
  logindiv.appendChild(loginPage);
}

let file = "json.txt";
fetch(file)
  .then(x=> x.text)
  .then(y=>document.getElementById("demo").innerHTML = y);

  // visible TODO
  function visibleTodo() {
    let  visiblestatus = document.getElementById("todoBox");
    if(visiblestatus.style.display === "none") {
      visiblestatus.style.display = "block";
    } else {
      visiblestatus.style.display = "none";
    }
  }

  //visible SIGN UP
  function signupVisible(){
    let visiblestatus = document.getElementById("signUp");
    if(visiblestatus.style.display === "none") {
      visiblestatus.style.display = "block";
    } else {
      visiblestatus.style.display = "none";
    }
  }