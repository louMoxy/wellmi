export default {
  name: 'Wellmi',
  rounding: 8,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      brand: {
        light: '#00E9A3',
        dark: '#03C1E1'
      },
      'accent-1': {
        light: '#03C1E1',
        dark: '#03C1E1'
      },
      'accent-2': {
        light: '#20222E',
        dark: '#20222E'
      },
      'accent-3': '#009BDC',
      background: {
        dark: '#4F5458',
        light: '#F9FCFF'
      },
      'background-back': {
        dark: '#4F5458',
        light: '#F9FCFF'
      },
      'background-front': {
        light: '#F9FCFF',
        dark: '#4F5458'
      },
      'background-contrast': {
        dark: '#00E9A3',
        light: '#fff'
      },
      text: {
        dark: '#fff',
        light: '#4F5458'
      },
      'text-light': {
        light: '#8A8A8A'
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#233E86'
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#A0ACCB'
      },
      'text-xweak': {
        dark: '#999999',
        light: '#919191'
      },
      border: {
        dark: '#444444',
        light: '#EBEBEB'
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning'
    },
    font: {
      family: '"Lato"',
      face:
        "/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    },
    active: {
      background: 'active-background',
      color: 'active-text'
    },
    hover: {
      background: 'active-background',
      color: 'active-text'
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text'
    },
    control: {
      border: {
        radius: '8px'
      }
    },
    drop: {
      border: {
        radius: '8px'
      }
    }
  },
  chart: {},
  diagram: {
    line: {}
  },
  meter: {},
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical'
        }
      },
      position: 'outer',
      side: 'all',
      style: 'solid',
      size: 'xsmall'
    },
    content: {
      pad: 'small'
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: 'medium'
      }
    },
    error: {
      color: 'status-critical',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      size: 'small',
      weight: 'normal'
    },
    help: {
      color: 'text-weak',
      margin: {
        start: 'small'
      },
      size: 'medium'
    },
    info: {
      color: 'text-xweak',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small'
      }
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      size: 'small',
      weight: 'bold',
      color: 'text-strong'
    },
    margin: {
      bottom: 'small'
    },
    round: '8px'
  },
  button: {
    border: {
      radius: '8px'
    },
    color: {
      light: '#fff',
      dark: '#333'
    }
  },
  checkBox: {
    check: {
      radius: '8px'
    },
    toggle: {
      radius: '8px'
    }
  },
  radioButton: {
    check: {
      radius: '8px'
    }
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FAFCFF'
    }
  },
  accordion: {
    border: {
      color: '#EBEBEB'
    }
  }
}
