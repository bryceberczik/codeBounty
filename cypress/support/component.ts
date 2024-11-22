import {mount} from 'cypress/react';
import React from 'react';




declare global {
    namespace Cypress {
        interface Chainable {
        mount: typeof mount;
        }
    }
    }

Cypress.Commands.add('mount', mount);

