
import { Box, Container, Typography, Link, Grid } from '@mui/material';

function Footer() {
	return (
		<Box sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 6 ,px:3 }}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={4}>
					<Typography variant="h6">RealEstatePro</Typography>
					<Typography>
						Your trusted partner in finding dream homes and investment properties.
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant="h6">Quick Links</Typography>
					<Link href="#" color="inherit" underline="hover">Home</Link><br />
					<Link href="#" color="inherit" underline="hover">Properties</Link><br />
					<Link href="#" color="inherit" underline="hover">Contact</Link>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant="h6">Contact</Typography>
					<Typography>Email: info@realestatepro.com</Typography>
					<Typography>Phone: +1 234 567 890</Typography>
				</Grid>
			</Grid>
			<Typography textAlign="center" sx={{ mt: 3 }}>
				© {new Date().getFullYear()} RealEstatePro. All rights reserved.
			</Typography>
		</Box>
	);
}

export default Footer;