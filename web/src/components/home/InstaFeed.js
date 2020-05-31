import React from 'react'
import Image from 'gatsby-image'
import {css} from '@emotion/core'
import {Overlay, Info, Content, Wrapper} from './home.styled'
import useInstagram from 'hooks/use-instagram'
import {FaRegHeart} from 'react-icons/fa'
const InstaFeed = () => {
  const instagramPhotos = useInstagram()

  return (
    <>
      <h2>Instagram posts from @{instagramPhotos[0].username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
          padding: 0.5rem 0;
        `}
      >
        {instagramPhotos.map(photo => (
          <Wrapper key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
            <Overlay
              css={css`
                margin-top: 0;
              `}
            />
            <Content>
              <Info>
                <span>{photo.likes}</span>
                <span>
                  <FaRegHeart className='icon' />
                </span>
                {/* <span><FaRegCommentAlt className='icon' /></span>
                <span>{photo.comments}</span> */}
              </Info>
            </Content>
          </Wrapper>
        ))}
      </div>
      <a href={`https://instagram.com/susanturis/`}>See more on instagram &rarr;</a>
    </>
  )
}

export default InstaFeed
