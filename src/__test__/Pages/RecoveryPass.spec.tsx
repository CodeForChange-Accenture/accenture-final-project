import { render } from '@testing-library/react';
import React from 'react';
import RecoveryPass from '../../pages/recoveryPass';


describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<RecoveryPass />)
        debug();
    })
})