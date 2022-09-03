/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getElementType from '../../lib/getElementType';

interface ButtonProps {
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  animate?: boolean;
  animateScale?: number;
  href?: string;
  ghost?: boolean;
  title?: string;
}

interface LinkProps {
  className?: string;
  url?: any;
  children?: React.ReactNode;
  target?: string;
  animate?: boolean;
  animateScale?: number;
  title?: string;
}

interface ButtonComponentProps extends ButtonProps, LinkProps {}

const Button = (props: ButtonProps) => {
  const { ariaLabel = '', type, className, loading, children, disabled, onClick, animate, animateScale, ghost, title } = props;
  return (
    <StyledButton
      aria-label={ariaLabel}
      // eslint-disable-next-line react/button-has-type
      title={title}
      type={type}
      className={`${className} ${loading ? 'loading' : ''} ${ghost ? 'ghost' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...(animate && { whileTap: { scale: animateScale } })}
    >
      {children}
    </StyledButton>
  );
};

const LinkButton = (props: LinkProps) => {
  const { className, children, url, target, animate, animateScale, title } = props;
  return /^https?:/.test(url || '') ? (
    <a href={url} target={target || '_blank'} rel="nofollow noopener noreferrer" className={className} title={title}>
      {children}
    </a>
  ) : (
    <ButtonLink to={url} {...(target ? { target, rel: 'nofollow noopener noreferrer' } : {})} className={`${className}`} {...(animate && { whileTap: { scale: animateScale } })}>
      {children}
    </ButtonLink>
  );
};

const computeElementType = (props: any) => {
  const { attached, label } = props;
  if (!attached || !label) return 'button';
  return undefined;
};

const ButtonComponent = (props: ButtonComponentProps) => {
  const elementType = getElementType(Button, props, computeElementType);

  const buttonMarkup = elementType === 'button' ? <Button {...props} /> : null;

  const linkMarkup = elementType === 'a' ? <LinkButton {...props} /> : null;

  return (
    <>
      {linkMarkup}
      {buttonMarkup}
    </>
  );
};

ButtonComponent.defaultProps = {
  ariaLabel: '',
  animate: true,
  animateScale: 0.85,
};

const StyledButton = styled.button`
  :focus {
    outline: none;
    border: none;
  }

  &:not(.ghost) {
    background-color: ${(props) => props.theme.primaryBtn1};
  }

  &.ghost {
    background-color: transparent;
    color: ${(props) => props.theme.primary3};
  }

  color: ${(props) => props.theme.primary1};
`;

const ButtonLink = styled(Link)`
  &:not(.ghost) {
    background-color: ${(props) => props.theme.primaryBtn1};
  }

  &.ghost {
    background-color: transparent;
    color: ${(props) => props.theme.primary3};
  }

  color: ${(props) => props.theme.primary1};
`;

export default ButtonComponent;
