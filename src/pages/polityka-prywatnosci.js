import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import Heading from '../components/atoms/Heading';
import PrivacyPolicyContent from '../utils/PrivacyPolicyContent';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import HeaderIMG from '../assets/images/privacy_header.jpg';
import Footer from '../components/Footer/Footer';

const PageWrapper = styled.div``;

const Title = styled(Heading)`
  color: ${({ theme }) => theme.white};
`;

const ContentContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 100px 15px;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageWrapper>
        <SubPageHeader background={HeaderIMG}>
          <Title>Polityka prywatności i cookies</Title>
        </SubPageHeader>

        <ContentContainer>
          <PrivacyPolicyContent />
        </ContentContainer>
      </PageWrapper>
      <Footer />
    </Layout>
  );
};

export default PrivacyPolicy;
