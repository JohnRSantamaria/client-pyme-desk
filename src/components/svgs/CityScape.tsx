import React from 'react';

interface CityScapeSVGProps {
	className?: string;
}

const CityScape: React.FC<CityScapeSVGProps> = ({ className }) => {
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
					d='M2960 4792 l0 -248 -80 -15 -80 -16 0 184 0 183 -80 0 -80 0 0 -199
      0 -199 -47 -10 c-27 -6 -135 -28 -240 -48 l-193 -38 0 -233 0 -233 -720 0
      -720 0 0 -80 0 -80 80 0 80 0 0 -483 0 -483 -63 4 c-137 9 -265 -46 -383 -163
      -133 -131 -188 -272 -188 -475 0 -188 54 -335 169 -459 74 -79 143 -124 234
      -154 l71 -22 0 -48 0 -49 -32 22 c-79 52 -120 65 -208 65 -71 -1 -95 -5 -143
      -27 -176 -82 -281 -307 -249 -530 23 -164 129 -316 256 -368 l56 -24 0 -163 0
      -163 -160 0 -160 0 0 -80 0 -80 2480 0 2480 0 0 80 0 80 -80 0 -80 0 0 1200 0
      1200 -80 0 -80 0 0 160 0 160 -80 0 -80 0 0 240 0 240 -80 0 -80 0 0 160 0
      160 -80 0 -80 0 0 -160 0 -160 -80 0 -80 0 0 -240 0 -240 -80 0 -80 0 0 889 0
      888 -217 -43 c-120 -24 -228 -46 -240 -49 -23 -5 -23 -5 -23 115 l0 120 -80 0
      -80 0 0 -135 c0 -131 -1 -135 -22 -140 -74 -17 -114 -25 -125 -25 -10 0 -13
      53 -13 230 l0 230 -80 0 -80 0 0 -248z m800 -1042 l0 -790 -240 0 -240 0 0
      -160 0 -160 -80 0 -80 0 0 -959 0 -958 -52 -7 c-29 -4 -73 -16 -99 -27 l-46
      -20 -56 54 c-61 58 -139 104 -227 133 -59 19 -201 25 -277 11 l-43 -7 0 1697
      0 1698 708 142 c389 77 713 142 720 142 9 1 12 -163 12 -789z m-1600 -1476 l0
      -1486 -67 -67 c-38 -37 -79 -88 -93 -114 -33 -62 -57 -62 -122 -1 -27 25 -79
      60 -116 77 -61 29 -76 32 -162 32 -86 0 -101 -3 -162 -32 -93 -44 -151 -100
      -195 -191 -35 -69 -38 -82 -38 -164 l0 -88 -162 0 -163 0 0 145 0 146 240 279
      240 279 0 98 0 98 71 22 c91 30 160 75 234 154 118 127 170 271 169 469 -1
      107 -5 137 -27 205 -37 112 -90 196 -175 276 l-72 69 60 0 60 0 0 80 0 80 -80
      0 -80 0 0 -70 0 -69 -67 25 c-38 15 -100 28 -141 31 l-73 6 -65 67 c-35 37
      -80 76 -99 86 l-35 19 0 512 0 513 560 0 560 0 0 -1486z m2240 846 l0 -160
      -80 0 -80 0 0 160 0 160 80 0 80 0 0 -160z m160 -400 l0 -80 -560 0 -560 0 0
      80 0 80 560 0 560 0 0 -80z m-3614 -114 c122 -56 223 -205 246 -364 30 -208
      -58 -417 -213 -509 -30 -17 -64 -34 -76 -38 l-23 -6 0 275 0 276 -80 0 -80 0
      0 -276 0 -275 -22 7 c-144 44 -264 203 -290 381 -37 253 102 500 309 553 61
      15 167 4 229 -24z m3774 -1172 l0 -1046 -39 35 c-22 20 -58 46 -80 59 l-41 23
      0 908 0 907 -560 0 -560 0 0 -775 c0 -426 -4 -775 -8 -775 -5 0 -33 -23 -61
      -50 -39 -37 -58 -49 -72 -45 -18 6 -19 30 -19 906 l0 899 720 0 720 0 0 -1046z
      m-3277 925 c112 -58 207 -206 229 -359 33 -220 -75 -447 -249 -528 -48 -22
      -72 -27 -143 -27 -73 0 -93 4 -140 27 -30 15 -72 42 -93 59 l-38 32 58 37
      c170 109 276 297 290 514 5 84 -10 213 -32 268 -6 14 -2 15 35 7 23 -5 60 -19
      83 -30z m2477 -849 l0 -650 -42 7 c-57 10 -182 10 -235 0 l-43 -9 0 651 0 651
      160 0 160 0 0 -650z m480 -156 c0 -731 -1 -806 -16 -800 -9 3 -39 6 -67 6 -51
      0 -52 1 -76 45 -23 44 -135 165 -152 165 -5 0 -9 285 -9 695 l0 695 160 0 160
      0 0 -806z m-3338 -19 c40 -19 87 -38 105 -41 l33 -6 0 -70 0 -69 -152 -177
      c-83 -97 -155 -181 -160 -186 -4 -6 -8 147 -8 338 l0 349 55 -52 c30 -29 86
      -67 127 -86z m-507 6 c54 -24 120 -100 142 -164 12 -34 18 -81 18 -137 0 -106
      -22 -172 -78 -236 -97 -110 -217 -110 -314 0 -56 64 -78 130 -78 236 0 106 22
      172 78 236 46 52 104 84 157 84 19 0 53 -9 75 -19z m2089 -659 c85 -40 143
      -95 191 -181 22 -39 42 -71 45 -71 3 0 28 20 55 44 75 65 110 80 185 80 75 0
      110 -15 185 -80 27 -24 52 -44 55 -44 3 0 23 32 45 71 49 87 106 141 193 182
      61 29 76 32 162 32 86 0 101 -3 162 -32 112 -53 188 -141 228 -266 l12 -39 47
      9 c25 4 82 8 126 7 69 0 90 -5 145 -31 64 -30 150 -96 150 -114 0 -5 -642 -9
      -1629 -9 l-1630 0 -7 47 c-25 169 146 315 307 262 48 -17 95 -54 134 -107 33
      -45 33 -46 86 -43 32 1 80 -6 117 -17 34 -11 64 -17 66 -13 2 3 9 24 16 46 35
      113 118 218 207 261 112 54 240 56 347 6z m-1924 -237 l0 -205 -80 0 -80 0 0
      164 0 164 33 11 c17 6 52 25 77 41 25 16 46 30 48 30 1 0 2 -92 2 -205z'
				/>
				<path
					d='M2480 3760 l0 -320 240 0 240 0 0 320 0 320 -240 0 -240 0 0 -320z
      m320 0 l0 -160 -80 0 -80 0 0 160 0 160 80 0 80 0 0 -160z'
				/>
				<path
					d='M3120 3760 l0 -320 240 0 240 0 0 320 0 320 -240 0 -240 0 0 -320z
      m320 0 l0 -160 -80 0 -80 0 0 160 0 160 80 0 80 0 0 -160z'
				/>
				<path
					d='M2480 2960 l0 -320 240 0 240 0 0 320 0 320 -240 0 -240 0 0 -320z
      m320 0 l0 -160 -80 0 -80 0 0 160 0 160 80 0 80 0 0 -160z'
				/>
				<path
					d='M2480 2160 l0 -320 240 0 240 0 0 320 0 320 -240 0 -240 0 0 -320z
      m320 0 l0 -160 -80 0 -80 0 0 160 0 160 80 0 80 0 0 -160z'
				/>
				<path
					d='M2480 1360 l0 -320 240 0 240 0 0 320 0 320 -240 0 -240 0 0 -320z
      m320 0 l0 -160 -80 0 -80 0 0 160 0 160 80 0 80 0 0 -160z'
				/>
				<path d='M1200 3520 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1520 3520 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1840 3520 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1200 3200 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1520 3200 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1840 3200 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1200 2880 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1520 2880 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1840 2880 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
				<path d='M1840 2560 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
			</g>
		</svg>
	);
};

export default CityScape;