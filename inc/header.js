
//Html kóði fyrir <header> 

var header = document.querySelector("header");
header.innerHTML = `
<nav>
    <div class="header_contact">
        <div class="header_contact_wrapper">
            <div class="content_left">
                <div>
                    <img src="img/simi.svg" alt="síma logo">
                    <a href="https://ja.is/islenski-barinn/" title="Símanúmer hlekkur">
                        <p>+354 517-6767</p>
                    </a>
                </div>
                <div class="e_mail">
                    <a href="mailto:postur@islenskibarinn.is">
                        <img class="postur_kort" src="img/postur.svg" alt="umslag logo"><p>postur@islenskibarinn.is</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.google.com/maps/place/%C3%8Dslenski+barinn/@64.1469123,-21.935277,17z/data=!3m1!4b1!4m5!3m4!1s0x43812fcd8fbbeea9:0xb747b528932f1372!8m2!3d64.1469123!4d-21.933083" title="Kort hlekkur">
                        <img class="postur_kort" src="img/stadsetning.svg" alt="staðsetningar logo"><p>Kort</p>
                    </a>
                </div>
            </div>
            <div class="content_right">
                <div>
                    <a href="https://www.facebook.com/islenski/" title="Facebook hlekkur">
                        <img src="img/Facebook.svg" alt="facebook hlekkur"/>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/islenskibarinn/" title="Instagram hlekkur">
                        <img src="img/Instagram.svg" alt="instagram hlekkur">
                    </a>
                </div>  
            </div> 
        </div> 
    </div>
    <div class="header_main">
        <div class="hamb_menu"></div>
        <div class="main_content_left">
            <div class="button">
                <img src="img/arrow.svg"/>
                <button class="dropDown">Matseðill</button>
            </div>
            <div class="button_2">
                <img src="img/arrow.svg"/>
                <button class="dropDown">Drykkir</button>
            </div>
        </div>
        <div class="logo">
            <div>
                <a href="index.html" title="Logo íslenska barsins">
                    <img src="img/LOGO.svg" alt="mynd af logó íslenska barsins"/>
                </a>
            </div>
        </div>
        <div class="main_content_right">
            <div class="button_3">
                <button>Um Okkur</button>
            </div>
            <div class="search">
                <input type="search" placeholder="   Leita">
            </div>
            <div class="lang">
                <a href="#" title="íslenska/enska">
                    <img src="img/Fani-btn.svg">
                </a>
            </div>
        </div>
    </div>
</nav>    
`

//Dropdown menu fyrir "matseðill"

var btn_1 = document.querySelector(".button");
var dropDown_mats = function (){
      
    if(btn_1.classList.contains("active")){
    btn_1.classList.toggle("active") 
    btn_1.innerHTML = `
        <div class="button">
            <img src="img/arrow.svg"/>
            <button class="dropDown">Matseðill</button>
        </div>
    `
    } 
    else {
        btn_1.classList.toggle("active") 
        btn_1.innerHTML = `
        <div class="menu_dropdown_container">
            <div class="menu_dropdown">
                <div class="dropdown_header">
                    <img src="img/arrow.svg"/>
                    <h2>Matseðill</h2>
                </div>
                    <div class="dropdown_sub"></div>
                    <p>Minni réttir</p>
                    <p>Aðalréttir</p>
                    <p class="brg">Borgarar</p>
                    <p>Eftirréttir</p>
                </div>
            </div>
        </div>        
        ` 
        var btn_brg = document.querySelector(".brg");
        btn_brg.onclick = burgerPage;  //Kallar á fallið: burger_page sem loopar spjöldum úr array af objects + setur inn html fyrir hamborgara síðu 
    }
}
btn_1.onclick = dropDown_mats; //Kallar á fallið dropDown_mats sem virkjar dropdown menu "Matseðill"


//Dropdown menu fyrir "Drykkir"

