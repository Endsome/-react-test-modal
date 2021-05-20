import '../styles/buttonAddColumn.scss';

const ButtonAddColumn = () => {
    return (
        <button className='btn-add-col'>
            <svg className="icon-plus">
                <use xlinkHref="svg-sprite.svg#plus"></use>
            </svg>
            <span className="btn-add-col__title">To map one more column</span>
        </button>
    );
}

export default ButtonAddColumn;
