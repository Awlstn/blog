import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base 경로 설정: 배포 시 앱이 호스팅되는 기본 URL 경로를 지정
  // 예를 들어 GitHub Pages에서 'https://username.github.io/blog/'로 배포할 때
  // base를 "/blog/"로 설정하면 리소스 경로가 올바르게 맞춰짐
  base: "/blog/" 
})
