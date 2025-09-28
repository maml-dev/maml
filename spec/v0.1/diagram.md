# MAML v0.1 Syntax Diagrams

<style>
  svg {
    width: 100%;
    height: auto;
    margin-top: 80px;
  }

  svg * {
    stroke: var(--vp-c-text-3) !important;
  }

  svg text {
    fill: var(--vp-c-text-1) !important;
    stroke-width: 0 !important;
  }
</style>

<!-- Generated using https://abnf.dev/abnf2svg/ -->

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1005.99 5426.38">
<text x="110.736" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="47.52" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,47.52 130.427,51.84 130.427,43.2" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,47.52L136.187,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M141.947,62.64L330.068,62.64L330.068,32.4L141.947,32.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="236.007" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="352.593" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="355.761,47.52 344.241,51.84 344.241,43.2" style="fill:rgb(0,0,0)"></polygon>
<path d="M344.241,47.52L350.001,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M355.761,62.64L412.325,62.64L412.325,32.4L355.761,32.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="384.043" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
<text x="434.85" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="438.018,47.52 426.498,51.84 426.498,43.2" style="fill:rgb(0,0,0)"></polygon>
<path d="M426.498,47.52L432.258,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M438.018,62.64L626.139,62.64L626.139,32.4L438.018,32.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="532.079" y="47.52" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<circle cx="654.486" cy="47.52" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,47.52L130.427,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M330.068,47.52L344.241,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M412.325,47.52L426.498,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="650.886,47.52 639.366,51.84 639.366,43.2" style="fill:rgb(0,0,0)"></polygon>
<path d="M626.139,47.52L645.126,47.52" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="17.28" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">maml&nbsp;=</text>
<text x="110.736" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="134.453" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,134.453 158.773,138.773 158.773,130.133" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,134.453L164.533,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,149.573L233.423,149.573L233.423,119.333L170.293,119.333Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="201.858" y="134.453" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">object</text>
<path d="M158.773,134.453L158.773,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453L158.773,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="178.866" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="178.866" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,178.866 158.773,183.186 158.773,174.546" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,178.866L164.533,178.866" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,193.986L226.741,193.986L226.741,163.746L170.293,163.746Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="198.517" y="178.866" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">array</text>
<path d="M158.773,178.866L158.773,178.866" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,163.866 Q 144.6,178.866 151.686,178.866 L 158.773,178.866" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="223.279" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="223.279" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,223.279 158.773,227.599 158.773,218.959" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,223.279L164.533,223.279" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,238.399L231.695,238.399L231.695,208.159L170.293,208.159Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="200.994" y="223.279" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">string</text>
<path d="M158.773,223.279L158.773,223.279" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,208.279 Q 144.6,223.279 151.686,223.279 L 158.773,223.279" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="267.693" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="267.693" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,267.693 158.773,272.013 158.773,263.373" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,267.693L164.533,267.693" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,282.813L312.335,282.813L312.335,252.573L170.293,252.573Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="241.314" y="267.693" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">multiline-string</text>
<path d="M158.773,267.693L158.773,267.693" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,252.693 Q 144.6,267.693 151.686,267.693 L 158.773,267.693" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="312.106" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="312.106" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,312.106 158.773,316.426 158.773,307.786" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,312.106L164.533,312.106" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,327.226L246.901,327.226L246.901,296.986L170.293,296.986Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="208.597" y="312.106" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">number</text>
<path d="M158.773,312.106L158.773,312.106" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,297.106 Q 144.6,312.106 151.686,312.106 L 158.773,312.106" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="356.519" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="356.519" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,356.519 158.773,360.839 158.773,352.199" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,356.519L164.533,356.519" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,371.639L223.371,371.639A15.12 15.12 0 0 0 238.491 356.519A15.12 15.12 0 0 0 223.371 341.399L185.413,341.399A15.12 15.12 0 0 0 170.293 356.519A15.12 15.12 0 0 0 185.413 371.639Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="204.392" y="356.519" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"true"</text>
<path d="M158.773,356.519L158.773,356.519" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,341.519 Q 144.6,356.519 151.686,356.519 L 158.773,356.519" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="400.932" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="400.932" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,400.932 158.773,405.252 158.773,396.612" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,400.932L164.533,400.932" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,416.052L232.818,416.052A15.12 15.12 0 0 0 247.938 400.932A15.12 15.12 0 0 0 232.818 385.812L185.413,385.812A15.12 15.12 0 0 0 170.293 400.932A15.12 15.12 0 0 0 185.413 416.052Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="400.932" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"false"</text>
<path d="M158.773,400.932L158.773,400.932" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,385.932 Q 144.6,400.932 151.686,400.932 L 158.773,400.932" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="445.346" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="445.346" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,445.346 158.773,449.666 158.773,441.026" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,445.346L164.533,445.346" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,460.466L223.371,460.466A15.12 15.12 0 0 0 238.491 445.346A15.12 15.12 0 0 0 223.371 430.226L185.413,430.226A15.12 15.12 0 0 0 170.293 445.346A15.12 15.12 0 0 0 185.413 460.466Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="204.392" y="445.346" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"null"</text>
<path d="M158.773,445.346L158.773,445.346" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,134.453 L 137.513,134.453 Q 144.6,134.453 144.6,149.453 L 144.6,430.346 Q 144.6,445.346 151.686,445.346 L 158.773,445.346" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.423,134.453L354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M226.741,178.866 L 325.681,178.866 Q 340.681,178.866 340.681,163.866 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M231.695,223.279 L 325.681,223.279 Q 340.681,223.279 340.681,208.279 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M312.335,267.693 L 326.508,267.693 Q 340.681,267.693 340.681,252.693 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M246.901,312.106 L 325.681,312.106 Q 340.681,312.106 340.681,297.106 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M238.491,356.519 L 325.681,356.519 Q 340.681,356.519 340.681,341.519 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,400.932 L 325.681,400.932 Q 340.681,400.932 340.681,385.932 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M238.491,445.346 L 325.681,445.346 Q 340.681,445.346 340.681,430.346 L 340.681,149.453 Q 340.681,134.453 347.768,134.453 L 354.854,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="383.201" cy="134.453" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,134.453L130.427,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="379.601,134.453 368.081,138.773 368.081,130.133" style="fill:rgb(0,0,0)"></polygon>
<path d="M354.854,134.453L373.841,134.453" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="104.213" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">value&nbsp;=</text>
<text x="110.736" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="532.278" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,532.278 130.427,536.598 130.427,527.958" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,532.278L136.187,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,547.398L166.686,547.398A15.12 15.12 0 0 0 181.806 532.278A15.12 15.12 0 0 0 166.686 517.158L157.067,517.158A15.12 15.12 0 0 0 141.947 532.278A15.12 15.12 0 0 0 157.067 547.398Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="161.876" y="532.278" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"{"</text>
<text x="204.331" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="227.371" y="561.572" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="230.539,561.572 219.019,565.892 219.019,557.252" style="fill:rgb(0,0,0)"></polygon>
<path d="M219.019,561.572L224.779,561.572" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M230.539,576.692L319.934,576.692L319.934,546.452L230.539,546.452Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="275.237" y="561.572" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">members</text>
<path d="M195.979,532.278L342.974,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.979,532.278 L 201.739,532.278 Q 207.499,532.278 207.499,546.925 Q 207.499,561.572 213.259,561.572 L 219.019,561.572" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M319.934,561.572 L 325.694,561.572 Q 331.454,561.572 331.454,546.925 Q 331.454,532.278 337.214,532.278 L 342.974,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="365.499" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="368.667,532.278 357.147,536.598 357.147,527.958" style="fill:rgb(0,0,0)"></polygon>
<path d="M357.147,532.278L362.907,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M368.667,547.398L556.789,547.398L556.789,517.158L368.667,517.158Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="462.728" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="579.314" y="532.278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="582.482,532.278 570.962,536.598 570.962,527.958" style="fill:rgb(0,0,0)"></polygon>
<path d="M570.962,532.278L576.722,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M597.602,547.398L607.221,547.398A15.12 15.12 0 0 0 622.341 532.278A15.12 15.12 0 0 0 607.221 517.158L597.602,517.158A15.12 15.12 0 0 0 582.482 532.278A15.12 15.12 0 0 0 597.602 547.398Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="602.412" y="532.278" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"}"</text>
<circle cx="650.688" cy="532.278" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,532.278L130.427,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M181.806,532.278L195.979,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M342.974,532.278L357.147,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M556.789,532.278L570.962,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="647.088,532.278 635.568,536.598 635.568,527.958" style="fill:rgb(0,0,0)"></polygon>
<path d="M622.341,532.278L641.328,532.278" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="502.038" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">object&nbsp;=</text>
<text x="110.736" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="648.505" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,648.505 158.773,652.825 158.773,644.185" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,648.505L164.533,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,663.625L358.415,663.625L358.415,633.385L170.293,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="264.354" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="380.94" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="384.108,648.505 372.588,652.825 372.588,644.185" style="fill:rgb(0,0,0)"></polygon>
<path d="M372.588,648.505L378.348,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M384.108,663.625L475.346,663.625L475.346,633.385L384.108,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="429.727" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">key-value</text>
<text x="497.871" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="501.039,648.505 489.519,652.825 489.519,644.185" style="fill:rgb(0,0,0)"></polygon>
<path d="M489.519,648.505L495.279,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M501.039,663.625L535.139,663.625L535.139,633.385L501.039,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="518.089" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
<text x="557.664" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="580.704" y="677.798" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="583.872,677.798 572.352,682.118 572.352,673.478" style="fill:rgb(0,0,0)"></polygon>
<path d="M572.352,677.798L578.112,677.798" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M583.872,692.918L672.691,692.918L672.691,662.678L583.872,662.678Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="628.282" y="677.798" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
<path d="M549.312,648.505L695.731,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M549.312,648.505 L 555.072,648.505 Q 560.832,648.505 560.832,663.151 Q 560.832,677.798 566.592,677.798 L 572.352,677.798" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M672.691,677.798 L 678.451,677.798 Q 684.211,677.798 684.211,663.151 Q 684.211,648.505 689.971,648.505 L 695.731,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="718.256" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="721.424,648.505 709.904,652.825 709.904,644.185" style="fill:rgb(0,0,0)"></polygon>
<path d="M709.904,648.505L715.664,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M721.424,663.625L814.276,663.625L814.276,633.385L721.424,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="767.85" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
<text x="836.801" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="839.969,648.505 828.449,652.825 828.449,644.185" style="fill:rgb(0,0,0)"></polygon>
<path d="M828.449,648.505L834.209,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M839.969,663.625L929.364,663.625L929.364,633.385L839.969,633.385Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="884.666" y="648.505" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">members</text>
<path d="M158.773,648.505L158.773,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M358.415,648.505L372.588,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M475.346,648.505L489.519,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M535.139,648.505L549.312,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M695.731,648.505L709.904,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M814.276,648.505L828.449,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,648.505L158.773,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,722.211 158.773,726.531 158.773,717.891" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,722.211L164.533,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,737.331L358.415,737.331L358.415,707.091L170.293,707.091Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="264.354" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="380.94" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="384.108,722.211 372.588,726.531 372.588,717.891" style="fill:rgb(0,0,0)"></polygon>
<path d="M372.588,722.211L378.348,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M384.108,737.331L475.346,737.331L475.346,707.091L384.108,707.091Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="429.727" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">key-value</text>
<text x="497.871" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="501.039,722.211 489.519,726.531 489.519,717.891" style="fill:rgb(0,0,0)"></polygon>
<path d="M489.519,722.211L495.279,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M501.039,737.331L535.139,737.331L535.139,707.091L501.039,707.091Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="518.089" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
<text x="557.664" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="580.704" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="583.872,751.504 572.352,755.824 572.352,747.184" style="fill:rgb(0,0,0)"></polygon>
<path d="M572.352,751.504L578.112,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M583.872,766.624L672.691,766.624L672.691,736.384L583.872,736.384Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="628.282" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
<path d="M549.312,722.211L695.731,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M549.312,722.211 L 555.072,722.211 Q 560.832,722.211 560.832,736.858 Q 560.832,751.504 566.592,751.504 L 572.352,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M672.691,751.504 L 678.451,751.504 Q 684.211,751.504 684.211,736.858 Q 684.211,722.211 689.971,722.211 L 695.731,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="718.256" y="722.211" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="741.296" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="744.464,751.504 732.944,755.824 732.944,747.184" style="fill:rgb(0,0,0)"></polygon>
<path d="M732.944,751.504L738.704,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M744.464,766.624L837.316,766.624L837.316,736.384L744.464,736.384Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="790.89" y="751.504" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
<path d="M709.904,722.211L860.356,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M709.904,722.211 L 715.664,722.211 Q 721.424,722.211 721.424,736.858 Q 721.424,751.504 727.184,751.504 L 732.944,751.504" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M837.316,751.504 L 843.076,751.504 Q 848.836,751.504 848.836,736.858 Q 848.836,722.211 854.596,722.211 L 860.356,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M158.773,722.211L158.773,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M358.415,722.211L372.588,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M475.346,722.211L489.519,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M535.139,722.211L549.312,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M695.731,722.211L709.904,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,648.505 L 137.513,648.505 Q 144.6,648.505 144.6,663.505 L 144.6,707.211 Q 144.6,722.211 151.686,722.211 L 158.773,722.211" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M929.364,648.505L971.884,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M860.356,722.211 L 942.71,722.211 Q 957.71,722.211 957.71,707.211 L 957.71,663.505 Q 957.71,648.505 964.797,648.505 L 971.884,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="1000.23" cy="648.505" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,648.505L130.427,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="996.63,648.505 985.11,652.825 985.11,644.185" style="fill:rgb(0,0,0)"></polygon>
<path d="M971.884,648.505L990.87,648.505" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="618.265" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">members&nbsp;=</text>
<text x="110.736" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="838.437" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,838.437 130.427,842.757 130.427,834.117" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,838.437L136.187,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M141.947,853.557L182.612,853.557L182.612,823.317L141.947,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="162.279" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">key</text>
<text x="205.137" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="208.305,838.437 196.785,842.757 196.785,834.117" style="fill:rgb(0,0,0)"></polygon>
<path d="M196.785,838.437L202.545,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M208.305,853.557L242.405,853.557L242.405,823.317L208.305,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="225.355" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
<text x="264.93" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="268.098,838.437 256.578,842.757 256.578,834.117" style="fill:rgb(0,0,0)"></polygon>
<path d="M256.578,838.437L262.338,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M283.218,853.557L292.837,853.557A15.12 15.12 0 0 0 307.957 838.437A15.12 15.12 0 0 0 292.837 823.317L283.218,823.317A15.12 15.12 0 0 0 268.098 838.437A15.12 15.12 0 0 0 283.218 853.557Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="288.027" y="838.437" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">":"</text>
<text x="330.482" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="333.65,838.437 322.13,842.757 322.13,834.117" style="fill:rgb(0,0,0)"></polygon>
<path d="M322.13,838.437L327.89,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M333.65,853.557L367.749,853.557L367.749,823.317L333.65,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="350.7" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
<text x="390.275" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="393.443,838.437 381.923,842.757 381.923,834.117" style="fill:rgb(0,0,0)"></polygon>
<path d="M381.923,838.437L387.683,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M393.443,853.557L450.006,853.557L450.006,823.317L393.443,823.317Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="421.724" y="838.437" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
<circle cx="478.352" cy="838.437" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,838.437L130.427,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M182.612,838.437L196.785,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M242.405,838.437L256.578,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M307.957,838.437L322.13,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M367.749,838.437L381.923,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="474.752,838.437 463.232,842.757 463.232,834.117" style="fill:rgb(0,0,0)"></polygon>
<path d="M450.006,838.437L468.992,838.437" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="808.197" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">key-value&nbsp;=</text>
<text x="110.736" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="925.37" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,925.37 158.773,929.69 158.773,921.05" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,925.37L164.533,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,940.49L231.695,940.49L231.695,910.25L170.293,910.25Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="200.994" y="925.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">string</text>
<path d="M158.773,925.37L158.773,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,925.37L158.773,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="969.783" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="969.783" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,969.783 158.773,974.103 158.773,965.463" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,969.783L164.533,969.783" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,984.903L259.458,984.903L259.458,954.663L170.293,954.663Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="214.875" y="969.783" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">identifier</text>
<path d="M158.773,969.783L158.773,969.783" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,925.37 L 137.513,925.37 Q 144.6,925.37 144.6,940.37 L 144.6,954.783 Q 144.6,969.783 151.686,969.783 L 158.773,969.783" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M231.695,925.37L301.978,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M259.458,969.783 L 273.631,969.783 Q 287.804,969.783 287.804,954.783 L 287.804,940.37 Q 287.804,925.37 294.891,925.37 L 301.978,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="330.324" cy="925.37" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,925.37L130.427,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="326.724,925.37 315.204,929.69 315.204,921.05" style="fill:rgb(0,0,0)"></polygon>
<path d="M301.978,925.37L320.964,925.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="895.13" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">key&nbsp;=</text>
<text x="110.736" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="1056.72" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="152.952" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="152.952" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="181.298" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="181.298" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="184.466,1056.72 172.946,1061.04 172.946,1052.4" style="fill:rgb(0,0,0)"></polygon>
<path d="M172.946,1056.72L178.706,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M184.466,1071.84L255.775,1071.84L255.775,1041.6L184.466,1041.6Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="220.121" y="1056.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ALPHA</text>
<path d="M172.946,1056.72L172.946,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M144.6,1056.72L172.946,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="181.298" y="1101.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="181.298" y="1101.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="184.466,1101.13 172.946,1105.45 172.946,1096.81" style="fill:rgb(0,0,0)"></polygon>
<path d="M172.946,1101.13L178.706,1101.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M184.466,1116.25L245.868,1116.25L245.868,1086.01L184.466,1086.01Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="215.167" y="1101.13" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
<path d="M172.946,1101.13L172.946,1101.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M144.6,1056.72 L 151.686,1056.72 Q 158.773,1056.72 158.773,1071.72 L 158.773,1086.13 Q 158.773,1101.13 165.86,1101.13 L 172.946,1101.13" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="181.298" y="1145.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="181.298" y="1145.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="184.466,1145.54 172.946,1149.86 172.946,1141.22" style="fill:rgb(0,0,0)"></polygon>
<path d="M172.946,1145.54L178.706,1145.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M199.586,1160.66L209.205,1160.66A15.12 15.12 0 0 0 224.325 1145.54A15.12 15.12 0 0 0 209.205 1130.42L199.586,1130.42A15.12 15.12 0 0 0 184.466 1145.54A15.12 15.12 0 0 0 199.586 1160.66Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="204.396" y="1145.54" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"-"</text>
<path d="M172.946,1145.54L172.946,1145.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M144.6,1056.72 L 151.686,1056.72 Q 158.773,1056.72 158.773,1071.72 L 158.773,1130.54 Q 158.773,1145.54 165.86,1145.54 L 172.946,1145.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="181.298" y="1189.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="181.298" y="1189.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="184.466,1189.96 172.946,1194.28 172.946,1185.64" style="fill:rgb(0,0,0)"></polygon>
<path d="M172.946,1189.96L178.706,1189.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M199.586,1205.08L209.205,1205.08A15.12 15.12 0 0 0 224.325 1189.96A15.12 15.12 0 0 0 209.205 1174.84L199.586,1174.84A15.12 15.12 0 0 0 184.466 1189.96A15.12 15.12 0 0 0 199.586 1205.08Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="204.396" y="1189.96" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"_"</text>
<path d="M172.946,1189.96L172.946,1189.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M144.6,1056.72 L 151.686,1056.72 Q 158.773,1056.72 158.773,1071.72 L 158.773,1174.96 Q 158.773,1189.96 165.86,1189.96 L 172.946,1189.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M255.775,1056.72L298.295,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M245.868,1101.13 L 269.122,1101.13 Q 284.122,1101.13 284.122,1086.13 L 284.122,1071.72 Q 284.122,1056.72 291.208,1056.72 L 298.295,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M224.325,1145.54 L 269.122,1145.54 Q 284.122,1145.54 284.122,1130.54 L 284.122,1071.72 Q 284.122,1056.72 291.208,1056.72 L 298.295,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M224.325,1189.96 L 269.122,1189.96 Q 284.122,1189.96 284.122,1174.96 L 284.122,1071.72 Q 284.122,1056.72 291.208,1056.72 L 298.295,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M144.6,1056.72L144.6,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M298.295,1056.72L298.295,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M298.295,1056.72 L 305.381,1056.72 Q 312.468,1056.72 312.468,1071.72 L 312.468,1204.25 Q 312.468,1219.25 297.468,1219.25 L 145.427,1219.25 Q 130.427,1219.25 130.427,1204.25 L 130.427,1071.72 Q 130.427,1056.72 137.513,1056.72 L 144.6,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="340.814" cy="1056.72" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,1056.72L144.6,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="337.214,1056.72 325.694,1061.04 325.694,1052.4" style="fill:rgb(0,0,0)"></polygon>
<path d="M298.295,1056.72L331.454,1056.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1026.48" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">identifier&nbsp;=</text>
<text x="110.736" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="1291.06" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,1291.06 130.427,1295.38 130.427,1286.74" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,1291.06L136.187,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,1306.18L166.686,1306.18A15.12 15.12 0 0 0 181.806 1291.06A15.12 15.12 0 0 0 166.686 1275.94L157.067,1275.94A15.12 15.12 0 0 0 141.947 1291.06A15.12 15.12 0 0 0 157.067 1306.18Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="161.876" y="1291.06" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"["</text>
<text x="204.331" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="227.371" y="1320.36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="230.539,1320.36 219.019,1324.68 219.019,1316.04" style="fill:rgb(0,0,0)"></polygon>
<path d="M219.019,1320.36L224.779,1320.36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M230.539,1335.48L288.139,1335.48L288.139,1305.24L230.539,1305.24Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="259.339" y="1320.36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">items</text>
<path d="M195.979,1291.06L311.179,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.979,1291.06 L 201.739,1291.06 Q 207.499,1291.06 207.499,1305.71 Q 207.499,1320.36 213.259,1320.36 L 219.019,1320.36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.139,1320.36 L 293.899,1320.36 Q 299.659,1320.36 299.659,1305.71 Q 299.659,1291.06 305.419,1291.06 L 311.179,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="333.704" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="336.872,1291.06 325.352,1295.38 325.352,1286.74" style="fill:rgb(0,0,0)"></polygon>
<path d="M325.352,1291.06L331.112,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M336.872,1306.18L524.994,1306.18L524.994,1275.94L336.872,1275.94Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="430.933" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="547.519" y="1291.06" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="550.687,1291.06 539.167,1295.38 539.167,1286.74" style="fill:rgb(0,0,0)"></polygon>
<path d="M539.167,1291.06L544.927,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M565.807,1306.18L575.426,1306.18A15.12 15.12 0 0 0 590.546 1291.06A15.12 15.12 0 0 0 575.426 1275.94L565.807,1275.94A15.12 15.12 0 0 0 550.687 1291.06A15.12 15.12 0 0 0 565.807 1306.18Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="570.617" y="1291.06" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"]"</text>
<circle cx="618.893" cy="1291.06" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,1291.06L130.427,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M181.806,1291.06L195.979,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M311.179,1291.06L325.352,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M524.994,1291.06L539.167,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="615.293,1291.06 603.773,1295.38 603.773,1286.74" style="fill:rgb(0,0,0)"></polygon>
<path d="M590.546,1291.06L609.533,1291.06" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1260.82" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">array&nbsp;=</text>
<text x="110.736" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="1407.29" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,1407.29 158.773,1411.61 158.773,1402.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,1407.29L164.533,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,1422.41L358.415,1422.41L358.415,1392.17L170.293,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="264.354" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="380.94" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="384.108,1407.29 372.588,1411.61 372.588,1402.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M372.588,1407.29L378.348,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M384.108,1422.41L440.671,1422.41L440.671,1392.17L384.108,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="412.389" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
<text x="463.196" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="466.364,1407.29 454.844,1411.61 454.844,1402.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M454.844,1407.29L460.604,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M466.364,1422.41L500.463,1422.41L500.463,1392.17L466.364,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="483.414" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
<text x="522.989" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="546.029" y="1436.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="549.197,1436.58 537.677,1440.9 537.677,1432.26" style="fill:rgb(0,0,0)"></polygon>
<path d="M537.677,1436.58L543.437,1436.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M549.197,1451.7L638.016,1451.7L638.016,1421.46L549.197,1421.46Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="593.606" y="1436.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
<path d="M514.637,1407.29L661.056,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M514.637,1407.29 L 520.397,1407.29 Q 526.157,1407.29 526.157,1421.93 Q 526.157,1436.58 531.917,1436.58 L 537.677,1436.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M638.016,1436.58 L 643.776,1436.58 Q 649.536,1436.58 649.536,1421.93 Q 649.536,1407.29 655.296,1407.29 L 661.056,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="683.581" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="686.749,1407.29 675.229,1411.61 675.229,1402.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M675.229,1407.29L680.989,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M686.749,1422.41L779.6,1422.41L779.6,1392.17L686.749,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="733.175" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
<text x="802.126" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="805.294,1407.29 793.774,1411.61 793.774,1402.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M793.774,1407.29L799.534,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M805.294,1422.41L862.894,1422.41L862.894,1392.17L805.294,1392.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="834.094" y="1407.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">items</text>
<path d="M158.773,1407.29L158.773,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M358.415,1407.29L372.588,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M440.671,1407.29L454.844,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M500.463,1407.29L514.637,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M661.056,1407.29L675.229,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M779.6,1407.29L793.774,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,1407.29L158.773,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,1480.99 158.773,1485.31 158.773,1476.67" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,1480.99L164.533,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,1496.11L358.415,1496.11L358.415,1465.87L170.293,1465.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="264.354" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline</text>
<text x="380.94" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="384.108,1480.99 372.588,1485.31 372.588,1476.67" style="fill:rgb(0,0,0)"></polygon>
<path d="M372.588,1480.99L378.348,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M384.108,1496.11L440.671,1496.11L440.671,1465.87L384.108,1465.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="412.389" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">value</text>
<text x="463.196" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="466.364,1480.99 454.844,1485.31 454.844,1476.67" style="fill:rgb(0,0,0)"></polygon>
<path d="M454.844,1480.99L460.604,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M466.364,1496.11L500.463,1496.11L500.463,1465.87L466.364,1465.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="483.414" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ws</text>
<text x="522.989" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="546.029" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="549.197,1510.29 537.677,1514.61 537.677,1505.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M537.677,1510.29L543.437,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M549.197,1525.41L638.016,1525.41L638.016,1495.17L549.197,1495.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="593.606" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
<path d="M514.637,1480.99L661.056,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M514.637,1480.99 L 520.397,1480.99 Q 526.157,1480.99 526.157,1495.64 Q 526.157,1510.29 531.917,1510.29 L 537.677,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M638.016,1510.29 L 643.776,1510.29 Q 649.536,1510.29 649.536,1495.64 Q 649.536,1480.99 655.296,1480.99 L 661.056,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="683.581" y="1480.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="706.621" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="709.789,1510.29 698.269,1514.61 698.269,1505.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M698.269,1510.29L704.029,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M709.789,1525.41L802.64,1525.41L802.64,1495.17L709.789,1495.17Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="756.215" y="1510.29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">separator</text>
<path d="M675.229,1480.99L825.68,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M675.229,1480.99 L 680.989,1480.99 Q 686.749,1480.99 686.749,1495.64 Q 686.749,1510.29 692.509,1510.29 L 698.269,1510.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M802.64,1510.29 L 808.4,1510.29 Q 814.16,1510.29 814.16,1495.64 Q 814.16,1480.99 819.92,1480.99 L 825.68,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M158.773,1480.99L158.773,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M358.415,1480.99L372.588,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M440.671,1480.99L454.844,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M500.463,1480.99L514.637,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M661.056,1480.99L675.229,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,1407.29 L 137.513,1407.29 Q 144.6,1407.29 144.6,1422.29 L 144.6,1465.99 Q 144.6,1480.99 151.686,1480.99 L 158.773,1480.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M862.894,1407.29L905.413,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M825.68,1480.99 L 876.24,1480.99 Q 891.24,1480.99 891.24,1465.99 L 891.24,1422.29 Q 891.24,1407.29 898.327,1407.29 L 905.413,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="933.76" cy="1407.29" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,1407.29L130.427,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="930.16,1407.29 918.64,1411.61 918.64,1402.97" style="fill:rgb(0,0,0)"></polygon>
<path d="M905.413,1407.29L924.4,1407.29" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1377.05" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">items&nbsp;=</text>
<text x="110.736" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="1597.22" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="1597.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,1597.22 158.773,1601.54 158.773,1592.9" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,1597.22L164.533,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,1612.34L195.032,1612.34A15.12 15.12 0 0 0 210.152 1597.22A15.12 15.12 0 0 0 195.032 1582.1L185.413,1582.1A15.12 15.12 0 0 0 170.293 1597.22A15.12 15.12 0 0 0 185.413 1612.34Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="1597.22" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">","</text>
<path d="M158.773,1597.22L158.773,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,1597.22L158.773,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="1641.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="1641.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,1641.63 158.773,1645.95 158.773,1637.31" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,1641.63L164.533,1641.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,1656.75L247.477,1656.75L247.477,1626.51L170.293,1626.51Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="208.885" y="1641.63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
<path d="M158.773,1641.63L158.773,1641.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,1597.22 L 137.513,1597.22 Q 144.6,1597.22 144.6,1612.22 L 144.6,1626.63 Q 144.6,1641.63 151.686,1641.63 L 158.773,1641.63" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,1597.22L289.997,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.477,1641.63 L 261.65,1641.63 Q 275.823,1641.63 275.823,1626.63 L 275.823,1612.22 Q 275.823,1597.22 282.91,1597.22 L 289.997,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="318.343" cy="1597.22" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,1597.22L130.427,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="314.743,1597.22 303.223,1601.54 303.223,1592.9" style="fill:rgb(0,0,0)"></polygon>
<path d="M289.997,1597.22L308.983,1597.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1566.98" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">separator&nbsp;=</text>
<text x="110.736" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="1728.57" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,1728.57 130.427,1732.89 130.427,1724.25" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,1728.57L136.187,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M141.947,1743.69L201.044,1743.69L201.044,1713.45L141.947,1713.45Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="171.495" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
<text x="223.569" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="260.783" y="1757.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="260.783" y="1757.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="263.951,1757.86 252.431,1762.18 252.431,1753.54" style="fill:rgb(0,0,0)"></polygon>
<path d="M252.431,1757.86L258.191,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M263.951,1772.98L313.141,1772.98L313.141,1742.74L263.951,1742.74Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="288.546" y="1757.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">char</text>
<path d="M252.431,1757.86L252.431,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.141,1757.86L313.141,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.141,1757.86 L 320.228,1757.86 Q 327.314,1757.86 327.314,1772.51 Q 327.314,1787.15 312.314,1787.15 L 253.257,1787.15 Q 238.257,1787.15 238.257,1772.51 Q 238.257,1757.86 245.344,1757.86 L 252.431,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M215.217,1728.57L350.354,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M215.217,1728.57 L 220.977,1728.57 Q 226.737,1728.57 226.737,1743.21 Q 226.737,1757.86 239.584,1757.86 L 252.431,1757.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.141,1757.86 L 325.988,1757.86 Q 338.834,1757.86 338.834,1743.21 Q 338.834,1728.57 344.594,1728.57 L 350.354,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="372.879" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="376.047,1728.57 364.527,1732.89 364.527,1724.25" style="fill:rgb(0,0,0)"></polygon>
<path d="M364.527,1728.57L370.287,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M376.047,1743.69L435.145,1743.69L435.145,1713.45L376.047,1713.45Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="405.596" y="1728.57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
<circle cx="463.492" cy="1728.57" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,1728.57L130.427,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M201.044,1728.57L215.217,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M350.354,1728.57L364.527,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="459.892,1728.57 448.372,1732.89 448.372,1724.25" style="fill:rgb(0,0,0)"></polygon>
<path d="M435.145,1728.57L454.132,1728.57" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1698.33" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">string&nbsp;=</text>
<text x="110.736" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="1858.97" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="152.952" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="152.952" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="156.12,1858.97 144.6,1863.29 144.6,1854.65" style="fill:rgb(0,0,0)"></polygon>
<path d="M144.6,1858.97L150.36,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M156.12,1874.09L215.217,1874.09L215.217,1843.85L156.12,1843.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="185.669" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
<path d="M144.6,1858.97L144.6,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M215.217,1858.97L215.217,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M215.217,1858.97 L 222.304,1858.97 Q 229.391,1858.97 229.391,1873.61 Q 229.391,1888.26 214.391,1888.26 L 145.427,1888.26 Q 130.427,1888.26 130.427,1873.61 Q 130.427,1858.97 137.513,1858.97 L 144.6,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="266.089" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="266.089" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="269.257,1858.97 257.737,1863.29 257.737,1854.65" style="fill:rgb(0,0,0)"></polygon>
<path d="M257.737,1858.97L263.497,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M269.257,1874.09L374.78,1874.09L374.78,1843.85L269.257,1843.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="322.019" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">literal-char</text>
<path d="M257.737,1858.97L257.737,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M374.78,1858.97L374.78,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M374.78,1858.97 L 381.867,1858.97 Q 388.954,1858.97 388.954,1873.61 Q 388.954,1888.26 373.954,1888.26 L 258.564,1888.26 Q 243.564,1888.26 243.564,1873.61 Q 243.564,1858.97 250.65,1858.97 L 257.737,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="411.479" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="448.692" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="462.865" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="462.865" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="466.033,1888.26 454.513,1892.58 454.513,1883.94" style="fill:rgb(0,0,0)"></polygon>
<path d="M454.513,1888.26L460.273,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M466.033,1903.38L525.131,1903.38L525.131,1873.14L466.033,1873.14Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="495.582" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
<path d="M454.513,1888.26L454.513,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M525.131,1888.26L525.131,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M525.131,1888.26 L 532.217,1888.26 Q 539.304,1888.26 539.304,1902.91 Q 539.304,1917.55 524.304,1917.55 L 455.34,1917.55 Q 440.34,1917.55 440.34,1902.91 Q 440.34,1888.26 447.427,1888.26 L 454.513,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="576.002" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="576.002" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="579.17,1888.26 567.65,1892.58 567.65,1883.94" style="fill:rgb(0,0,0)"></polygon>
<path d="M567.65,1888.26L573.41,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M579.17,1903.38L684.694,1903.38L684.694,1873.14L579.17,1873.14Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="631.932" y="1888.26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">literal-char</text>
<path d="M567.65,1888.26L567.65,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M684.694,1888.26L684.694,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M684.694,1888.26 L 691.78,1888.26 Q 698.867,1888.26 698.867,1902.91 Q 698.867,1917.55 683.867,1917.55 L 568.477,1917.55 Q 553.477,1917.55 553.477,1902.91 Q 553.477,1888.26 560.564,1888.26 L 567.65,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M440.34,1888.26L454.513,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M525.131,1888.26L567.65,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="698.867,1888.26 687.347,1892.58 687.347,1883.94" style="fill:rgb(0,0,0)"></polygon>
<path d="M684.694,1888.26L693.107,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M698.867,1888.26 L 705.954,1888.26 Q 713.04,1888.26 713.04,1903.26 L 713.04,1916.73 Q 713.04,1931.73 698.04,1931.73 L 441.167,1931.73 Q 426.167,1931.73 426.167,1916.73 L 426.167,1903.26 Q 426.167,1888.26 433.253,1888.26 L 440.34,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M403.127,1858.97L736.08,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M403.127,1858.97 L 408.887,1858.97 Q 414.647,1858.97 414.647,1873.61 Q 414.647,1888.26 427.493,1888.26 L 440.34,1888.26" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M698.867,1888.26 L 711.714,1888.26 Q 724.56,1888.26 724.56,1873.61 Q 724.56,1858.97 730.32,1858.97 L 736.08,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="772.779" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="772.779" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="775.947,1858.97 764.427,1863.29 764.427,1854.65" style="fill:rgb(0,0,0)"></polygon>
<path d="M764.427,1858.97L770.187,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M775.947,1874.09L835.044,1874.09L835.044,1843.85L775.947,1843.85Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="805.495" y="1858.97" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
<path d="M764.427,1858.97L764.427,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M835.044,1858.97L835.044,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M835.044,1858.97 L 842.131,1858.97 Q 849.217,1858.97 849.217,1873.61 Q 849.217,1888.26 834.217,1888.26 L 765.253,1888.26 Q 750.253,1888.26 750.253,1873.61 Q 750.253,1858.97 757.34,1858.97 L 764.427,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="877.564" cy="1858.97" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,1858.97L144.6,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M215.217,1858.97L257.737,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M374.78,1858.97L403.127,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M736.08,1858.97L764.427,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="873.964,1858.97 862.444,1863.29 862.444,1854.65" style="fill:rgb(0,0,0)"></polygon>
<path d="M835.044,1858.97L868.204,1858.97" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1828.73" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">multiline-string&nbsp;=</text>
<text x="110.736" y="2003.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2003.54" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2003.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2003.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2003.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2003.54 158.773,2007.86 158.773,1999.22" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2003.54L164.533,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,2018.66L204.479,2018.66A15.12 15.12 0 0 0 219.599 2003.54A15.12 15.12 0 0 0 204.479 1988.42L185.413,1988.42A15.12 15.12 0 0 0 170.293 2003.54A15.12 15.12 0 0 0 185.413 2018.66Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="194.946" y="2003.54" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x09</text>
<path d="M158.773,2003.54L158.773,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2003.54L158.773,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="2047.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2047.95" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2047.95 158.773,2052.27 158.773,2043.63" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2047.95L164.533,2047.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,2063.07L232.818,2063.07A15.12 15.12 0 0 0 247.938 2047.95A15.12 15.12 0 0 0 232.818 2032.83L185.413,2032.83A15.12 15.12 0 0 0 170.293 2047.95A15.12 15.12 0 0 0 185.413 2063.07Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="2047.95" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20-21</text>
<path d="M158.773,2047.95L158.773,2047.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2003.54 L 137.513,2003.54 Q 144.6,2003.54 144.6,2018.54 L 144.6,2032.95 Q 144.6,2047.95 151.686,2047.95 L 158.773,2047.95" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="2092.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2092.37" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2092.37 158.773,2096.69 158.773,2088.05" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2092.37L164.533,2092.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,2107.49L232.818,2107.49A15.12 15.12 0 0 0 247.938 2092.37A15.12 15.12 0 0 0 232.818 2077.25L185.413,2077.25A15.12 15.12 0 0 0 170.293 2092.37A15.12 15.12 0 0 0 185.413 2107.49Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="2092.37" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x23-7E</text>
<path d="M158.773,2092.37L158.773,2092.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2003.54 L 137.513,2003.54 Q 144.6,2003.54 144.6,2018.54 L 144.6,2077.37 Q 144.6,2092.37 151.686,2092.37 L 158.773,2092.37" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="2136.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2136.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2136.78 158.773,2141.1 158.773,2132.46" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2136.78L164.533,2136.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,2151.9L257.039,2151.9L257.039,2121.66L170.293,2121.66Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="213.666" y="2136.78" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">non-ascii</text>
<path d="M158.773,2136.78L158.773,2136.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2003.54 L 137.513,2003.54 Q 144.6,2003.54 144.6,2018.54 L 144.6,2121.78 Q 144.6,2136.78 151.686,2136.78 L 158.773,2136.78" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="2181.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2181.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2181.19 158.773,2185.51 158.773,2176.87" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2181.19L164.533,2181.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,2196.31L247.477,2196.31L247.477,2166.07L170.293,2166.07Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="208.885" y="2181.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
<path d="M158.773,2181.19L158.773,2181.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2003.54 L 137.513,2003.54 Q 144.6,2003.54 144.6,2018.54 L 144.6,2166.19 Q 144.6,2181.19 151.686,2181.19 L 158.773,2181.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M219.599,2003.54L299.558,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,2047.95 L 270.385,2047.95 Q 285.385,2047.95 285.385,2032.95 L 285.385,2018.54 Q 285.385,2003.54 292.472,2003.54 L 299.558,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,2092.37 L 270.385,2092.37 Q 285.385,2092.37 285.385,2077.37 L 285.385,2018.54 Q 285.385,2003.54 292.472,2003.54 L 299.558,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M257.039,2136.78 L 271.212,2136.78 Q 285.385,2136.78 285.385,2121.78 L 285.385,2018.54 Q 285.385,2003.54 292.472,2003.54 L 299.558,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.477,2181.19 L 270.385,2181.19 Q 285.385,2181.19 285.385,2166.19 L 285.385,2018.54 Q 285.385,2003.54 292.472,2003.54 L 299.558,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="327.905" cy="2003.54" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2003.54L130.427,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="324.305,2003.54 312.785,2007.86 312.785,1999.22" style="fill:rgb(0,0,0)"></polygon>
<path d="M299.558,2003.54L318.545,2003.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="1973.3" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">literal-char&nbsp;=</text>
<text x="110.736" y="2268.12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2268.12" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2268.12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="161.819" y="2297.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="164.987,2297.42 153.467,2301.74 153.467,2293.1" style="fill:rgb(0,0,0)"></polygon>
<path d="M153.467,2297.42L159.227,2297.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M180.107,2312.54L189.726,2312.54A15.12 15.12 0 0 0 204.846 2297.42A15.12 15.12 0 0 0 189.726 2282.3L180.107,2282.3A15.12 15.12 0 0 0 164.987 2297.42A15.12 15.12 0 0 0 180.107 2312.54Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="184.916" y="2297.42" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"-"</text>
<path d="M130.427,2268.12L227.886,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2268.12 L 136.187,2268.12 Q 141.947,2268.12 141.947,2282.77 Q 141.947,2297.42 147.707,2297.42 L 153.467,2297.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M204.846,2297.42 L 210.606,2297.42 Q 216.366,2297.42 216.366,2282.77 Q 216.366,2268.12 222.126,2268.12 L 227.886,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="250.411" y="2268.12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="253.579,2268.12 242.059,2272.44 242.059,2263.8" style="fill:rgb(0,0,0)"></polygon>
<path d="M242.059,2268.12L247.819,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M253.579,2283.24L325.925,2283.24L325.925,2253L253.579,2253Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="289.752" y="2268.12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">integer</text>
<text x="348.45" y="2268.12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="371.49" y="2297.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="374.658,2297.42 363.138,2301.74 363.138,2293.1" style="fill:rgb(0,0,0)"></polygon>
<path d="M363.138,2297.42L368.898,2297.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M374.658,2312.54L451.842,2312.54L451.842,2282.3L374.658,2282.3Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="413.25" y="2297.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">fraction</text>
<path d="M340.098,2268.12L474.882,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M340.098,2268.12 L 345.858,2268.12 Q 351.618,2268.12 351.618,2282.77 Q 351.618,2297.42 357.378,2297.42 L 363.138,2297.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M451.842,2297.42 L 457.602,2297.42 Q 463.362,2297.42 463.362,2282.77 Q 463.362,2268.12 469.122,2268.12 L 474.882,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="497.407" y="2268.12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="520.447" y="2297.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="523.615,2297.42 512.095,2301.74 512.095,2293.1" style="fill:rgb(0,0,0)"></polygon>
<path d="M512.095,2297.42L517.855,2297.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M523.615,2312.54L564.857,2312.54L564.857,2282.3L523.615,2282.3Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="544.236" y="2297.42" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">exp</text>
<path d="M489.055,2268.12L587.897,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M489.055,2268.12 L 494.815,2268.12 Q 500.575,2268.12 500.575,2282.77 Q 500.575,2297.42 506.335,2297.42 L 512.095,2297.42" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M564.857,2297.42 L 570.617,2297.42 Q 576.377,2297.42 576.377,2282.77 Q 576.377,2268.12 582.137,2268.12 L 587.897,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="616.243" cy="2268.12" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2268.12L130.427,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M227.886,2268.12L242.059,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M325.925,2268.12L340.098,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M474.882,2268.12L489.055,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="612.643,2268.12 601.123,2272.44 601.123,2263.8" style="fill:rgb(0,0,0)"></polygon>
<path d="M587.897,2268.12L606.883,2268.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2237.88" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">number&nbsp;=</text>
<text x="110.736" y="2384.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2384.35" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2384.35" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,2384.35 130.427,2388.67 130.427,2380.03" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,2384.35L136.187,2384.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,2399.47L204.471,2399.47A15.12 15.12 0 0 0 219.591 2384.35A15.12 15.12 0 0 0 204.471 2369.23L157.067,2369.23A15.12 15.12 0 0 0 141.947 2384.35A15.12 15.12 0 0 0 157.067 2399.47Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="180.769" y="2384.35" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x31-39</text>
<circle cx="247.938" cy="2384.35" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2384.35L130.427,2384.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="244.338,2384.35 232.818,2388.67 232.818,2380.03" style="fill:rgb(0,0,0)"></polygon>
<path d="M219.591,2384.35L238.578,2384.35" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2354.11" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">onenine&nbsp;=</text>
<text x="110.736" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2471.28" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2471.28 158.773,2475.6 158.773,2466.96" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2471.28L164.533,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,2486.4L195.032,2486.4A15.12 15.12 0 0 0 210.152 2471.28A15.12 15.12 0 0 0 195.032 2456.16L185.413,2456.16A15.12 15.12 0 0 0 170.293 2471.28A15.12 15.12 0 0 0 185.413 2486.4Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="2471.28" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"e"</text>
<path d="M158.773,2471.28L158.773,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2471.28L158.773,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="2515.7" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2515.7" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2515.7 158.773,2520.02 158.773,2511.38" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2515.7L164.533,2515.7" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,2530.82L195.032,2530.82A15.12 15.12 0 0 0 210.152 2515.7A15.12 15.12 0 0 0 195.032 2500.58L185.413,2500.58A15.12 15.12 0 0 0 170.293 2515.7A15.12 15.12 0 0 0 185.413 2530.82Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="2515.7" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"E"</text>
<path d="M158.773,2515.7L158.773,2515.7" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2471.28 L 137.513,2471.28 Q 144.6,2471.28 144.6,2486.28 L 144.6,2500.7 Q 144.6,2515.7 151.686,2515.7 L 158.773,2515.7" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,2471.28L252.672,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,2515.7 L 224.325,2515.7 Q 238.499,2515.7 238.499,2500.7 L 238.499,2486.28 Q 238.499,2471.28 245.585,2471.28 L 252.672,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="275.197" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="298.237" y="2500.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="326.584" y="2500.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="326.584" y="2500.58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="329.752,2500.58 318.232,2504.9 318.232,2496.26" style="fill:rgb(0,0,0)"></polygon>
<path d="M318.232,2500.58L323.992,2500.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M344.872,2515.7L354.491,2515.7A15.12 15.12 0 0 0 369.611 2500.58A15.12 15.12 0 0 0 354.491 2485.46L344.872,2485.46A15.12 15.12 0 0 0 329.752 2500.58A15.12 15.12 0 0 0 344.872 2515.7Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="349.681" y="2500.58" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"-"</text>
<path d="M318.232,2500.58L318.232,2500.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M289.885,2500.58L318.232,2500.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="326.584" y="2544.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="326.584" y="2544.99" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="329.752,2544.99 318.232,2549.31 318.232,2540.67" style="fill:rgb(0,0,0)"></polygon>
<path d="M318.232,2544.99L323.992,2544.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M344.872,2560.11L354.491,2560.11A15.12 15.12 0 0 0 369.611 2544.99A15.12 15.12 0 0 0 354.491 2529.87L344.872,2529.87A15.12 15.12 0 0 0 329.752 2544.99A15.12 15.12 0 0 0 344.872 2560.11Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="349.681" y="2544.99" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"+"</text>
<path d="M318.232,2544.99L318.232,2544.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M289.885,2500.58 L 296.972,2500.58 Q 304.058,2500.58 304.058,2515.58 L 304.058,2529.99 Q 304.058,2544.99 311.145,2544.99 L 318.232,2544.99" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M369.611,2500.58L412.13,2500.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M369.611,2544.99 L 383.784,2544.99 Q 397.957,2544.99 397.957,2529.99 L 397.957,2515.58 Q 397.957,2500.58 405.044,2500.58 L 412.13,2500.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M266.845,2471.28L435.17,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M266.845,2471.28 L 272.605,2471.28 Q 278.365,2471.28 278.365,2485.93 Q 278.365,2500.58 284.125,2500.58 L 289.885,2500.58" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M412.13,2500.58 L 417.89,2500.58 Q 423.65,2500.58 423.65,2485.93 Q 423.65,2471.28 429.41,2471.28 L 435.17,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="471.869" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="471.869" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="475.037,2471.28 463.517,2475.6 463.517,2466.96" style="fill:rgb(0,0,0)"></polygon>
<path d="M463.517,2471.28L469.277,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M475.037,2486.4L536.439,2486.4L536.439,2456.16L475.037,2456.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="505.738" y="2471.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
<path d="M463.517,2471.28L463.517,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M536.439,2471.28L536.439,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M536.439,2471.28 L 543.525,2471.28 Q 550.612,2471.28 550.612,2485.93 Q 550.612,2500.58 535.612,2500.58 L 464.344,2500.58 Q 449.344,2500.58 449.344,2485.93 Q 449.344,2471.28 456.43,2471.28 L 463.517,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="578.958" cy="2471.28" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2471.28L130.427,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M252.672,2471.28L266.845,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M435.17,2471.28L463.517,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="575.358,2471.28 563.838,2475.6 563.838,2466.96" style="fill:rgb(0,0,0)"></polygon>
<path d="M536.439,2471.28L569.598,2471.28" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2441.04" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">exp&nbsp;=</text>
<text x="110.736" y="2631.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2631.92" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2631.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,2631.92 130.427,2636.24 130.427,2627.6" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,2631.92L136.187,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,2647.04L166.686,2647.04A15.12 15.12 0 0 0 181.806 2631.92A15.12 15.12 0 0 0 166.686 2616.8L157.067,2616.8A15.12 15.12 0 0 0 141.947 2631.92A15.12 15.12 0 0 0 157.067 2647.04Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="161.876" y="2631.92" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"."</text>
<text x="218.504" y="2631.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="218.504" y="2631.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="221.672,2631.92 210.152,2636.24 210.152,2627.6" style="fill:rgb(0,0,0)"></polygon>
<path d="M210.152,2631.92L215.912,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M221.672,2647.04L283.074,2647.04L283.074,2616.8L221.672,2616.8Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="252.373" y="2631.92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
<path d="M210.152,2631.92L210.152,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M283.074,2631.92L283.074,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M283.074,2631.92 L 290.16,2631.92 Q 297.247,2631.92 297.247,2646.57 Q 297.247,2661.22 282.247,2661.22 L 210.979,2661.22 Q 195.979,2661.22 195.979,2646.57 Q 195.979,2631.92 203.066,2631.92 L 210.152,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="325.594" cy="2631.92" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2631.92L130.427,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M181.806,2631.92L210.152,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="321.994,2631.92 310.474,2636.24 310.474,2627.6" style="fill:rgb(0,0,0)"></polygon>
<path d="M283.074,2631.92L316.234,2631.92" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2601.68" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">fraction&nbsp;=</text>
<text x="110.736" y="2733.03" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2733.03" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2733.03" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2733.03" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2733.03" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2733.03 158.773,2737.35 158.773,2728.71" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2733.03L164.533,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,2748.15L195.032,2748.15A15.12 15.12 0 0 0 210.152 2733.03A15.12 15.12 0 0 0 195.032 2717.91L185.413,2717.91A15.12 15.12 0 0 0 170.293 2733.03A15.12 15.12 0 0 0 185.413 2748.15Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="2733.03" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"0"</text>
<path d="M158.773,2733.03L158.773,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2733.03L158.773,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="2777.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2777.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2777.44 158.773,2781.76 158.773,2773.12" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2777.44L164.533,2777.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,2792.56L248.514,2792.56L248.514,2762.32L170.293,2762.32Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.403" y="2777.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">onenine</text>
<text x="271.039" y="2777.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="308.252" y="2806.74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="308.252" y="2806.74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="311.42,2806.74 299.9,2811.06 299.9,2802.42" style="fill:rgb(0,0,0)"></polygon>
<path d="M299.9,2806.74L305.66,2806.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M311.42,2821.86L372.822,2821.86L372.822,2791.62L311.42,2791.62Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="342.121" y="2806.74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
<path d="M299.9,2806.74L299.9,2806.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M372.822,2806.74L372.822,2806.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M372.822,2806.74 L 379.909,2806.74 Q 386.995,2806.74 386.995,2821.38 Q 386.995,2836.03 371.995,2836.03 L 300.727,2836.03 Q 285.727,2836.03 285.727,2821.38 Q 285.727,2806.74 292.814,2806.74 L 299.9,2806.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M262.687,2777.44L410.035,2777.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M262.687,2777.44 L 268.447,2777.44 Q 274.207,2777.44 274.207,2792.09 Q 274.207,2806.74 287.054,2806.74 L 299.9,2806.74" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M372.822,2806.74 L 385.669,2806.74 Q 398.515,2806.74 398.515,2792.09 Q 398.515,2777.44 404.275,2777.44 L 410.035,2777.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M158.773,2777.44L158.773,2777.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M248.514,2777.44L262.687,2777.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2733.03 L 137.513,2733.03 Q 144.6,2733.03 144.6,2748.03 L 144.6,2762.44 Q 144.6,2777.44 151.686,2777.44 L 158.773,2777.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,2733.03L452.555,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M410.035,2777.44 L 424.208,2777.44 Q 438.382,2777.44 438.382,2762.44 L 438.382,2748.03 Q 438.382,2733.03 445.468,2733.03 L 452.555,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="480.901" cy="2733.03" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2733.03L130.427,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="477.301,2733.03 465.781,2737.35 465.781,2728.71" style="fill:rgb(0,0,0)"></polygon>
<path d="M452.555,2733.03L471.541,2733.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2702.79" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">integer&nbsp;=</text>
<text x="110.736" y="2907.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2907.84" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2907.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,2907.84 130.427,2912.16 130.427,2903.52" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,2907.84L136.187,2907.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,2922.96L176.132,2922.96A15.12 15.12 0 0 0 191.252 2907.84A15.12 15.12 0 0 0 176.132 2892.72L157.067,2892.72A15.12 15.12 0 0 0 141.947 2907.84A15.12 15.12 0 0 0 157.067 2922.96Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="166.599" y="2907.84" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x22</text>
<circle cx="219.599" cy="2907.84" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2907.84L130.427,2907.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="215.999,2907.84 204.479,2912.16 204.479,2903.52" style="fill:rgb(0,0,0)"></polygon>
<path d="M191.252,2907.84L210.239,2907.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2877.6" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">quote&nbsp;=</text>
<text x="110.736" y="2994.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="2994.77" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="2994.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2994.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="2994.77" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,2994.77 158.773,2999.09 158.773,2990.45" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,2994.77L164.533,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3009.89L232.818,3009.89A15.12 15.12 0 0 0 247.938 2994.77A15.12 15.12 0 0 0 232.818 2979.65L185.413,2979.65A15.12 15.12 0 0 0 170.293 2994.77A15.12 15.12 0 0 0 185.413 3009.89Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="2994.77" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20-21</text>
<path d="M158.773,2994.77L158.773,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2994.77L158.773,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="3039.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3039.19" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3039.19 158.773,3043.51 158.773,3034.87" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3039.19L164.533,3039.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3054.31L232.818,3054.31A15.12 15.12 0 0 0 247.938 3039.19A15.12 15.12 0 0 0 232.818 3024.07L185.413,3024.07A15.12 15.12 0 0 0 170.293 3039.19A15.12 15.12 0 0 0 185.413 3054.31Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="3039.19" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x23-5B</text>
<path d="M158.773,3039.19L158.773,3039.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2994.77 L 137.513,2994.77 Q 144.6,2994.77 144.6,3009.77 L 144.6,3024.19 Q 144.6,3039.19 151.686,3039.19 L 158.773,3039.19" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="3083.6" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3083.6" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3083.6 158.773,3087.92 158.773,3079.28" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3083.6L164.533,3083.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3098.72L270.603,3098.72A15.12 15.12 0 0 0 285.723 3083.6A15.12 15.12 0 0 0 270.603 3068.48L185.413,3068.48A15.12 15.12 0 0 0 170.293 3083.6A15.12 15.12 0 0 0 185.413 3098.72Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="228.008" y="3083.6" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x5D-10FFFF</text>
<path d="M158.773,3083.6L158.773,3083.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2994.77 L 137.513,2994.77 Q 144.6,2994.77 144.6,3009.77 L 144.6,3068.6 Q 144.6,3083.6 151.686,3083.6 L 158.773,3083.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="3128.01" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3128.01" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3128.01 158.773,3132.33 158.773,3123.69" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3128.01L164.533,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3143.13L204.479,3143.13A15.12 15.12 0 0 0 219.599 3128.01A15.12 15.12 0 0 0 204.479 3112.89L185.413,3112.89A15.12 15.12 0 0 0 170.293 3128.01A15.12 15.12 0 0 0 185.413 3143.13Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="194.946" y="3128.01" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x5C</text>
<text x="242.124" y="3128.01" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3128.01" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3128.01" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3128.01 262.118,3132.33 262.118,3123.69" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3128.01L267.878,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3143.13L307.824,3143.13A15.12 15.12 0 0 0 322.944 3128.01A15.12 15.12 0 0 0 307.824 3112.89L288.758,3112.89A15.12 15.12 0 0 0 273.638 3128.01A15.12 15.12 0 0 0 288.758 3143.13Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="298.291" y="3128.01" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x5C</text>
<path d="M262.118,3128.01L262.118,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01L262.118,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3172.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3172.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3172.43 262.118,3176.75 262.118,3168.11" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3172.43L267.878,3172.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M273.638,3187.55L332.736,3187.55L332.736,3157.31L273.638,3157.31Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="303.187" y="3172.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">quote</text>
<path d="M262.118,3172.43L262.118,3172.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3157.43 Q 247.945,3172.43 255.032,3172.43 L 262.118,3172.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3216.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3216.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3216.84 262.118,3221.16 262.118,3212.52" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3216.84L267.878,3216.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3231.96L298.378,3231.96A15.12 15.12 0 0 0 313.498 3216.84A15.12 15.12 0 0 0 298.378 3201.72L288.758,3201.72A15.12 15.12 0 0 0 273.638 3216.84A15.12 15.12 0 0 0 288.758 3231.96Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3216.84" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"/"</text>
<path d="M262.118,3216.84L262.118,3216.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3201.84 Q 247.945,3216.84 255.032,3216.84 L 262.118,3216.84" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3261.25" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3261.25" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3261.25 262.118,3265.57 262.118,3256.93" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3261.25L267.878,3261.25" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3276.37L298.378,3276.37A15.12 15.12 0 0 0 313.498 3261.25A15.12 15.12 0 0 0 298.378 3246.13L288.758,3246.13A15.12 15.12 0 0 0 273.638 3261.25A15.12 15.12 0 0 0 288.758 3276.37Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3261.25" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"b"</text>
<path d="M262.118,3261.25L262.118,3261.25" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3246.25 Q 247.945,3261.25 255.032,3261.25 L 262.118,3261.25" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3305.67" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3305.67" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3305.67 262.118,3309.99 262.118,3301.35" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3305.67L267.878,3305.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3320.79L298.378,3320.79A15.12 15.12 0 0 0 313.498 3305.67A15.12 15.12 0 0 0 298.378 3290.55L288.758,3290.55A15.12 15.12 0 0 0 273.638 3305.67A15.12 15.12 0 0 0 288.758 3320.79Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3305.67" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"f"</text>
<path d="M262.118,3305.67L262.118,3305.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3290.67 Q 247.945,3305.67 255.032,3305.67 L 262.118,3305.67" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3350.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3350.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3350.08 262.118,3354.4 262.118,3345.76" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3350.08L267.878,3350.08" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3365.2L298.378,3365.2A15.12 15.12 0 0 0 313.498 3350.08A15.12 15.12 0 0 0 298.378 3334.96L288.758,3334.96A15.12 15.12 0 0 0 273.638 3350.08A15.12 15.12 0 0 0 288.758 3365.2Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3350.08" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"n"</text>
<path d="M262.118,3350.08L262.118,3350.08" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3335.08 Q 247.945,3350.08 255.032,3350.08 L 262.118,3350.08" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3394.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3394.49" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3394.49 262.118,3398.81 262.118,3390.17" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3394.49L267.878,3394.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3409.61L298.378,3409.61A15.12 15.12 0 0 0 313.498 3394.49A15.12 15.12 0 0 0 298.378 3379.37L288.758,3379.37A15.12 15.12 0 0 0 273.638 3394.49A15.12 15.12 0 0 0 288.758 3409.61Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3394.49" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"r"</text>
<path d="M262.118,3394.49L262.118,3394.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3379.49 Q 247.945,3394.49 255.032,3394.49 L 262.118,3394.49" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3438.91" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3438.91" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3438.91 262.118,3443.23 262.118,3434.59" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3438.91L267.878,3438.91" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3454.03L298.378,3454.03A15.12 15.12 0 0 0 313.498 3438.91A15.12 15.12 0 0 0 298.378 3423.79L288.758,3423.79A15.12 15.12 0 0 0 273.638 3438.91A15.12 15.12 0 0 0 288.758 3454.03Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3438.91" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"t"</text>
<path d="M262.118,3438.91L262.118,3438.91" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3423.91 Q 247.945,3438.91 255.032,3438.91 L 262.118,3438.91" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="270.47" y="3483.32" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="270.47" y="3483.32" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="273.638,3483.32 262.118,3487.64 262.118,3479" style="fill:rgb(0,0,0)"></polygon>
<path d="M262.118,3483.32L267.878,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M288.758,3498.44L298.378,3498.44A15.12 15.12 0 0 0 313.498 3483.32A15.12 15.12 0 0 0 298.378 3468.2L288.758,3468.2A15.12 15.12 0 0 0 273.638 3483.32A15.12 15.12 0 0 0 288.758 3498.44Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="293.568" y="3483.32" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"u"</text>
<text x="350.196" y="3483.32" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="350.196" y="3483.32" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="353.364,3483.32 341.844,3487.64 341.844,3479" style="fill:rgb(0,0,0)"></polygon>
<path d="M341.844,3483.32L347.604,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M353.364,3498.44L434.926,3498.44L434.926,3468.2L353.364,3468.2Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="394.145" y="3483.32" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HEXDIG</text>
<path d="M341.844,3483.32L341.844,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M434.926,3483.32L434.926,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M434.926,3483.32 L 442.012,3483.32 Q 449.099,3483.32 449.099,3497.97 Q 449.099,3512.61 434.099,3512.61 L 342.671,3512.61 Q 327.671,3512.61 327.671,3497.97 Q 327.671,3483.32 334.757,3483.32 L 341.844,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M262.118,3483.32L262.118,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3483.32L341.844,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M233.772,3128.01 L 240.858,3128.01 Q 247.945,3128.01 247.945,3143.01 L 247.945,3468.32 Q 247.945,3483.32 255.032,3483.32 L 262.118,3483.32" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M322.944,3128.01L491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M332.736,3172.43 L 462.445,3172.43 Q 477.445,3172.43 477.445,3157.43 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3216.84 L 462.445,3216.84 Q 477.445,3216.84 477.445,3201.84 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3261.25 L 462.445,3261.25 Q 477.445,3261.25 477.445,3246.25 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3305.67 L 462.445,3305.67 Q 477.445,3305.67 477.445,3290.67 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3350.08 L 462.445,3350.08 Q 477.445,3350.08 477.445,3335.08 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3394.49 L 462.445,3394.49 Q 477.445,3394.49 477.445,3379.49 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M313.498,3438.91 L 462.445,3438.91 Q 477.445,3438.91 477.445,3423.91 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M449.099,3483.32 L 463.272,3483.32 Q 477.445,3483.32 477.445,3468.32 L 477.445,3143.01 Q 477.445,3128.01 484.532,3128.01 L 491.618,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M158.773,3128.01L158.773,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M219.599,3128.01L233.772,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,2994.77 L 137.513,2994.77 Q 144.6,2994.77 144.6,3009.77 L 144.6,3113.01 Q 144.6,3128.01 151.686,3128.01 L 158.773,3128.01" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,2994.77L534.138,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,3039.19 L 504.965,3039.19 Q 519.965,3039.19 519.965,3024.19 L 519.965,3009.77 Q 519.965,2994.77 527.052,2994.77 L 534.138,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M285.723,3083.6 L 504.965,3083.6 Q 519.965,3083.6 519.965,3068.6 L 519.965,3009.77 Q 519.965,2994.77 527.052,2994.77 L 534.138,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M491.618,3128.01 L 505.792,3128.01 Q 519.965,3128.01 519.965,3113.01 L 519.965,3009.77 Q 519.965,2994.77 527.052,2994.77 L 534.138,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="562.485" cy="2994.77" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,2994.77L130.427,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="558.885,2994.77 547.365,2999.09 547.365,2990.45" style="fill:rgb(0,0,0)"></polygon>
<path d="M534.138,2994.77L553.125,2994.77" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="2964.53" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">char&nbsp;=</text>
<text x="110.736" y="3584.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="3584.43" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="3584.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,3584.43 130.427,3588.75 130.427,3580.11" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,3584.43L136.187,3584.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,3599.55L166.686,3599.55A15.12 15.12 0 0 0 181.806 3584.43A15.12 15.12 0 0 0 166.686 3569.31L157.067,3569.31A15.12 15.12 0 0 0 141.947 3584.43A15.12 15.12 0 0 0 157.067 3599.55Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="161.876" y="3584.43" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"#"</text>
<text x="204.331" y="3584.43" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="241.544" y="3613.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="241.544" y="3613.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="244.712,3613.72 233.192,3618.04 233.192,3609.4" style="fill:rgb(0,0,0)"></polygon>
<path d="M233.192,3613.72L238.952,3613.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M244.712,3628.84L318.095,3628.84L318.095,3598.6L244.712,3598.6Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="281.403" y="3613.72" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">non-eol</text>
<path d="M233.192,3613.72L233.192,3613.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M318.095,3613.72L318.095,3613.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M318.095,3613.72 L 325.181,3613.72 Q 332.268,3613.72 332.268,3628.37 Q 332.268,3643.01 317.268,3643.01 L 234.019,3643.01 Q 219.019,3643.01 219.019,3628.37 Q 219.019,3613.72 226.106,3613.72 L 233.192,3613.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.979,3584.43L355.308,3584.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.979,3584.43 L 201.739,3584.43 Q 207.499,3584.43 207.499,3599.07 Q 207.499,3613.72 220.346,3613.72 L 233.192,3613.72" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M318.095,3613.72 L 330.941,3613.72 Q 343.788,3613.72 343.788,3599.07 Q 343.788,3584.43 349.548,3584.43 L 355.308,3584.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="383.654" cy="3584.43" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,3584.43L130.427,3584.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M181.806,3584.43L195.979,3584.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="380.054,3584.43 368.534,3588.75 368.534,3580.11" style="fill:rgb(0,0,0)"></polygon>
<path d="M355.308,3584.43L374.294,3584.43" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="3554.19" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">comment&nbsp;=</text>
<text x="110.736" y="3714.83" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="3714.83" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="3714.83" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3714.83" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3714.83" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3714.83 158.773,3719.15 158.773,3710.51" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3714.83L164.533,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3729.95L204.479,3729.95A15.12 15.12 0 0 0 219.599 3714.83A15.12 15.12 0 0 0 204.479 3699.71L185.413,3699.71A15.12 15.12 0 0 0 170.293 3714.83A15.12 15.12 0 0 0 185.413 3729.95Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="194.946" y="3714.83" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x09</text>
<path d="M158.773,3714.83L158.773,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,3714.83L158.773,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="3759.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3759.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3759.24 158.773,3763.56 158.773,3754.92" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3759.24L164.533,3759.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3774.36L232.818,3774.36A15.12 15.12 0 0 0 247.938 3759.24A15.12 15.12 0 0 0 232.818 3744.12L185.413,3744.12A15.12 15.12 0 0 0 170.293 3759.24A15.12 15.12 0 0 0 185.413 3774.36Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="3759.24" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20-7E</text>
<path d="M158.773,3759.24L158.773,3759.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,3714.83 L 137.513,3714.83 Q 144.6,3714.83 144.6,3729.83 L 144.6,3744.24 Q 144.6,3759.24 151.686,3759.24 L 158.773,3759.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="3803.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3803.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3803.65 158.773,3807.97 158.773,3799.33" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3803.65L164.533,3803.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,3818.77L257.039,3818.77L257.039,3788.53L170.293,3788.53Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="213.666" y="3803.65" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">non-ascii</text>
<path d="M158.773,3803.65L158.773,3803.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,3714.83 L 137.513,3714.83 Q 144.6,3714.83 144.6,3729.83 L 144.6,3788.65 Q 144.6,3803.65 151.686,3803.65 L 158.773,3803.65" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M219.599,3714.83L299.558,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,3759.24 L 270.385,3759.24 Q 285.385,3759.24 285.385,3744.24 L 285.385,3729.83 Q 285.385,3714.83 292.472,3714.83 L 299.558,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M257.039,3803.65 L 271.212,3803.65 Q 285.385,3803.65 285.385,3788.65 L 285.385,3729.83 Q 285.385,3714.83 292.472,3714.83 L 299.558,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="327.905" cy="3714.83" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,3714.83L130.427,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="324.305,3714.83 312.785,3719.15 312.785,3710.51" style="fill:rgb(0,0,0)"></polygon>
<path d="M299.558,3714.83L318.545,3714.83" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="3684.59" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">non-eol&nbsp;=</text>
<text x="110.736" y="3890.59" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="3890.59" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="3890.59" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3890.59" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3890.59" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3890.59 158.773,3894.91 158.773,3886.27" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3890.59L164.533,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3905.71L251.711,3905.71A15.12 15.12 0 0 0 266.831 3890.59A15.12 15.12 0 0 0 251.711 3875.47L185.413,3875.47A15.12 15.12 0 0 0 170.293 3890.59A15.12 15.12 0 0 0 185.413 3905.71Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="218.562" y="3890.59" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x80-D7FF</text>
<path d="M158.773,3890.59L158.773,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,3890.59L158.773,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="3935" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="3935" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,3935 158.773,3939.32 158.773,3930.68" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,3935L164.533,3935" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,3950.12L289.496,3950.12A15.12 15.12 0 0 0 304.616 3935A15.12 15.12 0 0 0 289.496 3919.88L185.413,3919.88A15.12 15.12 0 0 0 170.293 3935A15.12 15.12 0 0 0 185.413 3950.12Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="237.455" y="3935" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%xE000-10FFFF</text>
<path d="M158.773,3935L158.773,3935" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,3890.59 L 137.513,3890.59 Q 144.6,3890.59 144.6,3905.59 L 144.6,3920 Q 144.6,3935 151.686,3935 L 158.773,3935" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M266.831,3890.59L347.136,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M304.616,3935 L 318.789,3935 Q 332.963,3935 332.963,3920 L 332.963,3905.59 Q 332.963,3890.59 340.049,3890.59 L 347.136,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="375.482" cy="3890.59" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,3890.59L130.427,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="371.882,3890.59 360.362,3894.91 360.362,3886.27" style="fill:rgb(0,0,0)"></polygon>
<path d="M347.136,3890.59L366.122,3890.59" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="3860.35" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">non-ascii&nbsp;=</text>
<text x="110.736" y="4021.93" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4021.93" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4021.93" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="175.992" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="175.992" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="204.338" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="204.338" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="232.685" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="232.685" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="235.853,4051.22 224.333,4055.54 224.333,4046.9" style="fill:rgb(0,0,0)"></polygon>
<path d="M224.333,4051.22L230.093,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M235.853,4066.34L269.261,4066.34L269.261,4036.1L235.853,4036.1Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="252.557" y="4051.22" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">SP</text>
<path d="M224.333,4051.22L224.333,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.986,4051.22L224.333,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="232.685" y="4095.64" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="232.685" y="4095.64" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="235.853,4095.64 224.333,4099.96 224.333,4091.32" style="fill:rgb(0,0,0)"></polygon>
<path d="M224.333,4095.64L230.093,4095.64" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M235.853,4110.76L296.794,4110.76L296.794,4080.52L235.853,4080.52Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="266.323" y="4095.64" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HTAB</text>
<path d="M224.333,4095.64L224.333,4095.64" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.986,4051.22 L 203.073,4051.22 Q 210.159,4051.22 210.159,4066.22 L 210.159,4080.64 Q 210.159,4095.64 217.246,4095.64 L 224.333,4095.64" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M269.261,4051.22L339.313,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M296.794,4095.64 L 310.967,4095.64 Q 325.14,4095.64 325.14,4080.64 L 325.14,4066.22 Q 325.14,4051.22 332.227,4051.22 L 339.313,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.986,4051.22L195.986,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M167.64,4051.22L195.986,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="204.338" y="4140.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="204.338" y="4140.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="227.378" y="4169.34" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="230.546,4169.34 219.026,4173.66 219.026,4165.02" style="fill:rgb(0,0,0)"></polygon>
<path d="M219.026,4169.34L224.786,4169.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M230.546,4184.46L319.365,4184.46L319.365,4154.22L230.546,4154.22Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="274.956" y="4169.34" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">comment</text>
<path d="M195.986,4140.05L342.405,4140.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M195.986,4140.05 L 201.746,4140.05 Q 207.506,4140.05 207.506,4154.7 Q 207.506,4169.34 213.266,4169.34 L 219.026,4169.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M319.365,4169.34 L 325.125,4169.34 Q 330.885,4169.34 330.885,4154.7 Q 330.885,4140.05 336.645,4140.05 L 342.405,4140.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="364.931" y="4140.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="368.099,4140.05 356.579,4144.37 356.579,4135.73" style="fill:rgb(0,0,0)"></polygon>
<path d="M356.579,4140.05L362.339,4140.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M368.099,4155.17L445.283,4155.17L445.283,4124.93L368.099,4124.93Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="406.691" y="4140.05" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">newline</text>
<path d="M195.986,4140.05L195.986,4140.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M342.405,4140.05L356.579,4140.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M167.64,4051.22 L 174.726,4051.22 Q 181.813,4051.22 181.813,4066.22 L 181.813,4125.05 Q 181.813,4140.05 188.9,4140.05 L 195.986,4140.05" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M339.313,4051.22L487.802,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M445.283,4140.05 L 459.456,4140.05 Q 473.629,4140.05 473.629,4125.05 L 473.629,4066.22 Q 473.629,4051.22 480.716,4051.22 L 487.802,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M167.64,4051.22L167.64,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M487.802,4051.22L487.802,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M487.802,4051.22 L 494.889,4051.22 Q 501.976,4051.22 501.976,4066.22 L 501.976,4183.64 Q 501.976,4198.64 486.976,4198.64 L 168.467,4198.64 Q 153.467,4198.64 153.467,4183.64 L 153.467,4066.22 Q 153.467,4051.22 160.553,4051.22 L 167.64,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4021.93L525.016,4021.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4021.93 L 136.187,4021.93 Q 141.947,4021.93 141.947,4036.58 Q 141.947,4051.22 154.793,4051.22 L 167.64,4051.22" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M487.802,4051.22 L 500.649,4051.22 Q 513.496,4051.22 513.496,4036.58 Q 513.496,4021.93 519.256,4021.93 L 525.016,4021.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="553.362" cy="4021.93" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4021.93L130.427,4021.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="549.762,4021.93 538.242,4026.25 538.242,4017.61" style="fill:rgb(0,0,0)"></polygon>
<path d="M525.016,4021.93L544.002,4021.93" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="3991.69" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">ws-comment-newline&nbsp;=</text>
<text x="110.736" y="4270.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4270.45" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4270.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="4270.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="4270.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,4270.45 158.773,4274.77 158.773,4266.13" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,4270.45L164.533,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,4285.57L204.047,4285.57L204.047,4255.33L170.293,4255.33Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="187.17" y="4270.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LF</text>
<path d="M158.773,4270.45L158.773,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4270.45L158.773,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="4314.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="4314.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,4314.86 158.773,4319.18 158.773,4310.54" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,4314.86L164.533,4314.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,4329.98L206.811,4329.98L206.811,4299.74L170.293,4299.74Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="188.552" y="4314.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CR</text>
<text x="229.337" y="4314.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="232.505,4314.86 220.985,4319.18 220.985,4310.54" style="fill:rgb(0,0,0)"></polygon>
<path d="M220.985,4314.86L226.745,4314.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M232.505,4329.98L266.258,4329.98L266.258,4299.74L232.505,4299.74Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="249.381" y="4314.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LF</text>
<path d="M158.773,4314.86L158.773,4314.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M206.811,4314.86L220.985,4314.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4270.45 L 137.513,4270.45 Q 144.6,4270.45 144.6,4285.45 L 144.6,4299.86 Q 144.6,4314.86 151.686,4314.86 L 158.773,4314.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M204.047,4270.45L308.778,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M266.258,4314.86 L 280.431,4314.86 Q 294.605,4314.86 294.605,4299.86 L 294.605,4285.45 Q 294.605,4270.45 301.691,4270.45 L 308.778,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="337.124" cy="4270.45" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4270.45L130.427,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="333.524,4270.45 322.004,4274.77 322.004,4266.13" style="fill:rgb(0,0,0)"></polygon>
<path d="M308.778,4270.45L327.764,4270.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4240.21" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">newline&nbsp;=</text>
<text x="110.736" y="4401.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4401.8" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4401.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="175.992" y="4431.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="175.992" y="4431.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="204.338" y="4431.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="204.338" y="4431.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="207.506,4431.09 195.986,4435.41 195.986,4426.77" style="fill:rgb(0,0,0)"></polygon>
<path d="M195.986,4431.09L201.746,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M207.506,4446.21L240.914,4446.21L240.914,4415.97L207.506,4415.97Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="224.21" y="4431.09" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">SP</text>
<path d="M195.986,4431.09L195.986,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M167.64,4431.09L195.986,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="204.338" y="4475.5" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="204.338" y="4475.5" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="207.506,4475.5 195.986,4479.82 195.986,4471.18" style="fill:rgb(0,0,0)"></polygon>
<path d="M195.986,4475.5L201.746,4475.5" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M207.506,4490.62L268.447,4490.62L268.447,4460.38L207.506,4460.38Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="237.977" y="4475.5" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HTAB</text>
<path d="M195.986,4475.5L195.986,4475.5" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M167.64,4431.09 L 174.726,4431.09 Q 181.813,4431.09 181.813,4446.09 L 181.813,4460.5 Q 181.813,4475.5 188.9,4475.5 L 195.986,4475.5" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M240.914,4431.09L310.967,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M268.447,4475.5 L 282.62,4475.5 Q 296.794,4475.5 296.794,4460.5 L 296.794,4446.09 Q 296.794,4431.09 303.88,4431.09 L 310.967,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M167.64,4431.09L167.64,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M310.967,4431.09L310.967,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M310.967,4431.09 L 318.053,4431.09 Q 325.14,4431.09 325.14,4446.09 L 325.14,4489.8 Q 325.14,4504.8 310.14,4504.8 L 168.467,4504.8 Q 153.467,4504.8 153.467,4489.8 L 153.467,4446.09 Q 153.467,4431.09 160.553,4431.09 L 167.64,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4401.8L348.18,4401.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4401.8 L 136.187,4401.8 Q 141.947,4401.8 141.947,4416.44 Q 141.947,4431.09 154.793,4431.09 L 167.64,4431.09" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M310.967,4431.09 L 323.813,4431.09 Q 336.66,4431.09 336.66,4416.44 Q 336.66,4401.8 342.42,4401.8 L 348.18,4401.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="376.526" cy="4401.8" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4401.8L130.427,4401.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="372.926,4401.8 361.406,4406.12 361.406,4397.48" style="fill:rgb(0,0,0)"></polygon>
<path d="M348.18,4401.8L367.166,4401.8" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4371.56" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">ws&nbsp;=</text>
<text x="110.736" y="4576.61" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4576.61" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4576.61" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,4576.61 130.427,4580.93 130.427,4572.29" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,4576.61L136.187,4576.61" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,4591.73L176.132,4591.73A15.12 15.12 0 0 0 191.252 4576.61A15.12 15.12 0 0 0 176.132 4561.49L157.067,4561.49A15.12 15.12 0 0 0 141.947 4576.61A15.12 15.12 0 0 0 157.067 4591.73Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="166.599" y="4576.61" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x20</text>
<circle cx="219.599" cy="4576.61" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4576.61L130.427,4576.61" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="215.999,4576.61 204.479,4580.93 204.479,4572.29" style="fill:rgb(0,0,0)"></polygon>
<path d="M191.252,4576.61L210.239,4576.61" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4546.37" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">SP&nbsp;=</text>
<text x="110.736" y="4663.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4663.54" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4663.54" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,4663.54 130.427,4667.86 130.427,4659.22" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,4663.54L136.187,4663.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,4678.66L176.132,4678.66A15.12 15.12 0 0 0 191.252 4663.54A15.12 15.12 0 0 0 176.132 4648.42L157.067,4648.42A15.12 15.12 0 0 0 141.947 4663.54A15.12 15.12 0 0 0 157.067 4678.66Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="166.599" y="4663.54" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x09</text>
<circle cx="219.599" cy="4663.54" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4663.54L130.427,4663.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="215.999,4663.54 204.479,4667.86 204.479,4659.22" style="fill:rgb(0,0,0)"></polygon>
<path d="M191.252,4663.54L210.239,4663.54" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4633.3" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">HTAB&nbsp;=</text>
<text x="110.736" y="4750.47" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4750.47" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4750.47" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,4750.47 130.427,4754.79 130.427,4746.15" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,4750.47L136.187,4750.47" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,4765.59L176.132,4765.59A15.12 15.12 0 0 0 191.252 4750.47A15.12 15.12 0 0 0 176.132 4735.35L157.067,4735.35A15.12 15.12 0 0 0 141.947 4750.47A15.12 15.12 0 0 0 157.067 4765.59Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="166.599" y="4750.47" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x0D</text>
<circle cx="219.599" cy="4750.47" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4750.47L130.427,4750.47" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="215.999,4750.47 204.479,4754.79 204.479,4746.15" style="fill:rgb(0,0,0)"></polygon>
<path d="M191.252,4750.47L210.239,4750.47" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4720.23" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">CR&nbsp;=</text>
<text x="110.736" y="4837.41" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4837.41" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4837.41" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,4837.41 130.427,4841.73 130.427,4833.09" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,4837.41L136.187,4837.41" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,4852.53L176.132,4852.53A15.12 15.12 0 0 0 191.252 4837.41A15.12 15.12 0 0 0 176.132 4822.29L157.067,4822.29A15.12 15.12 0 0 0 141.947 4837.41A15.12 15.12 0 0 0 157.067 4852.53Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="166.599" y="4837.41" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x0A</text>
<circle cx="219.599" cy="4837.41" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4837.41L130.427,4837.41" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="215.999,4837.41 204.479,4841.73 204.479,4833.09" style="fill:rgb(0,0,0)"></polygon>
<path d="M191.252,4837.41L210.239,4837.41" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4807.17" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">LF&nbsp;=</text>
<text x="110.736" y="4924.34" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="4924.34" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="4924.34" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="4924.34" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="4924.34" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,4924.34 158.773,4928.66 158.773,4920.02" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,4924.34L164.533,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,4939.46L232.818,4939.46A15.12 15.12 0 0 0 247.938 4924.34A15.12 15.12 0 0 0 232.818 4909.22L185.413,4909.22A15.12 15.12 0 0 0 170.293 4924.34A15.12 15.12 0 0 0 185.413 4939.46Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="4924.34" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x41-5A</text>
<path d="M158.773,4924.34L158.773,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4924.34L158.773,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="4968.75" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="4968.75" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,4968.75 158.773,4973.07 158.773,4964.43" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,4968.75L164.533,4968.75" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,4983.87L232.818,4983.87A15.12 15.12 0 0 0 247.938 4968.75A15.12 15.12 0 0 0 232.818 4953.63L185.413,4953.63A15.12 15.12 0 0 0 170.293 4968.75A15.12 15.12 0 0 0 185.413 4983.87Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="209.115" y="4968.75" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x61-7A</text>
<path d="M158.773,4968.75L158.773,4968.75" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,4924.34 L 137.513,4924.34 Q 144.6,4924.34 144.6,4939.34 L 144.6,4953.75 Q 144.6,4968.75 151.686,4968.75 L 158.773,4968.75" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,4924.34L290.458,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M247.938,4968.75 L 262.111,4968.75 Q 276.284,4968.75 276.284,4953.75 L 276.284,4939.34 Q 276.284,4924.34 283.371,4924.34 L 290.458,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="318.804" cy="4924.34" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,4924.34L130.427,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="315.204,4924.34 303.684,4928.66 303.684,4920.02" style="fill:rgb(0,0,0)"></polygon>
<path d="M290.458,4924.34L309.444,4924.34" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="4894.1" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">ALPHA&nbsp;=</text>
<text x="110.736" y="5055.69" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="5055.69" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="5055.69" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="141.947,5055.69 130.427,5060.01 130.427,5051.37" style="fill:rgb(0,0,0)"></polygon>
<path d="M130.427,5055.69L136.187,5055.69" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M157.067,5070.81L204.471,5070.81A15.12 15.12 0 0 0 219.591 5055.69A15.12 15.12 0 0 0 204.471 5040.57L157.067,5040.57A15.12 15.12 0 0 0 141.947 5055.69A15.12 15.12 0 0 0 157.067 5070.81Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="180.769" y="5055.69" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">%x30-39</text>
<circle cx="247.938" cy="5055.69" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,5055.69L130.427,5055.69" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="244.338,5055.69 232.818,5060.01 232.818,5051.37" style="fill:rgb(0,0,0)"></polygon>
<path d="M219.591,5055.69L238.578,5055.69" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="5025.45" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT&nbsp;=</text>
<text x="110.736" y="5142.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<circle cx="110.736" cy="5142.62" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="138.779" y="5142.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5142.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5142.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5142.62 158.773,5146.94 158.773,5138.3" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5142.62L164.533,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M170.293,5157.74L231.695,5157.74L231.695,5127.5L170.293,5127.5Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="200.994" y="5142.62" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DIGIT</text>
<path d="M158.773,5142.62L158.773,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62L158.773,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="5187.03" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5187.03" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5187.03 158.773,5191.35 158.773,5182.71" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5187.03L164.533,5187.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,5202.15L195.032,5202.15A15.12 15.12 0 0 0 210.152 5187.03A15.12 15.12 0 0 0 195.032 5171.91L185.413,5171.91A15.12 15.12 0 0 0 170.293 5187.03A15.12 15.12 0 0 0 185.413 5202.15Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="5187.03" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"A"</text>
<path d="M158.773,5187.03L158.773,5187.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62 L 137.513,5142.62 Q 144.6,5142.62 144.6,5157.62 L 144.6,5172.03 Q 144.6,5187.03 151.686,5187.03 L 158.773,5187.03" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="5231.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5231.45" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5231.45 158.773,5235.77 158.773,5227.13" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5231.45L164.533,5231.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,5246.57L195.032,5246.57A15.12 15.12 0 0 0 210.152 5231.45A15.12 15.12 0 0 0 195.032 5216.33L185.413,5216.33A15.12 15.12 0 0 0 170.293 5231.45A15.12 15.12 0 0 0 185.413 5246.57Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="5231.45" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"B"</text>
<path d="M158.773,5231.45L158.773,5231.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62 L 137.513,5142.62 Q 144.6,5142.62 144.6,5157.62 L 144.6,5216.45 Q 144.6,5231.45 151.686,5231.45 L 158.773,5231.45" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="5275.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5275.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5275.86 158.773,5280.18 158.773,5271.54" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5275.86L164.533,5275.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,5290.98L195.032,5290.98A15.12 15.12 0 0 0 210.152 5275.86A15.12 15.12 0 0 0 195.032 5260.74L185.413,5260.74A15.12 15.12 0 0 0 170.293 5275.86A15.12 15.12 0 0 0 185.413 5290.98Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="5275.86" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"C"</text>
<path d="M158.773,5275.86L158.773,5275.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62 L 137.513,5142.62 Q 144.6,5142.62 144.6,5157.62 L 144.6,5260.86 Q 144.6,5275.86 151.686,5275.86 L 158.773,5275.86" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="5320.27" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5320.27" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5320.27 158.773,5324.59 158.773,5315.95" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5320.27L164.533,5320.27" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,5335.39L195.032,5335.39A15.12 15.12 0 0 0 210.152 5320.27A15.12 15.12 0 0 0 195.032 5305.15L185.413,5305.15A15.12 15.12 0 0 0 170.293 5320.27A15.12 15.12 0 0 0 185.413 5335.39Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="5320.27" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"D"</text>
<path d="M158.773,5320.27L158.773,5320.27" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62 L 137.513,5142.62 Q 144.6,5142.62 144.6,5157.62 L 144.6,5305.27 Q 144.6,5320.27 151.686,5320.27 L 158.773,5320.27" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="5364.69" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5364.69" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5364.69 158.773,5369.01 158.773,5360.37" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5364.69L164.533,5364.69" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,5379.81L195.032,5379.81A15.12 15.12 0 0 0 210.152 5364.69A15.12 15.12 0 0 0 195.032 5349.57L185.413,5349.57A15.12 15.12 0 0 0 170.293 5364.69A15.12 15.12 0 0 0 185.413 5379.81Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="5364.69" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"E"</text>
<path d="M158.773,5364.69L158.773,5364.69" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62 L 137.513,5142.62 Q 144.6,5142.62 144.6,5157.62 L 144.6,5349.69 Q 144.6,5364.69 151.686,5364.69 L 158.773,5364.69" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="167.125" y="5409.1" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<text x="167.125" y="5409.1" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;</text>
<polygon points="170.293,5409.1 158.773,5413.42 158.773,5404.78" style="fill:rgb(0,0,0)"></polygon>
<path d="M158.773,5409.1L164.533,5409.1" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M185.413,5424.22L195.032,5424.22A15.12 15.12 0 0 0 210.152 5409.1A15.12 15.12 0 0 0 195.032 5393.98L185.413,5393.98A15.12 15.12 0 0 0 170.293 5409.1A15.12 15.12 0 0 0 185.413 5424.22Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="190.223" y="5409.1" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">"F"</text>
<path d="M158.773,5409.1L158.773,5409.1" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M130.427,5142.62 L 137.513,5142.62 Q 144.6,5142.62 144.6,5157.62 L 144.6,5394.1 Q 144.6,5409.1 151.686,5409.1 L 158.773,5409.1" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M231.695,5142.62L274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,5187.03 L 245.041,5187.03 Q 260.041,5187.03 260.041,5172.03 L 260.041,5157.62 Q 260.041,5142.62 267.128,5142.62 L 274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,5231.45 L 245.041,5231.45 Q 260.041,5231.45 260.041,5216.45 L 260.041,5157.62 Q 260.041,5142.62 267.128,5142.62 L 274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,5275.86 L 245.041,5275.86 Q 260.041,5275.86 260.041,5260.86 L 260.041,5157.62 Q 260.041,5142.62 267.128,5142.62 L 274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,5320.27 L 245.041,5320.27 Q 260.041,5320.27 260.041,5305.27 L 260.041,5157.62 Q 260.041,5142.62 267.128,5142.62 L 274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,5364.69 L 245.041,5364.69 Q 260.041,5364.69 260.041,5349.69 L 260.041,5157.62 Q 260.041,5142.62 267.128,5142.62 L 274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M210.152,5409.1 L 245.041,5409.1 Q 260.041,5409.1 260.041,5394.1 L 260.041,5157.62 Q 260.041,5142.62 267.128,5142.62 L 274.214,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="302.561" cy="5142.62" r="3.6" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M114.336,5142.62L130.427,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="298.961,5142.62 287.441,5146.94 287.441,5138.3" style="fill:rgb(0,0,0)"></polygon>
<path d="M274.214,5142.62L293.201,5142.62" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="102.384" y="5112.38" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">HEXDIG&nbsp;=</text>
</svg>

