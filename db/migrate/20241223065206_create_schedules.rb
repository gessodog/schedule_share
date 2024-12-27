class CreateSchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :schedules do |t|
      t.string :number,        null: false
      t.string :title,         null: false
      t.integer :start_id,     null: false
      t.integer :end_id,       null: false
      t.references :user,      null: false, foreign_key: true
      t.timestamps
    end
  end
end
