// Libraries
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom'

import { convertDateToUTC, formatMonth } from '../../../../utils/dateHelper'

const BASE_URL = process.env.REACT_APP_BASE_SERVER_URL

/**
 * Consider extracting the title and button
 *    if there are needs for similar styled components in the future.
 * */
const ArticleItem = ({ article }) => {
  const [imgPadding, setImgPadding] = useState(0)
  
  /**
   * A ref to pass to the .text-block div.
   * All it does is calculate the padding of the image and set the property.
  */
  const textBlockRef = useCallback((node) => {
    if (node) {
      const divHeight = node.getBoundingClientRect().height;
      const padding = divHeight * 0.4;
      setImgPadding(padding)
    };
  });

  const _formatDateToDisplay = (dateString) => {
    const UTCDate = convertDateToUTC(new Date(dateString))
    const monthString = formatMonth(UTCDate.getMonth())
    const timeString = `${UTCDate.getHours()}:${UTCDate.getMinutes()}`
    return `${UTCDate.getDate()} ${monthString}, ${UTCDate.getFullYear()} at ${timeString}`
  }

  const _formatAuthorName = (author) => {
    return `${author.first_name} ${author.last_name}`
  }

  const {
    id,
    title,
    introduction,
    image_url,
    author,
    created_at
  } = article

  const textBlockStyle = { paddingTop: imgPadding }

  return (
    <div className='article-item-container'>
      <span className='separator'></span>
      <div className='text-block' ref={textBlockRef}>
        <h2 className='article-title'>{title}</h2>
        <p className='article-subtitle'>
          <span className='subtitle-name'>
            {_formatAuthorName(author)} 
          </span>
          |
          <span className='subtitle-date'>
            {_formatDateToDisplay(created_at)}
          </span>
        </p>
        <p className='article-intro'>{introduction}</p>
        <Link
          className='read-more-btn'
          to={`/articles/detail/${id}`}
          target='_blank'
        >
          Read more
        </Link>
      </div>
      <div className='img-block' style={textBlockStyle}>
        <img src={image_url} />
      </div>
    </div>
  );
};

export default ArticleItem;