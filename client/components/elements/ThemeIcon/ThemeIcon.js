import React from 'react';

import PropTypes from 'prop-types';

function ThemeIcon(props) {
  const theme = props.theme;
  const colorsRaw = theme.colors.split(/,/g);

  const colors = {
    backgroundColor: colorsRaw[0],
    cardBackgroundColor: colorsRaw[2],
    cardLinkColor: colorsRaw[3],
    cardTextColor: colorsRaw[3],
    hoverColor: colorsRaw[4],
    textColor: colorsRaw[5],
    buttonColor: colorsRaw[7],
    buttonTextColor: '#FFFFFF',
    highlightColor: colorsRaw[6],
    spaceHeaderBackgroundColor: colorsRaw[1],
    tabColor: colorsRaw[5],
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 -0.5 502 493"
      width={150}
      height={150}
      style={{
        background: colors.backgroundColor,
        borderRadius: '4px',
        padding: '0 10px 0 5px',
      }}
    >
      <defs />
      <g>
        <rect
          x="0"
          y="0"
          width="70"
          height="492"
          fill={colors.cardBackgroundColor}
          stroke="#000000"
          pointerEvents="none"
        />
        <rect x="381" y="321" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="381" y="291" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="245" y="322" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="245" y="292" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="110" y="322" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="110" y="292" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="110" y="212" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="110" y="182" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="245" y="212" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="245" y="182" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="245" y="97" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="245" y="67" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="381" y="96" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="381" y="66" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />

        <rect x="110" y="97" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="110" y="67" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />
        <path
          d="M 132.35 12 L 160.65 12 C 172.99 12 183 18.27 183 26 C 183 33.73 172.99 40 160.65 40 L 132.35 40 C 120.01 40 110 33.73 110 26 C 110 18.27 120.01 12 132.35 12 Z"
          fill={colors.buttonColor}
          stroke="#000000"
          strokeMiterlimit="10"
          pointerEvents="none"
        />
        <rect x="381" y="211" width="120" height="60" fill="#ffffff" stroke="#000000" pointerEvents="none" />
        <rect x="381" y="181" width="120" height="30" fill={colors.cardBackgroundColor} stroke="#000000" pointerEvents="none" />
        <path
          d="M 225.35 12 L 253.65 12 C 265.99 12 276 18.27 276 26 C 276 33.73 265.99 40 253.65 40 L 225.35 40 C 213.01 40 203 33.73 203 26 C 203 18.27 213.01 12 225.35 12 Z"
          fill={colors.buttonColor}
          stroke="#000000"
          strokeMiterlimit="10"
          pointerEvents="none"
        />
      </g>
    </svg>
  );
}

ThemeIcon.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeIcon;
