import '../styles/buttonNext.scss';

const ButtonNext = () => {
    return (
        <button className='btn-next'>
            <span className="btn-next__title">Next</span>
            <svg className="icon-arrow">
                <use xlinkHref="svg-sprite.svg#arrow"></use>
            </svg>
        </button>
    );
}

export default ButtonNext;
