export const buttonMenuVariants = {
  hidden: {
    rotate: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'just',
    },
  },
};

export const buttonCloseVariants = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  animate: {
    rotate: 180,
    opacity: 1,
    transition: {
      type: 'just',
    },
  },
  exit: {
    opacity: 0,
    rotate: 0,
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

export const navbarTitleVariants = {
  hidden: {
    y: '15vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '-15vh',
    transition: {
      type: 'spring',
      duration: 0.3,
    },
  },
};

export const newTaskFormContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: '-100vw',
    y: '-100vh',
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: '200%',
    y: '6vh',
    transition: {
      type: 'tween',
      duration: '0.3',
      ease: 'backInOut',
    },
  },
};

export const cardSupVariants = {
  hidden: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};
