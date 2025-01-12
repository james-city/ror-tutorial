class CreateProducts < ActiveRecord::Migration[8.0]
  def change
    # create_table block defines which columns and types should be defined in
    # the database table
    create_table :products do |t|
      # make a column called |name| of type |string|
      t.string :name

      # make a created_time:datetime and updated_at:datetime column
      t.timestamps
    end
  end
end
