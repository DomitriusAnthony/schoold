class CreateChallenges < ActiveRecord::Migration[5.0]
  def change
    create_table :challenges do |t|
      t.integer :user_id
      t.string :profile_pic
      t.string :heading_tag
      t.string :p_tag
      t.string :image_one
      t.string :image_two
      t.string :image_three
      t.string :audio_tag
      t.string :video_tag

      t.timestamps
    end
  end
end
