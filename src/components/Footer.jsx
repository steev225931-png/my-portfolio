import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ py: 3, bgcolor: "grey.900", color: "grey.100", mt: 4 }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            href="#"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "grey.100" }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            href="#"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "grey.100" }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}