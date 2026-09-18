import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

const skills = {
  Frontend: ["React", "Vite", "Material UI", "HTML5", "CSS3", "JavaScript"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Postman"],
};

export default function SkillsPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Skills
        </Typography>

        <Stack spacing={3}>
          {Object.entries(skills).map(([category, list]) => (
            <Paper
              key={category}
              elevation={0}
              sx={{ p: 2.5, borderRadius: 3, bgcolor: "grey.50" }}
            >
              <Typography
                variant="subtitle1"
                sx={{ mb: 1.5, fontWeight: 600 }}
              >
                {category}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
              >
                {list.map((skill) => (
                  <Chip key={skill} label={skill} sx={{ mb: 1 }} />
                ))}
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}