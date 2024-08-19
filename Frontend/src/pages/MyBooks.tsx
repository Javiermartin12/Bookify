import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { HeaderMyBooks } from "../components/HeaderMyBooks";
import { BookInterface } from "../interfaces/booksInterfaces";
import { useAuth0 } from "@auth0/auth0-react";
import { getBookByUser } from "../services/bookServices";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { cardMyBooks, containerBooks } from "../theme/materialUI/myBooks";

export const MyBooks: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        if (isAuthenticated && user) {
          const userBooks = await getBookByUser(user.name || "");

          console.log(userBooks);
          setBooks(userBooks);
        }
      } catch (error) {
        setError("Failed to fetch books. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserBooks();
  }, [user, isAuthenticated]);
  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;
  return (
    <>
      <SideBar />
      <HeaderMyBooks />

      <Box sx={containerBooks}>
        {books.length > 0 ? (
          books.map((book) => (
            <Card key={book._id} sx={cardMyBooks}>
              <CardContent>
                <CardMedia
                  component="img"
                  height="290"
                  image={book.coverImageUrl}
                  alt={book.title}
                />
                <Typography variant="h6">{book.title}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No books found.</Typography>
        )}
      </Box>
    </>
  );
};
