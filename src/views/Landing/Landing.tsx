import { FC } from "react";
import { Box, Button, Grid, Paper, Typography, } from "@mui/material";
import PropertyList from "@/components/PropertyList/PropertyList";
import HeroSlider from "@/components/ImageSlider/ImageSlider";

const Landing: FC = () => {

  return (
    <Box p={3} gap={3} sx={{ pb: 10 , bgcolor: "#f9fafc" , mt:11 }}>
      <HeroSlider />
      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            background: "linear-gradient(to right, #1565c0, #1e88e5)",
            px: 3,
          }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Sell Your Property With Ease
          </Typography>
          <Typography variant="h6" mb={3}>
            Reach thousands of buyers and close deals faster with RealEstatePro
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            List Your Property
          </Button>
        </Box>

        {/* Why Choose Us */}
        <Box sx={{ py: 8, px: 3 }}>
          <Typography variant="h4" textAlign="center" mb={5}>
            Why Choose RealEstatePro?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { title: "Wide Audience", desc: "Showcase your property to thousands of buyers instantly." },
              { title: "Trusted Platform", desc: "Secure, reliable, and professional real estate services." },
              { title: "Fast Sales", desc: "Close deals quicker with our streamlined process." },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* How It Works */}
        <Box sx={{ bgcolor: "#f0f4f8", py: 8, px: 3 }}>
          <Typography variant="h4" textAlign="center" mb={5}>
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { step: "1", title: "Create an Account", desc: "Sign up and add your property details." },
              { step: "2", title: "Upload Property", desc: "Add photos, pricing, and location info." },
              { step: "3", title: "Start Selling", desc: "Connect with buyers and close your deal." },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    {item.step}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call To Action */}
        <Box
          sx={{
            py: 10,
            textAlign: "center",
            background: "linear-gradient(to right, #1976d2, #42a5f5)",
            color: "white",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Ready to Sell Your Property?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <PropertyList />
    </Box>
  );
};

export default Landing;
