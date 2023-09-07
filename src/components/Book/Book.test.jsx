import Book from './index';
import { render, screen, userEvent } from '../../utils/test-utils';

const book = {
  title: 'Cantik itu luka',
  author: 'Eka Kurniawan',
  year: '2016',
  description: 'some description',
  image: 'https://Cantik-itu-Luka-Cover-Besar.jpg',
};

describe('Book components', () => {
  it('should render the book with image', () => {
    render(
      <Book
        data={{
          title: book.title,
          author: book.author,
          year: book.year,
          description: book.description,
          image: book.image,
        }}
      />
    );

    expect(screen.getByText(book.title)).toBeInTheDocument();
    expect(screen.getByText(book.author)).toBeInTheDocument();
    expect(screen.getByText(book.year)).toBeInTheDocument();
    expect(screen.getByAltText(book.title)).toBeInTheDocument();
    expect(screen.getByText(book.description)).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('src')).toBe(book.image);
  });

  it('should render the book with no image', () => {
    render(
      <Book
        data={{
          title: book.title,
          author: book.author,
          year: book.year,
          description: book.description,
          image: '',
        }}
      />
    );

    expect(screen.getByText(book.title)).toBeInTheDocument();
    expect(screen.getByText(book.author)).toBeInTheDocument();
    expect(screen.getByText(book.year)).toBeInTheDocument();
    expect(screen.getByText('No Images')).toBeInTheDocument();
  });
});
