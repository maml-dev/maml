# MAML's Syntax Diagrams

<style>
  svg {
    width: 100%;
    height: auto;
    margin-top: 80px;
  }

  svg * {
    stroke: var(--vp-c-text-1) !important;
  }

  svg text {
    stroke: var(--vp-c-text-1) !important;
    stroke-width: 0.5 !important;
  }
</style>

<!-- Generated using https://abnf.dev/abnf2svg/ -->

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020.16 5643.71">
    <text x="124.906" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="47.52" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,47.52 144.596,51.84 144.596,43.2" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,47.52L150.356,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M156.116,62.64L344.238,62.64L344.238,32.4L156.116,32.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="250.177" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="366.763" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="369.931,47.52 358.411,51.84 358.411,43.2" style="fill:rgb(0,0,0)"></polygon>
    <path d="M358.411,47.52L364.171,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M369.931,62.64L426.494,62.64L426.494,32.4L369.931,32.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="398.213" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
    <text x="449.019" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="452.187,47.52 440.667,51.84 440.667,43.2" style="fill:rgb(0,0,0)"></polygon>
    <path d="M440.667,47.52L446.427,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M452.187,62.64L640.309,62.64L640.309,32.4L452.187,32.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="546.248" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <circle cx="668.655" cy="47.52" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,47.52L144.596,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M344.238,47.52L358.411,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M426.494,47.52L440.667,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="665.055,47.52 653.535,51.84 653.535,43.2" style="fill:rgb(0,0,0)"></polygon>
    <path d="M640.309,47.52L659.295,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="17.28" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">maml&nbsp;=</text>
    <text x="124.906" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="134.453" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,134.453 172.943,138.773 172.943,130.133" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,134.453L178.703,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,149.573L247.592,149.573L247.592,119.333L184.463,119.333Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="216.027" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">object</text>
    <path d="M172.943,134.453L172.943,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453L172.943,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="178.866" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="178.866" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,178.866 172.943,183.186 172.943,174.546" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,178.866L178.703,178.866" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,193.986L240.911,193.986L240.911,163.746L184.463,163.746Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="212.687" y="178.866" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">array</text>
    <path d="M172.943,178.866L172.943,178.866" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,163.866 Q 158.769,178.866 165.856,178.866 L 172.943,178.866" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="223.279" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="223.279" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,223.279 172.943,227.599 172.943,218.959" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,223.279L178.703,223.279" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,238.399L245.864,238.399L245.864,208.159L184.463,208.159Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="215.163" y="223.279" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">string</text>
    <path d="M172.943,223.279L172.943,223.279" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,208.279 Q 158.769,223.279 165.856,223.279 L 172.943,223.279" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="267.693" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="267.693" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,267.693 172.943,272.013 172.943,263.373" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,267.693L178.703,267.693" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,282.813L326.504,282.813L326.504,252.573L184.463,252.573Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="255.483" y="267.693" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">multiline-string</text>
    <path d="M172.943,267.693L172.943,267.693" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,252.693 Q 158.769,267.693 165.856,267.693 L 172.943,267.693" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="312.106" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="312.106" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,312.106 172.943,316.426 172.943,307.786" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,312.106L178.703,312.106" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,327.226L261.071,327.226L261.071,296.986L184.463,296.986Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="222.767" y="312.106" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">number</text>
    <path d="M172.943,312.106L172.943,312.106" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,297.106 Q 158.769,312.106 165.856,312.106 L 172.943,312.106" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="356.519" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="356.519" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,356.519 172.943,360.839 172.943,352.199" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,356.519L178.703,356.519" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,371.639L237.541,371.639A15.12 15.12 0 0 0 252.661 356.519A15.12 15.12 0 0 0 237.541 341.399L199.583,341.399A15.12 15.12 0 0 0 184.463 356.519A15.12 15.12 0 0 0 199.583 371.639Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="218.562" y="356.519" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"true"</text>
    <path d="M172.943,356.519L172.943,356.519" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,341.519 Q 158.769,356.519 165.856,356.519 L 172.943,356.519" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="400.932" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="400.932" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,400.932 172.943,405.252 172.943,396.612" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,400.932L178.703,400.932" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,416.052L246.987,416.052A15.12 15.12 0 0 0 262.107 400.932A15.12 15.12 0 0 0 246.987 385.812L199.583,385.812A15.12 15.12 0 0 0 184.463 400.932A15.12 15.12 0 0 0 199.583 416.052Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="400.932" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"false"</text>
    <path d="M172.943,400.932L172.943,400.932" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,385.932 Q 158.769,400.932 165.856,400.932 L 172.943,400.932" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="445.346" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="445.346" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,445.346 172.943,449.666 172.943,441.026" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,445.346L178.703,445.346" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,460.466L237.541,460.466A15.12 15.12 0 0 0 252.661 445.346A15.12 15.12 0 0 0 237.541 430.226L199.583,430.226A15.12 15.12 0 0 0 184.463 445.346A15.12 15.12 0 0 0 199.583 460.466Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="218.562" y="445.346" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"null"</text>
    <path d="M172.943,445.346L172.943,445.346" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,134.453 L 151.683,134.453 Q 158.769,134.453 158.769,149.453 L 158.769,430.346 Q 158.769,445.346 165.856,445.346 L 172.943,445.346" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.592,134.453L369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M240.911,178.866 L 339.851,178.866 Q 354.851,178.866 354.851,163.866 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M245.864,223.279 L 339.851,223.279 Q 354.851,223.279 354.851,208.279 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M326.504,267.693 L 340.677,267.693 Q 354.851,267.693 354.851,252.693 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M261.071,312.106 L 339.851,312.106 Q 354.851,312.106 354.851,297.106 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M252.661,356.519 L 339.851,356.519 Q 354.851,356.519 354.851,341.519 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,400.932 L 339.851,400.932 Q 354.851,400.932 354.851,385.932 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M252.661,445.346 L 339.851,445.346 Q 354.851,445.346 354.851,430.346 L 354.851,149.453 Q 354.851,134.453 361.937,134.453 L 369.024,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="397.37" cy="134.453" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,134.453L144.596,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="393.77,134.453 382.25,138.773 382.25,130.133" style="fill:rgb(0,0,0)"></polygon>
    <path d="M369.024,134.453L388.01,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="104.213" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">value&nbsp;=</text>
    <text x="124.906" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="532.278" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,532.278 144.596,536.598 144.596,527.958" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,532.278L150.356,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,547.398L180.855,547.398A15.12 15.12 0 0 0 195.975 532.278A15.12 15.12 0 0 0 180.855 517.158L171.236,517.158A15.12 15.12 0 0 0 156.116 532.278A15.12 15.12 0 0 0 171.236 547.398Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="176.046" y="532.278" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"{"</text>
    <text x="218.501" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="241.541" y="561.572" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="244.709,561.572 233.189,565.892 233.189,557.252" style="fill:rgb(0,0,0)"></polygon>
    <path d="M233.189,561.572L238.949,561.572" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M244.709,576.692L334.104,576.692L334.104,546.452L244.709,546.452Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="289.406" y="561.572" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">members</text>
    <path d="M210.149,532.278L357.144,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.149,532.278 L 215.909,532.278 Q 221.669,532.278 221.669,546.925 Q 221.669,561.572 227.429,561.572 L 233.189,561.572" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M334.104,561.572 L 339.864,561.572 Q 345.624,561.572 345.624,546.925 Q 345.624,532.278 351.384,532.278 L 357.144,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="379.669" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="382.837,532.278 371.317,536.598 371.317,527.958" style="fill:rgb(0,0,0)"></polygon>
    <path d="M371.317,532.278L377.077,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M382.837,547.398L570.959,547.398L570.959,517.158L382.837,517.158Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="476.898" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="593.484" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="596.652,532.278 585.132,536.598 585.132,527.958" style="fill:rgb(0,0,0)"></polygon>
    <path d="M585.132,532.278L590.892,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M611.772,547.398L621.391,547.398A15.12 15.12 0 0 0 636.511 532.278A15.12 15.12 0 0 0 621.391 517.158L611.772,517.158A15.12 15.12 0 0 0 596.652 532.278A15.12 15.12 0 0 0 611.772 547.398Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="616.581" y="532.278" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"}"</text>
    <circle cx="664.858" cy="532.278" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,532.278L144.596,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M195.975,532.278L210.149,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M357.144,532.278L371.317,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M570.959,532.278L585.132,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="661.258,532.278 649.738,536.598 649.738,527.958" style="fill:rgb(0,0,0)"></polygon>
    <path d="M636.511,532.278L655.498,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="502.038" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">object&nbsp;=</text>
    <text x="124.906" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="648.505" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,648.505 172.943,652.825 172.943,644.185" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,648.505L178.703,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,663.625L372.584,663.625L372.584,633.385L184.463,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="278.523" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="395.109" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="398.277,648.505 386.757,652.825 386.757,644.185" style="fill:rgb(0,0,0)"></polygon>
    <path d="M386.757,648.505L392.517,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M398.277,663.625L489.516,663.625L489.516,633.385L398.277,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="443.897" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">key-value</text>
    <text x="512.041" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="515.209,648.505 503.689,652.825 503.689,644.185" style="fill:rgb(0,0,0)"></polygon>
    <path d="M503.689,648.505L509.449,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M515.209,663.625L549.308,663.625L549.308,633.385L515.209,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="532.259" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
    <text x="571.834" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="594.874" y="677.798" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="598.042,677.798 586.522,682.118 586.522,673.478" style="fill:rgb(0,0,0)"></polygon>
    <path d="M586.522,677.798L592.282,677.798" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M598.042,692.918L686.861,692.918L686.861,662.678L598.042,662.678Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="642.451" y="677.798" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
    <path d="M563.482,648.505L709.901,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M563.482,648.505 L 569.242,648.505 Q 575.002,648.505 575.002,663.151 Q 575.002,677.798 580.762,677.798 L 586.522,677.798" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M686.861,677.798 L 692.621,677.798 Q 698.381,677.798 698.381,663.151 Q 698.381,648.505 704.141,648.505 L 709.901,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="732.426" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="735.594,648.505 724.074,652.825 724.074,644.185" style="fill:rgb(0,0,0)"></polygon>
    <path d="M724.074,648.505L729.834,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M735.594,663.625L828.445,663.625L828.445,633.385L735.594,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="782.02" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
    <text x="850.97" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="854.138,648.505 842.618,652.825 842.618,644.185" style="fill:rgb(0,0,0)"></polygon>
    <path d="M842.618,648.505L848.378,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M854.138,663.625L943.534,663.625L943.534,633.385L854.138,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="898.836" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">members</text>
    <path d="M172.943,648.505L172.943,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M372.584,648.505L386.757,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M489.516,648.505L503.689,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M549.308,648.505L563.482,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M709.901,648.505L724.074,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M828.445,648.505L842.618,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,648.505L172.943,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,722.211 172.943,726.531 172.943,717.891" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,722.211L178.703,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,737.331L372.584,737.331L372.584,707.091L184.463,707.091Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="278.523" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="395.109" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="398.277,722.211 386.757,726.531 386.757,717.891" style="fill:rgb(0,0,0)"></polygon>
    <path d="M386.757,722.211L392.517,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M398.277,737.331L489.516,737.331L489.516,707.091L398.277,707.091Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="443.897" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">key-value</text>
    <text x="512.041" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="515.209,722.211 503.689,726.531 503.689,717.891" style="fill:rgb(0,0,0)"></polygon>
    <path d="M503.689,722.211L509.449,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M515.209,737.331L549.308,737.331L549.308,707.091L515.209,707.091Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="532.259" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
    <text x="571.834" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="594.874" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="598.042,751.504 586.522,755.824 586.522,747.184" style="fill:rgb(0,0,0)"></polygon>
    <path d="M586.522,751.504L592.282,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M598.042,766.624L686.861,766.624L686.861,736.384L598.042,736.384Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="642.451" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
    <path d="M563.482,722.211L709.901,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M563.482,722.211 L 569.242,722.211 Q 575.002,722.211 575.002,736.858 Q 575.002,751.504 580.762,751.504 L 586.522,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M686.861,751.504 L 692.621,751.504 Q 698.381,751.504 698.381,736.858 Q 698.381,722.211 704.141,722.211 L 709.901,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="732.426" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="755.466" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="758.634,751.504 747.114,755.824 747.114,747.184" style="fill:rgb(0,0,0)"></polygon>
    <path d="M747.114,751.504L752.874,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M758.634,766.624L851.485,766.624L851.485,736.384L758.634,736.384Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="805.06" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
    <path d="M724.074,722.211L874.525,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M724.074,722.211 L 729.834,722.211 Q 735.594,722.211 735.594,736.858 Q 735.594,751.504 741.354,751.504 L 747.114,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M851.485,751.504 L 857.245,751.504 Q 863.005,751.504 863.005,736.858 Q 863.005,722.211 868.765,722.211 L 874.525,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M172.943,722.211L172.943,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M372.584,722.211L386.757,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M489.516,722.211L503.689,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M549.308,722.211L563.482,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M709.901,722.211L724.074,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,648.505 L 151.683,648.505 Q 158.769,648.505 158.769,663.505 L 158.769,707.211 Q 158.769,722.211 165.856,722.211 L 172.943,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M943.534,648.505L986.053,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M874.525,722.211 L 956.88,722.211 Q 971.88,722.211 971.88,707.211 L 971.88,663.505 Q 971.88,648.505 978.967,648.505 L 986.053,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="1014.4" cy="648.505" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,648.505L144.596,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="1010.8,648.505 999.28,652.825 999.28,644.185" style="fill:rgb(0,0,0)"></polygon>
    <path d="M986.053,648.505L1005.04,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="618.265" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">members&nbsp;=</text>
    <text x="124.906" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="838.437" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,838.437 144.596,842.757 144.596,834.117" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,838.437L150.356,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M156.116,853.557L196.782,853.557L196.782,823.317L156.116,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="176.449" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">key</text>
    <text x="219.307" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="222.475,838.437 210.955,842.757 210.955,834.117" style="fill:rgb(0,0,0)"></polygon>
    <path d="M210.955,838.437L216.715,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M222.475,853.557L256.574,853.557L256.574,823.317L222.475,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="239.525" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
    <text x="279.099" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="282.267,838.437 270.747,842.757 270.747,834.117" style="fill:rgb(0,0,0)"></polygon>
    <path d="M270.747,838.437L276.507,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M297.387,853.557L307.007,853.557A15.12 15.12 0 0 0 322.127 838.437A15.12 15.12 0 0 0 307.007 823.317L297.387,823.317A15.12 15.12 0 0 0 282.267 838.437A15.12 15.12 0 0 0 297.387 853.557Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="302.197" y="838.437" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">":"</text>
    <text x="344.652" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="347.82,838.437 336.3,842.757 336.3,834.117" style="fill:rgb(0,0,0)"></polygon>
    <path d="M336.3,838.437L342.06,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M347.82,853.557L381.919,853.557L381.919,823.317L347.82,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="364.869" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
    <text x="404.444" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="407.612,838.437 396.092,842.757 396.092,834.117" style="fill:rgb(0,0,0)"></polygon>
    <path d="M396.092,838.437L401.852,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M407.612,853.557L464.175,853.557L464.175,823.317L407.612,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="435.894" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
    <circle cx="492.522" cy="838.437" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,838.437L144.596,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M196.782,838.437L210.955,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M256.574,838.437L270.747,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M322.127,838.437L336.3,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M381.919,838.437L396.092,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="488.922,838.437 477.402,842.757 477.402,834.117" style="fill:rgb(0,0,0)"></polygon>
    <path d="M464.175,838.437L483.162,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="808.197" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">key-value&nbsp;=</text>
    <text x="124.906" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="925.37" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,925.37 172.943,929.69 172.943,921.05" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,925.37L178.703,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,940.49L245.864,940.49L245.864,910.25L184.463,910.25Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="215.163" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">string</text>
    <path d="M172.943,925.37L172.943,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,925.37L172.943,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="969.783" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="969.783" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,969.783 172.943,974.103 172.943,965.463" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,969.783L178.703,969.783" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,984.903L273.627,984.903L273.627,954.663L184.463,954.663Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="229.045" y="969.783" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">identifier</text>
    <path d="M172.943,969.783L172.943,969.783" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,925.37 L 151.683,925.37 Q 158.769,925.37 158.769,940.37 L 158.769,954.783 Q 158.769,969.783 165.856,969.783 L 172.943,969.783" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M245.864,925.37L316.147,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M273.627,969.783 L 287.801,969.783 Q 301.974,969.783 301.974,954.783 L 301.974,940.37 Q 301.974,925.37 309.061,925.37 L 316.147,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="344.494" cy="925.37" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,925.37L144.596,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="340.894,925.37 329.374,929.69 329.374,921.05" style="fill:rgb(0,0,0)"></polygon>
    <path d="M316.147,925.37L335.134,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="895.13" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">key&nbsp;=</text>
    <text x="124.906" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1056.72" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="167.121" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="167.121" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="195.468" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="195.468" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="198.636,1056.72 187.116,1061.04 187.116,1052.4" style="fill:rgb(0,0,0)"></polygon>
    <path d="M187.116,1056.72L192.876,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M198.636,1071.84L269.945,1071.84L269.945,1041.6L198.636,1041.6Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="234.29" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ALPHA</text>
    <path d="M187.116,1056.72L187.116,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M158.769,1056.72L187.116,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="195.468" y="1101.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="195.468" y="1101.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="198.636,1101.13 187.116,1105.45 187.116,1096.81" style="fill:rgb(0,0,0)"></polygon>
    <path d="M187.116,1101.13L192.876,1101.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M198.636,1116.25L260.037,1116.25L260.037,1086.01L198.636,1086.01Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="229.337" y="1101.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
    <path d="M187.116,1101.13L187.116,1101.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M158.769,1056.72 L 165.856,1056.72 Q 172.943,1056.72 172.943,1071.72 L 172.943,1086.13 Q 172.943,1101.13 180.029,1101.13 L 187.116,1101.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="195.468" y="1145.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="195.468" y="1145.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="198.636,1145.54 187.116,1149.86 187.116,1141.22" style="fill:rgb(0,0,0)"></polygon>
    <path d="M187.116,1145.54L192.876,1145.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M213.756,1160.66L223.375,1160.66A15.12 15.12 0 0 0 238.495 1145.54A15.12 15.12 0 0 0 223.375 1130.42L213.756,1130.42A15.12 15.12 0 0 0 198.636 1145.54A15.12 15.12 0 0 0 213.756 1160.66Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="218.565" y="1145.54" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"-"</text>
    <path d="M187.116,1145.54L187.116,1145.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M158.769,1056.72 L 165.856,1056.72 Q 172.943,1056.72 172.943,1071.72 L 172.943,1130.54 Q 172.943,1145.54 180.029,1145.54 L 187.116,1145.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="195.468" y="1189.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="195.468" y="1189.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="198.636,1189.96 187.116,1194.28 187.116,1185.64" style="fill:rgb(0,0,0)"></polygon>
    <path d="M187.116,1189.96L192.876,1189.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M213.756,1205.08L223.375,1205.08A15.12 15.12 0 0 0 238.495 1189.96A15.12 15.12 0 0 0 223.375 1174.84L213.756,1174.84A15.12 15.12 0 0 0 198.636 1189.96A15.12 15.12 0 0 0 213.756 1205.08Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="218.565" y="1189.96" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"_"</text>
    <path d="M187.116,1189.96L187.116,1189.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M158.769,1056.72 L 165.856,1056.72 Q 172.943,1056.72 172.943,1071.72 L 172.943,1174.96 Q 172.943,1189.96 180.029,1189.96 L 187.116,1189.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M269.945,1056.72L312.464,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M260.037,1101.13 L 283.291,1101.13 Q 298.291,1101.13 298.291,1086.13 L 298.291,1071.72 Q 298.291,1056.72 305.378,1056.72 L 312.464,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M238.495,1145.54 L 283.291,1145.54 Q 298.291,1145.54 298.291,1130.54 L 298.291,1071.72 Q 298.291,1056.72 305.378,1056.72 L 312.464,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M238.495,1189.96 L 283.291,1189.96 Q 298.291,1189.96 298.291,1174.96 L 298.291,1071.72 Q 298.291,1056.72 305.378,1056.72 L 312.464,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M158.769,1056.72L158.769,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M312.464,1056.72L312.464,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M312.464,1056.72 L 319.551,1056.72 Q 326.638,1056.72 326.638,1071.72 L 326.638,1204.25 Q 326.638,1219.25 311.638,1219.25 L 159.596,1219.25 Q 144.596,1219.25 144.596,1204.25 L 144.596,1071.72 Q 144.596,1056.72 151.683,1056.72 L 158.769,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="354.984" cy="1056.72" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1056.72L158.769,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="351.384,1056.72 339.864,1061.04 339.864,1052.4" style="fill:rgb(0,0,0)"></polygon>
    <path d="M312.464,1056.72L345.624,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1026.48" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">identifier&nbsp;=</text>
    <text x="124.906" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1291.06" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,1291.06 144.596,1295.38 144.596,1286.74" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,1291.06L150.356,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,1306.18L180.855,1306.18A15.12 15.12 0 0 0 195.975 1291.06A15.12 15.12 0 0 0 180.855 1275.94L171.236,1275.94A15.12 15.12 0 0 0 156.116 1291.06A15.12 15.12 0 0 0 171.236 1306.18Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="176.046" y="1291.06" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"["</text>
    <text x="218.501" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="241.541" y="1320.36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="244.709,1320.36 233.189,1324.68 233.189,1316.04" style="fill:rgb(0,0,0)"></polygon>
    <path d="M233.189,1320.36L238.949,1320.36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M244.709,1335.48L302.309,1335.48L302.309,1305.24L244.709,1305.24Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="273.509" y="1320.36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">items</text>
    <path d="M210.149,1291.06L325.349,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.149,1291.06 L 215.909,1291.06 Q 221.669,1291.06 221.669,1305.71 Q 221.669,1320.36 227.429,1320.36 L 233.189,1320.36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.309,1320.36 L 308.069,1320.36 Q 313.829,1320.36 313.829,1305.71 Q 313.829,1291.06 319.589,1291.06 L 325.349,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="347.874" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="351.042,1291.06 339.522,1295.38 339.522,1286.74" style="fill:rgb(0,0,0)"></polygon>
    <path d="M339.522,1291.06L345.282,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M351.042,1306.18L539.163,1306.18L539.163,1275.94L351.042,1275.94Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="445.103" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="561.689" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="564.857,1291.06 553.337,1295.38 553.337,1286.74" style="fill:rgb(0,0,0)"></polygon>
    <path d="M553.337,1291.06L559.097,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M579.977,1306.18L589.596,1306.18A15.12 15.12 0 0 0 604.716 1291.06A15.12 15.12 0 0 0 589.596 1275.94L579.977,1275.94A15.12 15.12 0 0 0 564.857 1291.06A15.12 15.12 0 0 0 579.977 1306.18Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="584.786" y="1291.06" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"]"</text>
    <circle cx="633.062" cy="1291.06" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1291.06L144.596,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M195.975,1291.06L210.149,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M325.349,1291.06L339.522,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M539.163,1291.06L553.337,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="629.462,1291.06 617.942,1295.38 617.942,1286.74" style="fill:rgb(0,0,0)"></polygon>
    <path d="M604.716,1291.06L623.702,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1260.82" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">array&nbsp;=</text>
    <text x="124.906" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1407.29" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,1407.29 172.943,1411.61 172.943,1402.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,1407.29L178.703,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,1422.41L372.584,1422.41L372.584,1392.17L184.463,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="278.523" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="395.109" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="398.277,1407.29 386.757,1411.61 386.757,1402.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M386.757,1407.29L392.517,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M398.277,1422.41L454.841,1422.41L454.841,1392.17L398.277,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="426.559" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
    <text x="477.366" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="480.534,1407.29 469.014,1411.61 469.014,1402.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M469.014,1407.29L474.774,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M480.534,1422.41L514.633,1422.41L514.633,1392.17L480.534,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="497.583" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
    <text x="537.158" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="560.198" y="1436.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="563.366,1436.58 551.846,1440.9 551.846,1432.26" style="fill:rgb(0,0,0)"></polygon>
    <path d="M551.846,1436.58L557.606,1436.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M563.366,1451.7L652.186,1451.7L652.186,1421.46L563.366,1421.46Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="607.776" y="1436.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
    <path d="M528.806,1407.29L675.226,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M528.806,1407.29 L 534.566,1407.29 Q 540.326,1407.29 540.326,1421.93 Q 540.326,1436.58 546.086,1436.58 L 551.846,1436.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M652.186,1436.58 L 657.946,1436.58 Q 663.706,1436.58 663.706,1421.93 Q 663.706,1407.29 669.466,1407.29 L 675.226,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="697.751" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="700.919,1407.29 689.399,1411.61 689.399,1402.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M689.399,1407.29L695.159,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M700.919,1422.41L793.77,1422.41L793.77,1392.17L700.919,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="747.344" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
    <text x="816.295" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="819.463,1407.29 807.943,1411.61 807.943,1402.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M807.943,1407.29L813.703,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M819.463,1422.41L877.063,1422.41L877.063,1392.17L819.463,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="848.263" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">items</text>
    <path d="M172.943,1407.29L172.943,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M372.584,1407.29L386.757,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M454.841,1407.29L469.014,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M514.633,1407.29L528.806,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M675.226,1407.29L689.399,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M793.77,1407.29L807.943,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,1407.29L172.943,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,1480.99 172.943,1485.31 172.943,1476.67" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,1480.99L178.703,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,1496.11L372.584,1496.11L372.584,1465.87L184.463,1465.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="278.523" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
    <text x="395.109" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="398.277,1480.99 386.757,1485.31 386.757,1476.67" style="fill:rgb(0,0,0)"></polygon>
    <path d="M386.757,1480.99L392.517,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M398.277,1496.11L454.841,1496.11L454.841,1465.87L398.277,1465.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="426.559" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
    <text x="477.366" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="480.534,1480.99 469.014,1485.31 469.014,1476.67" style="fill:rgb(0,0,0)"></polygon>
    <path d="M469.014,1480.99L474.774,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M480.534,1496.11L514.633,1496.11L514.633,1465.87L480.534,1465.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="497.583" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
    <text x="537.158" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="560.198" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="563.366,1510.29 551.846,1514.61 551.846,1505.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M551.846,1510.29L557.606,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M563.366,1525.41L652.186,1525.41L652.186,1495.17L563.366,1495.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="607.776" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
    <path d="M528.806,1480.99L675.226,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M528.806,1480.99 L 534.566,1480.99 Q 540.326,1480.99 540.326,1495.64 Q 540.326,1510.29 546.086,1510.29 L 551.846,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M652.186,1510.29 L 657.946,1510.29 Q 663.706,1510.29 663.706,1495.64 Q 663.706,1480.99 669.466,1480.99 L 675.226,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="697.751" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="720.791" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="723.959,1510.29 712.439,1514.61 712.439,1505.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M712.439,1510.29L718.199,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M723.959,1525.41L816.81,1525.41L816.81,1495.17L723.959,1495.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="770.384" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
    <path d="M689.399,1480.99L839.85,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M689.399,1480.99 L 695.159,1480.99 Q 700.919,1480.99 700.919,1495.64 Q 700.919,1510.29 706.679,1510.29 L 712.439,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M816.81,1510.29 L 822.57,1510.29 Q 828.33,1510.29 828.33,1495.64 Q 828.33,1480.99 834.09,1480.99 L 839.85,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M172.943,1480.99L172.943,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M372.584,1480.99L386.757,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M454.841,1480.99L469.014,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M514.633,1480.99L528.806,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M675.226,1480.99L689.399,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,1407.29 L 151.683,1407.29 Q 158.769,1407.29 158.769,1422.29 L 158.769,1465.99 Q 158.769,1480.99 165.856,1480.99 L 172.943,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M877.063,1407.29L919.583,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M839.85,1480.99 L 890.41,1480.99 Q 905.41,1480.99 905.41,1465.99 L 905.41,1422.29 Q 905.41,1407.29 912.496,1407.29 L 919.583,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="947.929" cy="1407.29" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1407.29L144.596,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="944.329,1407.29 932.809,1411.61 932.809,1402.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M919.583,1407.29L938.569,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1377.05" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">items&nbsp;=</text>
    <text x="124.906" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1597.22" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,1597.22 172.943,1601.54 172.943,1592.9" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,1597.22L178.703,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,1612.34L209.202,1612.34A15.12 15.12 0 0 0 224.322 1597.22A15.12 15.12 0 0 0 209.202 1582.1L199.583,1582.1A15.12 15.12 0 0 0 184.463 1597.22A15.12 15.12 0 0 0 199.583 1612.34Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="1597.22" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">","</text>
    <path d="M172.943,1597.22L172.943,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,1597.22L172.943,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="1641.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="1641.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,1641.63 172.943,1645.95 172.943,1637.31" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,1641.63L178.703,1641.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,1656.75L261.647,1656.75L261.647,1626.51L184.463,1626.51Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.055" y="1641.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
    <path d="M172.943,1641.63L172.943,1641.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,1597.22 L 151.683,1597.22 Q 158.769,1597.22 158.769,1612.22 L 158.769,1626.63 Q 158.769,1641.63 165.856,1641.63 L 172.943,1641.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,1597.22L304.166,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M261.647,1641.63 L 275.82,1641.63 Q 289.993,1641.63 289.993,1626.63 L 289.993,1612.22 Q 289.993,1597.22 297.08,1597.22 L 304.166,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="332.513" cy="1597.22" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1597.22L144.596,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="328.913,1597.22 317.393,1601.54 317.393,1592.9" style="fill:rgb(0,0,0)"></polygon>
    <path d="M304.166,1597.22L323.153,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1566.98" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">separator&nbsp;=</text>
    <text x="124.906" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1728.57" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,1728.57 144.596,1732.89 144.596,1724.25" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,1728.57L150.356,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M156.116,1743.69L215.214,1743.69L215.214,1713.45L156.116,1713.45Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="185.665" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
    <text x="237.739" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="274.952" y="1757.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="274.952" y="1757.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="278.12,1757.86 266.6,1762.18 266.6,1753.54" style="fill:rgb(0,0,0)"></polygon>
    <path d="M266.6,1757.86L272.36,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M278.12,1772.98L327.311,1772.98L327.311,1742.74L278.12,1742.74Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="302.715" y="1757.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">char</text>
    <path d="M266.6,1757.86L266.6,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.311,1757.86L327.311,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.311,1757.86 L 334.397,1757.86 Q 341.484,1757.86 341.484,1772.51 Q 341.484,1787.15 326.484,1787.15 L 267.427,1787.15 Q 252.427,1787.15 252.427,1772.51 Q 252.427,1757.86 259.514,1757.86 L 266.6,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,1728.57L364.524,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,1728.57 L 235.147,1728.57 Q 240.907,1728.57 240.907,1743.21 Q 240.907,1757.86 253.754,1757.86 L 266.6,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.311,1757.86 L 340.157,1757.86 Q 353.004,1757.86 353.004,1743.21 Q 353.004,1728.57 358.764,1728.57 L 364.524,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="387.049" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="390.217,1728.57 378.697,1732.89 378.697,1724.25" style="fill:rgb(0,0,0)"></polygon>
    <path d="M378.697,1728.57L384.457,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M390.217,1743.69L449.315,1743.69L449.315,1713.45L390.217,1713.45Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="419.766" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
    <circle cx="477.661" cy="1728.57" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1728.57L144.596,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M215.214,1728.57L229.387,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M364.524,1728.57L378.697,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="474.061,1728.57 462.541,1732.89 462.541,1724.25" style="fill:rgb(0,0,0)"></polygon>
    <path d="M449.315,1728.57L468.301,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1698.33" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">string&nbsp;=</text>
    <text x="124.906" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1858.97" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="167.121" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="167.121" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="170.289,1858.97 158.769,1863.29 158.769,1854.65" style="fill:rgb(0,0,0)"></polygon>
    <path d="M158.769,1858.97L164.529,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M170.289,1874.09L229.387,1874.09L229.387,1843.85L170.289,1843.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="199.838" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
    <path d="M158.769,1858.97L158.769,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,1858.97L229.387,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,1858.97 L 236.474,1858.97 Q 243.56,1858.97 243.56,1873.61 Q 243.56,1888.26 228.56,1888.26 L 159.596,1888.26 Q 144.596,1888.26 144.596,1873.61 Q 144.596,1858.97 151.683,1858.97 L 158.769,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="266.085" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="289.125" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="292.293,1888.26 280.773,1892.58 280.773,1883.94" style="fill:rgb(0,0,0)"></polygon>
    <path d="M280.773,1888.26L286.533,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M292.293,1903.38L369.477,1903.38L369.477,1873.14L292.293,1873.14Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="330.885" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
    <path d="M257.733,1858.97L392.517,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M257.733,1858.97 L 263.493,1858.97 Q 269.253,1858.97 269.253,1873.61 Q 269.253,1888.26 275.013,1888.26 L 280.773,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M369.477,1888.26 L 375.237,1888.26 Q 380.997,1888.26 380.997,1873.61 Q 380.997,1858.97 386.757,1858.97 L 392.517,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="415.043" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="418.211,1858.97 406.691,1863.29 406.691,1854.65" style="fill:rgb(0,0,0)"></polygon>
    <path d="M406.691,1858.97L412.451,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M418.211,1874.09L606.102,1874.09L606.102,1843.85L418.211,1843.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="512.156" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">multiline-string-body</text>
    <text x="642.8" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="642.8" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="645.968,1858.97 634.448,1863.29 634.448,1854.65" style="fill:rgb(0,0,0)"></polygon>
    <path d="M634.448,1858.97L640.208,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M645.968,1874.09L705.066,1874.09L705.066,1843.85L645.968,1843.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="675.517" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
    <path d="M634.448,1858.97L634.448,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M705.066,1858.97L705.066,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M705.066,1858.97 L 712.153,1858.97 Q 719.239,1858.97 719.239,1873.61 Q 719.239,1888.26 704.239,1888.26 L 635.275,1888.26 Q 620.275,1888.26 620.275,1873.61 Q 620.275,1858.97 627.362,1858.97 L 634.448,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="747.586" cy="1858.97" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1858.97L158.769,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,1858.97L257.733,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M392.517,1858.97L406.691,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M606.102,1858.97L634.448,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="743.986,1858.97 732.466,1863.29 732.466,1854.65" style="fill:rgb(0,0,0)"></polygon>
    <path d="M705.066,1858.97L738.226,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1828.73" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">multiline-string&nbsp;=</text>
    <text x="124.906" y="1975.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="1975.19" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="1975.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="190.161" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="190.161" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="193.329,2004.49 181.809,2008.81 181.809,2000.17" style="fill:rgb(0,0,0)"></polygon>
    <path d="M181.809,2004.49L187.569,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M193.329,2019.61L298.853,2019.61L298.853,1989.37L193.329,1989.37Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="246.091" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">literal-char</text>
    <path d="M181.809,2004.49L181.809,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M298.853,2004.49L298.853,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M298.853,2004.49 L 305.939,2004.49 Q 313.026,2004.49 313.026,2019.13 Q 313.026,2033.78 298.026,2033.78 L 182.636,2033.78 Q 167.636,2033.78 167.636,2019.13 Q 167.636,2004.49 174.723,2004.49 L 181.809,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,1975.19L336.066,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,1975.19 L 150.356,1975.19 Q 156.116,1975.19 156.116,1989.84 Q 156.116,2004.49 168.963,2004.49 L 181.809,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M298.853,2004.49 L 311.699,2004.49 Q 324.546,2004.49 324.546,1989.84 Q 324.546,1975.19 330.306,1975.19 L 336.066,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="358.591" y="1975.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="395.804" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="395.804" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="398.972,2004.49 387.452,2008.81 387.452,2000.17" style="fill:rgb(0,0,0)"></polygon>
    <path d="M387.452,2004.49L393.212,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M398.972,2019.61L537.443,2019.61L537.443,1989.37L398.972,1989.37Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="468.207" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">allowed-quotes</text>
    <text x="574.141" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="574.141" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="577.309,2004.49 565.789,2008.81 565.789,2000.17" style="fill:rgb(0,0,0)"></polygon>
    <path d="M565.789,2004.49L571.549,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M577.309,2019.61L682.832,2019.61L682.832,1989.37L577.309,1989.37Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="630.071" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">literal-char</text>
    <path d="M565.789,2004.49L565.789,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M682.832,2004.49L682.832,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M682.832,2004.49 L 689.919,2004.49 Q 697.006,2004.49 697.006,2019.13 Q 697.006,2033.78 682.006,2033.78 L 566.616,2033.78 Q 551.616,2033.78 551.616,2019.13 Q 551.616,2004.49 558.703,2004.49 L 565.789,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M387.452,2004.49L387.452,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M537.443,2004.49L565.789,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="697.006,2004.49 685.486,2008.81 685.486,2000.17" style="fill:rgb(0,0,0)"></polygon>
    <path d="M682.832,2004.49L691.246,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M697.006,2004.49 L 704.092,2004.49 Q 711.179,2004.49 711.179,2019.49 L 711.179,2032.95 Q 711.179,2047.95 696.179,2047.95 L 388.279,2047.95 Q 373.279,2047.95 373.279,2032.95 L 373.279,2019.49 Q 373.279,2004.49 380.366,2004.49 L 387.452,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M350.239,1975.19L734.219,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M350.239,1975.19 L 355.999,1975.19 Q 361.759,1975.19 361.759,1989.84 Q 361.759,2004.49 374.606,2004.49 L 387.452,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M697.006,2004.49 L 709.852,2004.49 Q 722.699,2004.49 722.699,1989.84 Q 722.699,1975.19 728.459,1975.19 L 734.219,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="756.744" y="1975.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="779.784" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="782.952,2004.49 771.432,2008.81 771.432,2000.17" style="fill:rgb(0,0,0)"></polygon>
    <path d="M771.432,2004.49L777.192,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M782.952,2019.61L921.422,2019.61L921.422,1989.37L782.952,1989.37Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="852.187" y="2004.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">allowed-quotes</text>
    <path d="M748.392,1975.19L944.462,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M748.392,1975.19 L 754.152,1975.19 Q 759.912,1975.19 759.912,1989.84 Q 759.912,2004.49 765.672,2004.49 L 771.432,2004.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M921.422,2004.49 L 927.182,2004.49 Q 932.942,2004.49 932.942,1989.84 Q 932.942,1975.19 938.702,1975.19 L 944.462,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="972.809" cy="1975.19" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,1975.19L144.596,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M336.066,1975.19L350.239,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M734.219,1975.19L748.392,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="969.209,1975.19 957.689,1979.51 957.689,1970.87" style="fill:rgb(0,0,0)"></polygon>
    <path d="M944.462,1975.19L963.449,1975.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="1944.95" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">multiline-string-body&nbsp;=</text>
    <text x="124.906" y="2119.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2119.77" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="167.121" y="2119.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="167.121" y="2119.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="170.289,2119.77 158.769,2124.09 158.769,2115.45" style="fill:rgb(0,0,0)"></polygon>
    <path d="M158.769,2119.77L164.529,2119.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M170.289,2134.89L229.387,2134.89L229.387,2104.65L170.289,2104.65Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="199.838" y="2119.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
    <path d="M158.769,2119.77L158.769,2119.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,2119.77L229.387,2119.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M229.387,2119.77 L 236.474,2119.77 Q 243.56,2119.77 243.56,2134.41 Q 243.56,2149.06 228.56,2149.06 L 159.596,2149.06 Q 144.596,2149.06 144.596,2134.41 Q 144.596,2119.77 151.683,2119.77 L 158.769,2119.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="271.907" cy="2119.77" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2119.77L158.769,2119.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="268.307,2119.77 256.787,2124.09 256.787,2115.45" style="fill:rgb(0,0,0)"></polygon>
    <path d="M229.387,2119.77L262.547,2119.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2089.53" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">allowed-quotes&nbsp;=</text>
    <text x="124.906" y="2220.87" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2220.87" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="2220.87" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,2220.87 144.596,2225.19 144.596,2216.55" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,2220.87L150.356,2220.87" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,2235.99L190.302,2235.99A15.12 15.12 0 0 0 205.422 2220.87A15.12 15.12 0 0 0 190.302 2205.75L171.236,2205.75A15.12 15.12 0 0 0 156.116 2220.87A15.12 15.12 0 0 0 171.236 2235.99Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="180.769" y="2220.87" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x22</text>
    <circle cx="233.768" cy="2220.87" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2220.87L144.596,2220.87" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="230.168,2220.87 218.648,2225.19 218.648,2216.55" style="fill:rgb(0,0,0)"></polygon>
    <path d="M205.422,2220.87L224.408,2220.87" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2190.63" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">quote&nbsp;=</text>
    <text x="124.906" y="2307.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2307.8" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="2307.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2307.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2307.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2307.8 172.943,2312.12 172.943,2303.48" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2307.8L178.703,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,2322.92L218.648,2322.92A15.12 15.12 0 0 0 233.768 2307.8A15.12 15.12 0 0 0 218.648 2292.68L199.583,2292.68A15.12 15.12 0 0 0 184.463 2307.8A15.12 15.12 0 0 0 199.583 2322.92Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="209.115" y="2307.8" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x09</text>
    <path d="M172.943,2307.8L172.943,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2307.8L172.943,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="2352.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2352.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2352.22 172.943,2356.54 172.943,2347.9" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2352.22L178.703,2352.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,2367.34L246.987,2367.34A15.12 15.12 0 0 0 262.107 2352.22A15.12 15.12 0 0 0 246.987 2337.1L199.583,2337.1A15.12 15.12 0 0 0 184.463 2352.22A15.12 15.12 0 0 0 199.583 2367.34Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="2352.22" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20-21</text>
    <path d="M172.943,2352.22L172.943,2352.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2307.8 L 151.683,2307.8 Q 158.769,2307.8 158.769,2322.8 L 158.769,2337.22 Q 158.769,2352.22 165.856,2352.22 L 172.943,2352.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="2396.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2396.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2396.63 172.943,2400.95 172.943,2392.31" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2396.63L178.703,2396.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,2411.75L246.987,2411.75A15.12 15.12 0 0 0 262.107 2396.63A15.12 15.12 0 0 0 246.987 2381.51L199.583,2381.51A15.12 15.12 0 0 0 184.463 2396.63A15.12 15.12 0 0 0 199.583 2411.75Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="2396.63" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x23-7E</text>
    <path d="M172.943,2396.63L172.943,2396.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2307.8 L 151.683,2307.8 Q 158.769,2307.8 158.769,2322.8 L 158.769,2381.63 Q 158.769,2396.63 165.856,2396.63 L 172.943,2396.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="2441.04" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2441.04" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2441.04 172.943,2445.36 172.943,2436.72" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2441.04L178.703,2441.04" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,2456.16L271.208,2456.16L271.208,2425.92L184.463,2425.92Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="227.835" y="2441.04" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">non-ascii</text>
    <path d="M172.943,2441.04L172.943,2441.04" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2307.8 L 151.683,2307.8 Q 158.769,2307.8 158.769,2322.8 L 158.769,2426.04 Q 158.769,2441.04 165.856,2441.04 L 172.943,2441.04" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="2485.46" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2485.46" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2485.46 172.943,2489.78 172.943,2481.14" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2485.46L178.703,2485.46" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,2500.58L261.647,2500.58L261.647,2470.34L184.463,2470.34Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.055" y="2485.46" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
    <path d="M172.943,2485.46L172.943,2485.46" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2307.8 L 151.683,2307.8 Q 158.769,2307.8 158.769,2322.8 L 158.769,2470.46 Q 158.769,2485.46 165.856,2485.46 L 172.943,2485.46" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M233.768,2307.8L313.728,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,2352.22 L 284.555,2352.22 Q 299.555,2352.22 299.555,2337.22 L 299.555,2322.8 Q 299.555,2307.8 306.641,2307.8 L 313.728,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,2396.63 L 284.555,2396.63 Q 299.555,2396.63 299.555,2381.63 L 299.555,2322.8 Q 299.555,2307.8 306.641,2307.8 L 313.728,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M271.208,2441.04 L 285.381,2441.04 Q 299.555,2441.04 299.555,2426.04 L 299.555,2322.8 Q 299.555,2307.8 306.641,2307.8 L 313.728,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M261.647,2485.46 L 284.555,2485.46 Q 299.555,2485.46 299.555,2470.46 L 299.555,2322.8 Q 299.555,2307.8 306.641,2307.8 L 313.728,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="342.074" cy="2307.8" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2307.8L144.596,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="338.474,2307.8 326.954,2312.12 326.954,2303.48" style="fill:rgb(0,0,0)"></polygon>
    <path d="M313.728,2307.8L332.714,2307.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2277.56" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">literal-char&nbsp;=</text>
    <text x="124.906" y="2572.39" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2572.39" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="2572.39" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="175.988" y="2601.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="179.156,2601.68 167.636,2606 167.636,2597.36" style="fill:rgb(0,0,0)"></polygon>
    <path d="M167.636,2601.68L173.396,2601.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M194.276,2616.8L203.895,2616.8A15.12 15.12 0 0 0 219.015 2601.68A15.12 15.12 0 0 0 203.895 2586.56L194.276,2586.56A15.12 15.12 0 0 0 179.156 2601.68A15.12 15.12 0 0 0 194.276 2616.8Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="199.086" y="2601.68" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"-"</text>
    <path d="M144.596,2572.39L242.055,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2572.39 L 150.356,2572.39 Q 156.116,2572.39 156.116,2587.04 Q 156.116,2601.68 161.876,2601.68 L 167.636,2601.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M219.015,2601.68 L 224.775,2601.68 Q 230.535,2601.68 230.535,2587.04 Q 230.535,2572.39 236.295,2572.39 L 242.055,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="264.581" y="2572.39" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="267.749,2572.39 256.229,2576.71 256.229,2568.07" style="fill:rgb(0,0,0)"></polygon>
    <path d="M256.229,2572.39L261.989,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M267.749,2587.51L340.094,2587.51L340.094,2557.27L267.749,2557.27Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="303.921" y="2572.39" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">integer</text>
    <text x="362.619" y="2572.39" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="385.659" y="2601.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="388.827,2601.68 377.307,2606 377.307,2597.36" style="fill:rgb(0,0,0)"></polygon>
    <path d="M377.307,2601.68L383.067,2601.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M388.827,2616.8L466.011,2616.8L466.011,2586.56L388.827,2586.56Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="427.419" y="2601.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">fraction</text>
    <path d="M354.267,2572.39L489.051,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M354.267,2572.39 L 360.027,2572.39 Q 365.787,2572.39 365.787,2587.04 Q 365.787,2601.68 371.547,2601.68 L 377.307,2601.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M466.011,2601.68 L 471.771,2601.68 Q 477.531,2601.68 477.531,2587.04 Q 477.531,2572.39 483.291,2572.39 L 489.051,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="511.577" y="2572.39" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="534.617" y="2601.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="537.785,2601.68 526.265,2606 526.265,2597.36" style="fill:rgb(0,0,0)"></polygon>
    <path d="M526.265,2601.68L532.025,2601.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M537.785,2616.8L579.026,2616.8L579.026,2586.56L537.785,2586.56Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="558.405" y="2601.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">exp</text>
    <path d="M503.225,2572.39L602.066,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M503.225,2572.39 L 508.985,2572.39 Q 514.745,2572.39 514.745,2587.04 Q 514.745,2601.68 520.505,2601.68 L 526.265,2601.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M579.026,2601.68 L 584.786,2601.68 Q 590.546,2601.68 590.546,2587.04 Q 590.546,2572.39 596.306,2572.39 L 602.066,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="630.413" cy="2572.39" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2572.39L144.596,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M242.055,2572.39L256.229,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M340.094,2572.39L354.267,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M489.051,2572.39L503.225,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="626.813,2572.39 615.293,2576.71 615.293,2568.07" style="fill:rgb(0,0,0)"></polygon>
    <path d="M602.066,2572.39L621.053,2572.39" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2542.15" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">number&nbsp;=</text>
    <text x="124.906" y="2688.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2688.62" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="2688.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,2688.62 144.596,2692.94 144.596,2684.3" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,2688.62L150.356,2688.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,2703.74L218.641,2703.74A15.12 15.12 0 0 0 233.761 2688.62A15.12 15.12 0 0 0 218.641 2673.5L171.236,2673.5A15.12 15.12 0 0 0 156.116 2688.62A15.12 15.12 0 0 0 171.236 2703.74Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="194.939" y="2688.62" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x31-39</text>
    <circle cx="262.107" cy="2688.62" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2688.62L144.596,2688.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="258.507,2688.62 246.987,2692.94 246.987,2684.3" style="fill:rgb(0,0,0)"></polygon>
    <path d="M233.761,2688.62L252.747,2688.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2658.38" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">onenine&nbsp;=</text>
    <text x="124.906" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2775.55" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2775.55 172.943,2779.87 172.943,2771.23" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2775.55L178.703,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,2790.67L209.202,2790.67A15.12 15.12 0 0 0 224.322 2775.55A15.12 15.12 0 0 0 209.202 2760.43L199.583,2760.43A15.12 15.12 0 0 0 184.463 2775.55A15.12 15.12 0 0 0 199.583 2790.67Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="2775.55" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"e"</text>
    <path d="M172.943,2775.55L172.943,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2775.55L172.943,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="2819.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="2819.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,2819.96 172.943,2824.28 172.943,2815.64" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,2819.96L178.703,2819.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,2835.08L209.202,2835.08A15.12 15.12 0 0 0 224.322 2819.96A15.12 15.12 0 0 0 209.202 2804.84L199.583,2804.84A15.12 15.12 0 0 0 184.463 2819.96A15.12 15.12 0 0 0 199.583 2835.08Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="2819.96" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"E"</text>
    <path d="M172.943,2819.96L172.943,2819.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,2775.55 L 151.683,2775.55 Q 158.769,2775.55 158.769,2790.55 L 158.769,2804.96 Q 158.769,2819.96 165.856,2819.96 L 172.943,2819.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,2775.55L266.842,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,2819.96 L 238.495,2819.96 Q 252.668,2819.96 252.668,2804.96 L 252.668,2790.55 Q 252.668,2775.55 259.755,2775.55 L 266.842,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="289.367" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="312.407" y="2804.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="340.753" y="2804.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="340.753" y="2804.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="343.921,2804.84 332.401,2809.16 332.401,2800.52" style="fill:rgb(0,0,0)"></polygon>
    <path d="M332.401,2804.84L338.161,2804.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M359.041,2819.96L368.66,2819.96A15.12 15.12 0 0 0 383.78 2804.84A15.12 15.12 0 0 0 368.66 2789.72L359.041,2789.72A15.12 15.12 0 0 0 343.921 2804.84A15.12 15.12 0 0 0 359.041 2819.96Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="363.851" y="2804.84" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"-"</text>
    <path d="M332.401,2804.84L332.401,2804.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M304.055,2804.84L332.401,2804.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="340.753" y="2849.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="340.753" y="2849.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="343.921,2849.26 332.401,2853.58 332.401,2844.94" style="fill:rgb(0,0,0)"></polygon>
    <path d="M332.401,2849.26L338.161,2849.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M359.041,2864.38L368.66,2864.38A15.12 15.12 0 0 0 383.78 2849.26A15.12 15.12 0 0 0 368.66 2834.14L359.041,2834.14A15.12 15.12 0 0 0 343.921 2849.26A15.12 15.12 0 0 0 359.041 2864.38Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="363.851" y="2849.26" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"+"</text>
    <path d="M332.401,2849.26L332.401,2849.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M304.055,2804.84 L 311.141,2804.84 Q 318.228,2804.84 318.228,2819.84 L 318.228,2834.26 Q 318.228,2849.26 325.315,2849.26 L 332.401,2849.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M383.78,2804.84L426.3,2804.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M383.78,2849.26 L 397.954,2849.26 Q 412.127,2849.26 412.127,2834.26 L 412.127,2819.84 Q 412.127,2804.84 419.213,2804.84 L 426.3,2804.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M281.015,2775.55L449.34,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M281.015,2775.55 L 286.775,2775.55 Q 292.535,2775.55 292.535,2790.2 Q 292.535,2804.84 298.295,2804.84 L 304.055,2804.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M426.3,2804.84 L 432.06,2804.84 Q 437.82,2804.84 437.82,2790.2 Q 437.82,2775.55 443.58,2775.55 L 449.34,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="486.039" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="486.039" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="489.207,2775.55 477.687,2779.87 477.687,2771.23" style="fill:rgb(0,0,0)"></polygon>
    <path d="M477.687,2775.55L483.447,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M489.207,2790.67L550.608,2790.67L550.608,2760.43L489.207,2760.43Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="519.907" y="2775.55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
    <path d="M477.687,2775.55L477.687,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M550.608,2775.55L550.608,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M550.608,2775.55 L 557.695,2775.55 Q 564.781,2775.55 564.781,2790.2 Q 564.781,2804.84 549.781,2804.84 L 478.513,2804.84 Q 463.513,2804.84 463.513,2790.2 Q 463.513,2775.55 470.6,2775.55 L 477.687,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="593.128" cy="2775.55" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2775.55L144.596,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M266.842,2775.55L281.015,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M449.34,2775.55L477.687,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="589.528,2775.55 578.008,2779.87 578.008,2771.23" style="fill:rgb(0,0,0)"></polygon>
    <path d="M550.608,2775.55L583.768,2775.55" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2745.31" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">exp&nbsp;=</text>
    <text x="124.906" y="2936.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="2936.19" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="2936.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,2936.19 144.596,2940.51 144.596,2931.87" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,2936.19L150.356,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,2951.31L180.855,2951.31A15.12 15.12 0 0 0 195.975 2936.19A15.12 15.12 0 0 0 180.855 2921.07L171.236,2921.07A15.12 15.12 0 0 0 156.116 2936.19A15.12 15.12 0 0 0 171.236 2951.31Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="176.046" y="2936.19" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"."</text>
    <text x="232.674" y="2936.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="232.674" y="2936.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="235.842,2936.19 224.322,2940.51 224.322,2931.87" style="fill:rgb(0,0,0)"></polygon>
    <path d="M224.322,2936.19L230.082,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M235.842,2951.31L297.243,2951.31L297.243,2921.07L235.842,2921.07Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="266.543" y="2936.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
    <path d="M224.322,2936.19L224.322,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M297.243,2936.19L297.243,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M297.243,2936.19 L 304.33,2936.19 Q 311.417,2936.19 311.417,2950.83 Q 311.417,2965.48 296.417,2965.48 L 225.149,2965.48 Q 210.149,2965.48 210.149,2950.83 Q 210.149,2936.19 217.235,2936.19 L 224.322,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="339.763" cy="2936.19" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,2936.19L144.596,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M195.975,2936.19L224.322,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="336.163,2936.19 324.643,2940.51 324.643,2931.87" style="fill:rgb(0,0,0)"></polygon>
    <path d="M297.243,2936.19L330.403,2936.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="2905.95" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">fraction&nbsp;=</text>
    <text x="124.906" y="3037.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="3037.29" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="3037.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3037.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3037.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3037.29 172.943,3041.61 172.943,3032.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3037.29L178.703,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3052.41L209.202,3052.41A15.12 15.12 0 0 0 224.322 3037.29A15.12 15.12 0 0 0 209.202 3022.17L199.583,3022.17A15.12 15.12 0 0 0 184.463 3037.29A15.12 15.12 0 0 0 199.583 3052.41Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="3037.29" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"0"</text>
    <path d="M172.943,3037.29L172.943,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3037.29L172.943,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="3081.71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3081.71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3081.71 172.943,3086.03 172.943,3077.39" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3081.71L178.703,3081.71" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,3096.83L262.683,3096.83L262.683,3066.59L184.463,3066.59Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.573" y="3081.71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">onenine</text>
    <text x="285.209" y="3081.71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="322.422" y="3111" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="322.422" y="3111" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="325.59,3111 314.07,3115.32 314.07,3106.68" style="fill:rgb(0,0,0)"></polygon>
    <path d="M314.07,3111L319.83,3111" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M325.59,3126.12L386.991,3126.12L386.991,3095.88L325.59,3095.88Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="356.291" y="3111" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
    <path d="M314.07,3111L314.07,3111" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M386.991,3111L386.991,3111" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M386.991,3111 L 394.078,3111 Q 401.165,3111 401.165,3125.65 Q 401.165,3140.29 386.165,3140.29 L 314.897,3140.29 Q 299.897,3140.29 299.897,3125.65 Q 299.897,3111 306.983,3111 L 314.07,3111" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M276.857,3081.71L424.205,3081.71" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M276.857,3081.71 L 282.617,3081.71 Q 288.377,3081.71 288.377,3096.35 Q 288.377,3111 301.223,3111 L 314.07,3111" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M386.991,3111 L 399.838,3111 Q 412.685,3111 412.685,3096.35 Q 412.685,3081.71 418.445,3081.71 L 424.205,3081.71" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M172.943,3081.71L172.943,3081.71" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.683,3081.71L276.857,3081.71" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3037.29 L 151.683,3037.29 Q 158.769,3037.29 158.769,3052.29 L 158.769,3066.71 Q 158.769,3081.71 165.856,3081.71 L 172.943,3081.71" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,3037.29L466.724,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M424.205,3081.71 L 438.378,3081.71 Q 452.551,3081.71 452.551,3066.71 L 452.551,3052.29 Q 452.551,3037.29 459.638,3037.29 L 466.724,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="495.071" cy="3037.29" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,3037.29L144.596,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="491.471,3037.29 479.951,3041.61 479.951,3032.97" style="fill:rgb(0,0,0)"></polygon>
    <path d="M466.724,3037.29L485.711,3037.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="3007.05" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">integer&nbsp;=</text>
    <text x="124.906" y="3212.11" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="3212.11" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="3212.11" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3212.11" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3212.11" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3212.11 172.943,3216.43 172.943,3207.79" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3212.11L178.703,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3227.23L246.987,3227.23A15.12 15.12 0 0 0 262.107 3212.11A15.12 15.12 0 0 0 246.987 3196.99L199.583,3196.99A15.12 15.12 0 0 0 184.463 3212.11A15.12 15.12 0 0 0 199.583 3227.23Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="3212.11" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20-21</text>
    <path d="M172.943,3212.11L172.943,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3212.11L172.943,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="3256.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3256.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3256.52 172.943,3260.84 172.943,3252.2" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3256.52L178.703,3256.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3271.64L246.987,3271.64A15.12 15.12 0 0 0 262.107 3256.52A15.12 15.12 0 0 0 246.987 3241.4L199.583,3241.4A15.12 15.12 0 0 0 184.463 3256.52A15.12 15.12 0 0 0 199.583 3271.64Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="3256.52" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x23-5B</text>
    <path d="M172.943,3256.52L172.943,3256.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3212.11 L 151.683,3212.11 Q 158.769,3212.11 158.769,3227.11 L 158.769,3241.52 Q 158.769,3256.52 165.856,3256.52 L 172.943,3256.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="3300.93" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3300.93" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3300.93 172.943,3305.25 172.943,3296.61" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3300.93L178.703,3300.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3316.05L284.773,3316.05A15.12 15.12 0 0 0 299.893 3300.93A15.12 15.12 0 0 0 284.773 3285.81L199.583,3285.81A15.12 15.12 0 0 0 184.463 3300.93A15.12 15.12 0 0 0 199.583 3316.05Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="242.178" y="3300.93" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x5D-10FFFF</text>
    <path d="M172.943,3300.93L172.943,3300.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3212.11 L 151.683,3212.11 Q 158.769,3212.11 158.769,3227.11 L 158.769,3285.93 Q 158.769,3300.93 165.856,3300.93 L 172.943,3300.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="3345.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3345.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3345.35 172.943,3349.67 172.943,3341.03" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3345.35L178.703,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3360.47L218.648,3360.47A15.12 15.12 0 0 0 233.768 3345.35A15.12 15.12 0 0 0 218.648 3330.23L199.583,3330.23A15.12 15.12 0 0 0 184.463 3345.35A15.12 15.12 0 0 0 199.583 3360.47Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="209.115" y="3345.35" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x5C</text>
    <text x="256.293" y="3345.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3345.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3345.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3345.35 276.288,3349.67 276.288,3341.03" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3345.35L282.048,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3360.47L321.994,3360.47A15.12 15.12 0 0 0 337.114 3345.35A15.12 15.12 0 0 0 321.994 3330.23L302.928,3330.23A15.12 15.12 0 0 0 287.808 3345.35A15.12 15.12 0 0 0 302.928 3360.47Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="312.461" y="3345.35" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x5C</text>
    <path d="M276.288,3345.35L276.288,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35L276.288,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3389.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3389.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3389.76 276.288,3394.08 276.288,3385.44" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3389.76L282.048,3389.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M287.808,3404.88L346.906,3404.88L346.906,3374.64L287.808,3374.64Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="317.357" y="3389.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
    <path d="M276.288,3389.76L276.288,3389.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3374.76 Q 262.115,3389.76 269.201,3389.76 L 276.288,3389.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3434.17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3434.17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3434.17 276.288,3438.49 276.288,3429.85" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3434.17L282.048,3434.17" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3449.29L312.547,3449.29A15.12 15.12 0 0 0 327.667 3434.17A15.12 15.12 0 0 0 312.547 3419.05L302.928,3419.05A15.12 15.12 0 0 0 287.808 3434.17A15.12 15.12 0 0 0 302.928 3449.29Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3434.17" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"/"</text>
    <path d="M276.288,3434.17L276.288,3434.17" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3419.17 Q 262.115,3434.17 269.201,3434.17 L 276.288,3434.17" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3478.59" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3478.59" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3478.59 276.288,3482.91 276.288,3474.27" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3478.59L282.048,3478.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3493.71L312.547,3493.71A15.12 15.12 0 0 0 327.667 3478.59A15.12 15.12 0 0 0 312.547 3463.47L302.928,3463.47A15.12 15.12 0 0 0 287.808 3478.59A15.12 15.12 0 0 0 302.928 3493.71Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3478.59" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"b"</text>
    <path d="M276.288,3478.59L276.288,3478.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3463.59 Q 262.115,3478.59 269.201,3478.59 L 276.288,3478.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3523" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3523" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3523 276.288,3527.32 276.288,3518.68" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3523L282.048,3523" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3538.12L312.547,3538.12A15.12 15.12 0 0 0 327.667 3523A15.12 15.12 0 0 0 312.547 3507.88L302.928,3507.88A15.12 15.12 0 0 0 287.808 3523A15.12 15.12 0 0 0 302.928 3538.12Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3523" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"f"</text>
    <path d="M276.288,3523L276.288,3523" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3508 Q 262.115,3523 269.201,3523 L 276.288,3523" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3567.41" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3567.41" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3567.41 276.288,3571.73 276.288,3563.09" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3567.41L282.048,3567.41" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3582.53L312.547,3582.53A15.12 15.12 0 0 0 327.667 3567.41A15.12 15.12 0 0 0 312.547 3552.29L302.928,3552.29A15.12 15.12 0 0 0 287.808 3567.41A15.12 15.12 0 0 0 302.928 3582.53Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3567.41" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"n"</text>
    <path d="M276.288,3567.41L276.288,3567.41" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3552.41 Q 262.115,3567.41 269.201,3567.41 L 276.288,3567.41" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3611.83" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3611.83" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3611.83 276.288,3616.15 276.288,3607.51" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3611.83L282.048,3611.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3626.95L312.547,3626.95A15.12 15.12 0 0 0 327.667 3611.83A15.12 15.12 0 0 0 312.547 3596.71L302.928,3596.71A15.12 15.12 0 0 0 287.808 3611.83A15.12 15.12 0 0 0 302.928 3626.95Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3611.83" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"r"</text>
    <path d="M276.288,3611.83L276.288,3611.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3596.83 Q 262.115,3611.83 269.201,3611.83 L 276.288,3611.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3656.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3656.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3656.24 276.288,3660.56 276.288,3651.92" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3656.24L282.048,3656.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3671.36L312.547,3671.36A15.12 15.12 0 0 0 327.667 3656.24A15.12 15.12 0 0 0 312.547 3641.12L302.928,3641.12A15.12 15.12 0 0 0 287.808 3656.24A15.12 15.12 0 0 0 302.928 3671.36Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3656.24" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"t"</text>
    <path d="M276.288,3656.24L276.288,3656.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3641.24 Q 262.115,3656.24 269.201,3656.24 L 276.288,3656.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="284.64" y="3700.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="284.64" y="3700.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="287.808,3700.65 276.288,3704.97 276.288,3696.33" style="fill:rgb(0,0,0)"></polygon>
    <path d="M276.288,3700.65L282.048,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M302.928,3715.77L312.547,3715.77A15.12 15.12 0 0 0 327.667 3700.65A15.12 15.12 0 0 0 312.547 3685.53L302.928,3685.53A15.12 15.12 0 0 0 287.808 3700.65A15.12 15.12 0 0 0 302.928 3715.77Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="307.738" y="3700.65" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"u"</text>
    <text x="364.366" y="3700.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="364.366" y="3700.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="367.534,3700.65 356.014,3704.97 356.014,3696.33" style="fill:rgb(0,0,0)"></polygon>
    <path d="M356.014,3700.65L361.774,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M367.534,3715.77L449.095,3715.77L449.095,3685.53L367.534,3685.53Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="408.314" y="3700.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HEXDIG</text>
    <path d="M356.014,3700.65L356.014,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M449.095,3700.65L449.095,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M449.095,3700.65 L 456.182,3700.65 Q 463.268,3700.65 463.268,3715.3 Q 463.268,3729.95 448.268,3729.95 L 356.84,3729.95 Q 341.84,3729.95 341.84,3715.3 Q 341.84,3700.65 348.927,3700.65 L 356.014,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M276.288,3700.65L276.288,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3700.65L356.014,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M247.941,3345.35 L 255.028,3345.35 Q 262.115,3345.35 262.115,3360.35 L 262.115,3685.65 Q 262.115,3700.65 269.201,3700.65 L 276.288,3700.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M337.114,3345.35L505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M346.906,3389.76 L 476.615,3389.76 Q 491.615,3389.76 491.615,3374.76 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3434.17 L 476.615,3434.17 Q 491.615,3434.17 491.615,3419.17 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3478.59 L 476.615,3478.59 Q 491.615,3478.59 491.615,3463.59 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3523 L 476.615,3523 Q 491.615,3523 491.615,3508 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3567.41 L 476.615,3567.41 Q 491.615,3567.41 491.615,3552.41 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3611.83 L 476.615,3611.83 Q 491.615,3611.83 491.615,3596.83 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M327.667,3656.24 L 476.615,3656.24 Q 491.615,3656.24 491.615,3641.24 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M463.268,3700.65 L 477.442,3700.65 Q 491.615,3700.65 491.615,3685.65 L 491.615,3360.35 Q 491.615,3345.35 498.701,3345.35 L 505.788,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M172.943,3345.35L172.943,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M233.768,3345.35L247.941,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3212.11 L 151.683,3212.11 Q 158.769,3212.11 158.769,3227.11 L 158.769,3330.35 Q 158.769,3345.35 165.856,3345.35 L 172.943,3345.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,3212.11L548.308,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,3256.52 L 519.135,3256.52 Q 534.135,3256.52 534.135,3241.52 L 534.135,3227.11 Q 534.135,3212.11 541.221,3212.11 L 548.308,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M299.893,3300.93 L 519.135,3300.93 Q 534.135,3300.93 534.135,3285.93 L 534.135,3227.11 Q 534.135,3212.11 541.221,3212.11 L 548.308,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M505.788,3345.35 L 519.961,3345.35 Q 534.135,3345.35 534.135,3330.35 L 534.135,3227.11 Q 534.135,3212.11 541.221,3212.11 L 548.308,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="576.654" cy="3212.11" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,3212.11L144.596,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="573.054,3212.11 561.534,3216.43 561.534,3207.79" style="fill:rgb(0,0,0)"></polygon>
    <path d="M548.308,3212.11L567.294,3212.11" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="3181.87" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">char&nbsp;=</text>
    <text x="124.906" y="3801.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="3801.76" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="3801.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,3801.76 144.596,3806.08 144.596,3797.44" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,3801.76L150.356,3801.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,3816.88L180.855,3816.88A15.12 15.12 0 0 0 195.975 3801.76A15.12 15.12 0 0 0 180.855 3786.64L171.236,3786.64A15.12 15.12 0 0 0 156.116 3801.76A15.12 15.12 0 0 0 171.236 3816.88Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="176.046" y="3801.76" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"#"</text>
    <text x="218.501" y="3801.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="255.714" y="3831.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="255.714" y="3831.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="258.882,3831.05 247.362,3835.37 247.362,3826.73" style="fill:rgb(0,0,0)"></polygon>
    <path d="M247.362,3831.05L253.122,3831.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M258.882,3846.17L332.264,3846.17L332.264,3815.93L258.882,3815.93Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="295.573" y="3831.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">non-eol</text>
    <path d="M247.362,3831.05L247.362,3831.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M332.264,3831.05L332.264,3831.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M332.264,3831.05 L 339.351,3831.05 Q 346.437,3831.05 346.437,3845.7 Q 346.437,3860.35 331.437,3860.35 L 248.189,3860.35 Q 233.189,3860.35 233.189,3845.7 Q 233.189,3831.05 240.275,3831.05 L 247.362,3831.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.149,3801.76L369.477,3801.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.149,3801.76 L 215.909,3801.76 Q 221.669,3801.76 221.669,3816.41 Q 221.669,3831.05 234.515,3831.05 L 247.362,3831.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M332.264,3831.05 L 345.111,3831.05 Q 357.957,3831.05 357.957,3816.41 Q 357.957,3801.76 363.717,3801.76 L 369.477,3801.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="397.824" cy="3801.76" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,3801.76L144.596,3801.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M195.975,3801.76L210.149,3801.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="394.224,3801.76 382.704,3806.08 382.704,3797.44" style="fill:rgb(0,0,0)"></polygon>
    <path d="M369.477,3801.76L388.464,3801.76" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="3771.52" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">comment&nbsp;=</text>
    <text x="124.906" y="3932.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="3932.16" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="3932.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3932.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3932.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3932.16 172.943,3936.48 172.943,3927.84" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3932.16L178.703,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3947.28L218.648,3947.28A15.12 15.12 0 0 0 233.768 3932.16A15.12 15.12 0 0 0 218.648 3917.04L199.583,3917.04A15.12 15.12 0 0 0 184.463 3932.16A15.12 15.12 0 0 0 199.583 3947.28Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="209.115" y="3932.16" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x09</text>
    <path d="M172.943,3932.16L172.943,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3932.16L172.943,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="3976.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="3976.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,3976.57 172.943,3980.89 172.943,3972.25" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,3976.57L178.703,3976.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,3991.69L246.987,3991.69A15.12 15.12 0 0 0 262.107 3976.57A15.12 15.12 0 0 0 246.987 3961.45L199.583,3961.45A15.12 15.12 0 0 0 184.463 3976.57A15.12 15.12 0 0 0 199.583 3991.69Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="3976.57" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20-7E</text>
    <path d="M172.943,3976.57L172.943,3976.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3932.16 L 151.683,3932.16 Q 158.769,3932.16 158.769,3947.16 L 158.769,3961.57 Q 158.769,3976.57 165.856,3976.57 L 172.943,3976.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="4020.98" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4020.98" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,4020.98 172.943,4025.3 172.943,4016.66" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,4020.98L178.703,4020.98" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,4036.1L271.208,4036.1L271.208,4005.86L184.463,4005.86Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="227.835" y="4020.98" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">non-ascii</text>
    <path d="M172.943,4020.98L172.943,4020.98" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,3932.16 L 151.683,3932.16 Q 158.769,3932.16 158.769,3947.16 L 158.769,4005.98 Q 158.769,4020.98 165.856,4020.98 L 172.943,4020.98" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M233.768,3932.16L313.728,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,3976.57 L 284.555,3976.57 Q 299.555,3976.57 299.555,3961.57 L 299.555,3947.16 Q 299.555,3932.16 306.641,3932.16 L 313.728,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M271.208,4020.98 L 285.381,4020.98 Q 299.555,4020.98 299.555,4005.98 L 299.555,3947.16 Q 299.555,3932.16 306.641,3932.16 L 313.728,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="342.074" cy="3932.16" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,3932.16L144.596,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="338.474,3932.16 326.954,3936.48 326.954,3927.84" style="fill:rgb(0,0,0)"></polygon>
    <path d="M313.728,3932.16L332.714,3932.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="3901.92" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">non-eol&nbsp;=</text>
    <text x="124.906" y="4107.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4107.92" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4107.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4107.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4107.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,4107.92 172.943,4112.24 172.943,4103.6" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,4107.92L178.703,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,4123.04L265.88,4123.04A15.12 15.12 0 0 0 281 4107.92A15.12 15.12 0 0 0 265.88 4092.8L199.583,4092.8A15.12 15.12 0 0 0 184.463 4107.92A15.12 15.12 0 0 0 199.583 4123.04Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="232.731" y="4107.92" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x80-D7FF</text>
    <path d="M172.943,4107.92L172.943,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4107.92L172.943,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="4152.33" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4152.33" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,4152.33 172.943,4156.65 172.943,4148.01" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,4152.33L178.703,4152.33" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,4167.45L303.666,4167.45A15.12 15.12 0 0 0 318.786 4152.33A15.12 15.12 0 0 0 303.666 4137.21L199.583,4137.21A15.12 15.12 0 0 0 184.463 4152.33A15.12 15.12 0 0 0 199.583 4167.45Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="251.624" y="4152.33" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%xE000-10FFFF</text>
    <path d="M172.943,4152.33L172.943,4152.33" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4107.92 L 151.683,4107.92 Q 158.769,4107.92 158.769,4122.92 L 158.769,4137.33 Q 158.769,4152.33 165.856,4152.33 L 172.943,4152.33" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M281,4107.92L361.306,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M318.786,4152.33 L 332.959,4152.33 Q 347.132,4152.33 347.132,4137.33 L 347.132,4122.92 Q 347.132,4107.92 354.219,4107.92 L 361.306,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="389.652" cy="4107.92" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4107.92L144.596,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="386.052,4107.92 374.532,4112.24 374.532,4103.6" style="fill:rgb(0,0,0)"></polygon>
    <path d="M361.306,4107.92L380.292,4107.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4077.68" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">non-ascii&nbsp;=</text>
    <text x="124.906" y="4239.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4239.26" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4239.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="190.161" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="190.161" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="218.508" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="218.508" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="246.854" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="246.854" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="250.022,4268.56 238.502,4272.88 238.502,4264.24" style="fill:rgb(0,0,0)"></polygon>
    <path d="M238.502,4268.56L244.262,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M250.022,4283.68L283.43,4283.68L283.43,4253.44L250.022,4253.44Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="266.726" y="4268.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">SP</text>
    <path d="M238.502,4268.56L238.502,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.156,4268.56L238.502,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="246.854" y="4312.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="246.854" y="4312.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="250.022,4312.97 238.502,4317.29 238.502,4308.65" style="fill:rgb(0,0,0)"></polygon>
    <path d="M238.502,4312.97L244.262,4312.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M250.022,4328.09L310.963,4328.09L310.963,4297.85L250.022,4297.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="280.493" y="4312.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HTAB</text>
    <path d="M238.502,4312.97L238.502,4312.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.156,4268.56 L 217.242,4268.56 Q 224.329,4268.56 224.329,4283.56 L 224.329,4297.97 Q 224.329,4312.97 231.416,4312.97 L 238.502,4312.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M283.43,4268.56L353.483,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M310.963,4312.97 L 325.136,4312.97 Q 339.31,4312.97 339.31,4297.97 L 339.31,4283.56 Q 339.31,4268.56 346.396,4268.56 L 353.483,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.156,4268.56L210.156,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M181.809,4268.56L210.156,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="218.508" y="4357.38" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="218.508" y="4357.38" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="241.548" y="4386.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="244.716,4386.68 233.196,4391 233.196,4382.36" style="fill:rgb(0,0,0)"></polygon>
    <path d="M233.196,4386.68L238.956,4386.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M244.716,4401.8L333.535,4401.8L333.535,4371.56L244.716,4371.56Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="289.125" y="4386.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
    <path d="M210.156,4357.38L356.575,4357.38" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M210.156,4357.38 L 215.916,4357.38 Q 221.676,4357.38 221.676,4372.03 Q 221.676,4386.68 227.436,4386.68 L 233.196,4386.68" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M333.535,4386.68 L 339.295,4386.68 Q 345.055,4386.68 345.055,4372.03 Q 345.055,4357.38 350.815,4357.38 L 356.575,4357.38" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="379.1" y="4357.38" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="382.268,4357.38 370.748,4361.7 370.748,4353.06" style="fill:rgb(0,0,0)"></polygon>
    <path d="M370.748,4357.38L376.508,4357.38" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M382.268,4372.5L459.452,4372.5L459.452,4342.26L382.268,4342.26Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="420.86" y="4357.38" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
    <path d="M210.156,4357.38L210.156,4357.38" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M356.575,4357.38L370.748,4357.38" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M181.809,4268.56 L 188.896,4268.56 Q 195.983,4268.56 195.983,4283.56 L 195.983,4342.38 Q 195.983,4357.38 203.069,4357.38 L 210.156,4357.38" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M353.483,4268.56L501.972,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M459.452,4357.38 L 473.626,4357.38 Q 487.799,4357.38 487.799,4342.38 L 487.799,4283.56 Q 487.799,4268.56 494.885,4268.56 L 501.972,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M181.809,4268.56L181.809,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M501.972,4268.56L501.972,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M501.972,4268.56 L 509.059,4268.56 Q 516.145,4268.56 516.145,4283.56 L 516.145,4400.97 Q 516.145,4415.97 501.145,4415.97 L 182.636,4415.97 Q 167.636,4415.97 167.636,4400.97 L 167.636,4283.56 Q 167.636,4268.56 174.723,4268.56 L 181.809,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4239.26L539.185,4239.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4239.26 L 150.356,4239.26 Q 156.116,4239.26 156.116,4253.91 Q 156.116,4268.56 168.963,4268.56 L 181.809,4268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M501.972,4268.56 L 514.819,4268.56 Q 527.665,4268.56 527.665,4253.91 Q 527.665,4239.26 533.425,4239.26 L 539.185,4239.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="567.532" cy="4239.26" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4239.26L144.596,4239.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="563.932,4239.26 552.412,4243.58 552.412,4234.94" style="fill:rgb(0,0,0)"></polygon>
    <path d="M539.185,4239.26L558.172,4239.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4209.02" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline&nbsp;=</text>
    <text x="124.906" y="4487.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4487.78" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4487.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4487.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4487.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,4487.78 172.943,4492.1 172.943,4483.46" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,4487.78L178.703,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,4502.9L218.216,4502.9L218.216,4472.66L184.463,4472.66Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="201.339" y="4487.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LF</text>
    <path d="M172.943,4487.78L172.943,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4487.78L172.943,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="4532.2" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="4532.2" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,4532.2 172.943,4536.52 172.943,4527.88" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,4532.2L178.703,4532.2" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,4547.32L220.981,4547.32L220.981,4517.08L184.463,4517.08Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="202.722" y="4532.2" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CR</text>
    <text x="243.506" y="4532.2" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="246.674,4532.2 235.154,4536.52 235.154,4527.88" style="fill:rgb(0,0,0)"></polygon>
    <path d="M235.154,4532.2L240.914,4532.2" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M246.674,4547.32L280.428,4547.32L280.428,4517.08L246.674,4517.08Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="263.551" y="4532.2" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LF</text>
    <path d="M172.943,4532.2L172.943,4532.2" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M220.981,4532.2L235.154,4532.2" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4487.78 L 151.683,4487.78 Q 158.769,4487.78 158.769,4502.78 L 158.769,4517.2 Q 158.769,4532.2 165.856,4532.2 L 172.943,4532.2" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M218.216,4487.78L322.948,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M280.428,4532.2 L 294.601,4532.2 Q 308.774,4532.2 308.774,4517.2 L 308.774,4502.78 Q 308.774,4487.78 315.861,4487.78 L 322.948,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="351.294" cy="4487.78" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4487.78L144.596,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="347.694,4487.78 336.174,4492.1 336.174,4483.46" style="fill:rgb(0,0,0)"></polygon>
    <path d="M322.948,4487.78L341.934,4487.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4457.54" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">newline&nbsp;=</text>
    <text x="124.906" y="4619.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4619.13" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4619.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="190.161" y="4648.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="190.161" y="4648.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="218.508" y="4648.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="218.508" y="4648.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="221.676,4648.42 210.156,4652.74 210.156,4644.1" style="fill:rgb(0,0,0)"></polygon>
    <path d="M210.156,4648.42L215.916,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M221.676,4663.54L255.084,4663.54L255.084,4633.3L221.676,4633.3Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="238.38" y="4648.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">SP</text>
    <path d="M210.156,4648.42L210.156,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M181.809,4648.42L210.156,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="218.508" y="4692.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="218.508" y="4692.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="221.676,4692.84 210.156,4697.16 210.156,4688.52" style="fill:rgb(0,0,0)"></polygon>
    <path d="M210.156,4692.84L215.916,4692.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M221.676,4707.96L282.617,4707.96L282.617,4677.72L221.676,4677.72Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="252.146" y="4692.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HTAB</text>
    <path d="M210.156,4692.84L210.156,4692.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M181.809,4648.42 L 188.896,4648.42 Q 195.983,4648.42 195.983,4663.42 L 195.983,4677.84 Q 195.983,4692.84 203.069,4692.84 L 210.156,4692.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M255.084,4648.42L325.136,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M282.617,4692.84 L 296.79,4692.84 Q 310.963,4692.84 310.963,4677.84 L 310.963,4663.42 Q 310.963,4648.42 318.05,4648.42 L 325.136,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M181.809,4648.42L181.809,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M325.136,4648.42L325.136,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M325.136,4648.42 L 332.223,4648.42 Q 339.31,4648.42 339.31,4663.42 L 339.31,4707.13 Q 339.31,4722.13 324.31,4722.13 L 182.636,4722.13 Q 167.636,4722.13 167.636,4707.13 L 167.636,4663.42 Q 167.636,4648.42 174.723,4648.42 L 181.809,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4619.13L362.35,4619.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,4619.13 L 150.356,4619.13 Q 156.116,4619.13 156.116,4633.78 Q 156.116,4648.42 168.963,4648.42 L 181.809,4648.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M325.136,4648.42 L 337.983,4648.42 Q 350.83,4648.42 350.83,4633.78 Q 350.83,4619.13 356.59,4619.13 L 362.35,4619.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="390.696" cy="4619.13" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4619.13L144.596,4619.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="387.096,4619.13 375.576,4623.45 375.576,4614.81" style="fill:rgb(0,0,0)"></polygon>
    <path d="M362.35,4619.13L381.336,4619.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4588.89" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">ws&nbsp;=</text>
    <text x="124.906" y="4793.94" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4793.94" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4793.94" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,4793.94 144.596,4798.26 144.596,4789.62" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,4793.94L150.356,4793.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,4809.06L190.302,4809.06A15.12 15.12 0 0 0 205.422 4793.94A15.12 15.12 0 0 0 190.302 4778.82L171.236,4778.82A15.12 15.12 0 0 0 156.116 4793.94A15.12 15.12 0 0 0 171.236 4809.06Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="180.769" y="4793.94" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20</text>
    <circle cx="233.768" cy="4793.94" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4793.94L144.596,4793.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="230.168,4793.94 218.648,4798.26 218.648,4789.62" style="fill:rgb(0,0,0)"></polygon>
    <path d="M205.422,4793.94L224.408,4793.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4763.7" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">SP&nbsp;=</text>
    <text x="124.906" y="4880.87" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4880.87" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4880.87" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,4880.87 144.596,4885.19 144.596,4876.55" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,4880.87L150.356,4880.87" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,4895.99L190.302,4895.99A15.12 15.12 0 0 0 205.422 4880.87A15.12 15.12 0 0 0 190.302 4865.75L171.236,4865.75A15.12 15.12 0 0 0 156.116 4880.87A15.12 15.12 0 0 0 171.236 4895.99Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="180.769" y="4880.87" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x09</text>
    <circle cx="233.768" cy="4880.87" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4880.87L144.596,4880.87" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="230.168,4880.87 218.648,4885.19 218.648,4876.55" style="fill:rgb(0,0,0)"></polygon>
    <path d="M205.422,4880.87L224.408,4880.87" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4850.63" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">HTAB&nbsp;=</text>
    <text x="124.906" y="4967.81" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="4967.81" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="4967.81" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,4967.81 144.596,4972.13 144.596,4963.49" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,4967.81L150.356,4967.81" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,4982.93L190.302,4982.93A15.12 15.12 0 0 0 205.422 4967.81A15.12 15.12 0 0 0 190.302 4952.69L171.236,4952.69A15.12 15.12 0 0 0 156.116 4967.81A15.12 15.12 0 0 0 171.236 4982.93Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="180.769" y="4967.81" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x0D</text>
    <circle cx="233.768" cy="4967.81" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,4967.81L144.596,4967.81" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="230.168,4967.81 218.648,4972.13 218.648,4963.49" style="fill:rgb(0,0,0)"></polygon>
    <path d="M205.422,4967.81L224.408,4967.81" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="4937.57" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">CR&nbsp;=</text>
    <text x="124.906" y="5054.74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="5054.74" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="5054.74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,5054.74 144.596,5059.06 144.596,5050.42" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,5054.74L150.356,5054.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,5069.86L190.302,5069.86A15.12 15.12 0 0 0 205.422 5054.74A15.12 15.12 0 0 0 190.302 5039.62L171.236,5039.62A15.12 15.12 0 0 0 156.116 5054.74A15.12 15.12 0 0 0 171.236 5069.86Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="180.769" y="5054.74" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x0A</text>
    <circle cx="233.768" cy="5054.74" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,5054.74L144.596,5054.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="230.168,5054.74 218.648,5059.06 218.648,5050.42" style="fill:rgb(0,0,0)"></polygon>
    <path d="M205.422,5054.74L224.408,5054.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="5024.5" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">LF&nbsp;=</text>
    <text x="124.906" y="5141.67" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="5141.67" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="5141.67" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5141.67" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5141.67" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5141.67 172.943,5145.99 172.943,5137.35" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5141.67L178.703,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5156.79L246.987,5156.79A15.12 15.12 0 0 0 262.107 5141.67A15.12 15.12 0 0 0 246.987 5126.55L199.583,5126.55A15.12 15.12 0 0 0 184.463 5141.67A15.12 15.12 0 0 0 199.583 5156.79Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="5141.67" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x41-5A</text>
    <path d="M172.943,5141.67L172.943,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5141.67L172.943,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5186.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5186.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5186.09 172.943,5190.41 172.943,5181.77" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5186.09L178.703,5186.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5201.21L246.987,5201.21A15.12 15.12 0 0 0 262.107 5186.09A15.12 15.12 0 0 0 246.987 5170.97L199.583,5170.97A15.12 15.12 0 0 0 184.463 5186.09A15.12 15.12 0 0 0 199.583 5201.21Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="223.285" y="5186.09" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x61-7A</text>
    <path d="M172.943,5186.09L172.943,5186.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5141.67 L 151.683,5141.67 Q 158.769,5141.67 158.769,5156.67 L 158.769,5171.09 Q 158.769,5186.09 165.856,5186.09 L 172.943,5186.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,5141.67L304.627,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M262.107,5186.09 L 276.281,5186.09 Q 290.454,5186.09 290.454,5171.09 L 290.454,5156.67 Q 290.454,5141.67 297.541,5141.67 L 304.627,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="332.974" cy="5141.67" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,5141.67L144.596,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="329.374,5141.67 317.854,5145.99 317.854,5137.35" style="fill:rgb(0,0,0)"></polygon>
    <path d="M304.627,5141.67L323.614,5141.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="5111.43" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">ALPHA&nbsp;=</text>
    <text x="124.906" y="5273.02" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="5273.02" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="5273.02" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="156.116,5273.02 144.596,5277.34 144.596,5268.7" style="fill:rgb(0,0,0)"></polygon>
    <path d="M144.596,5273.02L150.356,5273.02" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M171.236,5288.14L218.641,5288.14A15.12 15.12 0 0 0 233.761 5273.02A15.12 15.12 0 0 0 218.641 5257.9L171.236,5257.9A15.12 15.12 0 0 0 156.116 5273.02A15.12 15.12 0 0 0 171.236 5288.14Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="194.939" y="5273.02" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x30-39</text>
    <circle cx="262.107" cy="5273.02" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,5273.02L144.596,5273.02" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="258.507,5273.02 246.987,5277.34 246.987,5268.7" style="fill:rgb(0,0,0)"></polygon>
    <path d="M233.761,5273.02L252.747,5273.02" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="5242.78" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT&nbsp;=</text>
    <text x="124.906" y="5359.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <circle cx="124.906" cy="5359.95" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <text x="152.948" y="5359.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5359.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5359.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5359.95 172.943,5364.27 172.943,5355.63" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5359.95L178.703,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M184.463,5375.07L245.864,5375.07L245.864,5344.83L184.463,5344.83Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="215.163" y="5359.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
    <path d="M172.943,5359.95L172.943,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95L172.943,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5404.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5404.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5404.37 172.943,5408.69 172.943,5400.05" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5404.37L178.703,5404.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5419.49L209.202,5419.49A15.12 15.12 0 0 0 224.322 5404.37A15.12 15.12 0 0 0 209.202 5389.25L199.583,5389.25A15.12 15.12 0 0 0 184.463 5404.37A15.12 15.12 0 0 0 199.583 5419.49Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="5404.37" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"A"</text>
    <path d="M172.943,5404.37L172.943,5404.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95 L 151.683,5359.95 Q 158.769,5359.95 158.769,5374.95 L 158.769,5389.37 Q 158.769,5404.37 165.856,5404.37 L 172.943,5404.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5448.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5448.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5448.78 172.943,5453.1 172.943,5444.46" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5448.78L178.703,5448.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5463.9L209.202,5463.9A15.12 15.12 0 0 0 224.322 5448.78A15.12 15.12 0 0 0 209.202 5433.66L199.583,5433.66A15.12 15.12 0 0 0 184.463 5448.78A15.12 15.12 0 0 0 199.583 5463.9Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="5448.78" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"B"</text>
    <path d="M172.943,5448.78L172.943,5448.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95 L 151.683,5359.95 Q 158.769,5359.95 158.769,5374.95 L 158.769,5433.78 Q 158.769,5448.78 165.856,5448.78 L 172.943,5448.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5493.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5493.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5493.19 172.943,5497.51 172.943,5488.87" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5493.19L178.703,5493.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5508.31L209.202,5508.31A15.12 15.12 0 0 0 224.322 5493.19A15.12 15.12 0 0 0 209.202 5478.07L199.583,5478.07A15.12 15.12 0 0 0 184.463 5493.19A15.12 15.12 0 0 0 199.583 5508.31Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="5493.19" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"C"</text>
    <path d="M172.943,5493.19L172.943,5493.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95 L 151.683,5359.95 Q 158.769,5359.95 158.769,5374.95 L 158.769,5478.19 Q 158.769,5493.19 165.856,5493.19 L 172.943,5493.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5537.61" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5537.61" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5537.61 172.943,5541.93 172.943,5533.29" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5537.61L178.703,5537.61" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5552.73L209.202,5552.73A15.12 15.12 0 0 0 224.322 5537.61A15.12 15.12 0 0 0 209.202 5522.49L199.583,5522.49A15.12 15.12 0 0 0 184.463 5537.61A15.12 15.12 0 0 0 199.583 5552.73Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="5537.61" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"D"</text>
    <path d="M172.943,5537.61L172.943,5537.61" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95 L 151.683,5359.95 Q 158.769,5359.95 158.769,5374.95 L 158.769,5522.61 Q 158.769,5537.61 165.856,5537.61 L 172.943,5537.61" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5582.02" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5582.02" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5582.02 172.943,5586.34 172.943,5577.7" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5582.02L178.703,5582.02" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5597.14L209.202,5597.14A15.12 15.12 0 0 0 224.322 5582.02A15.12 15.12 0 0 0 209.202 5566.9L199.583,5566.9A15.12 15.12 0 0 0 184.463 5582.02A15.12 15.12 0 0 0 199.583 5597.14Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="5582.02" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"E"</text>
    <path d="M172.943,5582.02L172.943,5582.02" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95 L 151.683,5359.95 Q 158.769,5359.95 158.769,5374.95 L 158.769,5567.02 Q 158.769,5582.02 165.856,5582.02 L 172.943,5582.02" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="181.295" y="5626.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <text x="181.295" y="5626.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
    <polygon points="184.463,5626.43 172.943,5630.75 172.943,5622.11" style="fill:rgb(0,0,0)"></polygon>
    <path d="M172.943,5626.43L178.703,5626.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M199.583,5641.55L209.202,5641.55A15.12 15.12 0 0 0 224.322 5626.43A15.12 15.12 0 0 0 209.202 5611.31L199.583,5611.31A15.12 15.12 0 0 0 184.463 5626.43A15.12 15.12 0 0 0 199.583 5641.55Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="204.392" y="5626.43" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"F"</text>
    <path d="M172.943,5626.43L172.943,5626.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M144.596,5359.95 L 151.683,5359.95 Q 158.769,5359.95 158.769,5374.95 L 158.769,5611.43 Q 158.769,5626.43 165.856,5626.43 L 172.943,5626.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M245.864,5359.95L288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,5404.37 L 259.211,5404.37 Q 274.211,5404.37 274.211,5389.37 L 274.211,5374.95 Q 274.211,5359.95 281.297,5359.95 L 288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,5448.78 L 259.211,5448.78 Q 274.211,5448.78 274.211,5433.78 L 274.211,5374.95 Q 274.211,5359.95 281.297,5359.95 L 288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,5493.19 L 259.211,5493.19 Q 274.211,5493.19 274.211,5478.19 L 274.211,5374.95 Q 274.211,5359.95 281.297,5359.95 L 288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,5537.61 L 259.211,5537.61 Q 274.211,5537.61 274.211,5522.61 L 274.211,5374.95 Q 274.211,5359.95 281.297,5359.95 L 288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,5582.02 L 259.211,5582.02 Q 274.211,5582.02 274.211,5567.02 L 274.211,5374.95 Q 274.211,5359.95 281.297,5359.95 L 288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <path d="M224.322,5626.43 L 259.211,5626.43 Q 274.211,5626.43 274.211,5611.43 L 274.211,5374.95 Q 274.211,5359.95 281.297,5359.95 L 288.384,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <circle cx="316.73" cy="5359.95" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
    <path d="M128.506,5359.95L144.596,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <polygon points="313.13,5359.95 301.61,5364.27 301.61,5355.63" style="fill:rgb(0,0,0)"></polygon>
    <path d="M288.384,5359.95L307.37,5359.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
    <text x="116.554" y="5329.71" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">HEXDIG&nbsp;=</text>
</svg>


