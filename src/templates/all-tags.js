import React from 'react';
import styled from 'styled-components';
import Flex from '../components/Flex';
import Sidebar from '../components/Sidebar';
import Tag from '../components/Tag';

const TagsWrapper = Flex.extend`
  flex-direction: column;
`;

const AllTags = ({ pathContext }) => {
  const { tags, nums } = pathContext;

  if (tags) {
    return (
      <Flex>
        <Sidebar>
          <TagsWrapper>
            {tags.map(tag => {
              return <Tag key={tag} tag={`${tag} (${nums[tag]})`} />;
            })}
          </TagsWrapper>
        </Sidebar>
      </Flex>
    );
  }
};

export default AllTags;
