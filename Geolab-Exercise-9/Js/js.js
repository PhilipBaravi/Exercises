let heads = ['Food and life', 'Cooking', 'Fruits', 'Food and life', 'Cooking', 'Fruits'];
let info = ['Succed in hotel business', 'Cooking delicious food', 'Getting fresh fruits', 'Succed in hotel business', 'Cooking delicious food', 'Getting fresh fruits'];
let photos = ['image1.png', 'image2.png', 'image3.png', 'image1.png', 'image2.png', 'image3.png'];
let text = 'Fresh food directly from our restaurant ready coocked for you';
let section = document.getElementById('section');

for (let i = 0; i < photos.length; i++) {
    const e_0 = document.createElement("div");
    e_0.setAttribute("class", "item");
    const e_1 = document.createElement("div");
    e_1.style.backgroundImage = `url('Images/${photos[i]}')`;
    e_1.setAttribute("id", "item_img");
    e_0.appendChild(e_1);
    const e_2 = document.createElement("div");
    e_2.setAttribute("class", "item_desc");
    const e_3 = document.createElement("div");
    e_3.setAttribute("class", "item_desc_text");
    const e_4 = document.createElement("h1");
    e_4.appendChild(document.createTextNode(heads[i]));
    e_3.appendChild(e_4);
    const e_5 = document.createElement("h2");
    e_5.appendChild(document.createTextNode(info[i]));
    e_3.appendChild(e_5);
    const e_6 = document.createElement("p");
    e_6.appendChild(document.createTextNode(text));
    e_3.appendChild(e_6);
    e_2.appendChild(e_3);
    e_0.appendChild(e_2);
    section.appendChild(e_0)
}