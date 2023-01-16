/* eslint-disable indent */
/* eslint-disable no-tabs */

const { chromium } = require('playwright-core')

;(async () => {
		const browser = await chromium.launch()
		const page = await browser.newPage()
		await page.goto('https://twitch.com/p0me')

		await page.get
		setTimeout(() => {

		}, 20000)
		await page.screenshot({ path: 'screenshots/twitch.png' })

		await browser.close()
})()
