import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Typography variant="overline" color="text.secondary">
          Hello, I&apos;m
        </Typography>

        <Typography variant="h2" sx={{ mt: 1, mb: 1 }}>
          Your Name
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          A Frontend / Full-Stack Developer building clean, modern web
          experiences using React, Vite, and Material UI.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/projects")}
          >
            View My Projects
          </Button>

          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href="#"
          >
            Download CV
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}