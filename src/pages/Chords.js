import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-awesome-reveal";
import ChordsData from "./data/chords";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CloseIcon from "@mui/icons-material/Close";

function ChordsOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSongUrl, setCurrentSongUrl] = useState("");

  const openModal = (songUrl) => {
    setCurrentSongUrl(songUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <ChordsContainer bgImage="url('background.jpg')">
      <Title>
        Review all the major and minor chords to practice with the guesser. <br />
        Click the chord to hear its sound.
      </Title>
      <Grid>
        {ChordsData.map((chord) => (
      <Fade>

          <ChordCard key={chord.name}>
            <ChordName>{chord.name}</ChordName>
            {chord.sound && (
              <Chord
                src={chord.image}
                alt={chord.name}
                onClick={() => playSound(chord.sound)}
              />
            )}

            {chord.song && (
              <SongRow>
                <p>A song with this key:</p>
                <StyledPlayCircleIcon onClick={() => openModal(chord.song)} />
              </SongRow>
            )}
          </ChordCard>
      </Fade>

        ))}
      </Grid>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <iframe
              width="720"
              height="480"
              src={currentSongUrl.replace("watch?v=", "embed/")}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
            <StyledCloseIcon onClick={closeModal}>Close</StyledCloseIcon>
          </ModalContent>
        </ModalOverlay>
      )}
    </ChordsContainer>
  );
}

export default ChordsOverview;

const ChordsContainer = styled.div`
  text-align: center;
  padding: 60px 30px;
  background: linear-gradient(90deg, rgba(255,240,124,0.3821752211626839) 9%, rgba(240,247,238,1) 100%);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Chord = styled.img`
  width: 350px;
  height: 160px;
  object-fit: contain !important;
  border-radius: 12px;
  outline: 2px solid transparente;
  transition: outline 0.3s;
  &:hover {
    outline-color: blanco;
    cursor: pointer;
    transform: scale(1.06);
  }
`;

const ChordName = styled.p`
  color: negro;
  margen-topo: 5px;
  font-weight: 600;
  font-size: 20px;
  font-family: "Permanent Marker", cursive;
`;

const ChordCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: black;
  border-radius: 12px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 2em !important;
`;

const SongRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const StyledPlayCircleIcon = styled(PlayCircleIcon)`
  font-size: 40px !important;
  color: var(--cambridge-blue) !important;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
