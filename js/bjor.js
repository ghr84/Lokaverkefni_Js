var bjor_container = document.querySelector(".bjor_container");

// Array[] af objectum{} sem innihalda properties: 


var bjor_card = [
    {
        h2: "Einstök White ale",
        p_1: "0.4 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1200 kr",
        p_5: "800 kr",
    },
    {
        h2: "Einstök Pale ale",
        p_1: "0.4 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1200 kr",
        p_5: "800 kr",
    },
    {
        h2: "Víking Gylltur",
        p_1: "0.3 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1300 kr",
        p_5: "800 kr",
    },
    {
        h2: "Víking Stout",
        p_1: "0.3 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1400 kr",
        p_5: "800 kr",
    },
    {
        h2: "Kaldi Ljós",
        p_1: "0.3 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1400 kr",
        p_5: "800 kr",
    },
    {
        h2: "Kaldi Dökkur",
        p_1: "0.3 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1400 kr",
        p_5: "800 kr",
    },
]

var bjor_card_2 = [
    {
        h2: "Víking Jóla",
        p_1: "0.3 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1200 kr",
        p_5: "800 kr",
    },
    {
        h2: "Kaldi Porter",
        p_1: "0.3 ltr",
        p_2: "0.5 ltr",
        p_3: "900 kr",
        p_4: "1400 kr",
        p_5: "1400 kr",
    },
]

var main = document.querySelector(".main");

//Function sem er kallað á í header með því að ýta á viðeigandi hnapp(Drykkir->bjór) og hleður inn main contenti.

var bjorPage = function(){
    main.innerHTML = `
                <div class="banner">
                    <div role="img" alt="mynd af steik og salati á platta og bjórglasi" class="banner_img_bjor"></div>
                </div>
                <section class="info">
                    <div class="info_text">
                        <h1>Íslenskur bjór</h1>
                        <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu.” </p>
                    </div>    
                </section>
                <section>
                    <div class="bjor_container"></div>
                </section>
    `   
    var bjor_container = document.querySelector(".bjor_container");

    for(var i = 0; i < bjor_card.length; i++) {
        bjor_container.innerHTML += `
    <div class="bjor_card"> 
        <div class="top_box">
            <h2>${bjor_card[i].h2}</h2>
        </div>
        <div class="bjor_txt_box">
            <div class="bjor_info">
                <p class="p_pos">${bjor_card[i].p_1}</p>
                <p class="p_pos">${bjor_card[i].p_2}</p>
                <div class="season_logo"></div>
            </div>
            <div class="line"></div>
            <div class="bjor_info">
                <p>${bjor_card[i].p_3}</p>
                <p id="price_margin">${bjor_card[i].p_4}</p>
                <p>${bjor_card[i].p_5}</p>
            </div>
        </div>
    </div>
        `
    }
    
    for(var i = 0; i < bjor_card_2.length; i++) {
        bjor_container.innerHTML += `
        <div class="bjor_card">
            <div class="top_box">
                <h2>${bjor_card_2[i].h2}</h2>
            </div>
            <div class="bjor_txt_box">
                <div class="bjor_info">
                    <p class="p_pos">${bjor_card_2[i].p_1}</p>
                    <p class="p_pos">${bjor_card_2[i].p_2}</p>
                    <div class="season_logo_1"></div>
                    <div class="season_logo_2"></div>
                </div>
                <div class="line"></div>
                <div class="bjor_info">
                    <p>${bjor_card_2[i].p_3}</p>
                    <p id="price_margin">${bjor_card_2[i].p_4}</p>
                    <p>${bjor_card_2[i].p_5}</p>
                </div>
            </div>
        </div>
         `
    }
}
