import './App.css';

import UserProfile from '../components/user-profile/user-profile';
import user from '../data/user-profile.json';

import Statistics from '../components/statistics/statistics';
import data from '../data/statistics.json';

import FriendList from '../components/friends/friendList';
import friends from '../data/friends.json';

import TransactionHistory from '../components/transactions/transactionHistory';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}
