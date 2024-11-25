import React from 'react';
import PageTab from '../../client/src/components/PageTab.tsx';



describe('PageTab', () => {
    beforeEach(() => {
        cy.mount(<PageTab title={''} children={undefined} />);
        });
    
    });

    it('should render PageTab', () => {
        cy.get('div').should('exist');
    });
