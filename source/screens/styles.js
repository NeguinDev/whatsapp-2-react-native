import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 50;
`;