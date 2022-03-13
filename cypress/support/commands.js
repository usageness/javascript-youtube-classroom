Cypress.Commands.add("openSearchModal", () => {
  cy.get("#search-modal-button").click();
});

Cypress.Commands.add("searchWithNoKeyword", () => {
  const alertStub = cy.stub();

  cy.on("window:alert", alertStub);
  cy.get("#search-input-keyword").clear().type(" ");
  cy.get("#search-button").click();
});

Cypress.Commands.add("searchWithKeyword", (keyword) => {
  cy.get("#search-input-keyword").clear().type(keyword);
  cy.get("#search-button").click();
});

Cypress.Commands.add("clickSaveVideoButton", () => {
  cy.get(".video-item__save-button").eq(0).click();
});

Cypress.Commands.add("loadMoreVideos", () => {
  cy.get(".video-list").scrollTo("bottom");
});

Cypress.Commands.add("closeSearchModal", () => {
  cy.get(".dimmer").click({ force: true });
});
