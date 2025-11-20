import { render, screen, fireEvent } from '@testing-library/react'
import EnvelopeReveal from '../../app/components/EnvelopeReveal'

describe('EnvelopeReveal Component', () => {
  const testMessage = 'Test secret message'

  it('renders tap to open text initially', () => {
    render(<EnvelopeReveal message={testMessage} />)
    expect(screen.getByText('Tap to open 💌')).toBeInTheDocument()
  })

  it('reveals message when clicked', () => {
    render(<EnvelopeReveal message={testMessage} />)
    const envelope = screen.getByText('Tap to open 💌').closest('div')
    fireEvent.click(envelope!)
    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })

  it('hides tap instruction after opening', () => {
    render(<EnvelopeReveal message={testMessage} />)
    const envelope = screen.getByText('Tap to open 💌').closest('div')
    fireEvent.click(envelope!)
    expect(screen.queryByText('Tap to open 💌')).not.toBeInTheDocument()
  })
})