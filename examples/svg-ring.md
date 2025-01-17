---
title: SVG Ring
date: 2021-10-27
tags: [animation, official, ring, svg]
level: beginner
version: 2.0.4
author: mithril
layout: layouts/example.html
---

This example was taken from the official website at <https://mithril.js.org/examples.html> and slightly modified.
It shows an SVG with multiple paths animating with css using delay and stroke offset.
The example was originally written by <https://codepen.io/RobinVr/pen/kEoqc>.

## HTML

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SVG Ring</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
~~~

## CSS

~~~css
#root {
  margin:auto;
  max-width:600px;
  width:100%;
}
~~~

## JS

~~~js
// https://codepen.io/RobinVr/pen/kEoqc
var ring = m(".top",
	m(".middle",
		m("svg[preserveAspectRatio='xMidYMid meet'][version='1.1'][viewBox='0 0 584 586'][xmlns='http://www.w3.org/2000/svg'][xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'][xmlns:xlink='http://www.w3.org/1999/xlink']", [
			m("title", "Group 2"),
			m("desc", "Created with Sketch."),
			m("defs"),
			m("g[fill='none'][fill-rule='evenodd'][id='Page-1'][sketch:type='MSPage'][stroke='none'][stroke-width='1.5']",
				m("g[id='Group-2'][opacity='0.9'][sketch:type='MSLayerGroup'][stroke='#FFFFFF'][transform='translate(1.000000, 1.000000)']", [
					m("path[d='M359.085786,10.8707797 L359.085786,85.5688806 L397.873564,24.7820036 L359.085786,10.8707797 Z'][id='Path-1'][sketch:type='MSShapeGroup']"),
					m("path[d='M388.952155,53.4828426 L440.476682,45.4269494 L406.424622,25.6072146 L388.952155,53.4828426 Z'][id='Path-2'][sketch:type='MSShapeGroup']"),
					m("path[d='M388.359961,57.7776075 L368.989907,82.6788083 L406.789472,83.3114701 L388.359961,57.7776075 Z'][id='Path-3'][sketch:type='MSShapeGroup']"),
					m("path[d='M397.616885,56.7268388 L451.257176,64.3132787 L455.930557,98.2459556 L397.616885,56.7268388 Z'][id='Path-4'][sketch:type='MSShapeGroup']"),
					m("path[d='M488.965071,83.1721011 L437.559715,121.57192 L511.838785,106.850156 L488.965071,83.1721011 Z'][id='Path-5'][sketch:type='MSShapeGroup']"),
					m("path[d='M450.521976,51.4033109 L457.208449,60.3559335 L427.849937,55.9511405 L450.521976,51.4033109 Z'][id='Path-6'][sketch:type='MSShapeGroup']"),
					m("path[d='M382.348185,90.1570539 L429.118662,90.6870227 L426.672883,114.871207 L382.348185,90.1570539 Z'][id='Path-7'][sketch:type='MSShapeGroup']"),
					m("path[d='M433.645369,92.5538334 L431.362765,117.962997 L452.260055,102.302326 L433.645369,92.5538334 Z'][id='Path-8'][sketch:type='MSShapeGroup']"),
					m("path[d='M455.77105,64.9587771 L485.683254,79.0918911 L463.704246,95.5300945 L455.77105,64.9587771 Z'][id='Path-9'][sketch:type='MSShapeGroup']"),
					m("path[d='M490.266797,117.367012 L489.124578,158.11043 L516.200485,140.003467 L490.266797,117.367012 Z'][id='Path-10'][sketch:type='MSShapeGroup']"),
					m("path[d='M496.870766,115.349829 L522.397436,136.843825 L519.012947,111.740906 L496.870766,115.349829 Z'][id='Path-11'][sketch:type='MSShapeGroup']"),
					m("path[d='M526.126607,123.176497 L527.103818,156.84694 L544.759627,151.156652 L526.126607,123.176497 Z'][id='Path-12'][sketch:type='MSShapeGroup']"),
					m("path[d='M521.416557,144.028663 L521.416557,177.381858 L487.307661,167.560013 L521.416557,144.028663 Z'][id='Path-13'][sketch:type='MSShapeGroup']"),
					m("path[d='M443.714497,125.58428 L483.86267,118.551648 L480.863199,170.38957 L443.714497,125.58428 Z'][id='Path-14'][sketch:type='MSShapeGroup']"),
					m("path[d='M529.650435,187.383415 L556.053478,213.77183 L550.038036,167.539841 L529.650435,187.383415 Z'][id='Path-15'][sketch:type='MSShapeGroup']"),
					m("path[d='M527.650176,161.933908 L528.915234,181.672955 L544.942969,165.256757 L527.650176,161.933908 Z'][id='Path-16'][sketch:type='MSShapeGroup']"),
					m("path[d='M546.184192,155.304713 L535.460534,158.689912 L547.672927,160.974829 L546.184192,155.304713 Z'][id='Path-17'][sketch:type='MSShapeGroup']"),
					m("path[d='M483.609659,175.593901 L520.470514,181.610606 L510.051203,231.959481 L483.609659,175.593901 Z'][id='Path-18'][sketch:type='MSShapeGroup']"),
					m("path[d='M524.098847,189.440942 L550.50189,216.808606 L518.899275,231.7761 L524.098847,189.440942 Z'][id='Path-19'][sketch:type='MSShapeGroup']"),
					m("path[d='M558.370917,180.121558 L560.490348,238.647357 L578.333165,238.341112 L558.370917,180.121558 Z'][id='Path-20'][sketch:type='MSShapeGroup']"),
					m("path[d='M552.645155,221.332596 L514.3359,263.198302 L554.623412,289.280471 L552.645155,221.332596 Z'][id='Path-21'][sketch:type='MSShapeGroup']"),
					m("path[d='M511.747114,236.608169 L535.825384,231.897131 L511.869953,254.878341 L511.747114,236.608169 Z'][id='Path-22'][sketch:type='MSShapeGroup']"),
					m("path[d='M558.394752,242.744072 L574.990846,280.654265 L577.599798,245.94589 L558.394752,242.744072 Z'][id='Path-23'][sketch:type='MSShapeGroup']"),
					m("path[d='M560.677356,260.465936 L575.990058,299.27286 L558.864107,303.167856 L560.677356,260.465936 Z'][id='Path-24'][sketch:type='MSShapeGroup']"),
					m("path[d='M581.717654,281.653688 L575.293359,286.48759 L581.492143,293.808129 L581.717654,281.653688 Z'][id='Path-25'][sketch:type='MSShapeGroup']"),
					m("path[d='M512.355809,269.031627 L510.724068,303.596965 L525.873595,298.37613 L512.355809,269.031627 Z'][id='Path-26'][sketch:type='MSShapeGroup']"),
					m("path[d='M525.730588,280.491057 L551.277426,294.317926 L534.477823,327.883842 L525.730588,280.491057 Z'][id='Path-27'][sketch:type='MSShapeGroup']"),
					m("path[d='M548.09828,311.407129 L581.332636,303.740002 L577.41829,330.271453 L548.09828,311.407129 Z'][id='Path-28'][sketch:type='MSShapeGroup']"),
					m("path[d='M512.726159,307.453452 L506.221195,350.971413 L538.964195,348.033662 L512.726159,307.453452 Z'][id='Path-29'][sketch:type='MSShapeGroup']"),
					m("path[d='M520.633688,309.813555 L528.280872,320.704507 L525.506912,305.715007 L520.633688,309.813555 Z'][id='Path-30'][sketch:type='MSShapeGroup']"),
					m("path[d='M548.485131,318.641479 L576.419078,338.485053 L562.574943,354.615178 L548.485131,318.641479 Z'][id='Path-31'][sketch:type='MSShapeGroup']"),
					m("path[d='M545.162979,323.130627 L555.58229,362.407004 L541.248633,359.958878 L545.162979,323.130627 Z'][id='Path-32'][sketch:type='MSShapeGroup']"),
					m("path[d='M572.787078,353.597418 L539.228207,380.006004 L561.084375,393.381757 L572.787078,353.597418 Z'][id='Path-33'][sketch:type='MSShapeGroup']"),
					m("path[d='M504.44278,356.43431 L537.310452,353.986184 L514.313899,398.340359 L504.44278,356.43431 Z'][id='Path-34'][sketch:type='MSShapeGroup']"),
					m("path[d='M499.531055,371.605356 L508.828314,401.74573 L490.090789,411.677602 L499.531055,371.605356 Z'][id='Path-35'][sketch:type='MSShapeGroup']"),
					m("path[d='M541.122127,365.465786 L533.476777,375.887284 L547.606924,367.770875 L541.122127,365.465786 Z'][id='Path-36'][sketch:type='MSShapeGroup']"),
					m("path[d='M534.314648,383.860656 L560.351008,399.827572 L503.630576,420.037907 L534.314648,383.860656 Z'][id='Path-37'][sketch:type='MSShapeGroup']"),
					m("path[d='M473.107844,421.963399 L500.653106,413.173985 L488.094197,445.109651 L473.107844,421.963399 Z'][id='Path-38'][sketch:type='MSShapeGroup']"),
					m("path[d='M504.402445,427.393288 L547.135736,412.059033 L531.152004,445.99171 L504.402445,427.393288 Z'][id='Path-39'][sketch:type='MSShapeGroup']"),
					m("path[d='M503.79375,433.551196 L510.317049,461.204934 L484.58687,461.53135 L503.79375,433.551196 Z'][id='Path-40'][sketch:type='MSShapeGroup']"),
					m("path[d='M512.311807,439.426698 L533.722455,453.374598 L518.798437,472.339781 L512.311807,439.426698 Z'][id='Path-41'][sketch:type='MSShapeGroup']"),
					m("path[d='M470.399887,430.734475 L482.636114,451.170368 L444.87505,456.719453 L470.399887,430.734475 Z'][id='Path-42'][sketch:type='MSShapeGroup']"),
					m("path[d='M505.304486,486.940514 L468.856149,517.810742 L445.81376,469.035269 L505.304486,486.940514 Z'][id='Path-43'][sketch:type='MSShapeGroup']"),
					m("path[d='M511.959791,466.178205 L474.814756,466.178205 L504.090764,477.272709 L511.959791,466.178205 Z'][id='Path-44'][sketch:type='MSShapeGroup']"),
					m("path[d='M438.076739,463.687902 L413.325605,482.286324 L446.847807,487.508993 L438.076739,463.687902 Z'][id='Path-45'][sketch:type='MSShapeGroup']"),
					m("path[d='M446.924811,493.707245 L430.941079,509.613645 L456.018561,516.424387 L446.924811,493.707245 Z'][id='Path-46'][sketch:type='MSShapeGroup']"),
					m("path[d='M442.359602,461.237942 L473.634035,458.303859 L469.512513,468.910571 L442.359602,461.237942 Z'][id='Path-47'][sketch:type='MSShapeGroup']"),
					m("path[d='M413.281603,487.094554 L441.292553,492.313555 L411.935874,523.271805 L413.281603,487.094554 Z'][id='Path-48'][sketch:type='MSShapeGroup']"),
					m("path[d='M380.008745,498.148714 L408.712727,484.890324 L405.126563,517.47699 L380.008745,498.148714 Z'][id='Path-49'][sketch:type='MSShapeGroup']"),
					m("path[d='M350.20838,529.06662 L384.207271,566.226789 L300.046081,518.955034 L350.20838,529.06662 Z'][id='Path-50'][sketch:type='MSShapeGroup']"),
					m("path[d='M376.459249,506.543861 L391.955292,561.125151 L421.234967,549.132084 L376.459249,506.543861 Z'][id='Path-51'][sketch:type='MSShapeGroup']"),
					m("path[d='M432.286807,514.788635 L412.141217,532.000703 L434.285232,544.034114 L432.286807,514.788635 Z'][id='Path-52'][sketch:type='MSShapeGroup']"),
					m("path[d='M439.176789,517.359626 L440.562853,537.832195 L461.969834,523.884295 L439.176789,517.359626 Z'][id='Path-53'][sketch:type='MSShapeGroup']"),
					m("path[d='M352.47815,556.911073 L334.616998,578.571945 L371.60436,569.51663 L352.47815,556.911073 Z'][id='Path-54'][sketch:type='MSShapeGroup']"),
					m("path[d='M309.04816,535.048483 L343.710748,555.117615 L318.592931,581.506029 L309.04816,535.048483 Z'][id='Path-55'][sketch:type='MSShapeGroup']"),
					m("path[d='M266.806225,519.926949 C266.806225,523.803607 302.363521,584.084355 302.363521,584.084355 L268.80465,582.701668 C268.80465,582.701668 266.806225,516.050291 266.806225,519.926949 Z'][id='Path-56'][sketch:type='MSShapeGroup']"),
					m("path[d='M279.449471,524.08968 L305.505998,573.279592 L299.305381,527.680265 L279.449471,524.08968 Z'][id='Path-57'][sketch:type='MSShapeGroup']"),
					m("path[d='M221.418145,506.672227 L175.256363,554.721513 L243.679498,517.484325 L221.418145,506.672227 Z'][id='Path-58'][sketch:type='MSShapeGroup']"),
					m("path[d='M224.593624,536.775924 L235.315449,559.493067 L186.792225,559.493067 L224.593624,536.775924 Z'][id='Path-59'][sketch:type='MSShapeGroup']"),
					m("path[d='M233.526033,535.75633 L256.971774,516.259345 L261.173967,580.743167 L233.526033,535.75633 Z'][id='Path-60'][sketch:type='MSShapeGroup']"),
					m("path[d='M198.375756,565.368569 L244.577873,567.246383 L256.645426,580.622136 L198.375756,565.368569 Z'][id='Path-61'][sketch:type='MSShapeGroup']"),
					m("path[d='M320.617024,-0.282405547 L329.058077,35.8545016 L350.468725,6.32295016 L320.617024,-0.282405547 Z'][id='Path-62'][sketch:type='MSShapeGroup']"),
					m("path[d='M349.082661,22.7978296 L330.609148,50.1251507 L353.039176,61.8321443 L349.082661,22.7978296 Z'][id='Path-63'][sketch:type='MSShapeGroup']"),
					m("path[d='M316.917187,46.7802954 L351.128755,76.3925342 L298.076991,67.9497086 L316.917187,46.7802954 Z'][id='Path-64'][sketch:type='MSShapeGroup']"),
					m("path[d='M284.128352,24.6352994 L309.205834,43.519795 L287.391835,64.8139068 L284.128352,24.6352994 Z'][id='Path-65'][sketch:type='MSShapeGroup']"),
					m("path[d='M290.325302,19.21458 L319.032951,37.3655547 L311.937626,0.0843549035 L290.325302,19.21458 Z'][id='Path-66'][sketch:type='MSShapeGroup']"),
					m("path[d='M239.257296,6.33028537 L209.519267,37.7249799 L248.065033,50.6239449 L239.257296,6.33028537 Z'][id='Path-67'][sketch:type='MSShapeGroup']"),
					m("path[d='M252.600907,7.10414992 L261.082296,66.8127512 L281.83658,7.87434686 L252.600907,7.10414992 Z'][id='Path-68'][sketch:type='MSShapeGroup']"),
					m("path[d='M278.004738,49.3916298 L268.258291,67.909365 L278.943448,67.909365 L278.004738,49.3916298 Z'][id='Path-69'][sketch:type='MSShapeGroup']"),
					m("path[d='M220.783783,11.703326 L169.807447,30.2210611 L188.933657,50.697297 L220.783783,11.703326 Z'][id='Path-70'][sketch:type='MSShapeGroup']"),
					m("path[d='M221.264138,49.6300241 L253.150932,60.1927251 L243.85184,74.4266982 L221.264138,49.6300241 Z'][id='Path-72'][sketch:type='MSShapeGroup']"),
					m("path[d='M159.807989,39.2250301 L112.223475,66.5523513 L148.965159,78.5417504 L159.807989,39.2250301 Z'][id='Path-73'][sketch:type='MSShapeGroup']"),
					m("path[d='M167.559677,44.7704482 L144.377949,110.559938 L183.257397,65.3273714 L167.559677,44.7704482 Z'][id='Path-74'][sketch:type='MSShapeGroup']"),
					m("path[d='M180.279927,83.5590334 L150.637235,110.923031 L176.000731,102.846965 L180.279927,83.5590334 Z'][id='Path-75'][sketch:type='MSShapeGroup']"),
					m("path[d='M110.140713,77.1920719 L140.395766,87.5530547 L130.608984,113.288635 L110.140713,77.1920719 Z'][id='Path-76'][sketch:type='MSShapeGroup']"),
					m("path[d='M103.434073,72.7432677 L78.3565902,96.7697448 L110.5734,105.21257 L103.434073,72.7432677 Z'][id='Path-77'][sketch:type='MSShapeGroup']"),
					m("path[d='M115.259614,98.1524317 L116.484337,142.446091 L134.305154,126.499347 L115.259614,98.1524317 Z'][id='Path-78'][sketch:type='MSShapeGroup']"),
					m("path[d='M70.8945817,107.123392 L109.268007,112.30205 L92.422568,149.623593 L70.8945817,107.123392 Z'][id='Path-79'][sketch:type='MSShapeGroup']"),
					m("path[d='M107.064239,130.207295 L89.8227823,180.270096 L111.629448,155.044313 L107.064239,130.207295 Z'][id='Path-80'][sketch:type='MSShapeGroup']"),
					m("path[d='M59.0727067,116.204381 L79.137626,141.496182 L55.6478831,161.029843 L59.0727067,116.204381 Z'][id='Path-81'][sketch:type='MSShapeGroup']"),
					m("path[d='M42.1942666,180.270096 L55.981565,222.792303 L87.3770035,158.961314 L42.1942666,180.270096 Z'][id='Path-82'][sketch:type='MSShapeGroup']"),
					m("path[d='M205.093397,47.7008641 L189.839365,89.7499498 L229.111164,75.3949457 L205.093397,47.7008641 Z'][id='Path-83'][sketch:type='MSShapeGroup']"),
					m("path[d='M44.6730469,146.5208 L27.0979083,173.275975 L49.8909526,167.730557 L44.6730469,146.5208 Z'][id='Path-83'][sketch:type='MSShapeGroup']"),
					m("path[d='M15.9965663,197.680215 L34.8862651,177.886154 L49.5242692,246.242966 L15.9965663,197.680215 Z'][id='Path-84'][sketch:type='MSShapeGroup']"),
					m("path[d='M85.0412298,188.573553 L55.9925655,237.484727 L69.8678679,249.059686 L85.0412298,188.573553 Z'][id='Path-85'][sketch:type='MSShapeGroup']"),
					m("path[d='M14.2493196,210.597518 L47.1719947,260.018489 L5.40124748,263.374347 L14.2493196,210.597518 Z'][id='Path-86'][sketch:type='MSShapeGroup']"),
					m("path[d='M10.9051663,278.957998 L41.8935862,268.556672 L27.5819304,336.095609 L10.9051663,278.957998 Z'][id='Path-87'][sketch:type='MSShapeGroup']"),
					m("path[d='M0.108171623,266.035194 L0.108171623,333.737339 L30.874748,371.035043 L0.108171623,266.035194 Z'][id='Path-88'][sketch:type='MSShapeGroup']"),
					m("path[d='M55.1968624,245.701995 L49.5921056,281.985606 L68.5111391,254.225507 L55.1968624,245.701995 Z'][id='Path-89'][sketch:type='MSShapeGroup']"),
					m("path[d='M66.49438,265.725281 L39.6824849,305.957069 L63.5829133,314.966539 L66.49438,265.725281 Z'][id='Path-90'][sketch:type='MSShapeGroup']"),
					m("path[d='M42.6581212,312.914515 L30.9554183,340.505903 L56.5022555,360.041399 L42.6581212,312.914515 Z'][id='Path-91'][sketch:type='MSShapeGroup']"),
					m("path[d='M51.9553805,317.319308 L64.1677734,363.956567 L71.9762979,349.803281 L51.9553805,317.319308 Z'][id='Path-92'][sketch:type='MSShapeGroup']"),
					m("path[d='M66.7583921,318.971564 L63.168561,326.108722 L70.3262223,335.877386 L66.7583921,318.971564 Z'][id='Path-93'][sketch:type='MSShapeGroup']"),
					m("path[d='M33.6670426,354.983772 L36.7673513,388.225106 L68.0417843,383.657104 L33.6670426,354.983772 Z'][id='Path-94'][sketch:type='MSShapeGroup']"),
					m("path[d='M73.4852004,358.737565 L64.7177986,371.401804 L82.1499307,392.569383 L73.4852004,358.737565 Z'][id='Path-95'][sketch:type='MSShapeGroup']"),
					m("path[d='M6.01910912,358.820086 L27.8166079,374.115831 L32.8713395,423.302075 L6.01910912,358.820086 Z'][id='Path-96'][sketch:type='MSShapeGroup']"),
					m("path[d='M38.171749,393.610983 L39.7814894,424.40419 L75.0326046,391.551623 L38.171749,393.610983 Z'][id='Path-97'][sketch:type='MSShapeGroup']"),
					m("path[d='M68.1994582,413.53341 L36.7435169,434.273714 L84.5132056,455.95109 L68.1994582,413.53341 Z'][id='Path-98'][sketch:type='MSShapeGroup']"),
					m("path[d='M95.7868889,409.007586 L92.6884136,439.434033 L121.047713,439.923659 L95.7868889,409.007586 Z'][id='Path-99'][sketch:type='MSShapeGroup']"),
					m("path[d='M44.1028541,444.49166 L77.9477382,460.192675 L57.4171308,470.775548 L44.1028541,444.49166 Z'][id='Path-100'][sketch:type='MSShapeGroup']"),
					m("path[d='M95.9298954,444.042378 L89.5697707,458.723799 L122.496113,458.887008 L95.9298954,444.042378 Z'][id='Path-101'][sketch:type='MSShapeGroup']"),
					m("path[d='M82.5752835,464.942223 L80.6190272,490.16984 L109.937204,485.275422 L82.5752835,464.942223 Z'][id='Path-102'][sketch:type='MSShapeGroup']"),
					m("path[d='M63.6764176,473.060465 L76.3178301,466.697171 L74.3414063,488.700965 L63.6764176,473.060465 Z'][id='Path-103'][sketch:type='MSShapeGroup']"),
					m("path[d='M126.65797,464.513113 L94.9325164,463.533863 L118.908115,486.353698 L126.65797,464.513113 Z'][id='Path-104'][sketch:type='MSShapeGroup']"),
					m("path[d='M127.838691,445.610279 L111.385604,444.141404 L136.11657,465.778436 L127.838691,445.610279 Z'][id='Path-105'][sketch:type='MSShapeGroup']"),
					m("path[d='M148.818485,470.73337 L129.083581,469.917328 L137.238621,504.95212 L148.818485,470.73337 Z'][id='Path-106'][sketch:type='MSShapeGroup']"),
					m("path[d='M83.6606666,496.364424 L127.598513,490.166173 L128.414384,515.4323 L83.6606666,496.364424 Z'][id='Path-107'][sketch:type='MSShapeGroup']"),
					m("path[d='M156.731515,473.951693 L144.948141,505.091489 L181.137966,502.31878 L156.731515,473.951693 Z'][id='Path-108'][sketch:type='MSShapeGroup']"),
					m("path[d='M132.878755,509.353246 L132.939258,537.027155 L161.135383,533.275196 L132.878755,509.353246 Z'][id='Path-109'][sketch:type='MSShapeGroup']"),
					m("path[d='M103.985931,511.594152 L126.311454,519.567524 L125.332409,534.210435 L103.985931,511.594152 Z'][id='Path-110'][sketch:type='MSShapeGroup']"),
					m("path[d='M178.81136,508.96448 L142.132012,510.921147 L169.657107,533.251357 L178.81136,508.96448 Z'][id='Path-111'][sketch:type='MSShapeGroup']"),
					m("path[d='M186.398041,491.365479 L186.071692,509.615479 L213.288773,504.906275 L186.398041,491.365479 Z'][id='Path-112'][sketch:type='MSShapeGroup']"),
					m("path[d='M184.500454,515.733044 L167.884192,544.404542 L199.791154,518.159164 L184.500454,515.733044 Z'][id='Path-113'][sketch:type='MSShapeGroup']"),
					m("path[d='M139.138042,541.547478 L163.419821,537.978899 L157.710559,553.131607 L139.138042,541.547478 Z'][id='Path-114'][sketch:type='MSShapeGroup']"),
					m("path[d='M170.230966,548.785495 L163.419821,554.149367 L171.045004,559.982692 L170.230966,548.785495 Z'][id='Path-115'][sketch:type='MSShapeGroup']"),
					m("path[d='M369.858947,507.288384 L376.63159,543.018187 L345.925517,513.039188 L369.858947,507.288384 Z'][id='Path-116'][sketch:type='MSShapeGroup']"),
					m("path[d='M78.9616179,403.498844 L82.9181326,435.194283 L90.7064894,407.907305 L78.9616179,403.498844 Z'][id='Path-117'][sketch:type='MSShapeGroup']")
				])
			),
			m("style", [
				"html {" +
				"    background-color: #17D3D0" +
				"}" +
				".top {" +
				"    height: 100%;" +
				"    background-color: #17D3D0;" +
				"    margin: 2% auto" +
				"}" +
				".middle {" +
				"    margin: 0 auto;" +
				"    width: 100%;" +
				"    max-width: 500px;" +
				"    -webkit-transform: rotate(180deg);" +
				"    -ms-transform: rotate(180deg);" +
				"    transform: rotate(180deg)" +
				"}" +
				".middle svg {" +
				"    transform-origin: 50% 50%;" +
				"    -webkit-animation: fader 1s 1 ease-in forwards, filler 1s 1 ease-in forwards;" +
				"    animation: fader 1s 1 ease-in forwards, filler 1s 1 ease-in forwards;" +
				"    -webkit-animation-fill-mode: forwards;" +
				"    animation-fill-mode: forwards" +
				"}" +
				"@-webkit-keyframes rotater {" +
				"    0% {" +
				"        -webkit-transform: rotate(0deg);" +
				"        transform: rotate(0deg)" +
				"    }" +
				"    100% {" +
				"        -webkit-transform: rotate(90deg);" +
				"        transform: rotate(90deg)" +
				"    }" +
				"}" +
				"@keyframes rotater {" +
				"    0% {" +
				"        -webkit-transform: rotate(0deg);" +
				"        transform: rotate(0deg)" +
				"    }" +
				"    100% {" +
				"        -webkit-transform: rotate(90deg);" +
				"        transform: rotate(90deg)" +
				"        /* Chrome, Safari, Opera */" +
				"    }" +
				"}" +
				"@-webkit-keyframes fader {" +
				"    0% {" +
				"        opacity: 0" +
				"    }" +
				"    100% {" +
				"        opacity: 100" +
				"    }" +
				"}" +
				"@keyframes fader {" +
				"    0% {" +
				"        opacity: 0" +
				"    }" +
				"    100% {" +
				"        opacity: 100" +
				"    }" +
				"}" +
				"@-webkit-keyframes filler {" +
				"    0% {" +
				"        fill: 0" +
				"    }" +
				"    100% {" +
				"        fill: 100" +
				"    }" +
				"}" +
				"@keyframes filler {" +
				"    0% {" +
				"        fill: 0" +
				"    }" +
				"    100% {" +
				"        fill: 100" +
				"    }" +
				"}" +
				"#Path-1," +
				"#Path-2," +
				"#Path-3," +
				"#Path-4," +
				"#Path-5," +
				"#Path-6," +
				"#Path-7," +
				"#Path-8," +
				"#Path-9," +
				"#Path-10," +
				"#Path-11," +
				"#Path-12," +
				"#Path-13," +
				"#Path-14," +
				"#Path-15," +
				"#Path-16," +
				"#Path-17," +
				"#Path-18," +
				"#Path-19," +
				"#Path-20," +
				"#Path-21," +
				"#Path-22," +
				"#Path-23," +
				"#Path-24," +
				"#Path-25," +
				"#Path-26," +
				"#Path-27," +
				"#Path-28," +
				"#Path-29," +
				"#Path-30," +
				"#Path-31," +
				"#Path-32," +
				"#Path-33," +
				"#Path-34," +
				"#Path-35," +
				"#Path-36," +
				"#Path-37," +
				"#Path-38," +
				"#Path-39," +
				"#Path-40," +
				"#Path-41," +
				"#Path-42," +
				"#Path-43," +
				"#Path-44," +
				"#Path-45," +
				"#Path-46," +
				"#Path-47," +
				"#Path-48," +
				"#Path-49," +
				"#Path-50," +
				"#Path-51," +
				"#Path-52," +
				"#Path-53," +
				"#Path-54," +
				"#Path-55," +
				"#Path-56," +
				"#Path-57," +
				"#Path-58," +
				"#Path-59," +
				"#Path-60," +
				"#Path-61," +
				"#Path-62," +
				"#Path-63," +
				"#Path-64," +
				"#Path-65," +
				"#Path-66," +
				"#Path-67," +
				"#Path-68," +
				"#Path-69," +
				"#Path-70," +
				"#Path-71," +
				"#Path-72," +
				"#Path-73," +
				"#Path-74," +
				"#Path-75," +
				"#Path-76," +
				"#Path-77," +
				"#Path-78," +
				"#Path-79," +
				"#Path-80," +
				"#Path-81," +
				"#Path-82," +
				"#Path-83," +
				"#Path-84," +
				"#Path-85," +
				"#Path-86," +
				"#Path-87," +
				"#Path-88," +
				"#Path-89," +
				"#Path-90," +
				"#Path-91," +
				"#Path-92," +
				"#Path-93," +
				"#Path-94," +
				"#Path-95," +
				"#Path-96," +
				"#Path-97," +
				"#Path-98," +
				"#Path-99," +
				"#Path-100," +
				"#Path-101," +
				"#Path-102," +
				"#Path-103," +
				"#Path-104," +
				"#Path-105," +
				"#Path-106," +
				"#Path-107," +
				"#Path-108," +
				"#Path-109," +
				"#Path-110," +
				"#Path-111," +
				"#Path-112," +
				"#Path-113," +
				"#Path-114," +
				"#Path-115," +
				"#Path-116," +
				"#Path-117 {" +
				"    vector-effect: non-scaling-stroke;" +
				"    stroke-dasharray: 1000;" +
				"    stroke-dashoffset: 1000" +
				"}" +
				"#Path-1 {" +
				"    -webkit-animation: large-shape 10s 100ms ease-out 1 forwards;" +
				"    animation: large-shape 10s 100ms ease-out 1 forwards" +
				"}" +
				"#Path-2 {" +
				"    -webkit-animation: large-shape 12s 120ms ease-out 1 forwards;" +
				"    animation: large-shape 12s 120ms ease-out 1 forwards" +
				"}" +
				"#Path-6 {" +
				"    -webkit-animation: large-shape 20s 200ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 200ms ease-out 1 forwards" +
				"}" +
				"#Path-3 {" +
				"    -webkit-animation: large-shape 12s 140ms ease-out 1 forwards;" +
				"    animation: large-shape 12s 140ms ease-out 1 forwards" +
				"}" +
				"#Path-4 {" +
				"    -webkit-animation: large-shape 14s 160ms ease-out 1 forwards;" +
				"    animation: large-shape 14s 160ms ease-out 1 forwards" +
				"}" +
				"#Path-5 {" +
				"    -webkit-animation: large-shape 12s 180ms ease-out 1 forwards;" +
				"    animation: large-shape 12s 180ms ease-out 1 forwards" +
				"}" +
				"#Path-7 {" +
				"    -webkit-animation: large-shape 20s 220ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 220ms ease-out 1 forwards" +
				"}" +
				"#Path-8 {" +
				"    -webkit-animation: large-shape 20s 240ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 240ms ease-out 1 forwards" +
				"}" +
				"#Path-9 {" +
				"    -webkit-animation: large-shape 20s 260ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 260ms ease-out 1 forwards" +
				"}" +
				"#Path-10 {" +
				"    -webkit-animation: large-shape 20s 280ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 280ms ease-out 1 forwards" +
				"}" +
				"#Path-11 {" +
				"    -webkit-animation: large-shape 20s 300ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 300ms ease-out 1 forwards" +
				"}" +
				"#Path-12 {" +
				"    -webkit-animation: large-shape 20s 320ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 320ms ease-out 1 forwards" +
				"}" +
				"#Path-13 {" +
				"    -webkit-animation: large-shape 20s 320ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 320ms ease-out 1 forwards" +
				"}" +
				"#Path-14 {" +
				"    -webkit-animation: large-shape 20s 340ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 340ms ease-out 1 forwards" +
				"}" +
				"#Path-15 {" +
				"    -webkit-animation: large-shape 20s 360ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 360ms ease-out 1 forwards" +
				"}" +
				"#Path-16 {" +
				"    -webkit-animation: large-shape 20s 380ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 380ms ease-out 1 forwards" +
				"}" +
				"#Path-17 {" +
				"    -webkit-animation: large-shape 20s 400ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 400ms ease-out 1 forwards" +
				"}" +
				"#Path-18 {" +
				"    -webkit-animation: large-shape 20s 420ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 420ms ease-out 1 forwards" +
				"}" +
				"#Path-19 {" +
				"    -webkit-animation: large-shape 20s 440ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 440ms ease-out 1 forwards" +
				"}" +
				"#Path-20 {" +
				"    -webkit-animation: large-shape 20s 460ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 460ms ease-out 1 forwards" +
				"}" +
				"#Path-21 {" +
				"    -webkit-animation: large-shape 12s 480ms ease-out 1 forwards;" +
				"    animation: large-shape 12s 480ms ease-out 1 forwards" +
				"}" +
				"#Path-22 {" +
				"    -webkit-animation: large-shape 20s 500ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 500ms ease-out 1 forwards" +
				"}" +
				"#Path-23 {" +
				"    -webkit-animation: large-shape 20s 520ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 520ms ease-out 1 forwards" +
				"}" +
				"#Path-24 {" +
				"    -webkit-animation: large-shape 20s 540ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 540ms ease-out 1 forwards" +
				"}" +
				"#Path-25 {" +
				"    -webkit-animation: large-shape 20s 560ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 560ms ease-out 1 forwards" +
				"}" +
				"#Path-26 {" +
				"    -webkit-animation: large-shape 20s 580ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 580ms ease-out 1 forwards" +
				"}" +
				"#Path-27 {" +
				"    -webkit-animation: large-shape 20s 600ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 600ms ease-out 1 forwards" +
				"}" +
				"#Path-28 {" +
				"    -webkit-animation: large-shape 20s 620ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 620ms ease-out 1 forwards" +
				"}" +
				"#Path-29 {" +
				"    -webkit-animation: large-shape 20s 640ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 640ms ease-out 1 forwards" +
				"}" +
				"#Path-30 {" +
				"    -webkit-animation: large-shape 20s 660ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 660ms ease-out 1 forwards" +
				"}" +
				"#Path-31 {" +
				"    -webkit-animation: large-shape 20s 680ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 680ms ease-out 1 forwards" +
				"}" +
				"#Path-32 {" +
				"    -webkit-animation: large-shape 20s 700ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 700ms ease-out 1 forwards" +
				"}" +
				"#Path-33 {" +
				"    -webkit-animation: large-shape 20s 720ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 720ms ease-out 1 forwards" +
				"}" +
				"#Path-34 {" +
				"    -webkit-animation: large-shape 20s 740ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 740ms ease-out 1 forwards" +
				"}" +
				"#Path-35 {" +
				"    -webkit-animation: large-shape 20s 780ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 780ms ease-out 1 forwards" +
				"}" +
				"#Path-36 {" +
				"    -webkit-animation: large-shape 20s 800ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 800ms ease-out 1 forwards" +
				"}" +
				"#Path-37 {" +
				"    -webkit-animation: large-shape 20s 820ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 820ms ease-out 1 forwards" +
				"}" +
				"#Path-38 {" +
				"    -webkit-animation: large-shape 20s 840ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 840ms ease-out 1 forwards" +
				"}" +
				"#Path-39 {" +
				"    -webkit-animation: large-shape 20s 860ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 860ms ease-out 1 forwards" +
				"}" +
				"#Path-40 {" +
				"    -webkit-animation: large-shape 20s 880ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 880ms ease-out 1 forwards" +
				"}" +
				"#Path-41 {" +
				"    -webkit-animation: large-shape 20s 860ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 860ms ease-out 1 forwards" +
				"}" +
				"#Path-42 {" +
				"    -webkit-animation: large-shape 20s 880ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 880ms ease-out 1 forwards" +
				"}" +
				"#Path-43 {" +
				"    -webkit-animation: large-shape 20s 900ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 900ms ease-out 1 forwards" +
				"}" +
				"#Path-44 {" +
				"    -webkit-animation: large-shape 20s 920ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 920ms ease-out 1 forwards" +
				"}" +
				"#Path-45 {" +
				"    -webkit-animation: large-shape 20s 940ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 940ms ease-out 1 forwards" +
				"}" +
				"#Path-46 {" +
				"    -webkit-animation: large-shape 20s 960ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 960ms ease-out 1 forwards" +
				"}" +
				"#Path-47 {" +
				"    -webkit-animation: large-shape 20s 980ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 980ms ease-out 1 forwards" +
				"}" +
				"#Path-48 {" +
				"    -webkit-animation: large-shape 20s 1000ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1000ms ease-out 1 forwards" +
				"}" +
				"#Path-53 {" +
				"    -webkit-animation: large-shape 20s 1020ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1020ms ease-out 1 forwards" +
				"}" +
				"#Path-49 {" +
				"    -webkit-animation: large-shape 20s 1040ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1040ms ease-out 1 forwards" +
				"}" +
				"#Path-51 {" +
				"    -webkit-animation: large-shape 17s 1080ms ease-out 1 forwards;" +
				"    animation: large-shape 17s 1080ms ease-out 1 forwards" +
				"}" +
				"#Path-116 {" +
				"    -webkit-animation: large-shape 20s 1080ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1080ms ease-out 1 forwards" +
				"}" +
				"#Path-52 {" +
				"    -webkit-animation: large-shape 20s 1100ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1100ms ease-out 1 forwards" +
				"}" +
				"#Path-52 {" +
				"    -webkit-animation: large-shape 20s 1120ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1120ms ease-out 1 forwards" +
				"}" +
				"#Path-50 {" +
				"    -webkit-animation: large-shape 20s 1140ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1140ms ease-out 1 forwards" +
				"}" +
				"#Path-54 {" +
				"    -webkit-animation: large-shape 20s 1160ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1160ms ease-out 1 forwards" +
				"}" +
				"#Path-55 {" +
				"    -webkit-animation: large-shape 20s 1180ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1180ms ease-out 1 forwards" +
				"}" +
				"#Path-56 {" +
				"    -webkit-animation: large-shape 20s 1200ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1200ms ease-out 1 forwards" +
				"}" +
				"#Path-57 {" +
				"    -webkit-animation: large-shape 20s 1220ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1220ms ease-out 1 forwards" +
				"}" +
				"#Path-58 {" +
				"    -webkit-animation: large-shape 20s 1240ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1240ms ease-out 1 forwards" +
				"}" +
				"#Path-59 {" +
				"    -webkit-animation: large-shape 20s 1260ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1260ms ease-out 1 forwards" +
				"}" +
				"#Path-60 {" +
				"    -webkit-animation: large-shape 20s 1280ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1280ms ease-out 1 forwards" +
				"}" +
				"#Path-61 {" +
				"    -webkit-animation: large-shape 20s 1280ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1280ms ease-out 1 forwards" +
				"}" +
				"#Path-112 {" +
				"    -webkit-animation: large-shape 20s 1320ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1320ms ease-out 1 forwards" +
				"}" +
				"#Path-113 {" +
				"    -webkit-animation: large-shape 20s 1340ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1340ms ease-out 1 forwards" +
				"}" +
				"#Path-109 {" +
				"    -webkit-animation: large-shape 20s 1360ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1360ms ease-out 1 forwards" +
				"}" +
				"#Path-110 {" +
				"    -webkit-animation: large-shape 20s 1380ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1380ms ease-out 1 forwards" +
				"}" +
				"#Path-111 {" +
				"    -webkit-animation: large-shape 20s 1400ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1400ms ease-out 1 forwards" +
				"}" +
				"#Path-102 {" +
				"    -webkit-animation: large-shape 20s 1420ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1420ms ease-out 1 forwards" +
				"}" +
				"#Path-103 {" +
				"    -webkit-animation: large-shape 20s 1440ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1440ms ease-out 1 forwards" +
				"}" +
				"#Path-104 {" +
				"    -webkit-animation: large-shape 20s 1460ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1460ms ease-out 1 forwards" +
				"}" +
				"#Path-105 {" +
				"    -webkit-animation: large-shape 20s 1480ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1480ms ease-out 1 forwards" +
				"}" +
				"#Path-106 {" +
				"    -webkit-animation: large-shape 20s 1500ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1500ms ease-out 1 forwards" +
				"}" +
				"#Path-107 {" +
				"    -webkit-animation: large-shape 20s 1520ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1520ms ease-out 1 forwards" +
				"}" +
				"#Path-108 {" +
				"    -webkit-animation: large-shape 20s 1540ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1540ms ease-out 1 forwards" +
				"}" +
				"#Path-100 {" +
				"    -webkit-animation: large-shape 20s 1560ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1560ms ease-out 1 forwards" +
				"}" +
				"#Path-101 {" +
				"    -webkit-animation: large-shape 20s 1580ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1580ms ease-out 1 forwards" +
				"}" +
				"#Path-97 {" +
				"    -webkit-animation: large-shape 20s 1600ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1600ms ease-out 1 forwards" +
				"}" +
				"#Path-98 {" +
				"    -webkit-animation: large-shape 20s 1620ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1620ms ease-out 1 forwards" +
				"}" +
				"#Path-99 {" +
				"    -webkit-animation: large-shape 20s 1640ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1640ms ease-out 1 forwards" +
				"}" +
				"#Path-93 {" +
				"    -webkit-animation: large-shape 20s 1680ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1680ms ease-out 1 forwards" +
				"}" +
				"#Path-94 {" +
				"    -webkit-animation: large-shape 20s 1700ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1700ms ease-out 1 forwards" +
				"}" +
				"#Path-95 {" +
				"    -webkit-animation: large-shape 20s 1720ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1720ms ease-out 1 forwards" +
				"}" +
				"#Path-96 {" +
				"    -webkit-animation: large-shape 20s 1740ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1740ms ease-out 1 forwards" +
				"}" +
				"#Path-92 {" +
				"    -webkit-animation: large-shape 20s 1760ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1760ms ease-out 1 forwards" +
				"}" +
				"#Path-88 {" +
				"    -webkit-animation: large-shape 10s 1780ms ease-out 1 forwards;" +
				"    animation: large-shape 10s 1780ms ease-out 1 forwards" +
				"}" +
				"#Path-91 {" +
				"    -webkit-animation: large-shape 20s 1800ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1800ms ease-out 1 forwards" +
				"}" +
				"#Path-87 {" +
				"    -webkit-animation: large-shape 20s 1820ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1820ms ease-out 1 forwards" +
				"}" +
				"#Path-90 {" +
				"    -webkit-animation: large-shape 20s 1840ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1840ms ease-out 1 forwards" +
				"}" +
				"#Path-89 {" +
				"    -webkit-animation: large-shape 20s 1860ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1860ms ease-out 1 forwards" +
				"}" +
				"#Path-86 {" +
				"    -webkit-animation: large-shape 20s 1880ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1880ms ease-out 1 forwards" +
				"}" +
				"#Path-85 {" +
				"    -webkit-animation: large-shape 20s 1900ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1900ms ease-out 1 forwards" +
				"}" +
				"#Path-84 {" +
				"    -webkit-animation: large-shape 20s 1920ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1920ms ease-out 1 forwards" +
				"}" +
				"#Path-82 {" +
				"    -webkit-animation: large-shape 20s 1940ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1940ms ease-out 1 forwards" +
				"}" +
				"#Path-80 {" +
				"    -webkit-animation: large-shape 20s 1960ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1960ms ease-out 1 forwards" +
				"}" +
				"#Path-81 {" +
				"    -webkit-animation: large-shape 20s 1980ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 1980ms ease-out 1 forwards" +
				"}" +
				"#Path-79 {" +
				"    -webkit-animation: large-shape 20s 2000ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2000ms ease-out 1 forwards" +
				"}" +
				"#Path-77 {" +
				"    -webkit-animation: large-shape 20s 2020ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2020ms ease-out 1 forwards" +
				"}" +
				"#Path-78 {" +
				"    -webkit-animation: large-shape 20s 2040ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2040ms ease-out 1 forwards" +
				"}" +
				"#Path-71 {" +
				"    -webkit-animation: large-shape 20s 2060ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2060ms ease-out 1 forwards" +
				"}" +
				"#Path-72 {" +
				"    -webkit-animation: large-shape 20s 2080ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2080ms ease-out 1 forwards" +
				"}" +
				"#Path-73 {" +
				"    -webkit-animation: large-shape 20s 2100ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2100ms ease-out 1 forwards" +
				"}" +
				"#Path-74 {" +
				"    -webkit-animation: large-shape 20s 2120ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2120ms ease-out 1 forwards" +
				"}" +
				"#Path-75 {" +
				"    -webkit-animation: large-shape 20s 2120ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2120ms ease-out 1 forwards" +
				"}" +
				"#Path-76 {" +
				"    -webkit-animation: large-shape 20s 2140ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2140ms ease-out 1 forwards" +
				"}" +
				"#Path-83 {" +
				"    -webkit-animation: large-shape 20s 2160ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2160ms ease-out 1 forwards" +
				"}" +
				"#Path-62 {" +
				"    -webkit-animation: large-shape 20s 2180ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2180ms ease-out 1 forwards" +
				"}" +
				"#Path-63 {" +
				"    -webkit-animation: large-shape 20s 2200ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2200ms ease-out 1 forwards" +
				"}" +
				"#Path-69 {" +
				"    -webkit-animation: large-shape 20s 2220ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2220ms ease-out 1 forwards" +
				"}" +
				"#Path-70 {" +
				"    -webkit-animation: large-shape 20s 2220ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2220ms ease-out 1 forwards" +
				"}" +
				"#Path-64 {" +
				"    -webkit-animation: large-shape 20s 2240ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2240ms ease-out 1 forwards" +
				"}" +
				"#Path-65 {" +
				"    -webkit-animation: large-shape 20s 2260ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2260ms ease-out 1 forwards" +
				"}" +
				"#Path-66 {" +
				"    -webkit-animation: large-shape 20s 2280ms ease-out 1 forwards;" +
				"    animation: large-shape 20s 2280ms ease-out 1 forwards" +
				"}" +
				"#Path-67 {" +
				"    -webkit-animation: large-shape 22s 2300ms ease-out 1 forwards;" +
				"    animation: large-shape 22s 2300ms ease-out 1 forwards" +
				"}" +
				"#Path-68 {" +
				"    -webkit-animation: large-shape 18s 2320ms ease-out 1 forwards;" +
				"    animation: large-shape 18s 2320ms ease-out 1 forwards" +
				"}" +
				"#Path-114 {" +
				"    -webkit-animation: large-shape 24s 2320ms ease-out 1 forwards;" +
				"    animation: large-shape 24s 2320ms ease-out 1 forwards" +
				"}" +
				"#Path-117 {" +
				"    -webkit-animation: large-shape 25s 2320ms ease-out 1 forwards;" +
				"    animation: large-shape 25s 2320ms ease-out 1 forwards" +
				"}" +
				"@-webkit-keyframes large-shape {" +
				"    0% {" +
				"        stroke-dashoffset: 1000" +
				"    }" +
				"    100% {" +
				"        stroke-dashoffset: 0" +
				"    }" +
				"}" +
				"@keyframes large-shape {" +
				"    0% {" +
				"        stroke-dashoffset: 1000" +
				"    }" +
				"    100% {" +
				"        stroke-dashoffset: 0" +
				"    }" +
				"}"
			])
		])
	)
)

m.render(document.getElementById("root"), [ring])
~~~
