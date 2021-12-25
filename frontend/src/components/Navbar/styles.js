import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(16),
    },
    title: {
        flexGrow: 1,
    },
    signup: {
        paddingLeft: theme.spacing(30),
        paddingRight: theme.spacing(20),
        color: 'white',
        textDecoration: 'none',
        left: theme.spacing(50),
    },
    create: {
        paddingLeft: theme.spacing(35),
        color: 'white',
        textDecoration: 'none',
        right: theme.spacing(25),
        left: theme.spacing(20)
    },
    pic: {
        height: theme.spacing(9),
        marginTop: theme.spacing(1),
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(1),
    },
    appbar: {
        height: theme.spacing(6),
    }
}))