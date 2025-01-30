chrome.commands.onCommand.addListener((command) => {
    if (command === "cmd_back") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: handleBackNavigation
            }).catch(err => console.error("Error executing script:", err));
        });
    }
});

function handleBackNavigation() {
    if (window.history.length > 1) {
        window.history.back();  // Normal back navigation
    } else {
        chrome.runtime.sendMessage({ action: "close_tab" }); // Close if no history
    }
}

chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "close_tab" && sender.tab) {
        chrome.tabs.remove(sender.tab.id, () => {
            if (chrome.runtime.lastError) {
                console.error("Error closing tab:", chrome.runtime.lastError);
            }
        });
    }
});
