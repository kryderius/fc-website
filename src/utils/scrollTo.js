import { scroller } from 'react-scroll';
import { navigate } from 'gatsby';

const scrollTo = (e, target, page) => {
  e.preventDefault();
  if (page) {
    navigate(page);
    setTimeout(() => {
      scroller.scrollTo(target, {
        duration: 1500,
        smooth: 'easeOutQuad',
        offset: -100,
      });
    }, 500);
  } else {
    scroller.scrollTo(target, {
      duration: 1500,
      smooth: 'easeOutQuad',
      offset: -100,
    });
  }
};

export default scrollTo;
