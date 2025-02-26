import { useState } from 'react';

function BusinessUpgrade() {
  const [currentPlan, setCurrentPlan] = useState('basic');
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async (newPlan) => {
    try {
      setLoading(true);
      // Call your API endpoint
      // const response = await api.upgradePlan(newPlan);
      setCurrentPlan(newPlan);
    } catch (error) {
      console.error('Upgrade failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="business-upgrade">
      <h2>Business Plan: {currentPlan}</h2>
      <div className="upgrade-options">
        <button
          onClick={() => handleUpgrade('premium')}
          disabled={loading || currentPlan === 'premium'}
        >
          Upgrade to Premium
        </button>
        <button
          onClick={() => handleUpgrade('enterprise')}
          disabled={loading || currentPlan === 'enterprise'}
        >
          Upgrade to Enterprise
        </button>
      </div>
    </div>
  );
}

export default BusinessUpgrade;