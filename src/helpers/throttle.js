export default function throttle(fn, { threshold = 200, context = window }) {
    let last;
  
    return function () {
      const now = +new Date;
  
      if ( !last || now >= (last + threshold) ) {
        last = now;
        fn.apply(context, arguments);
      }
    };
  };