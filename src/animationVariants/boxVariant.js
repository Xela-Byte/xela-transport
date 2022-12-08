export const boxAnimation = {
  initial: {
    opacity: 0,
    x: '-10vw',
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

export const reverseBoxAnimation = {
  initial: {
    opacity: 0,
    x: '10vw',
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};
