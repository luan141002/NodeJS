const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Product = new Schema(
    {
        proName: { type: String, required: true },
        image: { type: String, required: true },
        brand: { type: String },
        desc: { type: String },
        slug: { type: String, slug: 'proName' },
    },
    {
        timestamps: true,
    }
);
mongoose.plugin(slug);
Product.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
module.exports = mongoose.model('Product', Product);
