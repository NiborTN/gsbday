import { CONTENT } from '../../app/lib/content'

describe('Content Configuration', () => {
  it('has all required message fields', () => {
    expect(CONTENT.CUTE_SHORT_MESSAGE).toBeDefined()
    expect(CONTENT.FUNNY_MESSAGE).toBeDefined()
    expect(CONTENT.ROMANTIC_MESSAGE).toBeDefined()
    expect(CONTENT.EMOTIONAL_MESSAGE).toBeDefined()
    expect(CONTENT.SPECIAL_REVEAL_MESSAGE).toBeDefined()
    expect(CONTENT.SURPRISE_MESSAGE).toBeDefined()
    expect(CONTENT.FINAL_MESSAGE).toBeDefined()
  })

  it('has reasons array with 10 items', () => {
    expect(Array.isArray(CONTENT.REASONS)).toBe(true)
    expect(CONTENT.REASONS).toHaveLength(10)
  })

  it('has media URLs', () => {
    expect(CONTENT.AUDIO_FILE_URL).toBeDefined()
    expect(Array.isArray(CONTENT.PHOTOS)).toBe(true)
    expect(CONTENT.PHOTOS.length).toBeGreaterThan(0)
  })

  it('all content contains placeholder markers', () => {
    expect(CONTENT.CUTE_SHORT_MESSAGE).toContain('[')
    expect(CONTENT.FUNNY_MESSAGE).toContain('[')
    expect(CONTENT.ROMANTIC_MESSAGE).toContain('[')
    expect(CONTENT.EMOTIONAL_MESSAGE).toContain('[')
    expect(CONTENT.SPECIAL_REVEAL_MESSAGE).toContain('[')
    expect(CONTENT.SURPRISE_MESSAGE).toContain('[')
    expect(CONTENT.FINAL_MESSAGE).toContain('[')
    expect(CONTENT.AUDIO_FILE_URL).toContain('[')
    
    CONTENT.REASONS.forEach(reason => {
      expect(reason).toContain('[')
    })
    
    CONTENT.PHOTOS.forEach(photo => {
      expect(photo).toContain('[')
    })
  })
})