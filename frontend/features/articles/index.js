import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchArticles } from '../../actions'
import { ArticleList } from './components/'

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