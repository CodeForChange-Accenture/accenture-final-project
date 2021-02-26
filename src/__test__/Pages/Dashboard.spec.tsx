import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from '../../pages/dashBoard/index';


describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Dashboard />)
        debug();
    })
})