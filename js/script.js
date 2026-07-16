const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        entry.target.classList.add("active");
    });

},{
    threshold:0.2
});

sections.forEach(section => {

    section.classList.add("reveal");
    observer.observe(section);

});

/* POPUP */
const messages = [

"I love you", //Inglés
"Je t’aime", //Francés
"Eu te amo", //Portugués
"Ti voglio bene", //Italiano
"Я тебя люблю", //Ruso
"أحبك", //Árabe
"我爱你", //Mandarín
"사랑해", //Coreano
"大好きだよ", //Japonés
"Ich liebe dich", //Alemán
"Ik hou van je", //Neerlandés
"Jag älskar dig", //Sueco
"मैं तुमसे प्यार करती हूँ", //Hindi
"Σ’ αγαπώ", //Griego
"Jeg er glad i deg", //Noruego
"Anasü pia", //Wayuu
"01010100 01100101 00100000 01010001 01110101 01101001 01100101 01110010 01101111", //Binario
"Te quiero" //Español

];

const button = document.getElementById("showMessages");
const container = document.getElementById("popupContainer");

button.addEventListener("click", ()=>{

    container.innerHTML="";

    messages.forEach(text=>{
        const popup=document.createElement("div");
        popup.className="popup";
        popup.style.left=Math.random()*75+"vw";
        popup.style.top=Math.random()*75+"vh";
        popup.innerHTML=`
            <p>${text}</p>
            <button class="close">Ok</button>
        `;
        popup.querySelector("button").onclick=()=>popup.remove();
        container.appendChild(popup);
    });
});
 
/*----------------------INTRO----------------------*/

const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {
    window.scrollTo(0,0);
});

intro.addEventListener("click", () => {
    window.scrollTo(0,0);
    music.play().catch(()=>{});
    intro.classList.add("hide");
});

intro.addEventListener("transitionend", () => {
    intro.remove();
    document.body.style.overflow="auto";
}, {once:true});