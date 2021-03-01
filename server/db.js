//const uri = "mongodb+srv://userMain:<45eloquance*>@cluster0.3t63t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



const {MongoClient} = require('mongodb');
const MONGODB_URI = 'mongodb+srv://userMain:45eloquance*@cluster0.3t63t.mongodb.net/myFirstDatabase?retryWrites=true&writeConcern=majority';
const MONGODB_DB_NAME = 'ClearFashion';

async function debut(){
    try{
        const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
        const db = client.db(MONGODB_DB_NAME);

        const dedicatedbrand = require('./sources/dedicatedbrand');
        async function sandbox () {
            try {
                eshop = 'https://www.dedicatedbrand.com/en/men/news'

                const products = await dedicatedbrand.scrape(eshop);

                //console.log('done');
                return products
            } catch (e) {
                console.error(e);
                process.exit(1);
            }
        }

        const products= await sandbox();
        //console.log("quantity of products: ",products.length);


        async function input () {
            try{
                const collection = db.collection('products');
                const result = await collection.insertMany(products);

                console.log(result);
                console.log('inputs done')
            } catch(e){
                console.error(e);
                process.exit(1);
            }
        }

        async function q1 (){
            try{
                const brand = 'loom';

                const collection = db.collection('products');
                const query1 = await collection.find({brand}).toArray();
                console.log(`-- Products of the brand ${brand} --`)   
                console.log("q1",query1);
            }catch(e){
                console.error(e);
                process.exit(1);
            }
        }

        async function q2 (){
            try{
                const priceMax = 40;

                const collection = db.collection('products');
                const query1 = await collection.find({price: {$lt : priceMax}}).toArray();     
                console.log(`-- Products of a price under ${priceMax} --`);
                console.log(query1);
            }catch(e){
                console.error(e);
                process.exit(1);
            }
        }
        async function q3 (){
            try{
                const collection = db.collection('products');
                const query1 = await collection.find({}).sort({ price : -1}).toArray();     
                console.log(`-- Products sorted by price --`);
                console.log(query1);
            }catch(e){
                console.error(e);
                process.exit(1);
            }
        }
        //input();
        q1();
        q2();
        q3();
    } catch(e){
        console.error(e);
        process.exit(1);
    }
}

debut();

/*

const dedicatedbrand = require('./sources/dedicatedbrand');
async function sandbox () {
  try {
    eshop = 'https://www.dedicatedbrand.com/en/men/news'
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await dedicatedbrand.scrape(eshop);

    console.log(products);
    console.log('done');
    return products
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const products= await sandbox();
console.log(products);


const collection = db.collection('products');
const result = collection.insertMany(products);

console.log(result);
*/