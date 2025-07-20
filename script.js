// Add JavaScript code for your web site here and call it from index.html.
function showBrowserInfo() {
  const info = `App Name: ${navigator.appName}<br />
    Product: ${navigator.product}<br />
    Version: ${navigator.appVersion}<br />
    User Agent: ${navigator.userAgent}<br />
    Platform: ${navigator.platform}<br />
    Language: ${navigator.language}`;

  document.getElementById('infoDisplay').innerHTML = info;
}

function showWindowInfo() {
  const info = `Window size: ${window.innerWidth} x ${window.innerHeight}`;

  document.getElementById('infoDisplay').innerHTML = info;
}

function showScreenInfo() {
  const s = screen;
  const info = `Screen: ${s.width} x ${s.height}<br />
    Available: ${s.availWidth} x ${s.availHeight}<br />
    Color Depth: ${s.colorDepth}, Pixel Depth: ${s.pixelDepth}`;
    
  document.getElementById('infoDisplay').innerHTML = info;
}

function showLocationInfo() {
  const loc = window.location;
  const info = `href: ${loc.href}<br />
    hostname: ${loc.hostname}<br />
    pathname: ${loc.pathname}<br />
    protocol: ${loc.protocol} `;

  document.getElementById('infoDisplay').innerHTML = info;
}

function validatePassword() {
  const input = document.getElementById("password").value;
  const msg = document.getElementById("passwordMessage");
  const isValid = /[a-zA-Z]/.test(input) &&
                  /[0-9]/.test(input) &&
                  /[^a-zA-Z0-9]/.test(input) &&
                  input.length >= 10;
  msg.textContent = isValid ? "Valid password ✅" : "Invalid password ❌";
  msg.className = isValid ? "valid" : "invalid";
}
