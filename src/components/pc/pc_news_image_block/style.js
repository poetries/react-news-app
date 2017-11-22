import styled,{css} from 'styled-components';

export const TopNewsList = styled.div`
    float: left;
    text-align: left;
    font-size: 14px;
    margin-bottom: 10px;
    a {
        line-height: 22px !important;
        color: #666 !important;
    }
`

export const Image = styled.img`
    ${ props=> props.imageWidth && css`
            display: "block",
            width: ${props.imageWidth},
            height: "90px"   
     `} 
`
export const H3 = styled.h3`
    ${ props=> props.imageWidth && css`
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"   
    `} 
`

export const CustomCard = styled.div`
    padding: 5px;
    p {
        color: #999;
    }
`
