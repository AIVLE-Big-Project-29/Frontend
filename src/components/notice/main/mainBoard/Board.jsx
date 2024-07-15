import * as SC from './style';
import add from '../../../../assets/images/add.svg';
import BoardTable from '../boardTable/BoardTable';

const Board = () => {
  return (
    <SC.MainBoard>
      <SC.BoardHeader>
        <SC.HeaderGroup>
          <SC.HeaderBtn>
            <SC.BtnIconContainer>
              <SC.HeaderIcon src={add} alt="add 아이콘" />
            </SC.BtnIconContainer>
          </SC.HeaderBtn>
        </SC.HeaderGroup>
      </SC.BoardHeader>
      <BoardTable />
    </SC.MainBoard>
  );
};

export default Board;
