var umOkkurBtn = document.querySelector(".button_3");
var main = document.querySelector(".main");

var umOkkur = function() {
    main.innerHTML = `
                    <div class="banner">
                        <div role="img" alt="mynd af tómum borðum á veitingastað" class="banner_img_umokkur"></div>
                    </div>
                    <section class="info">
                        <div class="info_text">
                            <h1>Um Okkur</h1>
                            <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu.” </p>
                        </div>    
                    </section>
                    <section class="umokkur_wrapper">
                        <div class="top_content">
                            <div role="img" alt="mynd af brosandi stúlku með andlits málningu" class="top_content_pic"></div>
                            <div class="blue_box">
                                <div class="txt_box">  
                                    <div>
                                        <h2>Þjónusta</h2>
                                    </div>
                                    <div>
                                        <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu.” </p>
                                    </div>
                                </div> 
                            </div>
                        </div>    
                        <div class="top_content_1">
                            <div role="img" alt="mynd af bjórdælum með útskornum viðar handföngum" class="top_content_1_pic"></div>
                        </div>
                        <div class="bottom_content">
                            <div class="red_box">
                                <div class="txt_box_1">  
                                    <div>
                                        <h2>Íslenskar afurðir</h2>
                                    </div>
                                    <div>
                                        <p>“Bjóða upp á matseðil innblásinn af íslenskum hefðum en um leið framreiddur með nýstárlegum hætti. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu. Og að gera íslenskri ölgerð og áfengishefð hátt undir höfði og um leið veita persónulega og góða þjónustu. og um leið veita persónulega og góða þjónustu.”</p>
                                    </div>
                                </div> 
                            </div>    
                        </div>
                        <div class="bottom_content_1">
                            <div role="img" alt="mynd af tómum borðum á veitingastað" class="bottom_content_pic"></div>
                        </div>
                    </section>
`
}
umOkkurBtn.onclick = umOkkur;