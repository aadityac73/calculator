const buttons = document.querySelectorAll("[data-button]");
const input = document.querySelector("#input_box");
const history = document.querySelector("#history_box");

const handleClick = (button) => () => {
  const val = button.getAttribute("data-button");
  switch (val) {
    case "AC":
      input.innerHTML = "0";
      history.innerHTML = "";
      break;

    case "CE":
      if (history.innerHTML != "") {
        input.innerHTML = "0";
      } else if (input.innerHTML.length === 1) {
        input.innerHTML = "0";
      } else if (input.innerHTML != "0") {
        input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
      }
      break;

    case "=":
      history.innerHTML = input.innerHTML;
      input.innerHTML = eval(input.innerHTML);
      break;

    default:
      if (input.innerHTML === "0") {
        input.innerHTML = val;
      } else {
        input.innerHTML += val;
      }
  }
};

buttons.forEach((item) => {
  item.addEventListener("click", handleClick(item));
});
