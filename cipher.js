function openContent(evt, options) {
    var i, area, tab;
    area = document.getElementsByClassName("area");
    for (i = 0; i < area.length; i++) {
      area[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(options).style.display = "flex";
    document.getElementById(options).style.transition = "all 0.4s";
    evt.currentTarget.className += " active";
  }

const data = document.getElementById("data");
const passwd = document.getElementById("passwd");
const btn = document.getElementById("btn");
const encrypted_text = document.getElementById("encrypted-text");


btn.addEventListener("click", (e) => {
  if(data.value == "" || passwd.value == ""){
    encrypted_text.innerHTML = "Both the fields must be filled to Encrypt."
  }
  const encrypt = CryptoJS.AES.encrypt(data.value, passwd.value);
  // alert("The Encrypted Data is " + encrypt.toString());
  encrypted_text.innerHTML=encrypt.toString();
});


const data2 = document.getElementById("data2");
const passwd2 = document.getElementById("passwd2");
const btn2 = document.getElementById("btn2");
const decrypted_text = document.getElementById("decrypted-text");


btn2.addEventListener("click", (e) => {
  const decrypt = CryptoJS.AES.decrypt(data2.value, passwd2.value);
  // alert("The decrypted message is " + decrypt.toString(CryptoJS.enc.Utf8));
  decrypted_text.innerHTML=decrypt.toString(CryptoJS.enc.Utf8);
});

function copyText(){
  encrypted_text.select();
  encrypted_text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(encrypted_text.value);
  console.log(encrypted_text.value);
}

function copyText2(){
  navigator.clipboard.readText();
}

