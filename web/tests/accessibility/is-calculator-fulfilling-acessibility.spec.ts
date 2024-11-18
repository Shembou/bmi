import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('is calculator page fulfilling acessibility', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/kalkulator')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json'
  })

  expect(accessibilityScanResults.violations).toEqual([])
})
