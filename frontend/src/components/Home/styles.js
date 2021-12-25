import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    Card: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 30,
        [theme.breakpoints.down("md")] : {
            maxWidth: 355,
            marginLeft: 5,
        },
        width: 550,
        textAlign: 'center',
        justifyContent: 'center',
    },
    cardHeader: {
        marginBottom: 5,
    },
    description: {
        marginTop: 20,
        width: 500,
        textAlign: 'center',
        [theme.breakpoints.down("md")] : {
            maxWidth: 355,
            marginLeft: 5,
        },
    }
}))