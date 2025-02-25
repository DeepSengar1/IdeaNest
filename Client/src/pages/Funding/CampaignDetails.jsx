import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, Target } from 'lucide-react';

const DEMO_CAMPAIGN = {
  id: '1',
  title: 'CloudCV',
  description: 'About CloudCV CloudCV began in the summer of 2013 as a research project within the Machine Learning and Perception lab at Virginia Tech (now at Georgia Tech), with the ambitious goal of making platforms to make AI research more reproducible. We’re a young community working towards enabling developers, researchers, and fellow students to build, compare and share state-of-the-art Artificial Intelligence algorithms.',
  goalAmount: 50000,
  currentAmount: 32500,
  deadline: new Date('2024-05-01'),
  imageUrl: 'https://avatars.githubusercontent.com/u/20895851?s=200&v=4',
  category: 'Tech & Event',
  creatorId: '1',
  createdAt: new Date('2025-01-15')
};

const CampaignDetails = () => {
  const { id } = useParams();
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = async (e) => {
    e.preventDefault();
    // TODO: Implement Stripe payment
    console.log("Processing donation:", donationAmount);
  };  

  const campaign = DEMO_CAMPAIGN; // TODO: Fetch campaign by ID

  const daysLeft = Math.ceil(
    (new Date(campaign.deadline).getTime() - new Date().getTime()) /
    (1000 * 60 * 60 * 24)
  );

  const progress = (campaign.currentAmount / campaign.goalAmount) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{campaign.title}</h1>
            <div className="flex items-center space-x-4 text-gray-500">
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                {daysLeft} days left
              </span>
              <span>•</span>
              <span>{campaign.category}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-rose-500 h-4 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  ${campaign.currentAmount.toLocaleString()}
                </div>
                <div className="text-gray-500">raised of ${campaign.goalAmount.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{daysLeft}</div>
                <div className="text-gray-500">days left</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">147</div>
                <div className="text-gray-500">backers</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleDonate} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Donation Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                min="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                placeholder="Enter amount"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-3 px-4 rounded-md hover:bg-rose-600 transition-colors"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this campaign</h2>
        <div className="prose max-w-none">
          {campaign.description.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="h-8 w-8 text-rose-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Community Support</h3>
          <p className="text-gray-600">Join 147 others in supporting this cause</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Target className="h-8 w-8 text-rose-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Campaign Goal</h3>
          <p className="text-gray-600">${campaign.goalAmount.toLocaleString()} needed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Calendar className="h-8 w-8 text-rose-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Time Remaining</h3>
          <p className="text-gray-600">{daysLeft} days to reach our goal</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;