import React from 'react';
import styled from 'styled-components';
import Flex from '../../../components/Flex';
import Sidebar from '../../../components/Sidebar';
import Tag from '../../../components/Tag';
import { media } from '../../../utils/theme';

const CustomSidebar = styled(Sidebar)`
  ${media.lessThan('small')`
   width: 100%;
  `};
`;

const TagTitle = styled.h4`
  margin-left: 1rem;
  margin-bottom: 1rem;
`

const ListWrapper = Flex.extend`
  flex-direction: column;
  margin-bottom: 30px;
  ${media.lessThan('small')`
    flex-direction: row;
    padding-left: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  `};
`;

const ArchiveSidebar = ({ tags = [], nums = {}, years = [] }) => (
  <CustomSidebar>
    <TagTitle>Years</TagTitle>
    <ListWrapper>
      {years.map(year => (
        <Tag key={year} tag={year} to={`/archive/years/${year}`} />
      ))}
    </ListWrapper>
    <TagTitle>Tags</TagTitle>
    <ListWrapper>
      {tags.map(tag => (
        <Tag
          key={tag}
          tag={`${tag} (${nums[tag]})`}
          to={`/archive/tags/${tag}`}
        />
      ))}
    </ListWrapper>
  </CustomSidebar>
);

export default ArchiveSidebar;
