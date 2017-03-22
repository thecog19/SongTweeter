class Tweetupgrade < ActiveRecord::Migration[5.0]
  def change
    add_column :tweets, :sent_at, :datetime
    add_column :tweets, :body, :string 
    add_column :tweets, :sent, :bool
  end
end
