import { Schema, model } from 'mongoose';

const journalSchema = new Schema({
  title: String,
  abstract: String,
  keywords: String,
  researchArea: String,
  file: String,
  messageToEditor: String,
  authorDetails: [
    {
      name: String,
      designation: String,
      organization: String,
      email: String,
      mobile: String,
      country: String,
      state: String,
      city: String,
      reviewerReferralId: String,
      postalCode: String,
    },
  ],
});

const Journal = model('Journal', journalSchema);

export default { Journal };
