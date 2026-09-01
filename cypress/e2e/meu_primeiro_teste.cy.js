describe('Funcionalidade: Login no Sistema', () => {

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

});
