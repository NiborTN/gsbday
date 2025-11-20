import { render, screen } from '@testing-library/react'
import ReasonsList from '../../app/components/ReasonsList'

describe('ReasonsList Component', () => {
  const testReasons = [
    'Reason 1',
    'Reason 2',
    'Reason 3'
  ]

  it('renders title', () => {
    render(<ReasonsList reasons={testReasons} />)
    expect(screen.getByText('10 Reasons I Love You 💜')).toBeInTheDocument()
  })

  it('renders all reasons', () => {
    render(<ReasonsList reasons={testReasons} />)
    testReasons.forEach(reason => {
      expect(screen.getByText(reason)).toBeInTheDocument()
    })
  })

  it('renders numbered badges', () => {
    render(<ReasonsList reasons={testReasons} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders checkmarks', () => {
    render(<ReasonsList reasons={testReasons} />)
    const checkmarks = screen.getAllByText('✓')
    expect(checkmarks).toHaveLength(testReasons.length)
  })
})