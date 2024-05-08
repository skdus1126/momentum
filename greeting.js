const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const WhatsYourName=document.querySelector("#question");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    //기본 submit 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    WhatsYourName.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();//하나의 인자, form 안에 있는 input에 입력한 값
}

function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`Hello ${username}`;
    //비어있는 h1에 요소추가 
    style="position: relative; left: 40px; font-weight: 700; font-size: 3.5em;"
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //hidden이라는 클래스 없앰
}

loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    WhatsYourName.classList.remove(HIDDEN_CLASSNAME);
}else{
    paintGreetings();//local에 저장된 유저네임 받음
}
