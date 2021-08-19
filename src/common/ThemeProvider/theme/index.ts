
const color = {
    gray9: '#FAFAFA',
    gray10: '#CDCDCD',
    gray20: '#9C9C9C',
    black10: '##131313',
    white: '#FFFFFF',
    lightYellow: '#FCFCFA',
    red9: '#FFFAFA',
    red10: '#FF8B8B',
    green10: '#72DA71'
} as const

const fonts = {
    fontFamily: 'Arial',
    size: {
        _14: '14px',
        _18: '18px',
        _24: '24px',
    },
} as const

const radius = {
    small: '4px',
    medium: '10px',
    large: '24px',
} as const

const shadow = {
    extraSmall: '',
    small: '0px 2px 6px rgb(0, 0, 0, 0.1)',
    medium: '0px 0px 5px rgb(0, 0 ,0 , 0.1)',
    large: '',
} as const

const theme = {
    color,
    fonts,
    radius,
    shadow,
}

export default theme
