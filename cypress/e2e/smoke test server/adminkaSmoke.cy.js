

const server = 'https://1657278262-tt.pharmahrm.com/',  userName = 'Administrator', password = 'GCq495v3=';
const screenWidth = 1920, screenHight = 1080;
const language = 'Русский', firstSearchName = 'Test mp RX1', secondSearchName = 'CopyGeTEST1';




const isUkrainian = () => {

    cy.get('html')
    .invoke('attr', 'lang')
    .should('equal', 'uk');
}

const isEnglish = () => {

    cy.get('html')
    .invoke('attr', 'lang')
    .should('equal', 'ru');
}
const isRussian = () => {

  cy.get('html')
  .invoke('attr', 'lang')
  .should('equal', 'ru');

}
const adminPanel = () => {
    isRussian();
    cy.get('.team_soft_administration', {timeout : 10000}).click();  
}

describe("Smoke test Adminka", () => { 
    
    
   beforeEach(() => {
  
        cy.viewport(screenWidth, screenHight);
        cy.visit(server);     
        cy.get('#username')
        .type(userName)
        .should('have.value', userName);
        cy.get('#password')
        .type(password)
        .should('have.value', password);
        cy.get('.btn')
        .should('be.visible')
        .click();  
    
    });
    
        
   
    
    it ('Isnowork testing in hierarchy', () => {
        
        
        
        adminPanel();

        cy.get('.tree-body')
        .should('be.visible');

        cy.get('#search')
        .should('be.visible');

        cy.get('#profile > h4', {timeout : 10000})
        .should('be.visible')
        .and('have.text', 'Пользователь не выбран');  

        cy.get('label.name.disabled', {timeout : 10000})
        .first()
        .should('be.visible')
        .click();

        cy.get('.checked > ul > li:nth-child(1)')
        .should('be.visible')
        .and('have.text', 'Напомнить пароль');

        cy.get('.checked > ul > li:nth-child(2)')
        .should('be.visible')
        .and('have.text', 'Добавить подчиненного');
       
        cy.get('fieldset:nth-child(1) > div:nth-child(2) >b', {timeout : 10000})
        .should('be.visible')
        
        cy.get('.btn-group >.btn-primary')
        .click();

        cy.get('#isnowork')
        .should('be.checked');

        cy.get('#isholiday')
        .should('not.be.checked');

        
    });
    it ('Search in hierarchy tab', () => {
        adminPanel();
        cy.get('#search')
        .type(`${firstSearchName}{enter}`);

        cy.get('label.name', {timeout: 10000})
        .should('have.text', ` ${firstSearchName} `);

        cy.get('.clear-input')
        .click();

        cy.get('#search')
        .type(`${secondSearchName}{enter}`);

        cy.get('label.name', {timeout: 10000})
        .should('have.text', ` ${secondSearchName} `);

    })

    it('Is visible copy settings button and edit user button', () => {
        adminPanel();

        cy.get('label.name.disabled', {timeout : 10000})
        .first()
        .click();

        cy.get(' .btn-group >.btn-warning', {timeout : 10000})
        .should('be.visible');

        cy.get('.btn-group > .btn-primary', {timeout : 10000})
        .should('be.visible');

    })

    it('Is tree view', () => {
        adminPanel();

        cy.get('.toggle-list.active', {timeout : 10000})
        .should('be.visible');

        cy.get('.tree-body', {timeout : 10000})
        .should('be.visible');
    });
    
    it('Three dot button', () => {
        adminPanel();

        cy.get('.name', {timeout: 10000})

        cy.get('.tree-body > .dropdown', {timeout: 10000})
        .should('be.visible')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(1)')
        .should('be.visible')
        .and('have.text', 'Свернуть все');

        cy.get('.dropdown.show > ul > li:nth-child(2)')
        .should('be.visible')
        .and('have.text', 'Развернуть все');

        cy.get('.dropdown.show > ul > li:nth-child(3)')
        .should('be.visible')
        .and('have.text', 'Скрыть неактивных');

        cy.get('.dropdown.show > ul > li:nth-child(4)')
        .should('be.visible')
        .and('have.text', 'Добавить пользователя');

        cy.get('.dropdown.show > ul > li:nth-child(5)')
        .should('be.visible')
        .and('have.text', 'Напомнить пароль');
       

    })
    

    it('Three dot button, collapse', () => {
        adminPanel();

        cy.get('.name', {timeout: 10000})

        cy.get('.tree-body > .dropdown')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(1)')
        .click()

        cy.get('.icon-expand.disabled')
        .should('be.visible');

        cy.get('.icon-collapse.disabled')
        .should('not.exist');
    })
    it('Three dot button, expand', () => {
        adminPanel();

        cy.get('.name', {timeout: 10000})

        cy.get('.tree-body > .dropdown')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(2)')
        .click();

        cy.get('.icon-collapse.disabled')
        .should('be.visible');

        cy.get('.icon-expand.disabled')
        .should('not.exist');
    })
    it('Three dot button, hide isnowork', () => {
        adminPanel();

        cy.get('.name', {timeout: 10000})

        cy.get('.tree-body > .dropdown')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(3)')
        .click();


        cy.get('tree-item.hidden')
        .should('be.exist');

        cy.get('.tree-body > .dropdown')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(3)')
        .click();

        cy.get('tree-item.hidden')
        .should('not.exist');
    })

    it('Three dot button, add user', () => {
        adminPanel();

        cy.get('.name', {timeout: 10000})

        cy.get('.tree-body > .dropdown')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(4)')
        .click();

        cy.get('.btn-group > .btn.btn-default')
        .should('be.visible');

        cy.get('.btn-group > .btn.btn-primary')
        .should('not.exist');

        cy.get('#user-name')
        .type('Test name')
        .should('have.value', 'Test name');

        cy.get('.btn-group > .btn.btn-primary')
        .should('be.visible');
    })

    it('Three dot button, send email with passwords', () => {
        adminPanel();

        cy.get('.name', {timeout: 10000})

        cy.get('#send-email')
        .should('not.exist');

        cy.get('.tree-body > .dropdown')
        .click();

        cy.get('.dropdown.show > ul > li:nth-child(5)')
        .click();

        cy.get('#send-email')
        .should('be.visible');
    })

   

    it('Edit and save change user information', () => {
        adminPanel();

        cy.get('label.name.disabled', {timeout : 10000})
        .first()
        .should('be.visible')
        .click();

        cy.get('fieldset:nth-child(1) > div:nth-child(2) >b', {timeout : 10000})
        .should('be.visible');

        cy.get('.btn-group > .btn-primary', {timeout : 10000})
        .should('be.visible')
        .click();

        cy.get('#description')
        .type(`{selectAll}{backspace}Auto test description`)
        .should('have.value', 'Auto test description');

        cy.get('.btn-group > .btn.btn-primary')
        .click();

        cy.get('fieldset:nth-child(1) > div:nth-child(8) > .field-value', {timeout: 30000})
        .should('be.visible')
        .and('have.text', 'Auto test description');

    });

    it('Test graphic view Hierarchy', () => {
        adminPanel();
      
        cy.get('#sorting', {timeout:10000})
        .select('hierarchy');

        cy.get('.toggle-blocks')
        .click();

        cy.get('#tree > h3', {timeout:10000})
        .should('be.visible')
        .and('have.text', 'Иерархия');



    });

    it('Test graphic view Territory', () => {
        adminPanel();
      
        cy.get('#sorting', {timeout:10000})
        .select('territory');

        cy.get('.toggle-blocks')
        .click();

        cy.get('#tree > h3', {timeout:10000})
        .should('be.visible')
        .and('have.text', 'Территория');



    });

    it('Test graphic view Direction', () => {
        adminPanel();
      
        cy.get('#sorting', {timeout:10000})
        .select('direction');

        cy.get('.toggle-blocks')
        .click();

        cy.get('#tree > h3', {timeout:10000})
        .should('be.visible')
        .and('have.text', 'Прод. направление');



    });

})

