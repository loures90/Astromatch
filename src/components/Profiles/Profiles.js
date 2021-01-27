import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, aluno } from '../../APIParameters'
import { ProfileContainer, Img, Btns, Main, P, Heart, OverHeart, NextMatch, ProfileText} from './ProfileStyeld'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';



export default function Profiles() {
  const [profilesApi, setProfilesApi] = useState([])

  useEffect(() => {
    getProfiles()
  }, [])

  const getProfiles = () => {
    axios.get(`${baseUrl}/${aluno}/person`)
      .then((res) => {
        setProfilesApi(res.data.profile)
      })
      .catch((err) => console.log(err))
  }

  const postMatches = (id, choice) => {
    const body = {
      "id": id,
      "choice": choice
    }
    axios.post(`${baseUrl}/${aluno}/choose-person`, body)
      .then((res) => {
      })
      .catch((err) => console.log(err))
  }

  const onClickFunction = (id, choice) => {
    postMatches(id, choice)
    getProfiles()
  }


  return (
    <ProfileContainer>
      {profilesApi && (
        <Main>
          <Img src={profilesApi.photo} alt={`imagem ${profilesApi.name}`} />
          <ProfileText>
            <P>{profilesApi.name}, {profilesApi.age}</P>
            <P>{profilesApi.bio}</P>
          </ProfileText>

          <Btns>

            <OverHeart aria-label="like">
              <Heart style={{ fontSize: 40 }} onClick={() => onClickFunction(profilesApi.id, true)} />
            </OverHeart>
            <Fab>
              <NextMatch style={{ fontSize: 40 }} onClick={() => onClickFunction(profilesApi.id, false)} />
            </Fab>

          </Btns>
        </Main>
      )}
    </ProfileContainer>
  );
}

