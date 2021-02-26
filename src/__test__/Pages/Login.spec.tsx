import { render } from '@testing-library/react';
import React from 'react';
import Login from '../../pages/login';


describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Login />)
        debug();
    })
})