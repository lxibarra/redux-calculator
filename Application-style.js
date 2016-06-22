import {
  deepOrange500,
  deepOrange700,
  deepOrange600,
  amber500,
  amber400,
  amber300,
  darkBlack,
  white,
  grey300,
  grey200,
  deepOrange900,
  fullBlack
} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const appStyles = () => getMuiTheme({
    palette: {
        primary1Color: deepOrange500,
        primary2Color: deepOrange700,
        primary3Color: deepOrange600,
        accent1Color: amber500,
        accent2Color: amber400,
        accent3Color: amber300,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: grey200,
        pickerHeaderColor: deepOrange900,
        clockCircleColor: grey200,
        shadowColor: fullBlack
    }
});

export default appStyles
