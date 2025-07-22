
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Runtime check
console.log('🎯 Main.tsx executing');

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('❌ Root element not found!');
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif;">
      <div style="text-align: center;">
        <h1>Error: Root element not found</h1>
        <p>The application could not start properly.</p>
      </div>
    </div>
  `;
} else {
  console.log('✅ Root element found, starting React app');
  const root = createRoot(rootElement);
  root.render(<App />);
}
