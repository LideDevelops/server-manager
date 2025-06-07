import type { Meta, StoryObj } from '@storybook/react';
import { JsonViewer } from '../../components';

const meta: Meta<typeof JsonViewer> = {
  title: 'Components/JsonViewer',
  component: JsonViewer,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof JsonViewer>;

export const Default: Story = {
  args: {
    data: {
      resource: {
        service: {
          name: 'log-viewer-service',
          version: '1.2.3',
        },
        attributes: {
          environment: 'production',
          region: 'us-east-1',
        },
      },
      scope: {
        name: 'log-collector',
        version: '0.9.0',
      },
      logs: [
        {
          timestamp: '2025-06-08T12:34:56.789Z',
          severity: 'INFO',
          body: 'Application started',
          traceId: '4bf92f3577b34da6a3ce929d0e0e4736',
          spanId: '00f067aa0ba902b7',
          attributes: {
            http: {
              method: 'GET',
              route: '/api/logs',
              status_code: 200,
            },
            user: {
              id: 'user-123',
              roles: ['admin', 'editor'],
            },
          },
        },
        {
          timestamp: '2025-06-08T12:35:01.123Z',
          severity: 'ERROR',
          body: 'Failed to connect to database',
          traceId: '4bf92f3577b34da6a3ce929d0e0e4736',
          spanId: 'a3ce929d0e0e4736',
          attributes: {
            db: {
              system: 'postgresql',
              statement: 'SELECT * FROM logs',
              error: {
                code: '08001',
                message: 'Connection refused',
              },
            },
            retry: true,
          },
        },
      ],
      traceState: 'congo=t61rcWkgMzE',
      droppedAttributesCount: 0,
    },
  },
};
