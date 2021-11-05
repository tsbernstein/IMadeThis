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
Cart.destroy_all

demo = User.create!(email: 'Demo', password: 'password', first_name: 'Demo User');

user1 = User.create!({email: 'Tyler', password: '123456', first_name: 'Tyler'})
user2 = User.create!({email: 'Adam', password: '123456', first_name: 'Adam'})
user3 = User.create!({email: 'Phil', password: '123456', first_name: 'Phil'})
user4 = User.create!({email: 'Stephanie', password: '123456', first_name: 'Stephanie'})
user5 = User.create!({email: 'Tricksie', password: '123456', first_name: 'Tricksie'})

product1 = Product.create!({title: "20inch Pikachu Plush", description: "Hand made pikachu plush. 20 inches tall. Great for kids or decorating a gaming room!", price: 9.99, seller_id: user1.id})

product1.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/pikachu_plush.jpg"), filename: "1.jpg")

product2 = Product.create!({title: 'Hand Crafted Ceramic Mug', description: 'Hand crafted ceramic mug. Made on order. Choose customizations such as initials or images you would like printed on the side. Choose from many styles!', price: 5.49, seller_id: user2.id})

product2.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/mug.jpg"), filename: "2.jpg")

product3 = Product.create!({title: 'Hand Stitched Pillow', description: 'Hand stiched pillow. Choose the size and type of pillow you would like. Choose from one of many designs or message for request of a personal design', price: 10.00, seller_id: user3.id})

product3.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/pillow.jpg"), filename: "3.jpg")

product4 = Product.create!({title: 'Custom Painting', description: 'Choose from a painting template or message a request for a custom painting. Choose size.', price: 15.99, seller_id: user4.id})

product4.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/painting.jpg"), filename: "4.jpg")

product5 = Product.create!({title: 'Hand Crafted Necklace', description: 'Hand crafted necklace with you choice of charm. Select chain material and color.', price: 35.00, seller_id: user5.id} )

product5.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/necklace.jpg"), filename: "5.jpg")

product6 = Product.create!({title: 'Hand Crafted Ring', description: 'Hand made ring with your choice of metal and gemstone. Select size. Message about customization requests.', price: 49.99, seller_id: user1.id} )

product6.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/ring.jpg"), filename: "6.jpg")

product7 = Product.create!({title: 'Custom design Tshirt', description: 'Choose an image you want printed on the tshirt or submit a request for a personal design. Select size.', price: 10.99, seller_id: user2.id} )

product7.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/Shirt.jpg"), filename: "7.jpg")

product8 = Product.create!({title: 'Custom Wooden Sign', description: 'Hand made wooden sign with your choice of message. Choose a size!', price: 21.49, seller_id: user3.id} )

product8.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/Wood_sign.jpg"), filename: "8.jpg")

product9 = Product.create!({title: 'Ceramic Plant Pot', description: 'Hand made ceramic pots that you can place any plant in and watch it grow! Select a size!', price: 8.99, seller_id: user4.id} )

product9.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/plant.jpg"), filename: "9.jpg")

product10 = Product.create!({title: 'Hand Made Action Figure', description: 'Select one from many choices of hand made action figures. Select model below!', price: 10.00, seller_id: user5.id} )

product10.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/action_figure.jpg"), filename: "10.jpg")

product11 = Product.create!({title: 'Custom Designed Slippers', description: 'Be comfy at home with a pair of our custom desgined slippers. Choose your size and design!', price: 18.89, seller_id: user1.id} )

product11.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/slippers.jpg"), filename: "11.jpg")

product12 = Product.create!({title: 'Hand Made Watch', description: 'Select from one of our many styles of hand made watches. Be the most fashionable or just choose what you think suits you best!', price: 119.99, seller_id: user2.id} )

product12.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/watch.jpg"), filename: "12.jpg")

product13 = Product.create!({title: 'Stuffed Animal', description: 'Choose your favorite animal or request one special made! All products are hand made.', price: 15.00, seller_id: user3.id} )

product13.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/stuffed_animals.jpg"), filename: "13.jpg")

product14 = Product.create!({title: 'Custom Hand Made Braclets', description: 'Select the style of bracelet and how you would like it customized to fit you!', price: 25.49, seller_id: user4.id} )

product14.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/bracelet.jpg"), filename: "14.jpg")

product15 = Product.create!({title: 'Hand Made Wallet', description: 'Choose the type of material and style that fits you best. Request extra customizations like initals!', price: 59.99, seller_id: user5.id} )

product15.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/wallet.jpg"), filename: "15.jpg")

product16 = Product.create!({title: 'Sun Hat', description: 'Sun hat great for the Summer! Select size and color.', price: 25.00, seller_id: user1.id} )

product16.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/hat.jpg"), filename: "16.jpg")

product17 = Product.create!({title: 'Designer Lamp', description: 'Designer lamp to brighten any room! Choose color and size.', price: 29.99, seller_id: user2.id} )

product17.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/lamp.jpg"), filename: "17.jpg")

product18 = Product.create!({title: 'TV tray', description: 'TV tray great for the couch or hanging out in bed. Select color.', price: 10.99, seller_id: user3.id} )

product18.photo.attach(io: URI.open("https://imadethis-seeds.s3.us-east-2.amazonaws.com/tv-tray.jpg"), filename: "18.jpg")

demoCart = Cart.create!({user_id: demo.id, product_id: product1.id, quantity: 1})