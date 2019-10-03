/* global before after describe it */ 
const chai = require('chai')
const puppeteer = require('puppeteer')

const expect = chai.expect

// Puppeteer browser
let puppet
// File server
let server

let delay = 100

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
            await page.type('#nextField', 'email')
            await page.waitFor(delay)
            await page.type('#passwd', 'password')
            await page.waitFor(delay)
            const emailBox = await page.$('#nextField')
            const passwordBox = await page.$('#passwd')
            const emailValue = await page.evaluate(element => element.value, emailBox)
            const passwordValue = await page.evaluate(element => element.value, passwordBox)
            expect(emailValue).to.be.equal('email')
            expect(passwordValue).to.be.equal('password')
       });
       it('Click login with invalid input', async () => {
           await page.click('.submit-register')
           await page.waitFor(delay)
           const error = await page.$('.form-error')
           expect(error).to.not.be.not.equal(null)
       })
    })
})
