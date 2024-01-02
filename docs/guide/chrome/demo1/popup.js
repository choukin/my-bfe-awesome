
let changeColor = document.getElementById('changeColor')

// chrome.storage.sync.get('color', ({ color }) => {
//   changeColor.style.backgroundColor = color

// })



// let changeColor = document.getElementById('changeColor')
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor
  })
})

function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    debugger
    document.body.style.backgroundColor = color
  })
}


// chrome.storage.sync.get('color', ({ color }) => {
//   changeColor.style.backgroundColor = color

// })