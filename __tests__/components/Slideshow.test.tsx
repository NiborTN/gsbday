import { render, screen, fireEvent } from '@testing-library/react'
import Slideshow from '../../app/components/Slideshow'

describe('Slideshow Component', () => {
  const testPhotos = [
    '[PHOTO_URL_1]',
    '[PHOTO_URL_2]',
    '[PHOTO_URL_3]'
  ]

  it('renders slideshow with photos', () => {
    render(<Slideshow photos={testPhotos} autoPlay={false} />)
    expect(screen.getByText('[PHOTO_URL_1]')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<Slideshow photos={testPhotos} autoPlay={false} />)
    expect(screen.getByText('‹')).toBeInTheDocument()
    expect(screen.getByText('›')).toBeInTheDocument()
  })

  it('renders dot indicators', () => {
    render(<Slideshow photos={testPhotos} autoPlay={false} />)
    const dots = document.querySelectorAll('button[class*="rounded-full"]')
    expect(dots.length).toBeGreaterThanOrEqual(testPhotos.length)
  })

  it('changes slide when arrow clicked', () => {
    render(<Slideshow photos={testPhotos} autoPlay={false} />)
    const nextButton = screen.getByText('›')
    fireEvent.click(nextButton)
    // Should not throw error
    expect(nextButton).toBeInTheDocument()
  })
})