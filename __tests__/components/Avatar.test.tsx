import { render, screen } from '@testing-library/react'
import Avatar from '../../app/components/Avatar'

describe('Avatar Component', () => {
  it('renders avatar with default props', () => {
    render(<Avatar />)
    expect(screen.getByText('💜')).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Avatar size="sm" />)
    expect(document.querySelector('.w-16')).toBeInTheDocument()
    
    rerender(<Avatar size="lg" />)
    expect(document.querySelector('.w-32')).toBeInTheDocument()
  })

  it('renders sparkle effects', () => {
    render(<Avatar />)
    const sparkles = document.querySelectorAll('.animate-sparkle')
    expect(sparkles.length).toBeGreaterThan(0)
  })
})