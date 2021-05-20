import React, {useState} from 'react';
import Select from "./ModalSelect";
import Input from "./Input";
import ButtonAddColumn from "./ButtonAddColumn";
import ButtonBack from "./ButtonBack";
import ButtonNext from "./ButtonNext";
import '../styles/modal.scss';

const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const template = (
        <div className='modal'>
            <div className='modal__header'>
                <h1 className="modal__title">Upload transactions</h1>

                <svg onClick={() => setShowModal(false)} className="modal__close icon-close">
                    <use xlinkHref="svg-sprite.svg#close"></use>
                </svg>
            </div>

            <div className="modal__container">
                <h3 className="modal__subtitle">Map columns. For each field, select bank account fields</h3>

                <div className="modal__block">
                    <label className="checkbox">
                        <input type="checkbox" className='checkbox__input'/>
                        <span className="checkbox__text">First row in file is a header row</span>
                        <span className="checkbox__checkmark"></span>
                    </label>
                </div>

                <div className='modal__block modal__block_border'>
                    <div className="modal__row">
                        <div className="modal__name modal__name_center">
                            <div className="modal__text bold">Columns</div>
                            <svg className="icon-arrow">
                                <use xlinkHref="svg-sprite.svg#arrow"></use>
                            </svg>
                        </div>
                        <div className="modal__file-name bold">File report_09.10.20.xls</div>
                    </div>

                    <div className="modal__row">
                        <div className="modal__name modal__name_center">
                            <div className="modal__text">Date</div>
                            <svg className="icon-arrow">
                                <use xlinkHref="svg-sprite.svg#arrow"></use>
                            </svg>
                        </div>
                        <div className="modal__wrapper">
                            <div className="modal__cell">
                                <Select/>
                            </div>
                            <div className="modal__date">
                                <Input>Month</Input>
                                <Input>Day</Input>
                                <Input>Year</Input>
                            </div>
                        </div>
                    </div>

                    <div className="modal__row">
                        <div className="modal__name">
                            <div className="modal__text">Description</div>
                            <svg className="icon-arrow">
                                <use xlinkHref="svg-sprite.svg#arrow"></use>
                            </svg>
                        </div>
                        <div className="modal__cell">
                            <Input type='textarea'>Enter description</Input>
                            <ButtonAddColumn/>
                        </div>
                    </div>

                    <div className="modal__row">
                        <div className="modal__name modal__name_center">
                            <div className="modal__text">Amount</div>
                            <svg className="icon-arrow">
                                <use xlinkHref="svg-sprite.svg#arrow"></use>
                            </svg>
                        </div>
                        <div className="modal__cell">
                            <Input>Enter amount</Input>
                        </div>
                    </div>
                </div>

                <div className="modal__block">
                    <div className="info">
                        <div className="info__title bold">File has amounts in:</div>
                        <svg className="icon-info">
                            <use xlinkHref="svg-sprite.svg#info"></use>
                        </svg>
                        <div className='info__text'>Info test</div>
                    </div>

                    <div className="radio">
                        <input id="radio-1" type="radio" name="radio" value="1" />
                            <label htmlFor="radio-1">1 column: both positive and negative numbers</label>
                    </div>

                    <div className="radio">
                        <input id="radio-2" type="radio" name="radio" value="2" />
                            <label htmlFor="radio-2">2 columns: separate positive and negative numbers</label>
                    </div>

                </div>

                <div className="modal__block modal__block_btns">
                    <ButtonBack />
                    <ButtonNext />
                </div>
            </div>
        </div>
    )

    return (
        <>
            {showModal ? template : null}
        </>
    );
}

export default Modal;
