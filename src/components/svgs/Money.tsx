import React from 'react';

interface MoneySVGProps {
	className?: string;
}

const Money: React.FC<MoneySVGProps> = ({ className }) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='512.000000pt'
			height='512.000000pt'
			viewBox='0 0 512.000000 512.000000'
			preserveAspectRatio='xMidYMid meet'
			className={`h-auto w-16 sm:w-10 ${className}`}
		>
			<g
				transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
				fill='currentColor'
				stroke='none'
			>
				<path
					d='M1470 5113 c-289 -28 -597 -148 -825 -321 -89 -68 -229 -206 -300
-297 -492 -628 -451 -1525 95 -2108 329 -352 826 -546 1300 -507 66 5 133 13
147 16 21 6 25 4 20 -9 -3 -9 -11 -73 -17 -142 -41 -445 124 -910 439 -1237
355 -370 836 -550 1334 -499 214 22 385 73 577 172 564 291 906 881 877 1509
-20 427 -191 801 -505 1101 -327 314 -795 481 -1235 439 -67 -6 -130 -14 -141
-17 -16 -4 -18 -1 -12 20 3 14 11 81 16 147 22 270 -31 553 -150 807 -236 502
-706 845 -1258 918 -102 14 -270 17 -362 8z m445 -203 c289 -61 524 -188 730
-395 208 -208 340 -450 402 -737 14 -66 18 -126 17 -298 -1 -207 -2 -220 -31
-330 -40 -151 -81 -255 -144 -365 -219 -385 -593 -648 -1024 -720 -199 -34
-448 -18 -650 40 -94 27 -265 104 -350 158 -338 211 -568 543 -657 945 -31
141 -31 423 0 569 134 619 627 1075 1248 1153 110 14 345 3 459 -20z m1710
-1850 c650 -61 1158 -517 1297 -1164 17 -80 22 -136 22 -271 1 -257 -38 -423
-149 -650 -201 -408 -578 -692 -1035 -781 -129 -25 -389 -25 -515 0 -303 60
-550 189 -760 400 -204 205 -325 418 -389 687 -48 200 -54 454 -13 613 l12 48
90 33 c49 19 91 32 93 30 2 -2 -6 -41 -17 -87 -91 -362 -8 -766 220 -1068 185
-246 459 -419 769 -486 118 -26 381 -26 500 -1 257 55 475 172 655 352 180
180 297 398 352 655 25 119 25 382 -1 500 -65 301 -226 561 -462 750 -301 240
-717 331 -1092 239 -46 -11 -85 -19 -87 -17 -2 2 11 44 30 93 l33 90 49 12
c43 12 180 28 258 32 17 0 80 -4 140 -9z m-23 -340 c617 -60 1058 -587 1007
-1201 -52 -608 -589 -1061 -1196 -1009 -758 66 -1226 848 -926 1548 34 79 40
86 117 145 104 78 235 210 313 313 60 79 65 83 149 118 133 56 249 81 424 94
8 1 59 -3 112 -8z'
				/>
				<path
					d='M1411 4755 c-260 -46 -495 -169 -686 -360 -239 -239 -358 -513 -371
-855 -12 -293 66 -554 237 -793 189 -266 488 -454 817 -513 112 -20 331 -20
442 0 463 83 851 424 994 871 40 128 58 247 58 390 0 352 -134 669 -386 913
-164 158 -358 268 -573 324 -103 26 -139 30 -283 34 -116 2 -190 -1 -249 -11z
m400 -171 c468 -81 834 -449 909 -916 18 -113 9 -341 -19 -446 -103 -395 -408
-700 -803 -803 -105 -28 -333 -37 -446 -19 -400 64 -736 346 -870 730 -183
525 54 1105 553 1353 211 105 447 140 676 101z'
				/>
				<path
					d='M1540 4342 l0 -89 -56 -12 c-131 -30 -267 -131 -327 -246 -30 -56
-32 -67 -32 -160 0 -90 3 -106 29 -160 73 -148 267 -265 441 -265 169 0 307
-71 355 -182 54 -125 -24 -252 -188 -310 -82 -29 -225 -23 -302 13 -98 46
-169 128 -170 197 0 21 -4 22 -86 22 l-87 0 6 -52 c19 -154 176 -311 353 -351
l59 -14 3 -86 3 -87 84 0 85 0 0 85 c0 84 0 85 28 91 118 26 215 77 287 151
221 227 100 570 -236 667 -29 9 -105 20 -167 26 -83 7 -128 16 -166 33 -238
109 -217 365 38 454 75 26 212 23 291 -7 83 -32 157 -107 175 -178 l14 -52 84
0 84 0 -6 48 c-11 78 -69 184 -132 240 -64 57 -155 104 -236 122 l-58 13 0 89
0 88 -85 0 -85 0 0 -88z'
				/>
				<path
					d='M3420 2471 l0 -91 -27 -6 c-178 -39 -303 -129 -366 -262 -28 -59 -32
-77 -32 -152 0 -74 4 -93 31 -150 57 -119 166 -209 304 -250 36 -11 115 -24
177 -29 83 -7 126 -15 165 -34 185 -84 223 -261 83 -385 -182 -160 -533 -90
-586 119 l-13 49 -83 0 c-80 0 -83 -1 -83 -23 0 -41 31 -131 62 -180 60 -95
189 -180 314 -208 l54 -12 0 -89 0 -88 85 0 85 0 0 89 0 89 52 11 c136 30 273
132 330 249 30 61 33 74 33 162 0 85 -3 102 -29 155 -40 82 -127 165 -219 209
-72 35 -120 45 -293 64 -91 10 -171 42 -226 90 -48 43 -82 122 -75 179 10 92
100 185 210 218 64 19 189 19 253 0 107 -31 198 -117 210 -197 l7 -38 85 0 85
0 -6 52 c-20 164 -168 306 -374 358 l-42 11 -3 87 -3 87 -82 3 -83 3 0 -90z'
				/>
			</g>
		</svg>
	);
};

export default Money;
