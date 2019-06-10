var HomePage = require('./Homepage.page.js');
const assert= require ('assert');

describe ('Test homepage', () => {
    it ('should get the correct page title', () => {
        browser.url ('/');
        const title=browser.getTitle();
        assert.equal(title,'Home Page | SJ Innovation LLC');
        
    });

    it('should verify the height of the homepage image', () =>{
        assert.equal(HomePage.heightoftheimage(),579);
        assert.equal(HomePage.widthoftheimage(),1300);
    });

    it('should demonstrate the scrollIntoView command', () => {
        HomePage.scrollsthepageDown();
        HomePage.scrollsthepageUp();
    });

    it('should verify proper text is displayed in the body of the page', () => {
        assert.equal (HomePage.textonthepage(), "We're an agile team of experts who take a strategic approach to deliver results. We produce original and thoughtful pieces of design for businesses throughout Hampshire.");
    });

    it('should display Our Services on the homepage',() => {
        //const selector= $('.row.our_services');
        HomePage.displayourservices();
    });

    it('should display Our Clients on the homepage',() => {
        //const selector= $('.row.our_services');
        HomePage.displayourclient();
    });

    it('should display "Get a free Quote now" button', () => {
        //$('.button-holder .svg-btn').isVisible();
        HomePage.ourqouteBtn();
    });

    it('should verify if the dropdown is visible on clicking Services', () => {
        HomePage.dropdownisvisible();
    });

    it('should verify the drop down options for Services', () => {
        assert.equal(HomePage.checkdropdownvalue1(),'Web Application');
        assert.equal(HomePage.checkdropdownvalue2(),'Design');
        assert.equal(HomePage.checkdropdownvalue3(),'Mobile Application');
        assert.equal(HomePage.checkdropdownvalue4(),'Quality Assurance');
        assert.equal(HomePage.checkdropdownvalue5(),'HR Sourcing Solution');
    })


    it('should redirect to Our Portfolio page', () => {
        HomePage.clickourPortfolio();
    });

    it('should redirect to About Us page', () => {
        HomePage.clickaboutUs();
        HomePage.scrollsthepageDown();
        HomePage.scrollsthepageUp();
    });

    it('should redirect to Services(QA) page', () => {
        HomePage.clickServices();
    });

    it('should redirect to Blog page', () => {
        HomePage.clickBlog();
        HomePage.scrollsthepageDown();
        HomePage.scrollsthepageUp();

    });

    it('should redirect to Contact Us page', () => {
        HomePage.clickcontactUs();
        HomePage.scrollsthepageDown();
        HomePage.scrollsthepageUp();
    });

    it('should redirect to Careers page', () => {
       HomePage.clickCareers();
       assert.equal(HomePage.checkcareerstext(), '"Employee happiness generates client\'s success"');
    });

    


});