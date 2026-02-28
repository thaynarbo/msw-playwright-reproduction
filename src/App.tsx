import { Container, Header, Content, Panel, Tag } from 'rsuite'
import { Global,Alipay } from '@rsuite/icons'
import { UsersTable } from './components/UsersTable'
import 'rsuite/dist/rsuite.min.css'

export default function App() {
  return (
    <Container style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <Alipay style={{ fontSize: 32, color: '#FF6A00' }} />
          <div>
            <h2 style={{ margin: 0 }}>MSW + RSuite Integration</h2>
            <p style={{ margin: 0, color: '#888', fontSize: 13 }}>
              Validating MSW/Playwright compatibility with RSuite
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          <Tag color="blue">React 18</Tag>
          <Tag color="orange">RSuite 5</Tag>
          <Tag color="green">MSW 2</Tag>
          <Tag color="violet">Playwright</Tag>
          <Tag color="cyan">React Query 5</Tag>
        </div>
      </Header>

      <Content>
        <Panel
          header={
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Global />
              <span>Users — fetched via MSW handler</span>
            </div>
          }
          bordered
        >
          <p style={{ color: '#666', fontSize: 13, marginTop: 0 }}>
            The table below is populated by a <code>GET /api/users</code> request
            intercepted by MSW. No real backend needed.
          </p>
          <UsersTable />
        </Panel>
      </Content>
    </Container>
  )
}
