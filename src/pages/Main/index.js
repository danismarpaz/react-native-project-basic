import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Logo,
  TextWelcome,
  TextInstructions,
  TextInstructionsFileName,
} from './styles';

const Main = () => (
  <Container
    source={{
      uri: 'https://webtec.inf.br/mobile/background-webtec.png',
    }}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#10323c" />
    <Logo
      source={{
        uri: 'https://webtec.inf.br/mobile/Webtec_Logov2.png',
      }}
      resizeMode="contain"
    />
    <TextWelcome>Bem-vindo ao Template Básico!</TextWelcome>
    <TextInstructions>
      Essa é a tela principal da sua aplicação =)
    </TextInstructions>
    <TextInstructions>Você pode editar a tela no arquivo:</TextInstructions>
    <TextInstructionsFileName>src/pages/Main/index.js</TextInstructionsFileName>
  </Container>
);

export default Main;
