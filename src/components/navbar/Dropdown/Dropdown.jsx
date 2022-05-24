import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = (props) =>{
  const [click, setClick] = useState(false);
  const [datas, setDatas] = useState(props.data)

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {datas && datas.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;