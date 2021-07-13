require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

demo = User.create!(email: 'Demo', password: 'password', first_name: 'Demo User');

user1 = User.create!({email: 'Tyler', password: '123456', first_name: 'Tyler'})
user2 = User.create!({email: 'Adam', password: '123456', first_name: 'Adam'})
user3 = User.create!({email: 'Phil', password: '123456', first_name: 'Phil'})
user4 = User.create!({email: 'Stephanie', password: '123456', first_name: 'Stephanie'})
user5 = User.create!({email: 'Tricksie', password: '123456', first_name: 'Tricksie'})

product1 = Product.create!({title: 'plush', description: 'Pikachu plush', price: 20.00, seller_id: user1.id})

product1.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/pikachu_plush.jpg"), filename: "1.jpg")

product2 = Product.create!({title: 'mug', description: 'ceramic mug', price: 20.00, seller_id: user2.id})

product2.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/mug.jpg"), filename: "2.jpg")

product3 = Product.create!({title: 'pillow', description: 'hand stitched pillow', price: 20.00, seller_id: user3.id})

product3.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/pillow.jpg"), filename: "3.jpg")

product4 = Product.create!({title: 'painting', description: 'painting of a pikachu', price: 20.00, seller_id: user4.id})

product4.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/painting.jpg"), filename: "4.jpg")

product5 = Product.create!({title: 'necklace', description: 'necklace with your initials', price: 20.00, seller_id: user5.id} )

product5.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/necklace.jpg"), filename: "5.jpg")