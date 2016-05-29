class RegionsController < ApplicationController

def index
@regions = Region.all

end

def show

@region = Region.find_by :id => params[:id]

end

def new
  @region = Region.new
end

def create
end

def edit
  @region = Region.find_by :id => params[:id]
end

def update
end

def destroy
end

private

def regions_params
  params.require(:region).permit(:name, :address, :description)
end

end
