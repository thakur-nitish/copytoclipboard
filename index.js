const copyButton = document.getElementById("copy-button");
const copyText = document.getElementById("copy-text");


copyButton.addEventListener("click", () => {
  alert("Coped!");
  copyText.select();
  document.execCommand("copy");
})
