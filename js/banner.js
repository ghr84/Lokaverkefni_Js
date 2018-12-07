var info = document.querySelector(".info_gledi");

function infoBanner(event) { //parameter sem inniheldur argumentið("Gleðistund 16:00-18:00")
    return `                 
        <h1>${event}</h1>
    `
}
info.innerHTML = infoBanner("Gleðistund 16:00-18:00");

