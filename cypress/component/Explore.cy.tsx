import Explore from  '../../client/src/pages/Explore';

describe('Explore', () => {
    beforeEach(() => {
        cy.mount(<Explore />);
        });

    it('should render the explore container', () => {
        cy.get('.explore-container').should('exist');
        cy.get('.intro-text-explore').should('exist');
    });

    it('should render explore-engage-container', () => {
        cy.get('.explore-engage-container').should('exist');
        cy.get('.findwork-btn').should('exist');
        cy.get('.explore-engage-container').contains('Web Services at its finest.');
    });

    it('should render explore-faq-container', () => {
        cy.get('.explore-faq-container').should('exist');
        cy.get('.faq-container').should('exist');
    });
        
});