import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";

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
import {
  cardMyBooks,
  containerBooks,
  headerMyBook,
  rightMyBookContainer,
  title,
} from "../theme/materialUI/myBooks";

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
      <Box sx={rightMyBookContainer}>
        <Box sx={headerMyBook}>
          <Typography sx={title} variant="h4">
            My books created
          </Typography>
        </Box>

        <Box sx={containerBooks}>
          {books.length > 0 ? (
            books.map((book) => (
              <Card key={book._id} sx={cardMyBooks}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="210"
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
      </Box>
    </>
  );
};
