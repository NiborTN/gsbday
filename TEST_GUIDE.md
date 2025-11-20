# 🧪 Testing Guide

## Quick Test Commands

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Build + Tests
```bash
npm run test:build
```

### Run Custom Test Runner
```bash
node test-runner.js
```

## Test Coverage

### ✅ Component Tests
- **Avatar** - Animation states, sizes, sparkles
- **HeartFloaters** - Heart count, positioning
- **ClickableHeart** - Click interactions, burst effects
- **EnvelopeReveal** - Tap to reveal functionality
- **Slideshow** - Navigation, photo display
- **ReasonsList** - List rendering, numbering
- **FinalSurprise** - Button reveal, confetti trigger

### ✅ Integration Tests
- **Main Page** - Section rendering, content display
- **Content Config** - Placeholder validation
- **Build Process** - Successful compilation

### ✅ Manual Tests
1. **Mobile Responsiveness**
   - Test on phone/tablet
   - Check touch interactions
   - Verify swipe gestures

2. **Animation Performance**
   - Smooth 60fps animations
   - No lag on scroll
   - Avatar flight paths

3. **Media Loading**
   - Photo slideshow works
   - Audio player functions
   - Placeholder handling

## Test Results Interpretation

### ✅ All Green = Ready to Deploy
- Components render correctly
- Interactions work
- Build succeeds
- No TypeScript errors

### ❌ Red Tests = Issues to Fix
- Check console for specific errors
- Verify component imports
- Ensure all dependencies installed

## Pre-Deployment Checklist

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] Content placeholders customized
- [ ] Photos/audio uploaded
- [ ] Mobile tested
- [ ] Performance verified

## Troubleshooting

### Tests Failing?
1. Run `npm install` to ensure dependencies
2. Check Jest setup in `jest.config.js`
3. Verify mocks in `jest.setup.js`

### Build Failing?
1. Check TypeScript errors: `npx tsc --noEmit`
2. Verify Next.js config
3. Ensure all imports are correct

### Components Not Rendering?
1. Check Framer Motion mocks
2. Verify component exports
3. Test individual components