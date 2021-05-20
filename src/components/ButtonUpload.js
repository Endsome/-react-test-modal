import '../styles/buttonUpload.scss';

const ButtonUpload = () => {
    return (
        <button className='btn-upload'>
            <svg className="icon-upload">
                <use xlinkHref="svg-sprite.svg#upload"></use>
            </svg>
            <span className='btn-upload__title'>Upload transactions</span>
        </button>
    );
}

export default ButtonUpload;
