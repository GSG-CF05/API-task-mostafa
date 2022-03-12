let container = document.querySelector(".container")

fetch("https://www.breakingbadapi.com/api/characters")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach(element => {
        let card = document.createElement("section")
        card.classList.add("card")
        container.appendChild(card)
        let imgBox = document.createElement("div")
        imgBox.classList.add("imag-box")
        card.appendChild(imgBox)
        let img = document.createElement("img")
        imgBox.appendChild(img)
        img.src = element.img

        let content = document.createElement("div")
        content.classList.add("content")
        card.appendChild(content)

        let heading = document.createElement("h1")
        heading.textContent = element.name
        content.appendChild(heading)

        let list= document.createElement("ul")
        list.classList.add("list")
        content.appendChild(list)

        let des = document.createElement("li")
        list.appendChild(des)
        des.textContent = element.birthday

        let des2 = document.createElement("li");
        list.appendChild(des2);
        des2.textContent = element.status;

        let des3 = document.createElement("li");
        list.appendChild(des3);
        des3.textContent = element.nickname;

        let des4 = document.createElement("li");
        list.appendChild(des4);
        des4.textContent = element.portrayed;
        


        

    });
});
