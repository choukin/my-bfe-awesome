let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("🚀 ~ file: background.js:5 ~ chrome.runtime.onInstalled.addListener ~ color:", color)
  
  console.log('Default background color set to %cgreen', `color: ${color}`);
})