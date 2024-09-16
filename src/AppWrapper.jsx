import App from "./App.jsx";
import { AppProvider } from "./pages/AppContext.jsx";

export default function AppWrapper() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}