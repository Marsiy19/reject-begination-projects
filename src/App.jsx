
import React from 'react'
import { Users } from './components/Users/Users'
import Appqo from './components/Users/Appqo'

const App = () => {
  return (
    <Appqo />
  )
}

export default App












































//<---------- Questions ----------->

// import { useState } from 'react';
// import './index.scss';

// const questions = [
//   {
//     title: 'React - это ... ?',
//     variants: ['библиотека', 'фреймворк', 'приложение'],
//     correct: 0,
//   },
//   {
//     title: 'Компонент - это ... ',
//     variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
//     correct: 1,
//   },
//   {
//     title: 'Что такое JSX?',
//     variants: [
//       'Это простой HTML',
//       'Это функция',
//       'Это тот же HTML, но с возможностью выполнять JS-код',
//     ],
//     correct: 2,
//   },
// ];

// function Result({correct}) {
//   return (
//     <div className="result">
//       <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
//       <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
//       <form>
//         <button>Попробовать снова</button>
//       </form>
//     </div>
//   );
// }

// function Game({question, onClickVariant, step}) {
//   const procent = Math.round((step / questions.length) * 100)
//   // console.log(procent);
//   return (
//     <>
//       <div className="progress">
//         <div style={{ width: `${procent}%` }} className="progress__inner"></div>
//       </div>
//       <h1>{question.title}</h1>
//       <ul>
//         {
//           question.variants.map((item, index) => (
//             <li onClick={() => onClickVariant(index)} key={index}>{item}</li>
//           ))
//         }
//       </ul>
//     </>
//   );
// }

// function App() {

//   const [step, setStep ] = useState(0)
//   const [correct, setCorrect ] = useState(0)

//   const question = questions[step]

//   const onClickVariant = (index) => {

//     console.log(step, index);
//     setStep(step + 1 );

//     if(index === question.correct) {
//       setCorrect(correct + 1)
//     }
//   }



//   return (
//     <div className="App">
//       {
//         step !== questions.length?  (
//           <Game step={step} question={question} onClickVariant={onClickVariant} />
//         ) : (
//       <Result step={step} correct={correct} />


//         )
//       }

//     </div>
//   );
// }

// export default App;













































//<----------- Modal okno animated ---------->


// import React, { useState } from 'react';
// import './index.scss';


// const Modal = ({ open, setOpen, children}) => (

//   <div className={`overlay animated ${open ? 'show' : ''} `}>
//   <div className="modal flex">
//     <div className='flex flex-col'>

//     {children}
//     </div>
//   <i onClick={() => setOpen(false)} className="bx bx-x text-4xl"></i>
//   </div>
// </div>

// )


// function App() {

//   const [open, setOpen] = useState(false)




//   return (
//     <div className="App">
//       <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>

//       <Modal open={open} setOpen={setOpen} >
//     <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
//     <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iure.</h5>

        
//       </Modal>

//     </div>
//   );
// }

// export default App;


















































// <-------    Modalniy Okno ----->





// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [open, setOpen] = useState(true)

//   const openModal = () => {
//     setOpen(!open)
//     console.log('open');
//   }






//   return (
//     <div>
//       <button onClick={() => openModal()}>Modal Page</button>

//       {
//         open && (
//           <div className="overlay -mt-16 flex items-center justify-center absolute w-full h-full bg-zinc-800">
//         <div className="modal bg-white p-5 flex">
//           <img src="https://avatars.mds.yandex.net/i?id=b1f9c140c59e9ab44393e929426c98fe2f14c28f-8493932-images-thumbs&n=13" alt="" />
//           <i onClick={() => openModal()} className="bx bx-x text-4xl"></i>
//         </div>
//       </div>
//         )
//       }

//     </div>
//   )
// }

// export default App









































// <-------    Count ----->



// // import React, { useState } from 'react'

// // const App = () => {

// //   const [count, setCount] = useState(0)

// //   const plusCount = () =>{
// //     setCount(count + 1);
// //   }

// //   const minusCount = () =>{
// //     setCount(count - 1);
// //   }
// //   return (
// //     <div className="App">
// //       <div>
// //         <h2>Счетчик:</h2>
// //         <h1>{count}</h1>
// //         <button onClick={() => minusCount()} className="minus">- Минус</button>
// //         <button onClick={() => plusCount()} className="plus">Плюс +</button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App