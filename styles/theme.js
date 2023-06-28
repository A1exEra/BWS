const theme = {
  colors: {
    primary: '#536758',
    secondary: '#2A2A2A',
    third: '#2B2B2B',
    whitePrimary: '#FFFFFF',
    whiteSecondary: '#F9F9F9',
    black: '#000000',
  },
  fontSizes: {
    text2xl: 'clamp(5.63rem, calc(5.27rem + 1.79vw), 6.88rem)', // min 90 max 110
    text46px: 'clamp(2.38rem, calc(2.23rem + 0.71vw), 2.88rem)', // min 38 max 46
    textXl: 'clamp(1.25rem, calc(1.18rem + 0.36vw), 1.5rem)', //min 20 max 24
    text20: 'clamp(1.06rem, calc(1.01rem + 0.27vw), 1.25rem)', //min 17 max 20
    textBase: 'clamp(0.88rem, calc(0.84rem + 0.18vw), 1rem)', // min 14, max 16
    textXbase: 'clamp(0.81rem, calc(0.78rem + 0.18vw), 0.94rem)', // min 13, max 1
    textSm: 'clamp(0.75rem, calc(0.71rem + 0.18vw), 0.88rem)', // min 12, max 14
  },
  fonts: {
    primary: 'Mulish, sans-serif',
    secondary: 'Montserrat, sans-serif',
  },
};
theme.mixins = {
  primaryFontRegular300: {
    fontSize: theme.fontSizes.textBase,
    color: '#939393',
    fontStyle: 'normal',
    fontWeight: '300',
  },
  primaryHeading700: {
    fontSize: theme.fontSizes.text2xl,
    fontStyle: 'normal',
    letterSpacing: '-2.5px',
    fontWeight: '700',
    lineHeight: '1.25',
  },
  productTitle46: {
    fontSize: '46px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '1.25',
    letterSpacing: '-0.8px',
  },
  primaryHeroRegular: {
    fontSize: theme.fontSizes.textXl,
    fontStyle: 'normal',
    fontWeight: '300',
    color: '#FFFFFF',
  },
  primaryComponentHeading: {
    fontSize: theme.fontSizes.textBase,
    color: theme.colors.primary,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  primaryComponentTitle: {
    fontSize: theme.fontSizes.text20,
    fontStyle: 'normal',
    fontWeight: '300',
    color: '#536758',
  },
  primaryProductCard: {
    fontSize: theme.fontSizes.textSm,
    color: '#536758',
    fontStyle: 'normal',
    letterSpacing: '1.5px',
    fontWeight: '300',
  },
  primaryProductName: {
    fontSize: theme.fontSizes.text46px,
    color: '#2B2B2B',
    fontStyle: 'normal',
    letterSpacing: '-0.8px',
    fontWeight: '400',
  },
  primaryProductSubtitle: {
    fontSize: theme.fontSizes.textXl,
    color: '#536758',
    fontStyle: 'normal',
    letterSpacing: '0px',
    fontWeight: '300',
  },
  primarySidebarTitle: {
    fontSize: theme.fontSizes.textSm,
    fontStyle: 'normal',
    letterSpacing: '0.6px',
    color: '#3C3D48',
    fontWeight: '600',
  },
  secondarySidebar: {
    fontSize: theme.fontSizes.textSm,
    color: '#939393',
    fontStyle: 'normal',
    letterSpacing: '-0.1px',
    fontWeight: '300',
  },
  secondarySidebarSelected: {
    fontSize: theme.fontSizes.textSm,
    color: '#536758',
    fontStyle: 'normal',
    letterSpacing: '-0.1px',
    fontWeight: '300',
  },
};
export default theme;
