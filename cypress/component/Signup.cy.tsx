import React from 'react';
import Signup from '../../client/src/components/Signup.tsx';
import { ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client';


describe('Signup', () => {
    beforeEach(() => {
        cy.mount (
            <ApolloProvider client={new ApolloClient({uri: 'http://localhost:3001/graphql',cache: new InMemoryCache()})}>
                <Signup />
            </ApolloProvider>
        );
    });

    it('should render the signup form', () => {
        // Locate the password input by its name attribute
        cy.get('input[name="password"]').should('exist');
        cy.get("input[name='username']").should('exist');
        cy.get("input[name='email']").should('exist');
        cy.get("input[name='role']").should('exist');
        cy.get('textarea').should('exist');
    });
    
    it ('should display the add technology button', () => {
        cy.get('button').first().contains('Add Technology');
    });

    it ('should display add link button', () => {    
        cy.get('button').eq(1).contains('Add Link');
    });

    it ('should display the submit button', () => {
        cy.get('button').eq(2).contains('Submit');
    });
});