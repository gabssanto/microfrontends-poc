import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

interface Props {
  products: Product[];
  handleAddToCart: (clickedItem: Product) => void;
}

const MediaCard: React.FC<Props> = ({ products, handleAddToCart }) => {
  const filteredProducts = products.filter((_, index) => index <= 50);
  return (
    <>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Products
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "75vh",
          overflowY: "scroll",
          p: 3,
        }}
      >
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345, height: 350, m: 1 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.images[0]}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {product.price} USD
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default MediaCard;
