import { Box, TextField, MenuItem, Button, Grid } from "@mui/material";
import { useState } from "react";

type Filters = {
  location: string;
  type: string;
  minPrice: string;
  maxPrice: string;
};

interface PropertyFilterProps {
  onFilter: (filters: Filters) => void;
}

const propertyTypes = ["Apartment", "House", "Villa", "Plot", "Commercial"];

function PropertyFilter({ onFilter }: PropertyFilterProps) {
  const [filters, setFilters] = useState<Filters>({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onFilter(filters);
  };

  return (
    <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 3, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={filters.location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            label="Property Type"
            name="type"
            value={filters.type}
            onChange={handleChange}
          >
            {propertyTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            fullWidth
            label="Min Price"
            name="minPrice"
            type="number"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            fullWidth
            label="Max Price"
            name="maxPrice"
            type="number"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2} display="flex" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PropertyFilter;
