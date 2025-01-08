class RoomsController < ApplicationController

  def index
    @room = Room.all
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      redirect_to new_room_path, notice: 'ルームが正常に作成されました。'
    else
      flash[:alert] = 'ルームの作成に失敗しました。'
      render :new, status: :unprocessable_entity
    end
  end

  private

  def room_params
    params.require(:room).permit(:name, user_ids: [])
  end
end
