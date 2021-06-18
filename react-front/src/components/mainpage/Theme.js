import React from 'react';
import styled from 'styled-components';
import './Theme.css';


const StoreBlock = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  height: 300px;
  background: #f1f3f5;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
`;


const Theme = () => {
    return (
        <>
            <StoreBlock>

                <p className="theme-title">맞춤 테마 카페</p>
                <div className="theme-boxall">
                    <div className="theme-box">
                        <img className="theme-pic"
                             src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDNfMjI2%2FMDAxNjA2OTk2MjE3OTUy.FRLxZ6uoz53Vo1jsq4TaegiS-CvXVjeQPmyib9gGKGkg.lKiTrbxzKeN4zr_qmk9R0DBX6szsQps1tGiFs2E7NPsg.JPEG.leehyowon10%2FIMG_7919.jpg&type=sc960_832"/>

                        <p className="theme-name">#아늑한</p>
                    </div>
                    <div className="theme-box">
                        <img className="theme-pic"
                             src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMjdfMjgz%2FMDAxNTgwMTE3MzI5MTA5.3c0UAAxoRKGuz4j6jusuBn2wHvEH4ge9loI-7Dpck9Qg.BtstWIpqdhH-FLy7qF8AVjbDEuTEF8lL5RafQCOhbj0g.JPEG.qhdus2968%2FIMG_8482.jpg&type=a340"/>


                        <p className="theme-name">#편안한</p>
                    </div>
                    <div className="theme-box">
                        <img className="theme-pic"
                             src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MThfMjA0%2FMDAxNjIzOTg2MTQ5MzQ1.OMKd9mskRcG8WCpoj34oLn-msJNNL_9mwCMntg_q6TUg.6dgMQJ0c0TP5UQnIzmeywEP15hJJ57Z3BHxmas4W0ykg.JPEG.crd9456%2FKakaoTalk_20210614_145124827_19.jpg&type=a340"/>

                        <p className="theme-name">#분위기 있는</p>
                    </div>
                    <div className="theme-box">
                        <img className="theme-pic"
                             src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzFfMjg4%2FMDAxNjE3MTE5MTYwOTUw.9Ow3WwzB9-PcXw8YyZvCK2VMPT7uBoOD9CPLL7_aHjcg.oWN8H54EbfHVf2ilPwPzlB_R2F4ZT2lu8oUj6rnSwS4g.JPEG.hyeoni0022%2FIMG_6880.JPG&type=sc960_832"/>

                        <p className="theme-name">#작업하기 좋은</p>
                    </div>
                </div>

            </StoreBlock>

        </>
    );
}

export default Theme;