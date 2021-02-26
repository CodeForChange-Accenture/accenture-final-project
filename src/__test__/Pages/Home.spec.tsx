import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/home';


jest.mock('react-router-dom', () => {
    return {
        useHistory: jest.fn(),
        Link: ({ children }: { children: React.ReactNode }) => children
    }
})

describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Home />)
        debug();
    })
})