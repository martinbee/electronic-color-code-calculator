import React from 'react';

import './style.css';

const defaultFill = '#d9bb7a';

const ResistorColorChart = ({
  bandAColor,
  bandBColor,
  bandCColor,
  bandDColor,
}) => (
  <svg viewBox="700 0 740 800" id="svg2" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 27.64)" id="layer1">
      <g id="g3825">
        <rect id="rect3004" width="2080.914" height="48.487" x="32.325" y="318.116" fill="#666" />
        <path d="m 798.5625,1308.5625 c -21.47944,0 -37.32619,4.0094 -49.46875,10.5625 -0.0526,0.028 -0.10377,0.065 -0.15625,0.094 -18.04664,8.9915 -27.35769,22.7119 -33.90625,37.4374 -14.51122,27.7533 -22.11341,59.0945 -55.8125,69.0938 -1.31397,0.3899 -2.62206,0.7469 -3.9375,1.125 l 0,46.2188 c 1.31639,0.3788 2.62251,0.766 3.9375,1.1562 64.74738,19.2121 12.93753,117.1875 139.34375,117.1875 0.73556,0 1.52761,-0.033 2.3125,-0.062 1.42733,0.029 2.86724,0.062 4.34375,0.062 30.2139,0 103.1066,-25.625 131.1875,-25.625 l 185.24995,0 c 28.081,0 100.9736,25.625 131.1876,25.625 1.4764,0 2.9164,-0.034 4.3437,-0.062 0.7849,0.03 1.5769,0.062 2.3125,0.062 126.4062,0 74.5964,-97.9754 139.3438,-117.1875 1.3149,-0.3902 2.6211,-0.7774 3.9374,-1.1562 l 0,-46.2188 c -1.3154,-0.3781 -2.6235,-0.7351 -3.9374,-1.125 -33.6993,-9.9993 -41.3013,-41.3405 -55.8126,-69.0938 -6.5485,-14.7255 -15.8596,-28.4459 -33.9062,-37.4374 -0.053,-0.029 -0.1037,-0.065 -0.1562,-0.094 -12.1426,-6.5531 -27.9894,-10.5625 -49.4688,-10.5625 -0.7233,0 -1.4833,0.034 -2.25,0.062 -1.4474,-0.029 -2.9088,-0.062 -4.4062,-0.062 -30.214,0 -103.1066,25.625 -131.1876,25.625 l -185.24995,0 c -28.0809,0 -100.9736,-25.625 -131.1875,-25.625 -1.49753,0 -2.95885,0.034 -4.40625,0.062 -0.76674,-0.029 -1.52669,-0.062 -2.25,-0.062 z" transform="translate(0 -1107.64)" id="rect3776" fill="#d9bb7a" stroke="#565248" />
        <path fill={bandAColor || defaultFill} d="M 798.5625 228.5625 C 794.83997 228.5625 791.30046 228.67303 787.90625 228.90625 L 787.90625 511.1875 C 791.31332 511.35148 794.85648 511.4375 798.5625 511.4375 C 799.29806 511.4375 800.09011 511.404 800.875 511.375 C 802.30233 511.404 803.74224 511.4375 805.21875 511.4375 C 817.35302 511.4375 836.39057 507.29016 856.625 502.34375 L 856.625 237.65625 C 836.39057 232.70984 817.35302 228.5625 805.21875 228.5625 C 803.72122 228.5625 802.2599 228.597 800.8125 228.625 C 800.04576 228.596 799.28581 228.5625 798.5625 228.5625 z" transform="translate(0 -27.64)" id="band-A" />
        <path fill={bandBColor || defaultFill} d="M 901.0625 248.5625 L 901.0625 491.4375 C 915.3171 488.17202 927.92103 485.8125 936.40625 485.8125 L 969.75 485.8125 L 969.75 254.1875 L 936.40625 254.1875 C 927.92103 254.1875 915.3171 251.82798 901.0625 248.5625 z" transform="translate(0 -27.64)" id="band-A" />
        <path fill={bandCColor || defaultFill} d="M 1014.1875 254.1875 L 1014.1875 485.8125 L 1082.875 485.8125 L 1082.875 254.1875 L 1014.1875 254.1875 z" transform="translate(0 -27.64)" id="band-C" />
        <path fill={bandDColor || defaultFill} d="M 1252.8438 228.5625 C 1246.3558 228.5625 1237.9014 229.76927 1228.3438 231.625 L 1228.3438 508.375 C 1237.9014 510.23073 1246.3558 511.4375 1252.8438 511.4375 C 1254.3202 511.4375 1255.7602 511.403 1257.1875 511.375 C 1257.9724 511.405 1258.7644 511.4375 1259.5 511.4375 C 1274.3045 511.4375 1286.6423 510.09139 1297.0312 507.6875 L 1297.0312 234 C 1286.8423 230.56088 1274.5655 228.5625 1259.5 228.5625 C 1258.7767 228.5625 1258.0167 228.597 1257.25 228.625 C 1255.8026 228.596 1254.3411 228.5625 1252.8438 228.5625 z" transform="translate(0 -27.64)" id="band-D" />
      </g>
    </g>
  </svg>
);

export default ResistorColorChart;