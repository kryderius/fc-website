import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from './Layout';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Footer from '../components/Footer/Footer';
import { GatsbyImage } from 'gatsby-plugin-image';
import scrollTo from '../utils/scrollTo';

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

const ContentWrapper = styled.section`
  padding: 100px 15px;
`;

const ContentContainer = styled.article`
  max-width: 540px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 30px 0 !important;
    font-family: ${({ theme }) => theme.fontFamilyHeading};
  }
  h1 {
    font-size: ${({ theme }) => theme.headingL};
  }
  h2 {
    font-size: ${({ theme }) => theme.headingM};
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: ${({ theme }) => theme.headingS};
  }
  p {
    margin-bottom: 10px !important;
    font-weight: ${({ theme }) => theme.light}!important;
    line-height: 1.8;
    font-size: ${({ theme }) => theme.bodyS};
  }
`;

const AuthorWrapper = styled.div`
  max-width: 540px;
  margin: 0 auto 50px auto;
  display: flex;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const LightboxAuthorImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  overflow: hidden;
  position: relative;

  .img {
    position: abolute;
    top: 0;
    left: 0;
  }
`;

const AuthorTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

const AuthorName = styled(Text)`
  margin: 0 0 0 15px;
  font-family: ${({ theme }) => theme.fontFamilyText};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.bodyS};
  text-align: left;

  .author_before {
    font-weight: ${({ theme }) => theme.light};
    margin-right: 10px;
  }

  a {
    color: ${({ theme }) => theme.yellow};
  }
`;

const PostDate = styled(Text)`
  text-align: left;
  margin: 0 0 0 15px;
  color: #b5b5b5;
`;

const BlogPost = ({ data }) => {
  const blog = data.datoCmsBlog;

  return (
    <Layout title={blog.title}>
      <SubPageHeader background={blog.thumbnail.url}>
        <MainHeading data-aos="fade-up">{blog.title}</MainHeading>
        {/*
        <HeaderText data-aos="fade-up" data-aos-delay="200">
          {blog.title}
        </HeaderText>
        */}
      </SubPageHeader>
      <ContentWrapper>
        <AuthorWrapper>
          <LightboxAuthorImg>
            <Link
              to={`/specjalisci/${blog.author.toLowerCase()}#info`}
              onClick={(e) =>
                scrollTo(e, 'info', `/specjalisci/${blog.author.toLowerCase()}`)
              }
            >
              {blog.authorImage && (
                <GatsbyImage image={blog.authorImage.gatsbyImageData} alt="" />
              )}
            </Link>
          </LightboxAuthorImg>
          <AuthorTextWrapper>
            <AuthorName>
              <span className="author_before">Autor:</span>
              <Link to={`/specjalisci/${blog.author.toLowerCase()}#info`}>
                {blog.author}
              </Link>
            </AuthorName>
            <PostDate>{blog.date}</PostDate>
          </AuthorTextWrapper>
        </AuthorWrapper>
        <ContentContainer dangerouslySetInnerHTML={{ __html: blog.content }} />
      </ContentWrapper>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostTemplate($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      slug
      title
      author
      authorImage {
        gatsbyImageData
      }
      thumbnail {
        url
      }
      content
      date(formatString: "DD/MM/YYYY")
    }
  }
`;

export default BlogPost;
