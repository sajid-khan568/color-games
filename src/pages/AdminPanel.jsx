import { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import ManageUsers from '../components/admin/ManageUsers';
import AdminFeatures from '../components/admin/AdminFeatures';
import ManageRounds from '../components/admin/ManageRounds';
import ControlColors from '../components/admin/ControlColors';
import Transactions from '../components/admin/Transactions';
import ResultTimer from '../components/admin/ResultTimer';
import WithdrawRequests from '../components/admin/WithdrawRequests';



export default function AdminPanel() {
  const [active, setActive] = useState('users');

  const renderComponent = () => {
    switch (active) {
      case 'users':
        return <ManageUsers />;
      case 'rounds':
        return <ManageRounds />;
      case 'colors':
        return <ControlColors />;
      case 'transactions':
        return <Transactions />;
      case 'timer':
        return <ResultTimer />;
      case 'withdrawals':
        return <WithdrawRequests />;
      default:
        return <AdminFeatures />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row m-h-screen ">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 p-4 md:ml-52 overflow-y-auto transition-all duration-100">
        {renderComponent()}
      </main>
    </div>
  );
}
