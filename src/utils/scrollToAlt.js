import { scroller } from 'react-scroll';
import { navigate } from 'gatsby';
import ReactDOM from 'react-dom';

const scrollToAlt = (e, target) => {
  e.preventDefault();
  const node = document.getElementById(target);
  const element = ReactDOM.findDOMNode(node);
  if (element) {
    scroller.scrollTo(target, {
      duration: 1500,
      smooth: 'easeOutQuad',
      offset: -100,
    });
  } else {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(target, {
        duration: 1500,
        smooth: 'easeOutQuad',
        offset: -100,
      });
    }, 500);
  }
};

export default scrollToAlt;
