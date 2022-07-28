import {useState, useEffect} from 'react';
import Calculator from './components/Calculator'

function App() {
  const [res, setRes] = useState('0');
  const [sign, setSign] = useState(false);

  const handleOnClickDigit = (e) => {
      setRes(prev => {
        if (!e.target.classList.contains('digit')) return prev;
        if (res === '0') return e.target.innerHTML;
        else {
          return prev + e.target.innerHTML;
        }
      }
    );
  }

  const handlerReset = (e) => {
    setRes(prev => {
      if (!e.target.classList.contains('reset')) return;
      else {
        return '0';
      }
    });
  }

  const handleChangeSign = () => {
    if (sign) {
      setRes(prev => prev.slice(1, prev.length));
      setSign(prev => !prev);
    } else {
      setRes(prev => '-' + prev);
      setSign(prev => !prev);
    }
  }

  const handleOperator = (e) => {
    switch(e.target.innerHTML) {
      case '/': setRes(prev => prev + '/');break;
      case 'x': setRes(prev => prev + '*');break;
      case '-': setRes(prev => prev + '-');break;
      case '+': setRes(prev => prev + '+');break;
      case '=': setRes(prev => JSON.stringify(eval(prev)));break;
    }
  }

  const handlePercent = () => {
    setRes(prev => JSON.stringify(JSON.parse(prev) / 100));
    
  }

  return (
    <Calculator res={res} handleOnClickDigit={handleOnClickDigit} handleReset={handlerReset} handleChangeSign={handleChangeSign} handleOperator={handleOperator} handlePercent={handlePercent}/>
  )
}

export default App;
