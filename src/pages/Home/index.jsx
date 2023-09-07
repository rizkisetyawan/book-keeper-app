import React from 'react';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import {
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Select,
  Text,
} from '@mantine/core';
import { Book, Form, Header } from '../../components';
import { dummyBooks } from '../../utils/dummy-data';

const initialCategories = {
  title: '',
  author: '',
  year: '',
};

const Home = () => {
  const [books, setBooks] = React.useState(dummyBooks);
  const [categories, setCategories] = React.useState(initialCategories);

  const { title, author, year } = categories;

  const bookTitles = [...new Set(books.map(({ title }) => title))];
  const bookYears = [...new Set(books.map(({ year }) => year))];
  const bookAuthors = [...new Set(books.map(({ author }) => author))];

  const filterBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(title.toLowerCase()) &&
      book.author.toLowerCase().includes(author.toLowerCase()) &&
      book.year.includes(year)
  );

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const handleOpenModal = () => {
    modals.open({
      title: 'Add New Book',
      centered: true,
      size: 'xs',
      children: <Form onAddBook={handleAddBook} />,
    });
  };

  const handleChangeCategories = (name) => (value) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [name]: value || '',
    }));
  };

  return (
    <>
      <Header />
      <Container>
        <Flex mb="xl" gap="sm" wrap="wrap">
          <Select
            placeholder="Title"
            clearable
            searchable
            nothingFound="No options"
            data={bookTitles}
            value={title}
            onChange={handleChangeCategories('title')}
          />
          <Select
            clearable
            searchable
            placeholder="Authors"
            nothingFound="No options"
            data={bookAuthors}
            value={author}
            onChange={handleChangeCategories('author')}
          />
          <Select
            clearable
            searchable
            placeholder="Published Year"
            nothingFound="No options"
            data={bookYears}
            value={year}
            onChange={handleChangeCategories('year')}
          />
          <Group position="right" style={{ flex: 1 }}>
            <Button
              leftIcon={<IconPlus size="1rem" />}
              color="dark"
              onClick={handleOpenModal}
            >
              Book
            </Button>
          </Group>
        </Flex>

        {!books.length ? (
          <Text c="dimmed" ta="center" mt={80}>
            No Books Available
          </Text>
        ) : (
          <Grid>
            {filterBooks.map((row) => (
              <Grid.Col key={row} span={6} xs={6} sm={4} md={3}>
                <Book data={row} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Home;
