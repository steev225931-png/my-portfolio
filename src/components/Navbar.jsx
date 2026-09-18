import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar
        sx={{
          backdropFilter: "blur(10px)",
          bgcolor: "rgba(255,255,255,0.8)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}
        >
          Your Name
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {links.map((link) => (
            <Button
              key={link.path}
              onClick={() => navigate(link.path)}
              size="small"
              variant={
                location.pathname === link.path ? "contained" : "text"
              }
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}