import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    error: 'Некорректный email',
    size: 'lg',
  },
}
