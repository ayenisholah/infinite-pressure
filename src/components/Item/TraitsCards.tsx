import React, { FC } from 'react';
import { getTraitFromAttribute } from '../../helpers';
import FilterTag from '../common/Traits/Tag';
import { Trait } from '../../types/index';

interface TraitsCardsProps {
  className: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

const TraitsCards: FC<TraitsCardsProps> = (props) => {
  const { className = '', attributes = [] } = props;
  const traits: Trait[] = attributes.map((a) => (getTraitFromAttribute(a) || {}) as Trait);
  return traits.length ? (
    <div className={className}>
      {traits.map((trait) => (
        <FilterTag isLink key={trait.value} gradient={trait.gradient} color={trait.color as string} trait={trait.value} />
      ))}
    </div>
  ) : null;
};

export default TraitsCards;
