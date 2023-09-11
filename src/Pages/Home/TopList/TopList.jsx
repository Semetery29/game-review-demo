import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";

const TopList = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://review-server-vert.vercel.app/top")
      .then((response) => setCard(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-20 md: pb-6">
      <Typography
        variant="h3"
        color="text.primary"
        sx={{ mt: 6, mb: 6, textAlign: "center", fontWeight: "bold" }}
      >
        Top Reviewed Trilogy That <br /> Everyone Should Try
      </Typography>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
        {card.map((item) => (
          <Card
            key={item._id}
            classes={{ root: "custom-card" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.5s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                ".custom-card-description": {
                  maxHeight: "200px", // Show description on hover
                },
              },
            }}
          >
            <CardMedia
              component="img"
              loading="lazy"
              src={item.img}
              alt={item.title}
              classes={{ root: "custom-card-media" }}
              sx={{
                width: { md: "100%", sm: "192px" },
                height: { md: "324px", sm: "108px" },
                objectFit: "cover",
                borderRadius: "4px 4px 0 0",
              }}
            />
            <CardContent classes={{ root: "custom-card-content" }}>
              <Typography
                variant="h5"
                fontWeight="600"
                classes={{ root: "custom-card-title" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                classes={{ root: "custom-card-description" }}
                sx={{
                  maxHeight: "0",
                  overflow: "hidden",
                  transition: "max-height 0.8s ease",
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopList;
