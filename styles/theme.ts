const theme = {
  colors: {
    primary: '#536758',
    secondary: '#2a2a2a',
    third: '#2b2b2b',
    whitePrimary: '#ffffff',
    whiteSecondary: '#f9f9f9',
    black: '#000000',
  },
  fonts: {
    primary: 'Mulish, sans-serif',
    secondary: 'Montserrat, sans-serif',
  },
  mixins: {
    primaryFontRegular300: {
      fontSize: '15px',
      color: '#939393',
      fontStyle: 'normal',
      fontWeight: '300',
    },
    primaryHeading700: {
      fontSize: '110px',
      fontStyle: 'normal',
      letterSpacing: '-2.5px',
      fontWeight: '700',
      lineHeight: '1.25',
    },
    primaryHeroRegular: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '300',
      color: '#ffffff',
    },
    primaryComponentHeading: {
      fontSize: '16px',
      color: '#536758',
      fontStyle: 'normal',
      fontWeight: '300',
    },
    primaryComponentTitle: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '300',
      color: '#536758',
    },
    primaryProductCard: {
      fontSize: '14px',
      color: '#536758',
      fontStyle: 'normal',
      letterSpacing: '1.5px',
      fontWeight: '300',
    },
    primaryProductName: {
      fontSize: '46px',
      color: '#2b2b2b',
      fontStyle: 'normal',
      letterSpacing: '-0.8px',
      fontWeight: '400',
    },
    primaryProductSubtitle: {
      fontSize: '24px',
      color: '#536758',
      fontStyle: 'normal',
      letterSpacing: '0px',
      fontWeight: '300',
    },
    primarySidebarTitle: {
      fontSize: '14px',
      fontStyle: 'normal',
      letterSpacing: '0.6px',
      color: '#3c3d48',
      fontWeight: '600',
    },
    secondarySidebar: {
      fontSize: '14px',
      color: '#939393',
      fontStyle: 'normal',
      letterSpacing: '-0.1px',
      fontWeight: '300',
    },
    secondarySidebarSelected: {
      fontSize: '14px',
      color: '#536758',
      fontStyle: 'normal',
      letterSpacing: '-0.1px',
      fontWeight: '300',
    },
  },
};

export default theme;
