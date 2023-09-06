import { Container, Header as MHeader, Title } from '@mantine/core';
import useStyles from './Header.styles';

function Header() {
  const { classes } = useStyles();

  return (
    <MHeader height={56} mb={80}>
      <Container>
        <div className={classes.inner}>
          <Title order={4}>Book Keeper App</Title>
        </div>
      </Container>
    </MHeader>
  );
}

export default Header;
