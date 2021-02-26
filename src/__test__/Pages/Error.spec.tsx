import { render } from '@testing-library/react';
import React from 'react';
import Error from '../../pages/error';


describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Error />)
        debug();
    })
})