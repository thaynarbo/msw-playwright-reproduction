import { test, expect } from './fixtures'
import { http, HttpResponse } from 'msw'

test.describe('Users page with MSW mocking', () => {
  test('renders page header with MSW icon', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('MSW + RSuite Integration')).toBeVisible()
    await expect(
      page.getByText('Validating MSW/Playwright compatibility with RSuite'),
    ).toBeVisible()
  })

  test('loads users from MSW handler', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Alice Silva')).toBeVisible()
    await expect(page.getByText('Bob Santos')).toBeVisible()
    await expect(page.getByText('Carol Oliveira')).toBeVisible()
  })

  test('overrides handler to simulate error', async ({ page, network }) => {
     network.use(
      http.get('/api/users', () => {
        return HttpResponse.json(
          { message: 'Internal Server Error' },
          { status: 500 },
        )
      }),
    )
    await page.goto('/')
    await expect(page.getByText('Failed to fetch users')).toBeVisible()
  })
})
