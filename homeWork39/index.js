let element = document.querySelectorAll('.container__screen')

element[0].innerHTML = `screen.width: ${window.screen.width}`;
element[1].innerHTML = `screen.height: ${window.screen.height}`;
element[2].innerHTML = `screen.availWidth: ${window.screen.availWidth}`;
element[3].innerHTML = `screen.availHeight: ${window.screen.availHeight}`;
element[4].innerHTML = `screen.colorDepth: ${window.screen.colorDepth}`;
element[5].innerHTML = `screen.pixelDepth: ${window.screen.pixelDepth}`;
element[6].innerHTML = `window.devicePixelRatio: ${window.devicePixelRatio}`;




