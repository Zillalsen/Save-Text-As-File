const textarea = document.querySelector("textarea"),
  fileNameInput = document.querySelector(".file-name input"),
  selectMenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
  let selectedOpt = selectMenu.options[selectMenu.selectedIndex].text;
  let select = selectedOpt.split(" ")[0];
  saveBtn.textContent = `Save As ${select} File`;
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  // pass the blob to an url
  let blobUrl = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = blobUrl;
  link.download = fileNameInput.value;
  document.body.appendChild(link);
  link.click();
  link.remove();

  //   empty textarea and file name  on save
  textarea.value = "";
  fileNameInput.value = "";
});
