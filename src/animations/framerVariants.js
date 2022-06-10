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
  exit: {
    opacity: 0,
  },
};

export const sidebarVariants = {
  hidden: {
    x: '-15vw',
    opacity: 0,
  },
  animate: {
    x: '0',
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
  exit: {
    x: '-15vw',
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 95,
    },
  },
};