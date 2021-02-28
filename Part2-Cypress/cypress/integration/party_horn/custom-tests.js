describe('Party Horn Tests', () => {
  beforeEach(() => {
    //cy.visit('http://127.0.0.1:5500/');
    //original url wasn't working so I changed it in a simiar manner to a suggestion on slack
    cy.visit('http://127.0.0.1:5500/Lab8/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {expect($el).to.have.value(75);});
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {expect($el).to.have.value(33);});
  });

  it('Audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then($el => {expect($el).to.have.prop('volume',0.33);});
  });

  it('Image source changes when you select party horn radio button', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#sound-image').then($el => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/images/party-horn.svg');});
  });

  it('Sound source changes when you select party horn radio button', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#horn-sound').then($el => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/audio/party-horn.mp3');});
  });

  it('Volume image changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then($el => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-3.svg');});
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then($el => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-2.svg');});
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then($el => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-1.svg');});
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-0.svg');});
  });

  it('Button disabled when volume input is empty or a non-number', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').should('be.disabled');
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('999');
    cy.get('#volume-number:invalid').should('have.length', 1);
  });

});
