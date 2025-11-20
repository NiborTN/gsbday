#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')

console.log('🧪 Running Birthday Website Tests...\n')

// Test 1: Dependencies
console.log('1️⃣ Checking dependencies...')
try {
  execSync('npm list --depth=0', { stdio: 'pipe' })
  console.log('✅ Dependencies installed correctly\n')
} catch (error) {
  console.log('❌ Missing dependencies. Run: npm install\n')
  process.exit(1)
}

// Test 2: TypeScript compilation
console.log('2️⃣ Checking TypeScript compilation...')
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' })
  console.log('✅ TypeScript compiles without errors\n')
} catch (error) {
  console.log('❌ TypeScript compilation failed\n')
  console.log(error.stdout?.toString() || error.message)
  process.exit(1)
}

// Test 3: Build process
console.log('3️⃣ Testing build process...')
try {
  execSync('npm run build', { stdio: 'pipe' })
  console.log('✅ Build completed successfully\n')
} catch (error) {
  console.log('❌ Build failed\n')
  console.log(error.stdout?.toString() || error.message)
  process.exit(1)
}

// Test 4: Component tests
console.log('4️⃣ Running component tests...')
try {
  execSync('npm test', { stdio: 'pipe' })
  console.log('✅ All component tests passed\n')
} catch (error) {
  console.log('❌ Some tests failed\n')
  console.log(error.stdout?.toString() || error.message)
}

// Test 5: File structure
console.log('5️⃣ Verifying file structure...')
const requiredFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/lib/content.ts',
  'app/components/Avatar.tsx',
  'app/components/HeartFloaters.tsx',
  'app/components/Slideshow.tsx',
  'package.json',
  'tailwind.config.js',
  'next.config.js'
]

let allFilesExist = true
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`❌ Missing file: ${file}`)
    allFilesExist = false
  }
})

if (allFilesExist) {
  console.log('✅ All required files present\n')
} else {
  console.log('❌ Some required files are missing\n')
}

console.log('🎉 Test Summary Complete!')
console.log('📝 Next steps:')
console.log('   1. Run: npm run dev')
console.log('   2. Open: http://localhost:3000')
console.log('   3. Customize content in app/lib/content.ts')
console.log('   4. Deploy to Vercel when ready!')