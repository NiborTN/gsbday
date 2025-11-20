import { render } from '@testing-library/react'
import HeartFloaters from '../../app/components/HeartFloaters'

describe('HeartFloaters Component', () => {
  it('renders default number of hearts', () => {
    render(<HeartFloaters />)
    const hearts = document.querySelectorAll('.heart')
    expect(hearts).toHaveLength(8)
  })

  it('renders custom number of hearts', () => {
    render(<HeartFloaters count={5} />)
    const hearts = document.querySelectorAll('.heart')
    expect(hearts).toHaveLength(5)
  })

  it('has fixed positioning and pointer-events-none', () => {
    render(<HeartFloaters />)
    const container = document.querySelector('.fixed')
    expect(container).toHaveClass('pointer-events-none')
  })
})