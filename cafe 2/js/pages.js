var templates = {
    header: `
        <div class="camera_container">
            <div id="camera" class="camera_wrap">
                <div data-thumb="images/slide01_thumb.jpg" data-src="images/slide01.jpg">
                    <div class="camera_caption fadeIn">
                    </div>
                </div>
                <div data-thumb="images/slide02_thumb.jpg" data-src="images/slide02.jpg">
                    <div class="camera_caption fadeIn">
                    </div>
                </div>
                <div data-thumb="images/slide03_thumb.jpg" data-src="images/slide03.jpg">
                    <div class="camera_caption fadeIn">
                    </div>
                </div>
            </div>

            <div class="brand wow fadeIn">
                <h1 class="brand_name">
                    <a href="./">Cafe</a>
                </h1>
            </div>
        </div>

        <div class="toggle-menu-container">
            <nav class="nav">
                <div class="nav_title"></div>
                <a class="sf-menu-toggle fa fa-bars" href="#"></a>
                <ul class="sf-menu">
                    <li class="active">
                        <a href="./">Home</a>
                    </li>
                    <li>
                        <a onclick="showAbout()" href="#about">About</a>
                        <ul>
                            <li>
                                <a href="#">Quisque nulla</a>
                            </li>
                            <li>
                                <a href="#">Vestibulum libero</a>
                                <ul>
                                    <li>
                                        <a href="#">Lorem</a>
                                    </li>
                                    <li>
                                        <a href="#">Dolor</a>
                                    </li>
                                    <li>
                                        <a href="#">Sit amet</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Vivamus eget nibh</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="index-2.html">What We Do</a>
                    </li>
                    <li>
                        <a href="index-3.html">Menu</a>
                    </li>
                    <li>
                        <a href="index-4.html">Contacts</a>
                    </li>
                </ul>
            </nav>            
        </div>
    `,
    footer:`
        <div class="container">
            <ul class="socials">
                <li><a href="#" class="fa fa-facebook"></a></li>
                <li><a href="#" class="fa fa-tumblr"></a></li>
                <li><a href="#" class="fa fa-google-plus"></a></li>
            </ul>
            <div class="copyright">© <span id="copyright-year"></span> |
                <a href="#">Privacy Policy</a>
            </div>
        </div>
        <div class="tm"><a href="#"><img src="images/TM_logo.png" alt=""></a></div>
    `,
    frontPage:`
        <section class="well">
            <div class="container">
                <h2><em>Welcome</em>to Our Place</h2>
                <div class="row">
                    <div class="grid_6">
                        <div class="img img__border"><div class="lazy-img" style="padding-bottom: 63.0282%;"><img data-src="images/page-1_img01.jpg" alt=""></div></div>
                        <p class="center indents-1">Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                    </div>
                    <div class="grid_6">
                        <div class="img img__border"><div class="lazy-img" style="padding-bottom: 63.0282%;"><img data-src="images/page-1_img02.jpg" alt=""></div></div>
                        <p class="center indents-1">Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                    </div>
                </div>
                <div class="decoration"><a href="#" class="btn">Read more</a></div>
                <h2><em>Our</em>Cuisine</h2>
            </div>            
            <div class="gallery">
                <div class="gallery_col-1">
                    <a data-fancybox-group="gallery" href="images/page-1_img03_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 93.96551724137931%;">
                        <img data-src="images/page-1_img03.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                    <a data-fancybox-group="gallery" href="images/page-1_img04_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 74.13793103448276%;">
                        <img data-src="images/page-1_img04.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                    <a data-fancybox-group="gallery" href="images/page-1_img05_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 94.6551724137931%;">
                        <img data-src="images/page-1_img05.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="gallery_col-2">
                    <a data-fancybox-group="gallery" href="images/page-1_img06_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 52.48322147651007%;">
                        <img data-src="images/page-1_img06.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                    <a data-fancybox-group="gallery" href="images/page-1_img07_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 55.97315436241611%;">
                        <img data-src="images/page-1_img07.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                    <a data-fancybox-group="gallery" href="images/page-1_img08_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 96.10738255033557%;">
                        <img data-src="images/page-1_img08.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="gallery_col-3">
                    <a data-fancybox-group="gallery" href="images/page-1_img09_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 93.69676320272572%;">
                        <img data-src="images/page-1_img09.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                    <a data-fancybox-group="gallery" href="images/page-1_img10_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 72.23168654173765%;">
                        <img data-src="images/page-1_img10.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                    <a data-fancybox-group="gallery" href="images/page-1_img11_original.jpg" class="gallery_item thumb lazy-img" style="padding-bottom: 93.69676320272572%;">
                        <img data-src="images/page-1_img11.jpg" alt="">
                        <div class="gallery_overlay">
                            <div class="gallery_caption">
                                <p><em>Lorem Blandit</em></p>
                                <p>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="parallax parallax1" data-parallax-speed="-0.4">
            <div class="container">
                <h2><em>Our </em>Experience</h2>
                <p class="indents-2">Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci </p>
                <a href="#" class="btn">View full menu</a>
            </div>
        </section>
        <section class="well well__offset-1 bg-1">
            <div class="container">
                <h2><em>Our </em>Cooks</h2>
                <div class="row row__offset-1">
                    <div class="grid_4">
                        <figure>
                            <div class="img lazy-img" style="padding-bottom: 101.0810810810811%;"><img data-src="images/page-1_img12.jpg" alt=""></div>
                            <figcaption>Kevin Grey</figcaption>
                        </figure>
                        <h3>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl </h3>
                        <p>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                    </div>
                    <div class="grid_4">
                        <figure>
                            <div class="img lazy-img" style="padding-bottom: 101.0810810810811%;"><img data-src="images/page-1_img13.jpg" alt=""></div>
                            <figcaption>Linda Klein</figcaption>
                        </figure>
                        <h3>Oeteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl </h3>
                        <p>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                    </div>
                    <div class="grid_4">
                        <figure>
                            <div class="img lazy-img" style="padding-bottom: 101.0810810810811%;"><img data-src="images/page-1_img14.jpg" alt=""></div>
                            <figcaption>Ann Shelton</figcaption>
                        </figure>
                        <h3>Koteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl </h3>
                        <p>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                    </div>
                </div>
                <div class="decoration"><a href="#" class="btn">Read more</a></div>
            </div>
        </section>
        <section class="well well__offset-2">
            <div class="container center">
                <h2><em>Make </em>a Reservation</h2>
                <p class="indents-2">Fnteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol.</p>
                <address class="address-1">
                    <dl><dt>Address:</dt> <dd>4578 Marmora Road, Glasgow DA04 89GR</dd></dl>
                    <p><em>800 2345-6789</em></p>
                </address>
            </div>
        </section>
    `,
    about:`
        <section class="well well__offset-3">
            <div class="container">
                <h2><em>A Few</em>Words</h2>
                <div class="row row__offset-2">
                    <div class="grid_6">
                        <p class="indents-3">Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus era nisl auctor venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.<br><br>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convavel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor venenatis nullatibulum volutpat turpis ut massa commodoquis</p>
                        <div class="img"><div class="lazy-img" style="padding-bottom: 45.6140350877193%;"><img data-src="images/page-2_img01.jpg" alt=""></div></div>
                    </div>
                    <div class="grid_6">
                        <p class="indents-3">Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus era nisl auctor venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.<br><br>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convavel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor venenatis nullatibulum volutpat turpis ut massa commodoquis</p>
                        <div class="img"><div class="lazy-img" style="padding-bottom: 45.6140350877193%;"><img data-src="images/page-2_img02.jpg" alt=""></div></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="parallax parallax2" data-parallax-speed="-0.4">
            <div class="container">
                <h2><em>Good Food </em>and Big Fun</h2>
                <div class="row">
                    <div class="grid_6">
                        <p class="indents-3">Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. Vestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus era nisl auctor venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.<br><br>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convavel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor venenatis nullatibulum volutpat turpis ut massa commodoquis </p>                        
                    </div>
                    <div class="grid_6">
                        <p class="indents-3">Onteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol sed,pharetra venenatis nulla. Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.<br><br>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa fertoli estibulum volutpat turpis ut massa commodo, quis aliquam massa gertoli facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol sed,pharetra venenatis nulla.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="well well__offset-4">
            <div class="container">
                <h2><em>Why</em>Choose Us</h2>
                <div class="row">
                    <div class="grid_4">
                        <h3>Anteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. </h3>
                        <p>Vestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus</p>
                    </div>
                    <div class="grid_4">
                        <h3>Genteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. </h3>
                        <p>Meestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus</p>
                    </div>
                    <div class="grid_4">
                        <h3>Ternteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nul. </h3>
                        <p>Testibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus</p>
                    </div>
                </div>
                <div class="row">
                    <div class="grid_4">
                        <h3>Onteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. </h3>
                        <p>Vestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus</p>
                    </div>
                    <div class="grid_4">
                        <h3>Genteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla. </h3>
                        <p>Meestibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus</p>
                    </div>
                    <div class="grid_4">
                        <h3>Ternteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nul. </h3>
                        <p>Testibulum volutpatturpis ut massa commodo, quis aliquam massa facilisis.Integer convavel miberto merlonelaoreet, at ornare lorem consequat. Phasellus</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="parallax parallax3" data-parallax-speed="-0.4">
            <div class="container">
                <h2><em>Our Clients </em>Say</h2>
                <div class="row">
                    <div class="grid_4">
                        <h3>Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl </h3>
                        <p>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                        <p class="client"><em>Kate Tomson</em>Client</p>
                    </div>
                    <div class="grid_4">
                        <h3>Oeteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl </h3>
                        <p>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                        <p class="client"><em>Irma King</em>Client</p>
                    </div>
                    <div class="grid_4">
                        <h3>Koteger convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl </h3>
                        <p>Vestibulum volutpat turpis ut massa commodo, quis aliquam massa facilisis.Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
                        <p class="client"><em>Linda Herman</em>Client</p>
                    </div>
                </div>                
                <div class="decoration"><a href="#" class="btn">Read more</a></div>
            </div>
        </section>
    `,
}