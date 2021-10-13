import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../templates/Layout';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Footer from '../components/Footer/Footer';
import { GatsbyImage } from 'gatsby-plugin-image';

const MainHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.headingS};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingM};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingM};
  }
`;

const SectionWrapper = styled.section`
  padding: 100px 15px;
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
    column-gap: 1.5rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const PostBox = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  border: 1px solid #d3d3d3;
  transition: box-shadow 0.2s ease-in-out;

  @media (min-width: 1200px) {
    width: unset;
    flex-basis: calc(50% - 0.75rem);
  }

  &:hover {
    box-shadow: 0 4px 35px rgba(0, 0, 0, 0.25);
  }
`;

const PostBoxImageWrapper = styled.div`
  border-bottom: 1px solid #d3d3d3;
  max-height: 300px;
  overflow: hidden;
  position: relative;

  @media (min-width: 1200px) {
    max-height: 450px;
  }
`;

const PostBoxImage = styled(GatsbyImage)``;

const PostBoxContentWrapper = styled.div`
  padding: 15px 30px;
`;

const PostBoxContentDate = styled(Text)`
  text-align: left;
  color: #b5b5b5;
`;

const PostBoxContentTitle = styled(Text)`
  text-align: left;
  font-size: ${({ theme }) => theme.headingS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.bold};
`;

const BlogPage = () => {
  const blog = useStaticQuery(blogQuery);
  return (
    <Layout title="Baza wiedzy">
      <SubPageHeader background="">
        <MainHeading data-aos="fade-up">Baza wiedzy</MainHeading>
        {/*
        <HeaderText data-aos="fade-up" data-aos-delay="200">
          {blog.title}
        </HeaderText>
        */}
      </SubPageHeader>
      <SectionWrapper>
        <SectionContainer>
          {blog.allDatoCmsBlog.edges.map((item) => (
            <PostBox to={`/blog/${item.node.slug}`}>
              <PostBoxImageWrapper>
                <PostBoxImage image={item.node.thumbnail.gatsbyImageData} />
              </PostBoxImageWrapper>
              <PostBoxContentWrapper>
                <PostBoxContentDate>{item.node.date}</PostBoxContentDate>
                <PostBoxContentTitle>{item.node.title}</PostBoxContentTitle>
              </PostBoxContentWrapper>
            </PostBox>
          ))}
        </SectionContainer>
      </SectionWrapper>
      <Footer />
    </Layout>
  );
};

export const blogQuery = graphql`
  query blogPostsArchive {
    allDatoCmsBlog {
      edges {
        node {
          title
          slug
          thumbnail {
            gatsbyImageData
          }
          date(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`;

export default BlogPage;
