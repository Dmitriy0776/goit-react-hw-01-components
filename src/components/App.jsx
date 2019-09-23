import React from 'react';
import Profile from './socialProfile/SocialProfile';
import user from './socialProfile/statsList.json';
import StatsSection from './statsSection/StatsSection';
import stats from './statsSection/statsSectionJson.json';
import PricingPlan from './pricingPlan/PricingPlan';
import pricingPlanJson from './pricingPlan/pricingPlanJson.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

const App = () => (
  <>
    <Profile propUser={user} />

    <StatsSection stats={stats} />

    <PricingPlan items={pricingPlanJson} />

    <TransactionHistory items={transactions} />
  </>
);

export default App;
