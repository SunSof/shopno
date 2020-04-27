//1. создать див для каждого контенера
//2. добавить туда текст и кнопку
//3. с помощью таргета узнаем на какой блок и кнопку мы нажали
//4. если кнопка открыть или закрыть, если есть класс - убрать, если нет - добавить

let content = document.querySelectorAll(".b-card__content");
content.forEach(element => element.append(createBlock()));

function createBlock() {
  const hiddenBlockText = {
    title: "Designing is The CooL LOVE",
    body:
      "Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most this job was posted less than five minutes ago, and we think it’s a good match for you. If you submit a proposal now, you’ll be one of the first candidates."
  };

  const div = document.createElement("div");
  div.classList.add("b-card__hidden");

  const h2 = document.createElement("h2");
  h2.textContent = hiddenBlockText.title;
  h2.classList.add("b-card__h2");

  const h4 = document.createElement("h4");
  h4.textContent = hiddenBlockText.body;
  h4.classList.add("b-card__h4");

  const buttonClose = document.createElement("button");
  buttonClose.textContent = "Close";
  buttonClose.classList.add("b-card__close");

  div.classList.add("b-card-hov", "b-card__dis");

  div.append(h2);
  div.append(h4);
  div.append(buttonClose);

  return div;
}

const services = document.querySelector(".b-services");

services.addEventListener("click", function() {
  let target = event.target;

  // b-card__visible
  // b-card__hidden
  const visible = target.parentElement.classList.contains("b-card__visible");
  const hidden = target.parentElement.classList.contains("b-card__hidden");

  console.log(visible);
  console.log(hidden);

  if (visible) {
    let visibleDiv = target.parentElement;
    let hiddenDiv = visibleDiv.nextElementSibling;
    console.log(visibleDiv);
    console.log(hiddenDiv);
    visibleDiv.classList.add("b-card__dis");
    hiddenDiv.classList.remove("b-card__dis");
  }
  if (hidden) {
    let hiddenDiv = target.parentElement;
    let visibleDiv = hiddenDiv.previousElementSibling;
    console.log(visibleDiv);
    console.log(hiddenDiv);
    hiddenDiv.classList.add("b-card__dis");
    visibleDiv.classList.remove("b-card__dis");
  }
});
