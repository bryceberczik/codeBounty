import React from 'react';
import YourListingCard from '../../client/src/components/YourListingCard.tsx';



describe('YourListingCard', () => {
    beforeEach(() => {
        cy.mount(<YourListingCard title={''} poster={''} description={''} price={0} onDelete={function (): void {
            throw new Error('Function not implemented.');
        } }/>);

    } );
    it('should display the title', () => {  
        cy.get('.card-title').should('exist');
    });

    it('should display the poster', () => {
        cy.get('.card-lister').should('exist');
    });

    it('should display the description', () => {
        cy.get('.card-description').should('exist');
    });

    it('should display the price', () => {
        cy.get('.card-price').should('exist');
    });
});


