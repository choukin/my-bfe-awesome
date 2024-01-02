let page = document.getElementById('buttonDiv')
let selectedClassName = 'current'
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]


function handleButtonClick(event) {
  let current = event.target.parentElement.querySelector(`.${selectedClassName}`)
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName)
  }
  let color = event.target.dataset.color
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color })
}