import React, { useEffect, useState } from 'react';
import GameQuestion from '../GameQuestion/GameQuestion';
import style from './GameArea.module.css';
import { logoutAxios } from '../../axios/game';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_QUESTIONS } from '../../redux/actionTypes/questionsAT';
import { topicAxios } from '../../axios/topic';

function GameArea(props) {
    const [topics, setTopics] = useState([]);

    const dispatch = useDispatch();
    const { questions } = useSelector((state) => state.questionsReducer);
    const { user } = useSelector((state) => state.usersReducer);

    useEffect(() => {
        async function getGame() {
            const res = await logoutAxios();
            const restopics = await topicAxios();
            localStorage.setItem('points', user.points);
            user.points = 0;
            setTopics(() => restopics.data);
            dispatch({ type: INIT_QUESTIONS, payload: res.data });
        }

        getGame();
    }, [dispatch]);

    return (
        <div className="container col-6">
            <h1 className="text-center mb-5">СВОЯ ИГРА</h1>
            <h2 className="text-center mb-5">Ваше очкооо:{user.points}</h2>

            <table className={`table ${style.tablemain}`}>
                <tbody>
                    {topics.length ? (
                        topics.map((topic) => {
                            return (
                                <tr
                                    className={`${style.trmain} ${style.thborder} `}
                                    key={topic.id}>
                                    <th scope="row" className="">
                                        <h2>{topic.topic_name}</h2>
                                    </th>
                                    {questions.filter(
                                        (question) =>
                                            question.id_topic === topic.id
                                    ).length ? (
                                        questions
                                            .filter(
                                                (question) =>
                                                    question.id_topic ===
                                                    topic.id
                                            )
                                            .map((question) => (
                                                <GameQuestion
                                                    key={question.id}
                                                    question={question}
                                                />
                                            ))
                                    ) : (
                                        <th>
                                            <h2>NO TOPIC DATA IS LOADED</h2>
                                        </th>
                                    )}
                                </tr>
                            );
                        })
                    ) : (
                        <td>NO GAME DATA IS LOADED</td>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default GameArea;
