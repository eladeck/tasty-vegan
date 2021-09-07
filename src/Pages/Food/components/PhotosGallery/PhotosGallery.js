
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import photosData from './photos.json'

const Card = styled.div`
  width: 40rem;
  height: 40rem;
  padding: 8rem;
  transition: all .7s ease-in;
  ${({ hide }) => hide && css`display: none; opacity: 0;`};
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  margin: 0 8rem;
`;
const StyledImgWrapper = styled.div`
  position: relative;
  `;

const Img = styled.img`
  border: solid 5px hsla(0, 95%, 35%, 0.6);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

`;

const StyledTags = styled.div`
  position: absolute;
  top: 0;
`;

const Tag = styled.button`
  margin: 1rem;
  font-weight: 600;
  font-size: 20px;
`;

const TagFilters = styled.div`
  display: flex;
  margin: 1rem;
  place-content: center;
`;

const TagFilter = styled.div`
  margin: auto;
  border: 0;
  background: transparent;
  :hover {
      cursor: pointer;
      color: rgba(100, 150, 100, 1);
  }
  ${({ isSelected }) => isSelected && css`box-shadow: rgba(0, 255, 0, 0.2) 0 0.4rem 0 0; color: brown`};
`;



const allTags = [
    "Fruits Shopping",
    "Banana Nice Cream",
    "Asian",
    "Vegetables",
    "Fruit Bowl",
    "Banana",
    "Mango",
    "Cooked",
    "Curry",
    "Protein Snack",
    "Jar",
    "Watermelon",
    "Juice",
    "Smoothie"
];

const useToggler = (initialValue) => {
    const [isOn, setIsOn] = useState(initialValue);
    const toggle = (forceValue) => setIsOn(forceValue === false ? !isOn : forceValue === true ? isOn : !isOn);
    return [isOn, toggle];
}

const Tags = ({ onTagChosen }) => {
    return (
        <StyledTags>
            {allTags.map((tag) => <Tag onClick={(e) => { e.stopPropagation(); onTagChosen(tag); }}>{tag}</Tag>)}
        </StyledTags>
    );
}

const ImageWrapper = ({ src, name, onTagChosenGallery }) => {
    const [isTagsShown, toggleIsTagsShown] = useToggler(false);

    const onTagChosen = (tag) => {
        onTagChosenGallery(tag, name);
    }

    return (
        <StyledImgWrapper onClick={toggleIsTagsShown}>
            <Img src={`photos/${src}`} alt={name} />
            {isTagsShown && <Tags onTagChosen={onTagChosen} />}
        </StyledImgWrapper>
    );
}

const PhotosGallery = () => {
    const [photos, setPhotos] = useState(photosData);
    const [tagFilters, setTagFilters] = useState([]);
    const isFiltered = tagFilters.length !== 0;

    const onTagChosenGallery = (tag, name) => {
        const theObjectToChange = photos.find((photo) => photo.name === name);
        theObjectToChange.tags.push(tag);
        const photosWithoutTheObject = photos.filter((photo) => photo.name !== name);
        setPhotos([...photosWithoutTheObject, theObjectToChange]);
    }

    const onTagFilterClick = (tag) => {
        return setTagFilters(tagFilters.includes(tag) ? tagFilters.filter((tagFilter) => tagFilter !== tag) : [...tagFilters, tag]);
    }

    return (
        <>
            <TagFilters>
                {allTags.map((tag) => <TagFilter isSelected={tagFilters.includes(tag)} onClick={() => onTagFilterClick(tag)}>{tag}</TagFilter>)}
            </TagFilters>
            <Cards>
                {photos
                    // .filter((photo) => tagFilters.length === 0 || tagFilters.some((tagFilter) => photo.tags.includes(tagFilter)))
                    .sort((photo1, photo2) => ('' + photo1.name).localeCompare(photo2.name))
                    .map(({ src, name, tags }) => {
                        return (
                            <Card hide={isFiltered && tagFilters.some((tagFilter) => !tags.includes(tagFilter))}>
                                <span>{name} {JSON.stringify(tags)}</span>
                                <ImageWrapper src={src} name={name} onTagChosenGallery={onTagChosenGallery} />
                            </Card>
                        );
                    })}
            </Cards>
        </>
    );
}

export default PhotosGallery;


