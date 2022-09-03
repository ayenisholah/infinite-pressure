const getElementType = (Component: any, props: any, getDefault: (props: any) => 'button' | undefined): string => {
  const { defaultProps = {} } = Component;

  if (props.as && props.as !== defaultProps.as) return props.as;

  if (props.url) return 'a';

  if (getDefault) {
    const computedDefault = getDefault(props);
    if (computedDefault) return computedDefault;
  }

  return defaultProps.as || 'div';
};

export default getElementType;
