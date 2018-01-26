const theme = {
  breakpoint: {
    smallMobile: '20rem',
    mobile: '48rem',
    tablet: '64rem',
  },
  maxWidth: '64rem',
  color: {
    dark: '#3E495E',
    white: '#FAFAFA',
    pure: '#FFFFFF',
    blue: '#4197D2',
    yellow: '#FFC717',
  },
};

export const media = (breakpoint) => `@media screen and (max-width: ${theme.breakpoint[breakpoint]})`;

export default theme;
