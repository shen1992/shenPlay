var shadowHost = document.querySelector('.shadowhost');
var shadowRoot = shadowHost.createShadowRoot();

var template = document.querySelector('.template')

shadowRoot.appendChild(document.importNode(template.content, true))