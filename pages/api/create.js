import { connectDB } from '../../util/database.js';
import Test from '../../models/testModel.js';

export default async function createTest(req, res) {
    await connectDB();
    const test = await Test.create(req.body);
    console.log('CREATED DOCUMENT');
    res.status(200).json({ success : true , test });
}