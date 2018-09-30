import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core//colors/indigo";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core//colors/red";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            ...green,
            A400: "#00e677"
        },
        error: red
    }
});

export default theme;
