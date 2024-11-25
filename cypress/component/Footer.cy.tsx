import Footer from '../../client/src/components/Footer.tsx';

describe('Footer', () => {
    beforeEach(() => {
        cy.mount(<Footer />);
    });

    it('should render the footer', () => {
        cy.get('.footer-container').should('exist');
        cy.get('footer').should('exist');
    });
    
    it('should display the copyright text', () => {
        cy.get('footer').contains('2024 codeBounty. All rights reserved.');
    });

    it('should display the disclaimer text', () => {
        cy.get('footer').contains('Project created for educational purposes and is not intended for commercial use.');
    });

    it('should display all contributors', () => {
        cy.get('footer').contains('Bryce Berczik');
        cy.get('footer').contains('Justin Hebenstreit');
        cy.get('footer').contains('Zander Kubajak');
        cy.get('footer').contains('Jarvis Young');
    });
});