const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

describe('Build Process', () => {
  it('builds successfully', () => {
    expect(() => {
      execSync('npm run build', { stdio: 'pipe' })
    }).not.toThrow()
  })

  it('creates .next directory', () => {
    const nextDir = path.join(process.cwd(), '.next')
    expect(fs.existsSync(nextDir)).toBe(true)
  })

  it('generates static files', () => {
    const staticDir = path.join(process.cwd(), '.next', 'static')
    expect(fs.existsSync(staticDir)).toBe(true)
  })
})