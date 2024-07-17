import React from 'react';
import * as SC from './style';
import img from '../../../assets/images/GreenCityBig.png';

const Title = () => {
    return (
        <SC.Header>
            <SC.IconImage src={img} alt="Icon" />
            <SC.TitleText>Settings</SC.TitleText>
        </SC.Header>
    );
};

export default Title;
