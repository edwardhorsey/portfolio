import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('App', () => {
    it('renders without crashing', () => {
        render(<Home />);
        expect(screen.getByText(/Full Stack Developer/)).toBeInTheDocument();
    });
});
