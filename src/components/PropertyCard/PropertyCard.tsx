import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

interface PropertyProps {
    title: string;
    price: string;
    image: string;
    location: string;
}

function PropertyCard({ title, price, image, location }: PropertyProps) {
    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
                <Typography variant="h6" fontWeight="bold">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{location}</Typography>
                <Typography variant="h6" sx={{ color: "#1565c0", mt: 1 }}>
                    {price}
                </Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: "#1565c0" }}>
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}

export default PropertyCard;
