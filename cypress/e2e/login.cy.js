describe("Login test", () => {
  it("User can login with valid credentials", () => {
    cy.visit("https://practicesoftwaretesting.com/");

    cy.get('a[href="/auth/login"]').click();

    cy.get("#email").type("customer@practicesoftwaretesting.com");
    cy.get("#password").type("welcome01");

    cy.get('input[type="submit"]').click();

    cy.url().should("include", "/account");
  });
});
