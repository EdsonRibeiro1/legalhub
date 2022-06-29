import logoHUB from '../../assets/logoHUB.svg';
import { Container, Content } from './style';

export function Header() {
  return (
    <Container>
        <Content>
            <img src={logoHUB} alt="Legal Hub"/>
        </Content>
    </Container>
  );
}