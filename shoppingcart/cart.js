const shopicon = document.getElementsByClassName('shop-icon')[0];
const loginbtn = document.getElementsByClassName('login-button')[0];
const logincontainer = document.getElementsByClassName('login-container')[0];
const userinfocontainer=document.getElementsByClassName("user-info")[0];


shopicon.addEventListener('click', () => {
    if (logincontainer.style.display === "block" && userinfocontainer.style.display==="block") {
        logincontainer.style.display = "none";
        userinfocontainer.style.display="none";
    } else {
        logincontainer.style.display = "block";
        userinfocontainer.style.display="block";
    }
});