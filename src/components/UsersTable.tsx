import { Table, Badge, Loader, Message } from 'rsuite'
import { useUsers } from '../hooks/useUsers'

const { Column, HeaderCell, Cell } = Table

export function UsersTable() {
  const { data: users, isLoading, isError, error } = useUsers()

  if (isLoading) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <Loader size="md" content="Loading users..." />
      </div>
    )
  }

  if (isError) {
    return (
      <Message type="error" header="Error">
        {error instanceof Error ? error.message : 'Failed to load users'}
      </Message>
    )
  }

  return (
    <Table
      data={users}
      autoHeight
      bordered
      cellBordered
      style={{ marginTop: 16 }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={1} minWidth={150}>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={1} minWidth={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={120} align="center">
        <HeaderCell>Role</HeaderCell>
        <Cell>
          {(rowData) => (
            <Badge
              content={rowData.role}
              color={
                rowData.role === 'Admin'
                  ? 'red'
                  : rowData.role === 'Editor'
                  ? 'blue'
                  : 'green'
              }
            />
          )}
        </Cell>
      </Column>
    </Table>
  )
}
