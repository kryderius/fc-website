import React from 'react';
import Videomp4 from '../../../assets/Video/muppetsVideo.mp4';
import styled from 'styled-components';
import Text from '../../atoms/Text';

const Wrapper = styled.section`
  padding: 0 15px;
`;

const Container = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const Left = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media (min-width: 1200px) {
    width: 30%;
    margin-bottom: 0;
  }

  video {
    width: 80%;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

    @media (min-width: 1200px) {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  @media (min-width: 1200px) {
    width: 70%;
    margin-left: 100px;
  }
`;

const StyledText = styled(Text)`
  text-align: left;
  line-height: 1.3;

  ul {
    list-style-type: disc;
    padding-left: 30px;
  }
`;
const VideoSection = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <video width="auto" height="auto" controls>
            <source src={Videomp4} type="video/mp4" />
            Przepraszamy, ale najwidoczniej Twoja przeglądarka nie obsługuje
            odtwarzania wideo
          </video>
        </Left>
        <Right>
          <StyledText>
            W ramach studiów podyplomowych UX Design na Uniwersytecie SWPS wraz
            z zespołem projektowym stworzyliśmy od podstaw zaawansowany prototyp
            platformy rozwiązującej problemy dwóch grup społecznych:
            <br />
            <br />
            <ul>
              <li>
                <strong>właścicieli zwierząt</strong>, którzy mieszkają w dużych
                miastach i prowadzą intensywny tryb życia, przez co nie zawsze
                mogą odpowiednio zadbać o podstawowe potrzeby pupila,
              </li>
              <li>
                <strong>specjalistów</strong> (behawioryści, tresura,
                petsitting), którzy aktualnie muszą budować własną markę na
                rozproszonych kanałach komunikacyjnych, nie mając bezpośredniego
                dostępu do potencjalnych zainteresowanych.
              </li>
            </ul>
            <br />
            W odpowiedzi na potrzeby obu grup opracowaliśmy platformę łączącą
            właścicieli zwierząt z doświadczonymi opiekunami. Platforma ta
            umożliwia usługodawcom określenie zakresu swoich usług oraz
            kreowania własnego wizerunku, natomiast usługobiorcy uzyskują dostęp
            do bazy zweryfikowanych specjalistów i komfort podejmowania decyzji
            na podstawie referencji i ocen innych użytkowników.
            <br />
            <br />
            Proces projektowania doświadczeń użytkowników obejmował pełną
            procedurę, począwszy od zdefiniowania problemu oraz person, po
            badania potrzeb, strategię produktu, modelowanie i prototypowanie,
            aż po testy użyteczności.
          </StyledText>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default VideoSection;
