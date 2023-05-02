import { connectDB } from '../../util/database.js';
import Test from '../../models/testModel.js';

export default async function readTest(req, res) {
    
    console.log('Connecting DB');
    await connectDB()
    console.log('Connected DB');

    console.log('Reading Document');
    const document = await Test.find();
    console.log('Complete Reading');

    res.json({ document });
}