const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpVal");
const inpBtn = document.getElementById("btnInsert");
const isOutput = document.getElementById("isOutput");

inpBtn.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  isOutput.innerHTML += `${key}: ${value}<br />`;
}
