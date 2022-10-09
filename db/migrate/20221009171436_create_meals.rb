class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :type
      t.string :img_url
      t.string :title
      t.string :website_name
      t.string :cook_time

      t.timestamps
    end
  end
end
