import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    Card: {
        marginTop:10,
        marginRight: 5,
        width: 600,
        [theme.breakpoints.down("md")] : {
          maxWidth: 365
        },
        textAlign: 'center',
    },
    cardHeader: {
        marginBottom: 5,
    },
  }));