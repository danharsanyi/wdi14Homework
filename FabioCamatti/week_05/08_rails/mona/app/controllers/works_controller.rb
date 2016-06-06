class WorksController < ApplicationController
    def index
      @works = Work.all
    end

    def show
      @work = Work.find params[:id]
    end

    def new
      @work = Work.new
    end

    def create
      work = Work.create work_params
      redirect_to work # Show
    end

    def edit
        @work = Work.find(params[:id])
    end

    def update
      work = Work.find(params[:id])
      work.update work_params
      redirect_to work
    end

    def delete
      @work = Work.find(params[:id])
      redirect_to work
    end

    def destroy
      work = Work.find(params[:id]).destroy
      redirect_to work
    end
    #
    private
      def work_params
          params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
      end

end
