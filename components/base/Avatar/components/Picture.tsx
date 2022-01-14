import React from 'react';
import Router from 'next/router';
import styled, { css } from 'styled-components';
import gradient from 'random-gradient';

import Icon from 'components/ui/Icon';

import { AVATAR_VARIANT_TYPE } from '../interfaces';
import { getPictureSize, getPictureFontSize } from '../utils';

interface Props {
  className?: string;
  isBanner?: boolean;
  isClickable?: boolean;
  isTooltip?: boolean;
  isVerified?: boolean;
  name?: string;
  picture?: string;
  variant?: AVATAR_VARIANT_TYPE;
  walletId?: string;
}

const Picture = ({
  isClickable = false,
  isTooltip = false,
  isVerified,
  name = 'Ternoa',
  picture,
  variant,
  walletId,
}: Props) => (
  <SPictureContainer
    isClickable={isClickable}
    isTooltip={isTooltip}
    onClick={() => isClickable && walletId && Router.push(`/${walletId}`)}
  >
    <SPictureWrapper variant={variant}>
      {isVerified && <SIcon name="badge" />}
      {picture ? (
        <SImage draggable="false" isClickable={isClickable} src={picture} />
      ) : (
        <SInitials isClickable={isClickable} name={name}>
          <SLetter variant={variant}>{name?.charAt(0) ?? 'T'}</SLetter>
        </SInitials>
      )}
    </SPictureWrapper>
    <SPopoverName>{name}</SPopoverName>
  </SPictureContainer>
);

const SPictureContainer = styled.div<{ isClickable?: boolean; isTooltip?: boolean }>`
  position: relative;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  > span {
    display: none;
  }

  ${({ isTooltip }) =>
    isTooltip &&
    `
    &:hover {
      > span {
        display: block;
      }
    }
  `}
`;

const SPictureWrapper = styled.div<{ variant?: AVATAR_VARIANT_TYPE }>`
  width: ${({ variant }) => getPictureSize(variant)};
  height: ${({ variant }) => getPictureSize(variant)};
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  z-index: 5;
`;

const SIcon = styled(Icon)`
  position: absolute;
  width: 40%;
  bottom: 3%;
  right: -3%;
  z-index: 10;
`;

const ImageStyle = css<{ isClickable?: boolean }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  position: absolute;
  transition: border 0.05s ease-out;

  ${({ isClickable, theme }) =>
    isClickable &&
    `
      &:hover {
        border: 3px solid;
        border-color: ${theme.colors.primary};
      }
    }
  `}
`;

const SImage = styled.img`
  ${ImageStyle}
`;

const SInitials = styled.div<{ isClickable?: boolean; name: string }>`
  ${ImageStyle}

  background: ${({ name }) => gradient(name)};
`;

const SLetter = styled.div<{ variant?: AVATAR_VARIANT_TYPE }>`
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ variant }) => getPictureFontSize(variant)};
  text-transform: uppercase;
`;

const SPopoverName = styled.span`
  position: absolute;
  background: ${({theme}) => theme.colors.contrast};
  border-radius: 0.8rem;
  box-shadow: 0px 0px 14.5243px 5.0835px rgb(0 0 0 / 10%);
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 1.4rem;
  max-width: 32rem;
  padding: 0.8rem 1.6rem;
  bottom: 110%;
  left: 50%;
  text-align: center;
  transform: translateX(calc(-50%));
  z-index: 10;
`;

export default Picture;
