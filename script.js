let likeCount = 0;
const likesPerClick = 100000;  // Бір басқанда қосылатын лайк саны

function startStream() {
    let link = document.getElementById("streamLink").value;

    if (link.includes("tiktok.com")) {
        document.getElementById("streamFrame").innerHTML = 
            `<iframe src="${link}" allowfullscreen></iframe>`;
        document.getElementById("likeSection").style.display = "block";  // Лайк бөлімін көрсету
    } else {
        alert("Дұрыс TikTok стрим сілтемесін енгіз!");
    }
}

function likeStream() {
    likeCount += likesPerClick;  // Лайк санын 100000-ға арттыру
    document.getElementById("likeCount").innerText = `Лайк: ${likeCount}`;
}
