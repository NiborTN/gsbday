import { render, screen, fireEvent } from '@testing-library/react'
import ClickableHeart from '../../app/components/ClickableHeart'

describe('ClickableHeart Component', () => {
  it('renders heart emoji', () => {
    render(<ClickableHeart />)
    expect(screen.getByText('💜')).toBeInTheDocument()
  })

  it('handles click events', () => {
    render(<ClickableHeart />)
    const heart = screen.getByText('💜')
    fireEvent.click(heart)
    // Component should handle click without errors
    expect(heart).toBeInTheDocument()
  })

  it('applies custom size', () => {
    render(<ClickableHeart size={32} />)
    const heart = screen.getByText('💜')
    expect(heart).toHaveStyle('font-size: 32px')
  })
})