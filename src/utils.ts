export const generateClassName = (name: string) => {
  const componentName = 'react-strange-' + name;
  return (className: string): string => {
    return componentName + '-' + className;
  };
};
