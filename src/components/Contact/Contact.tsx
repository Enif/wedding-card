import styled from '@emotion/styled';
import React from 'react';
import youngjaeProfileImg from '~/assets/profile_youngjae.jpg';
import sooyeonProfileImg from '~/assets/profile_sooyeon.jpg';
import callIcon from '~/assets/icon_call.svg';
import messageIcon from '~/assets/icon_message.svg';
import AccountNumber from './AccountNumber';

const Wrapper = styled.div({
  padding: '2rem 0',
  background: 'linear-gradient(180deg, #C1A1A1 0%, #8065AE 100%);',
});

const Title = styled.h2({
  margin: '1rem 0 1rem',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#FFFFFF',
  position: 'relative',
});

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '0.5rem 2rem 1rem',
  gap: '1rem',
});

const ProfileImg = styled.img({
  borderRadius: '50%',
});

const Method = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Link = styled.a({

});

const Button = styled.button({
  background: 'rgba(255, 255, 255, 0.2)',
  width: '3.5rem',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1.2rem',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  margin: '0.3rem',
  transition: '0.2s',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.4)',
  },
});

const Icon = styled.img({

});

const Account = styled.div({
  padding: '1rem 0',
});

const AccountTitle = styled.h3({
  color: '#FFFFFF',
  fontSize: '1rem',
});

const AccountText = styled.p({
  color: '#EFEFEF',
  fontSize: '0.7rem',
  margin: '0.7rem 0',
});

function Contact() {
  return (
    <Wrapper id="contact">
      <Title>Contact</Title>
      <Grid>
        <ProfileImg src={youngjaeProfileImg} />
        <ProfileImg src={sooyeonProfileImg} />
        <Method>
          <Link href="tel:010-8874-1803">
            <Button>
              <Icon src={callIcon} />
            </Button>
          </Link>
          <Link href="sms:010-8874-1803">
            <Button>
              <Icon src={messageIcon} />
            </Button>
          </Link>
        </Method>
        <Method>
          <Link href="tel:010-9216-4839">
            <Button>
              <Icon src={callIcon} />
            </Button>
          </Link>
          <Link href="sms:010-9216-4839">
            <Button>
              <Icon src={messageIcon} />
            </Button>
          </Link>
        </Method>
      </Grid>
      <Account>
        <AccountTitle>마음 전하실 곳</AccountTitle>
        <AccountText>각 계좌번호를 클릭하시면 복사됩니다.</AccountText>
        <Grid>
          <AccountTitle>- 신랑 측 -</AccountTitle>
          <AccountTitle>- 신부 측 -</AccountTitle>
          <AccountNumber name="신랑 김영재" accountNumber="신한 312-0000-0000" />
          <AccountNumber name="신부 안수연" accountNumber="신한 312-0000-0000" />
          <AccountNumber name="아버지 김국태" accountNumber="신한 312-0000-0000" />
          <AccountNumber name="아버지 안경모" accountNumber="신한 312-0000-0000" />
          <AccountNumber name="어머니 서은희" accountNumber="신한 312-0000-0000" />
          <AccountNumber name="어머니 고희정" accountNumber="신한 312-0000-0000" />
        </Grid>
      </Account>
    </Wrapper>
  );
}

export default Contact;
