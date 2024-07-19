import { useState } from 'react';
import * as SC from './style';
import DetailModal from '../detailModal/DetailModal'; // DetailModal import 추가
import axios from 'axios';
// import { name } from 'eslint-plugin-prettier';

const posts = [
  {
    id: 1,
    title: '첫 번째 게시물',
    content: '안녕하세요. 첫 번째 게시물입니다.',
    name: '홍길동',
    date: '2023-01-01',
    checked: false,
  },
];

// const posts = async () => {
//   try {
//     const response = await axios({
//       method: 'post',
//       url: 'http://192.168.103.7:8000/notice/board/', // 실제 서버 URL로 변경
//       data: {
//         id,
//         title,
//         content,
//         username,
//         date,
//       },
//     });

//     console.log('Server response:', response.data);
//   } catch (error) {
//     console.error('Error inquire post:', error);
//   }
// };


const BoardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // 디테일 모달 오픈 상태 관리
  const [selectedPost, setSelectedPost] = useState(null); // 선택된 포스트 상태 관리
  // 에러 문구 저장
  const [error, setError] = useState({
    Id: '',
    Pw: '',
    general: '',
  });
  // 현재 페이지에 해당하는 게시물 목록 가져오기
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호 목록 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 포스트 클릭 핸들러
  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
    console.log("Post clicked:", post); // 디버깅을 위해 로그 추가
  };

  // 페이지 변경 핸들러
  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  // 게시글 삭제
  const handleDelete = async (id) => {
    try {
      console.log('삭제 실행');

      const response = await axios({
        method: 'delete',
        url: 'http://192.168.103.7:8000/notice/board/',
        withCredentials: false,
        data: {
          post: selectedPost.id,
        },
      });

      if (response.status === 200) {
        console.log('삭제 완료', response.data);
      } else {
        console.error('삭제 실패', response.data);
        setError({ ...error, general: '삭제 실패. 다시 시도해주세요.' });
      }

    } catch (error) {
      console.error('삭제 실패', error);
      setError({ ...error, general: '삭제 실패.' });
    }
  };



  // 게시글 수정
  const handleUpdate = async (id) => {
    try {
      console.log('수정');

      const response = await axios({
        method: 'put',
        url: 'http://192.168.103.7:8000/notice/board/',
        withCredentials: false,
        data: {
          title: selectedPost.title,
          content: selectedPost.content,
        },
      });

      if (response.status === 200) {
        console.log('수정 완료', response.data);
      } else {
        console.error('수정 실패', response.data);
        setError({ ...error, general: '수정 실패. 다시 시도해주세요.' });
      }

    } catch (error) {
      console.error('수정 실패', error);
      setError({ ...error, general: '수정 실패.' });
    }
  };


  return (
    <>
      <SC.TableWrapper>
        <SC.Table>
          <thead>
            <tr>
              <SC.Th width="10%">Index</SC.Th>
              <SC.Th width="50%">Title</SC.Th>
              <SC.Th width="20%">Date</SC.Th>
              <SC.Th width="20%">Name</SC.Th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post, index) => (
              <SC.Tr key={post.id}>
                <SC.Td>
                  {index + 1 + (currentPage - 1) * postsPerPage}
                </SC.Td>
                <SC.Td onClick={() => handlePostClick(post)}>{post.title}</SC.Td>
                <SC.Td>{post.date}</SC.Td>
                <SC.Td>{post.name}</SC.Td>
              </SC.Tr>
            ))}
          </tbody>
        </SC.Table>
      </SC.TableWrapper>
      <SC.Pagination>
        {pageNumbers.map((number) => (
          <SC.PageNumber
            key={number}
            onClick={() => handlePageChange(number)}
            isActive={number === currentPage}
          >
            {number}
          </SC.PageNumber>
        ))}
      </SC.Pagination>

      <DetailModal
        isOpen={isDetailModalOpen}
        closeModal={() => setIsDetailModalOpen(false)}
        selectedPost={selectedPost}
        onDelete={handleDelete}
        onModify={handleUpdate}
      />
    </>
  );
};

export default BoardTable;
