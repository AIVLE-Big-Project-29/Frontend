import React, { useState } from 'react';
import * as SC from './style';
import DetailModal from '../detailModal/DetailModal'; // DetailModal import 추가

const posts = [
  {
    id: 1,
    title: '첫 번째 게시물',
    content: '안녕하세요. 첫 번째 게시물입니다.',
    name: '홍길동',
    date: '2023-01-01',
    checked: false,
  },
  {
    id: 2,
    title: '두 번째 게시물',
    content: '안녕하세요. 두 번째 게시물입니다.',
    name: '김철수',
    date: '2023-01-02',
    checked: false,
  },
  {
    id: 3,
    title: '세 번째 게시물',
    content: '안녕하세요. 세 번째 게시물입니다.',
    name: '이영희',
    date: '2023-01-03',
    checked: false,
  },
];

const BoardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // 디테일 모달 오픈 상태 관리
  const [selectedPost, setSelectedPost] = useState(null); // 선택된 포스트 상태 관리

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

  // 체크박스 변경 핸들러
  const handleCheckBoxChange = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, checked: !post.checked } : post
    );
    console.log(updatedPosts);
  };

  // 페이지 변경 핸들러
  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <SC.TableWrapper>
        <SC.Table>
          <thead>
            <tr>
              <SC.Th width="10%"></SC.Th>
              <SC.Th width="10%">Index</SC.Th>
              <SC.Th width="50%">Title</SC.Th>
              <SC.Th width="15%">Date</SC.Th>
              <SC.Th width="15%">Name</SC.Th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post, index) => (
              <SC.Tr key={post.id}>
                <SC.Td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckBoxChange(post.id)}
                  />
                </SC.Td>
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

      {/* DetailModal 추가 */}
      <DetailModal
        isOpen={isDetailModalOpen} // 수정된 prop 이름
        closeModal={() => setIsDetailModalOpen(false)}
        selectedPost={selectedPost}
      />
    </>
  );
};

export default BoardTable;
