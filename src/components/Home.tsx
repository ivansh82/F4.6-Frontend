import React from 'react';
import '../css/Home.css';

function Home() {
    return (
        <React.Fragment>
            <div className = 'home-container'>
                <div className='home-white-list'>
                    <h2>Добро пожаловать на наш сайт!</h2>
                    <p>
                        Здесь вы сможете найти рецепты прекрасных блюд со всего света!!!! Наслаждайесь вкусной едой и ее приготовлением!
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
