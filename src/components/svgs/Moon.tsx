import React from 'react';

interface MoonSVGProps {
	className?: string;
}

const Moon: React.FC<MoonSVGProps> = ({ className }) => {
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
					d='M317 5103 c-16 -10 -45 -49 -65 -88 l-37 -70 -70 -10 c-85 -13 -110
-26 -131 -67 -27 -51 -13 -93 52 -159 l56 -56 -12 -76 c-15 -91 -4 -129 44
-158 44 -27 67 -24 147 16 l70 36 74 -37 c88 -43 128 -42 169 7 29 34 33 72
16 159 l-10 53 60 63 c53 55 60 67 60 103 0 30 -7 49 -28 72 -24 27 -38 32
-106 42 l-78 11 -33 66 c-18 36 -42 73 -53 83 -30 27 -91 32 -125 10z m78
-230 c23 -41 68 -73 106 -73 40 0 42 -11 7 -47 -30 -31 -33 -39 -33 -99 0 -35
-2 -63 -5 -62 -3 2 -26 11 -53 22 -46 18 -48 18 -94 0 -27 -11 -51 -20 -54
-22 -4 -2 -3 14 0 35 10 52 -2 90 -40 129 -35 36 -34 37 33 49 38 6 80 45 93
85 9 29 18 25 40 -17z'
				/>
				<path
					d='M2365 5113 c-197 -18 -426 -64 -602 -122 -173 -57 -403 -162 -437
-200 -42 -46 -10 -121 50 -121 14 0 66 21 117 46 166 84 389 162 567 199 77
16 261 44 292 45 10 0 -33 -26 -95 -58 -506 -261 -874 -723 -1012 -1272 -54
-212 -71 -525 -40 -742 117 -835 728 -1488 1557 -1664 167 -35 484 -45 658
-20 192 28 416 91 458 129 30 27 29 71 -3 102 -30 31 -41 31 -129 1 -223 -77
-386 -100 -651 -93 -227 6 -322 22 -520 88 -612 204 -1083 737 -1205 1364 -92
477 2 958 267 1360 215 325 540 581 905 710 89 32 127 66 135 121 5 45 -25
100 -67 121 -24 12 -146 15 -245 6z'
				/>
				<path
					d='M3937 5103 c-16 -10 -45 -49 -65 -88 l-37 -70 -70 -10 c-84 -13 -110
-26 -130 -65 -29 -57 -19 -88 57 -166 l50 -52 -12 -75 c-15 -91 -4 -129 44
-158 44 -27 67 -24 147 16 l70 36 74 -37 c88 -43 128 -42 169 7 29 34 33 72
16 159 l-10 53 60 63 c53 55 60 67 60 103 0 30 -7 49 -28 72 -24 27 -38 32
-106 42 l-78 11 -33 66 c-18 36 -42 73 -53 83 -30 27 -91 32 -125 10z m83
-233 c21 -42 63 -70 104 -70 34 0 40 -14 15 -36 -38 -35 -52 -73 -45 -127 6
-45 5 -49 -11 -42 -92 39 -98 40 -142 17 -23 -12 -44 -22 -46 -22 -2 0 -3 27
-2 60 1 57 -1 62 -37 99 -39 40 -36 51 15 51 36 0 79 30 99 70 11 22 22 40 25
40 3 0 14 -18 25 -40z'
				/>
				<path
					d='M1080 4643 c-32 -12 -190 -142 -293 -242 -417 -403 -675 -911 -764
-1501 -24 -161 -24 -530 0 -690 37 -241 102 -469 193 -677 56 -126 59 -132
138 -270 53 -92 80 -110 134 -87 50 21 53 56 8 134 -63 111 -162 320 -201 425
-47 126 -97 326 -121 480 -25 166 -26 523 -1 682 95 600 397 1141 840 1505
180 148 190 162 145 212 -25 26 -54 37 -78 29z'
				/>
				<path
					d='M3407 3994 c-19 -10 -43 -47 -83 -127 -31 -62 -57 -113 -59 -115 -1
-2 -56 -11 -122 -21 -131 -20 -163 -35 -187 -86 -34 -70 -18 -107 91 -217 l87
-87 -17 -98 c-22 -126 -22 -160 3 -201 20 -33 71 -62 109 -62 11 0 72 26 135
58 l116 58 112 -59 c129 -67 167 -71 219 -21 48 46 53 77 30 210 l-21 118 95
97 c91 92 95 98 95 140 0 94 -45 130 -182 148 -146 20 -133 11 -193 131 -30
59 -66 117 -81 129 -32 25 -105 28 -147 5z m123 -255 c27 -54 56 -99 73 -111
23 -16 168 -47 226 -48 8 0 -22 -37 -66 -82 -52 -54 -83 -94 -87 -114 -4 -18
0 -72 8 -120 9 -49 16 -94 16 -100 0 -7 -43 10 -95 37 -57 29 -109 49 -128 49
-19 0 -70 -20 -124 -49 -106 -56 -101 -61 -78 69 8 47 12 99 9 115 -4 19 -36
60 -86 111 l-79 82 88 12 c145 20 162 31 219 144 27 53 51 96 54 96 3 0 26
-41 50 -91z'
				/>
				<path
					d='M2116 3799 c-52 -41 -23 -129 44 -129 67 0 96 88 44 129 -15 12 -34
21 -44 21 -10 0 -29 -9 -44 -21z'
				/>
				<path
					d='M4159 3172 c-33 -27 -30 -78 5 -109 33 -28 56 -29 90 -2 19 15 26 30
26 55 0 65 -69 97 -121 56z'
				/>
				<path
					d='M2386 2919 c-15 -12 -41 -49 -58 -83 -17 -33 -31 -62 -32 -63 -1 -1
-32 -7 -69 -13 -37 -6 -78 -16 -93 -22 -32 -15 -54 -56 -54 -103 0 -31 9 -46
59 -99 l60 -61 -11 -71 c-13 -82 -7 -116 27 -150 35 -34 89 -32 170 8 l65 32
65 -32 c97 -48 156 -41 191 23 16 30 17 42 6 111 l-12 78 49 51 c57 59 71 83
71 124 0 63 -54 99 -171 115 -44 7 -47 9 -75 67 -16 34 -42 72 -57 85 -37 31
-94 32 -131 3z m96 -239 c19 -33 70 -60 113 -60 l27 0 -35 -41 c-40 -46 -47
-73 -37 -129 4 -22 5 -40 3 -40 -2 0 -21 9 -43 20 -49 25 -81 25 -129 0 l-39
-19 5 58 c5 56 4 60 -31 98 -20 22 -36 43 -36 47 0 3 11 6 25 6 52 0 94 27
117 75 24 50 25 50 60 -15z'
				/>
				<path
					d='M4944 2664 c-36 -17 -46 -35 -108 -192 -131 -332 -358 -613 -669
-827 -99 -68 -102 -71 -105 -112 -2 -33 1 -44 20 -57 41 -29 72 -19 180 53
265 178 477 417 630 708 75 142 78 140 53 -28 -103 -687 -476 -1274 -1055
-1661 -127 -85 -386 -213 -530 -263 -540 -187 -1139 -177 -1669 28 -335 129
-630 330 -897 611 -113 119 -133 136 -161 136 -22 0 -38 -8 -52 -26 -43 -55
-28 -79 162 -273 193 -195 412 -358 649 -479 816 -419 1820 -365 2578 140 159
105 265 193 400 328 459 458 718 1052 746 1704 6 147 1 165 -55 203 -39 27
-73 29 -117 7z'
				/>
				<path
					d='M3180 2010 c-30 -30 -27 -83 6 -109 15 -12 34 -21 44 -21 10 0 29 9
44 21 52 41 23 129 -44 129 -17 0 -39 -9 -50 -20z'
				/>
				<path
					d='M4710 713 c-30 -11 -53 -39 -85 -104 l-34 -66 -78 -11 c-68 -9 -82
-15 -105 -41 -22 -24 -28 -41 -28 -76 0 -40 5 -50 59 -108 59 -62 60 -64 51
-103 -5 -21 -10 -61 -10 -87 0 -42 5 -54 34 -83 44 -44 77 -44 166 1 l70 35
67 -35 c36 -19 77 -35 90 -35 37 0 81 27 99 62 14 27 14 41 4 110 l-13 79 56
58 c63 66 74 94 57 146 -16 48 -46 65 -133 78 l-74 10 -36 71 c-47 91 -95 122
-157 99z m62 -244 c23 -42 61 -69 97 -69 49 0 53 -11 16 -51 -35 -39 -38 -51
-35 -122 1 -36 -7 -46 -25 -28 -6 5 -27 14 -47 20 -32 11 -43 10 -84 -8 -26
-12 -48 -21 -50 -21 -2 0 0 22 3 48 6 53 -9 92 -46 126 -25 23 -13 36 31 36
33 0 81 39 98 80 7 16 14 30 16 30 1 0 13 -18 26 -41z'
				/>
				<path
					d='M423 510 c-72 -29 -45 -140 34 -140 32 0 73 37 73 66 0 26 -23 62
-47 73 -28 13 -30 13 -60 1z'
				/>
			</g>
		</svg>
	);
};

export default Moon;
