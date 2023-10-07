import React, { useState, useEffect } from 'react';
import State from '../pages/state';
import Effect from '../pages/effect';
import Ucontext from '../pages/ucontext';

const Selector = ({ selection }) => {
  const [page, setPage] = useState(selection);

  useEffect(() => {
    setPage(selection);
  }, [selection]);

  const returnPage = () => {
    switch (page) {
      case "useEffect":
        return <Effect />;
      case "useState":
        return <State />;
      case "useContext":
        return <Ucontext />;
    }
  }

  return (
    <>
      {returnPage()} 
    </>
  );
};

export default Selector;