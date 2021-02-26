import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from '../../pages/dashBoard/index';



jest.mock('react-router-dom', () => {
    return {
        useHistory: jest.fn(),
        Link: ({ children }: { children: React.ReactNode }) => children
    }
})

jest.mock('react-redux', () => {
    return {
        useSelector: jest.fn(),
        state: ({ children }: { children: React.ReactNode }) => children
    }
})

jest.mock('react-redux', () => {
    return {
        useDispatch: jest.fn(),
        dispatch: ({ children }: { children: React.ReactNode }) => children
    }
})


jest.mock('react', () => {
    return {
        React: jest.fn(),
        useState: ({ children }: { children: React.ReactNode }) => children
    }
})

jest.mock('react', () => {
    return {
        React: jest.fn(),
        useEffect: ({ children }: { children: React.ReactNode }) => children
    }
})





describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Dashboard />)
        debug();
    })
})