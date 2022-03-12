import Container from "@mui/material/Container";
import { FadeInContainer } from "../../components";
import Styles from "./Styles";

const Hero = () => {
  return (
    <Styles>
      <Container maxWidth="lg">
        <div className="content">
          <FadeInContainer delay={1300}>
            <h1>Be welcome.</h1>
          </FadeInContainer>
          <FadeInContainer delay={1450}>
            <h2>This is a boilerplate.</h2>
          </FadeInContainer>
        </div>
      </Container>
    </Styles>
  );
};

export default Hero;
