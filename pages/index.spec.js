
import {render, screen} from '@testing-library/react';
import Home from './index'

describe('Home', () => {
  it('renders', () => {
    render(<Home />);

    expect(screen.getByText('Next.js!')).toBeInTheDocument();
  });
});
      