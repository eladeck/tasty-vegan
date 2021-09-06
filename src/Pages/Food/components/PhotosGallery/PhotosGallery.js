
import React, { useState } from 'react';
import styled from 'styled-components';
import photosData from './photos.json'

const Card = styled.div`
  width: 40rem;
  height: 40rem;
  padding: 8rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  margin: 0 8rem;
`;
const StyledImgWrapper = styled.div`
  position: relative;
  border: solid 5px hsla(0, 95%, 35%, 0.6);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
`;

const Img = styled.img`
`;

const StyledTags = styled.div`
  position: absolute;
  top: 0;
`;

const Tag = styled.button`
  background-color: lightblue;
  opacity: 0.5;
  margin: 1rem;
`;

const TagFilters = styled.div`
  display: flex;
  margin: 1rem;
`;

const TagFilter = styled.button`
  margin: 1rem;
  transition: all .2s linear;
  border: 0;
  background: transparent;
  :hover {
      cursor: pointer;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  ${({ isSelected }) => isSelected && 'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'};
  ${({ isSelected }) => isSelected && 'font-weight: 600'};
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
    "Jar"
];

const useToggler = (initialValue) => {
    const [isOn, setIsOn] = useState(initialValue);
    const toggle = (forceValue) => setIsOn(forceValue === false ? !isOn : forceValue === true ? isOn : !isOn);
    return [isOn, toggle];
}

const Tags = ({ onTagChosen }) => {
    return (
        <StyledTags>
            {allTags.map((tag) => <Tag onClick={() => onTagChosen(tag)}>{tag}</Tag>)}
        </StyledTags>
    );
}

const ImageWrapper = ({ src, name, onTagChosenGallery }) => {
    const [isTagsShown, toggleIsTagsShown] = useToggler(false);

    const onTagChosen = (tag) => {
        onTagChosenGallery(tag, name);
        toggleIsTagsShown(false);
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
    const [tagFilters, setTagFilters] = useState(['ALL']);
    console.log(tagFilters);

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
                {['ALL', ...allTags].map((tag) => <TagFilter isSelected={tagFilters.includes(tag)} onClick={() => onTagFilterClick(tag)}>{tag}</TagFilter>)}
            </TagFilters>
            <Cards>
                {photos
                    .filter((photo) => tagFilters.includes('ALL') || tagFilters.some((tagFilter) => photo.tags.includes(tagFilter)))
                    .sort((photo1, photo2) => ('' + photo1.name).localeCompare(photo2.name))
                    .map(({ src, name, tags }) => {
                        return (
                            <Card>
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


