chrome.browserAction.onClicked.addListener(function(tab) {
	// No tabs or host permissions needed!
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 0, 255] });
	chrome.browserAction.setBadgeText({text: "...",tabId: tab.id});
	chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js", allFrames:true }, function() {		
		chrome.tabs.executeScript(null, { file: "contentscript.js", allFrames:true }, function(){
			if (!chrome.runtime.lastError) {
				chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 255] });
				chrome.browserAction.setBadgeText({text: "_",tabId: tab.id});
			}else{
				chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
				chrome.browserAction.setBadgeText({text: "x",tabId: tab.id});
				console.log(chrome.runtime.lastError.message);
			}
		});
	});	
});