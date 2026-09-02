describe('Funcionalidade: Login no Sistema', () => {
  it('Deve exibir mensagem de erro ao inserir senha incorreta (Teste Negativo)', () => {
    cy.visit('https://saucedemo.com');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('senha_errada_propositada'); // Senha incorreta
    cy.get('#login-button').click();

    // Validações de erro:
    // 1. Garante que a URL CONTINUA na tela de login e não avançou
    cy.url().should('not.include', '/inventory.html');
    
    // 2. Garante que o elemento de erro apareceu e contém o texto correto do sistema
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});

