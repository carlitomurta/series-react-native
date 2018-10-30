import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
const FormRow = props => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.View``;
export default FormRow;
