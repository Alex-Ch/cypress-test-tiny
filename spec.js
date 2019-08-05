describe('Open the page', () => {
  beforeEach(() => {
    cy.log('this is BeforeEachEach - Open the page'); 
    cy.getCookies().should('be.empty');
    cy.visit('http://storybook.b360-dev.autodesk.com/current/iframe.html?id=dropdowntree--default');
	
  })
  afterEach(() => {
		cy.log('This is afterEach - Open the page');
	});

	after(() => {
		cy.log('This is After - Open the  page');
	});
// check choising Node 1 and button clear after this
  it('Choose Node1 - click on Clear button', () => {
	  cy.wait(1000);
	  cy.title().should('include', 'Storybook');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div > div > div').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
  })
  // check choising Node 2 and button clear after this
	it('Choose Node2 - click on Clear button', () => {
	  cy.wait(1000);
	  cy.title().should('include', 'Storybook');
      cy.get('#root > div > div > div > div > div').click();   
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
  })
  // check choising all childs  of  Node 2 and button clear after this
	it('Choose Node2 - all child Node3 - Node9 - click on Clear button', () => {
		// Node 3
	  cy.wait(1000);
	  cy.title().should('include', 'Storybook');	 
      cy.get('#root > div > div > div > div > div').click();	
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);	  
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').children().should('have.length', 1);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(3)').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2 > Node 3');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2 > Node 3');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
	  
	  // Node 5
	  cy.get('#root > div > div > div > div > div').click();	
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);	  
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').children().should('have.length', 1);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(5)').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2 > Node 5');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2 > Node 5');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
	  
	  // Node 6
	  cy.get('#root > div > div > div > div > div').click();	
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);	  
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').children().should('have.length', 1);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(6)').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2 > Node 6');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2 > Node 6');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
	  
	  // Node 7
	  cy.get('#root > div > div > div > div > div').click();	
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);	  
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').children().should('have.length', 1);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(7)').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2 > Node 7');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2 > Node 7');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
	  
	  // Node 8
	  cy.get('#root > div > div > div > div > div').click();	
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);	  
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').children().should('have.length', 1);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(8)').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2 > Node 8');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2 > Node 8');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
	  
	  // Node 9
	  cy.get('#root > div > div > div > div > div').click();	
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);	  
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(2) > div > div > div > div').children().should('have.length', 1);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(9)').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 2 > Node 9');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 2 > Node 9');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
	   })
  // check choising Node 4 and button clear after this
	it('Choose Node 4 - click Clear button', () => {
	  cy.wait(1000);
	  cy.title().should('include', 'Storybook');
	    cy.get('#root > div > div > div > div > div').click();   
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(1) > div > div > div > div > svg').children().should('have.length', 3);
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div:nth-child(3) > div > div').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1 > Node 4');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link.Tree__clear').click();
	  cy.get('#root > div > div > div > div > div').should('not.have.value', 'Node 1 > Node 4');
	  cy.get('#root > div > div > div > div > div').should('have.not.value');
  })
  // cancel Butonn
  it('Cancel Button - Cancel button with Node atr', () => {
	  cy.wait(1000);
	  cy.title().should('include', 'Storybook');
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link-secondary.Tree__cancel').click();
	  cy.get('#root > div > div > div > div > div').should('have.not.text');
	  
	  // click on cancel with chosen Node  
	  cy.get('#root > div > div > div > div > div').click();
	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li.Tree__tree-container > div > div > div > div > div > div > div').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1');
	  cy.get('#root > div > div > div > div > div').click();
  	  cy.get('#root > div > div > div.DropdownTree__tree > div > ul > li:nth-child(2) > div.Tree__buttons > button.Button.Button--link-secondary.Tree__cancel').click();
	  cy.get('#root > div > div > div > div > div').should('have.text','Node 1');
  
})

})

