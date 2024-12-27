class SchedulesController < ApplicationController
  def index
    @schedule = Schedule.all
  end

  def new
    @schedule = Schedule.new
  end

  def create
    @schedule = Schedule.new(schedule_params)
    if @schedule.save
      redirect_to user_path(current_user.id), notice: '予定が正常に保存されました。'
    else
      flash[:alert] = '予定の追加に失敗しました。'
      redirect_to user_path(current_user.id), status: :unprocessable_entity
    end
  end

  def show
    @schedule = Schedule.find(params[:id])
  end


  private

  def schedule_params
    params.require(:schedule).permit(:number, :title, :start_id, :end_id).merge(user_id: current_user.id)
  end

end
