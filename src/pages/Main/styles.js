import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.ImageBackground`
  align-items: center;
  flex: 1;
  padding: 20px;
`;
export const Logo = styled.Image`
  height: ${Dimensions.get('window').height * 0.11}px;
  margin-top: ${Dimensions.get('window').height * 0.11}px;
  margin-bottom: ${Dimensions.get('window').height * 0.11}px;
  width: ${Dimensions.get('window').height * 0.11 * (1950 / 662)}px;
`;
export const TextWelcome = styled.Text`
  color: #10323c;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;
export const TextInstructions = styled.Text`
  color: #10323c;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;
export const TextInstructionsFileName = styled.Text`
  color: #10323c;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`;
