const App = () => {
  function handleClick() {
    console.log("api call..");
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  function handleMouse() {
    console.log("api call...to do some operation");
  }

  function throttle(fn, delay) {
    let run = false;
    return function (...args) {
      if (!run) {
        fn(...args);
        run = true;
        setTimeout(() => (run = false), delay);
      }
    };
  }

  // window.addEventListener("mousemove", handleMouse);

  window.addEventListener("mousemove", throttle(handleMouse, 1000));

  return (
    <div>
      <input type="text" onChange={debounce(handleClick, 300)} />
    </div>
  );
};

export default App;
