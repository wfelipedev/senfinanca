export const randomColor = (): string => {
  const color = Math.floor(Math.random() * 5);

  switch (color) {
    case 1:
      return '#bfc8d7';
    case 2:
      return '#e3e2b4';
    case 3:
      return '#a2b59f';
    case 4:
      return '#d18063';
    default:
      return '#a2b59f';
  }
};
