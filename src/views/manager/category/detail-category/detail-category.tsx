import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { categoryById } from "../../../../redux/asyncThunk/category.thunk";

const DetailCategory = () => {
  const dispatch = useAppDispatch();
  const category: any = useAppSelector((state) => state.category.category);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(categoryById(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      {category ? (
        <Card sx={{ maxWidth: 390 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={category.image}
            title="category"
            component="img"
            onError={(e: any) => {
              e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQO9kNYOyyyHQEpcxbwUNqT5ZogIXxAZBS5C8BfF6jyEKMZ2fD3Bry7CpnZcUMp70Vvo&usqp=CAU";
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fecha de creación: {category.creationAt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fecha de actualización: {category.updatedAt}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div>
          <Typography variant="h5" gutterBottom>
            La categoría no existe.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DetailCategory;
