import { Card, Flex, Image, Text } from '@mantine/core';
import PropTypes from 'prop-types';

const Book = ({ data }) => {
  const { title, author, year, image } = data;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {image ? (
          <Image src={image} height={160} alt={title} />
        ) : (
          <Flex bg="gray.3" h={160} justify="center" align="center">
            <Text fz={18} c="white" fw={800}>
              No Images
            </Text>
          </Flex>
        )}
      </Card.Section>
      <Text weight={500} mt="md" mb="xs">
        {title}
      </Text>
      <Flex justify="space-between" gap={8}>
        <Text c="green.7" fz="sm">
          {author}
        </Text>
        <Text fz="sm">{year}</Text>
      </Flex>
    </Card>
  );
};

Book.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Book;
