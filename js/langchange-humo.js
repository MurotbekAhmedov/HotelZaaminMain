
const select = document.querySelector('select');
const allLang = ['en', 'ru'];
const div = document.querySelectorAll(".select-value");
const divs = document.querySelector(".select-val");
const langTitle = document.querySelectorAll(".replace-title");
let ruLanguage = document.querySelector(".ru-language");
let enLanguage = document.querySelector(".en-language");
let ruLanguageFooter = document.querySelector(".footer-ru-language");
let enLanguageFooter = document.querySelector(".footer-en-language");
let popupName = document.querySelector(".popup__name");
let popupPhone = document.querySelector(".popup__phone");
let popupMessage = document.querySelector(".popup__message");
let formLaw = document.querySelector(".form__law")
let lang ;
div.forEach((item)=>{
  item.addEventListener('click', ()=>{

    lang = item.getAttribute('value');
    location.href = window.location.pathname + '#' + lang;

    location.reload();
   });
})


// перенаправить на url с указанием языка
function changeURLLanguage(arg) {
    let lang = arg.getAttribute('value');
    location.href = window.location.pathname + '#' + lang;
    location.reload();

}

console.log(lang)
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }

    lang = hash;
    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}


changeLanguage();
if(lang == "en"){
    langTitle.forEach((item)=>{
        item.classList.remove("new_title")
    })
    langTitle.forEach((item)=>{
        item.classList.add("new_title")
    })
    // langTitle.classList.add("new_title");
    ruLanguage.classList.remove("order-2");
    ruLanguage.classList.add("order-1");
    enLanguage.classList.remove("order-1");
    enLanguage.classList.add("order-2");
    ruLanguageFooter.classList.remove("order-2");
    ruLanguageFooter.classList.add("order-1");
    enLanguageFooter.classList.remove("order-1");
    enLanguageFooter.classList.add("order-2");
    // formName.placeholder='I.F.O';
    // formPhone.placeholder='Telefon';
    // formMessage.placeholder='Xabar';
    popupName.placeholder='I.F.O';
    popupPhone.placeholder='Telefon';
    popupMessage.placeholder='Xabar';
    // document.getElementById('formName').placeholder='Name';
    // document.getElementById('formPhone').placeholder='Phone';
    // document.getElementById('formMessage').placeholder='Message';
    //  formLaw.classList.add("en-form__law");
}else{
    // formName.placeholder='И.Ф.О';
    // formPhone.placeholder='Телефон';
    // formMessage.placeholder='Сообщение';
    popupName.placeholder='И.Ф.О';
    popupPhone.placeholder='Телефон';
    popupMessage.placeholder='Сообщение';
    // document.getElementById('formName').placeholder='И.Ф.О';
    // document.getElementById('formPhone').placeholder='Телефон';
    // document.getElementById('formMessage').placeholder='Сообщение';
    langTitle.forEach((item)=>{
        item.classList.remove("new_title")
    })
    enLanguage.classList.remove("order-2");
    enLanguage.classList.add("order-1");
    ruLanguage.classList.remove("order-1");
    ruLanguage.classList.add("order-2");
    enLanguageFooter.classList.remove("order-2");
    enLanguageFooter.classList.add("order-1");
    ruLanguageFooter.classList.remove("order-1");
    ruLanguageFooter.classList.add("order-2");
    //  formLaw.classList.remove("en-form__law");
}
console.log(lang)
