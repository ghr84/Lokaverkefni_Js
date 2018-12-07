
var hamb_container = document.querySelector(".hamb_container");

// Array[] af objectum{} sem innihalda properties: 

var burger_card = [
    {
        h3:'Íslandsborgari',
        p:'200gr nautahamborgari með osti, káli, tómötum, papriku, rauðlauk, gúrku, sjoppusósu & vöfflufrönskum.',
        price:'2490.kr',
    },
    {
        h3:'Sigguborgari',
        p:'200gr nautahamborgari með beikon og ostafylltri pönnuköku, osti, káli, papriku, piparostasósu & vöfflufrönskum.',
        price:'2490.kr',
    },
    {
        h3:'Haf & hagi',
        p:'200gr nautahamborgari með djúpsteiktum humarhölum, osti, káli, tómötum, rauðlauk, gúrku, hvítlauksmæjó, paprikusultu & vöfflufrönskum.',
        price:'2490.kr',
    },
    {
        h3:'Bernesborgari',
        p:'200gr nautahamborgari með osti, hvítlaukssteiktum sveppum, laukhringjum bernessósu & vöfflufrönskum.',
        price:'2490.kr',
    },
    {
        h3:'Hreindýraborgari',
        p:'200gr hreindýraborgari með hvítmygluosti, káli, sultuðum rauðlauk, sultu & sætkartöflufrönskum.',
        price:'2490.kr',
    },
]

var main = document.querySelector(".main");
var btn_1 = document.querySelector(".button");

//Function sem er kallað á í header með því að ýta á viðeigandi hnapp(matseðill->borgarar) og hleður inn main contenti. 

var burgerPage = function(){
    main.innerHTML = `
    <div class="banner">
        <div role="img" alt="mynd af hamborgara og frönskum á disk" class="hamb_banner_img"></div>
    </div>
    <section class="info">
        <div class="info_text">
            <h1>Hamborgarar</h1>
            <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu.” </p>
        </div>    
    </section>
    <section>
        <div class="hamb_container">
        </div>
    </section>
`
var hamb_container = document.querySelector(".hamb_container");

//For loop-a sem keyrist þegar kallað er á function-ið burgerPage með því að ýta á viðeigandi hnapp(matseðill->borgarar). 

for (var i = 0; i < burger_card.length; i++) {
    hamb_container.innerHTML +=
    `   <div class="hamb_card">
            <div class="product_img"></div>
            <div class="text">
                <h3>${burger_card[i].h3}</h3>
                <p>${burger_card[i].p}</p>
            </div>  
            <div class="price"><span>${burger_card[i].price}</span></div>
        </div>
        `
    }
}

