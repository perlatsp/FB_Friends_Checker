//function to run the script
function SelectAllFriends() {
    chrome.tabs.executeScript(null, {
        file: 'script.js'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#SelectAll").addEventListener('click', SelectAllFriends);
});
 