class Homepage {
  get scrollDown() { return $('#masthead'); }
  get scrollUp() { return $("#wpfront-scroll-top-container"); }
  get imgSize() { return $('img.attachment-full'); }
  get text() { return $('.row.main-quote .col-lg-12 p'); }
  get ourservices() { return $('.row.our_services'); }
  get ourclients() { return $('.our_clients.col-lg-12');}
  get quote() { return $('.button-holder .svg-btn');}
  get dropdown() { return $('.dropdown-toggle');}
  get web() { return $('#menu-item-4093');}
  get design() { return $('#menu-item-4094');}
  get mobile() { return $('#menu-item-4095');}
  get quality() { return $('#menu-item-4096');}
  get hr() { return $('#menu-item-4097');}
  get portfolio() { return $('a[href="https://sjinnovation.com/our-portfolio/"]');}
  get aboutUs() { return $('a[href="https://sjinnovation.com/about-us/"]');}
  get QA() { return $('a[href="/services#qa"]');}
  get Careers() { return $('a[href="http://career.sjinnovation.com/"]');}
  get blog() { return $('a[href="https://sjinnovation.com/blog/"]');}
  get contactUs() { return $('a[href="https://sjinnovation.com/contact-us/"]');}
  get careerstest() { return $('.row .home-title-slogans:nth-child(3)');}


 	scrollsthepageDown(){

		return this.scrollDown.scroll(0,800);
		
	}

  	scrollsthepageUp()
	{
		return this.scrollUp.click();
	}

	heightoftheimage()
	{	
		//console.log(this.imgSize.getElementSize('height'));
		return this.imgSize.getElementSize('height');

	}

	widthoftheimage()
	{
		//onsole.log(this.imgSize.getElementSize('width'));
		return this.imgSize.getElementSize('width');
	}

	textonthepage()
	{
		return this.text.getText();
	}

	displayourservices(){
		return this.ourservices.isVisible();

	}

	displayourclient(){
		return this.ourclients.isVisible();
	}

	ourqouteBtn(){
		return this.quote.isVisible();
	}

	dropdownisvisible(){
		this.dropdown.click();
		this.dropdown.waitForVisible(3000);
		this.dropdown.isVisible();
	}

	checkdropdownvalue1()
	{
		return this.web.getText();
	}

	checkdropdownvalue2()
	{
		return this.design.getText();
	}

	checkdropdownvalue3()
	{
		return this.mobile.getText();
	}

	checkdropdownvalue4()
	{
		return this.quality.getText();
	}

	checkdropdownvalue5()
	{
		return this.hr.getText();
	}

	clickourPortfolio(){
		return this.portfolio.click();
	}

	clickaboutUs(){
		return this.aboutUs.click();
	}

	clickServices(){
		this.dropdown.click();
		this.QA.click();
		browser.pause(5000);
	}

	clickCareers(){
		this.Careers.click();
	}

	clickBlog(){
		this.blog.click();
	}

	clickcontactUs(){
		this.contactUs.click();
	}

	checkcareerstext() {
		return this.careerstest.getText();
	}
}




module.exports = new Homepage();