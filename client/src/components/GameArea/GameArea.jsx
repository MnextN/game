import React, { useEffect, useState } from 'react';
import GameQuestion from '../GameQuestion/GameQuestion';
import style from './GameArea.module.css';
import { logoutAxios } from '../../axios/game';

function GameArea(props) {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        async function getGame() {
            const res = await logoutAxios();
            setQuestion(res.data);
            console.log(question);
        }

        getGame();
    }, []);

    return (
        <div className="container col-6">
            {/*<h1 className="text-center mb-5">СВОЯ ИГРА</h1>*/}
            {/*<table className={`table ${style.tablemain}`}>*/}
            {/*    <tbody>*/}
            {/*        {topics.length ? (*/}
            {/*            topics.map((topic) => {*/}
            {/*                return (*/}
            {/*                    <tr*/}
            {/*                        className={`${style.trmain} ${style.thborder} `}*/}
            {/*                        key={topic.id}*/}
            {/*                    >*/}
            {/*                        <th scope="row" className="">*/}
            {/*                            <h2>{topic.topic_name}</h2>*/}
            {/*                        </th>*/}
            {/*                        {questions.filter(*/}
            {/*                            (question) =>*/}
            {/*                                question.id_topic === topic.id*/}
            {/*                        ).length ? (*/}
            {/*                            questions*/}
            {/*                                .filter(*/}
            {/*                                    (question) =>*/}
            {/*                                        question.id_topic ===*/}
            {/*                                        topic.id*/}
            {/*                                )*/}
            {/*                                .map((question) => (*/}
            {/*                                    <GameQuestion*/}
            {/*                                        key={question.id}*/}
            {/*                                        question={question}*/}
            {/*                                    />*/}
            {/*                                ))*/}
            {/*                        ) : (*/}
            {/*                            <p>NO TOPIC DATA IS LOADED</p>*/}
            {/*                        )}*/}
            {/*                    </tr>*/}
            {/*                );*/}
            {/*            })*/}
            {/*        ) : (*/}
            {/*            <p>NO GAME DATA IS LOADED</p>*/}
            {/*        )}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    );
}

export default GameArea;
