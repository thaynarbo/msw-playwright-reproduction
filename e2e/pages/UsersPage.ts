import { type Page } from '@playwright/test'

export class UsersPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/')
  }

  get heading() {
    return this.page.getByText('MSW + RSuite Integration')
  }

  get subheading() {
    return this.page.getByText('Validating MSW/Playwright compatibility with RSuite')
  }

  get table() {
    return this.page.locator('.rs-table')
  }

  get errorMessage() {
    return this.page.getByText('Failed to fetch users')
  }

  userRow(name: string) {
    return this.page.getByText(name)
  }
}
