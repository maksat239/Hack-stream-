function startStream() {
    let link = document.getElementById("streamLink").value;
    if (link.includes("tiktok.com")) {
        document.getElementById("streamFrame").innerHTML = 
            `<iframe src="${link}" width="80%" height="500px" allowfullscreen></iframe>`;
    } else {
        alert("Дұрыс TikTok стрим сілтемесін енгіз!");
    }
}
