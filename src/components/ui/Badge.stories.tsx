import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    children: 'Оплачено',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'В обработке',
    variant: 'warning',
    size: 'lg',
  },
}
