import Form from './index';
import { createBlob } from 'blob-util';
import { render, screen, userEvent, vi } from '../../utils/test-utils';

describe('Form components', () => {
  it('should render correctly', () => {
    render(<Form onAddBook={() => {}} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Author')).toBeInTheDocument();
    expect(screen.getByText('Published Year')).toBeInTheDocument();
    expect(screen.getByText('Book Cover')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should handle typing input correctly', async () => {
    render(<Form onAddBook={() => {}} />);

    const book = {
      title: 'Cantik itu luka',
      author: 'Eka Kurniawan',
      year: '2016',
    };

    const titleInput = screen.getByTestId('title');
    const authorInput = screen.getByTestId('author');
    const yearInput = screen.getByTestId('year');

    await userEvent.type(titleInput, book.title);
    await userEvent.type(authorInput, book.author);
    await userEvent.type(yearInput, book.year);

    expect(titleInput).toHaveValue(book.title);
    expect(authorInput).toHaveValue(book.author);
    expect(yearInput).toHaveValue(+book.year);
  });

  it('should handle upload image < 100kb', async () => {
    render(<Form onAddBook={() => {}} />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByTestId('image');

    await userEvent.upload(input, file);

    expect(
      screen.queryByText('Image size exceeds the maximum limit (100KB).')
    ).not.toBeInTheDocument();
  });

  it('should handle upload image > 100kb', async () => {
    render(<Form onAddBook={() => {}} />);
    const largeBlob = await createBlob(['large'.repeat(200 * 1024)]);
    const file = new File([largeBlob], 'hello.png', {
      type: 'image/png',
    });
    const input = screen.getByTestId('image');
    await userEvent.upload(input, file);

    expect(
      screen.queryByText('Image size exceeds the maximum limit (100KB).')
    ).toBeInTheDocument();
  });

  it('should call handleSubmit function when submit button is clicked', async () => {
    const onAddBookMock = vi.fn();
    render(<Form onAddBook={onAddBookMock} />);
    await userEvent.click(screen.getByText('Submit'));

    expect(onAddBookMock).toHaveBeenCalled();
  });
});
