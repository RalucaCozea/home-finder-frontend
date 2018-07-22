import styled from 'styled-components';

const LoaderOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(224,247,250,0.3);
  z-index: 9999;
  cursor: pointer;
`;

export default LoaderOverlay;
