import { Wrapper } from './styles';

import { useHistory } from 'react-router-dom';
const Receipt = (properties) => {
  const history = useHistory();
  console.log(properties);
  console.log(history);

  return <Wrapper>Receipt</Wrapper>;
};

export default Receipt;
