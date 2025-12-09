import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './pages/HomePage';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainLayout>
        <HomePage />
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;