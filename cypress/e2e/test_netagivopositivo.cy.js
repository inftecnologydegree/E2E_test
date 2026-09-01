/*describe('Funcionalidade: Login no Sistema', () => {

  it('Deve realizar o login com sucesso ao inserir dados válidos', () => {
    // 1. Visita a página do sistema
    cy.visit('https://example.com');

    // 2. Localiza o campo de e-mail e digita o usuário
    cy.get('#email-input').type('usuario@teste.com');

    // 3. Localiza o campo de senha e digita a senha
    cy.get('#password-input').type('SenhaSegura123');

    // 4. Clica no botão de entrar
    cy.get('#btn-login').click();

    // 5. Validação (Assert): Verifica se o usuário foi para a página certa
    cy.url().should('include', '/dashboard');
    cy.get('.mensagem-boas-vindas').should('contain', 'Olá, Usuário');
  });

});*/

describe('Funcionalidade: Login no Sistema', () => {

  // Este bloco roda antes de cada teste, evitando repetição de código (Boa prática: DRY)
  beforeEach(() => {
    cy.visit('https://saucedemo.com');
  });

  it('Deve realizar o login com sucesso ao inserir dados válidos (Teste Positivo)', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Validações de sucesso
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('Deve exibir mensagem de erro ao inserir senha incorreta (Teste Negativo)', () => {
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

