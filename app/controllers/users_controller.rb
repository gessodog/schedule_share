class UsersController < ApplicationController

  def show
    @name = current_user.name
    @schedule = current_user.schedules
    @today = Date.today
  end
end
