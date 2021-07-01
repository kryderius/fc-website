import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import Text from '../../atoms/Text';

const FormWrapper = styled.div`
  input,
  select,
  textarea {
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.black};
    background: transparent;
    outline: none;
    padding: 10px 10px;
    font-family: ${({ theme }) => theme.fontFamilyText};
    font-size: ${({ theme }) => theme.headingS};
    margin-bottom: 50px;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.black};
  }

  input[type='checkbox'] {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
    }

    button {
      outline: none;
      border: 2px solid ${({ theme }) => theme.black};
      font-family: ${({ theme }) => theme.fontFamilyHeading};
      font-size: ${({ theme }) => theme.headingS};
      border-radius: 50px;
      background: transparent;
      width: 250px;
      height: 69px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
      cursor: pointer;
      svg path {
        fill: ${({ theme }) => theme.black};
      }
      &:hover {
        background-color: ${({ theme }) => theme.black};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        color: ${({ theme }) => theme.white};

        svg path {
          fill: ${({ theme }) => theme.white};
        }
      }
    }
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  input {
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
`;

const LastLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  label,
  button {
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  button {
    @media (min-width: 768px) {
      margin-right: 10%;
    }
  }
  label {
    position: relative;
    padding-left: 30px;
    margin-bottom: 50px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    input {
      position: absolute;
      top: 2%;
      left: 0;
    }
  }
`;

const RequiredInfo = styled.div`
  position: absolute;
  top: -20%;
  right: 0;
`;

const RequiredText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyXS};
  margin: 0;
`;

const ContactForm = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          needs: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Line>
            <Field id="firstName" name="firstName" placeholder="Imię*" />
            <Field id="lastName" name="lastName" placeholder="Nazwisko*" />
          </Line>
          <Line>
            <Field id="email" name="email" placeholder="E-mail*" type="email" />
            <Field id="phone" name="phone" placeholder="Telefon" />
          </Line>
          <Field
            component="select"
            id="needs"
            name="needs"
            placeholder="Czego potrzebujesz?*"
          >
            <option>Czego potrzebujesz?*</option>
            <option>1</option>
            <option>1</option>
          </Field>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Twoja wiadomość*"
          ></Field>

          <LastLine>
            <label htmlFor="agreement">
              <Field
                type="checkbox"
                as="input"
                id="agreement"
                name="agreement"
              />
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania
            </label>
            <button type="submit">
              Wyślij{' '}
              <svg
                width="33"
                height="21"
                viewBox="0 0 33 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5919 2.90812L25.1006 8.4375H0V12.5625H25.1006L19.6838 18L22.5919 20.9081L33 10.5L22.5 0L19.5919 2.90812Z"
                  fill="#FEDD5A"
                />
              </svg>
            </button>
            <RequiredInfo>
              <RequiredText>Pola oznaczone * są obowiązkowe</RequiredText>
            </RequiredInfo>
          </LastLine>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default ContactForm;
