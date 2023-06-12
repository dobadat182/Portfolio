import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import GlobalStyle from './globalStyles';
import ScrollUp from './utils/ScrollUp/ScrollUp';

function App() {
    return (
        <>
            <GlobalStyle />

            <Header />
            <Home />
            <Footer />

            <ScrollUp />
        </>
    );
}

export default App;
