import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('App', () => {
    beforeEach(() => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null,
        });

        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('renders without crashing', () => {
        render(<Home />);
        expect(screen.getByText(/Full Stack Developer/)).toBeInTheDocument();
    });
});
