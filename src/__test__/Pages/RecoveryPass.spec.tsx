import { render } from '@testing-library/react';
import React from 'react';
import RecoveryPass from '../../pages/recoveryPass';



jest.mock('react-router-dom', () => {
    return {
        useHistory: jest.fn(),
        Link: ({ children }: { children: React.ReactNode }) => children
    }
})


jest.mock('react-toastify', () => {
    return {
        toast: jest.fn(),
        ToastContainer: ({ children }: { children: React.ReactNode }) => children
    }
})


describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<RecoveryPass />)
        debug();
    })
})