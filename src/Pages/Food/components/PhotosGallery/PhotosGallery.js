
import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';
import styled, { css } from 'styled-components';
import photosData from './photos.json'

const Card = styled.div`
  width: 40rem;
  height: 40rem;
  padding: 2rem;
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
  flex-wrap: wrap;
  max-width: 70%;
  margin: 1rem;
`;

const TagFilter = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 0.5px solid white;
  background: hsl(191deg 95% 35% / 18%);
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

/*
const Tags = ({ onTagChosen }) => {
    return (
        <StyledTags>
            {allTags.map((tag) => <Tag onClick={(e) => { e.stopPropagation(); onTagChosen(tag); }}>{tag}</Tag>)}
        </StyledTags>
    );
}
*/

const ImageWrapper = ({ src, name, onTagChosenGallery }) => {
    const [isTagsShown, toggleIsTagsShown] = useToggler(false);
    console.log(isTagsShown) // just so it wont be unused

  /*
    const onTagChosen = (tag) => {
        onTagChosenGallery(tag, name);
    }
*/
    return (
        <StyledImgWrapper onClick={toggleIsTagsShown}>
            {/* /Photos/24B06EAA-01A2-408A-8490-EA476AFA1E30.jpg */}
            <Img src={`https://tasty-vegan-bucket.s3.amazonaws.com/Photos/${src}`} alt={name} />
            {/* {isTagsShown && <Tags onTagChosen={onTagChosen} />} */}
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

/*
    const imageGalleryItems = photos.map((photo) => ({
        original: `https://tasty-vegan-bucket.s3.amazonaws.com/Photos/${photo.src}`,
        thumbnail: `https://tasty-vegan-bucket.s3.amazonaws.com/Photos/${photo.src}`,
    }));
*/
    return (
        <>
            <TagFilters>
                {allTags.map((tag) => <TagFilter isSelected={tagFilters.includes(tag)} onClick={() => onTagFilterClick(tag)}>{tag}</TagFilter>)}
            </TagFilters>
            <Cards>
                {photos
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
            {/* <ImageGallery 
                items={imageGalleryItems}
                infinite
                showBullets
                showFullscreenButton
                showPlayButton
                showThumbnails
                showIndex
                showNav
                thumbnailPosition="bottom"
                slideDuration={450}
                slideInterval={2000}
                slideOnThumbnailOver
                additionalClass="app-image-gallery"
                 /> */}
        </>
    );
}

export default PhotosGallery;


