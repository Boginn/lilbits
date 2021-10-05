import { Wrapper, Image } from './styles';
import { ui } from '../../data/data';

const Logo = () => {
  return (
    <Wrapper>
      <Image src={ui.logo} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
