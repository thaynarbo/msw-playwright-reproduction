import { test as base } from '@playwright/test'
import { http, HttpResponse, type AnyHandler } from 'msw'

import { defineNetworkFixture,type NetworkFixture } from '@msw/playwright'

import { handlers } from '../src/mocks/handlers'
import { UsersPage } from './pages/UsersPage'

interface Fixtures {
  handlers: Array<AnyHandler>
  network: NetworkFixture
  usersPage: UsersPage
}

export const test = base.extend<Fixtures>({
  handlers: [[
  http.get('*/api/users', () => {
    return HttpResponse.json([
  { id: 1, name: 'Alice Silva', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Santos', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol Oliveira', email: 'carol@example.com', role: 'Viewer' },
])
  }),

  ], { option: true }],
  network: [
    async ({ context, handlers }, use) => {
      const network = defineNetworkFixture({
        context,
        handlers,
      })
      await network.enable()
      await use(network)
      await network.disable()
    },
    { auto: true },
  ],
  usersPage: async ({ page }, use) => {
    await use(new UsersPage(page))
  },
})

export { expect } from '@playwright/test'
