// Libraries
import React from 'react';

import { convertDateToUTC, formatMonth } from '../../../../utils/dateHelper'

/**
 * Consider extracting the title and button
 *    if there are needs for similar styled components in the future.
 * */
const ArticleItem = ({ article }) => {
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
    title,
    introduction,
    image_url,
    author,
    created_at
  } = article
  return (
    <div className='article-item-container'>
      <div className='text-block'>
        <h2 className='article-title'>{title}</h2>
        <p className='article-subtitle'>{`${_formatAuthorName(author)} | ${_formatDateToDisplay(created_at)}`}</p>
        <p className='article-intro'>{introduction}</p>
        <a className='read-more-btn' href='#' target='_blank'>
          Read more
        </a>
      </div>
      <div className='img-block'>

      </div>
    </div>
  )
};

export default ArticleItem;