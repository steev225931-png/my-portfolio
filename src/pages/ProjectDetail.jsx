import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h5">Project not found</Typography>

          <Button
            sx={{ mt: 2 }}
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/projects")}
          >
            Back to Projects
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 2 }}
        >
          Back
        </Button>

        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {project.title}
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {project.description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 4 }}
        >
          {project.tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Stack>

        <Card elevation={1} sx={{ borderRadius: 3, mb: 4 }}>
          <CardContent>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              This section can hold the detailed explanation of the project,
              challenges faced, your role, tech stack decisions, and outcomes.
            </Typography>
          </CardContent>
        </Card>

        <Paper
          elevation={0}
          sx={{ p: 2.5, borderRadius: 3, bgcolor: "grey.50", mb: 4 }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Key Features
          </Typography>

          <Grid container spacing={1.5}>
            {project.features.map((f, index) => (
              <Grid item xs={12} key={index}>
                <Typography>✅ {f}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            endIcon={<LaunchIcon />}
            href={project.live}
            target="_blank"
          >
            View Live
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
          >
            View Code
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}