describe('User Dashboard', () => {

    const loginUser = (email, password) => {
        cy.visit('/sign-in');
        cy.get('input.sign-in-email-input').type(email);
        cy.get('input.sign-in-password-input').type(password);
        cy.get('button').contains('Sign In').click();
        cy.url().should('not.include', '/sign-in');
    };

    const testSidebarNavigation = () => {
        cy.get('.sidebar').should('be.visible');
    };

    const testLogout = () => {
        cy.get('.menu-button').click(); 
        cy.get('[data-testid="popup-menu"]').should('be.visible');
        cy.get('[data-testid="popup-menu"] .logout').click();
        cy.url().should('include', '/sign-in');
    };
    

    context('Personal User', () => {
        beforeEach(() => {
            cy.intercept('GET', 'https://api.jsonbin.io/v3/b/66b1b31cad19ca34f892124a', {
                fixture: 'personalUser.json',
            }).as('fetchPersonalUser');

            cy.intercept('GET', 'https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65', {
                fixture: 'documents.json',
            }).as('fetchDocuments');

            loginUser('personaluser@example.com', 'password123');
        });

        it('Displays the Sidebar navigation', () => {
            testSidebarNavigation();
        });

        it('Logs out the user from the dashboard', () => {
            testLogout();
        });
    });

    context('Managed User', () => {
        beforeEach(() => {
            cy.intercept('GET', 'https://api.jsonbin.io/v3/b/66a878a5e41b4d34e4190c12', {
                fixture: 'user.json',
            }).as('fetchUser');

            cy.intercept('GET', 'https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65', {
                fixture: 'documents.json',
            }).as('fetchDocuments');

            cy.intercept('GET', 'https://api.jsonbin.io/v3/b/66a87a3ae41b4d34e4190ccc', {
                fixture: 'careerGoal.json',
            }).as('fetchCareerGoal');

            loginUser('manageduser@example.com', 'password123');
        });

        it('Displays the Sidebar navigation', () => {
            testSidebarNavigation();
        });

        it('Displays the career goal', () => {
            cy.wait('@fetchCareerGoal');
            cy.get('.career-goal-section').should('be.visible');
        });

        it('Logs out the user from the dashboard', () => {
            cy.wait('@fetchUser');
            testLogout();
        });
    });

});
