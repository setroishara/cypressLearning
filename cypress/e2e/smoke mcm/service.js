

class Service {
    btnAdminPanel(){
       return cy.get('.team_soft_administration', {timeout : 10000});  
    };
    btnMCM(){
       return cy.get('.team_soft_mcm', {timeout : 10000});  
    };
}

export default Service