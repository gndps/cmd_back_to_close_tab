# Close Tab on Cmd+Back
This Chrome extension allows users to navigate back using `Cmd + Left Arrow` (Mac) or `Ctrl + Left Arrow` (Windows). If there is no previous page in the browser history, it automatically closes the tab.

## Features
* Normal back navigation when history is available
* Closes the tab if no history exists
* Works with `Cmd + Left Arrow` (Mac) and `Ctrl + Left Arrow` (Windows)

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (toggle in the top right corner).
4. Click "Load unpacked" and select the extension folder.

## Usage
Press `Cmd + Left Arrow` (Mac) or `Ctrl + Left Arrow` (Windows):
* If there is a previous page, it navigates back.
* If no history exists, the tab is closed.

## Files
* `manifest.json`: Defines extension permissions and commands.
* `background.js`: Handles key command detection and navigation logic.

## Permissions
* `tabs`: Required to close the active tab.
* `scripting`: Used to execute navigation checks within the tab.
* `activeTab`: Allows execution of scripts in the active tab.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Generation
It was generated using chatgpt. Feel free to extend.

https://chatgpt.com/share/679ac2a1-bb88-8000-b55d-d0a464f363f6
