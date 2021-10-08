import { Wrapper, Image } from './styles';
import { ui } from '../../data/data';

import { useHistory } from 'react-router-dom';
const Logo = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };
  return (
    <Wrapper>
      <Image
        src={ui.logo}
        alt="logo"
        onClick={() => {
          handleClick('/');
        }}
      />
    </Wrapper>
  );
};

export default Logo;
