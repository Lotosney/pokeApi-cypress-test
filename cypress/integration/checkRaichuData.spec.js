beforeEach(() => {
    cy.request('26').as('pokemon');
});

it('Validate the header', () => {
    cy.get('@pokemon')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8');
});

it('Validate the status code', () => {
    cy.get('@pokemon')
        .its('status')
        .should('equal', 200);
});

it('Validate the pokemon\'s name', () => {
    cy.get('@pokemon')
        .its('body')
        .should('include', { name: 'raichu' });
});
it('Validate the pokemon\'s height', () => {
    cy.get('@pokemon')
        .its('body')
        .should('include', { height: 8 });
});
it('Validate the pokemon\'s weight', () => {
    cy.get('@pokemon')
        .its('body')
        .should('include', { weight: 300 });
});
it('Validate the pokemon\'s order', () => {
    cy.get('@pokemon')
        .its('body')
        .should('include', { order:51});
});