export interface Campaign {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  deadline: Date;
  imageUrl: string;
  category: string;
  creatorId: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  photoURL?: string;
}

export interface Donation {
  id: string;
  campaignId: string;
  userId: string;
  amount: number;
  createdAt: Date;
}