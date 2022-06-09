export const buttonMenuVariants = {
  hidden: {
    opacity: 0,
    rotate: 0,
  },
  animate: {
    opacity: 1,
    rotate: 180,
    transition: {
      type: 'just',
    },
  },
};

export const buttonCloseVariants = {
  hidden: {
    rotate: 180,
    opacity: 0,
  },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'just',
    },
  },
};
