import {
  ContainContainer,
  ContainImage,
  ContainAuthor,
  ContainAlbum,
} from "./Bar.styled";

import Note from "../../assets/Note";

function PlayerTrack(props) {
  return (
    <ContainContainer>
      <ContainImage>
        <Note alt="music" />
      </ContainImage>
      <ContainAuthor>
        <a href="http://">{props.author}</a>
      </ContainAuthor>
      <ContainAlbum>
        <a href="http://">{props.album}</a>
      </ContainAlbum>
    </ContainContainer>
  );
}

export default PlayerTrack;
