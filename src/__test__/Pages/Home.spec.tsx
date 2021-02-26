import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/home';


describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Home />)
        debug();
    })
})