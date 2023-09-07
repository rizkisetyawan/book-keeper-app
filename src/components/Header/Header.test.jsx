import Header from './index';
import { render, screen } from '../../utils/test-utils';

describe('Header components', () => {
  it('should render the header with title', () => {
    render(<Header />);
    expect(screen.getByText('Book Keeper App')).toBeInTheDocument();
  });
});
