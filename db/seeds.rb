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

products = [
    [ title: 'plush', description: 'Pikachu plush', price: 20, seller_id: 1], 
    [ title: 'mug', description: 'ceramic mug', price: 20, seller_id: 2], 
    [ title: 'pillow', description: 'hand stitched pillow', price: 20, seller_id: 3], 
    [ title: 'painting', description: 'painting of a pikachu', price: 20, seller_id: 4], 
    [ title: 'necklace', description: 'necklace with your initials', price: 20, seller_id: 5] 
]

products.each do |product|
    Product.create!(product)
end