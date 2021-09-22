module Api
  class ArticlesController < ActionController::Base
    def index
      query = Article.includes(:author)
      query = query.where('title ILIKE ?', "%#{params[:title]}%") if params[:title].present?
      render json: query.all, include: :author
    end

    def show
      article = Article.includes(:author).find(params[:id])
      render json: article, include: :author
    end
  end
end
