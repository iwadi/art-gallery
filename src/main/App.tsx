import '../css/variables.scss';
import '../css/Base.scss';
import '../css/Main.scss';
import '../css/media.scss';
import '../css/fonts.scss';
import Header from './components/Header/Header';
import Sections from './components/Sections/Sections';
import { ThemeProvider } from './components/Header/context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Sections />
      </main>
    </ThemeProvider>
  );
}

export default App;