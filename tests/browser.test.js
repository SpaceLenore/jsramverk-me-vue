/* global before after describe it */ 
const chai = require('chai')
const puppeteer = require('puppeteer')

const expect = chai.expect

// Puppeteer browser
let puppet
// File server
let server

let delay = 50

before(async () => {
    puppet = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
    const app = require('express')()
    app.use(require('express-static')('dist'))
    server = app.listen(8000)
})

after(() => {
    puppet.close()
    server.close()
})

describe('Client Testing', () => {
    let page

    before( async () => {
        page = await puppet.newPage()
        await page.goto('http://localhost:8000')
    })

    after(async () => {
        await page.close()
    })

    describe('Click on Navbar links', () => {
        it('Get main page', async () => {
            const pageTitleElement = await page.$('#home > .content-header')
            const pageTitle = await page.evaluate(element => element.textContent, pageTitleElement)
            expect(pageTitle).to.be.equal('Me-Sida')
        })
    
        it('Click on Register', async () => {
            await page.click('.nav-link-wrap > span:nth-child(2) > a:nth-child(1)')
            await page.waitFor(delay)
            const pageTitleElement = await page.$('.content-header')
            const pageTitle = await page.evaluate(element => element.textContent, pageTitleElement)
            expect(pageTitle).to.be.equal('Registrera användare')
            
        })
    
        it('Click on Login', async () => {
            await page.click('a.nav-link:nth-child(2)')
            await page.waitFor(delay)
            const pageTitleElement = await page.$('.content-header')
            const pageTitle = await page.evaluate(element => element.textContent, pageTitleElement)
            expect(pageTitle).to.be.equal('Logga In')
            
        })
    
        it('Click on Home', async () => {
            await page.click('a:nth-child(1)')
            await page.waitFor(delay)
            const pageTitleElement = await page.$('.major-display > .highlight-title')
            const pageTitle = await page.evaluate(element => element.textContent, pageTitleElement)
            expect(pageTitle).to.be.equal('JS-Ramverk')
            
        })
    })

    describe('Login form', () => {
        it('Fill out login form', async () => {
            await page.goto('http://localhost:8000/#/login')
            await page.waitFor(delay)
            await page.type('#nextField', 'a@a.a')
            await page.waitFor(delay)
            await page.type('#passwd', 'password')
            await page.waitFor(delay)
            const emailBox = await page.$('#nextField')
            const passwordBox = await page.$('#passwd')
            const emailValue = await page.evaluate(element => element.value, emailBox)
            const passwordValue = await page.evaluate(element => element.value, passwordBox)
            expect(emailValue).to.be.equal('a@a.a')
            expect(passwordValue).to.be.equal('password')
       });
       it('Click login with invalid input', async () => {
           await page.click('.submit-register')
           await page.waitFor(delay)
           const error = await page.$('.form-error')
           expect(error).to.not.be.not.equal(null)
       })
    })

    describe('Register form', () => {
        it('Fill out register form but do not agree to gdpr checkbox', async () => {
            await page.goto('http://localhost:8000/#/register')
            await page.waitFor(delay)
            await page.type('span.fieldset:nth-child(1) > input:nth-child(2)', 'Testname')
            await page.waitFor(delay)
            await page.type('input.date-field:nth-child(1)', '1970')
            await page.waitFor(delay)
            await page.type('input.date-field:nth-child(2)', '1')
            await page.waitFor(delay)
            await page.type('input.date-field:nth-child(3)', '1')
            await page.waitFor(delay)
            await page.type('#nextField', 'test@test.suite')
            await page.waitFor(delay)
            await page.type('#passwd', 'supersecrettestpassword')
            await page.waitFor(delay)
            const nameBox = await page.$('span.fieldset:nth-child(1) > input:nth-child(2)')
            const yearBox = await page.$('input.date-field:nth-child(1)')
            const monthBox = await page.$('input.date-field:nth-child(2)')
            const dayBox = await page.$('input.date-field:nth-child(3')
            const emailBox = await page.$('#nextField')
            const passwordBox = await page.$('#passwd')
            const nameValue = await page.evaluate(element => element.value, nameBox)
            const yearValue = await page.evaluate(element => element.value, yearBox)
            const monthValue = await page.evaluate(element => element.value, monthBox)
            const dayValue = await page.evaluate(element => element.value, dayBox)
            const emailValue = await page.evaluate(element => element.value, emailBox)
            const passwordValue = await page.evaluate(element => element.value, passwordBox)
            expect(nameValue).to.be.equal('Testname')
            expect(yearValue).to.be.equal('1970')
            expect(monthValue).to.be.equal('1')
            expect(dayValue).to.be.equal('1')
            expect(emailValue).to.be.equal('test@test.suite')
            expect(passwordValue).to.be.equal('supersecrettestpassword')
        })
        
        it('Click submit and see that it gives a form error', async ()=> {
            await page.click('.submit-register')
            await page.waitFor(delay)
            const error = await page.$('.form-error')
            expect(error).to.not.be.not.equal(null)
        })
    })
})
