import React, { useState } from "react";
import { createBook } from "../services/bookServices";
import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

export const NewBook: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedDate, setPublishedDate] = useState<string>("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [byUser, setByUser] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createBook({
        title,
        author,
        genre,
        publishedDate: new Date(publishedDate),
        coverImageUrl,
        synopsis,
        byUser,
      });
      return response.data;
      console.log(response);
    } catch (err) {
      setError("Failed to create book."), error;
      console.log(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ padding: "1rem" }}>
      <Typography variant="h4" color="aliceblue" component="h2" gutterBottom>
        Create New Book
      </Typography>
      <Box sx={{ maxHeight: "70vh", overflowY: "auto", paddingRight: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Published Date"
              type="date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="file"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Synopsis"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Created By"
              value={byUser}
              onChange={(e) => setByUser(e.target.value)}
              fullWidth
              required
            />
          </Box>
          {error && (
            <Box mb={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
          <Link href="/home">
            <Button
              type="button"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Back
            </Button>
          </Link>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Book
          </Button>
        </form>
      </Box>
    </Container>
  );
};
