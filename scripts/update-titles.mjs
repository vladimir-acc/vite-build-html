import fs from 'fs'
import path from 'path'

// Настройки title для каждой страницы
const titleMap = {
  'index.html': 'Home Page - Vue App',
  'about.html': 'About Us - Vue App', 
  'contact.html': 'Contact - Vue App',
  'login.html': 'Login - Vue App'
}

// Путь к папке dist
const distPath = './dist'

// Обрабатываем каждый HTML файл
Object.entries(titleMap).forEach(([filename, title]) => {
  const filePath = path.join(distPath, filename)
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // Заменяем title
    content = content.replace(
      '<title>Vite BEM Project</title>',
      `<title>${title}</title>`
    )
    
    // Записываем обновленный файл
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`✅ Updated title for ${filename}: "${title}"`)
  } else {
    console.log(`⚠️  File not found: ${filename}`)
  }
})

console.log('🎉 All titles updated!')
