class TweetsController < ApplicationController
  def index
  end

  def create
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def delete

  end
end
