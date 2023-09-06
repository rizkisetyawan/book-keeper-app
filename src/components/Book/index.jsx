import { Card, Flex, Image, Text } from '@mantine/core';

const Book = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Text weight={500} mt="md" mb="xs">
        Norway Fjord Adventures
      </Text>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Flex justify="space-between" mt="md" gap={8}>
        <Text fz="sm">Sherlock Holmes</Text>
        <Text fz="sm">2023</Text>
      </Flex>
    </Card>
  );
};

export default Book;
