import React, { useEffect, useState } from "react";
import { createBook } from "../services/bookServices";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Chip,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Genre } from "../interfaces/genreInterfaces";
import { getGenre } from "../services/genreServices";

const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL || "";
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET || "";

export const NewBook: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [publishedDate, setPublishedDate] = useState<string>("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [synopsis, setSynopsis] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      setNameUser(user.name || "");
    }
  }, [isAuthenticated, user]);

  const handleImageUpload = async () => {
    if (!coverImage) return "";
    const formData = new FormData();
    formData.append("file", coverImage);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      console.log("Image upload response:", response.data);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image.");
      return "";
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        setCoverImage(file);
      } else {
        setError("Please select a valid image file.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const imageUrl = await handleImageUpload();
      const response = await createBook({
        title,
        author,
        genre: selectedGenres.map((genre) => genre._id),
        publishedDate: new Date(publishedDate),
        coverImageUrl: imageUrl,
        synopsis,
        nameUser,
      });
      console.log(response);
      console.log("Selected genres:", selectedGenres);
    } catch (err) {
      setError("Failed to create book.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await getGenre();
        setGenres(response);
      } catch (error) {
        console.log("Error fetching genres:", error);
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenre();
  }, []);

  const handleGenreChange = (
    _event: React.ChangeEvent<object>,
    newValue: Genre[]
  ) => {
    setSelectedGenres(newValue);
  };
  return (
    <Container maxWidth="sm" sx={{ padding: "1rem" }}>
      <Typography variant="h4" color="aliceblue" component="h2" gutterBottom>
        Create New Book
      </Typography>
      <Box sx={{ maxHeight: "78vh", overflowY: "auto", paddingRight: "1rem" }}>
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
            <Autocomplete
              multiple
              options={genres}
              getOptionLabel={(option) => option.name}
              value={selectedGenres}
              onChange={handleGenreChange}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Genres" />
              )}
              renderTags={(value: Genre[], getTagProps) =>
                value.map((option: Genre, index: number) => (
                  <Chip label={option.name} {...getTagProps({ index })} />
                ))
              }
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
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={handleImageChange}
              fullWidth
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
            />
          </Box>
          <Box mb={2}>
            <TextField label="User Name" value={nameUser} fullWidth disabled />
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
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            color="primary"
            fullWidth
          >
            {isLoading ? "Creating..." : "Create Book"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};
