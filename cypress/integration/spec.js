describe('page', () => {
  beforeEach(() => {
    cy.visit('http://storybook.b360-dev.autodesk.com/current/iframe.html?id=dropdowntree--default');
  })

  it('works', () => {
	  cy.get('#root > div > div > div > div > div').click();
	//  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 1);
  })
})
