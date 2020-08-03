// 影子宿主（shadow host）
var shadowHost = document.querySelector('.shadowhost');

// 创建影子根（shadow root）
var shadowRoot = shadowHost.createShadowRoot();

// 影子根作为影子树的第一个节点，其他的节点比如p节点都是它的子节点。
shadowRoot.innerHTML = '<p class="shadowroot_son">夏天夏天悄悄过去留下小秘密！</p>';