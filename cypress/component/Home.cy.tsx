import Home from "../../client/src/pages/Home.tsx";
import { BrowserRouter } from 'react-router-dom';


describe('Home', () => {
    beforeEach(() => {
        cy.mount(<BrowserRouter><Home /></BrowserRouter>);
    });


    it('should render the homepage container', () => {
        cy.get('.homepage-container').should('exist');
        cy.get('.homepage-container').should('have.length', 1);
        cy.get('.homepage-container').should('be.visible');
    });

    it('should display the title', () => {
        cy.get('.special-span').contains('Building the future');
    });

    it('should display the subtext', () => {
        cy.get('.subtext-homepage').contains('Work with diverse clients worldwide');
    });

    it('should display the get started button', () => {
        cy.get('.getstarted-btn h1').contains('Get Started');
    });

    it('should display about as a link', () => {
        cy.get('.offset-line').contains('here');
    });

    it('should display the brand stats', () => {
        cy.get('.ind-stat').should('have.length', 4);
    });

    it('should display the brand stats', () => {
        cy.get('.ind-stat').first().contains('Projects Done');
        cy.get('.ind-stat').eq(1).contains('Active Users');
        cy.get('.ind-stat').eq(2).contains('Databases Created');
        cy.get('.ind-stat').eq(3).contains('Happy Customers');
    });

    it('should display second-homepage-section', () => {
        cy.get('.second-homepage-section').should('exist');
        cy.get('.second-homepage-section').should('have.length', 1);
        cy.get('.second-homepage-section').should('be.visible');
    });

    it('should display the title', () => {
        cy.get('.fullstack-block h1').contains('Full Stack Development');
    });

    it('should display the subtext', () => {
        cy.get('.fullstack-block p').contains('Offering full-stack development services');
    });

    it('should display design block', () => {
        cy.get('.design-block').should('exist');
        cy.get('.design-block').should('have.length', 1);
        cy.get('.design-block').should('be.visible');
    
        cy.get('.design-block h1').contains('UX/UI Design');
        cy.get('.design-block p').contains('Providing expert UX/UI design services to create intuitive');
    });

    it('should display database block', () => {
        cy.get('.database-block').should('exist');
        cy.get('.database-block').should('have.length', 1);
        cy.get('.database-block').should('be.visible');
    
        cy.get('.database-block h1').contains('Database Creation');
        cy.get('.database-block p').contains('Creating robust SQL and NoSQL databases');
    });

    it('should display the photo', () => {
        cy.get('.frontpage-photo img').should('exist');
        cy.get('.frontpage-photo img').should('have.length', 1);
        cy.get('.frontpage-photo img').should('be.visible');
    });

    it('should display third homepage section', () => {
        cy.get('.third-homepage-section').should('exist');
        cy.get('.third-homepage-section').should('have.length', 1);
        cy.get('.third-homepage-section').should('be.visible');

        cy.get('.third-homepage-section h1').contains('Why choose codeBounty?');
    });

    it('should display the info container', () => {
        cy.get('.info-container').should('exist');
        cy.get('.info-container').should('have.length', 1);
        cy.get('.info-container').should('be.visible');
    });

    it('should display the info div', () => {
        cy.get('.info-div').should('exist');
        cy.get('.info-div').should('have.length', 2);
        cy.get('.info-div').should('be.visible');
        cy.get('.info-div').first().contains('Our Clients');
        cy.get('.info-div').eq(1).contains('The Developers');
    });

    it('should display join us button', () => {
        cy.get('.join-us-btn h2').contains('Join us');
    });

}); 

