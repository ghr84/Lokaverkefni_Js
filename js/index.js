//Html kóði fyrir "heim" hnapp í hamburger menu

var main = document.querySelector(".main")
function homePage(event){                       //parameter sem tekur inn argument-ið; "Gleðistund 16:00-18:00" 
    event = "Gleðistund 16:00-18:00";
    main.innerHTML = `
                <div class="banner">
                    <div class="info_box">
                        <div class="info_gledi">${event}</div>
                    </div>
                    <div role="img" alt="mynd af tómum borðum á veitingastað" class="banner_img"></div>
                </div>
                <section class="info">
                    <div class="info_text">
                        <h1>Íslenski barinn</h1>
                        <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu.” </p>
                    </div>    
                </section>
                <div class="search_results">
                    <div class="banner_2">
                        <div role="img" alt="mynd af steiktum humar og salati á disk" class="banner_2_img"></div>
                    </div>
                    <section class="info">
                        <div class="info_text">
                            <h1>Réttir dagsins</h1>
                            <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu.” </p>
                        </div>    
                    </section>
                    <section>
                        <div class="info_rettir">
                            <div class="fb-page" data-href="https://www.facebook.com/islenski/" data-tabs="timeline" data-width="385" data-height="282" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/islenski/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/islenski/">Íslenski Barinn - The Icelandic Bar</a></blockquote></div>
                        </div>
                    </section>
                </div>
    
    `
}
