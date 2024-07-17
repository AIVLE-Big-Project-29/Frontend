import { useState, useEffect } from 'react';

import * as SC from './style';

import DetailModal from '../detailModal/DetailModal';

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

  // 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);


  // 현재 페이지에 해당하는 게시물 목록 가져오기
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호 목록 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 체크박스 변경 핸들러
  const handleCheckBoxChange = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, checked: !post.checked };
      }
      return post;
    });
    // posts 상태를 업데이트
    console.log(updatedPosts);
  };


  // 추가
  const handlePostTitleClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
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
                    // checked={post.checked}
                    onChange={() => handleCheckBoxChange(post.id)}
                  />
                </SC.Td>
                <SC.Td>{index + 1 + (currentPage - 1) * postsPerPage}</SC.Td>
                <SC.Td onClick={() => handlePostTitleClick(post)}>{post.title}</SC.Td>
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
            onClick={() => setCurrentPage(number)}
            isActive={number === currentPage}
          >
            {number}
          </SC.PageNumber>
        ))}
      </SC.Pagination>
      {isModalOpen && (
        <DetailModal selectedPost={selectedPost} onClose={handleModalClose} />
      )}
    </>
  );
};

export default BoardTable;
