const scrollUp = () => {
  const list = document.getElementById('carsItem-list');
  const scrollAmount = 1; // change this to adjust the scrolling speed
  list.scrollTop -= scrollAmount;
};
const scrollDown = () => {
  const list = document.getElementById('carsItem-list');
  const scrollAmount = 1; // change this to adjust the scrolling speed
  list.scrollTop += scrollAmount;
};

export { scrollUp, scrollDown };
