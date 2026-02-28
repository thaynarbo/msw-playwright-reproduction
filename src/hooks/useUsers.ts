import { useQuery } from '@tanstack/react-query'
import type { User } from '../mocks/handlers'

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users')
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`)
  }
  return response.json()
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
