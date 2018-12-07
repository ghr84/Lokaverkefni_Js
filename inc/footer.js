var footer = document.querySelector("footer");

footer.innerHTML = `
<section class="footer">
    <div class="footer_wrapper">
        <div class="footer_content_left">
            <h3>Opnunartími</h3>
            <p>Mán - fimmtdag (11:30 - 01:00)</p>
            <p>Föstdag - laugdag (11:30 - 03:00)</p>
            <p>Sunnudagur (11:30 - 01:00)</p>
            <h3>Eldhús</h3>
            <p>Mán - sunnudag (11:30 - 22:00)</p>
        </div>
        <div class="footer_content_center">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="458" height="219" id="gmap_canvas" src="https://maps.google.com/maps?q=%C3%ADslenski%20barinn&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    <a href="https://www.pureblack.de"></a>
                </div>
            </div>
        </div>
        <div class="footer_content_right">
            <div class="simi_postur">
                <img class="margin" src="img/simi_large.svg" alt="Hvítt síma icon">
                <p>+354 517-6767</p>
            </div>
            <div class="simi_postur">
                <img class="margin" src="img/postur_large.svg" alt="Hvítt bréfa icon">
                <p>postur@islenskibarinn.is</p>
            </div>
            <div class="trip_wakeup">
                <img class="trip" src="img/TripAd.svg" alt="Trip advisor merki og hlekkur"/>
                <img class="wakeup" src="img/WakeUp.svg" alt="Wake up Reykjavík merki og hlekkur"/>
            </div>
            <div>
                <img class="fb_logo" src="img/Fb_footer.svg" alt="Facebook merki og hlekkur">
                <img src="img/Ig_footer.svg" alt="Instagram merki og hlekkur">
            </div>
        </div>
    </div>
</section>
<section class="mobile_footer">
    <div class="mobile_footer_left">
        <h3>Opnunartími</h3>
        <p>Mán - fimmtdag (11:30 - 01:00)</p>
        <p>Föstdag - laugdag (11:30 - 03:00)</p>
        <p>Sunnudagur (11:30 - 01:00)</p>
        <h3>Eldhús</h3>
        <p>Mán - sunnudag (11:30 - 22:00)</p>
    </div>
    <div class="mobile_footer_right">
        <div class="simi_postur">
            <img class="margin" src="img/postur_large.svg" alt="Hvítt bréfa icon">
            <p>postur@islenskibarinn.is</p>
        </div>
        <div class="simi_postur">
            <img class="margin" src="img/simi_large.svg" alt="Hvítt síma icon">
            <p>+354 517-6767</p>
        </div>
        <div class="simi_postur">
            <p>Ingólfsstræti 1a</p>
        </div>
        <div class="trip_wakeup">
            <img class="trip" src="img/TripAd.svg" alt="Trip advisor merki og hlekkur"/>
            <img class="wakeup" src="img/WakeUp.svg" alt="Wake up Reykjavík merki og hlekkur"/>
        </div>
    </div>
</section>
<div class="sub_footer">
    <div>
        <a href="#" title="Facebook hlekkur">
            <img src="img/Facebook_mobilefooter.svg" alt="facebook hlekkur"/>
        </a>
    </div>
    <div>
        <a href="#" title="Instagram hlekkur">
            <img src="img/Instagram_mobilefooter.svg" alt="instagram hlekkur">
        </a>
    </div>  
</div>
`