import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a dummy form. Connect this to EmailJS or a backend.");
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Contact
        </Typography>

        <Paper sx={{ p: 3, borderRadius: 3 }} elevation={0}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="Name" fullWidth required />

              <TextField
                label="Email"
                type="email"
                fullWidth
                required
              />

              <TextField
                label="Message"
                fullWidth
                required
                multiline
                minRows={4}
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}