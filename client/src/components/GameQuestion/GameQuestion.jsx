import React, { useRef, useState } from 'react';
import style from './GameQuestion.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_QUESTION } from '../../redux/actionTypes/questionsAT';
import { UPDATE_USER } from '../../redux/actionTypes/usersAT';

function GameQuestion({ question }) {
    const [isOpened, setIsOpened] = useState(false);
    const [wasClosed, setWasClosed] = useState(false);
    const [timer, setTimer] = useState(10);
    const answerInput = useRef();

    const dispatch = useDispatch();
    const { questions } = useSelector((state) => state.questionsReducer);
    const { user } = useSelector((state) => state.usersReducer);

    const openModal = () => {
        setIsOpened(true);

        const answerTimer = setInterval(() => {
            setTimer((timer) => timer - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(answerTimer);
            closeModal();
        }, 10000);
    };

    const closeModal = () => {
        console.log(question);
        if (
            question.question_answer.toLowerCase() ===
            answerInput.current.value.toLowerCase()
        ) {
            console.log('dispatch closemodal');
            dispatch({ type: UPDATE_USER, payload: question.question_price });
        }
        dispatch({ type: UPDATE_QUESTION, payload: question });
        setIsOpened(false);
        setWasClosed(true);
    };
    return (
        <>
            <td
                className={
                    !wasClosed
                        ? `${style.tdmain} ${style.tablemain} table-primary`
                        : `${style.tdmain} ${style.tablemain} table-danger`
                }>
                <div
                    className={wasClosed ? `${style.hidden}` : `${style.full}`}
                    onClick={openModal}>
                    <h1>{question.question_price}</h1>
                </div>
                <div
                    className={isOpened ? `${style.visible} modal` : `modal`}
                    tabIndex="-1"
                    role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Внимание, вопрос:
                                </h5>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="close"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h4>{question.question_text}</h4>
                                <h4>Время: {timer} сек. </h4>
                                <div className="form-group">
                                    <label htmlFor={`answer${question.id}`}>
                                        <h5>Ваш ответ:</h5>
                                    </label>
                                    <input
                                        ref={answerInput}
                                        type="text"
                                        className="form-control mt-2"
                                        id={`answer${question.id}`}
                                        placeholder="Введите текст"
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary">
                                    Ответить
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="btn btn-secondary">
                                    Не знаю
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </>
    );
}

export default GameQuestion;
