import React from 'react';
import { Link } from "react-router-dom";
import BookSvg from './BookSvg';

function Card() {
    return (
            <div className="card">
                <Link to="">
                    <BookSvg />
                    <div className="text">
                        <div className="card-title">
                            <h2>PLANO DIRETOR</h2>
                        </div>
                        <div className="card-text">
                            <p>planejamento urbano para orientar o desenvolvimento e o crescimento das cidades de forma
                                ordenada e sustentável. aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa</p>
                        </div>
                    </div>
                    <div className="see-more">
                        <p>Leia mais <b id="arrow">→</b></p>
                    </div>
                </Link>
            </div>
    );
}

export default Card;

