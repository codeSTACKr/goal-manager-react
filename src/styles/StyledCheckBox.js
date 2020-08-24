import styled from "styled-components";

const StyledCheckBox = styled.label`
  display: block;
  position: relative;
  user-select: none;

  input {
    display: none;

    &:checked ~ span {
      background: #754dff;

      &::after {
        display: block;
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 3rem;
    width: 3rem;
    background: #dacfff;
    transition: background 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 1rem;
      width: 0.8rem;
      height: 2rem;
      border: solid white;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
      display: none;
    }
  }
`;

export default StyledCheckBox;
