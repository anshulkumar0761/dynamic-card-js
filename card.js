function createCard(thumbnail, title, CHname, views, time) {
    views = Number(views);

    let viewstr;
    if (views >= 1000000) {
        viewstr = (views / 1000000) + "M";
    } else if (views >= 1000) {
        viewstr = (views / 1000) + "K";
    } else {
        viewstr = views;
    }

    let html = `
    <div class="box">
        <img src="${thumbnail}" alt="thumbnail">
        <div class="info">
            <h3 class="title">${title}</h3>
            <div class="chName">${CHname} • ${viewstr} views • ${time} ago</div>
        </div>
    </div>`;

    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}

createCard(
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg",
    "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
    "Code with Harry",
    "27000000",
    "2 years"
);
createCard(
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg",
    "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
    "Code with Harry",
    "27000000",
    "2 years"
);
 