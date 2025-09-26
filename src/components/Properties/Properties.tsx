import { Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import PropertyFilter from "../PropetiesFilter/PropetiesFilter";
import PropertyCard from "../PropertyCard/PropertyCard";

type Filters = {
  location?: string;
  type?: string;
  minPrice?: string;
  maxPrice?: string;
};

const properties = [
  {
    image: "https://source.unsplash.com/400x300/?apartment",
    title: "Modern Apartment",
    price: 250000,
    location: "New York, USA",
    type: "Apartment",
  },
  {
    image: "https://source.unsplash.com/400x300/?house",
    title: "Family House",
    price: 400000,
    location: "Los Angeles, USA",
    type: "House",
  },
  {
    image: "https://source.unsplash.com/400x300/?villa",
    title: "Luxury Villa",
    price: 1200000,
    location: "Miami, USA",
    type: "Villa",
  },
];

function Properties() {
  const [filteredProps, setFilteredProps] = useState(properties);

  const handleFilter = (filters: Filters) => {
    let result = properties;

    if (filters.location) {
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.type) {
      result = result.filter((p) => p.type === filters.type);
    }

    if (filters.minPrice) {
      result = result.filter((p) => p.price >= parseInt(filters.minPrice ?? "0"));
    }

    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= parseInt(filters.maxPrice ?? "0"));
    }

    setFilteredProps(result);
  };

  return (
    <Box sx={{ py: 6, px: 3 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Featured Properties
      </Typography>

      {/* Filter Bar */}
      <PropertyFilter onFilter={handleFilter} />

      <Grid container spacing={4} justifyContent="center">
        {filteredProps.length > 0 ? (
          filteredProps.map((prop, i) => (
            <Grid item key={i}>
              <PropertyCard {...{ ...prop, price: prop.price.toString() }} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" textAlign="center" sx={{ mt: 4 }}>
            No properties found
          </Typography>
        )}
      </Grid>

      
    </Box>
  );
}

export default Properties;
