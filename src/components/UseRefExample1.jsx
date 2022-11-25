import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Cats';
    inputRef.current.style.backgroundColor = 'green';
    paraRef.current.innerText = 'Hello';
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>
        Good day
      </p>
    </div>
  );
}

export default UseRefExample1;
