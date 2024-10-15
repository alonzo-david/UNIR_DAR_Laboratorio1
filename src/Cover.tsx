import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
});

function Cover() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Box textAlign="center">
          <Typography variant="h2">
            David J. Alonzo Monzón
          </Typography>
          <Typography variant="h5">
            Desarrollo de Aplicaciones en Red
          </Typography>
          <Typography variant="h6">
            Universidad Internacional de la Rioja en México
            </Typography>
        </Box>
      </Box>
    </>
  );
}
export default Cover;
