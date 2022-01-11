import styled from "@emotion/styled";

export const HomeTemplateWrapper = styled.div`
  height: 100vh;

  display: grid;

  grid-template-rows: 1fr 30px 0.5fr 2fr 3fr auto 1fr;
  margin-left: 100px;

  box-sizing: border-box;

  background-image: url("/bg_main.png");
  background-repeat: no-repeat;

  background-size: 100%;

  /* background-position: 120% 5%; */
  /* background-size: 120vh; */
`;
