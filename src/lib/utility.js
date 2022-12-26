export const addSpan = (text) => {
    return [...text].map((letter, index) => <span key={index} className='words'>{letter}</span>)
  };