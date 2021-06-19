import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from "react-router-dom";

const ImageBlock = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  height:200px;
  background-image: url("https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656__340.jpg")
`;

const SearchBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content:center;
  align-items:center;
`;

const SearchForm = styled.form`
  border-radius: 5px;
  display: flex;
  width: 400px;
  border: 1px solid ${palette.gray[9]}; /* 스타일 초기화 */
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
    width: 100%;
    height: 100%;
  }
  input {
    padding: 0.5rem;
    flex: 1;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top:7px;
    border: solid ${palette.gray[8]};
    border-radius: 5px;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
`;


const Search = ({tags, onChangeTags}) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if (!tag) return; // 공백이라면 추가하지 않음
            if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
            const nextTags = [...localTags, tag];
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t !== tag);
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

    const onChange = useCallback(e => {
        setInput(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            setInput(''); // input 초기화
        },
        [input, insertTag],
    );

    // search 값이 바뀔 때
    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);

    return (
        <ImageBlock>
            <SearchBlock>
                <SearchForm onSubmit={onSubmit}>
                    <input
                        placeholder="원하는 카페를 검색해보세요."
                        value={input}
                        onChange={onChange}
                    />
                    <Link to="./storeList" className="default-link">
                        <div className="right">
                            <button>검색</button>
                        </div>
                    </Link>
                </SearchForm>
            </SearchBlock>
        </ImageBlock>
    );
};

export default Search;
