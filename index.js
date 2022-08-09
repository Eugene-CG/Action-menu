const texts = new Map();
texts
  .set(
    "HahahaOne",
    `Lorem One one One one One one One one One One one One one One one One one One One one One one One
    one One one One One one One one One one One one Oneoneipsum dolor 
    sit amet consectetur adipisicing elit. 
    Ad, qui
    laboriosam? Est, et ex? Fugit, 
    quidem aliquid cumque porro rerum
    maiores voluptate cupiditate deserunt tenetur distinctio mollitia
    inventore quo! Nostrum.`
  )
  .set(
    "HahahaTwo",
    `Lorem Two Two Two 
    Two Two Two Two Two Two Two Two Two Two Two
    ipsum dolor sit amet consectetur adipisicing elit. Ad, qui
    laboriosam? Est, et ex? Fugit, 
    quidem aliquid cumque porro rerum
    maiores voluptate cupiditate deserunt tenetur distinctio mollitia
    inventore quo! Nostrum.`
  )
  .set(
    "HahahaThree",
    `Lorem Three Three Three Three Three Three Three Three Three Three Thr ipsum dolor sit amet consectetur adipisicing elit. Ad, qui
    laboriosam? Est, et ex? Fugit, quidem aliquid
     cumque porro rerum
    maiores voluptate cupiditate deserunt tenetur distinctio mollitia
    inventore quo! Nostrum.`
  )
  .set(
    "HahahaFour",
    `Lorem Four Four Four Four Four Four Four Four Four Four Four Four Fo
    ipsum dolor sit amet consectetur adipisicing elit. Ad, qui
    laboriosam? Est, et ex? Fugit, quidem aliquid cumque porro rerum
    maiores voluptate cupiditate deserunt tenetur distinctio mollitia
    inventore quo! Nostrum.`
  )
  .set(
    "HahahaFive",
    `Lorem Five Five Five Five Five Five Five Five Five Five Five Five Fi
    ipsum dolor sit amet consectetur adipisicing elit. Ad, qui
    laboriosam? Est, et ex? Fugit, quidem aliquid cumque porro rerum
    maiores voluptate cupiditate deserunt tenetur distinctio mollitia
    inventore quo! Nostrum.`
  );
const wrapper = document.querySelector(".wrapper");
const mainContent = document.querySelector(".main__content");
const menuList = document.querySelector(".menu__list");
const defaultContent = mainContent.innerHTML;

const delegateEvents = (event) => {
  const { target } = event;
  if (target.closest(".menu__list")) handleList(target);
  if (target.closest(".logo")) backToDefaultContent();
  if (target.closest(".menu__popup-icon")) switchMenuPopup(target);
};
const switchMenuPopup = (target) => {
  menuList.classList.toggle("hide");
};
const handleList = (target) => {
  if (target.closest("LI") || target.closest("A")) {
    clearMainContent();
    createMainContent(target);
    switchMenuPopup(target);
  }
};
const createMainContent = (target) => {
  createTitleH(target);
  createParagraph(target, 5);
};
const backToDefaultContent = () => (mainContent.innerHTML = defaultContent);
const clearMainContent = () => (mainContent.innerHTML = "");
const createTitleH = (target) => {
  const h = document.createElement("H1");
  h.innerText = target.innerText;
  mainContent.prepend(h);
};
const createParagraph = (target, howMuchTimes) => {
  if (!howMuchTimes) return;
  if (!texts.has(target.innerText)) {
    throw new TypeError("Cannot read property of undefined");
  }
  const paragraph = document.createElement("P");
  typeEffect(paragraph, texts.get(target.innerText).split(""));
  setTimeout(() => {
    mainContent.appendChild(paragraph);
    return createParagraph(target, howMuchTimes - 1);
  }, 110);
};
const typeEffect = async (paragraph, textArray) => {
  let i = 0;
  function recursive() {
    if (i >= textArray.length) return;
    paragraph.innerHTML += textArray[i];
    i++;
    setTimeout(recursive, 20);
  }
  await recursive();
};
wrapper.addEventListener("click", delegateEvents);