var btn_2 = document.querySelector(".button_2");
var dropDown_drykkir = function (){
      
    if(btn_2.classList.contains("active")){
    btn_2.classList.toggle("active") 
    btn_2.innerHTML = `
        <div class="button_2">
            <img src="img/arrow.svg"/>
            <button class="dropDown">Drykkir</button>
        </div>
    `
    } 
    else {
        btn_2.classList.toggle("active") 
        btn_2.innerHTML = `
        <div class="menu_dropdown_container_2">
            <div class="menu_dropdown_2">
                <div class="dropdown_header_2">
                    <img src="img/arrow.svg"/>
                    <h2>Drykkir</h2>
                </div>
                    <div class="dropdown_sub_"></div>
                    <p>Gleðistund</p>
                    <p class="btn_bjor">Bjór</p>
                </div>
            </div>
        </div>
        ` 
        var btn_bjor = document.querySelector(".btn_bjor");
        btn_bjor.onclick = bjorPage;             //Kallar á fallið: bjorPage sem loopar spjöldum úr array af objects + setur inn html fyrir bjórsíðu 
    }
}
btn_2.onclick = dropDown_drykkir; //Kallar á fallið dropDown_drykkir sem virkjar dropdown menu "Drykkir"


// Leitarvirkni 

var myDiv_2 = document.querySelector(".search_results");
var myDiv = document.querySelector(".main");
var leit = document.querySelector("input");
leit.onkeyup = function(){
    var searchResults = [];
    for (var i = 0; i < burger_card.length; i++){
        var test = burger_card[i].h3.toUpperCase().indexOf(leit.value.toUpperCase());
        if(test !== -1)
        searchResults.push(burger_card[i]);   
    }
    for (var i = 0; i < bjor_card.length; i++){
        var test = bjor_card[i].h2.toUpperCase().indexOf(leit.value.toUpperCase());
        if(test !== -1)
        searchResults.push(bjor_card[i]);   
    }
    myDiv_2.innerHTML = ``
    for (var i = 0; i < searchResults.length; i++){
        myDiv_2.innerHTML += `
        <div>${searchResults[i].h3?searchResults[i].h3:searchResults[i].h2}</div>
        `
    }
  
}

//Drop down menu fyrir hamburger menu.

var burger_btn = document.querySelector(".hamb_menu");
var headerMain = document.querySelector(".header_main");
var burger_menu = function (){
      
    if(burger_btn.classList.contains("active")){
    burger_btn.classList.toggle("active") 
    burger_btn.innerHTML = `
    <div class="hamb_menu"></div>
    <div class="main_content_left">
        <div class="button">
            <img src="img/arrow.svg"/>
            <button class="dropDown">Matseðill</button>
        </div>
        <div class="button_2">
            <img src="img/arrow.svg"/>
            <button class="dropDown">Drykkir</button>
        </div>
    </div>
    `
    } 
    else {
        burger_btn.classList.toggle("active") 
        burger_btn.innerHTML = `

    <div class="hamb_menu">
        <div class="mobile_hamb_menu">
            <div class="mobile_hamb_container">
                <h2>Matseðill</h2>
                <p>Minni réttir</p>
                <p>Aðalréttir</p>
                <p class="btn_burger_1">Borgarar</p>
                <p>Eftirréttir</p>
                <h2>Drykkir</h2>
                <p>Gleðistund</p>
                <p class="btn_bjor_1">Bjór</p>
                <h2 class="btn_umokkur">Um Okkur</h2>
                <h2 class="btn_heim">Heim</h2>
            </div>
        </div>
    </div>
        ` 
            var btn_bjor_1 = document.querySelector(".btn_bjor_1");
            btn_bjor_1.onclick = bjorPage;
            var btn_burger_1 = document.querySelector(".btn_burger_1");
            btn_burger_1.onclick = burgerPage;
            var btn_heim = document.querySelector(".btn_heim");
            btn_heim.onclick = homePage;
            var btn_umokkur = document.querySelector(".btn_umokkur");
            btn_umokkur.onclick = umOkkur;
    }
}
burger_btn.onclick = burger_menu; //onclick event sem keyrir functionið burger_menu.








