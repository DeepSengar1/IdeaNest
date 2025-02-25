import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { supabase } from '.././lib/supabase'; 

const CATEGORIES = [
  'Arts & Culture',
  'Community',
  'Education',
  'Environment',
  'Health',
  'Technology',
  'Other'
];

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    deadline: '',
    imageUrl: '',
    category: ''
  });

const handleSubmit =  async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  try {
    const goalAmount = parseFloat(formData.goalAmount);
    if (isNaN(goalAmount) || goalAmount <= 0) {
      throw new Error("Goal amount must be a valid number greater than zero.");
    }

    const deadline = new Date(formData.deadline);
    if (isNaN(deadline.getTime())) {
      throw new Error("Please select a valid deadline.");
    }

    const { data, error: supabaseError } = await supabase
    .from('campaigns')
    .insert([
      {
        title: formData.title,
        description: formData.description,
        goal_amount: parseFloat(formData.goalAmount),
        deadline: new Date(formData.deadline).toISOString(),
        image_url: formData.imageUrl,
        category: formData.category
      }
    ])
    .select()
    .single();
  

    if (supabaseError) throw supabaseError;

    navigate(`/campaign/${data.id}`);
  } catch (err) {
    setError( "Failed to create campaign. Please try again.");
    console.error("Error creating campaign:", err);
  } finally {
    setIsSubmitting(false);
  }
};


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create a Campaign</h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
            placeholder="Give your campaign a compelling title"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
            placeholder="Describe your campaign and its goals"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="goalAmount" className="block text-sm font-medium text-gray-700 mb-1">
              Goal Amount ($)
            </label>
            <input
              type="number"
              id="goalAmount"
              name="goalAmount"
              value={formData.goalAmount}
              onChange={handleChange}
              required
              min="1"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder="5000"
            />
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Campaign Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Campaign'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;