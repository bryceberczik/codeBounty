import React from 'react';
import DevCard from '../../client/src/components/DevCard.tsx';


describe('DevCard', () => {
    beforeEach(() => {
        cy.mount(<DevCard username={''} role={''} technologies={[]} description={''} />);
        });
    });

    it('should render DevCard', () => {
        cy.get('div').should('exist');

    it('should render username', () => {
        cy.get('h1').should('exist');

    it('should render role', () => {
        cy.get('h3').should('exist');
    });
});
    });
