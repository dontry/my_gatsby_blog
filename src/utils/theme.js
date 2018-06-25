import { css } from 'styled-components';

const theme = {
  colors: {
    primaryBlue: '#413288',
    darkGrey: '#413c58',
    primaryGreen: '#bfd7b5',
    secondaryGreen: '#a3c4bc',
    light: '#ebebeb',
  },
  screenSizes: {
    xsmall: { min: 0, max: 599 },
    small: { min: 600, max: 779 },
    medium: { min: 780, max: 979 },
    large: { min: 980, max: 1279 },
    xlarge: { min: 1280, max: 1339 },
    xxlarge: { min: 1340, max: Infinity },

    largerSidebar: { min: '1100px', max: '1330px' },
    sidebarFixed: { min: '2000px', max: Infinity },
  },
  fontSizes: {
    xsmall: '10px',
    small: '14px',
    medium: '18px',
    large: '24px',
  },
};

const SIZES = theme.screenSizes;

// type Size = $Keys<typeof SIZES>;

export const media = {
  size(key) {
    return (...args) => css`
      @media screen and (min-width: ${SIZES[key].min}px) and (max-width: ${SIZES[key].max}px) {
        ${css(...args)}
      }
    `

  },
  between(smallKey, largeKey, excluedLarge = false) {
    if (excluedLarge) {
      return (...args) => css`
        @media screen and (min-width: ${SIZES[smallKey]
            .min}px) and (max-width: ${SIZES[largeKey].min - 1}px) {
          ${css(...args)}
        }
      `;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return (...args) => css`
          @media screen and (min-width: ${SIZES[smallKey].min}px) {
            ${css(...args)}
          }
        `;
      } else {
        return (...args) => css`
          @media screen and (min-width: ${SIZES[smallKey]
              .min}px) and (max-width: ${SIZES[largeKey].max}px) {
            ${css(...args)}
          }
        `;
      }
    }
  },
  greaterThan(key) {
    return (...args) => css`
      @media screen and (min-width: ${SIZES[key].min}px) {
        ${css(...args)}
      }
    `;
  },
  lessThan(key) {
    return (...args) => css`
      @media screen and (max-width: ${SIZES[key].min - 1}px) {
        ${css(...args)}
      }
    `;
  },
};

export default theme;
