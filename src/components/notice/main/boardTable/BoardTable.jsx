import { useEffect, useState } from 'react';
import * as SC from './style';
import DetailModal from '../detailModal/DetailModal';
import axios from 'axios';
import { BOARDREADURL } from '../../../../tokens/Urls';

const BoardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState({
    Id: '',
    Pw: '',
    general: '',
  });
  const [posts, setPosts] = useState([]);
  const [slicedPosts, setSlicedPosts] = useState([]);

  const token = localStorage.getItem('accessToken');

  // 게시판 글 조회 요청
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: BOARDREADURL,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Server response:', response.data);

        setPosts(response.data);

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = response.data.slice(
          indexOfFirstPost,
          indexOfLastPost
        );
        setSlicedPosts(currentPosts);
      } catch (error) {
        console.error('Error inquire post:', error);
      }
    };

    getPosts();
  }, [currentPage]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setSlicedPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, posts]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
    console.log('Post clicked:', post);
  };

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        console.log('삭제 실행');

        const token = localStorage.getItem('accessToken');
        const response = await axios({
          method: 'delete',
          url: BOARDREADURL + `${selectedPost.id}/`, // 실제 서버 URL로 변경
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (response.status === 204) {
          console.log('삭제 완료', response.data);
          // 상태 업데이트를 통해 새로고침 효과를 낸다
          window.location.reload();
        }
      } catch (error) {
        console.error('삭제 실패', error);
        setError({ ...error, general: '삭제 실패.' });
      }
    }
  };

  // const handleUpdate = async (updatedPost) => {
  //   try {
  //     console.log('수정 실행');

  //     const response = await axios({
  //       method: 'PUT',
  //       url: `http://172.30.1.84:8000/notice/board/list/${selectedPost.id}/`,
  //       data: {
  //         title: response.title,
  //         content: response.content,
  //       }
  //     });

  //     if (response.status === 200) {
  //       console.log('수정 완료', response.data);
  //       setPosts(posts.map(post => (post.id === selectedPost.id ? { ...post, ...updatedPost } : post)));
  //       setIsDetailModalOpen(false);
  //     } else {
  //       console.error('수정 실패', response.data);
  //       setError({ ...error, general: '수정 실패. 다시 시도해주세요.' });
  //     }
  //   } catch (error) {
  //     console.error('수정 실패', error);
  //     setError({ ...error, general: '수정 실패.' });
  //   }
  // };

  const handleUpdate = async (title, content) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios({
        method: 'put',
        url: BOARDREADURL + `${selectedPost.id}/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          title: title,
          content: content,
        },
      });

      if (response.status === 200) {
        console.log('수정 완료', response.data);
        setPosts(
          posts.map((post) =>
            post.id === selectedPost.id
              ? {
                  ...post,
                  title: response.data.title,
                  content: response.data.content,
                }
              : post
          )
        );
        setIsDetailModalOpen(false);
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
              <SC.Th width="20%">User</SC.Th>
            </tr>
          </thead>
          <tbody>
            {slicedPosts.map((post, index) => (
              <SC.Tr key={post.id}>
                <SC.Td>{index + 1 + (currentPage - 1) * postsPerPage}</SC.Td>
                <SC.Td onClick={() => handlePostClick(post)}>
                  {post.title}
                </SC.Td>
                <SC.Td>{post.created_at}</SC.Td>
                <SC.Td>{post.user}</SC.Td>
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
            isactive={number === currentPage ? 'true' : 'false'}
          >
            {number}
          </SC.PageNumber>
        ))}
      </SC.Pagination>

      {isDetailModalOpen && (
        <DetailModal
          isOpen={isDetailModalOpen}
          closeModal={() => setIsDetailModalOpen(false)}
          selectedPost={selectedPost}
          onDelete={handleDelete}
          onModify={handleUpdate}
        />
      )}
    </>
  );
};

export default BoardTable;
