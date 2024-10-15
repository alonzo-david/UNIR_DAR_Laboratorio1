import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";

const useStyles = makeStyles({
  blogContainer: {
    paddingTop: "1rem",
  },
  blogTitle: {
    fontWeight: 800,
    paddingBotton: "1rem",
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
});

function Blog() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articulos
      </Typography>

      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image="https://i0.wp.com/mundomotor.bike/wp-content/uploads/2024/06/duke-390-1.webp?resize=745%2C390&ssl=1"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ktm Duke 390
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Con la nueva KTM 390 DUKE 2024, el mundo que te rodea se
                  convierte en tu propia ginkana. Aportando a la calle una
                  agilidad excepcional, un comportamiento ligero y un
                  rendimiento contundente, esta bestia de media cilindrada está
                  preparada para afrontar cualquier carretera sinuosa.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="data:image/jpeg;base64,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" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Erick Batistuta
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    15 de Mayo de 2024
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorder onClick={() => {}} />
              </Box>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image="https://bd.gaadicdn.com/processedimages/kawasaki/ninja-400/640X309/ninja-40062b2b760470d9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kawasaki Ninja 400
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  La Ninja 400 ofrece unas prestaciones claramente mejoradas, en
                  comparación con su predecesora: a nivel de chasis, mayor
                  potencia y ligereza. Esta Ninja posee mucho más que altas
                  prestaciones. Ofrece acabados de alta calidad, un motor de
                  grandes prestaciones, ligera, fácil manejo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="data:image/jpeg;base64,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" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    David Hernandez
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    20 de Febrero de 2024
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorder onClick={() => {}} />
              </Box>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image="https://bd.gaadicdn.com/processedimages/yamaha/yamaha-mt-03/494X300/yamaha-mt-03657c502461b91.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kawasaki Ninja 400
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  La MT03 posee luces LED, brillantes y energéticamente
                  eficientes, tanto en el faro principal como en el stop y ahora
                  las direccionales, y se caracterizan por su diseño para una
                  excelente iluminación. Además cuenta con el sistema AHO
                  (Encendido automático de luces).
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="data:image/jpeg;base64,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" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Gladys Orozco
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    19 de Enero de 2024
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorder onClick={() => {}} />
              </Box>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
export default Blog;
