const calcRem = (size) => `${size / 10}rem`;
const fontSizes = {
  headLint: calcRem(45),
  title: calcRem(30),
  display: calcRem(28),
  subTitle1: calcRem(20),
  subTitle2: calcRem(24),
  paragraph2: calcRem(16),
  paragraph1: calcRem(14),
  caption: calcRem(12),
  page: calcRem(10),
};

const colors = {
  white: '#FFFFFF',
  dark: '#3D444C',
  grey: '#A7ADBF',
  orangeMain: '#FC9400',
  orangeDark: '#593A00',
  orangeBright: '#D9A305',
  yellow: '#F2CA04',
};

const deviceSizes = {
  tablet: '768px',
  mobile: '360px',
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
};

export default theme;
