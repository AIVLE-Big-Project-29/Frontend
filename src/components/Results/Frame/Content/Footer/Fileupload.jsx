import React from 'react';
import * as SC from './style';
import fileIcon from '../../../../../assets/images/파일아이콘.png';
import cancelIcon from '../../../../../assets/images/x.svg';

const FileUpload = ({ file, handleDrop, handleDragOver, handleCancel }) => {
    return (
        <SC.UploadContainer>
            <SC.DragDropArea onDrop={handleDrop} onDragOver={handleDragOver}>
                {file ? (
                    <SC.FileInfo>
                        <SC.FileIcon src={fileIcon} alt="file icon" />
                        <SC.FileName>{file.name}</SC.FileName>
                        <SC.CancelButton onClick={handleCancel}>
                            <SC.CancelIcon src={cancelIcon} alt="cancel icon" />
                        </SC.CancelButton>
                    </SC.FileInfo>
                ) : (
                    <SC.UploadText>파일을 여기로 끌어다 놓으세요</SC.UploadText>
                )}
            </SC.DragDropArea>
        </SC.UploadContainer>
    );
};

export default FileUpload;