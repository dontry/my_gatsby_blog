import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import ArchiveSidebar from './components/ArchiveSidebar';
import MarkdownExcerpt from '../components/MarkdownExcerpt';

const Archive = ({ pathContext }) => {
  const { tags, nums, posts, years } = pathContext;
  return (
    <Flex>
      <ArchiveSidebar tags={tags} nums={nums} years={years} />
      <Container>
        {years.map(year => {
          return (
            <div style={{ marginBottom: 50 }}>
              <h1 style={{ marginBottom: 10 }}>{year}</h1>
              {posts
                .filter(
                  ({ node: post }) =>
                    new Date(post.fields.date).getFullYear() === year
                )
                .map(({ node: post }) => (
                  <MarkdownExcerpt key={post.frontmatter.title} post={post} />
                ))}
            </div>
          );
        })}
      </Container>
    </Flex>
  );
};

export default Archive;
