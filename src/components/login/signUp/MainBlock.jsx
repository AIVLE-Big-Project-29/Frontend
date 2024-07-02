import * as SC from '../styled';

import CloseBtn from '../CloseBtn';
import InnerBlock from './InnerBlock';

const MainBlock = () => {
  return (
    <SC.MainBlock>
      <SC.MainBlockHeader>
        <CloseBtn />
      </SC.MainBlockHeader>
      <InnerBlock></InnerBlock>
    </SC.MainBlock>
  );
};

export default MainBlock;
