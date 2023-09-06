import { Container, Flex, Header as MHeader, Title } from '@mantine/core';

function Header() {
  return (
    <MHeader height={48} mb={80}>
      <Container>
        <Flex justify="space-between" align="center" h={42}>
          <Title order={4}>Book Keeper App</Title>
        </Flex>
      </Container>
    </MHeader>
  );
}

export default Header;
