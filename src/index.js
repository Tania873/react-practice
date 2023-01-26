// import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// import paintings from "./paintings.json";

// const elem1 = React.createElement('span', {children: 'Hello'});
// const elem2 = React.createElement('span', {children: 'world'});

// const element = React.createElement('div', {a: 5, b: 10, children: 'Hello world',});
// const jsxElement = <div>Hello world</div>

// ReactDOM.render(element, document.querySelector('#root'));

// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;

// const element = (<div>{elem1}{elem2}</div>);
// console.log(element);

// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// };

// const painting = (
//   <div>
//   <img src={data.url} alt={data.title} width="480" />
//   <h2>{data.title}</h2>
//   <p>Автор: <a href={data.author.url}>{data.author.tag}</a></p>
//   <p>Цена: {data.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));



// const painting = paintings[0];

// ReactDOM.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     author={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector("#root")
// );

ReactDOM.render(<App />, document.querySelector('#root'));










// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

