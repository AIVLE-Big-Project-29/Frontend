import * as SC from './styled';

import CloseBtn from './CloseBtn';
import InnerBlock from './InnerBlock/InnerBlock';

const MainBlock = () => {
  return (
    <SC.MainBlock>
      <SC.MainBlockHeader>
        <CloseBtn />
      </SC.MainBlockHeader>
      <InnerBlock />
    </SC.MainBlock>
  );
};

export default MainBlock;
