import MoviesGrid from './MoviesGrid.jsx';
import styles from './App.module.css';

function App() {
    return (
      <div>
        <header>
          <h1 className={styles.title}>Movies</h1>
        </header>
        <main>
          <MoviesGrid />
        </main>
      </div>
    );
}
export default App;