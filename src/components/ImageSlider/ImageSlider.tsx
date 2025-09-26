import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600"
];

function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((prev) => (prev + 1) % images.length),
            4000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "250px", md: "500px" },
                overflow: "hidden"
            }}
        >
            <Box
                component="img"
                src={images[index]}
                alt="Property"
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.8s ease-in-out"
                }}
            />
            <Typography
                variant="h4"
                sx={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.5)"
                }}
            >
                Find Your Dream Home
            </Typography>
        </Box>
    );
}

export default HeroSlider;
