import { Button, Container, Flex, Grid, Group, Select } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import { Book, Form, Header } from '../../components';

const Home = () => {
  const handleAddBook = () => {
    modals.open({
      title: 'Add New Book',
      centered: true,
      size: 'xs',
      children: <Form />,
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Flex mb="xl" gap="sm" wrap="wrap">
          <Select
            placeholder="Title"
            searchable
            nothingFound="No options"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
          <Select
            placeholder="Authors"
            searchable
            nothingFound="No options"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
          <YearPickerInput
            placeholder="Published Year"
            w="100%"
            maw={209}
            // value={value}
            // onChange={setValue}
          />
          <Group position="right" style={{ flex: 1 }}>
            <Button
              leftIcon={<IconPlus size="1rem" />}
              color="dark"
              onClick={handleAddBook}
            >
              Book
            </Button>
          </Group>
        </Flex>
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <Grid.Col key={row} span={6} xs={6} sm={4} md={3}>
              <Book />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
