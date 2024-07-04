function ascii () { 
  let text = "";
  let content = "";
  let str = document.getElementById("input").value;
  for (let i = 0; i < str.length; i++) {
    text += "\n" + str[i] + " => " + str.charCodeAt(i);
    content += str[i] + "  --  " + str.charCodeAt(i) + "<br>"
  };
  display(text, content);
};

function display (text, content) {
  let display = document.getElementById("content");
  display.innerHTML = `<span class="display">${content}</span>`;
  console.log(text);
};

document.addEventListener('keydown', (e) => {
  if (e.key == "Enter") {
    ascii();
  }
});