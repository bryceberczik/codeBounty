import Login from '../../client/src/components/Login.tsx';




describe('Login', () => {
    beforeEach(() => {
        cy.mount( <Login />);
    });
});

it('should display the login component', () => {
    cy.get('div').should('exist');
});
    
