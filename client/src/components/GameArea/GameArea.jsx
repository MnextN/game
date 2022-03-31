import React from 'react';
import GameQuestion from '../GameQuestion/GameQuestion';
import style from './GameArea.module.css';

function GameArea(props) {
    const topics = [
        { id: 1, topic_name: 'Про Эльбрус' },
        { id: 2, topic_name: 'Животные' },
        { id: 3, topic_name: 'Знаменитости' },
    ];

    const questions = [
        {
            id: 1,
            question_text: 'Вопрос Эльбрус 1',
            question_price: 100,
            question_answer: 'answer',
            id_topic: 1,
        },
        {
            id: 2,
            question_text: 'Вопрос Эльбрус 2',
            question_price: 300,
            question_answer: 'answer',
            id_topic: 1,
        },
        {
            id: 3,
            question_text: 'Вопрос Эльбрус 3',
            question_price: 500,
            question_answer: 'answer',
            id_topic: 1,
        },
        {
            id: 4,
            question_text: 'Вопрос Животные 1',
            question_price: 100,
            question_answer: 'answer',
            id_topic: 2,
        },
        {
            id: 5,
            question_text: 'Вопрос Животные 2',
            question_price: 300,
            question_answer: 'answer',
            id_topic: 2,
        },
        {
            id: 6,
            question_text: 'Вопрос Животные 3',
            question_price: 500,
            question_answer: 'answer',
            id_topic: 2,
        },
        {
            id: 7,
            question_text: 'Вопрос Знаменитости 1',
            question_price: 100,
            question_answer: 'answer',
            id_topic: 3,
        },
        {
            id: 8,
            question_text: 'Вопрос Знаменитости 2',
            question_price: 300,
            question_answer: 'answer',
            id_topic: 3,
        },
        {
            id: 9,
            question_text: 'Вопрос Знаменитости 3',
            question_price: 500,
            question_answer: 'answer',
            id_topic: 3,
        },
    ];

    return (
        <div className="container col-6">
            <h1 className="text-center mb-5">СВОЯ ИГРА</h1>
            <table className={`table ${style.tablemain}`}>
                <tbody>
                    {topics.length ? (
                        topics.map((topic) => {
                            return (
                                <tr
                                    className={`${style.trmain} ${style.thborder} `}
                                    key={topic.id}
                                >
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
                                        <p>NO TOPIC DATA IS LOADED</p>
                                    )}
                                </tr>
                            );
                        })
                    ) : (
                        <p>NO GAME DATA IS LOADED</p>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default GameArea;
