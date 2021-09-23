import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchArticles } from '../../actions'
import { ArticleList } from './components/'

/**
 * An article
 * article: {
 *   author {
 *     created_at: Date
 *     first_name: string
 *     id: number
 *     last_name: string
 *     updated_at: Date
 *   },
 *   body: string
 *   created_at: Date
 *   id: number
 *   image_url: string
 *   introduction: string
 *   title: string
 *   updated_at: Date
 * }
*/
const Articles = ({ fetchArticles, articles: fetchedArticles }) => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    fetchArticles()  
  },[])

  useEffect(() => {
    setArticles(fetchedArticles)
  },[fetchedArticles])
  
  return (
    <div className='articles-container'>
      {fetchArticles && <ArticleList articles={articles} />}
    </div>
  )
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

export default connect(
  mapStateToProps,
  { fetchArticles }
)(Articles)