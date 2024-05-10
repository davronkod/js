const containerEl = document.querySelector(".container");

fetch("https://jsonplaceholder.org/comments")
  .then((respons) => respons.json())
  .then((data) => {
    data.forEach((e) => {
      const img = document.createElement("img");
      const p = document.createElement("p");
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const button1 = document.createElement("button");
      const button2 = document.createElement("button");

      img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&s";
      p.innerHTML = e.comment;
      button1.innerHTML = "shop"
      button2.innerHTML = "click"
      img.className = "images";
      div2.className = "div2";
      button1.className = "button1";
      button2.className = "button2";
      p.className = "text";
      div.className = "card";
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2)
      div2.appendChild(button1)
      div2.appendChild(button2)
      containerEl.append(div);
    });
  });
