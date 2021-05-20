import ButtonUpload from "./ButtonUpload"
import Modal from "./Modal"
import '../styles/app.scss'

const App = () => {
    return (
        <div className='app'>
            <div className="container container_flex">
                <ButtonUpload />
            </div>

            <Modal />
        </div>
    );
}

export default App;
