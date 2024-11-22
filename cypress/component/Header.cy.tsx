import Header from '../../client/src/components/Header.tsx';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


describe('Header', () => {
    beforeEach(() => {
        cy.mount(<BrowserRouter><Header /></BrowserRouter>);
    });

    it('should render Header', () => {
        cy.get('header').should('exist');
    });

    it ('should display the title', () => {
        cy.get('h1').first().should('have.text', 'codeBounty');
    });
    
    it ('should display all links', () => {
        cy.get('.category-item').should('have.length', 5);
        cy.get('.category-item').contains('Home');
        cy.get('.category-item').contains('Explore');
        cy.get('.category-item').contains('Find Work');
        cy.get('.category-item').contains('Post a Job');
        cy.get('.category-item').contains('About');
    });

});