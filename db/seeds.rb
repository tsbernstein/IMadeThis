# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

demo = User.create!(username: 'Demo', password: 'password', display_name: 'Demo User');

user1 = User.create!({username: 'Tyler', password: '123456', display_name: 'Tyler'})
user2 = User.create!({username: 'Adam', password: '123456', display_name: 'Adam'})
user3 = User.create!({username: 'Phil', password: '123456', display_name: 'Phil'})
user4 = User.create!({username: 'Stephanie', password: '123456', display_name: 'Stephanie'})
user5 = User.create!({username: 'Tricksie', password: '123456', display_name: 'Tricksie'})

products = [
    {title: 'plush', description: 'Pikachu plush', price: 20, seller_id: user1.id}, 
    {title: 'mug', description: 'ceramic mug', price: 20, seller_id: user2.id}, 
    {title: 'pillow', description: 'hand stitched pillow', price: 20, seller_id: user3.id}, 
    {title: 'painting', description: 'painting of a pikachu', price: 20, seller_id: user4.id}, 
    {title: 'necklace', description: 'necklace with your initials', price: 20, seller_id: user5.id} 
]

products.each do |product|
    Product.create!(product)
end