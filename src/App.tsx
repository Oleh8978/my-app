import { useRef, useState, useEffect, useCallback } from 'react';
import Cart from './components/Cart'

import { getDaysInMonth } from './utils/dates';

function App() {
  console.log(getDaysInMonth())
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0
  });
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    console.log("scrolling");
  }, []);

  useEffect(() => {
    const div = ourRef.current;
    console.log("Div is ", div);
    if (div) {
      //@ts-ignore
      div.addEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const handleDragStart = (e: any) => {
    if (!ourRef.current) return
    //@ts-ignore
    const slider = ourRef.current?.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
    setIsMouseDown(true)
    document.body.style.cursor = "grabbing"
  }

  const handleDragEnd = () => {
    setIsMouseDown(false)
    if (!ourRef.current) return
    document.body.style.cursor = "default"
  }

  const handleDrag = (e: any) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    //@ts-ignore
    const slider = ourRef.current?.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  }

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className="horizontal-calendar-container"
      onScroll={handleScroll}
    >
      <div

        className="horizontal-calendar-body">{getDaysInMonth().map(element => {
          return < Cart key={element.seconds} element={element} />
        })}</div>
    </div>
  );
}

export default App;
