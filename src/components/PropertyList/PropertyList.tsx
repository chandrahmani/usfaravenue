import React from "react";
import { Grid, Typography } from "@mui/material";
import PropertyCard from "../PropertyCard/PropertyCard";

const properties = [
    {
        title: "Luxury Villa",
        price: "$1,200,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        location: "Los Angeles, CA"
    },
    {
        title: "Modern Apartment",
        price: "$850,000",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
        location: "New York, NY"
    },
    {
        title: "Cozy House",
        price: "$450,000",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
        location: "Austin, TX"
    }
];

function PropertyList() {
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#1565c0" }}>
                Featured Properties
            </Typography>
            <Grid container spacing={4}>
                {properties.map((property, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <PropertyCard {...property} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default PropertyList;
