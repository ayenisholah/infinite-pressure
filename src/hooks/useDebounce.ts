const useDebounce = (func: Function, milliseconds: number) => {
  const time = milliseconds || 400;
  let timer: any;

  return (event: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};

export default useDebounce;
